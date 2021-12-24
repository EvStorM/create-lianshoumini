import Vue from "vue";
import App from "./App";
// vuex
import store from "./store";
import i18n from "./lang/i18n";
// 引入全局uView
import uView from "@/uni_modules/uview-ui";
import mixin from "./common/mixin";
import Storage from "@/uni_modules/suixin-uni-local-storage";
// name 默认 ls；
Vue.use(Storage, { name: "ls" });
Vue.prototype.$store = store;
Vue.config.productionTip = false;
App.mpType = "app";
Vue.use(uView);
// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require("@/uni_modules/uview-ui/libs/mixin/mpShare.js");
Vue.mixin(mpShare);
// #endif
Vue.mixin(mixin);
const app = new Vue({
  i18n,
  store,
  ...App,
});

// 引入请求封装
require("./util/request/index")(app);
app.$mount();
