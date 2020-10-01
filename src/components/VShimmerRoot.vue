<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
export default {
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
  },
}
</script>

<style lang="scss">
  @import '../styles.scss';
</style>
