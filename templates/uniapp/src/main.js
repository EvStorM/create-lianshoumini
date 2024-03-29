/*
 * @Date: 2021-07-23 18:28:41
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 18:52:25
 * @Description:
 * @FilePath: /src/main.js
 */
import Vue from 'vue';
import App from './App';
import store from './store/index.js';
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false;
let mpShare = require('utils/mixin/mpShare.js');
Vue.mixin(mpShare);
App.mpType = 'app';
const app = new Vue({
  store,
  ...App
});
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);
import httpApi from '@/common/http.api.js';
Vue.use(httpApi, app);
app.$mount();
require('utils/initial.js');
