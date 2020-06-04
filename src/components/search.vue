<template>
  <div class="search">
    <div class="left">
      <span>菜单</span>
    </div>
    <div class="center">
      <input placeholder="请输入搜索内容" />
      <span class="search-icon iconfont icon-xingtaiduICON_sousuo---copy" ></span>
    </div>
    <div class="right">
      <span v-if="username">{{username}}</span>
      <span v-else><router-link to="/user/login">请登录</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    username: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/base/variable';
.search{
  display: flex;
  flex-direction: row;
  height: 44px;
  line-height: 44px;
  color: $color-white;
  background-color: $color-sub-theme;
  .left{
    width: 15%;
  }
  .center{
    flex: 1;
    position: relative;
    input{
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 25px;
      border: none;
      background-color: $color-white;
      border-radius: 15px;
    }
    .search-icon{
      font-size: 22px;
      position: absolute;
      right: 15px;
      z-index: 2;
      top: 2px;
      color: $color-sub-theme;
    }
  }
  .right{
    width: 15%;
    a{
      color: $color-white;
      text-decoration: none;
    }
  }
}
</style>
