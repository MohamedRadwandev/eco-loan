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
      <template #cell(sub_total)="row">
        <p class="h5" v-if="row.item.sub_total">{{ row.item.sub_total | money }}</p>
      </template>
      <template #cell(quantity)="row">
        <p class="h5" v-if="row.item.quantity">{{ row.item.quantity }} {{ row.item.unit }}</p>
      </template>
      <template #cell(total_amount)="row">
        <p class="font-weight-bold" v-if="row.item.total_amount">
          {{ row.item.total_amount | money }}
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
          <p class="font-size-24 font-weight-bold ml-md-4 mb-0">
            {{ quote.pricing.total_amount | money}}
          </p>
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
            In order to accept this quote you will be required to pay a {{ quote.pricing.deposit_percentage}}%
            deposit. <br />
            Clearance of your {{ quote.pricing.deposit_percentage}}% deposit payment will confirm your job booking
            and quote <br />
            acceptance.
          </p>
        </b-col>
        <b-col cols="12" md="6" class="text-md-right">
          <div class="d-flex align-items-center justify-content-end">
            <p class="h4 mb-0">Deposit {{ quote.pricing.deposit_percentage}}% of total amount</p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">{{ quote.pricing.deposit_amount |money }}</p>
          </div>
          <p class="h6 mt-2">Deposit due in xx days for work to start</p>
          <div class="d-flex align-items-center justify-content-end mt-4">
            <p class="h4 mb-0">Remainder due on completion</p>
            <p class="font-size-24 font-weight-bold mb-0 ml-4">
              {{ (quote.pricing.total_amount  - quote.pricing.deposit_amount) | money}}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  inject: ['quote'],
  components: {
    BIcon,
  },
  data() {
    return {
      fields: [
        { key: "name", label: "Name", tdClass: "w-50" },
        { key: "sub_total", label: "price" },
        { key: "quantity", label: "quantity" },
        { key: "total_amount", label: "total" },
      ],
      items: [
        {
          _showDetails: false,
        },
        ...this.formatItems()
      ],
      expandAll: false,
    };
  },
  computed: {
    allColsExpanded() {
      return this.items.slice(1).every((item) => item._showDetails);
    }
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
      return this.quote.items.map(item => {
        return {
          _showDetails:false,
          ...item
        };
      })
    }
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