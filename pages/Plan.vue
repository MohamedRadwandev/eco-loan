<template>
  <div class="pb-5">
    <b-navbar variant="primary">
      <b-container>
        <b-button to="/" variant="link" class="text-white font-weight-medium">
          <b-icon icon="chevron-left"></b-icon>
          Return to quote
        </b-button>
      </b-container>
    </b-navbar>
    <div class="py-5 bg-green-400">
      <b-container>
        <p class="h3 font-weight-bold my-5">Plans</p>
        <div class="text-center">
          <ProductContainer :image="image"/>
        </div>
      </b-container>
    </div>

    <b-container>
      <p class="h3 font-weight-bold my-5">Products used</p>

      <b-row>
        <b-col cols="12" md="4" class="mb-4 mb-md-0" v-for="(product,index) in products" :key="index">
          <b-img
            :src="product.image"
            alt="eco-prime"
            class="w-100"
          ></b-img>
          <p class="h4 font-weight-bold mt-3">{{product.name}}</p>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductContainer from '../components/ProductContainer.vue'
export default {
  components:{
    ProductContainer
  },
  data(){
    return {
      products:[
        {
          name:'ECO PRIME 40',
          image:"~/static/imgs/soft-fall.png",

        },
        {
          name:'SOFT FALL 15MM',
          image:'~/static/imgs/soft-fall.png',
        },
        {
          name:'Cross section example',
          image:'~/static/imgs/cross-section.png'
        },
      ],
      image:"../static/imgs/plan.png"
    }
  }
}
</script>

