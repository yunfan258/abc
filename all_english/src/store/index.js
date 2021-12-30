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
    pamphlet: [],
    currentId: 0,
    learnTime: 0,
    lastTime: 0,
    totalListLen: 0,
    dayPlan: 1,
    myList: []
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
    // 改变单词列表的信息
    changeTotalList (state, payload) {
      const { totalList } = payload
      state.wordList.totalList = totalList
      setLocalWordList(state)
    },
    changecurrentId (state, payload) {
      const { currentId } = payload
      state.wordList.currentId = currentId
      setLocalWordList(state)
    },
    changeOldList (state, payload) {
      const { oldList } = payload
      state.wordList.oldList = oldList
      setLocalWordList(state)
    },
    changeNewList (state, payload) {
      const { newList } = payload
      state.wordList.newList = newList
      setLocalWordList(state)
    },
    changePamphlet (state, payload) {
      const { currentId } = payload
      if (state.wordList.pamphlet.indexOf(currentId) === -1) {
        state.wordList.pamphlet.unshift(currentId)
      }
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
      } else if (currentId < state.wordList.totalListLen) {
        if (newList.indexOf(currentId) === -1) {
          state.wordList.newList.unshift(currentId)
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
    },
    changeDayPlan (state, payload) {
      const { dayPlan } = payload
      state.wordList.dayPlan = dayPlan
      setLocalWordList(state)
    },
    // 改变话题列表
    changeMyList (state, payload) {
      const { myList } = payload
      state.wordList.myList = myList
      setLocalWordList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
