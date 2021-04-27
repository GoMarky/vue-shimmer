# @gomarky/vue-shimmer

---

## :cd: Installation

* via npm: `npm install @gomarky/vue-shimmer --save`
* via yarn: `yarn add @gomarky/vue-shimmer`

## :rocket: Usage

Include plugin in your `main.js` file.

```javascript
import Vue from 'vue'
import VueShimmer from '@gomarky/vue-shimmer'

Vue.use(VueShimmer)
```

> ⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.

### Examples:

```html
 <VShimmerRoot direction="row" width="100" heightPx="16">
  <VShimmerLine width="85" />
  <VShimmerBlock width="7" />
</VShimmerRoot>
```

### Available components and properties

* root `<VShimmerRoot>`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: false) - border radius
  * Boolean `centered` (default: false)
  > these properties define how all children components will act


Also, you can add your own colors in project. Use for it CSS variable, like in an example below:

```css
:root {
  --v-shimmer-primary-color: #cecece;
  --v-shimmer-secondary-color: #ffffff;
}
```

---

## 🔓 License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
