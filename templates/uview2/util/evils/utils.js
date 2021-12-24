/*
 * @Date: 2021-07-15 18:55:04
 * @LastEditors: E'vils
 * @LastEditTime: 2021-12-24 16:38:03
 * @Description:
 * @FilePath: /util/evils/utils.js
 */
import color from "./theme-js.scss";
import timeFormat from "./timeFormat";
let safeAreaInsetsB = uni.getSystemInfoSync().safeAreaInsets.bottom;
let isiOS = /iOS/.test(uni.getSystemInfoSync().system);
let safeAreaInsetBottom = {
  paddingBottom: isiOS ? "constant(safe-area-inset-bottom)" : safeAreaInsetsB > 10 ? safeAreaInsetsB + "rpx" : "32rpx",
  paddingBottom: isiOS ? "env(safe-area-inset-bottom)" : safeAreaInsetsB > 10 ? safeAreaInsetsB + "rpx" : "32rpx",
};

// 获取星座
function getAstro(m, d) {
  if (m.length > 5 && !d) {
    m = timeFormat(m, "MM");
    d = timeFormat(m, "DD");
  }
  return "摩羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手摩羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
}
// 验证电话并拨打
function istel(tel) {
  let rep = new RegExp(/(^(\d{3,4}-)?\d{7,8})$|(^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$)/);
  return rep.test(tel);
}
// 获取字符串字节长度
function getStrLength(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let a = str.charAt(i);
    //使用的正则表达式
    if (a.match(/[^\x00-\xff]/gi) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  console.log(len);
  return len;
}
// 获取数组的元素(负值也能取到
function getItem(arr, n) {
  n = Math.trunc(n) || 0;
  if (n < 0) n += arr.length;
  if (n >= arr.length) n = n % arr.length;
  // if (n < 0 || n >= arr.length) return undefined;
  return arr[n];
}
/**
 * 是否json字符串
 */
function isJsonString(value) {
  if (typeof value == "string") {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == "object" && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}
function htmlDecode(value) {
  let str1 = decodeURIComponent(value);
  const map = { amp: "&", lt: "<", gt: ">", quot: '"', "#039": "'" };
  return str1.replace(/&([^;]+);/g, (m, c) => map[c]);
}
function queryJson(url) {
  let str = htmlDecode(url);
  let param = {}; // 存储最终JSON结果对象
  str.replace(/([^?&]+)=([^?&]+)/g, function (s, v, k) {
    param[v] = decodeURIComponent(k); //解析字符为中文
    return k + "=" + v;
  });
  return param;
}
const $e = {
  color,
  safeAreaInsetBottom,
  htmlDecode,
  queryJson,
  isJsonString,
  getStrLength,
  getAstro,
  timeFormat,
  getItem,
  istel,
};
uni.$e = $e;
const install = (Vue) => {
  Vue.prototype.$e = $e;
};

export default {
  install,
};
