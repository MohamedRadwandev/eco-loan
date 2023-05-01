<template>
     <b-container>
          <p class="h3 font-weight-bold">Plan</p>
          <div class="text-center" >
               <div class="">
                    <!-- <img src="~/static/imgs/plan.png"/> -->
               <!-- <b-img alt="Plan" fluid></b-img> -->
               <!-- <vue-image-zoomer regular="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" /> -->
               <v-zoomer style="width: 100%; height: 500px; border: solid 1px silver;">
  <img
    src="plan.png"
    style="object-fit: contain; width: 100%; height: 100%;"
  >
</v-zoomer>
              </div>
          </div>
     </b-container>
</template>
<script>
import VueZoomer from 'vue-zoomer'

export default {
  components: {
    VZoomer: VueZoomer.Zoomer,
    VZoomerGallery: VueZoomer.Gallery,
  },
  props:{
    image:String
  }
}
</script>
