export const ProductContainer = () => import('../..\\components\\ProductContainer.vue' /* webpackChunkName: "components/product-container" */).then(c => wrapFunctional(c.default || c))
export const JobCustomerInfo = () => import('../..\\components\\job\\CustomerInfo.vue' /* webpackChunkName: "components/job-customer-info" */).then(c => wrapFunctional(c.default || c))
export const JobNotes = () => import('../..\\components\\job\\Notes.vue' /* webpackChunkName: "components/job-notes" */).then(c => wrapFunctional(c.default || c))
export const JobQuoteItems = () => import('../..\\components\\job\\QuoteItems.vue' /* webpackChunkName: "components/job-quote-items" */).then(c => wrapFunctional(c.default || c))
export const JobSitePlan = () => import('../..\\components\\job\\SitePlan.vue' /* webpackChunkName: "components/job-site-plan" */).then(c => wrapFunctional(c.default || c))
export const QuoteCustomerInfo = () => import('../..\\components\\quote\\CustomerInfo.vue' /* webpackChunkName: "components/quote-customer-info" */).then(c => wrapFunctional(c.default || c))
export const QuoteCustomerNotes = () => import('../..\\components\\quote\\CustomerNotes.vue' /* webpackChunkName: "components/quote-customer-notes" */).then(c => wrapFunctional(c.default || c))
export const QuotePricing = () => import('../..\\components\\quote\\Pricing.vue' /* webpackChunkName: "components/quote-pricing" */).then(c => wrapFunctional(c.default || c))
export const QuoteButton = () => import('../..\\components\\quote\\QuoteButton.vue' /* webpackChunkName: "components/quote-button" */).then(c => wrapFunctional(c.default || c))
export const QuoteStatus = () => import('../..\\components\\quote\\QuoteStatus.vue' /* webpackChunkName: "components/quote-status" */).then(c => wrapFunctional(c.default || c))
export const QuoteTerms = () => import('../..\\components\\quote\\Terms.vue' /* webpackChunkName: "components/quote-terms" */).then(c => wrapFunctional(c.default || c))

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
