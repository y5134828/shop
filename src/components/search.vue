<template>
  <div class="search">
    <div class="left" :class="isIndex?'index-left':''">
      <span v-if="isIndex">菜单</span>
      <span v-else class="back iconfont icon-back" @click="goback"></span>
    </div>
    <div class="center" @click="toSearch">
      <input placeholder="请输入搜索内容" />
      <span class="search-icon iconfont icon-xingtaiduICON_sousuo---copy" ></span>
    </div>
    <div class="right">
      <span v-show="isIndex">
        <span v-if="username">{{username}}</span>
        <span v-else><router-link to="/user/login">请登录</router-link></span>
      </span>

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
    },
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toSearch () {
      this.$router.push('/search/index')
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
  display: flex;
  flex-direction: row;
  height: 44px;
  line-height: 44px;
  color: $color-white;
  background-color: $color-sub-theme;
  .left{
    width: 10%;
    text-align: center;
    &.index-left{
      width: 15%;
    }
    .back{
      font-size: 20px;
    }
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
    text-align: center;
    a{
      color: $color-white;
      text-decoration: none;
    }
  }
}
</style>
