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
        imgUrl: app.globalData.gloabalImgUrl,
        CustomBar: app.globalData.CustomBar,
        StatusBar: app.globalData.StatusBar
      };
    },
    onReady() {},
    mounted() {},
    onLoad() {},
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
