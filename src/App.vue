<template>
  <main id="app">
    <header>
      <h1>VEGA</h1>
    </header>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/library">Library</router-link> |
      <router-link to="/configuration">Configuration</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <footer>Version Alpha 0.1.0</footer>
  </main>
</template>
