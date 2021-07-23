/*
 * @Date: 2021-02-02 16:03:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-14 17:28:19
 * @Description: 
 * @FilePath: /common/http.interceptor.js
 */
import CryptoJS from 'crypto-js'
import _config from "@/config.js"
const encryptByAES = (string, key) => {
	let ckey = CryptoJS.enc.Utf8.parse(key);
	let cStr = string + " " + _config.appId;
	let encrypted = CryptoJS.AES.encrypt(cStr, ckey, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	//return encrypted.toString(); //此方式返回base64格式密文
	return encrypted.ciphertext.toString(); // 返回hex格式的密文
};
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: _config.server.api.baseUrl,
		loadingText: '请求中...',
		loadingTime: 10,
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
		showLoading: true,
		loadingTime: 200
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 加密
		config.header["lianshoutoken"] = encryptByAES(
			Date.now().toString(),
			_config.cryptoKey
		);
		// 设置token
		const token = uni.getStorageSync('token');
		const defaultsiteId = uni.getStorageSync('defaultsiteId');
		if (token) {
			config.header['token'] = token;
		}
		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		if (config.url == '/api/lab/project_info/list' || config.url == '/api/lab/course/list') {
			Vue.prototype.$u.http.config.showLoading = false

		} else {
			Vue.prototype.$u.http.config.showLoading = true
		}
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.code == 1) {
			if (res.data === "" || res.data === null) {
				return res.code;
			} else {
				return res.data;
			}
		} else if (res.code == 201) {
			// 假设201为token失效，这里跳转登录
			vm.$u.toast(res.message)
			setTimeout(() => {}, 1500)
			return false;
		} else if (res.code == 40301) {
			vm.$u.toast(res.message, 3000)
			uni.clearStorage()
			getApp().globalData.userInfo = ""
			return res.content
		} else if (res.code == 40009) {
			vm.$u.toast(res.message, 3000)
			return res.content
		} else if (res.code == 40005) {
			vm.$u.toast("请刷新重试", 3000)
			return res.content;
		} else {
			vm.$u.toast(res.msg, 3000)
			return res.content;
		}
	}
}

export default {
	install
}