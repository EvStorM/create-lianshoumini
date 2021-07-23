/*
 * @Date: 2021-02-22 14:24:54
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 13:13:30
 * @Description: 自定义用户的配置文件
 * @FilePath: /templates/uniapp-ts/config.ts
 */
import { Config } from '@/interface';

const config: Config = {
  model: false, // 是否是sass化部署的小程序
  appId: '',
  tmplIds: ['EtUDqb2ylVZZAJJSkhtALihTXe-g0lZI-zRjiKe5VHA'], // 模板消息ID
  cryptoKey: 'ca6dbbe3333a079b', // 如果是自己部署的小程序,请将appId填入此处,用于和自己部署的后端项目内容进行加密解密校验
  server: {
    api: {
      baseUrl: 'https://run.lianshoulab.com/api'
    },
    img: {
      baseUrl: 'http://run.lianshoulab.com/img/'
    }
  }
};
export default config;
