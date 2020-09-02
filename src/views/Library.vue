<template>
  <section class="library">
    <h2>{{ $t("views.library.title") }}</h2>

    <table>
      <thead>
        <tr>
          <th>Mod name</th>
          <th>File extension</th>
          <th>Mod type</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Project brutality</td>
          <td>p3k</td>
          <td>
            <select name="type">
              <option value="volvo">Full mofication</option>
              <option value="saab">Maps</option>
              <option value="mercedes">Small mod</option>
              <option value="mercedes">Ressources</option>
              <option value="mercedes">Patch</option>
            </select>
          </td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped>
.library {
  table {
    border: black solid 2px;

    thead {
      background-color: dimgray;
      color: white;
    }

    td {
      border: black solid 1px;
    }
  }
}
</style>
