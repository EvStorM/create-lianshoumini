/*
 * @Date: 2021-02-22 14:24:54
 * @LastEditors: E'vils
 * @LastEditTime: 2021-05-11 11:32:33
 * @Description: 自定义用户的配置文件
 * @FilePath: /config.js
 */
export default {
    model: false, // 是否是sass化部署的小程序
    appId: "",
    tmplIds: ["EtUDqb2ylVZZAJJSkhtALihTXe-g0lZI-zRjiKe5VHA"], // 模板消息ID
    cryptoKey: "ca6dbbe3333a079b", // 如果是自己部署的小程序,请将appId填入此处,用于和自己部署的后端项目内容进行加密解密校验
    server: {
        api: {
            baseUrl: "https://run.lianshoulab.com/api",
        },
        img: {
            baseUrl: "http://run.lianshoulab.com/img/",
        },
    },
}