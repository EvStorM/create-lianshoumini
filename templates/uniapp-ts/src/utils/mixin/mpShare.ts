/*
 * @Date: 2021-07-23 12:08:21
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 14:50:11
 * @Description:
 * @FilePath: /src/utils/mixin/mpShare.ts
 */

import { share } from '../../interface';

/**
全局分享页面
**/
const share: share = {
  onLoad() {},
  methods: {},
  onShow() {
    // eslint-disable-next-line no-undef
    let pages = getCurrentPages(); //获取页面栈
    if (pages.length === 0) return;
    this.$u.pageRouter = pages[pages.length - 1].route;

    switch (this.$u.pageRouter) {
      case 'pages/index/index':
        this.$u.mpShare = {
          title: '', // 默认为小程序名称
          path: '', // 默认为当前页面路径
          // imageUrl: '' ,// 默认为当前页面的截图
          imageUrl: 'http://tt.6vapp.com/img/shareProimg.png' // 默认为当前页面的截图
        };
        break;
      default:
        this.$u.mpShare = {
          title: '感知职业，和小伙伴一起做项目吧~', // 默认为小程序名称
          path: '', // 默认为当前页面路径
          imageUrl: 'http://tt.6vapp.com/img/shareBgImng.png' // 默认为当前页面的截图
        };
    }
  },
  onShareAppMessage() {
    return this.$u.mpShare;
  }
};

export default share;
