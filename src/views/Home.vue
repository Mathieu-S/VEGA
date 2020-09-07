<template>
  <section class="home">
    <h2>{{ $t("views.home.title") }}</h2>

    <ModPack name="A modpack" />

    <button :disabled="!isPlayable" @click="startDoom">Launch DOOM</button>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { execute } from "tauri/api/process";
import ModPack from "@/components/ModPack.vue";

export default {
  name: "Home",
  components: {
    ModPack
  },
  computed: {
    ...mapState({ doomEnginePath: state => state.settings.doomEnginePath }),
    isPlayable() {
      return this.doomEnginePath.length !== 0;
    }
  },
  methods: {
    async startDoom() {
      await execute(this.doomEnginePath, []);
    }
  }
};
</script>
