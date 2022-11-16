<template>
     <div class="py-5 bg-green-400">
          <b-container>
               <b-row>
                    <b-col cols="12" md="6">
                         <p class="h3 md-h2 font-weight-bold mb-4">{{ name.first }}’s Eco Lawn quote</p>
                         <p class="h4 md-h3 font-weight-bold mb-4">Customer info</p>
     
                         <div class="d-flex align-items-start mb-3" style="gap: 50px">
                              <div>
                                   <p class="h5 font-weight-bold">First name</p>
                                   <p class="h5">{{ name.first}}</p>
                              </div>
                              <div>
                                   <p class="h5 font-weight-bold">Last name</p>
                                   <p class="h5">{{ name.last}}</p>
                              </div>
                         </div>
     
                         <div class="mb-4">
                              <p class="h5 font-weight-bold">Company</p>
                              <p class="h5">{{ quote.customer_organization | emptyDash}}</p>
                         </div>
     
                         <div>
                              <p class="h5 font-weight-bold">Site address</p>
                              <p class="h5">{{ quote.site_address | emptyDash }}</p>
                         </div>
                    </b-col>
     
                    <b-col cols="12" md="6" class="text-md-right d-flex flex-column justify-content-between mt-5 mt-md-0">
                         <div class="mb-md-5 mb-3">
                              <p class="h4 md-h3 font-weight-bold mb-2">Sales ref # {{ quote.pipedrive_deal_id }}</p>
                              <p class="h4 md-h3 font-weight-bold">Quote ref # {{ quote.id }}</p>
                         </div>
                         <div>
                              <div class="mb-4">
                                   <p class="h5 font-weight-bold mb-3">Date of quote: {{ new Date(quote.quote_create_date).toLocaleDateString() }}</p>
                                   <p class="h5">This quote is valid for 7 days.</p>
                              </div>
     
                              <div>
                                   <p class="h3 font-weight-bold text-success d-md-inline-block mr-4">QUOTE</p>
                                   <p class="h1 font-weight-bold d-inline-block">{{ quote.pricing.total_amount | money }}</p>
                              </div>
                         </div>
                    </b-col>
               </b-row>
          </b-container>
     </div>
</template>

<script>
export default {
     inject: ['quote'],
     computed: {
          name() {
               const name = this.quote.customer_name.split(' ');

               return {
                    first : name[0],
                    last : name[1],
               }
          }
     }
}
</script>