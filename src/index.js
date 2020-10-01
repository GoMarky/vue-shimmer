import VShimmerRoot from './components/VShimmerRoot.vue'
import VShimmerHeading from './components/VShimmerHeading.vue'
import VShimmerImage from './components/VShimmerImage.vue'
import VShimmerMultiline from './components/VShimmerMultiline.vue'
import VShimmerBlock from './components/VShimmerBlock.vue'

export function install (Vue) {
  Vue.component('VShimmerRoot', VShimmerRoot)
  Vue.component('VShimmerHeading', VShimmerHeading)
  Vue.component('VShimmerImage', VShimmerImage)
  Vue.component('VShimmerMultiline', VShimmerMultiline)
  Vue.component('VShimmerBlock', VShimmerBlock)
}

export {
  VShimmerRoot,
  VShimmerHeading,
  VShimmerImage,
  VShimmerMultiline,
  VShimmerBlock
}

const plugin = {
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
