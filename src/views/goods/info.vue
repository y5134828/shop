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
    <div class="bottom">
      <div class="item flex1" @click="joinCar">
        <span class="iconfont icon-qicheqianlian-"></span>
        <span>购物车</span>
      </div>
      <div class="item flex3">
        <span>立即购买</span>
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
      'favorite',
      'goodsCar'
    ])
  },
  created () {
    let id = this.$route.query.id
    goodsInfo({ id: id }).then(res => {
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
    joinCar () {
      let goodsCar = JSON.parse(JSON.stringify(this.goodsCar))
      let hasJoin = false
      let goods = {
        id: this.$route.query.id,
        num: 1
      }
      goodsCar.forEach(row => {
        if (row.id && row.id === this.$route.query.id) {
          hasJoin = true
          row.num += 1
        }
      });
      if (!hasJoin) goodsCar.push(goods)
      this.changeCar(goodsCar).then((res) => {
        alert('加入购物车成功')
      }).catch(ret => {
        alert(ret.message)
      })
    },
    ...mapActions([
      'changeCar',
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
  .amount{
    display: flex;
    justify-content: space-between;
    padding:0px 15px 10px;
    border-bottom: 1px solid #efefef;
  }
}
.bottom{
  position: fixed;
  display: flex;
  height: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  .flex1{
    flex: 1;
    display: flex;
    flex-direction:column;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: #e93b3d;
    .iconfont{
      font-size: 18px;
    }
  }
  .flex3{
    flex: 3;
    line-height: 44px;
    background-color: #e93b3d;
    color: #FFF;
  }
}
</style>
