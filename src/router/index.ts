import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../modules/home/pages/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/about/pages/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
