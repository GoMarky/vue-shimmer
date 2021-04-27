import Vue from 'vue';
import App from './App.vue';

import VueShimmer from './../src/index';

Vue.use(VueShimmer);

new Vue({
  el: '#app',
  render: h => h(App),
})
