<template>
  <b-container class="pt-5 pb-4">
    <p class="h3 font-weight-bold">Products</p>

    <b-table
      borderless
      responsive
      :items="items"
      :fields="fields"
      class="mt-4"
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
      <template #cell(name)="row">
        <div class="d-flex align-items-start cursor-pointer">
          <p class="h5 mb-0 font-weight-bold d-inline-block">
            {{ row.item.name }}
          </p>
          <b-icon
            class="text-dark ml-4"
            :icon="row.detailsShowing ? 'chevron-up' : 'chevron-down'"
          >
          </b-icon>
        </div>

        <p class="h5 mt-2 d-none d-md-block" v-if="row.item._showDetails">
          {{ row.item.description }}
        </p>
      </template>

      <template #cell(quantity)="row">
        <p class="h5">{{ row.item.quantity }} M</p>
      </template>
      <template #row-details="row">
        <p class="h5">
          {{ row.item.description }}
        </p>
      </template>
    </b-table>
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
        { key: "name", tdClass: "w-75 pl-0", thClass: "pl-0" },
        { key: "quantity", tdClass: "text-right", thClass: "text-right" },
      ],
      items: [
        {
          name: "H4 timber containment",
          quantity: 2,
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          _showDetails: false,
        },
        {
          name: "H4 timber containment",
          quantity: 2,
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          _showDetails: false,
        },
        {
          name: "H4 timber containment",
          quantity: 2,
          description:
            "Install timber containment edging using 100x25 RS H4 timber.",
          _showDetails: false,
        },
      ],
    };
  },
  created () {
    this.toggleCollapseAll()
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
