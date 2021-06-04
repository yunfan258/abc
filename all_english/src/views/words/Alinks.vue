<template>
<div class="choiceFns">
    <router-link :to="{name:'Words'}">
    <div class="chooseChinese">知英想中</div>
    </router-link>
    <router-link :to="{name:'Words_2'}">
    <div class="chooseEnglish">知中想英</div>
    </router-link>
    <router-link :to="{name:'Words_3_spell'}">
    <div class="chooseSpell">拼写模式</div>
    </router-link>
</div>
</template>

<script>
export default {
  name: 'Alinks',
  components: { },
  setup () {
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.choiceFns{
  display: flex;
  position: absolute;
  left: 50%;
  top: 1.3rem;
  transform: translate(-50%,0);
  text-align: center;
  color: #fff;
  width: 100%;
  & a{
    flex: 1;
    color: #999;
    border-radius: .2rem;
    padding: .04rem;
    background-color: #f9f9f9;
    margin: 0 .22rem;

  }
}
</style>
