<template>
  <div
    :style="{
      width: widthPx ? `${widthPx}px` : `${width}%`,
      height: `${heightPx}px`,
      marginTop: `${offsetTop}px`
    }"
    :class="{
      'vue-v-shimmer-block': true,
      'vue-v-shimmer-block_small': isSmall,
    }">
  </div>
</template>

<script>

import baseComponentPropsMixins from '../mixins/baseComponentPropsMixins'

const VALID_BLOCK_SIZES = ['small']

export default {
  mixins: [baseComponentPropsMixins],
  name: 'v-shimmer-block',
  props: {
    size: {
      type: String,
      default: 'small',
      validator: val => VALID_BLOCK_SIZES.includes(val)
    },
  },
  computed: {
    isSmall() {
      return this.size === 'small';
    }
  }
}
</script>
