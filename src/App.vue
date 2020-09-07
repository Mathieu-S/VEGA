<template>
  <main id="app">
    <header>
      <h1>VEGA</h1>
    </header>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/library">Library</router-link> |
      <router-link to="/configuration">Configuration</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />

    <footer>Version Alpha 0.1.0</footer>
  </main>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  header {
    text-align: center;
  }

  nav {
    text-align: center;
  }

  .container {
    margin: 0 10%;
  }

  footer {
    text-align: right;
  }
}
</style>
