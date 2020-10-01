<template>
  <div
    :style="{
      width: widthPx ? `${widthPx}px` : `${width}%`,
      height: `${heightPx}px`,
      marginTop: `${offsetTop}px`,
      marginBottom: `${offsetBottom}px`
    }"
    :class="className" />
</template>

<script>
import baseComponentPropsMixins from '../mixins/baseComponentPropsMixins'

export default {
  mixins: [baseComponentPropsMixins],
  name: 'v-shimmer-image',
  data () {
    return {
      className: 'vue-v-shimmer-img',
    }
  },
}
</script>
