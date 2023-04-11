<template>
    <div>
      <div>
    <!-- <QuoteCustomerInfo /> -->
    <!-- <QuotePricing /> -->
    <!-- <QuoteCustomerNotes /> -->
    <!-- <QuoteTerms /> -->
  </div>
  </div>
</template>

<script>
export default {
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    const id = params.Id
    return id
  },
}
</script>

<style>

</style>
