const width=document.documentElement.clientWidth||document.body.clientWidth;const ratio=width/375;document.querySelector("html").style.fontSize=100*ratio+"px";
const wordList = []
for (let i=0; i<words.length; i++) {
  wordList.push({ english: words[i], wordSex: wordSex[i], chinese: values[i] });
};

const vm = Vue.createApp({
  data() {
    return {
      list: wordList,
      oldListNum: JSON.parse(localStorage.array || JSON.stringify({ oldListNum: [], newListNum: [] })).oldListNum,
      newListNum: JSON.parse(localStorage.array || JSON.stringify({ oldListNum: [], newListNum: [] })).newListNum,
      showId: JSON.parse(localStorage.details || JSON.stringify({ old: 0, new: 0, time: 0, showId: 0 }))?.showId || 0,
      showChinese: false,
      oldDate: 0,
      timer: '',
      timer2: '',
      details: JSON.parse(localStorage.details || JSON.stringify({ old: 0, new: 0, time: 0, showId: 0 }))
    }
  },
  props: [],
  components: {},
  watch: {
    showId(current, prev) {
      const myDate = new Date()
      this.details.time = myDate.getMinutes() - this.oldDate
      localStorage.details = JSON.stringify(this.details)
      localStorage.array = JSON.stringify({ oldListNum: this.oldListNum, newListNum: this.newListNum })
    }

  },
  computed: {

  },
  methods: {
    preWord() {
      clearTimeout(this.timer)
      this.showChinese = false
      this.timer = setTimeout(() => {
        this.showChinese = true
      }, 5000)
      if (this.newListNum.indexOf(this.showId) === -1) {
        this.details.new++
        this.newListNum.push(this.showId)
      }
      this.showId > 0 ? this.showId-- : this.showId = 0

      this.details.showId = this.showId
    },
    nextWord() {
      clearTimeout(this.timer)
      this.showChinese = false
      this.timer = setTimeout(() => {
        this.showChinese = true
      }, 5000)
      if (this.newListNum.indexOf(this.showId) === -1) {
        this.details.new++
        this.newListNum.push(this.showId)
      }
      this.showId < this.list.length - 1 ? this.showId++ : this.showId = this.list.length - 1

      this.details.showId = this.showId

    },
    handleLoading() {
      this.showChinese = true

    }
  },
  mounted() {
    const myDate = new Date()
    this.oldDate = myDate.getMinutes()
    this.timer = setTimeout(() => {
      this.showChinese = true
    }, 5000)
  },
  template: `
  <div>
    <div class="header">
      <div class="icons">
        <img src="./imgs/icons/back.png" class="icon1">
        <img src="./imgs/icons/search.png" class="icon2">
      </div>
      <div class="imformation">
        <div class="item">
          <div class="detail">今日复习</div>
          <div>{{this.details.old}}/150</div>
        </div>
        <div class="item">
          <div class="detail">今日新词</div>
          <div>{{this.details.new}}/50</div>  
        </div>
        <div class="item">
          <div class="detail">学习时间</div>
          <div>{{this.details.time}}/min</div>
        </div>
      </div>
    </div>

    <ul>
      <template v-for="(item,index) of list">
        <li v-if="showId===index">
          <div class="english">{{item.english}}</div>
          <div class="chinese" v-show="showChinese">{{item.wordSex}}{{item.chinese}}</div>
          <div class="loading" v-show="!showChinese" @click="handleLoading"></div>
        </li>
      </template>
    </ul>
    <div class="btns">
      <button @click="preWord">上一个</button>
      <button @click="nextWord">下一个</button>
    </div>
  </div>
  `
})
vm.mount('#root')