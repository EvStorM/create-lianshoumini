<!--
 * @Date: 2021-03-15 15:18:19
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-14 17:39:05
 * @Description: 
 * @FilePath: /pages/index/index.vue
-->
<template>
  <view>
    <e-toast ref="uToast" />
  </view>
</template>

<script>
let app = getApp();
import { mapState } from "vuex";
export default {
  components: {
  },
  data() {
    return {
      imgUrl: app.globalData.gloabalImgUrl,
      CustomBar: app.globalData.CustomBar,
      StatusBar: app.globalData.StatusBar,
    };
  },
  onReady() {
  },
  mounted() {},
  onLoad() {
  },
  watch: {},
  computed: {
    ...mapState({
      token: (state) => state.token,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
