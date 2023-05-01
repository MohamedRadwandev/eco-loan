<template>
<div>
  <b-btn :variant="statusColor[status]" class="px-2 mb-3 mb-md-0 ml-5"  target="_blank">{{ status }}</b-btn>

</div>
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
