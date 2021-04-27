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

* root `<content-placeholders>`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: false) - border radius
  * Boolean `centered` (default: false)
  > these properties define how all children components will act


* `<content-placeholders-heading />`
  * Boolean `img` (default: false)


* `<content-placeholders-text />`
  * Number `lines` (default: 4)


* `<content-placeholders-img />`

---

## 🔓 License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
