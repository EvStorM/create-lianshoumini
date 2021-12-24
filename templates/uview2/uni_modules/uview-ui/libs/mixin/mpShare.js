/*
 * @Date: 2021-12-21 16:05:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-12-24 16:01:16
 * @Description: 
 * @FilePath: /uni_modules/uview-ui/libs/mixin/mpShare.js
 */
module.exports = {
  onLoad() {
    // 设置默认的转发参数
    uni.$u.mpShare = {
      title: "", // 默认为小程序名称
      path: "", // 默认为当前页面路径
      imageUrl: "", // 默认为当前页面的截图
    };
  },
  onShareAppMessage() {
    return uni.$u.mpShare;
  },
};
