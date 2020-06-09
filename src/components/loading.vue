<template>
  <div class="loading" v-if="showLoading">
    <div class="cont">
      <div class="item">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="text">加载中~~</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeOut: false
    }
  },
  props: {
    showLoading: {
      type: Boolean,
      defalut: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rbga(0,0,0,0.2);
    .cont{
      width: 88px;
      height: 88px;
      background-color: rgba($color: #FFF, $alpha: 0.6);
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
      border-radius: 6px;
      overflow: hidden;
      text-align: center;
      position: absolute;;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .item{
        width: 80%;
        margin: 30px auto 15px;
        display: flex;
        justify-content: space-around;
        span{
          display: inline-block;
          width: 14px;
          height: 14px;
          background-color: #000;
          border-radius: 50%;
          position: relative;
          &:nth-of-type(1){
            animation: load 0.5s linear 0s infinite alternate;
          }
          &:nth-of-type(2){
            animation: load 0.5s linear 0.75s infinite alternate;
          }
          &:nth-of-type(3){
            animation: load 0.5s linear 1.5s infinite alternate;
          }
          @keyframes load {
            from {top: 0;}
            to {top: -15px;}
          }
        }
      }
    }
  }
</style>
