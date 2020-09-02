<template>
  <section class="configuration">
    <h2>{{ $t("views.configuration.title") }}</h2>

    <form @submit.prevent>
      <label for="language">Language :</label>
      <select id="language" v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>

      <label for="gzdoom-path">GZDoom path :</label>
      <input id="gzdoom-path" v-model="gzDoomPath" type="text" />
      <button @click="setGzdoomPath">Set path to GZDoom</button>

      <label for="mods-path">Mods folder path :</label>
      <input id="mods-path" v-model="modsFolderPatch" type="text" />
      <button @click="setModFolder">Set path to mod folder</button>

      <button>Save settings</button>
    </form>
  </section>
</template>

<script>
import { open } from "tauri/api/dialog";

export default {
  name: "Configuration",
  data() {
    return {
      langs: ["en", "fr"],
      gzDoomPath: "",
      modsFolderPatch: ""
    };
  },
  methods: {
    async setGzdoomPath() {
      this.gzDoomPath = await open();
    },
    async setModFolder() {
      this.modsFolderPatch = await open({ directory: true });
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
