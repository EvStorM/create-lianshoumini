/*
 * @Date: 2021-02-02 16:03:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-14 17:26:38
 * @Description: 
 * @FilePath: /common/http.api.js
 */

/**
 * 简历相关api
 */
const imgUpload = "/common/upload"
const install = (Vue, vm) => {
	// 创建get方式的api请求
	const createGetApi = (pash) => {
		return (params = {}) => vm.$u.get('run' + pash, params).then(v => v).catch(e => {
			if (e.statusCode == 401) { // 如果token过期报401
				vm.$store.dispatch("getTemporaryToken");
			}
		});
	}
	// 创建post方式的api请求
	const createPostApi = (pash) => {
		return (params = {}) => vm.$u.post('run' + pash, params).then(v => v).catch(e => {
			if (e.statusCode == 401) { // 如果token过期报401
				vm.$store.dispatch("getTemporaryToken");
			}
		});
	}
	// 创建文件上传接口
	let uploadImg = (filePath, formData = {}, name = 'file') => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: vm.$u.http.config.baseUrl + imgUpload, //仅为示例，非真实的接口地址
				filePath: filePath,
				name: name,
				header: {
					token: uni.getStorageSync('token')
				},
				formData: formData,
				success: (uploadFileRes) => {
					uploadFileRes.data && resolve(JSON.parse(uploadFileRes.data))
				},
				fail: (error) => {
					reject(error)
				}
			});
		})
	}

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	//put
	vm.$u.api = {
		// 用户相关
		userLogin: createPostApi("/user/login"), //登录/获取用户信息
	};
	// 金额格式化方法
	vm.$u.amountFormat = (num) => {
		if (typeof (num) == "undefined" || typeof (num) == "null") {
			return
		} else {
			let _num = parseFloat(num)
			return _num.toFixed(2)
		}
	}
	// 16进制色彩转RGBA
	vm.$u.sixteenToRGBA = (hex, alpha) => {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		let _RGBA = result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16),
			a: parseFloat(alpha).toFixed(1),
		} : null;
		return _RGBA ? `rgba(${_RGBA.r},${_RGBA.g},${_RGBA.b},${_RGBA.a})` : null
	}
	// 页面模式的api调用
	vm.$u.pagesApi = function ({
		fnName,
		name,
		param = {},
		page = 'page',
		loadStatus = "status",
		refresh = false,
		list = null,
		success
	}, ) {
		if (refresh) {
			this[loadStatus] = "loadmore";
			this[page] = 1;
			this[name] = {
				data: [],
			};
		}
		if (this[loadStatus] == "nomore") {
			return
		}
		this[loadStatus] = "loading";
		this.$u.api[fnName]({
				...param,
				page: this[page]
			})
			.then((v) => {
				uni.stopPullDownRefresh();
				this['triggered'] = false;
				this['_freshing'] = false;
				if (list) { // 进行内容的特别判断,如果值包裹在另外一层
					success(v)
					v = v[list]
				}
				if (this[page] >= v.last_page) {
					this[name].data = [...this[name].data, ...v.data]
					this[loadStatus] = "nomore";
				} else if (this[page] < v.last_page) {
					this[name].data = [...this[name].data, ...v.data]
					this[page]++;
					this[loadStatus] = "loadmore";
				} else {
					this[name].data = [...this[name].data, ...v.data]
					this[loadStatus] = "loadmore";
				}
				if (!list) {
					success(v)
				}
			});
	}
}
export default {
	install
}