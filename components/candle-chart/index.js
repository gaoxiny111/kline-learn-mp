Component({
  properties: {
    candles: { type: Array, value: [] },
    highlight: { type: Object, value: null },
    showAnswer: { type: Boolean, value: false },
    colorScheme: { type: String, value: 'cn' },
  },
  data: {},
  lifetimes: {
    ready() {
      this.initCanvas()
    },
  },
  observers: {
    'candles, highlight, showAnswer, colorScheme'() {
      this.draw()
    },
  },
  methods: {
    initCanvas() {
      const q = this.createSelectorQuery()
      q.select('#k')
        .fields({ node: true, size: true })
        .exec((res) => {
          const hit = res && res[0]
          if (!hit || !hit.node) return
          const dpr = (wx.getWindowInfo && wx.getWindowInfo().pixelRatio) || 2
          const node = hit.node
          node.width = hit.width * dpr
          node.height = hit.height * dpr
          const ctx = node.getContext('2d')
          ctx.scale(dpr, dpr)
          this._ctx = ctx
          this._w = hit.width
          this._h = hit.height
          this.draw()
        })
    },
    draw() {
      const ctx = this._ctx
      const w = this._w
      const h = this._h
      const candles = this.properties.candles || []
      if (!ctx || !w || !h || !candles.length) return

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, w, h)

      let min = Infinity
      let max = -Infinity
      for (const c of candles) {
        min = Math.min(min, c.low)
        max = Math.max(max, c.high)
      }
      const pad = (max - min) * 0.08 || 1
      min -= pad
      max += pad
      const span = max - min || 1
      const left = 8
      const right = 8
      const top = 10
      const bottom = 10
      const cw = (w - left - right) / candles.length
      const yOf = (price) => top + ((max - price) / span) * (h - top - bottom)
      const cn = this.properties.colorScheme !== 'us'
      const up = cn ? '#e35d5d' : '#25a86b'
      const down = cn ? '#25a86b' : '#e35d5d'

      const hl = this.properties.showAnswer ? this.properties.highlight : null
      if (hl && hl.start != null && hl.end != null) {
        const a = Math.min(hl.start, hl.end)
        const b = Math.max(hl.start, hl.end)
        ctx.fillStyle = 'rgba(47,124,246,0.12)'
        ctx.fillRect(left + a * cw, top, (b - a + 1) * cw, h - top - bottom)
      }

      for (let i = 0; i < candles.length; i++) {
        const c = candles[i]
        const x = left + (i + 0.5) * cw
        const bull = c.close >= c.open
        ctx.strokeStyle = bull ? up : down
        ctx.fillStyle = bull ? up : down
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x, yOf(c.high))
        ctx.lineTo(x, yOf(c.low))
        ctx.stroke()
        const bodyTop = yOf(Math.max(c.open, c.close))
        const bodyBot = yOf(Math.min(c.open, c.close))
        const bw = Math.max(cw * 0.62, 1.5)
        const bh = Math.max(bodyBot - bodyTop, 1)
        ctx.fillRect(x - bw / 2, bodyTop, bw, bh)
      }
    },
  },
})
