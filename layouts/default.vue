<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">
          <img src="~/static/imgs/logo.png" alt="Logo" />
        </b-navbar-brand>


        <b-navbar-nav class="ml-md-auto flex-grow-1 flex-md-grow-0">
          <b-btn variant="outline-white" class="mr-md-4 my-3 my-md-0 px-5">REQUEST FINANCE</b-btn>
          <b-btn variant="success" class="px-5 mb-3 mb-md-0">PAY DEPOSIT</b-btn>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <nuxt />

    <footer class="footer pt-5 mt-5 bg-dark text-white">
      <b-container>
        <b-row>
          <b-col cols="12" class="mb-4">
            <img src="~/static/imgs/kiwi.png" alt="" />
          </b-col>
          <b-col cols="12" md="4">
            <p class="h4">SHOWROOMS</p>

            <div class="mt-5 h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
            <div class="mt-4 h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
            <div class="mt-4 h5">
              <p class="font-weight-bold mb-1">
                Domo Luxury Furniture Concepts
              </p>
              <p>1A Shipwright Lane, Parnell, Auckland 1052</p>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <p class="h4">BLOGS</p>

            <a href="#" class="text-success">
              10 Things You Need to Know Before Buying Artificial Grass
            </a>
            <a href="#" class="text-success"> How Is Artificial Grass Made? </a>
            <a href="#" class="text-success">
              Is Artificial Grass Worth the Money?
            </a>
            <a href="#" class="text-success">
              Advantages of an Artificial Turf Sports Fields
            </a>
          </b-col>
          <b-col cols="12" md="4">
            <p class="h4">CONTACT</p>

            <div class="d-flex">
              <b-icon icon="plus"></b-icon>
              <p>
                0800 002 648 <br />
                +64 9 320 4613 (International) <br />
                Mon-Fri, 9AM to 5PM
              </p>
            </div>

            <div class="d-flex">
              <b-icon icon="plus"></b-icon>
              <a href="mailto:care@ecolawn.nz">care@ecolawn.nz</a>
            </div>
            <div class="d-flex">
              <b-icon icon="plus"></b-icon>
              <p>
                74B Patiki Road, Rosebank Auckland 1026 (Head office and
                warehouse – not a showroom)
              </p>
            </div>
          </b-col>
          <b-col cols="12" class="text-center my-5">
            <img src="~/static/imgs/logo.png" alt="Logo" />

            <p class="font-weight-bold">
              Copyright © 2021 by Eco Lawn. All right reserved.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <div class="bg-primary py-4">
        <b-container class="d-flex align-items-center">
          <b-icon icon="plus"></b-icon>

          <p class="mb-0">
            The intended recipient of this quote agrees that the content and
            pricing of this contract is commercially sensitive and that they,
            therefore, agree to keep the information entirely confidential, even
            in circumstances where the tender is not accepted! And agree they
            will not share this information with any third party whatsoever”
          </p>
        </b-container>
      </div>
    </footer>
  </div>
</template>


<script>
</script>