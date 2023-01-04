exports.ids = [5];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/CustomerInfo.vue?vue&type=template&id=0b6860a4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "py-5 bg-green-400"
  }, [_c('b-container', [_c('b-row', [_c('b-col', {
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('p', {
    staticClass: "h3 md-h2 font-weight-bold mb-4"
  }, [_vm._v("\n          " + _vm._s(_vm.name.first) + "’s Eco Lawn quote\n        ")]), _vm._v(" "), _c('p', {
    staticClass: "h4 md-h3 font-weight-bold mb-4"
  }, [_vm._v("Customer info")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-start mb-3",
    staticStyle: {
      "gap": "50px"
    }
  }, [_c('div', [_c('p', {
    staticClass: "h5 font-weight-bold"
  }, [_vm._v("First name")]), _vm._v(" "), _c('p', {
    staticClass: "h5"
  }, [_vm._v(_vm._s(_vm.name.first))])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "h5 font-weight-bold"
  }, [_vm._v("Last name")]), _vm._v(" "), _c('p', {
    staticClass: "h5"
  }, [_vm._v(_vm._s(_vm.name.last))])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_c('p', {
    staticClass: "h5 font-weight-bold"
  }, [_vm._v("Company")]), _vm._v(" "), _c('p', {
    staticClass: "h5"
  }, [_vm._v(_vm._s(_vm._f("emptyDash")(_vm.quote.customer_organization)))])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "h5 font-weight-bold"
  }, [_vm._v("Site address")]), _vm._v(" "), _c('p', {
    staticClass: "h5"
  }, [_vm._v(_vm._s(_vm._f("emptyDash")(_vm.quote.site_address)))])])]), _vm._v(" "), _c('b-col', {
    staticClass: "text-md-right d-flex flex-column justify-content-between mt-5 mt-md-0",
    attrs: {
      "cols": "12",
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "mb-md-5 mb-3"
  }, [_c('p', {
    staticClass: "h4 md-h3 font-weight-bold mb-2"
  }, [_vm._v("\n            Sales ref # " + _vm._s(_vm.quote.pipedrive_deal_id) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "h4 md-h3 font-weight-bold"
  }, [_vm._v("Quote ref # " + _vm._s(_vm.quote.id))])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "mb-4"
  }, [_c('p', {
    staticClass: "h5 font-weight-bold mb-3"
  }, [_vm._v("\n              Date of quote:\n              " + _vm._s(_vm.created_date) + "\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "h5"
  }, [_vm._v("This quote is valid for 7 days.")])]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "h3 font-weight-bold text-success d-md-inline-block mr-4"
  }, [_vm._v("\n              QUOTE\n            ")]), _vm._v(" "), _c('p', {
    staticClass: "h1 font-weight-bold d-inline-block"
  }, [_vm._v("\n              " + _vm._s(_vm._f("money")(_vm.quote.pricing.total_amount)) + "\n            ")])])])])], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quote/CustomerInfo.vue?vue&type=template&id=0b6860a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/CustomerInfo.vue?vue&type=script&lang=js&
/* harmony default export */ var CustomerInfovue_type_script_lang_js_ = ({
  inject: ["quote"],
  computed: {
    name() {
      const name = this.quote.customer_name.split(" ");
      return {
        first: name[0],
        last: name[1]
      };
    },
    created_date() {
      return new Date(this.quote.quote_create_date).toLocaleDateString();
    }
  }
});
// CONCATENATED MODULE: ./components/quote/CustomerInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_CustomerInfovue_type_script_lang_js_ = (CustomerInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/quote/CustomerInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_CustomerInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58eccef6"
  
)

/* harmony default export */ var CustomerInfo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quote-customer-info.js.map