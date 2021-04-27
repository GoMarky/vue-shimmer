<template>
  <div
    :class="classObject"
    :style="{
      display: 'flex',
      flexDirection: direction,
      justifyContent: justifyContent,
      width: widthPx ? `${widthPx}px` : `${width}%`,
      marginTop: `${offsetTop}px`,
      marginBottom: `${offsetBottom}px`,
      marginLeft: `${offsetLeft}px`,
      marginRight: `${offsetRight}px`,
      height: heightPx ?  `${heightPx}px` : 'auto',
    }"
  >
    <slot />
  </div>
</template>

<script>
import baseComponentPropsMixins from '../mixins/baseComponentPropsMixins'

export default {
  mixins: [baseComponentPropsMixins],
  name: 'v-shimmer',
  computed: {
    classObject () {
      return {
        'vue-v-shimmer': true,
        'vue-v-shimmer-is-rounded': this.rounded,
        'vue-v-shimmer-is-centered': this.centered,
        'vue-v-shimmer-is-animated': this.animated,
      }
    },
  },
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'column',
    },
    justifyContent: {
      type: String,
      default: 'space-between',
    }
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
