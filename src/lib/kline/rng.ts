/** Mulberry32 seeded PRNG */
export function createRng(seed: number) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

export function randBetween(rng: () => number, min: number, max: number) {
  return min + rng() * (max - min)
}

export function randInt(rng: () => number, min: number, max: number) {
  return Math.floor(randBetween(rng, min, max + 1))
}
