<template>
  <article class="mod-pack">
    <h3>{{ name }}</h3>
  </article>
</template>

<script>
export default {
  name: "ModPack",
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.mod-pack {
  border: solid black 1px;
  width: 150px;
}
</style>
