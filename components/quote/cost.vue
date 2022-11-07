<template>
  <b-container class="py-5">
    <p class="h3 font-weight-bold">Cost breakdown</p>

    <b-table
      borderless
      responsive
      :items="items"
      :fields="fields"
      class="mt-5"
      @row-clicked="toggleCollapse"
      details-td-class="d-md-none pt-0"
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
      <template #head(total)>
        Total
        <span
          class="
            h6
            text-muted text-transform-none
            font-weight-normal
            text-nowrap
          "
          >(inc GST)</span
        >
      </template>

      <template #cell(name)="row">
        <div v-if="row.item.name">
          <div class="d-flex align-items-start cursor-pointer">
            <p class="h5 mb-0 font-weight-bold d-inline-block">
              {{ row.item.name }}
            </p>
            <b-icon
              class="text-dark ml-4"
              :icon="row.detailsShowing ? 'chevron-up' : 'chevron-down'"
            ></b-icon>
          </div>

          <p class="h5 mt-2 d-none d-md-block" v-if="row.item._showDetails">
            {{ row.item.description }}
          </p>
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
      <template #cell(price)="row">
        <p class="h5" v-if="row.item.price">${{ row.item.price }}</p>
      </template>
      <template #cell(quantity)="row">
        <p class="h5" v-if="row.item.quantity">{{ row.item.quantity }} M</p>
      </template>
      <template #cell(total)="row">
        <p class="font-weight-bold" v-if="row.item.total">
          ${{ row.item.total }}
        </p>
      </template>

      <template #row-details="row">
        <p class="h5" v-if="row.item.description">
          {{ row.item.description }}
        </p>
      </template>
    </b-table>

    <b-card bg-variant="green-400" border-variant="green-400" class="mt-5">
      <b-card-text
        class="
          py-3
          d-flex
          align-items-start align-items-md-center
          justify-content-between
          flex-column flex-md-row
        "
      >
        <b-btn variant="success" class="px-5 w-100 w-md-auto"
          >VIEW PLAN HERE</b-btn
        >

        <div
          class="
            d-flex
            align-items-start align-items-md-center
            flex-column flex-md-row
            mt-3 mt-md-0
          "
        >
          <p class="h4 mb-0">Total amount (inc GST)</p>
          <p class="font-size-24 font-weight-bold ml-md-4 mb-0">$6,290.07</p>
        </div>
      </b-card-text>
    </b-card>
    <b-card
      bg-variant="dark"
      border-variant="dark"
      class="rounded-0 mt-4 text-white py-3 px-2"
    >
      <b-row>
        <b-col cols="12" md="6">
          <p class="h3 font-weight-bold">Deposit payable</p>
          <p class="h5 line-height-lg mb-0">
            In order to accept this quote you will be required to pay a 55%
            deposit. <br />
            Clearance of your 55% deposit payment will confirm your job booking
            and quote <br />
            acceptance.
          </p>
        </b-col>
        <b-col cols="12" md="6" class="text-md-right">
          <div class="d-flex align-items-center justify-content-end">
            <p class="h4 mb-0">Deposit 50% of total amount</p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">$3,459.54</p>
          </div>
          <p class="h6 mt-2">Deposit due in xx days for work to start</p>
          <div class="d-flex align-items-center justify-content-end mt-4">
            <p class="h4 mb-0">Remainder due on completion</p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">$3,459.54</p>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    BIcon,
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", tdClass: "w-50" },
        "price",
        "quantity",
        "total",
      ],
      items: [
        {
          _showDetails: false,
        },
        {
          name: "H4 timber containment",
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          price: 30,
          quantity: 2,
          total: 30,
          _showDetails: false,
        },
        {
          name: "H4 timber containment",
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          price: 30,
          quantity: 2,
          total: 30,
          _showDetails: false,
        },
        {
          name: "H4 timber containment",
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          price: 30,
          quantity: 2,
          total: 30,
          _showDetails: false,
        },
      ],
      expandAll: false,
    };
  },
  computed: {
    allColsExpanded() {
      return this.items.every((item) => item._showDetails);
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
      this.items.forEach((item) => {
        item._showDetails = this.expandAll;
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
</style>