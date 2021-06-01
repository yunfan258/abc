<template>
<div class="nearby">
    <h5 class="nearby__title">-- 扇贝热卖 --</h5>
    <router-link class="nearby__item" :to="{name: 'BookDetail'}">
      <img class="nearby__item__img" src="../../assets/home/saleBook1.png" alt="">
    </router-link>
    <router-link class="nearby__item" :to="{name: 'BookDetail'}">
      <img class="nearby__item__img" src="../../assets/home/saleBook2.png" alt="">
    </router-link>
    <router-link class="nearby__item" :to="{name: 'BookDetail'}">
      <img class="nearby__item__img" src="../../assets/home/saleBook3.png" alt="">
    </router-link>
</div>
</template>

<script>
// import { ref } from 'vue'
// import { get } from '../../utils/request.js'
// import ShopInfo from '../../components/ShopInfo'
// const useNearbyListEffect = () => {
//   const nearbyList = ref([])
//   const getNearbyList = async () => {
//     const result = await get('/api/shop/hot-list')
//     if (result?.errno === 0 && result?.data?.length) {
//       nearbyList.value = result.data
//     }
//   }
//   return { nearbyList, getNearbyList }
// }

export default {
  name: 'Nearby',
  // components: { ShopInfo },
  setup () {
    // const { nearbyList, getNearbyList } = useNearbyListEffect()
    // getNearbyList()
    // const { data, getNearbyData } = useGetDataEffect()
    // getNearbyData()
    // return { data, getNearbyData }
    return { }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby {
  a:visited{
    color: $content-fontcolor;
  }
  &__title {
    margin: .16rem 0 .16rem 0;
    font-size: .14rem;
    text-align: center;
    font-weight: normal;
    color: $light-fontColor;
  }
  .nearby__item{
    display: inline-block;
    width: 33.3%;
    text-align: center;
    .nearby__item__img{
      height: 1.2rem;
      padding-bottom: 150/127%;
      &__img{
        width: 100%;
      }
    }
  }
}

</style>
