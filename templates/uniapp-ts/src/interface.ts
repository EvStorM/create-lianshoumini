/*
 * @Date: 2021-07-23 13:09:39
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 14:56:57
 * @Description:
 * @FilePath: /src/interface.ts
 */

import { CombinedVueInstance } from 'vue/types/vue';
export interface U {
  $u?: any;
}
export interface VM extends Vue, U, CombinedVueInstance<Vue, object, object, object, Record<never, any>> {}

export interface share extends U {
  onLoad: Function;
  methods: {};
  onShow: Function;
  onShareAppMessage: any;
}
export interface Config {
  model: boolean; // 是否是sass化部署的小程序
  appId?: string;
  tmplIds?: string[]; // 模板消息ID
  cryptoKey: string; // 如果是自己部署的小程序,请将appId填入此处,用于和自己部署的后端项目内容进行加密解密校验
  server: {
    api: {
      baseUrl: string;
    };
    img: {
      baseUrl: string;
    };
  };
}

export interface globalData {
  displayArea: {};
  Custom: string;
  CustomBar: string;
  StatusBar: string;
  gloabalImgUrl: string;
  imgUrl: string;
}
