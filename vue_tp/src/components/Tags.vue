<template>
  <el-tabs class="tags" v-model="activeName">
    <el-tab-pane class="itemList1" :label="name0?name0:'经验贴'" name="first">
        <div class="item" v-for="item in itemList" :key="item">
        <router-link :to="`/article/${item?.id}`">
          <div class="item__title">#{{item.title}}#</div>
          <div class="item__content">{{item.content}}</div>
          <div class="item__bottom">
            <span class="item__bottom__username">作者：{{item.username}}</span>
            <span class="item__bottom__time">发表时间：{{item.time}}</span>
          </div>
        </router-link>

        </div>
    </el-tab-pane>
    <el-tab-pane :label="name1?name1:'未开发'" name="second">未开发</el-tab-pane>
    <el-tab-pane :label="name2?name2:'未开发'" name="third">未开发</el-tab-pane>
    <el-tab-pane :label="name3?name3:'未开发'" name="fourth">未开发</el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from 'vue'
const activeName = ref('first')

export default {
  name: 'Tags',
  props: ['itemList', 'name0', 'name1', 'name2', 'name3'],
  components: {},
  setup () {
    return { activeName }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.itemList1{
  .item{
    @include boxShadow;
    padding: .1rem;
    cursor: pointer;
    &__title,&__content,&__time{
      margin: .1rem 0;
    }
    &__title{
      color: $mostColor;
    }
    &__content{
      @include ellipsis;
    }
    &__bottom{
      display: flex;
      align-content: space-around;
      &__username,&__time{
        color: #999;
        font-size: .14rem;
        flex:1;
      }
    }
  }
  .item:hover{
    padding: .1rem;
    border: 0.01rem solid $mostColor;
  }
}
</style>
