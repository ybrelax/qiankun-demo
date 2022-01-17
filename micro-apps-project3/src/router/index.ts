import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/pages/list/index.vue"),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
