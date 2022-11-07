<template>
  <div>
    <QuoteBanner />
    <QuoteCost />
    <QuoteSteps />
    <QuoteTerms />
  </div>
</template>

<script>
export default {

  created() {

    const data = {
      grant_type: 'client_credentials',
      scope: '*',
      client_id: this.$config.client_id,
      client_secret: this.$config.client_secret
    }
    this.$axios.post('oauth/token' , data)
  }
};
</script>
