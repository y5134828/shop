<template>
  <div class="container">
    <div class="banner">
      <swiper :slides="goodsInfo.banner"></swiper>
    </div>
    <div class="info">
      <div class="price">
        <div class="left">
          <p class="tit"><span>￥</span>{{goodsInfo.price}}</p>
        </div>
        <div class="right" :class="favorite?'active':''" @click="changFavorites">
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
import { mapActions, mapGetters } from 'vuex';

export default {
  data () {
    return {
      goodsInfo: []
    }
  },
  components: {
    swiper
  },
  computed: {
    ...mapGetters([
      'favorite'
    ])
  },
  created () {
    let id = this.$route.query.id
    goodsInfo({ id: id }).then(res => {
      console.log(res)
      if (res.code === 1) {
        this.goodsInfo = res.data
        if (res.data.favorite) {
          this.setFavoite()
        }
      }
    })
  },
  methods: {
    changFavorites () {
      this.changeFavorite({ id: this.goodsInfo.id, favorite: this.favorite }).then(() => {
        let msg = this.goodsInfo.favorite ? '取消' : '添加'
        alert(msg + '收藏成功')
      }).catch(ret => {
        alert(ret)
      })
    },
    ...mapActions([
      'setFavoite',
      'changeFavorite'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/base/variable';

.info{
  .price{
    padding: 10px 15px ;
    display: flex;
    justify-content: space-between;
    .left{
      font-size: 32px;
      color: #e93b3d;
      span{
        font-size: 16px;
        display: inline-block;
        margin-right: 2px;
      }
    }
    .right{
      text-align: center;
      font-size: 14px;
      &.active{
        color: $color-sub-theme;
      }
    }
  }
  .title{
    padding:10px 15px;
    border-top: 1px solid #efefef;
    line-height: 1.4;
    .tit{
      font-size: 16px;
    }
    .desc{
      color: #666;
      margin-top: 10px;
    }
  }
}
</style>
