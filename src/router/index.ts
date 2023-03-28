import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Analytics from "@/pages/Analytics.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Analytics,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
