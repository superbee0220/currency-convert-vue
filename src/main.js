import Vue from "vue";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import VueRouter from "vue-router";

import App from "./App";
import routes from "./routes";
import store from "./store";

Vue.use(VueRouter);
Vue.use(SuiVue);

const router = new VueRouter({
  mode: "history",
  routes,
});

const vueApp = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = vueApp.constructor;

Vue.config.devtools = process.env.NODE_ENV === "development";
