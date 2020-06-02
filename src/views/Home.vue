<template>
  <div class="p-wrap">
    <search :username="userInfo.name?userInfo.name:''"></search>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import { mapGetters } from 'vuex';
import search from 'components/search';

export default {
  name: 'home',
  data () {
    return {

    };
  },
  components: {
    search
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    logout: function () {
      this.$store.dispatch('userLogOut').then(res => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      }).catch(err => {
        Message.error(err || '退出失败，请重试');
      })
    }
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
