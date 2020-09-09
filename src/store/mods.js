export default {
  namespaced: true,
  state: () => ({
    presets: [{ name: "Default", mods: [], cfgFile: "default" }]
  }),
  mutations: {
    setPresets(state, presets) {
      state.presets = presets;
    },
    addPreset(state, preset) {
      state.presets.push(preset);
    },
    removePreset(state, presetName) {
      state.presets = state.presets.filter(x => x.name !== presetName);
    }
  },
  actions: {
    savePreset({ commit }, preset) {
      commit("addPreset", preset);
    }
  },
  getters: {}
};
