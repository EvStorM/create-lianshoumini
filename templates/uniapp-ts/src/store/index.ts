/*
 * @Date: 2021-02-02 16:03:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 18:22:37
 * @Description: 公共内容
 * @FilePath: /src/store/index.ts
 */
import { VM } from '../interface';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const vm: VM = new Vue();

const store = new Vuex.Store({
  state: {
    token: 'tokentokentokentoken',
    userInvitaionCode: ''
  },
  // 获取数据
  getters: {},
  mutations: {
    settoken(state, data) {
      state.token = data;
    }
  },
  actions: {
    getTemporaryToken({
      //获取临时code
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        uni.login({
          provider: 'weixin',
          success: function (loginRes) {
            uni.getUserInfo({
              provider: 'weixin',
              success: function (infoRes) {
                vm.$u.api
                  .userLogin({
                    inviter: state.userInvitaionCode,
                    code: loginRes.code,
                    rawData: infoRes.rawData
                  })
                  .then((ress: any) => {
                    uni.setStorageSync('token', ress.userInfo.token);
                    store.commit('settoken', ress.userInfo.token);
                  });
              }
            });
          }
        });
      });
    }
  }
});

export default store;
