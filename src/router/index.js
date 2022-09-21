import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "LoginPage",
    meta: { title: "登录" },
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    meta: { title: "注册" },
    component: () => import("../views/RegisterPage.vue"),
  },
  {
    path: "/repassword",
    name: "RePassword",
    meta: { title: "重置" },
    component: () => import("../views/RePasswordPage.vue"),
  },
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/404View.vue"),
    meta: { title: "404" },
  },
  {
    path: "/403",
    component: () =>
      import(/* webpackChunkName: "403" */ "../views/403View.vue"),
    meta: { title: "403" },
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
