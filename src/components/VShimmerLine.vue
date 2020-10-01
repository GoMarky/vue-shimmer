<template>
  <div
    :style="{
      width: widthPx ? `${widthPx}px` : `${width}%`,
      height: `${heightPx}px`,
      marginTop: `${offsetTop}px`,
      marginBottom: `${offsetBottom}px`
    }"
    :class="className">
  </div>
</template>

<script>
import baseComponentPropsMixins from '../mixins/baseComponentPropsMixins'

export default {
  mixins: [baseComponentPropsMixins],
  name: 'v-shimmer-line',
  data () {
    return {
      className: 'vue-v-shimmer-text vue-v-shimmer-text__line',
    }
  },
}
</script>
