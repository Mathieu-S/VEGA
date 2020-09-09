import Vue from "vue";
import Vuex from "vuex";

import settings from "./settings";
import mods from "./mods";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { settings, mods }
});
