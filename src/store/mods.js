export default {
  namespaced: true,
  state: () => ({
    presets: [{ name: "Default", mods: [], cfgFile: "default", active: true }]
  }),
  mutations: {
    setPresets(state, presets) {
      state.presets = presets;
    },
    addPreset(state, preset) {
      state.presets.push(preset);
    },
    editPreset(state, preset) {
      let idPreset = state.presets.findIndex(x => x.name === preset.name);
      state.presets[idPreset].mods = preset.mods;
    },
    removePreset(state, presetName) {
      state.presets = state.presets.filter(x => x.name !== presetName);
    }
  },
  actions: {
    savePreset({ commit }, presetMods) {
      commit("editPreset", { name: "Default", mods: presetMods });

      // let existingPreset = state.presets.find(x => x.name === preset.name);
      //
      // if (existingPreset !== null) {
      //   commit("setPresets", preset);
      // } else {
      //   commit("addPreset", preset);
      // }
    }
  },
  getters: {
    activePreset(state) {
      return state.presets.find(x => x.active === true);
    }
  }
};
