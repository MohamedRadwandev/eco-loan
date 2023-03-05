<template>
  <div class="py-5 bg-green-400">
    <b-container class="pb-5">
      <b-row>
        <b-col cols="12" md="6">
          <p class="h1 font-weight-bold">Job Reference Number</p>
          <p class="h1 font-weight-bold">{{ quote.id }}</p>
        </b-col>

        <b-col cols="12" md="6" class="text-left mt-5 mt-md-0">
          <p class="h3 font-weight-bold mb-4">Customer info</p>
          <div class="mb-4">
            <p class="h5 font-weight-bold">Name</p>
            <p class="h5">{{ quote.customer_name }}</p>
          </div>

          <div>
            <p class="h5 font-weight-bold">Phone</p>
            <p class="h5"><a :href="`tel:+${quote.customer_phone}`">{{ quote.customer_phone }}</a></p>
          </div>
          
          <div>
            <p class="h5 font-weight-bold">address</p>
            <p class="h5"><a target="_blank" :href="`https://maps.google.com/?q=${quote.site_address}`">{{ quote.site_address | emptyDash }}</a></p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  inject: ["quote"],
  computed: {
    name() {
      const name = this.quote.customer_name.split(" ");

      return {
        first: name[0],
        last: name[1],
      };
    },
    created_date() {
      return new Date(this.quote.quote_create_date).toLocaleDateString();
    },
  },
};
</script>