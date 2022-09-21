import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
import "lib-flexible";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// 拦截
router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  next(); //执行进入路由，如果不写就不会进入目标页
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
