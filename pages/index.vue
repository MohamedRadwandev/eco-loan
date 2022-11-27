<template>
  <div>
    <QuoteCustomerInfo />
    <QuotePricing />
    <QuoteCustomerNotes />
    <QuoteTerms />
  </div>
</template>

<script>
import quote from "~/temp.json";
export default {
  async fetch() {
    await this.$axios.get("quotes/e129d7ca-363c-11ed-9a2d-00163edf12f7", {
      params: { token: "63312f338ec63" },
    });
  },
  provide() {
    return {
      quote,
    };
  },
};
</script>
