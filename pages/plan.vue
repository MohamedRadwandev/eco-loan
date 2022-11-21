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
          <b-img src="~/static/imgs/plan-2.png" alt="Plan" fluid></b-img>
        </div>
      </b-container>
    </div>

    <b-container>
      <p class="h3 font-weight-bold my-5">Products used</p>

      <b-row>
        <b-col cols="12" md="4" class="mb-4 mb-md-0">
          <b-img
            src="~/static/imgs/eco-prime.png"
            alt="eco-prime"
            class="w-100"
          ></b-img>
          <p class="h4 font-weight-bold mt-3">ECO PRIME 40</p>
        </b-col>
        <b-col cols="12" md="4" class="mb-4 mb-md-0">
          <b-img
            src="~/static/imgs/soft-fall.png"
            alt="eco-prime"
            class="w-100"
          ></b-img>
          <p class="h4 font-weight-bold mt-3">SOFT FALL 15MM</p>
        </b-col>
        <b-col cols="12" md="4" class="mb-4 mb-md-0">
          <b-img
            src="~/static/imgs/cross-section.png"
            alt="eco-prime"
            class="w-100"
          ></b-img>
          <p class="h4 font-weight-bold mt-3">Cross section example</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
