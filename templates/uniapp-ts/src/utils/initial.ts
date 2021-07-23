/*
 * @Date: 2021-07-23 12:08:21
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 13:19:01
 * @Description: 
 * @FilePath: /templates/uniapp-ts/utils/initial.ts
 */
import store from '../store/index.js';
store.dispatch('getPhoneInfo');
