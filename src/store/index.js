import Vue from 'vue';
import Vuex from 'vuex';
import user from './module/user';
import goods from './module/goods'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    user,
    goods
  },
  strict: debug
});

export default store;
