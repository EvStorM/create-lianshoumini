<template lang="wxml">
  <view>
    <u-navbar >测试</u-navbar>
    <u-button type="default" >button</u-button>
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
