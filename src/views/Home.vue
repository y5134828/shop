<template>
  <div class="p-wrap">
    <search :username="userInfo.name?userInfo.name:''" :isIndex="true"></search>
    <swiper :slides="slides"></swiper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import search from 'components/search';
import swiper from 'components/swiper';

export default {
  name: 'home',
  data () {
    return {
      message: '改变前',
      slides: [
        'https://imgcps.jd.com/ling4/100002427783/5raI5pqR5Yip5Zmo/5Yaw54i95LiA5aSP/p-5d91a4f642dd5b7c7d52cbde/63fedfc5/cr/s1125x690/q70.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/120812/7/3969/413085/5ed753c3E64c4f5d6/f0886e3be069bf66.png!q70.jpg.dpg'
      ]
    };
  },
  components: {
    search,
    swiper
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {

  }

};
</script>

<style lang="scss" scoped>
  .p-wrap{
    text-align: center;
    p{
      padding: 10px;
    }
  }
</style>
