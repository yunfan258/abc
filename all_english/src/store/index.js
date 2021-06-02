import { createStore } from 'vuex'
// 从本地存储里面存数据
const setLocalWordList = (state) => {
  const { wordList } = state
  localStorage.wordList = JSON.stringify(wordList)
}
// 从本地存储里面取数据
const getLocalWordList = () => {
  const wordList = localStorage.wordList || JSON.stringify({
    totalList: [],
    oldList: [],
    newList: [],
    newAndOld: {},
    currentId: 0,
    learnTime: 0,
    lastTime: 0,
    totalListLen: 0
  })
  return JSON.parse(wordList)
}

export default createStore({
  state: {
    // wordList: {
    //   totalList: [
    //   {english:
    //   wordSex:
    //   chinese:}
    // ],
    //   oldList: [],
    //   newList: [],
    //   currentId: 0
    // }
    wordList: getLocalWordList() || {}
  },
  mutations: {
    // 改变购物车产品的信息
    changeTotalList (state, payload) {
      const { totalList } = payload
      state.wordList.totalList = totalList
      setLocalWordList(state)
    },
    changeCurrentList (state, payload) {
      const { currentId } = payload
      state.wordList.currentId = currentId
      setLocalWordList(state)
    },
    changeNewAndOld (state, payload) {
      const { newAndOld } = payload
      state.wordList.newAndOld = newAndOld
      setLocalWordList(state)
    },
    addCurrentItem (state, payload) {
      const { currentId } = payload
      const { oldList, newList } = state.wordList
      if (currentId < 150) {
        if (oldList.indexOf(currentId) === -1) {
          state.wordList.oldList.unshift(currentId)
          state.wordList.newAndOld.old--
          state.wordList.newAndOld.notLearn--
        }
      } else {
        if (newList.indexOf(currentId) === -1) {
          state.wordList.oldList.unshift(currentId)
          state.wordList.newAndOld.fresh--
          state.wordList.newAndOld.notLearn--
        }
      }
      setLocalWordList(state)
    },
    changeLearnTime (state, payload) {
      const { learnTime } = payload
      state.wordList.learnTime += learnTime
      setLocalWordList(state)
    },
    changeLastTime (state, payload) {
      const { lastTime } = payload
      state.wordList.lastTime = lastTime
      setLocalWordList(state)
    },
    changeTotalListLen (state, payload) {
      const { totalListLen } = payload
      state.wordList.totalListLen = totalListLen
      setLocalWordList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
