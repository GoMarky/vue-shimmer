<template>
  <div
    :class="{
      'vue-v-shimmer-block': true,
      'vue-v-shimmer-block_small': isSmall,
    }">
    
  </div>
</template>

<script>

const VALID_BLOCK_SIZES = ['small']

export default {
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
