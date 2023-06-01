<template>
  <div class="base-container">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-container>
        <b-navbar-brand href="#" class="flex-grow-1">
          <img src="~/static/imgs/logo.png" alt="Logo" />
        </b-navbar-brand>


        <b-navbar-nav class="ml-lg-auto flex-grow-1 flex-lg-grow-0">
          <!-- <b-btn variant="outline-white" class="mr-lg-4 my-3 my-lg-0 px-5">REQUEST FINANCE</b-btn> -->
          <QuoteButton  v-if="!$route.path.includes('job')"/>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <div class="mt-5 p-0">
    <nuxt />
    </div>

    <footer class="footer pt-3 mt-5 bg-dark text-white">
      <b-container>
        <b-row>
          <!-- <b-col cols="12" class="mb-4">
            <img src="~/static/imgs/kiwi.png" alt="" />
          </b-col>
          <b-col cols="12" md="4" class="mt-3 mt-md-0">
            <p class="h5 md-h4">SHOWROOMS</p>

            <div class="mt-4 h6 md-h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
            <div class="mt-4 h6 md-h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
            <div class="mt-4 h6 md-h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="mt-4 mt-md-0">
            <p class="h5 md-h4">BLOGS</p>

            <div class="d-flex flex-column mt-4" style="gap:12px">
              <a href="#" class="text-success h6 md-h5 mb-0">
                10 Things You Need to Know Before Buying Artificial Grass
              </a>
              <a href="#" class="text-success h6 md-h5 mb-0"> How Is Artificial Grass Made? </a>
              <a href="#" class="text-success h6 md-h5 mb-0">
                Is Artificial Grass Worth the Money?
              </a>
              <a href="#" class="text-success h6 md-h5 mb-0">
                Advantages of an Artificial Turf Sports Fields
              </a>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="mt-4 mt-md-0">
            <p class="h5 md-h4 ">CONTACT</p>

            <div class="d-flex flex-column mt-4" style="gap:12px">
              <div class="d-flex">
                <b-icon icon="telephone-fill" variant="white"></b-icon>
                <p class="ml-3 mb-0 h6 md-h5">
                  0800 002 648 <br />
                  +64 9 320 4613 (International) <br />
                  Mon-Fri, 9AM to 5PM
                </p>
              </div>

              <div class="d-flex">
                <b-icon icon="envelope-fill" variant="white"></b-icon>
                <a href="mailto:care@ecolawn.nz" class="ml-3 text-success h6 md-h5" style="line-height: 15px;">care@ecolawn.nz</a>
              </div>
              <div class="d-flex">
                <b-icon icon="house-door-fill" variant="white"></b-icon>
                <p class="ml-3 mb-0 h6 md-h5">
                  74B Patiki Road, Rosebank Auckland 1026 (Head office and
                  warehouse – not a showroom)
                </p>
              </div>
            </div>
          </b-col> -->
          <b-col cols="12" class="text-center mb-4">
            <img src="~/static/imgs/logo.png" alt="Logo" />

            <p class="font-weight-bold h6 mt-3">
              Copyright © 2021 by Eco Lawn. All right reserved.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <div class="bg-primary py-4">
        <b-container class="d-flex align-items-center">
          <b-icon icon="exclamation-circle-fill" font-scale="1.8"></b-icon>

          <!-- <p class="mb-0 ml-4 h6 line-height-sm">
            The intended recipient of this Job Brief agrees that the content and pricing of this contract is commercially sensitive and that they, therefore, agree to keep the information entirely confidential, under all circumstances and agree they will not share this information with any third party whatsoever
          </p> -->
          <p class="mb-0 ml-4 h6 line-height-sm">
            The intended recipient of this {{FooterText}} agrees that the content and pricing of this contract is commercially sensitive and that they, therefore, agree to keep the information entirely confidential, even in circumstances where the tender is not accepted! And agree they will not share this information with any third party whatsoever”

          </p>

        </b-container>
      </div>
    </footer>
  </div>
</template>


<script>
import QuoteButton from '../components/quote/QuoteButton.vue'
export default {
  components:{
    QuoteButton
  },
  computed:{
    FooterText(){
      return this.$route.path.includes('job')?'job':'quote'
    }
  },
  mounted(){
    console.log(this.$route)
  }
}
</script>
<style>
.base-container {
  min-width:440px

}
</style>
