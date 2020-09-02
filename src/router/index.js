import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Library from "@/views/Library.vue";
import Configuration from "@/views/Configuration.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/library",
    name: "Library",
    component: Library
  },
  {
    path: "/configuration",
    name: "Configuration",
    component: Configuration
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
