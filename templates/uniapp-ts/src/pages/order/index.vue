<!--
 * @Date: 2021-07-23 14:40:39
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 15:02:14
 * @Description: 
 * @FilePath: /src/pages/index/index.vue
-->
<template lang="wxml">
  <view>
    <e-toast ref="uToast" />
  </view>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  let app = getApp();
  export default {
    components: {},
    data() {
      return {
        // imgUrl: app.globalData.gloabalImgUrl,
        // CustomBar: app.globalData.CustomBar,
        // StatusBar: app.globalData.StatusBar
      };
    },
    onReady() {},
    mounted() {},
    onLoad() {
      // this.imgUrl = getApp().globalData.gloabalImgUrl;
    },
    watch: {},
    computed: {
      ...mapState({
        token: (state: any) => state.token
      })
    },
    methods: {}
  };
</script>

<style lang="scss" scoped></style>
