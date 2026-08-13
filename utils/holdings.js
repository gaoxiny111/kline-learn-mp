const { get, set } = require('./storage')

const KEY = 'kline-learn-holdings-v1'

function list() {
  const data = get(KEY, { items: [] })
  return Array.isArray(data.items) ? data.items : []
}

function persist(items) {
  set(KEY, { items })
}

function add(item) {
  const items = list().filter((x) => x.symbolId !== item.symbolId)
  items.unshift({
    id: item.symbolId,
    symbolId: item.symbolId,
    name: item.name || item.symbolId,
    qty: item.qty == null ? null : Number(item.qty),
    cost: item.cost == null ? null : Number(item.cost),
    addedAt: Date.now(),
  })
  persist(items)
  return items
}

function update(id, patch) {
  const items = list().map((x) => (x.id === id || x.symbolId === id ? { ...x, ...patch } : x))
  persist(items)
  return items
}

function remove(id) {
  const items = list().filter((x) => x.id !== id && x.symbolId !== id)
  persist(items)
  return items
}

module.exports = { list, add, update, remove }
