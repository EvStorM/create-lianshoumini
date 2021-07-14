/*
 * @Date: 2021-07-01 11:42:29
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-08 14:22:11
 * @Description:
 * @FilePath: /src/pages/index/index.ts
 */
// index.ts
// 获取应用实例
const app = getApp<IAppOption>();
export {};
Page({
  data: {},
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad() {},
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
    }
  },
  getUserProfile() {},

  skip() {}
});
