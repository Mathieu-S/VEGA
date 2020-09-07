export default {
  namespaced: true,
  state: () => ({
    doomEnginePath: "",
    modsFolderPath: ""
  }),
  mutations: {
    setDoomEnginePath(state, path) {
      state.doomEnginePath = path;
    },
    setModsFolderPath(state, path) {
      state.modsFolderPath = path;
    }
  },
  actions: {
    setPath({ commit }, config) {
      console.log(config.path, config.type);
      switch (config.type) {
        case "doomEnginePath":
          commit("setDoomEnginePath", config.path);
          break;
        case "modsFolderPath":
          commit("setModsFolderPath", config.path);
          break;
        default:
          console.error(`${config.type} is not a valid type of path.`);
      }
    }
  },
  getters: {}
};
