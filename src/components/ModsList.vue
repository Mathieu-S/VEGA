<template>
  <table class="mods-list">
    <thead>
      <tr>
        <th>Mod name</th>
        <th>File extension</th>
        <th>Mod type</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="mod in mods" :key="mod.name">
        <td>{{ mod.name | hideExtension }}</td>
        <td>{{ mod.name | fileType }}</td>
        <td>
          <select name="type">
            <option value="full-modification">Full mofication</option>
            <option value="maps">Maps</option>
            <option value="small-mod">Small mod</option>
            <option value="resources">Resources</option>
            <option value="patch">Patch</option>
          </select>
        </td>
        <td>
          <input v-model="selectedMods" type="checkbox" :value="mod.name" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ModsList",
  filters: {
    hideExtension(value) {
      return value.substring(0, value.length - 4);
    },
    fileType(value) {
      let type = value.substring(value.length - 3, value.length);
      switch (type) {
        case "wad":
        case "zip":
        case "pk3":
        case "pk7":
          return type;
        default:
          return `${type} (unsupported format)`;
      }
    }
  },
  props: {
    mods: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      selectedMods: []
    };
  },
  watch: {
    selectedMods() {
      this.$emit("selected-mods", this.selectedMods);
    }
  }
};
</script>

<style lang="scss" scoped>
.mods-list {
  border: black solid 2px;

  thead {
    background-color: dimgray;
    color: white;
  }

  td {
    border: black solid 1px;
  }
}
</style>
