<template>
  <div>
    <QuoteCustomerInfo />
    <QuotePricing />
    <QuoteCustomerNotes />
    <QuoteTerms />
    {{ id }}
  </div>
</template>

<script>
export default {

  async asyncData({ $axios, params}) {
    const id = params.index
   const {data} = await $axios.post('https://api-staging.ecolawn.nz/oauth/token', {
      grant_type: 'client_credentials',
      scope: '*',
      client_id: 3,
      client_secret: 'oYRKUskRYhAWwsA9Qz6Bv5VdZT6FfqaVYJYoP9v7',
    })

    const {access_token} = data

   const response = await $axios.get(
      "quotes/e129d7ca-363c-11ed-9a2d-00163edf12f7",
      // `quotes/${id}`,

      {
        params: { token: "63312f338ec63" },
        headers : {
          Authorization: 'Bearer ' + access_token
        }
      }
    );
    return {
      quote: response.data,
      id

    };
  },
  provide() {
    return {
      quote: this.quote,
    };
  },
};
</script>
