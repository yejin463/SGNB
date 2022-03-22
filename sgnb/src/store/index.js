import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isListShow: false,
  },
  getters: {},
  mutations: {
    SET_TOGGLE_MENU_LIST(state, toggle) {
      state.isListShow = toggle;
    },
  },
  actions: {},
  modules: {},
});
