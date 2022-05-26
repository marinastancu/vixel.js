/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/draw",
    name: "draw",
    component: () =>
      import("../views/DrawView.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import("../views/GalleryView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
