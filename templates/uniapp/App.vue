<!--
 * @Date: 2021-02-02 16:03:32
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-14 17:38:19
 * @Description: 
 * @FilePath: /App.vue
-->
<script >
import _config from "@/config.js";

export default {
  globalData: {
    displayArea: {},
    Custom: "",
    CustomBar: "",
    StatusBar: "",
    gloabalImgUrl: "",
  },
  onLaunch: function () {
    this.globalData.gloabalImgUrl = _config.server.img.baseUrl;
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import "./app.scss";
</style>
