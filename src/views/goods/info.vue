<template>
  <div class="info">
    <div class="banner">
      <swiper :slides="goodsInfo.banner"></swiper>
    </div>
    <div class="info">
      <div class="price">
        <div class="left">
          <p class="tit"><span>￥</span>{{goodsInfo.price}}</p>
        </div>
        <div class="right">
          <p><span class="iconfont icon-not-favorite"></span></p>
          <p>收藏</p>
        </div>
      </div>
      <div class="title">
        <h3 class="tit">{{goodsInfo.title}}</h3>
        <p class="desc">{{goodsInfo.desc}}</p>
      </div>
      <div class="amount">
        <span>销量：{{goodsInfo.num}}</span>
        <span>{{goodsInfo.address}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { goodsInfo } from 'request/api/goods'
import swiper from 'components/swiper';

export default {
  data () {
    return {
      goodsInfo: []
    }
  },
  components: {
    swiper
  },
  created () {
    let id = this.$route.query.id
    goodsInfo({ id: id }).then(res => {
      console.log(res)
      this.goodsInfo = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.info{
  padding:15px;
}
</style>
