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
      <b-container class="">
        <p class="h3 font-weight-bold my-5">Plans</p>
        <div class="text-center " v-b-modal.modal1>
          <!-- <ProductContainer :image="image"/> -->
        <img :src="image" alt="" >

        </div>
      </b-container>
    </div>
    <div>
    <!-- <b-button >Launch demo modal</b-button> -->

    <b-modal id="modal1"  style="height:500px" content-class="p-0" modal-class="full-screen" ok-only="false" cancel-only="false" hide-footer>
      <div class="p-0" >
        <!-- <ProductContainer  :image="image" style="height:100%"/> -->
        <img :src="image" alt="" >

      </div>
    </b-modal>
  </div>
    <b-container>
      <p class="h3 font-weight-bold my-5">Products used</p>

      <b-row>
        <b-col cols="12" md="4" class="mb-4 mb-md-0" v-for="(product,index) in products" :key="index">
          <b-img
            :src="product?.image"
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
          image:"https://ecolawn.mohamedradwan.me/imgs/soft-fall.png",

        },
        {
          name:'SOFT FALL 15MM',
          image:'https://ecolawn.mohamedradwan.me/imgs/soft-fall.png',
        },
        {
          name:'Cross section example',
          image:'https://ecolawn.mohamedradwan.me/imgs/cross-section.png'
        },
      ],
      image:"https://ecolawn.mohamedradwan.me/imgs/plan-2.png"
    }
  }
}
</script>

<style>

.full-screen .modal-dialog {
  max-width: 100%;
  height: 100%;
  padding:24px
}

.full-screen .modal-dialog .modal-content {
  /* height: 100% */
}
</style>
