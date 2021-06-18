import { createStore } from 'vuex'
// 从本地存储里面存数据
const setLocalStorage = (state) => {
  const { vueTp } = state
  localStorage.vueTp = JSON.stringify(vueTp || {
    username: ''
  })
}
// 从本地存储里面取数据
const getLocalStorage = () => {
  const vueTp = localStorage.vueTp || JSON.stringify({
    username: ''
  })
  return JSON.parse(vueTp)
}
export default createStore({
  state: {
    vueTp: getLocalStorage()
  },
  mutations: {
    changeUsername (state, payload) {
      const { username } = payload
      state.vueTp.username = username
      setLocalStorage(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
