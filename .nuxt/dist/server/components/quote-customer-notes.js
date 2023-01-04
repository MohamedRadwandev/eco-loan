exports.ids = [6];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("09d7aa63", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNotes_vue_vue_type_style_index_0_id_10e3b62f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNotes_vue_vue_type_style_index_0_id_10e3b62f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNotes_vue_vue_type_style_index_0_id_10e3b62f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNotes_vue_vue_type_style_index_0_id_10e3b62f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerNotes_vue_vue_type_style_index_0_id_10e3b62f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.card[data-v-10e3b62f] {\n  margin-left: -28px;\n  margin-top: 32px;\n}\nol[data-v-10e3b62f] {\n  margin-left: -15px;\n}\nol li[data-v-10e3b62f] {\n  margin-bottom: 60px;\n}\nol li ol li[data-v-10e3b62f]:not(:last-child) {\n  margin-bottom: 24px;\n}\nol li ol li[data-v-10e3b62f]:last-child {\n  margin-bottom: 0;\n}\nol li ol li[data-v-10e3b62f] {\n  font-weight: 700;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/CustomerNotes.vue?vue&type=template&id=10e3b62f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('p', {
    staticClass: "h3 font-weight-bold mb-5"
  }, [_vm._v("Next steps")]), _vm._v(" "), _c('ol', {
    staticClass: "font-weight-bold h4"
  }, [_c('li', [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("Before quote acceptance")]), _vm._v(" "), _c('b-card', {
    staticClass: "h5 rounded-sm py-4",
    attrs: {
      "bg-variant": "gray-400",
      "border-variant": "gray-400"
    }
  }, [_c('b-card-text', {
    attrs: {
      "text-tag": "div"
    }
  }, [_c('ol', [_c('li', [_vm._v("Current lead time is 7-9 weeks")]), _vm._v(" "), _c('li', [_vm._v("Pebbles to be left onsite as agreed with client")]), _vm._v(" "), _c('li', [_vm._v("\n              Pavers to be stacked onsite or cut around as agreed with client\n              at $25+gst per paver quantity is to be agreed prior to install\n            ")])])])], 1)], 1), _vm._v(" "), _c('li', [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("Accepting your quote")]), _vm._v(" "), _c('b-card', {
    staticClass: "h5 rounded-sm py-4",
    attrs: {
      "bg-variant": "gray-400",
      "border-variant": "gray-400"
    }
  }, [_c('b-card-text', {
    attrs: {
      "text-tag": "div"
    }
  }, [_c('ol', [_c('li', [_vm._v("Click the PAY DEPOSIT button to accept your quote")]), _vm._v(" "), _c('li', [_vm._v("\n              You'll have the option to pay by Bank Deposit or Credit Card\n            ")]), _vm._v(" "), _c('li', [_vm._v("Accounts will clear your payment")]), _vm._v(" "), _c('li', [_vm._v("\n              Operations will then schedule you into the next block of\n              installs\n            ")]), _vm._v(" "), _c('li', [_vm._v("\n              You'll be emailed the with the date your work will start\n              "), _c('span', [_vm._v("(Please note date may be subject to change, based on other\n                booked jobs and weather conditions)")])]), _vm._v(" "), _c('li', [_vm._v("\n              The above usually takes 2-5 business days to arrange and plan\n            ")]), _vm._v(" "), _c('li', [_vm._v("\n              If required, a final inspection usually occurs within 14 days of\n              job start\n            ")])])])], 1)], 1), _vm._v(" "), _c('li', [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("After quote acceptancece")]), _vm._v(" "), _c('b-card', {
    staticClass: "h5 rounded-sm py-4",
    attrs: {
      "bg-variant": "gray-400",
      "border-variant": "gray-400"
    }
  }, [_c('b-card-text', {
    attrs: {
      "text-tag": "div"
    }
  }, [_c('ol', [_c('li', [_vm._v("\n              Clear the work area/s of all objects including any rubbish,\n              toys, pot plants, furniture etc.\n            ")]), _vm._v(" "), _c('li', [_vm._v("\n              Please also ensure that the access path between our parking area\n              and the work area is clear of furniture and any other objects.\n            ")]), _vm._v(" "), _c('li', [_vm._v("\n              Eco Lawn requires full access to the driveway, walkways and\n              power.\n            ")])])])], 1)], 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quote/CustomerNotes.vue?vue&type=template&id=10e3b62f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/CustomerNotes.vue?vue&type=script&lang=js&
/* harmony default export */ var CustomerNotesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/quote/CustomerNotes.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_CustomerNotesvue_type_script_lang_js_ = (CustomerNotesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/quote/CustomerNotes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_CustomerNotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "10e3b62f",
  "2dd25fae"
  
)

/* harmony default export */ var CustomerNotes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quote-customer-notes.js.map