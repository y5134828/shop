import { changeFavorite } from '@/request/api/goods';

const goods = {
  state: {
    goodsCar: [],
    favorites: false
  },
  mutations: {
    _changCar: (state, list) => {
      state.goodsCar = list
    },
    _setFavorites: (state) => {
      state.favorites = true
    },
    _changFavorites: (state, status) => {
      state.favorites = status
    }
  },
  actions: {
    changCar: ({ commit, state }, list) => {
      commit('_changCar', list)
    },
    setFavoite: ({ commit }) => {
      commit('_setFavorites')
    },
    changeFavorite: ({ commit, state }, data) => {
      let { favorite } = data
      return new Promise((resolve, reject) => {
        changeFavorite(data).then((res) => {
          if (res.code === 1) {
            console.log(favorite)
            commit('_changFavorites', !favorite)
          } else {
            reject(res)
          }
        })
      })
    }
  },
  getters: {
    favorite: state => state.favorites
  }

}

export default goods;
