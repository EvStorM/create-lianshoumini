<template>
  <view class="">
    <e-popup mode="bottom" v-model="show" :border-radius="30" :mask-close-able="closeable" :safe-area-inset-bottom="safeArea">
      <view class="ev-mainBody ev-fr-sb ev-h1 ev-m-t-50" v-if="title">
        {{ title }}
        <view v-if="expTitle" class="">
          <slot name="expTitle" />
        </view>
      </view>
      <scroll-view scroll-y="true" :style="[customStyle, { height: 'auto', maxHeight: maxHeight }]">
        <slot />
      </scroll-view>
    </e-popup>
  </view>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      expTitle: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      closeable: {
        type: Boolean,
        default: true
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maxHeight: {
        type: [String, Number],
        default: '70vh'
      }
    },
    watch: {
      value: {
        handler(val) {
          this.show = val;
        },
        immediate: true
      },
      show: {
        handler(val) {
          this.$emit('input', val);
        },
        immediate: true
      }
    },
    data() {
      return {
        show: false
      };
    },
    methods: {
      close(e) {
        console.log(`e`, e);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    padding: 24rpx;
    text-align: center;
  }
</style>
