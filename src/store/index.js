import Vue from "vue";
import Vuex from "vuex";

import infoes from "./modules/infoes";
import selected from "./modules/selected.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    infoes,
    selected,
  },
});
