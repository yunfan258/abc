<template>
  <div class="top">
      <div class="top__english">
          <div class="top__english__icon">
              <span class="iconfont"></span>
          </div>
          <div class="top__english__text">
              <div class="english__text1">intergral</div>
              <div class="english__text2">英['standard]</div>
          </div>
          <div class="top__english__icon">
              <span class="iconfont">&#xe600;</span>
          </div>
      </div>
      <div class="top__chinese">
          <div class="top__chinese__text">
              <div class="chinese__text1">adj:构成整体所必须的；完整的；积分的</div>
              <div class="chinese__text2">n:积分；整体</div>
          </div>
          <div class="top__chinese__icon">
              <span class="iconfont">&#xe601;</span>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TopArea'
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variables.scss';
.top{
    &__english{
        display: flex;
        background:linear-gradient($linearColor1 10%,$linearColor2);
        padding: .1rem;
        font-size: .16rem;
        border-bottom: .01rem solid #fff;

        &__icon{
            text-align: center;
            width: .3rem;
            line-height: .5rem;
            .iconfont{
                font-size: .24rem;
            }
        }
        &__text{
            text-align: center;
            margin: 0 auto;
            .english__text1{
                margin-bottom: .1rem;
                font-size: .2rem;

            }
        }
    }
    &__chinese{
        display: flex;
        background:linear-gradient($linearColor2 10%,$linearColor3);
        padding: .1rem;
        font-size: .16rem;
        border-bottom: .01rem solid #fff;
        &__text{
            margin-right: auto;
            .chinese__text1{
                margin-bottom: .1rem;
            }
        }
        &__icon{
            text-align: center;
            width: .3rem;
            .iconfont{
                font-size: .16rem;
            }
        }
    }
}
</style>
