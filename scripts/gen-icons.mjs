import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'images')
mkdirSync(outDir, { recursive: true })

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const t = Buffer.from(type)
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])))
  return Buffer.concat([len, t, data, crc])
}

function encodePNG(width, height, rgba) {
  const stride = width * 4 + 1
  const raw = Buffer.alloc(stride * height)
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      const o = y * stride + 1 + x * 4
      raw[o] = rgba[i]
      raw[o + 1] = rgba[i + 1]
      raw[o + 2] = rgba[i + 2]
      raw[o + 3] = rgba[i + 3]
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function makeCanvas(size) {
  const rgba = Buffer.alloc(size * size * 4)
  const set = (x, y, r, g, b, a = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return
    const i = (y * size + x) * 4
    rgba[i] = r
    rgba[i + 1] = g
    rgba[i + 2] = b
    rgba[i + 3] = a
  }
  const circle = (cx, cy, rad, rgb, fill) => {
    const r2 = rad * rad
    const inner = (rad - (fill ? 0 : 3)) * (rad - (fill ? 0 : 3))
    for (let y = Math.floor(cy - rad); y <= cy + rad; y++) {
      for (let x = Math.floor(cx - rad); x <= cx + rad; x++) {
        const d = (x - cx) * (x - cx) + (y - cy) * (y - cy)
        if (d <= r2 && (fill || d >= inner)) set(x, y, rgb[0], rgb[1], rgb[2])
      }
    }
  }
  const rect = (x0, y0, w, h, rgb) => {
    for (let y = y0; y < y0 + h; y++) {
      for (let x = x0; x < x0 + w; x++) set(x, y, rgb[0], rgb[1], rgb[2])
    }
  }
  const line = (x0, y0, x1, y1, rgb, w = 3) => {
    const dx = x1 - x0
    const dy = y1 - y0
    const n = Math.max(Math.abs(dx), Math.abs(dy), 1)
    for (let i = 0; i <= n; i++) {
      const x = Math.round(x0 + (dx * i) / n)
      const y = Math.round(y0 + (dy * i) / n)
      for (let oy = -Math.floor(w / 2); oy <= Math.floor(w / 2); oy++) {
        for (let ox = -Math.floor(w / 2); ox <= Math.floor(w / 2); ox++) {
          set(x + ox, y + oy, rgb[0], rgb[1], rgb[2])
        }
      }
    }
  }
  return { rgba, set, circle, rect, line, png: () => encodePNG(size, size, rgba) }
}

function hex(c) {
  return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]
}

const SIZE = 81
const off = hex('#7a8ea3')
const on = hex('#2f7cf6')

function drawHoldings(rgb) {
  const c = makeCanvas(SIZE)
  c.circle(40, 40, 22, rgb, false)
  c.circle(40, 40, 8, rgb, true)
  c.rect(38, 18, 5, 10, rgb)
  return c.png()
}
function drawMarket(rgb) {
  const c = makeCanvas(SIZE)
  c.rect(18, 44, 10, 20, rgb)
  c.rect(36, 28, 10, 36, rgb)
  c.rect(54, 18, 10, 46, rgb)
  return c.png()
}
function drawWatch(rgb) {
  const c = makeCanvas(SIZE)
  const pts = [
    [40, 16],
    [48, 32],
    [66, 34],
    [52, 46],
    [56, 64],
    [40, 54],
    [24, 64],
    [28, 46],
    [14, 34],
    [32, 32],
  ]
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i]
    const b = pts[(i + 1) % pts.length]
    c.line(a[0], a[1], b[0], b[1], rgb, 3)
  }
  return c.png()
}
function drawLearn(rgb) {
  const c = makeCanvas(SIZE)
  c.rect(20, 22, 42, 40, rgb)
  for (let x = 22; x < 60; x++) {
    for (let y = 24; y < 60; y++) {
      if (x > 22 && x < 60 && y > 24 && y < 60) {
        /* hollow-ish via inner wipe */
      }
    }
  }
  const inner = makeCanvas(SIZE)
  inner.rect(20, 22, 42, 40, rgb)
  for (let y = 26; y < 58; y++) {
    for (let x = 24; x < 58; x++) inner.set(x, y, 0, 0, 0, 0)
  }
  inner.rect(38, 22, 4, 40, rgb)
  inner.line(26, 32, 36, 32, rgb, 2)
  inner.line(26, 40, 36, 40, rgb, 2)
  inner.line(46, 32, 56, 32, rgb, 2)
  inner.line(46, 40, 56, 40, rgb, 2)
  return inner.png()
}
function drawMe(rgb) {
  const c = makeCanvas(SIZE)
  c.circle(40, 28, 12, rgb, true)
  for (let y = 46; y < 66; y++) {
    for (let x = 18; x < 63; x++) {
      const dx = x - 40
      const dy = y - 66
      if (dx * dx + dy * dy < 24 * 24 && y >= 46) c.set(x, y, rgb[0], rgb[1], rgb[2])
    }
  }
  return c.png()
}

const icons = {
  'tab-holdings.png': drawHoldings(off),
  'tab-holdings-on.png': drawHoldings(on),
  'tab-market.png': drawMarket(off),
  'tab-market-on.png': drawMarket(on),
  'tab-watch.png': drawWatch(off),
  'tab-watch-on.png': drawWatch(on),
  'tab-learn.png': drawLearn(off),
  'tab-learn-on.png': drawLearn(on),
  'tab-me.png': drawMe(off),
  'tab-me-on.png': drawMe(on),
}

for (const [name, buf] of Object.entries(icons)) {
  writeFileSync(path.join(outDir, name), buf)
  console.log('wrote', name)
}
