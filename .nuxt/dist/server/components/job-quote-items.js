exports.ids = [3];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job/QuoteItems.vue?vue&type=template&id=5a903e2d&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "pt-5 pb-4"
  }, [_c('p', {
    staticClass: "h3 font-weight-bold"
  }, [_vm._v("Products")]), _vm._v(" "), _c('b-table', {
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
      key: "cell(name)",
      fn: function (row) {
        return [_c('div', {
          staticClass: "d-flex align-items-start cursor-pointer"
        }, [_c('p', {
          staticClass: "h5 mb-0 font-weight-bold d-inline-block"
        }, [_vm._v("\n            " + _vm._s(row.item.name) + "\n          ")]), _vm._v(" "), _c('b-icon', {
          staticClass: "text-dark ml-4",
          attrs: {
            "icon": row.detailsShowing ? 'chevron-up' : 'chevron-down'
          }
        })], 1), _vm._v(" "), row.item._showDetails ? _c('p', {
          staticClass: "h5 mt-2 d-none d-md-block"
        }, [_vm._v("\n          " + _vm._s(row.item.description) + "\n        ")]) : _vm._e()];
      }
    }, {
      key: "cell(quantity)",
      fn: function (row) {
        return [_c('p', {
          staticClass: "h5"
        }, [_vm._v(_vm._s(row.item.quantity) + " M")])];
      }
    }, {
      key: "row-details",
      fn: function (row) {
        return [_c('p', {
          staticClass: "h5"
        }, [_vm._v("\n             " + _vm._s(row.item.description) + "\n        ")])];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/job/QuoteItems.vue?vue&type=template&id=5a903e2d&

// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/job/QuoteItems.vue?vue&type=script&lang=js&

/* harmony default export */ var QuoteItemsvue_type_script_lang_js_ = ({
  components: {
    BIcon: external_bootstrap_vue_["BIcon"]
  },
  data() {
    return {
      fields: [{
        key: "name",
        tdClass: "w-75 pl-0",
        thClass: "pl-0"
      }, {
        key: "quantity",
        tdClass: "text-right",
        thClass: "text-right"
      }],
      items: [{
        name: "H4 timber containment",
        quantity: 2,
        description: "Install timber containment edging using 100x25 RS H4 timber.",
        _showDetails: false
      }, {
        name: "H4 timber containment",
        quantity: 2,
        description: "Install timber containment edging using 100x25 RS H4 timber.",
        _showDetails: false
      }, {
        name: "H4 timber containment",
        quantity: 2,
        description: "Install timber containment edging using 100x25 RS H4 timber.",
        _showDetails: false
      }]
    };
  },
  methods: {
    toggleCollapse(item) {
      item._showDetails = !item._showDetails;
    }
  }
});
// CONCATENATED MODULE: ./components/job/QuoteItems.vue?vue&type=script&lang=js&
 /* harmony default export */ var job_QuoteItemsvue_type_script_lang_js_ = (QuoteItemsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/job/QuoteItems.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  job_QuoteItemsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2bbc3ce6"
  
)

/* harmony default export */ var QuoteItems = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=job-quote-items.js.map