/*
 * @Date: 2021-07-01 11:42:29
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-08 15:24:44
 * @Description:
 * @FilePath: /templates/default/src/app.ts
 */
// app.ts
App({
  globalData: {
    StatusBar: {},
    displayArea: {},
    Custom: '',
    CustomBar: 0
  },
  onHide() {},
  onLaunch() {
    // 登录
    this.getsys();
  },
  getInfo(refresh: Boolean = false): Object {
    return {};
  },
});
