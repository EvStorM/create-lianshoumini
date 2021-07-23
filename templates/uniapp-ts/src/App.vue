<template> </template>

<script lang="ts">
  import _config from './config.js';
  export default {
    globalData: {
      displayArea: {},
      Custom: '',
      CustomBar: '',
      StatusBar: '',
      gloabalImgUrl: ''
    },
    onLaunch: function () {
      this.globalData.gloabalImgUrl = _config.server.img.baseUrl;
    },
    onShow: function () {
      console.log('App Show');
    },
    onHide: function () {
      console.log('App Hide');
    }
  };
</script>

<style lang="scss">
  @import 'uview-ui/index.scss';
  @import './app.scss';
</style>
