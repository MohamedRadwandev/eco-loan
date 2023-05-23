<template>
<b-container class="pt-2">
  <b-btn :variant="statusColor[status]" class="px-2 mb-3 mb-md-0"  target="_blank">{{ status }}</b-btn>
</b-container>
</template>

<script>
export default {
  name:'quoteStatus',
  props:{
    status : String
  },
  data(){
    return{
      statusColor:{
        "paid":'warning',
        "accepted":'info',
        "fully paid":'success'
      }
    }
  }
}
</script>

<style>

</style>
