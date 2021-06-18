<template>
  <div class="english">
    <Main :itemList1="itemList1" :itemList2="itemList2" />
    <Aside />
  </div>
</template>

<script>
import Main from '../../components/Main.vue'
import Aside from '../../components/Aside.vue'
const itemList1 = [
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' }

]
const itemList2 = [
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' },
  { name: '四六级对于考研、找工作有何影' }

]
export default {
  name: 'English',
  components: { Main, Aside },
  setup () {
    return { itemList1, itemList2 }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.english{
  margin: .1rem;
  display: flex;
}
.left{
  &__main{
    padding: 0 .2rem;
    &__title{
      font-size: .2rem;
      padding: .1rem;
      text-align: center;
      background-color: $mostColor;
      color: #fff;
      opacity: 0.5;
    }
    &__tag{
      margin: .2rem 0;
    }
    &__item{
      width: 40%;
      font-size: .14rem;
      margin: .1rem;
    }
  }
}
</style>
