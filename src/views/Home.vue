<template>
  <section class="home">
    <h2>{{ $t("views.home.title") }}</h2>

    <ModPack name="A modpack" />

    <button @click="startDoom">Launch DOOM</button>
  </section>
</template>

<script>
import { execute } from "tauri/api/process";
import ModPack from "@/components/ModPack.vue";

export default {
  name: "Home",
  components: {
    ModPack
  },
  methods: {
    async startDoom() {
      await execute("C:/Windows/System32/notepad", []);
    }
  }
};
</script>
