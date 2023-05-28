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
    <!-- <div class="py-5 bg-green-400" > -->
      <b-container class="">
        <p class="h3 font-weight-bold my-5">Plans</p>
        <b-row>
          <b-col cols="12">
            <div class="text-center " v-b-modal.modal1>
          <!-- <ProductContainer :image="image"/> -->
              <img :src="image" fluid-grow alt="" style="max-width:100%">
            </div>
          </b-col>
        </b-row>
      </b-container>
    <!-- </div> -->
    <div>
    <!-- <b-button >Launch demo modal</b-button> -->

    <b-modal id="modal1"  style="height:500px" content-class="p-0" modal-class="full-screen" ok-only="false" cancel-only="false" hide-footer>
      <!-- <div class="p-0" > -->
        <!-- <ProductContainer  :image="image" style="height:100%"/> -->
        <!-- <b-container  > -->
          <b-col col="12" >
          <b-img :src="image" fluid-grow class="" alt="" style="width:100%;height:100%"></b-img>

          </b-col>
        <!-- </b-container> -->
      <!-- </div> -->
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
  /* width:100vw */
  }

  @media (max-width: 576px) {
    .full-screen .modal-dialog .modal-content {
  height: 50%;
  padding:0px;
  margin-top:20%

  /* width:100vw */
  }

  .full-screen .modal-dialog {
  padding:0px;

}
#modal1___BV_modal_header_ {
  padding: 0.5rem;
}
#modal1___BV_modal_body_{
  display: flex ;
  align-items: center ;
  padding:0px;
}
.image-container {
  display:flex;
  justify-content: center;
}
}
</style>
