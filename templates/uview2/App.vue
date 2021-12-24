<script>
export default {
  globalData: {
    searchText: "",
    appVersion: {},
    config: {},
    $i18n: {},
  },
  onLaunch: function () {
    console.log("App Launch");
    this.globalData.$i18n = this.$i18n;
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
/*每个页面公共css */
@import "@/uni_modules/uview-ui/index.scss";
</style>
