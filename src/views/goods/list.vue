<template>
  <div class="list">
    <search></search>
    <div class="list-stat">
      <div class="stat-item active">品质优先 ^</div>
      <div class="stat-item">销量 ^</div>
      <div class="stat-item">价格 ^</div>
    </div>
    <div class="list-wrap">
      <div class="item">

      </div>
    </div>
  </div>
</template>

<script>
import search from 'components/search';
import { goodsList } from 'request/api/goods'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  components: {
    search
  },
  created () {
    let query = this.$router.query;
    goodsList(JSON.stringify(query)).then(res => {
      this.goodsList = res.data.list
    })
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
}
</style>
