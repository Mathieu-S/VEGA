<template>
  <section class="library container">
    <h2>{{ $t("views.library.title") }}</h2>

    <section class="mods-list-panel">
      <ModsList :mods="mods" />
      <aside class="actions">
        <form @submit.prevent>
          <label for="search-mod">Search</label>
          <input id="search-mod" type="text" />

          <fieldset>
            <legend>Show only</legend>

            <input id="wad-file" type="checkbox" name="file-type" />
            <label for="wad-file">wad</label><br />

            <input id="wad-zip" type="checkbox" name="file-type" />
            <label for="wad-zip">zip</label><br />

            <input id="wad-pk3" type="checkbox" name="file-type" />
            <label for="wad-pk3">pk3</label><br />

            <input id="wad-pk7" type="checkbox" name="file-type" />
            <label for="wad-pk7">pk7</label>
          </fieldset>
        </form>
      </aside>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { readDir } from "tauri/api/fs";
import ModsList from "@/components/ModsList.vue";

export default {
  name: "Library",
  components: {
    ModsList
  },
  data() {
    return {
      mods: []
    };
  },
  computed: {
    ...mapState({ modsFolderPath: state => state.settings.modsFolderPath })
  },
  async mounted() {
    if (this.modsFolderPath !== 0) {
      this.mods = await readDir(this.modsFolderPath);
    } else {
      this.mods = []
    }
  }
};
</script>

<style lang="scss" scoped>
.library {
  .mods-list-panel {
    display: flex;

    .actions {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
