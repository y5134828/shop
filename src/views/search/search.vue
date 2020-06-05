<template>
  <div class="search">
    <div class="search-top">
      <div class="left">
        <span class="back iconfont icon-back" @click="goback"></span>
      </div>
      <div class="center">
        <span class="search-icon iconfont icon-xingtaiduICON_sousuo---copy" ></span>
        <input v-model="keywords" placeholder="请输入搜索内容" />
      </div>
      <div class="right">
        <span @click="search()">搜索</span>
      </div>
    </div>
    <div class="search-recommend">
      <span class="recommend-item" v-for="recommend in recommends" @click="search(recommend.id)" :key="recommend.id">
        {{recommend.title}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      recommends: [
        { 'id': '1', 'title': '清凉一夏' },
        { 'id': '2', 'title': '精选食材' },
        { 'id': '3', 'title': '唯有美食不可辜负' },
        { 'id': '4', 'title': '肉肉' },
        { 'id': '5', 'title': '精选食材' },
        { 'id': '6', 'title': '唯有美食不可辜负' },
        { 'id': '7', 'title': '肉肉' }
      ]
    }
  },
  methods: {
    search (id = 0) {
      if (id === 0 && !this.keywords) {
        id = Math.ceil(Math.random() * 4)
      }
      this.$router.push({ path: '/goods/list', query: { keywords: this.keywords, id: id } });
    },
    goback () {
      this.$router.back();
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/base/variable';
.search{
  .search-top{
    display: flex;
    flex-direction: row;
    height: 44px;
    line-height: 44px;
    color: $color-white;
    background-color: $color-sub-theme;
    .left{
      width: 10%;
      text-align: center;
      font-size: 20px;
    }
    .center{
      flex: 1;
      position: relative;
      input{
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 45px;
        border: none;
        background-color: $color-white;
        border-radius: 15px;
      }
      .search-icon{
        font-size: 22px;
        position: absolute;
        left: 15px;
        z-index: 2;
        top: 2px;
        color: $color-sub-theme;
      }
    }
    .right{
      width: 15%;
      text-align: center;
      a{
        color: $color-white;
        text-decoration: none;
      }
    }
  }
  .search-recommend{
    padding: 15px;
    .recommend-item{
      display: inline-block;
      padding: 4px 8px;
      color: #FFF;
      background-color: rgba($color: #000000, $alpha: 0.3);
      margin-right: 15px;
      margin-bottom: 15px;
      border-radius: 8px;
    }
  }
}
</style>
