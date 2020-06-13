const goods = {
  state: {
    goodsCar: []
  },
  mutations: {
    _changCar: (state, list) => {
      state.goodsCar = list
    }
  },
  actions: {
    changCar: ({ commit, state }, list) => {
      commit('_changCar', list);
    }
  },
  getters: {}

}

export default goods;
