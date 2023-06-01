<template>
    <b-container class="py-5 pricing-container" >
    <p class="h3 font-weight-bold">Cost breakdown</p>
    <b-row>
      <b-col cols="12" class="pricing-col">
        <b-table
      borderless
      :items="items"
      :fields="fields"
      class="mt-4 my-table"
      @row-clicked="toggleCollapse"
      details-td-class="d-md-none pt-0"
      thead-class="text-left"
      td-class="text-left"
    >
      <template #head(name)>
        Name
        <b-btn
          class="text-uppercase font-weight-bold ml-4 d-none d-md-inline-block"
          variant="outline-primary"
          size="sm"
          @click="toggleCollapseAll"
        >
          {{ allColsExpanded || expandAll ? "Collapse All" : "Expand All" }}
          <b-icon
            class="font-weight-bold ml-2"
            :icon="allColsExpanded || expandAll ? 'chevron-up' : 'chevron-down'"
          ></b-icon>
        </b-btn>
      </template>
      <!-- <template #head(total_amount)>
        <div class="text-nowrap text-right">
          Total
          <span class="h6 text-muted text-transform-none font-weight-normal"
            >(inc GST)</span
          >
        </div>
      </template> -->

      <template #cell(name)="row">
        <div v-if="row.item.name">
          <div class="d-flex align-items-start cursor-pointer">
            <p class="h5 mb-0 font-weight-bold d-inline-block">
              {{ row.item.name }}
            </p>
            <b-icon
              class="text-dark ml-3"
              :icon="row.detailsShowing ? 'chevron-up' : 'chevron-down'"
            ></b-icon>
          </div>

          <div class="h5 mt-2 d-none d-md-block" v-if="row.item._showDetails">

            <!-- <b-row>
              <b-col cols="12" md="4" class="mb-4 mb-md-0">
                <b-img
                  src="~/static/imgs/eco-prime.png"
                  alt="eco-prime"
                  class="w-100"
                ></b-img>
                <p class="h5 font-weight-bold mt-3">ECO PRIME 40</p>
              </b-col>
              <b-col cols="12" md="4" class="mb-4 mb-md-0">
                <b-img
                  src="~/static/imgs/soft-fall.png"
                  alt="eco-prime"
                  class="w-100"
                ></b-img>
                <p class="h5 font-weight-bold mt-3">SOFT FALL 15MM</p>
              </b-col>
              <b-col cols="12" md="4" class="mb-4 mb-md-0">
                <b-img
                  src="~/static/imgs/cross-section.png"
                  alt="eco-prime"
                  class="w-100"
                ></b-img>
                <p class="h5 font-weight-bold mt-3">Cross section example</p>
              </b-col>
            </b-row> -->

            {{ row.item.description }}
            <br />
            <!-- <b-btn variant="primary" class="mt-3" @click="$router.push('/plan')">Click to enlarge </b-btn> -->
          </div>
        </div>
        <b-btn
          v-else
          class="text-uppercase font-weight-bold text-nowrap"
          variant="outline-primary"
          size="sm"
          @click="toggleCollapseAll"
        >
          {{ allColsExpanded || expandAll ? "Collapse All" : "Expand All" }}
          <b-icon
            class="font-weight-bold ml-2"
            :icon="allColsExpanded || expandAll ? 'chevron-up' : 'chevron-down'"
          ></b-icon>
        </b-btn>
      </template>
      <template #cell(sub_total)="row">
        <p class="h5" v-if="row.item.sub_total">
          {{ row.item.sub_total | money }}
        </p>
      </template>
      <template #cell(quantity)="row">
        <p class="h5" v-if="row.item.quantity">
          {{ row.item.quantity }} {{ row.item.unit }}
        </p>
      </template>
      <template #cell(total_amount)="row">
        <p class="font-weight-bold h5" v-if="row.item.total_amount">
          {{ row.item.total_amount | money }}
        </p>
      </template>

      <template #row-details="row">
        <p class="h5" v-if="row.item.description">
          {{ row.item.description }}
        </p>
      </template>
        </b-table>
        <b-card bg-variant="green-400" border-variant="green-400" class="mt-4">
      <b-card-text
        text-tag="div"
        class="py-3 d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row"
      >
        <!-- <b-btn variant="success" class="px-5 w-100 w-md-auto"
          >VIEW PLAN HERE</b-btn
        > -->
        <img
          src="https://ecolawn.mohamedradwan.me/imgs/plan-2.png"
          class="plan-image"
          style="object-fit: contain; width: 230px; height: 100%;cursor:pointer"
          @click="$router.push('/plan')"
        >
        <div
          class="d-flex align-items-start align-items-md-start flex-column flex-md-row mt-3 mt-md-0"
        >
          <p class="h4 mb-0 line-height-xl">Total amount (inc GST)</p>
          <div>
            <p class="font-size-24 font-weight-bold ml-md-4 mb-0">
              {{ quote.pricing.total_amount | money }}
            </p>
            <p class="text-muted h6 mt-1 text-right mb-0">
              GST included $500.50
            </p>
          </div>
        </div>
      </b-card-text>
    </b-card>
        <b-card
      bg-variant="dark"
      border-variant="dark"
      class="rounded-0 mt-4 text-white py-0 px-0 border-0"
      body-class="p-4"
      style="min-width:440px"
    >
      <b-row>
        <b-col cols="12" md="6">
          <p class="h3 font-weight-bold">Deposit payable</p>
          <p class="h5 line-height-lg mb-0">
            In order to accept this quote you will be required to pay a
            {{ quote.pricing.deposit_percentage }}% deposit. Clearance of your
            {{ quote.pricing.deposit_percentage }}% deposit payment will confirm
            your job booking and quote acceptance.
          </p>
        </b-col>
        <b-col cols="12" md="6" class="text-md-right mt-5 mt-md-0">
          <div
            class="d-flex align-items-center justify-content-between justify-content-md-end"
          >
            <p class="h5 md-h4 mb-0 font-weight-bold font-weight-md-medium">
              Deposit {{ quote.pricing.deposit_percentage }}% of total amount
            </p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">
              {{ quote.pricing.deposit_amount | money }}
            </p>
          </div>
          <p class="h6 mt-2 w-50 w-md-auto">
            Deposit due in xx days for work to start
          </p>
          <div
            class="d-flex align-items-center justify-content-between justify-content-md-end mt-4"
          >
            <p class="h5 md-h4 mb-0 font-weight-bold font-weight-md-medium">
              Remainder due on completion
            </p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">
              {{
                (quote.pricing.total_amount - quote.pricing.deposit_amount)
                  | money
              }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">

      </b-col>

    </b-row>
  </b-container>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  inject: ["quote"],
  components: {
    BIcon,
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", tdClass: "w-65" },
        { key: "sub_total", label: "price" },
        {
          key: "quantity",
          label: "quantity",
          thClass: "text-center",
          tdClass: "text-center",
        },
        { key: "total_amount", label: "total", tdClass: "text-left" },
      ],
      items: [
        {
          _showDetails: false,
        },
        ...this.formatItems(),
      ],
      expandAll: false,
    };
  },
  computed: {
    allColsExpanded() {
      return this.items.slice(1).every((item) => item._showDetails);
    },
  },
  watch: {
    allColsExpanded(val) {
      this.expandAll = val;
    },
  },
  methods: {
    toggleCollapse(item) {
      item._showDetails = !item._showDetails;
    },
    toggleCollapseAll() {
      this.expandAll = !this.expandAll;
      this.items.slice(1).forEach((item) => {
        item._showDetails = this.expandAll;
      });
    },
    formatItems() {
      return this.quote.items.map((item) => {
        return {
          _showDetails: false,
          ...item,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  ::v-deep .table tbody tr:first-child {
    display: none;
  }
}
.my-table td {
  white-space: normal;
  word-break: break-word;
}

@media (max-width: 767px) {
//   .pricing-container {
//     max-width: 100%;
//   }
  .plan-image{
  width:100% !important
  }
  .pricing-col{
    padding-left:0px;
    padding-right:0px;

  }
}

</style>
