<template>
  <div>
    <QuoteCustomerInfo />
    <QuotePricing />
    <QuoteCustomerNotes />
    <QuoteTerms />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.get(
      "quotes/e129d7ca-363c-11ed-9a2d-00163edf12f7",
      {
        params: { token: "63312f338ec63" },
      }
    );
    return {
      quote: response.data,
    };
  },
  provide() {
    return {
      quote: this.quote,
    };
  },
};
</script>
