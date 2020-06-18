import { changeFavorite } from '@/request/api/goods';

const goods = {
  state: {
    goodsCar: [],
    favorites: false
  },
  mutations: {
    _changeCar: (state, list) => {
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
    changeCar: ({ commit, state }, list) => {
      commit('_changeCar', list)
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
    favorite: state => state.favorites,
    goodsCar: state => state.goodsCar
  }

}

export default goods;
