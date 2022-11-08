<template>
  <div>
    <QuoteBanner  />
    <QuoteCost />
    <QuoteSteps />
    <QuoteTerms />
  </div>
</template>

<script>

import quote from '~/temp.json'
export default {

  // async fetch() {

  //   await this.$axios.get('quote/e129d7ca-363c-11ed-9a2d-00163edf12f7', { params: { token: '63312f338ec63'}})

  // }
  provide() {
    return {
      quote
    }
  },
};
</script>
