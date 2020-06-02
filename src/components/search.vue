<template>
  <div class="search">
    <div class="left">
      <span>菜单</span>
    </div>
    <div class="center">
      <input placeholder="请输入搜索内容" />
      <img class="search-icon" src="@/assets/img/logo.png">
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
      width: 25px;
      height: 25px;
      position: absolute;
      right: 15px;
      z-index: 2;
      top: 12px;
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
