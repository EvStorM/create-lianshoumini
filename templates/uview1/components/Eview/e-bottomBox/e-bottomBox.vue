<!--
 * @Date: 2020-12-15 16:04:25
 * @LastEditors: E'vils
 * @LastEditTime: 2021-08-04 14:59:33
 * @Description: 底部适配的容器框
 * @FilePath: /src/components/bottomAdapter/bottomAdapter.vue
-->
<template>
  <view
    class="bottomAdapter"
    :style="{
      paddingBottom: bottom ? bottom + 'rpx' : 14 + 'rpx',
      background: background ? background : '#FFF'
    }"
  >
    <slot />
  </view>
</template>

<script>
  export default {
    props: {
      background: {
        type: String,
        default: '#FFF'
      }
    },
    computed: {
      bottom() {
        let { bottom, height } = uni.getSystemInfoSync().safeArea;
        return bottom - height;
        // return systemInfo.safeAreaInsets.bottom;
      }
    },
    data() {
      return {};
    },
    methods: {
      confirm() {
        this.$emit('onClick');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .bottomAdapter {
    width: 100%;
    height: auto;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
  }
</style>
