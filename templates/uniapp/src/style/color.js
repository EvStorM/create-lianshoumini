/*
 * @Date: 2021-07-15 18:55:04
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-27 13:25:29
 * @Description:
 * @FilePath: /src/style/color.js
 */
import color from './theme.scss';
const $e = {
  color
};
uni.$e = $e;
const install = Vue => {
  Vue.prototype.$e = $e;
};

export default {
  install
};
