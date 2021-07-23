/*
 * @Date: 2021-07-23 14:40:39
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 15:19:34
 * @Description:
 * @FilePath: /src/main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false;
let mpShare = require('utils/mixin/mpShare');
Vue.mixin(mpShare);
const app = new Vue({
  store,
  ...App
});
import httpInterceptor from './common/http.interceptor';
Vue.use(httpInterceptor, app);
import httpApi from './common/http.api';
Vue.use(httpApi, app);
new App().$mount();
require('utils/initial');
