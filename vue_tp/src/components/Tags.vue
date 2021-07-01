<template>
  <el-tabs class="tags" v-model="activeName">
    <template v-for="(items,index) in itemList" :key="index">
      <el-tab-pane :label="labelList[index]" :name="index.toString()">
        <div class="item" v-for="item in items" :key="item">
          <router-link :to="`/article/${item?.id}`">
            <div class="item__title">#{{item.title}}#</div>
            <div class="item__content">{{item.content}}</div>
            <div class="item__bottom">
              <span class="item__bottom__username">作者：{{item.username}}</span>
              <span class="item__bottom__time">发表时间：{{item.time}}</span>
            </div>
          </router-link>
        </div>
        <div v-show="!items.length">现在还没有相关贴子哦！</div>
      </el-tab-pane>
    </template>

  </el-tabs>
</template>

<script>
import { ref } from 'vue'
const activeName = ref('0')
// const labelList = ['经验贴', '点赞贴', '评论贴', '收藏贴']
export default {
  name: 'Tags',
  props: ['itemList', 'labelList'],
  components: { },
  setup (props) {
    if (props.itemList.length <= activeName.value) {
      activeName.value = (props.itemList.length - 1).toString()
    }
    return { activeName }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixins.scss';
@import '../style/variables.scss';
.tags{
  @include boxShadow;
  padding: .2rem;
  min-height: 5.4rem;
}
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
  background-color: #fff;
  border-left: .01rem solid $mostColor;
  border-right: .01rem solid $mostColor;
  position: relative;

}
</style>
