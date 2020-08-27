<template>
  <section class="configuration">
    <h2>{{ $t("views.configuration.title") }}</h2>

    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
        lang
      }}</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "Configuration",
  data() {
    return { langs: ["en", "fr"] };
  }
};
</script>
