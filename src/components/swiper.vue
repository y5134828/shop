<template>
  <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(slide,index) in slides" :key="index">
            <img :src="slide" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  props: {
    slides: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/base/variable';
.swiper{
  width: 100%;
  img{
    width: 100%;
    max-width: 100%;
  }
}
</style>
