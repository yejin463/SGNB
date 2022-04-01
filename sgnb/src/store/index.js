import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isListShow: false,
    isModalShow: false,
  },
  getters: {},
  mutations: {
    SET_TOGGLE_MENU_LIST(state, toggle) {
      state.isListShow = toggle;
    },
    SET_TOGGLE_LOGIN(state, toggle) {
      state.isModalShow = toggle;
    },
  },
  actions: {},
  modules: {},
});
