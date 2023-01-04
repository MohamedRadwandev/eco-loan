exports.ids = [7];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e9b2d1c", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_706ecf8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_706ecf8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_706ecf8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_706ecf8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_style_index_0_id_706ecf8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width: 768px){[data-v-706ecf8a] .table tbody tr:first-child{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/Pricing.vue?vue&type=template&id=706ecf8a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "py-5"
  }, [_c('p', {
    staticClass: "h3 font-weight-bold"
  }, [_vm._v("Cost breakdown")]), _vm._v(" "), _c('b-table', {
    staticClass: "mt-4",
    attrs: {
      "borderless": "",
      "responsive": "",
      "items": _vm.items,
      "fields": _vm.fields,
      "details-td-class": "d-md-none pt-0"
    },
    on: {
      "row-clicked": _vm.toggleCollapse
    },
    scopedSlots: _vm._u([{
      key: "head(name)",
      fn: function () {
        return [_vm._v("\n      Name\n      "), _c('b-btn', {
          staticClass: "text-uppercase font-weight-bold ml-4 d-none d-md-inline-block",
          attrs: {
            "variant": "outline-primary",
            "size": "sm"
          },
          on: {
            "click": _vm.toggleCollapseAll
          }
        }, [_vm._v("\n        " + _vm._s(_vm.allColsExpanded || _vm.expandAll ? "Collapse All" : "Expand All") + "\n        "), _c('b-icon', {
          staticClass: "font-weight-bold ml-2",
          attrs: {
            "icon": _vm.allColsExpanded || _vm.expandAll ? 'chevron-up' : 'chevron-down'
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "head(total_amount)",
      fn: function () {
        return [_c('div', {
          staticClass: "text-nowrap text-right"
        }, [_vm._v("\n        Total\n        "), _c('span', {
          staticClass: "h6 text-muted text-transform-none font-weight-normal"
        }, [_vm._v("(inc GST)")])])];
      },
      proxy: true
    }, {
      key: "cell(name)",
      fn: function (row) {
        return [row.item.name ? _c('div', [_c('div', {
          staticClass: "d-flex align-items-start cursor-pointer"
        }, [_c('p', {
          staticClass: "h5 mb-0 font-weight-bold d-inline-block"
        }, [_vm._v("\n            " + _vm._s(row.item.name) + "\n          ")]), _vm._v(" "), _c('b-icon', {
          staticClass: "text-dark ml-3",
          attrs: {
            "icon": row.detailsShowing ? 'chevron-up' : 'chevron-down'
          }
        })], 1), _vm._v(" "), row.item._showDetails ? _c('p', {
          staticClass: "h5 mt-2 d-none d-md-block"
        }, [_vm._v("\n          " + _vm._s(row.item.description) + "\n        ")]) : _vm._e()]) : _c('b-btn', {
          staticClass: "text-uppercase font-weight-bold text-nowrap",
          attrs: {
            "variant": "outline-primary",
            "size": "sm"
          },
          on: {
            "click": _vm.toggleCollapseAll
          }
        }, [_vm._v("\n        " + _vm._s(_vm.allColsExpanded || _vm.expandAll ? "Collapse All" : "Expand All") + "\n        "), _c('b-icon', {
          staticClass: "font-weight-bold ml-2",
          attrs: {
            "icon": _vm.allColsExpanded || _vm.expandAll ? 'chevron-up' : 'chevron-down'
          }
        })], 1)];
      }
    }, {
      key: "cell(sub_total)",
      fn: function (row) {
        return [row.item.sub_total ? _c('p', {
          staticClass: "h5"
        }, [_vm._v("\n        " + _vm._s(_vm._f("money")(row.item.sub_total)) + "\n      ")]) : _vm._e()];
      }
    }, {
      key: "cell(quantity)",
      fn: function (row) {
        return [row.item.quantity ? _c('p', {
          staticClass: "h5"
        }, [_vm._v("\n        " + _vm._s(row.item.quantity) + " " + _vm._s(row.item.unit) + "\n      ")]) : _vm._e()];
      }
    }, {
      key: "cell(total_amount)",
      fn: function (row) {
        return [row.item.total_amount ? _c('p', {
          staticClass: "font-weight-bold h5"
        }, [_vm._v("\n        " + _vm._s(_vm._f("money")(row.item.total_amount)) + "\n      ")]) : _vm._e()];
      }
    }, {
      key: "row-details",
      fn: function (row) {
        return [row.item.description ? _c('p', {
          staticClass: "h5"
        }, [_vm._v("\n        " + _vm._s(row.item.description) + "\n      ")]) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c('b-card', {
    staticClass: "mt-4",
    attrs: {
      "bg-variant": "green-400",
      "border-variant": "green-400"
    }
  }, [_c('b-card-text', {
    staticClass: "py-3 d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row",
    attrs: {
      "text-tag": "div"
    }
  }, [_c('b-btn', {
    staticClass: "px-5 w-100 w-md-auto",
    attrs: {
      "variant": "success"
    }
  }, [_vm._v("VIEW PLAN HERE")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-start align-items-md-start flex-column flex-md-row mt-3 mt-md-0"
  }, [_c('p', {
    staticClass: "h4 mb-0 line-height-xl"
  }, [_vm._v("Total amount (inc GST)")]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "font-size-24 font-weight-bold ml-md-4 mb-0"
  }, [_vm._v("\n            " + _vm._s(_vm._f("money")(_vm.quote.pricing.total_amount)) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted h6 mt-1 text-right mb-0"
  }, [_vm._v("\n            GST included $500.50\n          ")])])])], 1)], 1), _vm._v(" "), _c('b-card', {
    staticClass: "rounded-0 mt-4 text-white py-0 px-0 border-0",
    attrs: {
      "bg-variant": "dark",
      "border-variant": "dark",
      "body-class": "p-4"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('p', {
    staticClass: "h3 font-weight-bold"
  }, [_vm._v("Deposit payable")]), _vm._v(" "), _c('p', {
    staticClass: "h5 line-height-lg mb-0"
  }, [_vm._v("\n          In order to accept this quote you will be required to pay a\n          " + _vm._s(_vm.quote.pricing.deposit_percentage) + "% deposit. Clearance of your\n          " + _vm._s(_vm.quote.pricing.deposit_percentage) + "% deposit payment will confirm\n          your job booking and quote acceptance.\n        ")])]), _vm._v(" "), _c('b-col', {
    staticClass: "text-md-right mt-5 mt-md-0",
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-between justify-content-md-end"
  }, [_c('p', {
    staticClass: "h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"
  }, [_vm._v("\n            Deposit " + _vm._s(_vm.quote.pricing.deposit_percentage) + "% of total amount\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "font-size-24 font-weight-bold mb-0 ml-4"
  }, [_vm._v("\n            " + _vm._s(_vm._f("money")(_vm.quote.pricing.deposit_amount)) + "\n          ")])]), _vm._v(" "), _c('p', {
    staticClass: "h6 mt-2 w-50 w-md-auto"
  }, [_vm._v("\n          Deposit due in xx days for work to start\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center justify-content-between justify-content-md-end mt-4"
  }, [_c('p', {
    staticClass: "h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"
  }, [_vm._v("\n            Remainder due on completion\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "font-size-24 font-weight-bold mb-0 ml-4"
  }, [_vm._v("\n            " + _vm._s(_vm._f("money")(_vm.quote.pricing.total_amount - _vm.quote.pricing.deposit_amount)) + "\n          ")])])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quote/Pricing.vue?vue&type=template&id=706ecf8a&scoped=true&

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/Pricing.vue?vue&type=script&lang=js&

/* harmony default export */ var Pricingvue_type_script_lang_js_ = ({
  inject: ["quote"],
  components: {
    BIcon: external_bootstrap_vue_["BIcon"]
  },
  data() {
    return {
      fields: [{
        key: "name",
        label: "Name",
        tdClass: "w-65"
      }, {
        key: "sub_total",
        label: "price"
      }, {
        key: "quantity",
        label: "quantity",
        thClass: "text-center",
        tdClass: "text-center"
      }, {
        key: "total_amount",
        label: "total",
        tdClass: "text-right"
      }],
      items: [{
        _showDetails: false
      }, ...this.formatItems()],
      expandAll: false
    };
  },
  computed: {
    allColsExpanded() {
      return this.items.slice(1).every(item => item._showDetails);
    }
  },
  watch: {
    allColsExpanded(val) {
      this.expandAll = val;
    }
  },
  methods: {
    toggleCollapse(item) {
      item._showDetails = !item._showDetails;
    },
    toggleCollapseAll() {
      this.expandAll = !this.expandAll;
      this.items.slice(1).forEach(item => {
        item._showDetails = this.expandAll;
      });
    },
    formatItems() {
      return this.quote.items.map(item => {
        return {
          _showDetails: false,
          ...item
        };
      });
    }
  }
});
// CONCATENATED MODULE: ./components/quote/Pricing.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_Pricingvue_type_script_lang_js_ = (Pricingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/quote/Pricing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_Pricingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "706ecf8a",
  "6ac78128"
  
)

/* harmony default export */ var Pricing = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quote-pricing.js.map