exports.ids = [8];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7dc3e35e", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_e78ad8d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_e78ad8d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_e78ad8d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_e78ad8d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Terms_vue_vue_type_style_index_0_id_e78ad8d8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.container[data-v-e78ad8d8]{\n     margin-top: 64px;\n}\n@media (min-width: 992px) {\n.container[data-v-e78ad8d8] {\n          margin-top: 120px;\n}\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/Terms.vue?vue&type=template&id=e78ad8d8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('p', {
    staticClass: "h3 text-left text-md-center font-weight-bold"
  }, [_vm._v("Click pay deposit to accept your quote")]), _vm._v(" "), _c('div', {
    staticClass: "accordion mt-4",
    attrs: {
      "role": "tablist"
    }
  }, [_c('b-card', {
    staticClass: "mb-1 rounded-sm py-2",
    attrs: {
      "bg-variant": "transparent",
      "border-variant": "success",
      "no-body": ""
    }
  }, [_c('b-card-header', {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.accordion-1",
      modifiers: {
        "accordion-1": true
      }
    }],
    staticClass: "bg-white cursor-pointer px-3 border-0 d-flex align-items-center justify-content-between",
    attrs: {
      "header-tag": "header",
      "role": "tab"
    }
  }, [_c('p', {
    staticClass: "mb-0 h5 font-weight-bold text-uppercase"
  }, [_vm._v("Terms & conditions")]), _vm._v(" "), _c('b-icon', {
    staticClass: "h3 mb-0 text-dark",
    attrs: {
      "icon": _vm.visible ? 'dash' : 'plus'
    }
  })], 1), _vm._v(" "), _c('b-collapse', {
    attrs: {
      "id": "accordion-1",
      "accordion": "my-accordion",
      "role": "tabpanel"
    },
    model: {
      value: _vm.visible,
      callback: function ($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c('b-card-body', [_c('div', {
    staticClass: "h5"
  }, [_c('p', {
    staticClass: "font-weight-bold mb-3"
  }, [_vm._v("OVERVIEW")]), _vm._v("\n                              \n                              This website is operated by Eco Lawn Limited. Throughout the site, the terms “we”, “us” and “our” refer to Eco Lawn\n                              Limited. Eco Lawn Limited offers this website, including all information, tools and services available from this site to\n                              you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.\n                              \n                              By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the\n                              following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and\n                              policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site,\n                              including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.\n                              \n                              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of\n                              the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this\n                              agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer,\n                              acceptance is expressly limited to these Terms of Service.\n                              \n                              Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can\n                              review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change\n                              or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your\n                              responsibility to check this page periodically for changes. Your continued use of or access to the website following the\n                              posting of any changes constitutes acceptance of those changes.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 1 – ONLINE STORE TERMS")]), _vm._v("\n                              \n                              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province\n                              of residence, or that you are the age of majority in your state or province of residence and you have given us your\n                              consent to allow any of your minor dependents to use this site.\n                              \n                              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any\n                              laws in your jurisdiction (including but not limited to copyright laws).\n                              \n                              You must not transmit any worms or viruses or any code of a destructive nature.\n                              \n                              A breach or violation of any of the Terms will result in an immediate termination of your Services.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 2 – GENERAL CONDITIONS")]), _vm._v("\n                              \n                              We reserve the right to refuse service to anyone for any reason at any time.\n                              \n                              You understand that your content (not including credit card information), may be transferred unencrypted and involve (a)\n                              transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting\n                              networks or devices. Credit card information is always encrypted during transfer over networks.\n                              \n                              You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or\n                              access to the Service or any contact on the website through which the service is provided, without express written\n                              permission by us.\n                              \n                              The headings used in this agreement are included for convenience only and will not limit or otherwise affect these\n                              Terms.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION")]), _vm._v("\n                              \n                              We are not responsible if information made available on this site is not accurate, complete or current. The material on\n                              this site is provided for general information only and should not be relied upon or used as the sole basis for making\n                              decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance\n                              on the material on this site is at your own risk.\n                              \n                              This site may contain certain historical information. Historical information, necessarily, is not current and is\n                              provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no\n                              obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our\n                              site.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 4 – MODIFICATIONS TO THE SERVICE AND PRICES")]), _vm._v("\n                              \n                              Prices for our products are subject to change without notice.\n                              \n                              We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at\n                              any time.\n                              \n                              We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of\n                              the Service.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 5 – PRODUCTS OR SERVICES (if applicable)")]), _vm._v("\n                              \n                              Certain products or services may be available exclusively online through the website. These products or services may\n                              have limited quantities and are subject to return or exchange only according to our Return Policy.\n                              \n                              We have made every effort to display as accurately as possible the colors and images of our products that appear at the\n                              store. We cannot guarantee that your computer monitor’s display of any color will be accurate.\n                              \n                              We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic\n                              region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities\n                              of any products or services that we offer. All descriptions of products or product pricing are subject to change at\n                              anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any\n                              offer for any product or service made on this site is void where prohibited.\n                              \n                              We do not warrant that the quality of any products, services, information, or other material purchased or obtained by\n                              you will meet your expectations, or that any errors in the Service will be corrected.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 6 – ACCURACY OF BILLING AND ACCOUNT INFORMATION")]), _vm._v("\n                              \n                              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities\n                              purchased per person, per household or per order. These restrictions may include orders placed by or under the same\n                              customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event\n                              that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing\n                              address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in\n                              our sole judgment, appear to be placed by dealers, resellers or distributors.\n                              \n                              You agree to provide current, complete and accurate purchase and account information for all purchases made at our\n                              store. You agree to promptly update your account and other information, including your email address and credit card\n                              numbers and expiration dates, so that we can complete your transactions and contact you as needed.\n                              \n                              For more detail, please review our Returns Policy.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 7 – OPTIONAL TOOLS")]), _vm._v("\n                              \n                              We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.\n                              \n                              You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties,\n                              representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising\n                              from or relating to your use of optional third-party tools.\n                              \n                              Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should\n                              ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party\n                              provider(s).\n                              \n                              We may also, in the future, offer new services and/or features through the website (including, the release of new tools\n                              and resources). Such new features and/or services shall also be subject to these Terms of Service.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 8 – THIRD-PARTY LINKS")]), _vm._v("\n                              \n                              Certain content, products and services available via our Service may include materials from third-parties.\n                              \n                              Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not\n                              responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or\n                              responsibility for any third-party materials or websites, or for any other materials, products, or services of\n                              third-parties.\n                              \n                              We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any\n                              other transactions made in connection with any third-party websites. Please review carefully the third-party’s policies\n                              and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or\n                              questions regarding third-party products should be directed to the third-party.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 9 – USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS")]), _vm._v("\n                              \n                              If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you\n                              send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or\n                              otherwise (collectively, ‘comments’), you agree that we may, at any time, without restriction, edit, copy, publish,\n                              distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no\n                              obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to\n                              any comments.\n                              \n                              We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are\n                              unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any\n                              party’s intellectual property or these Terms of Service.\n                              \n                              You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy,\n                              personality or other personal or proprietary right. You further agree that your comments will not contain libelous or\n                              otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way\n                              affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be\n                              someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely\n                              responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any\n                              comments posted by you or any third-party.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 10 – PERSONAL INFORMATION")]), _vm._v("\n                              \n                              Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 11 – ERRORS, INACCURACIES AND OMISSIONS")]), _vm._v("\n                              \n                              Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or\n                              omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times\n                              and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update\n                              information or cancel orders if any information in the Service or on any related website is inaccurate at any time\n                              without prior notice (including after you have submitted your order).\n                              \n                              We undertake no obligation to update, amend or clarify information in the Service or on any related website, including\n                              without limitation, pricing information, except as required by law. No specified update or refresh date applied in the\n                              Service or on any related website, should be taken to indicate that all information in the Service or on any related\n                              website has been modified or updated.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 12 – PROHIBITED USES")]), _vm._v("\n                              \n                              In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its\n                              content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to\n                              violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe\n                              upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse,\n                              insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion,\n                              ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or\n                              transmit viruses or any other type of malicious code that will or may be used in any way that will affect the\n                              functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or\n                              track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any\n                              obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related\n                              website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related\n                              website for violating any of the prohibited uses.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 13 – DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY")]), _vm._v("\n                              \n                              We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or\n                              error-free.\n                              \n                              We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.\n                              \n                              You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any\n                              time, without notice to you.\n                              \n                              You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all\n                              products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and\n                              ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or\n                              implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a\n                              particular purpose, durability, title, and non-infringement.\n                              \n                              In no case shall Eco Lawn Limited, our directors, officers, employees, affiliates, agents, contractors, interns,\n                              suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental,\n                              punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost\n                              savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including\n                              negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using\n                              the service, or for any other claim related in any way to your use of the service or any product, including, but not\n                              limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of\n                              the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if\n                              advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of\n                              liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to\n                              the maximum extent permitted by law.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 14 – INDEMNIFICATION")]), _vm._v("\n                              \n                              You agree to indemnify, defend and hold harmless Eco Lawn Limited and our parent, subsidiaries, affiliates, partners,\n                              officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and\n                              employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or\n                              arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation\n                              of any law or the rights of a third-party.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 15 – SEVERABILITY")]), _vm._v("\n                              \n                              In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such\n                              provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable\n                              portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and\n                              enforceability of any other remaining provisions.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 16 – TERMINATION")]), _vm._v("\n                              \n                              The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of\n                              this agreement for all purposes.\n                              \n                              These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of\n                              Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.\n                              \n                              If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these\n                              Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all\n                              amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any\n                              part thereof).\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 17 – ENTIRE AGREEMENT")]), _vm._v("\n                              \n                              The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver\n                              of such right or provision.\n                              \n                              These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service\n                              constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding\n                              any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us\n                              (including, but not limited to, any prior versions of the Terms of Service).\n                              \n                              Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 18 – GOVERNING LAW")]), _vm._v("\n                              \n                              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in\n                              accordance with the laws of 2/38 Akoranga Drive, Northcote, Auckland, N, 0627, New Zealand.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 19 – CHANGES TO TERMS OF SERVICE")]), _vm._v("\n                              \n                              You can review the most current version of the Terms of Service at any time at this page.\n                              \n                              We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting\n                              updates and changes to our website. It is your responsibility to check our website periodically for changes. Your\n                              continued use of or access to our website or the Service following the posting of any changes to these Terms of Service\n                              constitutes acceptance of those changes.\n                              \n                              \n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 20 – CONTACT INFORMATION")]), _vm._v("\n                              \n                              Questions about the Terms of Service should be sent to us at marketing@ecolawn.nz.\n                              \n                              "), _c('p', {
    staticClass: "font-weight-bold mt-5 mb-3"
  }, [_vm._v("SECTION 21 – SHIPPING AND RETURNS")]), _vm._v("\n                              \n                              Return and Refund Policy\n                              \n                              100% refunds are possible only if the order is cancelled prior to cutting or shipment. There are no refunds once the\n                              product is cut as per the order.\n                              \n                              Shipping Policy\n                              \n                              There is a shipping calculator on the website that calculates the shipping costs with precision, however, there could be\n                              cases when the actual shipping costs are a little bit more than the costs calculated at the time of online checkout\n                              (because of the dimensions or weight of the product). In such a case, we let the customer know about the same at the\n                              time of order processing and the customer should pay the balance before the order is shipped.\n                         ")])])], 1)], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/quote/Terms.vue?vue&type=template&id=e78ad8d8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/quote/Terms.vue?vue&type=script&lang=js&
/* harmony default export */ var Termsvue_type_script_lang_js_ = ({
  data() {
    return {
      visible: false
    };
  }
});
// CONCATENATED MODULE: ./components/quote/Terms.vue?vue&type=script&lang=js&
 /* harmony default export */ var quote_Termsvue_type_script_lang_js_ = (Termsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/quote/Terms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quote_Termsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e78ad8d8",
  "9ab467a6"
  
)

/* harmony default export */ var Terms = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=quote-terms.js.map