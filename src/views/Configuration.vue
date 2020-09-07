<template>
  <section class="configuration">
    <h2>{{ $t("views.configuration.title") }}</h2>

    <form @submit.prevent>
      <label for="language">Language :</label>
      <select id="language" v-model="$i18n.locale">
        <option
          v-for="(lang, i) in settings.langs"
          :key="`Lang${i}`"
          :value="lang"
        >
          {{ lang }}
        </option>
      </select>

      <label for="doom-engine-path">GZDoom path :</label>
      <input
        id="doom-engine-path"
        v-model="settings.doomEnginePath"
        type="text"
      />
      <button @click="setDoomEnginePath">Set path to GZDoom</button>

      <label for="mods-path">Mods folder path :</label>
      <input id="mods-path" v-model="settings.modsFolderPath" type="text" />
      <button @click="setModsFolderPath">Set path to mod folder</button>

      <button @click="saveConfiguration">Save settings</button>
    </form>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { open } from "tauri/api/dialog";

export default {
  name: "Configuration",
  data() {
    return {
      settings: {
        langs: ["en", "fr"],
        doomEnginePath: "",
        modsFolderPath: ""
      }
    };
  },
  computed: {
    ...mapState({
      doomEnginePath: state => state.settings.doomEnginePath,
      modsFolderPath: state => state.settings.modsFolderPath
    })
  },
  mounted() {
    this.settings.doomEnginePath = this.doomEnginePath;
    this.settings.modsFolderPath = this.modsFolderPath;
  },
  methods: {
    ...mapActions("settings", ["setPath"]),
    async setDoomEnginePath() {
      this.settings.doomEnginePath = await open();
    },
    async setModsFolderPath() {
      this.settings.modsFolderPath = await open({ directory: true });
    },
    saveConfiguration() {
      this.setPath({
        path: this.settings.doomEnginePath,
        type: "doomEnginePath"
      });
      this.setPath({
        path: this.settings.modsFolderPath,
        type: "modsFolderPath"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.configuration {
  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
