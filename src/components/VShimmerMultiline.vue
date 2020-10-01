<template>
  <div :class="className">
    <div v-for="n in lines" :key="n" :class="`${className}__line`" />
  </div>
</template>

<script>
export default {
  name: 'v-shimmer-text',
  data () {
    return {
      className: 'vue-v-shimmer-text',
    }
  },
  props: {
    lines: {
      type: Number,
      default: 4,
    },
  },
}
</script>
