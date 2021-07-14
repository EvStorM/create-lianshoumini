/*
 * @Date: 2021-07-02 14:49:21
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-08 14:23:37
 * @Description:
 * @FilePath: /src/pages/mine/mine.ts
 */
const app = getApp<IAppOption>();
export {};
Page({
  data: {},
  // 事件处理函数
  bindViewTap() {},
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      });
    }
  },
  onLoad() {}
});
