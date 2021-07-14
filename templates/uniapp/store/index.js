/*
 * @Date: 2021-02-02 16:03:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-14 17:33:40
 * @Description: 公共内容
 * @FilePath: /store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const vm = new Vue()

const store = new Vuex.Store({
	state: {
		token: '',
	},
	// 获取数据
	getters: {
	},
	mutations: {
		settoken(state, data) {
			state.token = data
		}
	},
	actions: {
		//获取手机信息 设置自定义头部
		getPhoneInfo() {
			wx.getSystemInfo({
				success: (e) => {
					getApp().globalData.StatusBar = e.statusBarHeight;
					let capsule = wx.getMenuButtonBoundingClientRect();
					if (capsule) {
						getApp().globalData.displayArea = {
							windowHeight: e.windowHeight,
							windowWidth: e.windowWidth,
							screenHeight: e.screenHeight,
						};
						getApp().globalData.Custom = capsule;
						getApp().globalData.CustomBar =
							//胶囊顶边
							capsule.bottom + capsule.top - e.statusBarHeight;
					} else {
						getApp().globalData.CustomBar = e.statusBarHeight + 50;
					}
				},
			});
		},
		getTemporaryToken({ //获取临时code
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				uni.login({
					provider: "weixin",
					success: function (loginRes) {
						getApp().globalData.loginCode = loginRes.code;
						uni.getUserInfo({
							provider: "weixin",
							success: function (infoRes) {
								vm.$u.api
									.userLogin({
										inviter: state.userInvitaionCode,
										code: loginRes.code,
										rawData: infoRes.rawData,
									})
									.then((ress) => {
										uni.setStorageSync("token", ress.userInfo.token);
										store.commit('settoken', ress.userInfo.token)
									});
							},
						});
					},
				});
			});
		},
	}

})


export default store;