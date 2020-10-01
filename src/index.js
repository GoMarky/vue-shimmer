import VShimmerRoot from './components/VShimmerRoot.vue'
import VShimmerImage from './components/VShimmerImage.vue'
import VShimmerLine from './components/VShimmerLine.vue'
import VShimmerBlock from './components/VShimmerBlock.vue'

export function install (Vue) {
  Vue.component('VShimmerRoot', VShimmerRoot)
  Vue.component('VShimmerImage', VShimmerImage)
  Vue.component('VShimmerLine', VShimmerLine)
  Vue.component('VShimmerBlock', VShimmerBlock)
}

export {
  VShimmerRoot,
  VShimmerImage,
  VShimmerLine,
  VShimmerBlock,
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
