const { get, set } = require('./storage')

const KEY = 'kline-learn-watchlist-v1'

function load() {
  const data = get(KEY, { ids: [], names: {} })
  return {
    ids: Array.isArray(data.ids) ? data.ids : [],
    names: data.names && typeof data.names === 'object' ? data.names : {},
  }
}

function persist(state) {
  set(KEY, state)
}

function list() {
  const { ids, names } = load()
  return ids.map((id) => ({ id, name: names[id] || id }))
}

function has(id) {
  return load().ids.includes(id)
}

function toggle(id, name) {
  const state = load()
  const i = state.ids.indexOf(id)
  if (i >= 0) {
    state.ids.splice(i, 1)
    delete state.names[id]
  } else {
    state.ids.unshift(id)
    state.names[id] = name || id
  }
  persist(state)
  return list()
}

function add(id, name) {
  const state = load()
  if (!state.ids.includes(id)) state.ids.unshift(id)
  state.names[id] = name || id
  persist(state)
  return list()
}

function remove(id) {
  const state = load()
  state.ids = state.ids.filter((x) => x !== id)
  delete state.names[id]
  persist(state)
  return list()
}

module.exports = { list, has, toggle, add, remove }
