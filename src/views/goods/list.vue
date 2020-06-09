<template>
  <div class="list">
    <search></search>
    <div class="list-stat">
      <div class="stat-item"
        v-for="(stat,index) in statList"
        :class="currentStat === index?'active':''"
        :key="index"
        @click="selectStat(index)">{{stat}}</div>
    </div>
    <div class="list-wrap">
      <loading :showLoading="showLoading"></loading>
      <div class="item" v-for="good in goodsList" :key="good.id" @click="toInfo(good.id)">
        <div class="img"><img :src="good.img" /></div>
        <div class="cont">
          <div class="title">{{ good.title }}</div>
          <div class="desc"><p>{{ good.desc }}</p></div>
          <div class="price"><span>￥</span><span class="price-num">{{good.price}}</span></div>
          <div class="extar">
            <span class="num">销量：{{ good.num }}</span>
            <span class="address">{{ good.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from 'components/search';
import loading from 'components/loading';
import { goodsList } from 'request/api/goods';
export default {
  data () {
    return {
      statList: ['品质优先 ^', '销量 ^', '价格 ^'],
      currentStat: 0,
      goodsList: [],
      showLoading: false
    }
  },
  components: {
    search,
    loading
  },
  created () {
    this._goodsList();
  },
  methods: {
    _goodsList () {
      this.showLoading = true
      let query = this.$router.query;
      goodsList(JSON.stringify(query)).then(res => {
        this.goodsList = res.data.list
        this.showLoading = false
      })
    },
    toInfo (id) {
      let info = ''
      for (let i = 0; i < this.goodsList.length; i++) {
        if (this.goodsList[i]['id'] === id) {
          info = JSON.stringify(this.goodsList[i])
        }
      }
      this.$router.push({ path: '/goods/info', query: { id: id, info: info } })
    },
    selectStat (index) {
      this.currentStat = index
      this._goodsList();
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/base/variable';
.list{
  .list-stat{
    height: 36px;
    line-height: 36px;
    display: flex;
    flex-direction: row;
    text-align: center;
    border-bottom: 1px solid #efefef;
    .stat-item{
      flex: 1;
      &.active{
        color: $color-sub-theme;
      }
    }
    .stat-item:nth-of-type(2){
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
    }
  }
  .list-wrap{
    padding: 15px;
    .item{
      display: flex;
      flex-direction: row;
      padding-bottom: 15px;
      .img{
        width: 120px;
        margin-right: 15px;
        img{
          width: 100%;
        }
      }
      .cont{
        flex: 1;
        min-width: 1px;
        .title{
          font-size: 14px;
          margin-bottom: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .desc p{
          width: 100%;
          font-size: 12px;
          color: #666;
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price{
          color: #e93b3d;
          font-size: 11px;
          margin-bottom: 8px;
          .price-num{
            font-size: 18px;
          }
        }
        .extar{
          display: flex;
          align-items: center;
          justify-items: center;
          justify-content: space-between;
          span{
            display: inline-block;
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
