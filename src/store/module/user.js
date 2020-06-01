import { login, getInfo } from '@/request/api/login';
import { getToken, setToken, removeToken, setSessionStorage, removeSessionStorage } from '@/utils/cookie';

const user = {
  state: {
    token: getToken(),
    userInfo: {}
  },

  mutations: {
    set_token: (state, token) => {
      state.token = token;
    },
    set_userInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 登录
    userLogin ({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        login(JSON.stringify(loginInfo)).then(res => {
          if (res.code !== 1) {
            reject(res);
          } else {
            setToken(res.data.token);
            commit('set_token', res.data.token);
            commit('set_userInfo', res.data.userInfo)
            setSessionStorage('userInfo', JSON.stringify(res.data.userInfo));
            resolve();
          }
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 用户信息
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          if (res.code === 1) {
            commit('set_userInfo', res.data.userInfo)
            setSessionStorage('userInfo', JSON.stringify(res.data.userInfo));
            resolve();
          } else {
            reject(res.msg);
          }
        }).catch(err => {
          reject(err);
        });
      });
    },

    // 登出
    userLogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('set_token', '');
        removeToken();
        removeSessionStorage('userInfo');
        resolve();
      });
    }

  },
  getters: {
    userInfo: state => state.userInfo
  }
};

export default user;
