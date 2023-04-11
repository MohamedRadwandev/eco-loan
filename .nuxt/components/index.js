export { default as ProductContainer } from '../..\\components\\ProductContainer.vue'
export { default as JobCustomerInfo } from '../..\\components\\job\\CustomerInfo.vue'
export { default as JobNotes } from '../..\\components\\job\\Notes.vue'
export { default as JobQuoteItems } from '../..\\components\\job\\QuoteItems.vue'
export { default as JobSitePlan } from '../..\\components\\job\\SitePlan.vue'
export { default as QuoteCustomerInfo } from '../..\\components\\quote\\CustomerInfo.vue'
export { default as QuoteCustomerNotes } from '../..\\components\\quote\\CustomerNotes.vue'
export { default as QuotePricing } from '../..\\components\\quote\\Pricing.vue'
export { default as QuoteButton } from '../..\\components\\quote\\QuoteButton.vue'
export { default as QuoteTerms } from '../..\\components\\quote\\Terms.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
