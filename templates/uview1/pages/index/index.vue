<template>
  <view>
    <e-navbar
      back-icon-color="#000"
      :back-text-style="{ color: '#000', fontSize: '32rpx' }"
      :back-text="appName"
      :background="{ background: '#f7f7f7' }"
      ref="navbar"
    >
    </e-navbar>
    <u-icon name="apple-fill"></u-icon>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
