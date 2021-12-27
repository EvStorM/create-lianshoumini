import App from "./App";

// 引入 uView UI
// vuex
import store from "./store";
import i18n from "./lang/i18n";
import Evils from "./util/evils/utils";
import Storage from "@/uni_modules/suixin-uni-local-storage";
import uView from "@/uni_modules/vk-uview-ui";

// #ifndef VUE3

import Vue from "vue";

// 使用 uView UI
Vue.use(uView);
Vue.use(Evils);
Vue.use(Storage, { name: "ls" });
Vue.prototype.$store = store;
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  i18n,
  store,
  ...App,
});
app.$mount();

// #endif

// #ifdef VUE3

import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  // 使用 uView UI
  app.use(uView);
  Vue.use(Evils);
  Vue.use(Storage, { name: "ls" });
  return {
    i18n,
    store,
    app,
  };
}

// #endif
