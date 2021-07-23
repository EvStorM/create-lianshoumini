<template> </template>

<script lang="ts">
  import _config from './config.js';
  import Vue from 'vue';
  export default Vue.extend({
    mpType: 'app',
    globalData: {
      displayArea: {},
      Custom: '',
      CustomBar: '',
      StatusBar: '',
      gloabalImgUrl: '',
      imgUrl: ''
    },
    onLaunch() {
      console.log('App Launch');
    },
    onShow() {
      console.log('App Show');
    },
    onHide() {
      console.log('App Hide');
    }
  });
</script>

<style lang="scss">
  @import 'uview-ui/index.scss';
  @import './app.scss';
</style>
