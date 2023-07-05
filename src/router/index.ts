import { createRouter, createWebHashHistory, Router } from "vue-router";
import * as r from "../utils/index";
import routerOperation from "./operation";
const routesTable = [
  {
    path: "/",
    name: "",
    component: () => import("../layout/RootLayout.vue"),
    children: [
      {
        path: "/",
        name: `${r.ROUTER_OPTION_TEXT.HOME_ROUTER}`,
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/product/:productId",
        name: `${r.ROUTER_OPTION_TEXT.PRODUCT_ROUTER}`,
        component: () => import("../views/DetailView.vue"),
      },
      {
        path: "/table",
        name: `${r.ROUTER_OPTION_TEXT.TABLE_ROUTER}`,
        component: () => import("../App.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("../layout/NotFound.vue"),
      },
    ],
  },
  routerOperation(r.ROUTER_OPTION_TEXT.LOGIN_ROUTER.toString()),
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routesTable,
});

export default router;
