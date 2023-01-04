module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/job-customer-info","2":"components/job-notes","3":"components/job-quote-items","4":"components/job-site-plan","5":"components/quote-customer-info","6":"components/quote-customer-notes","7":"components/quote-pricing","8":"components/quote-terms","9":"pages/Job","10":"pages/Plan","11":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=5f1ba1fc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_c('b-navbar', {
    attrs: {
      "toggleable": "lg",
      "type": "dark",
      "variant": "dark"
    }
  }, [_c('b-container', [_c('b-navbar-brand', {
    staticClass: "flex-grow-1",
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(16),
      "alt": "Logo"
    }
  })]), _vm._v(" "), _c('b-navbar-nav', {
    staticClass: "ml-lg-auto flex-grow-1 flex-lg-grow-0"
  }, [_c('b-btn', {
    staticClass: "mr-lg-4 my-3 my-lg-0 px-5",
    attrs: {
      "variant": "outline-white"
    }
  }, [_vm._v("REQUEST FINANCE")]), _vm._v(" "), _c('b-btn', {
    staticClass: "px-5 mb-3 mb-md-0",
    attrs: {
      "variant": "success"
    }
  }, [_vm._v("PAY DEPOSIT")])], 1)], 1)], 1), _vm._ssrNode(" "), _c('nuxt'), _vm._ssrNode(" "), _vm._ssrNode("<footer class=\"footer pt-5 mt-5 bg-dark text-white\">", "</footer>", [_c('b-container', [_c('b-row', [_c('b-col', {
    staticClass: "mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(32),
      "alt": ""
    }
  })]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-3 mt-md-0",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('p', {
    staticClass: "h5 md-h4"
  }, [_vm._v("SHOWROOMS")]), _vm._v(" "), _c('div', {
    staticClass: "mt-4 h6 md-h5"
  }, [_c('p', {
    staticClass: "font-weight-bold mb-1"
  }, [_vm._v("\n              Domo Luxury Furniture Concepts\n            ")]), _vm._v(" "), _c('p', [_vm._v("1A Shipwright Lane, Parnell, Auckland 1052")])]), _vm._v(" "), _c('div', {
    staticClass: "mt-4 h6 md-h5"
  }, [_c('p', {
    staticClass: "font-weight-bold mb-1"
  }, [_vm._v("\n              Domo Luxury Furniture Concepts\n            ")]), _vm._v(" "), _c('p', [_vm._v("1A Shipwright Lane, Parnell, Auckland 1052")])]), _vm._v(" "), _c('div', {
    staticClass: "mt-4 h6 md-h5"
  }, [_c('p', {
    staticClass: "font-weight-bold mb-1"
  }, [_vm._v("\n              Domo Luxury Furniture Concepts\n            ")]), _vm._v(" "), _c('p', [_vm._v("1A Shipwright Lane, Parnell, Auckland 1052")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 mt-md-0",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('p', {
    staticClass: "h5 md-h4"
  }, [_vm._v("BLOGS")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-column mt-4",
    staticStyle: {
      "gap": "12px"
    }
  }, [_c('a', {
    staticClass: "text-success h6 md-h5 mb-0",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n              10 Things You Need to Know Before Buying Artificial Grass\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "text-success h6 md-h5 mb-0",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(" How Is Artificial Grass Made? ")]), _vm._v(" "), _c('a', {
    staticClass: "text-success h6 md-h5 mb-0",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n              Is Artificial Grass Worth the Money?\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "text-success h6 md-h5 mb-0",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n              Advantages of an Artificial Turf Sports Fields\n            ")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "mt-4 mt-md-0",
    attrs: {
      "cols": "12",
      "md": "4"
    }
  }, [_c('p', {
    staticClass: "h5 md-h4"
  }, [_vm._v("CONTACT")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-column mt-4",
    staticStyle: {
      "gap": "12px"
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('b-icon', {
    attrs: {
      "icon": "telephone-fill",
      "variant": "white"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "ml-3 mb-0 h6 md-h5"
  }, [_vm._v("\n                0800 002 648 "), _c('br'), _vm._v("\n                +64 9 320 4613 (International) "), _c('br'), _vm._v("\n                Mon-Fri, 9AM to 5PM\n              ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  }, [_c('b-icon', {
    attrs: {
      "icon": "envelope-fill",
      "variant": "white"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "ml-3 text-success h6 md-h5",
    staticStyle: {
      "line-height": "15px"
    },
    attrs: {
      "href": "mailto:care@ecolawn.nz"
    }
  }, [_vm._v("care@ecolawn.nz")])], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  }, [_c('b-icon', {
    attrs: {
      "icon": "house-door-fill",
      "variant": "white"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "ml-3 mb-0 h6 md-h5"
  }, [_vm._v("\n                74B Patiki Road, Rosebank Auckland 1026 (Head office and\n                warehouse – not a showroom)\n              ")])], 1)])]), _vm._v(" "), _c('b-col', {
    staticClass: "text-center mt-5 mb-4",
    attrs: {
      "cols": "12"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(16),
      "alt": "Logo"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "font-weight-bold h6 mt-3"
  }, [_vm._v("\n            Copyright © 2021 by Eco Lawn. All right reserved.\n          ")])])], 1)], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-primary py-4\">", "</div>", [_c('b-container', {
    staticClass: "d-flex align-items-center"
  }, [_c('b-icon', {
    attrs: {
      "icon": "exclamation-circle-fill",
      "font-scale": "1.8"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mb-0 ml-4 h6 line-height-sm"
  }, [_vm._v("\n          The intended recipient of this quote agrees that the content and\n          pricing of this contract is commercially sensitive and that they,\n          therefore, agree to keep the information entirely confidential, even\n          in circumstances where the tender is not accepted! And agree they\n          will not share this information with any third party whatsoever”\n        ")])], 1)], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=5f1ba1fc&


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.76106c9.png";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _default_vue_vue_type_template_id_5f1ba1fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default_vue_vue_type_template_id_5f1ba1fc___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _default_vue_vue_type_template_id_5f1ba1fc___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "50fb7c32"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(34);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("32df6d42", content, true)

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */\n.bv-no-focus-ring:focus {\n  outline: none;\n}\n\n@media (max-width: 575.98px) {\n  .bv-d-xs-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .bv-d-sm-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .bv-d-md-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .bv-d-lg-down-none {\n    display: none !important;\n  }\n}\n.bv-d-xl-down-none {\n  display: none !important;\n}\n\n.form-control.focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control.focus.is-valid {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.form-control.focus.is-invalid {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.b-avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1;\n  max-width: 100%;\n  max-height: auto;\n  text-align: center;\n  overflow: visible;\n  position: relative;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.b-avatar:focus {\n  outline: 0;\n}\n.b-avatar.btn, .b-avatar[href] {\n  padding: 0;\n  border: 0;\n}\n.b-avatar.btn .b-avatar-img img, .b-avatar[href] .b-avatar-img img {\n  transition: -webkit-transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n.b-avatar.btn:not(:disabled):not(.disabled), .b-avatar[href]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img, .b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img {\n  -webkit-transform: scale(1.15);\n  transform: scale(1.15);\n}\n.b-avatar.disabled, .b-avatar:disabled, .b-avatar[disabled] {\n  opacity: 0.65;\n  pointer-events: none;\n}\n.b-avatar .b-avatar-custom,\n.b-avatar .b-avatar-text,\n.b-avatar .b-avatar-img {\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-mask-image: radial-gradient(white, black);\n  mask-image: radial-gradient(white, black);\n}\n.b-avatar .b-avatar-text {\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.b-avatar[href] {\n  text-decoration: none;\n}\n.b-avatar > .b-icon {\n  width: 60%;\n  height: auto;\n  max-width: 100%;\n}\n.b-avatar .b-avatar-img img {\n  width: 100%;\n  height: 100%;\n  max-height: auto;\n  border-radius: inherit;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.b-avatar .b-avatar-badge {\n  position: absolute;\n  min-height: 1.5em;\n  min-width: 1.5em;\n  padding: 0.25em;\n  line-height: 1;\n  border-radius: 10em;\n  font-size: 70%;\n  font-weight: 700;\n  z-index: 1;\n}\n\n.b-avatar-sm {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.b-avatar-sm .b-avatar-text {\n  font-size: calc(0.6rem);\n}\n.b-avatar-sm .b-avatar-badge {\n  font-size: calc(0.42rem);\n}\n\n.b-avatar-lg {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n.b-avatar-lg .b-avatar-text {\n  font-size: calc(1.4rem);\n}\n.b-avatar-lg .b-avatar-badge {\n  font-size: calc(0.98rem);\n}\n\n.b-avatar-group .b-avatar-group-inner {\n  display: flex;\n  flex-wrap: wrap;\n}\n.b-avatar-group .b-avatar {\n  border: 1px solid #dee2e6;\n}\n.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled),\n.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled) {\n  z-index: 1;\n}\n\n.b-calendar {\n  display: inline-flex;\n}\n.b-calendar .b-calendar-inner {\n  min-width: 250px;\n}\n.b-calendar .b-calendar-header,\n.b-calendar .b-calendar-nav {\n  margin-bottom: 0.25rem;\n}\n.b-calendar .b-calendar-nav .btn {\n  padding: 0.25rem;\n}\n.b-calendar output {\n  padding: 0.25rem;\n  font-size: 80%;\n}\n.b-calendar output.readonly {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-calendar .b-calendar-footer {\n  margin-top: 0.5rem;\n}\n.b-calendar .b-calendar-grid {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n.b-calendar .b-calendar-grid .row {\n  flex-wrap: nowrap;\n}\n.b-calendar .b-calendar-grid-caption {\n  padding: 0.25rem;\n}\n.b-calendar .b-calendar-grid-body .col[data-date] .btn {\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1;\n  margin: 3px auto;\n  padding: 9px 0;\n}\n.b-calendar .btn:disabled, .b-calendar .btn.disabled, .b-calendar .btn[aria-disabled=true] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.card-img-left {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-img-right {\n  border-top-right-radius: calc(0.25rem - 1px);\n  border-bottom-right-radius: calc(0.25rem - 1px);\n}\n\n.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret::after {\n  display: none !important;\n}\n.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret::before {\n  display: none !important;\n}\n.dropdown .dropdown-menu:focus {\n  outline: none;\n}\n\n.b-dropdown-form {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  width: 100%;\n  clear: both;\n  font-weight: 400;\n}\n.b-dropdown-form:focus {\n  outline: 1px dotted !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n}\n.b-dropdown-form.disabled, .b-dropdown-form:disabled {\n  outline: 0 !important;\n  color: #adb5bd;\n  pointer-events: none;\n}\n\n.b-dropdown-text {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  margin-bottom: 0;\n  width: 100%;\n  clear: both;\n  font-weight: lighter;\n}\n\n.custom-checkbox.b-custom-control-lg,\n.input-group-lg .custom-checkbox {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding-left: 1.875rem;\n}\n.custom-checkbox.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-checkbox .custom-control-label::before {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 0.3rem;\n}\n.custom-checkbox.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-checkbox .custom-control-label::after {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox.b-custom-control-sm,\n.input-group-sm .custom-checkbox {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding-left: 1.3125rem;\n}\n.custom-checkbox.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-checkbox .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 0.2rem;\n}\n.custom-checkbox.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-checkbox .custom-control-label::after {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  background-size: 50% 50%;\n}\n\n.custom-switch.b-custom-control-lg,\n.input-group-lg .custom-switch {\n  padding-left: 2.8125rem;\n}\n.custom-switch.b-custom-control-lg .custom-control-label,\n.input-group-lg .custom-switch .custom-control-label {\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.custom-switch.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-switch .custom-control-label::before {\n  top: 0.3125rem;\n  height: 1.25rem;\n  left: -2.8125rem;\n  width: 2.1875rem;\n  border-radius: 0.625rem;\n}\n.custom-switch.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-switch .custom-control-label::after {\n  top: calc(\n        0.3125rem + 2px\n      );\n  left: calc(\n        -2.8125rem + 2px\n      );\n  width: calc(\n  1.25rem - 4px\n);\n  height: calc(\n  1.25rem - 4px\n);\n  border-radius: 0.625rem;\n  background-size: 50% 50%;\n}\n.custom-switch.b-custom-control-lg .custom-control-input:checked ~ .custom-control-label::after,\n.input-group-lg .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  -webkit-transform: translateX(0.9375rem);\n  transform: translateX(0.9375rem);\n}\n\n.custom-switch.b-custom-control-sm,\n.input-group-sm .custom-switch {\n  padding-left: 1.96875rem;\n}\n.custom-switch.b-custom-control-sm .custom-control-label,\n.input-group-sm .custom-switch .custom-control-label {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.custom-switch.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-switch .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.96875rem;\n  width: 1.53125rem;\n  height: 0.875rem;\n  border-radius: 0.4375rem;\n}\n.custom-switch.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-switch .custom-control-label::after {\n  top: calc(\n        0.21875rem + 2px\n      );\n  left: calc(\n        -1.96875rem + 2px\n      );\n  width: calc(\n  0.875rem - 4px\n);\n  height: calc(\n  0.875rem - 4px\n);\n  border-radius: 0.4375rem;\n  background-size: 50% 50%;\n}\n.custom-switch.b-custom-control-sm .custom-control-input:checked ~ .custom-control-label::after,\n.input-group-sm .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  -webkit-transform: translateX(0.65625rem);\n  transform: translateX(0.65625rem);\n}\n\n.input-group > .input-group-prepend > .btn-group > .btn,\n.input-group > .input-group-append:not(:last-child) > .btn-group > .btn,\n.input-group > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn-group > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .btn-group > .btn,\n.input-group > .input-group-prepend:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.b-form-btn-label-control.form-control {\n  display: flex;\n  align-items: stretch;\n  height: auto;\n  padding: 0;\n  background-image: none;\n}\n.input-group .b-form-btn-label-control.form-control {\n  padding: 0;\n}\n\n[dir=rtl] .b-form-btn-label-control.form-control, .b-form-btn-label-control.form-control[dir=rtl] {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .b-form-btn-label-control.form-control > label, .b-form-btn-label-control.form-control[dir=rtl] > label {\n  text-align: right;\n}\n\n.b-form-btn-label-control.form-control > .btn {\n  line-height: 1;\n  font-size: inherit;\n  box-shadow: none !important;\n  border: 0;\n}\n.b-form-btn-label-control.form-control > .btn:disabled {\n  pointer-events: none;\n}\n.b-form-btn-label-control.form-control.is-valid > .btn {\n  color: #28a745;\n}\n.b-form-btn-label-control.form-control.is-invalid > .btn {\n  color: #dc3545;\n}\n.b-form-btn-label-control.form-control > .dropdown-menu {\n  padding: 0.5rem;\n}\n.b-form-btn-label-control.form-control > .form-control {\n  height: auto;\n  min-height: calc(calc(1.5em + 0.75rem + 2px) - 2px);\n  padding-left: 0.25rem;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  word-break: break-word;\n  font-size: inherit;\n  white-space: normal;\n  cursor: pointer;\n}\n.b-form-btn-label-control.form-control > .form-control.form-control-sm {\n  min-height: calc(calc(1.5em + 0.5rem + 2px) - 2px);\n}\n.b-form-btn-label-control.form-control > .form-control.form-control-lg {\n  min-height: calc(calc(1.5em + 1rem + 2px) - 2px);\n}\n.input-group.input-group-sm .b-form-btn-label-control.form-control > .form-control {\n  min-height: calc(calc(1.5em + 0.5rem + 2px) - 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.input-group.input-group-lg .b-form-btn-label-control.form-control > .form-control {\n  min-height: calc(calc(1.5em + 1rem + 2px) - 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.b-form-btn-label-control.form-control[aria-disabled=true], .b-form-btn-label-control.form-control[aria-readonly=true] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-form-btn-label-control.form-control[aria-disabled=true] {\n  pointer-events: none;\n}\n.b-form-btn-label-control.form-control[aria-disabled=true] > label {\n  cursor: default;\n}\n\n.b-form-btn-label-control.btn-group > .dropdown-menu {\n  padding: 0.5rem;\n}\n\n.custom-file-label {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.b-custom-control-lg.custom-file,\n.b-custom-control-lg .custom-file-input,\n.b-custom-control-lg .custom-file-label,\n.input-group-lg.custom-file,\n.input-group-lg .custom-file-input,\n.input-group-lg .custom-file-label {\n  font-size: 1.25rem;\n  height: calc(1.5em + 1rem + 2px);\n}\n.b-custom-control-lg .custom-file-label,\n.b-custom-control-lg .custom-file-label:after,\n.input-group-lg .custom-file-label,\n.input-group-lg .custom-file-label:after {\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n}\n.b-custom-control-lg .custom-file-label,\n.input-group-lg .custom-file-label {\n  border-radius: 0.3rem;\n}\n.b-custom-control-lg .custom-file-label::after,\n.input-group-lg .custom-file-label::after {\n  font-size: inherit;\n  height: calc(\n  1.5em + 1rem\n);\n  border-radius: 0 0.3rem 0.3rem 0;\n}\n\n.b-custom-control-sm.custom-file,\n.b-custom-control-sm .custom-file-input,\n.b-custom-control-sm .custom-file-label,\n.input-group-sm.custom-file,\n.input-group-sm .custom-file-input,\n.input-group-sm .custom-file-label {\n  font-size: 0.875rem;\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.b-custom-control-sm .custom-file-label,\n.b-custom-control-sm .custom-file-label:after,\n.input-group-sm .custom-file-label,\n.input-group-sm .custom-file-label:after {\n  padding: 0.25rem 0.5rem;\n  line-height: 1.5;\n}\n.b-custom-control-sm .custom-file-label,\n.input-group-sm .custom-file-label {\n  border-radius: 0.2rem;\n}\n.b-custom-control-sm .custom-file-label::after,\n.input-group-sm .custom-file-label::after {\n  font-size: inherit;\n  height: calc(\n  1.5em + 0.5rem\n);\n  border-radius: 0 0.2rem 0.2rem 0;\n}\n\n.was-validated .form-control:invalid, .was-validated .form-control:valid, .form-control.is-invalid, .form-control.is-valid {\n  background-position: right calc(0.375em + 0.1875rem) center;\n}\n\ninput[type=color].form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control.form-control-sm,\n.input-group-sm input[type=color].form-control {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control.form-control-lg,\n.input-group-lg input[type=color].form-control {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control:disabled {\n  background-color: #adb5bd;\n  opacity: 0.65;\n}\n\n.input-group > .custom-range {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group > .custom-range + .form-control,\n.input-group > .custom-range + .form-control-plaintext,\n.input-group > .custom-range + .custom-select,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-range + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control + .custom-range,\n.input-group > .form-control-plaintext + .custom-range,\n.input-group > .custom-select + .custom-range,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-file + .custom-range {\n  margin-left: -1px;\n}\n.input-group > .custom-range:focus {\n  z-index: 3;\n}\n.input-group > .custom-range:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-range:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-range {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0 0.75rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  height: calc(1.5em + 0.75rem + 2px);\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .input-group > .custom-range {\n    transition: none;\n  }\n}\n.input-group > .custom-range:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-group > .custom-range:disabled, .input-group > .custom-range[readonly] {\n  background-color: #e9ecef;\n}\n\n.input-group-lg > .custom-range {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0 1rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .custom-range {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0 0.5rem;\n  border-radius: 0.2rem;\n}\n\n.was-validated .input-group .custom-range:valid, .input-group .custom-range.is-valid {\n  border-color: #28a745;\n}\n.was-validated .input-group .custom-range:valid:focus, .input-group .custom-range.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-range:valid:focus::-webkit-slider-thumb, .custom-range.is-valid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-moz-range-thumb, .custom-range.is-valid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-ms-thumb, .custom-range.is-valid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb, .custom-range.is-valid::-webkit-slider-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb:active, .custom-range.is-valid::-webkit-slider-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-runnable-track, .custom-range.is-valid::-webkit-slider-runnable-track {\n  background-color: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-moz-range-thumb, .custom-range.is-valid::-moz-range-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-thumb:active, .custom-range.is-valid::-moz-range-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-track, .custom-range.is-valid::-moz-range-track {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid ~ .valid-feedback,\n.was-validated .custom-range:valid ~ .valid-tooltip, .custom-range.is-valid ~ .valid-feedback,\n.custom-range.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:valid::-ms-thumb, .custom-range.is-valid::-ms-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-thumb:active, .custom-range.is-valid::-ms-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-track-lower, .custom-range.is-valid::-ms-track-lower {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-ms-track-upper, .custom-range.is-valid::-ms-track-upper {\n  background: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .input-group .custom-range:invalid, .input-group .custom-range.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .input-group .custom-range:invalid:focus, .input-group .custom-range.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-range:invalid:focus::-webkit-slider-thumb, .custom-range.is-invalid:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-moz-range-thumb, .custom-range.is-invalid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-ms-thumb, .custom-range.is-invalid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb, .custom-range.is-invalid::-webkit-slider-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb:active, .custom-range.is-invalid::-webkit-slider-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-runnable-track, .custom-range.is-invalid::-webkit-slider-runnable-track {\n  background-color: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-moz-range-thumb, .custom-range.is-invalid::-moz-range-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-thumb:active, .custom-range.is-invalid::-moz-range-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-track, .custom-range.is-invalid::-moz-range-track {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid ~ .invalid-feedback,\n.was-validated .custom-range:invalid ~ .invalid-tooltip, .custom-range.is-invalid ~ .invalid-feedback,\n.custom-range.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:invalid::-ms-thumb, .custom-range.is-invalid::-ms-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-thumb:active, .custom-range.is-invalid::-ms-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-track-lower, .custom-range.is-invalid::-ms-track-lower {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-ms-track-upper, .custom-range.is-invalid::-ms-track-upper {\n  background: rgba(220, 53, 69, 0.35);\n}\n\n.custom-radio.b-custom-control-lg,\n.input-group-lg .custom-radio {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding-left: 1.875rem;\n}\n.custom-radio.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-radio .custom-control-label::before {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n}\n.custom-radio.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-radio .custom-control-label::after {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background: no-repeat 50%/50% 50%;\n}\n\n.custom-radio.b-custom-control-sm,\n.input-group-sm .custom-radio {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding-left: 1.3125rem;\n}\n.custom-radio.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-radio .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 50%;\n}\n.custom-radio.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-radio .custom-control-label::after {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  background: no-repeat 50%/50% 50%;\n}\n\n.b-rating {\n  text-align: center;\n}\n.b-rating.d-inline-flex {\n  width: auto;\n}\n.b-rating .b-rating-star,\n.b-rating .b-rating-value {\n  padding: 0 0.25em;\n}\n.b-rating .b-rating-value {\n  min-width: 2.5em;\n}\n.b-rating .b-rating-star {\n  display: inline-flex;\n  justify-content: center;\n  outline: 0;\n}\n.b-rating .b-rating-star .b-rating-icon {\n  display: inline-flex;\n  transition: all 0.15s ease-in-out;\n}\n.b-rating.disabled, .b-rating:disabled {\n  background-color: #e9ecef;\n  color: #6c757d;\n}\n.b-rating:not(.disabled):not(.readonly) .b-rating-star {\n  cursor: pointer;\n}\n.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon,\n.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n.b-rating[dir=rtl] .b-rating-star-half {\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.b-form-spinbutton {\n  text-align: center;\n  overflow: hidden;\n  background-image: none;\n  padding: 0;\n}\n[dir=rtl] .b-form-spinbutton:not(.flex-column), .b-form-spinbutton[dir=rtl]:not(.flex-column) {\n  flex-direction: row-reverse;\n}\n\n.b-form-spinbutton output {\n  font-size: inherit;\n  outline: 0;\n  border: 0;\n  background-color: transparent;\n  width: auto;\n  margin: 0;\n  padding: 0 0.25rem;\n}\n.b-form-spinbutton output > div,\n.b-form-spinbutton output > bdi {\n  display: block;\n  min-width: 2.25em;\n  height: 1.5em;\n}\n.b-form-spinbutton.flex-column {\n  height: auto;\n  width: auto;\n}\n.b-form-spinbutton.flex-column output {\n  margin: 0 0.25rem;\n  padding: 0.25rem 0;\n}\n.b-form-spinbutton:not(.d-inline-flex):not(.flex-column) {\n  output-width: 100%;\n}\n.b-form-spinbutton.d-inline-flex:not(.flex-column) {\n  width: auto;\n}\n.b-form-spinbutton .btn {\n  line-height: 1;\n  box-shadow: none !important;\n}\n.b-form-spinbutton .btn:disabled {\n  pointer-events: none;\n}\n.b-form-spinbutton .btn:hover:not(:disabled) > div > .b-icon {\n  -webkit-transform: scale(1.25);\n  transform: scale(1.25);\n}\n.b-form-spinbutton.disabled, .b-form-spinbutton.readonly {\n  background-color: #e9ecef;\n}\n.b-form-spinbutton.disabled {\n  pointer-events: none;\n}\n\n.b-form-tags.focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.b-form-tags.focus.is-valid {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.b-form-tags.focus.is-invalid {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.b-form-tags.disabled {\n  background-color: #e9ecef;\n}\n\n.b-form-tags-list {\n  margin-top: -0.25rem;\n}\n.b-form-tags-list .b-form-tags-field,\n.b-form-tags-list .b-form-tag {\n  margin-top: 0.25rem;\n}\n\n.b-form-tags-input {\n  color: #495057;\n}\n\n.b-form-tag {\n  font-size: 75%;\n  font-weight: normal;\n  line-height: 1.5;\n  margin-right: 0.25rem;\n}\n.b-form-tag.disabled {\n  opacity: 0.75;\n}\n.b-form-tag > button.b-form-tag-remove {\n  color: inherit;\n  font-size: 125%;\n  line-height: 1;\n  float: none;\n  margin-left: 0.25rem;\n}\n\n.form-control-sm .b-form-tag {\n  line-height: 1.5;\n}\n\n.form-control-lg .b-form-tag {\n  line-height: 1.5;\n}\n\n.media-aside {\n  display: flex;\n  margin-right: 1rem;\n}\n\n.media-aside-right {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n\n.modal-backdrop {\n  opacity: 0.5;\n}\n\n.b-pagination-pills .page-item .page-link {\n  border-radius: 50rem !important;\n  margin-left: 0.25rem;\n  line-height: 1;\n}\n.b-pagination-pills .page-item:first-child .page-link {\n  margin-left: 0;\n}\n\n.popover.b-popover {\n  display: block;\n  opacity: 1;\n  outline: 0;\n}\n.popover.b-popover.fade:not(.show) {\n  opacity: 0;\n}\n.popover.b-popover.show {\n  opacity: 1;\n}\n\n.b-popover-primary.popover {\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.b-popover-primary.bs-popover-top > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #b8daff;\n}\n.b-popover-primary.bs-popover-top > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #cce5ff;\n}\n.b-popover-primary.bs-popover-right > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #b8daff;\n}\n.b-popover-primary.bs-popover-right > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #cce5ff;\n}\n.b-popover-primary.bs-popover-bottom > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #b8daff;\n}\n.b-popover-primary.bs-popover-bottom > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #bdddff;\n}\n.b-popover-primary.bs-popover-bottom .popover-header::before, .b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #bdddff;\n}\n.b-popover-primary.bs-popover-left > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #b8daff;\n}\n.b-popover-primary.bs-popover-left > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #cce5ff;\n}\n.b-popover-primary .popover-header {\n  color: #212529;\n  background-color: #bdddff;\n  border-bottom-color: #a3d0ff;\n}\n.b-popover-primary .popover-body {\n  color: #004085;\n}\n\n.b-popover-secondary.popover {\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-top > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-top > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #e2e3e5;\n}\n.b-popover-secondary.bs-popover-right > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-right > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #e2e3e5;\n}\n.b-popover-secondary.bs-popover-bottom > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-bottom > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #dadbde;\n}\n.b-popover-secondary.bs-popover-bottom .popover-header::before, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #dadbde;\n}\n.b-popover-secondary.bs-popover-left > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-left > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #e2e3e5;\n}\n.b-popover-secondary .popover-header {\n  color: #212529;\n  background-color: #dadbde;\n  border-bottom-color: #ccced2;\n}\n.b-popover-secondary .popover-body {\n  color: #383d41;\n}\n\n.b-popover-success.popover {\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-top > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-top > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d4edda;\n}\n.b-popover-success.bs-popover-right > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-right > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d4edda;\n}\n.b-popover-success.bs-popover-bottom > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-bottom > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #c9e8d1;\n}\n.b-popover-success.bs-popover-bottom .popover-header::before, .b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #c9e8d1;\n}\n.b-popover-success.bs-popover-left > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-left > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d4edda;\n}\n.b-popover-success .popover-header {\n  color: #212529;\n  background-color: #c9e8d1;\n  border-bottom-color: #b7e1c1;\n}\n.b-popover-success .popover-body {\n  color: #155724;\n}\n\n.b-popover-info.popover {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.b-popover-info.bs-popover-top > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #bee5eb;\n}\n.b-popover-info.bs-popover-top > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d1ecf1;\n}\n.b-popover-info.bs-popover-right > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #bee5eb;\n}\n.b-popover-info.bs-popover-right > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d1ecf1;\n}\n.b-popover-info.bs-popover-bottom > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #bee5eb;\n}\n.b-popover-info.bs-popover-bottom > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #c5e7ed;\n}\n.b-popover-info.bs-popover-bottom .popover-header::before, .b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #c5e7ed;\n}\n.b-popover-info.bs-popover-left > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #bee5eb;\n}\n.b-popover-info.bs-popover-left > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d1ecf1;\n}\n.b-popover-info .popover-header {\n  color: #212529;\n  background-color: #c5e7ed;\n  border-bottom-color: #b2dfe7;\n}\n.b-popover-info .popover-body {\n  color: #0c5460;\n}\n\n.b-popover-warning.popover {\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-top > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-top > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #fff3cd;\n}\n.b-popover-warning.bs-popover-right > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-right > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #fff3cd;\n}\n.b-popover-warning.bs-popover-bottom > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-bottom > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #ffefbe;\n}\n.b-popover-warning.bs-popover-bottom .popover-header::before, .b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #ffefbe;\n}\n.b-popover-warning.bs-popover-left > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-left > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #fff3cd;\n}\n.b-popover-warning .popover-header {\n  color: #212529;\n  background-color: #ffefbe;\n  border-bottom-color: #ffe9a4;\n}\n.b-popover-warning .popover-body {\n  color: #856404;\n}\n\n.b-popover-danger.popover {\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-top > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-top > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #f8d7da;\n}\n.b-popover-danger.bs-popover-right > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-right > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #f8d7da;\n}\n.b-popover-danger.bs-popover-bottom > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-bottom > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #f6cace;\n}\n.b-popover-danger.bs-popover-bottom .popover-header::before, .b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #f6cace;\n}\n.b-popover-danger.bs-popover-left > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-left > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #f8d7da;\n}\n.b-popover-danger .popover-header {\n  color: #212529;\n  background-color: #f6cace;\n  border-bottom-color: #f2b4ba;\n}\n.b-popover-danger .popover-body {\n  color: #721c24;\n}\n\n.b-popover-light.popover {\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-top > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-top > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #fefefe;\n}\n.b-popover-light.bs-popover-right > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-right > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #fefefe;\n}\n.b-popover-light.bs-popover-bottom > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-bottom > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #f6f6f6;\n}\n.b-popover-light.bs-popover-bottom .popover-header::before, .b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #f6f6f6;\n}\n.b-popover-light.bs-popover-left > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-left > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #fefefe;\n}\n.b-popover-light .popover-header {\n  color: #212529;\n  background-color: #f6f6f6;\n  border-bottom-color: #eaeaea;\n}\n.b-popover-light .popover-body {\n  color: #818182;\n}\n\n.b-popover-dark.popover {\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-top > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-top > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d6d8d9;\n}\n.b-popover-dark.bs-popover-right > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-right > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d6d8d9;\n}\n.b-popover-dark.bs-popover-bottom > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-bottom > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #ced0d2;\n}\n.b-popover-dark.bs-popover-bottom .popover-header::before, .b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #ced0d2;\n}\n.b-popover-dark.bs-popover-left > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-left > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d6d8d9;\n}\n.b-popover-dark .popover-header {\n  color: #212529;\n  background-color: #ced0d2;\n  border-bottom-color: #c1c4c5;\n}\n.b-popover-dark .popover-body {\n  color: #1b1e21;\n}\n\n.b-sidebar-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  overflow: visible;\n  z-index: calc(1030 + 5);\n}\n\n.b-sidebar-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0.6;\n}\n\n.b-sidebar {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  width: 320px;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  margin: 0;\n  outline: 0;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n.b-sidebar.slide {\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-sidebar.slide {\n    transition: none;\n  }\n}\n.b-sidebar:not(.b-sidebar-right) {\n  left: 0;\n  right: auto;\n}\n.b-sidebar:not(.b-sidebar-right).slide:not(.show) {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n.b-sidebar:not(.b-sidebar-right) > .b-sidebar-header .close {\n  margin-left: auto;\n}\n.b-sidebar.b-sidebar-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar.b-sidebar-right.slide:not(.show) {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n.b-sidebar.b-sidebar-right > .b-sidebar-header .close {\n  margin-right: auto;\n}\n.b-sidebar > .b-sidebar-header {\n  font-size: 1.5rem;\n  padding: 0.5rem 1rem;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 0;\n  align-items: center;\n}\n[dir=rtl] .b-sidebar > .b-sidebar-header {\n  flex-direction: row-reverse;\n}\n\n.b-sidebar > .b-sidebar-header .close {\n  float: none;\n  font-size: 1.5rem;\n}\n.b-sidebar > .b-sidebar-body {\n  flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n}\n.b-sidebar > .b-sidebar-footer {\n  flex-grow: 0;\n}\n\n.b-skeleton-wrapper {\n  cursor: wait;\n}\n\n.b-skeleton {\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.12);\n  cursor: wait;\n  -webkit-mask-image: radial-gradient(white, black);\n  mask-image: radial-gradient(white, black);\n}\n.b-skeleton::before {\n  content: \" \";\n}\n\n.b-skeleton-text {\n  height: 1rem;\n  margin-bottom: 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-button {\n  width: 75px;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-avatar {\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n}\n\n.b-skeleton-input {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  border: #ced4da solid 1px;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-icon-wrapper svg {\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.b-skeleton-img {\n  height: 100%;\n  width: 100%;\n}\n\n.b-skeleton-animate-wave::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n  -webkit-animation: b-skeleton-animate-wave 1.75s linear infinite;\n  animation: b-skeleton-animate-wave 1.75s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-wave::after {\n    background: none;\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-wave {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n}\n\n@keyframes b-skeleton-animate-wave {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n}\n.b-skeleton-animate-fade {\n  -webkit-animation: b-skeleton-animate-fade 0.875s ease-in-out alternate infinite;\n  animation: b-skeleton-animate-fade 0.875s ease-in-out alternate infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-fade {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\n@keyframes b-skeleton-animate-fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n.b-skeleton-animate-throb {\n  -webkit-animation: b-skeleton-animate-throb 0.875s ease-in alternate infinite;\n  animation: b-skeleton-animate-throb 0.875s ease-in alternate infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-throb {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-throb {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.975);\n    transform: scale(0.975);\n  }\n}\n\n@keyframes b-skeleton-animate-throb {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.975);\n    transform: scale(0.975);\n  }\n}\n.table.b-table.b-table-fixed {\n  table-layout: fixed;\n}\n.table.b-table.b-table-no-border-collapse {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.table.b-table[aria-busy=true] {\n  opacity: 0.55;\n}\n.table.b-table > tbody > tr.b-table-details > td {\n  border-top: none !important;\n}\n.table.b-table > caption {\n  caption-side: bottom;\n}\n.table.b-table.b-table-caption-top > caption {\n  caption-side: top !important;\n}\n.table.b-table > tbody > .table-active,\n.table.b-table > tbody > .table-active > th,\n.table.b-table > tbody > .table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table.b-table.table-hover > tbody > tr.table-active:hover td,\n.table.b-table.table-hover > tbody > tr.table-active:hover th {\n  color: #212529;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));\n  background-repeat: no-repeat;\n}\n.table.b-table > tbody > .bg-active,\n.table.b-table > tbody > .bg-active > th,\n.table.b-table > tbody > .bg-active > td {\n  background-color: rgba(255, 255, 255, 0.075) !important;\n}\n.table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover td,\n.table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover th {\n  color: #fff;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));\n  background-repeat: no-repeat;\n}\n\n.b-table-sticky-header,\n.table-responsive,\n[class*=table-responsive-] {\n  margin-bottom: 1rem;\n}\n.b-table-sticky-header > .table,\n.table-responsive > .table,\n[class*=table-responsive-] > .table {\n  margin-bottom: 0;\n}\n\n.b-table-sticky-header {\n  overflow-y: auto;\n  max-height: 300px;\n}\n\n@media print {\n  .b-table-sticky-header {\n    overflow-y: visible !important;\n    max-height: none !important;\n  }\n}\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .b-table-sticky-header > .table.b-table > thead > tr > th {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  }\n\n  .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > thead > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tbody > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tfoot > tr > .b-table-sticky-column {\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0;\n  }\n  .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > thead > tr > .b-table-sticky-column {\n    z-index: 5;\n  }\n  .b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tbody > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tfoot > tr > .b-table-sticky-column {\n    z-index: 2;\n  }\n\n  .table.b-table > thead > tr > .table-b-table-default,\n.table.b-table > tbody > tr > .table-b-table-default,\n.table.b-table > tfoot > tr > .table-b-table-default {\n    color: #212529;\n    background-color: #fff;\n  }\n  .table.b-table.table-dark > thead > tr > .bg-b-table-default,\n.table.b-table.table-dark > tbody > tr > .bg-b-table-default,\n.table.b-table.table-dark > tfoot > tr > .bg-b-table-default {\n    color: #fff;\n    background-color: #343a40;\n  }\n  .table.b-table.table-striped > tbody > tr:nth-of-type(odd) > .table-b-table-default {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-striped.table-dark > tbody > tr:nth-of-type(odd) > .bg-b-table-default {\n    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-hover > tbody > tr:hover > .table-b-table-default {\n    color: #212529;\n    background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-hover.table-dark > tbody > tr:hover > .bg-b-table-default {\n    color: #fff;\n    background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));\n    background-repeat: no-repeat;\n  }\n}\n.table.b-table > thead > tr > [aria-sort],\n.table.b-table > tfoot > tr > [aria-sort] {\n  cursor: pointer;\n  background-image: none;\n  background-repeat: no-repeat;\n  background-size: 0.65em 1em;\n}\n.table.b-table > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),\n.table.b-table > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {\n  background-position: right calc(0.75rem / 2) center;\n  padding-right: calc(0.75rem + 0.65em);\n}\n.table.b-table > thead > tr > [aria-sort].b-table-sort-icon-left,\n.table.b-table > tfoot > tr > [aria-sort].b-table-sort-icon-left {\n  background-position: left calc(0.75rem / 2) center;\n  padding-left: calc(0.75rem + 0.65em);\n}\n.table.b-table > thead > tr > [aria-sort=none],\n.table.b-table > tfoot > tr > [aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > [aria-sort=ascending],\n.table.b-table > tfoot > tr > [aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > [aria-sort=descending],\n.table.b-table > tfoot > tr > [aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=none], .table.b-table.table-dark > tfoot > tr > [aria-sort=none],\n.table.b-table > .thead-dark > tr > [aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=ascending], .table.b-table.table-dark > tfoot > tr > [aria-sort=ascending],\n.table.b-table > .thead-dark > tr > [aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=descending], .table.b-table.table-dark > tfoot > tr > [aria-sort=descending],\n.table.b-table > .thead-dark > tr > [aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=none],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=ascending],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=descending],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-sm > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),\n.table.b-table.table-sm > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {\n  background-position: right calc(0.3rem / 2) center;\n  padding-right: calc(0.3rem + 0.65em);\n}\n.table.b-table.table-sm > thead > tr > [aria-sort].b-table-sort-icon-left,\n.table.b-table.table-sm > tfoot > tr > [aria-sort].b-table-sort-icon-left {\n  background-position: left calc(0.3rem / 2) center;\n  padding-left: calc(0.3rem + 0.65em);\n}\n\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click) > tbody > tr {\n  cursor: pointer;\n}\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range > tbody > tr {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@media (max-width: 575.98px) {\n  .table.b-table.b-table-stacked-sm {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-sm > caption,\n.table.b-table.b-table-stacked-sm > tbody,\n.table.b-table.b-table-stacked-sm > tbody > tr,\n.table.b-table.b-table-stacked-sm > tbody > tr > td,\n.table.b-table.b-table-stacked-sm > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-sm > thead,\n.table.b-table.b-table-stacked-sm > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-sm > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-sm > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-sm > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr.top-row, .table.b-table.b-table-stacked-sm > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 767.98px) {\n  .table.b-table.b-table-stacked-md {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-md > caption,\n.table.b-table.b-table-stacked-md > tbody,\n.table.b-table.b-table-stacked-md > tbody > tr,\n.table.b-table.b-table-stacked-md > tbody > tr > td,\n.table.b-table.b-table-stacked-md > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-md > thead,\n.table.b-table.b-table-stacked-md > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-md > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-md > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-md > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr.top-row, .table.b-table.b-table-stacked-md > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 991.98px) {\n  .table.b-table.b-table-stacked-lg {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-lg > caption,\n.table.b-table.b-table-stacked-lg > tbody,\n.table.b-table.b-table-stacked-lg > tbody > tr,\n.table.b-table.b-table-stacked-lg > tbody > tr > td,\n.table.b-table.b-table-stacked-lg > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-lg > thead,\n.table.b-table.b-table-stacked-lg > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-lg > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-lg > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-lg > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr.top-row, .table.b-table.b-table-stacked-lg > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table.b-table.b-table-stacked-xl {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-xl > caption,\n.table.b-table.b-table-stacked-xl > tbody,\n.table.b-table.b-table-stacked-xl > tbody > tr,\n.table.b-table.b-table-stacked-xl > tbody > tr > td,\n.table.b-table.b-table-stacked-xl > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-xl > thead,\n.table.b-table.b-table-stacked-xl > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-xl > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-xl > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-xl > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr.top-row, .table.b-table.b-table-stacked-xl > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n.table.b-table.b-table-stacked {\n  display: block;\n  width: 100%;\n}\n.table.b-table.b-table-stacked > caption,\n.table.b-table.b-table-stacked > tbody,\n.table.b-table.b-table-stacked > tbody > tr,\n.table.b-table.b-table-stacked > tbody > tr > td,\n.table.b-table.b-table-stacked > tbody > tr > th {\n  display: block;\n}\n.table.b-table.b-table-stacked > thead,\n.table.b-table.b-table-stacked > tfoot {\n  display: none;\n}\n.table.b-table.b-table-stacked > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked > tfoot > tr.b-table-bottom-row {\n  display: none;\n}\n.table.b-table.b-table-stacked > caption {\n  caption-side: top !important;\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label]::before {\n  content: attr(data-label);\n  width: 40%;\n  float: left;\n  text-align: right;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  font-style: normal;\n  padding: 0 calc(1rem / 2) 0 0;\n  margin: 0;\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label] > div {\n  display: inline-block;\n  width: calc(100% - 40%);\n  padding: 0 0 0 calc(1rem / 2);\n  margin: 0;\n}\n.table.b-table.b-table-stacked > tbody > tr.top-row, .table.b-table.b-table-stacked > tbody > tr.bottom-row {\n  display: none;\n}\n.table.b-table.b-table-stacked > tbody > tr > :first-child {\n  border-top-width: 3px;\n}\n.table.b-table.b-table-stacked > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked > tbody > tr > [rowspan] + th {\n  border-top-width: 3px;\n}\n\n.b-time {\n  min-width: 150px;\n}\n.b-time[aria-disabled=true] output, .b-time[aria-readonly=true] output,\n.b-time output.disabled {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-time[aria-disabled=true] output {\n  pointer-events: none;\n}\n[dir=rtl] .b-time > .d-flex:not(.flex-column) {\n  flex-direction: row-reverse;\n}\n\n.b-time .b-time-header {\n  margin-bottom: 0.5rem;\n}\n.b-time .b-time-header output {\n  padding: 0.25rem;\n  font-size: 80%;\n}\n.b-time .b-time-footer {\n  margin-top: 0.5rem;\n}\n.b-time .b-time-ampm {\n  margin-left: 0.5rem;\n}\n\n.b-toast {\n  display: block;\n  position: relative;\n  max-width: 350px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-clip: padding-box;\n  z-index: 1;\n  border-radius: 0.25rem;\n}\n.b-toast .toast {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.b-toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.b-toast.b-toast-solid .toast {\n  background-color: white;\n}\n.b-toast .toast {\n  opacity: 1;\n}\n.b-toast .toast.fade:not(.show) {\n  opacity: 0;\n}\n.b-toast .toast .toast-body {\n  display: block;\n}\n\n.b-toast-primary .toast {\n  background-color: rgba(230, 242, 255, 0.85);\n  border-color: rgba(184, 218, 255, 0.85);\n  color: #004085;\n}\n.b-toast-primary .toast .toast-header {\n  color: #004085;\n  background-color: rgba(204, 229, 255, 0.85);\n  border-bottom-color: rgba(184, 218, 255, 0.85);\n}\n.b-toast-primary.b-toast-solid .toast {\n  background-color: #e6f2ff;\n}\n\n.b-toast-secondary .toast {\n  background-color: rgba(239, 240, 241, 0.85);\n  border-color: rgba(214, 216, 219, 0.85);\n  color: #383d41;\n}\n.b-toast-secondary .toast .toast-header {\n  color: #383d41;\n  background-color: rgba(226, 227, 229, 0.85);\n  border-bottom-color: rgba(214, 216, 219, 0.85);\n}\n.b-toast-secondary.b-toast-solid .toast {\n  background-color: #eff0f1;\n}\n\n.b-toast-success .toast {\n  background-color: rgba(230, 245, 233, 0.85);\n  border-color: rgba(195, 230, 203, 0.85);\n  color: #155724;\n}\n.b-toast-success .toast .toast-header {\n  color: #155724;\n  background-color: rgba(212, 237, 218, 0.85);\n  border-bottom-color: rgba(195, 230, 203, 0.85);\n}\n.b-toast-success.b-toast-solid .toast {\n  background-color: #e6f5e9;\n}\n\n.b-toast-info .toast {\n  background-color: rgba(229, 244, 247, 0.85);\n  border-color: rgba(190, 229, 235, 0.85);\n  color: #0c5460;\n}\n.b-toast-info .toast .toast-header {\n  color: #0c5460;\n  background-color: rgba(209, 236, 241, 0.85);\n  border-bottom-color: rgba(190, 229, 235, 0.85);\n}\n.b-toast-info.b-toast-solid .toast {\n  background-color: #e5f4f7;\n}\n\n.b-toast-warning .toast {\n  background-color: rgba(255, 249, 231, 0.85);\n  border-color: rgba(255, 238, 186, 0.85);\n  color: #856404;\n}\n.b-toast-warning .toast .toast-header {\n  color: #856404;\n  background-color: rgba(255, 243, 205, 0.85);\n  border-bottom-color: rgba(255, 238, 186, 0.85);\n}\n.b-toast-warning.b-toast-solid .toast {\n  background-color: #fff9e7;\n}\n\n.b-toast-danger .toast {\n  background-color: rgba(252, 237, 238, 0.85);\n  border-color: rgba(245, 198, 203, 0.85);\n  color: #721c24;\n}\n.b-toast-danger .toast .toast-header {\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n.b-toast-danger.b-toast-solid .toast {\n  background-color: #fcedee;\n}\n\n.b-toast-light .toast {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-color: rgba(253, 253, 254, 0.85);\n  color: #818182;\n}\n.b-toast-light .toast .toast-header {\n  color: #818182;\n  background-color: rgba(254, 254, 254, 0.85);\n  border-bottom-color: rgba(253, 253, 254, 0.85);\n}\n.b-toast-light.b-toast-solid .toast {\n  background-color: white;\n}\n\n.b-toast-dark .toast {\n  background-color: rgba(227, 229, 229, 0.85);\n  border-color: rgba(198, 200, 202, 0.85);\n  color: #1b1e21;\n}\n.b-toast-dark .toast .toast-header {\n  color: #1b1e21;\n  background-color: rgba(214, 216, 217, 0.85);\n  border-bottom-color: rgba(198, 200, 202, 0.85);\n}\n.b-toast-dark.b-toast-solid .toast {\n  background-color: #e3e5e5;\n}\n\n.b-toaster {\n  z-index: 1100;\n}\n.b-toaster .b-toaster-slot {\n  position: relative;\n  display: block;\n}\n.b-toaster .b-toaster-slot:empty {\n  display: none !important;\n}\n\n.b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full, .b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {\n  position: fixed;\n  left: 0.5rem;\n  right: 0.5rem;\n  margin: 0;\n  padding: 0;\n  height: 0;\n  overflow: visible;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  position: absolute;\n  max-width: 350px;\n  width: 100%;\n  /* IE 11 fix */\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n}\n.b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  width: 100%;\n  max-width: 100%;\n}\n.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,\n.b-toaster.b-toaster-top-full .b-toaster-slot .toast, .b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,\n.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast {\n  width: 100%;\n  max-width: 100%;\n}\n.b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full {\n  top: 0;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot {\n  top: 0.5rem;\n}\n.b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {\n  bottom: 0;\n}\n.b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  bottom: 0.5rem;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {\n  margin-left: auto;\n}\n.b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {\n  margin-right: auto;\n}\n\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-move, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move {\n  transition: -webkit-transform 0.175s;\n  transition: transform 0.175s;\n  transition: transform 0.175s, -webkit-transform 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade {\n  transition-delay: 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active {\n  position: absolute;\n  transition-delay: 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade {\n  transition-delay: 0s;\n}\n.tooltip.b-tooltip {\n  display: block;\n  opacity: 0.9;\n  outline: 0;\n}\n.tooltip.b-tooltip.fade:not(.show) {\n  opacity: 0;\n}\n.tooltip.b-tooltip.show {\n  opacity: 0.9;\n}\n.tooltip.b-tooltip.noninteractive {\n  pointer-events: none;\n}\n.tooltip.b-tooltip .arrow {\n  margin: 0 0.25rem;\n}\n.tooltip.b-tooltip.bs-tooltip-right .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.bs-tooltip-left .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow {\n  margin: 0.25rem 0;\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #007bff;\n}\n.tooltip.b-tooltip-primary .tooltip-inner {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary .tooltip-inner {\n  color: #fff;\n  background-color: #6c757d;\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #28a745;\n}\n.tooltip.b-tooltip-success .tooltip-inner {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #17a2b8;\n}\n.tooltip.b-tooltip-info .tooltip-inner {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #ffc107;\n}\n.tooltip.b-tooltip-warning .tooltip-inner {\n  color: #212529;\n  background-color: #ffc107;\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #dc3545;\n}\n.tooltip.b-tooltip-danger .tooltip-inner {\n  color: #fff;\n  background-color: #dc3545;\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light .tooltip-inner {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #343a40;\n}\n.tooltip.b-tooltip-dark .tooltip-inner {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.b-icon.bi {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.15em;\n}\n.b-icon.b-icon-animation-cylon, .b-icon.b-iconstack .b-icon-animation-cylon > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-cylon, .b-icon.b-iconstack .b-icon-animation-cylon > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-cylon-vertical, .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-cylon-vertical, .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-fade, .b-icon.b-iconstack .b-icon-animation-fade > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-fade;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-fade;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-fade, .b-icon.b-iconstack .b-icon-animation-fade > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin, .b-icon.b-iconstack .b-icon-animation-spin > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 2s infinite linear normal b-icon-animation-spin;\n  animation: 2s infinite linear normal b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin, .b-icon.b-iconstack .b-icon-animation-spin > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-reverse, .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  animation: 2s infinite linear reverse b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-reverse, .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-pulse, .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 1s infinite steps(8) normal b-icon-animation-spin;\n  animation: 1s infinite steps(8) normal b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-pulse, .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-reverse-pulse, .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  animation: 1s infinite steps(8) reverse b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-reverse-pulse, .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-throb, .b-icon.b-iconstack .b-icon-animation-throb > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-throb;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-throb;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-throb, .b-icon.b-iconstack .b-icon-animation-throb > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-icon-animation-cylon {\n  0% {\n    -webkit-transform: translateX(-25%);\n    transform: translateX(-25%);\n  }\n  100% {\n    -webkit-transform: translateX(25%);\n    transform: translateX(25%);\n  }\n}\n\n@keyframes b-icon-animation-cylon {\n  0% {\n    -webkit-transform: translateX(-25%);\n    transform: translateX(-25%);\n  }\n  100% {\n    -webkit-transform: translateX(25%);\n    transform: translateX(25%);\n  }\n}\n@-webkit-keyframes b-icon-animation-cylon-vertical {\n  0% {\n    -webkit-transform: translateY(25%);\n    transform: translateY(25%);\n  }\n  100% {\n    -webkit-transform: translateY(-25%);\n    transform: translateY(-25%);\n  }\n}\n@keyframes b-icon-animation-cylon-vertical {\n  0% {\n    -webkit-transform: translateY(25%);\n    transform: translateY(25%);\n  }\n  100% {\n    -webkit-transform: translateY(-25%);\n    transform: translateY(-25%);\n  }\n}\n@-webkit-keyframes b-icon-animation-fade {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes b-icon-animation-fade {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes b-icon-animation-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes b-icon-animation-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes b-icon-animation-throb {\n  0% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes b-icon-animation-throb {\n  0% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.btn .b-icon.bi,\n.nav-link .b-icon.bi,\n.dropdown-toggle .b-icon.bi,\n.dropdown-item .b-icon.bi,\n.input-group-text .b-icon.bi {\n  font-size: 125%;\n  vertical-align: text-bottom;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("27894c40", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Bootstrap v4.6.2 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--blue: #006994;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #7fb848;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #808080;--gray-dark: #343a40;--primary: #006994;--secondary: #808080;--success: #7fb848;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #1A1A1A;--white: #fff;--blue: #006994;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:\"Montserrat\",sans-serif;font-size:1rem;font-weight:500;line-height:1.5;color:#000;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:#006994;text-decoration:none;background-color:rgba(0,0,0,0)}a:hover{color:#003348;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:gray;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{padding:0;border-style:none}input[type=radio],input[type=checkbox]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}@media(max-width: 1200px){legend{font-size:calc(1.275rem + 0.3vw)}}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:3rem}@media(max-width: 1200px){h1,.h1{font-size:calc(1.425rem + 2.1vw)}}h2,.h2{font-size:2.625rem}@media(max-width: 1200px){h2,.h2{font-size:calc(1.3875rem + 1.65vw)}}h3,.h3{font-size:1.75rem}@media(max-width: 1200px){h3,.h3{font-size:calc(1.3rem + 0.6vw)}}h4,.h4{font-size:1.25rem}h5,.h5{font-size:0.875rem}h6,.h6{font-size:0.75rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}@media(max-width: 1200px){.display-1{font-size:calc(1.725rem + 5.7vw)}}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}@media(max-width: 1200px){.display-2{font-size:calc(1.675rem + 5.1vw)}}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}@media(max-width: 1200px){.display-3{font-size:calc(1.575rem + 3.9vw)}}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}@media(max-width: 1200px){.display-4{font-size:calc(1.475rem + 2.7vw)}}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}small,.small{font-size:0.875em;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:0.875em;color:gray}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:gray}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:8px}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-xl,.container-lg,.container-md,.container-sm{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col-xl,.col-xl-auto,.col-xl-12,.col-xl-11,.col-xl-10,.col-xl-9,.col-xl-8,.col-xl-7,.col-xl-6,.col-xl-5,.col-xl-4,.col-xl-3,.col-xl-2,.col-xl-1,.col-lg,.col-lg-auto,.col-lg-12,.col-lg-11,.col-lg-10,.col-lg-9,.col-lg-8,.col-lg-7,.col-lg-6,.col-lg-5,.col-lg-4,.col-lg-3,.col-lg-2,.col-lg-1,.col-md,.col-md-auto,.col-md-12,.col-md-11,.col-md-10,.col-md-9,.col-md-8,.col-md-7,.col-md-6,.col-md-5,.col-md-4,.col-md-3,.col-md-2,.col-md-1,.col-sm,.col-sm-auto,.col-sm-12,.col-sm-11,.col-sm-10,.col-sm-9,.col-sm-8,.col-sm-7,.col-sm-6,.col-sm-5,.col-sm-4,.col-sm-3,.col-sm-2,.col-sm-1,.col,.col-auto,.col-12,.col-11,.col-10,.col-9,.col-8,.col-7,.col-6,.col-5,.col-4,.col-3,.col-2,.col-1{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.33333333%;max-width:8.33333333%}.col-2{flex:0 0 16.66666667%;max-width:16.66666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333333%;max-width:33.33333333%}.col-5{flex:0 0 41.66666667%;max-width:41.66666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333333%;max-width:58.33333333%}.col-8{flex:0 0 66.66666667%;max-width:66.66666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333333%;max-width:83.33333333%}.col-11{flex:0 0 91.66666667%;max-width:91.66666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}@media(min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33333333%;max-width:8.33333333%}.col-sm-2{flex:0 0 16.66666667%;max-width:16.66666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333333%;max-width:33.33333333%}.col-sm-5{flex:0 0 41.66666667%;max-width:41.66666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333333%;max-width:58.33333333%}.col-sm-8{flex:0 0 66.66666667%;max-width:66.66666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333333%;max-width:83.33333333%}.col-sm-11{flex:0 0 91.66666667%;max-width:91.66666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}}@media(min-width: 768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33333333%;max-width:8.33333333%}.col-md-2{flex:0 0 16.66666667%;max-width:16.66666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333333%;max-width:33.33333333%}.col-md-5{flex:0 0 41.66666667%;max-width:41.66666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333333%;max-width:58.33333333%}.col-md-8{flex:0 0 66.66666667%;max-width:66.66666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333333%;max-width:83.33333333%}.col-md-11{flex:0 0 91.66666667%;max-width:91.66666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}}@media(min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33333333%;max-width:8.33333333%}.col-lg-2{flex:0 0 16.66666667%;max-width:16.66666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333333%;max-width:33.33333333%}.col-lg-5{flex:0 0 41.66666667%;max-width:41.66666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333333%;max-width:58.33333333%}.col-lg-8{flex:0 0 66.66666667%;max-width:66.66666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333333%;max-width:83.33333333%}.col-lg-11{flex:0 0 91.66666667%;max-width:91.66666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}}@media(min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.3333333333%;max-width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33333333%;max-width:8.33333333%}.col-xl-2{flex:0 0 16.66666667%;max-width:16.66666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333333%;max-width:33.33333333%}.col-xl-5{flex:0 0 41.66666667%;max-width:41.66666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333333%;max-width:58.33333333%}.col-xl-8{flex:0 0 66.66666667%;max-width:66.66666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333333%;max-width:83.33333333%}.col-xl-11{flex:0 0 91.66666667%;max-width:91.66666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}}.table{width:100%;margin-bottom:1rem;color:#000}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#000;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#b8d5e1}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#7ab1c7}.table-hover .table-primary:hover{background-color:#a6cad9}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#a6cad9}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#dbdbdb}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#bdbdbd}.table-hover .table-secondary:hover{background-color:#cecece}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#cecece}.table-success,.table-success>th,.table-success>td{background-color:#dbebcc}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#bcdaa0}.table-hover .table-success:hover{background-color:#cee4ba}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#cee4ba}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#ffeeba}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>th,.table-danger>td{background-color:#f5c6cb}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#bfbfbf}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#888}.table-hover .table-dark:hover{background-color:#b2b2b2}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b2b2b2}.table-white,.table-white>th,.table-white>td{background-color:#fff}.table-white th,.table-white td,.table-white thead th,.table-white tbody+tbody{border-color:#fff}.table-hover .table-white:hover{background-color:#f2f2f2}.table-hover .table-white:hover>td,.table-hover .table-white:hover>th{background-color:#f2f2f2}.table-blue,.table-blue>th,.table-blue>td{background-color:#b8d5e1}.table-blue th,.table-blue td,.table-blue thead th,.table-blue tbody+tbody{border-color:#7ab1c7}.table-hover .table-blue:hover{background-color:#a6cad9}.table-hover .table-blue:hover>td,.table-hover .table-blue:hover>th{background-color:#a6cad9}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media(max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media(max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media(max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media(max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:500;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #f1f1f1;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:rgba(0,0,0,0);border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#15bbff;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.form-control::placeholder{color:gray;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{appearance:none}select.form-control:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #495057}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#000;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:8px}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{color:gray}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#7fb848}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#212529;background-color:rgba(127,184,72,.9);border-radius:.25rem}.form-row>.col>.valid-tooltip,.form-row>[class*=col-]>.valid-tooltip{left:5px}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#7fb848;padding-right:calc(1.5em + 0.75rem) !important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%237fb848' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.was-validated select.form-control:valid,select.form-control.is-valid{padding-right:3rem !important;background-position:right 1.5rem center}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#7fb848;padding-right:calc(0.75em + 2.3125rem) !important;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%237fb848' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#7fb848}.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip,.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip{display:block}.was-validated .custom-control-input:valid~.custom-control-label,.custom-control-input.is-valid~.custom-control-label{color:#7fb848}.was-validated .custom-control-input:valid~.custom-control-label::before,.custom-control-input.is-valid~.custom-control-label::before{border-color:#7fb848}.was-validated .custom-control-input:valid:checked~.custom-control-label::before,.custom-control-input.is-valid:checked~.custom-control-label::before{border-color:#99c66d;background-color:#99c66d}.was-validated .custom-control-input:valid:focus~.custom-control-label::before,.custom-control-input.is-valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before{border-color:#7fb848}.was-validated .custom-file-input:valid~.custom-file-label,.custom-file-input.is-valid~.custom-file-label{border-color:#7fb848}.was-validated .custom-file-input:valid:focus~.custom-file-label,.custom-file-input.is-valid:focus~.custom-file-label{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-row>.col>.invalid-tooltip,.form-row>[class*=col-]>.invalid-tooltip{left:5px}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem) !important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated select.form-control:invalid,select.form-control.is-invalid{padding-right:3rem !important;background-position:right 1.5rem center}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#dc3545;padding-right:calc(0.75em + 2.3125rem) !important;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat,#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip,.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip{display:block}.was-validated .custom-control-input:invalid~.custom-control-label,.custom-control-input.is-invalid~.custom-control-label{color:#dc3545}.was-validated .custom-control-input:invalid~.custom-control-label::before,.custom-control-input.is-invalid~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,.custom-control-input.is-invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,.custom-control-input.is-invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.was-validated .custom-file-input:invalid~.custom-file-label,.custom-file-input.is-invalid~.custom-file-label{border-color:#dc3545}.was-validated .custom-file-input:invalid:focus~.custom-file-label,.custom-file-input.is-invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media(min-width: 576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#000;text-align:center;vertical-align:middle;user-select:none;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);padding:.375rem .75rem;font-size:0.875rem;line-height:1.5;border-radius:8px;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#000;text-decoration:none}.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#006994;border-color:#006994}.btn-primary:hover{color:#fff;background-color:#004e6e;border-color:#004561}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#004e6e;border-color:#004561;box-shadow:0 0 0 .2rem rgba(38,128,164,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#006994;border-color:#006994}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#004561;border-color:#003c54}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,128,164,.5)}.btn-secondary{color:#fff;background-color:gray;border-color:gray}.btn-secondary:hover{color:#fff;background-color:#6d6d6d;border-color:#676767}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#6d6d6d;border-color:#676767;box-shadow:0 0 0 .2rem rgba(147,147,147,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:gray;border-color:gray}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#676767;border-color:#606060}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(147,147,147,.5)}.btn-success{color:#212529;background-color:#7fb848;border-color:#7fb848}.btn-success:hover{color:#fff;background-color:#6c9d3d;border-color:#669439}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#6c9d3d;border-color:#669439;box-shadow:0 0 0 .2rem rgba(113,162,67,.5)}.btn-success.disabled,.btn-success:disabled{color:#212529;background-color:#7fb848;border-color:#7fb848}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#669439;border-color:#5f8b36}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(113,162,67,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning:focus,.btn-warning.focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#1a1a1a;border-color:#1a1a1a}.btn-dark:hover{color:#fff;background-color:#070707;border-color:#010101}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#070707;border-color:#010101;box-shadow:0 0 0 .2rem rgba(60,60,60,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#1a1a1a;border-color:#1a1a1a}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#010101;border-color:#000}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(60,60,60,.5)}.btn-white{color:#212529;background-color:#fff;border-color:#fff}.btn-white:hover{color:#212529;background-color:#ececec;border-color:#e6e6e6}.btn-white:focus,.btn-white.focus{color:#212529;background-color:#ececec;border-color:#e6e6e6;box-shadow:0 0 0 .2rem rgba(222,222,223,.5)}.btn-white.disabled,.btn-white:disabled{color:#212529;background-color:#fff;border-color:#fff}.btn-white:not(:disabled):not(.disabled):active,.btn-white:not(:disabled):not(.disabled).active,.show>.btn-white.dropdown-toggle{color:#212529;background-color:#e6e6e6;border-color:#dfdfdf}.btn-white:not(:disabled):not(.disabled):active:focus,.btn-white:not(:disabled):not(.disabled).active:focus,.show>.btn-white.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,222,223,.5)}.btn-blue{color:#fff;background-color:#006994;border-color:#006994}.btn-blue:hover{color:#fff;background-color:#004e6e;border-color:#004561}.btn-blue:focus,.btn-blue.focus{color:#fff;background-color:#004e6e;border-color:#004561;box-shadow:0 0 0 .2rem rgba(38,128,164,.5)}.btn-blue.disabled,.btn-blue:disabled{color:#fff;background-color:#006994;border-color:#006994}.btn-blue:not(:disabled):not(.disabled):active,.btn-blue:not(:disabled):not(.disabled).active,.show>.btn-blue.dropdown-toggle{color:#fff;background-color:#004561;border-color:#003c54}.btn-blue:not(:disabled):not(.disabled):active:focus,.btn-blue:not(:disabled):not(.disabled).active:focus,.show>.btn-blue.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,128,164,.5)}.btn-outline-primary{color:#006994;border-color:#006994}.btn-outline-primary:hover{color:#fff;background-color:#006994;border-color:#006994}.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#006994;background-color:rgba(0,0,0,0)}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#006994;border-color:#006994}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.btn-outline-secondary{color:gray;border-color:gray}.btn-outline-secondary:hover{color:#fff;background-color:gray;border-color:gray}.btn-outline-secondary:focus,.btn-outline-secondary.focus{box-shadow:0 0 0 .2rem rgba(128,128,128,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:gray;background-color:rgba(0,0,0,0)}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:gray;border-color:gray}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(128,128,128,.5)}.btn-outline-success{color:#7fb848;border-color:#7fb848}.btn-outline-success:hover{color:#212529;background-color:#7fb848;border-color:#7fb848}.btn-outline-success:focus,.btn-outline-success.focus{box-shadow:0 0 0 .2rem rgba(127,184,72,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#7fb848;background-color:rgba(0,0,0,0)}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#212529;background-color:#7fb848;border-color:#7fb848}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(127,184,72,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:rgba(0,0,0,0)}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:focus,.btn-outline-warning.focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:rgba(0,0,0,0)}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:focus,.btn-outline-danger.focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:rgba(0,0,0,0)}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:rgba(0,0,0,0)}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#1a1a1a;border-color:#1a1a1a}.btn-outline-dark:hover{color:#fff;background-color:#1a1a1a;border-color:#1a1a1a}.btn-outline-dark:focus,.btn-outline-dark.focus{box-shadow:0 0 0 .2rem rgba(26,26,26,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#1a1a1a;background-color:rgba(0,0,0,0)}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#1a1a1a;border-color:#1a1a1a}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(26,26,26,.5)}.btn-outline-white{color:#fff;border-color:#fff}.btn-outline-white:hover{color:#212529;background-color:#fff;border-color:#fff}.btn-outline-white:focus,.btn-outline-white.focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-white.disabled,.btn-outline-white:disabled{color:#fff;background-color:rgba(0,0,0,0)}.btn-outline-white:not(:disabled):not(.disabled):active,.btn-outline-white:not(:disabled):not(.disabled).active,.show>.btn-outline-white.dropdown-toggle{color:#212529;background-color:#fff;border-color:#fff}.btn-outline-white:not(:disabled):not(.disabled):active:focus,.btn-outline-white:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-white.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.btn-outline-blue{color:#006994;border-color:#006994}.btn-outline-blue:hover{color:#fff;background-color:#006994;border-color:#006994}.btn-outline-blue:focus,.btn-outline-blue.focus{box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.btn-outline-blue.disabled,.btn-outline-blue:disabled{color:#006994;background-color:rgba(0,0,0,0)}.btn-outline-blue:not(:disabled):not(.disabled):active,.btn-outline-blue:not(:disabled):not(.disabled).active,.show>.btn-outline-blue.dropdown-toggle{color:#fff;background-color:#006994;border-color:#006994}.btn-outline-blue:not(:disabled):not(.disabled):active:focus,.btn-outline-blue:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-blue.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.btn-link{font-weight:400;color:#006994;text-decoration:none}.btn-link:hover{color:#003348;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:gray;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:8px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=submit].btn-block,input[type=reset].btn-block,input[type=button].btn-block{width:100%}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.width{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.width{transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#000;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=top],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#006994}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:0.875rem;color:gray;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus~.custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group:not(.has-validation)>.form-control:not(:last-child),.input-group:not(.has-validation)>.custom-select:not(:last-child),.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label,.input-group:not(.has-validation)>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.form-control:nth-last-child(n+3),.input-group.has-validation>.custom-select:nth-last-child(n+3),.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label,.input-group.has-validation>.custom-file:nth-last-child(n+3) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-prepend,.input-group-append{display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #f1f1f1;border-radius:.25rem}.input-group-text input[type=radio],.input-group-text input[type=checkbox]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5;border-radius:8px}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.btn,.input-group:not(.has-validation)>.input-group-append:not(:last-child)>.input-group-text,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.btn,.input-group.has-validation>.input-group-append:nth-last-child(n+3)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;print-color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#006994;background-color:#006994}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#15bbff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#48caff;border-color:#48caff}.custom-control-input[disabled]~.custom-control-label,.custom-control-input:disabled~.custom-control-label{color:gray}.custom-control-input[disabled]~.custom-control-label::before,.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:50%/50% 50% no-repeat}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#006994;background-color:#006994}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,105,148,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,105,148,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,105,148,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(0.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;transform:translateX(0.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,105,148,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:500;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right .75rem center/8px 10px no-repeat;border:1px solid #f1f1f1;border-radius:.25rem;appearance:none}.custom-select:focus{border-color:#15bbff;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:gray;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + 0.5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + 0.75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + 0.75rem + 2px);margin:0;overflow:hidden;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#15bbff;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.custom-file-input[disabled]~.custom-file-label,.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;overflow:hidden;font-weight:500;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #f1f1f1;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + 0.75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,105,148,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,105,148,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,105,148,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#006994;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#48caff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#006994;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#48caff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#006994;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#48caff}.custom-range::-ms-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0);border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:gray;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:gray;background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:none;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#006994}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);border-radius:8px}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:50%/100% 100% no-repeat}.navbar-nav-scroll{max-height:75vh;overflow-y:auto}@media(max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media(max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media(max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media(max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media(min-width: 1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-0.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)}.card-header-tabs{margin-right:-0.625rem;margin-bottom:-0.75rem;margin-left:-0.625rem;border-bottom:0}.card-header-pills{margin-right:-0.625rem;margin-left:-0.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(0.25rem - 1px)}.card-img,.card-img-top,.card-img-bottom{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media(min-width: 576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media(min-width: 576px){.card-columns{column-count:3;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:gray;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:gray}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#006994;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#003348;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#006994;border-color:#006994}.page-item.disabled .page-link{color:gray;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:0.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:8px;border-bottom-left-radius:8px}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:8px;border-bottom-right-radius:8px}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.badge{transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#006994}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#004561}a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.badge-secondary{color:#fff;background-color:gray}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#676767}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(128,128,128,.5)}.badge-success{color:#212529;background-color:#7fb848}a.badge-success:hover,a.badge-success:focus{color:#212529;background-color:#669439}a.badge-success:focus,a.badge-success.focus{outline:0;box-shadow:0 0 0 .2rem rgba(127,184,72,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:hover,a.badge-warning:focus{color:#212529;background-color:#d39e00}a.badge-warning:focus,a.badge-warning.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#bd2130}a.badge-danger:focus,a.badge-danger.focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#1a1a1a}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#010101}a.badge-dark:focus,a.badge-dark.focus{outline:0;box-shadow:0 0 0 .2rem rgba(26,26,26,.5)}.badge-white{color:#212529;background-color:#fff}a.badge-white:hover,a.badge-white:focus{color:#212529;background-color:#e6e6e6}a.badge-white:focus,a.badge-white.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,255,255,.5)}.badge-blue{color:#fff;background-color:#006994}a.badge-blue:hover,a.badge-blue:focus{color:#fff;background-color:#004561}a.badge-blue:focus,a.badge-blue.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media(min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid rgba(0,0,0,0);border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#00374d;background-color:#cce1ea;border-color:#b8d5e1}.alert-primary hr{border-top-color:#a6cad9}.alert-primary .alert-link{color:#00131a}.alert-secondary{color:#434343;background-color:#e6e6e6;border-color:#dbdbdb}.alert-secondary hr{border-top-color:#cecece}.alert-secondary .alert-link{color:#2a2a2a}.alert-success{color:#426025;background-color:#e5f1da;border-color:#dbebcc}.alert-success hr{border-top-color:#cee4ba}.alert-success .alert-link{color:#293b17}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#0e0e0e;background-color:#d1d1d1;border-color:#bfbfbf}.alert-dark hr{border-top-color:#b2b2b2}.alert-dark .alert-link{color:#000}.alert-white{color:#858585;background-color:#fff;border-color:#fff}.alert-white hr{border-top-color:#f2f2f2}.alert-white .alert-link{color:#6c6c6c}.alert-blue{color:#00374d;background-color:#cce1ea;border-color:#b8d5e1}.alert-blue hr{border-top-color:#a6cad9}.alert-blue .alert-link{color:#00131a}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:0.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#006994;transition:width .6s ease}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#000;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:gray;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#006994;border-color:#006994}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#00374d;background-color:#b8d5e1}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#00374d;background-color:#a6cad9}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#00374d;border-color:#00374d}.list-group-item-secondary{color:#434343;background-color:#dbdbdb}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#434343;background-color:#cecece}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#434343;border-color:#434343}.list-group-item-success{color:#426025;background-color:#dbebcc}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#426025;background-color:#cee4ba}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#426025;border-color:#426025}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#0e0e0e;background-color:#bfbfbf}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#0e0e0e;background-color:#b2b2b2}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#0e0e0e;border-color:#0e0e0e}.list-group-item-white{color:#858585;background-color:#fff}.list-group-item-white.list-group-item-action:hover,.list-group-item-white.list-group-item-action:focus{color:#858585;background-color:#f2f2f2}.list-group-item-white.list-group-item-action.active{color:#fff;background-color:#858585;border-color:#858585}.list-group-item-blue{color:#00374d;background-color:#b8d5e1}.list-group-item-blue.list-group-item-action:hover,.list-group-item-blue.list-group-item-action:focus{color:#00374d;background-color:#a6cad9}.list-group-item-blue.list-group-item-action.active{color:#fff;background-color:#00374d;border-color:#00374d}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}@media(max-width: 1200px){.close{font-size:calc(1.275rem + 0.3vw)}}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:rgba(0,0,0,0);border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:0.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:gray;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(0.3rem - 1px);border-bottom-left-radius:calc(0.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media(min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:min-content}.modal-sm{max-width:300px}}@media(min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media(min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:\"Montserrat\",sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top],.bs-tooltip-auto[x-placement^=top]{padding:.4rem 0}.bs-tooltip-top .arrow,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-auto[x-placement^=top] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-auto[x-placement^=top] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right],.bs-tooltip-auto[x-placement^=right]{padding:0 .4rem}.bs-tooltip-right .arrow,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-auto[x-placement^=right] .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-auto[x-placement^=right] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-auto[x-placement^=bottom]{padding:.4rem 0}.bs-tooltip-bottom .arrow,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-auto[x-placement^=bottom] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-auto[x-placement^=bottom] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left],.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left],.bs-tooltip-auto[x-placement^=left]{padding:0 .4rem}.bs-tooltip-left .arrow,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-auto[x-placement^=left] .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-auto[x-placement^=left] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:\"Montserrat\",sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:rgba(0,0,0,0);border-style:solid}.bs-popover-top,.b-popover-blue.bs-popover-auto[x-placement^=top],.b-popover-white.bs-popover-auto[x-placement^=top],.b-popover-dark.bs-popover-auto[x-placement^=top],.b-popover-light.bs-popover-auto[x-placement^=top],.b-popover-danger.bs-popover-auto[x-placement^=top],.b-popover-warning.bs-popover-auto[x-placement^=top],.b-popover-info.bs-popover-auto[x-placement^=top],.b-popover-success.bs-popover-auto[x-placement^=top],.b-popover-secondary.bs-popover-auto[x-placement^=top],.b-popover-primary.bs-popover-auto[x-placement^=top],.bs-popover-auto[x-placement^=top]{margin-bottom:.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=top]>.arrow{bottom:calc(-0.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=top]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=top]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-right,.b-popover-blue.bs-popover-auto[x-placement^=right],.b-popover-white.bs-popover-auto[x-placement^=right],.b-popover-dark.bs-popover-auto[x-placement^=right],.b-popover-light.bs-popover-auto[x-placement^=right],.b-popover-danger.bs-popover-auto[x-placement^=right],.b-popover-warning.bs-popover-auto[x-placement^=right],.b-popover-info.bs-popover-auto[x-placement^=right],.b-popover-success.bs-popover-auto[x-placement^=right],.b-popover-secondary.bs-popover-auto[x-placement^=right],.b-popover-primary.bs-popover-auto[x-placement^=right],.bs-popover-auto[x-placement^=right]{margin-left:.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=right]>.arrow{left:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=right]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=right]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom,.b-popover-blue.bs-popover-auto[x-placement^=bottom],.b-popover-white.bs-popover-auto[x-placement^=bottom],.b-popover-dark.bs-popover-auto[x-placement^=bottom],.b-popover-light.bs-popover-auto[x-placement^=bottom],.b-popover-danger.bs-popover-auto[x-placement^=bottom],.b-popover-warning.bs-popover-auto[x-placement^=bottom],.b-popover-info.bs-popover-auto[x-placement^=bottom],.b-popover-success.bs-popover-auto[x-placement^=bottom],.b-popover-secondary.bs-popover-auto[x-placement^=bottom],.b-popover-primary.bs-popover-auto[x-placement^=bottom],.bs-popover-auto[x-placement^=bottom]{margin-top:.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=bottom]>.arrow{top:calc(-0.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=bottom]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=bottom]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-0.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.b-popover-blue.bs-popover-auto[x-placement^=left],.b-popover-white.bs-popover-auto[x-placement^=left],.b-popover-dark.bs-popover-auto[x-placement^=left],.b-popover-light.bs-popover-auto[x-placement^=left],.b-popover-danger.bs-popover-auto[x-placement^=left],.b-popover-warning.bs-popover-auto[x-placement^=left],.b-popover-info.bs-popover-auto[x-placement^=left],.b-popover-success.bs-popover-auto[x-placement^=left],.b-popover-secondary.bs-popover-auto[x-placement^=left],.b-popover-primary.bs-popover-auto[x-placement^=left],.bs-popover-auto[x-placement^=left]{margin-right:.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=left]>.arrow{right:calc(-0.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=left]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=left]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#000}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:50%/100% 100% no-repeat}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-0.125em;border:.25em solid currentcolor;border-right-color:rgba(0,0,0,0);border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-0.125em;background-color:currentcolor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#006994 !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#004561 !important}.bg-secondary{background-color:gray !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#676767 !important}.bg-success{background-color:#7fb848 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#669439 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#1a1a1a !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#010101 !important}.bg-white{background-color:#fff !important}a.bg-white:hover,a.bg-white:focus,button.bg-white:hover,button.bg-white:focus{background-color:#e6e6e6 !important}.bg-blue{background-color:#006994 !important}a.bg-blue:hover,a.bg-blue:focus,button.bg-blue:hover,button.bg-blue:focus{background-color:#004561 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:rgba(0,0,0,0) !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#006994 !important}.border-secondary{border-color:gray !important}.border-success{border-color:#7fb848 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#1a1a1a !important}.border-white{border-color:#fff !important}.border-blue{border-color:#006994 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:8px !important}.rounded{border-radius:.25rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-lg{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media(min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media(min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media(min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media(min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.85714286%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media(min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media(min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media(min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media(min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media(min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media(min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media(min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media(min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports(position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-0.25rem !important}.mt-n1,.my-n1{margin-top:-0.25rem !important}.mr-n1,.mx-n1{margin-right:-0.25rem !important}.mb-n1,.my-n1{margin-bottom:-0.25rem !important}.ml-n1,.mx-n1{margin-left:-0.25rem !important}.m-n2{margin:-0.5rem !important}.mt-n2,.my-n2{margin-top:-0.5rem !important}.mr-n2,.mx-n2{margin-right:-0.5rem !important}.mb-n2,.my-n2{margin-bottom:-0.5rem !important}.ml-n2,.mx-n2{margin-left:-0.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media(min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-0.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-0.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-0.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-0.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-0.25rem !important}.m-sm-n2{margin:-0.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-0.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-0.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-0.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-0.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media(min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-0.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-0.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-0.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-0.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-0.25rem !important}.m-md-n2{margin:-0.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-0.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-0.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-0.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-0.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media(min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-0.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-0.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-0.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-0.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-0.25rem !important}.m-lg-n2{margin:-0.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-0.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-0.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-0.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-0.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media(min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-0.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-0.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-0.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-0.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-0.25rem !important}.m-xl-n2{margin:-0.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-0.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-0.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-0.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-0.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media(min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#006994 !important}a.text-primary:hover,a.text-primary:focus{color:#003348 !important}.text-secondary{color:gray !important}a.text-secondary:hover,a.text-secondary:focus{color:#5a5a5a !important}.text-success{color:#7fb848 !important}a.text-success:hover,a.text-success:focus{color:#598132 !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#ffc107 !important}a.text-warning:hover,a.text-warning:focus{color:#ba8b00 !important}.text-danger{color:#dc3545 !important}a.text-danger:hover,a.text-danger:focus{color:#a71d2a !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#1a1a1a !important}a.text-dark:hover,a.text-dark:focus{color:#000 !important}.text-white{color:#fff !important}a.text-white:hover,a.text-white:focus{color:#d9d9d9 !important}.text-blue{color:#006994 !important}a.text-blue:hover,a.text-blue:focus{color:#003348 !important}.text-body{color:#000 !important}.text-muted{color:gray !important}.text-black-50{color:rgba(0,0,0,.5) !important}.text-white-50{color:rgba(255,255,255,.5) !important}.text-hide{font:0/0 a;color:rgba(0,0,0,0);text-shadow:none;background-color:rgba(0,0,0,0);border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-break:break-word !important;word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.bv-no-focus-ring:focus{outline:none}@media(max-width: 575.98px){.bv-d-xs-down-none{display:none !important}}@media(max-width: 767.98px){.bv-d-sm-down-none{display:none !important}}@media(max-width: 991.98px){.bv-d-md-down-none{display:none !important}}@media(max-width: 1199.98px){.bv-d-lg-down-none{display:none !important}}.bv-d-xl-down-none{display:none !important}.form-control.focus{color:#495057;background-color:#fff;border-color:#15bbff;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.form-control.focus.is-valid{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.form-control.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-avatar{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;flex-shrink:0;width:2.5rem;height:2.5rem;font-size:inherit;font-weight:400;line-height:1;max-width:100%;max-height:auto;text-align:center;overflow:visible;position:relative;transition:color .15s ease-in-out,background-color .15s ease-in-out,box-shadow .15s ease-in-out}.b-avatar:focus{outline:0}.b-avatar.btn,.b-avatar[href]{padding:0;border:0}.b-avatar.btn .b-avatar-img img,.b-avatar[href] .b-avatar-img img{transition:transform .15s ease-in-out}.b-avatar.btn:not(:disabled):not(.disabled),.b-avatar[href]:not(:disabled):not(.disabled){cursor:pointer}.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img,.b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img{transform:scale(1.15)}.b-avatar.disabled,.b-avatar:disabled,.b-avatar[disabled]{opacity:.65;pointer-events:none}.b-avatar .b-avatar-custom,.b-avatar .b-avatar-text,.b-avatar .b-avatar-img{border-radius:inherit;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;mask-image:radial-gradient(white, black)}.b-avatar .b-avatar-text{text-transform:uppercase;white-space:nowrap}.b-avatar[href]{text-decoration:none}.b-avatar>.b-icon{width:60%;height:auto;max-width:100%}.b-avatar .b-avatar-img img{width:100%;height:100%;max-height:auto;border-radius:inherit;object-fit:cover}.b-avatar .b-avatar-badge{position:absolute;min-height:1.5em;min-width:1.5em;padding:.25em;line-height:1;border-radius:10em;font-size:70%;font-weight:700;z-index:1}.b-avatar-sm{width:1.5rem;height:1.5rem}.b-avatar-sm .b-avatar-text{font-size:calc(0.6rem)}.b-avatar-sm .b-avatar-badge{font-size:calc(0.42rem)}.b-avatar-lg{width:3.5rem;height:3.5rem}.b-avatar-lg .b-avatar-text{font-size:calc(1.4rem)}.b-avatar-lg .b-avatar-badge{font-size:calc(0.98rem)}.b-avatar-group .b-avatar-group-inner{display:flex;flex-wrap:wrap}.b-avatar-group .b-avatar{border:1px solid #dee2e6}.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled),.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled){z-index:1}.b-calendar{display:inline-flex}.b-calendar .b-calendar-inner{min-width:250px}.b-calendar .b-calendar-header,.b-calendar .b-calendar-nav{margin-bottom:.25rem}.b-calendar .b-calendar-nav .btn{padding:.25rem}.b-calendar output{padding:.25rem;font-size:80%}.b-calendar output.readonly{background-color:#e9ecef;opacity:1}.b-calendar .b-calendar-footer{margin-top:.5rem}.b-calendar .b-calendar-grid{padding:0;margin:0;overflow:hidden}.b-calendar .b-calendar-grid .row{flex-wrap:nowrap}.b-calendar .b-calendar-grid-caption{padding:.25rem}.b-calendar .b-calendar-grid-body .col[data-date] .btn{width:32px;height:32px;font-size:14px;line-height:1;margin:3px auto;padding:9px 0}.b-calendar .btn:disabled,.b-calendar .btn.disabled,.b-calendar .btn[aria-disabled=true]{cursor:default;pointer-events:none}.card-img-left{border-top-left-radius:calc(0.25rem - 1px);border-bottom-left-radius:calc(0.25rem - 1px)}.card-img-right{border-top-right-radius:calc(0.25rem - 1px);border-bottom-right-radius:calc(0.25rem - 1px)}.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret::after{display:none !important}.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret::before{display:none !important}.dropdown .dropdown-menu:focus{outline:none}.b-dropdown-form{display:inline-block;padding:.25rem 1.5rem;width:100%;clear:both;font-weight:400}.b-dropdown-form:focus{outline:1px dotted !important;outline:5px auto -webkit-focus-ring-color !important}.b-dropdown-form.disabled,.b-dropdown-form:disabled{outline:0 !important;color:#adb5bd;pointer-events:none}.b-dropdown-text{display:inline-block;padding:.25rem 1.5rem;margin-bottom:0;width:100%;clear:both;font-weight:lighter}.custom-checkbox.b-custom-control-lg,.input-group-lg .custom-checkbox{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-checkbox.b-custom-control-lg .custom-control-label::before,.input-group-lg .custom-checkbox .custom-control-label::before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:.3rem}.custom-checkbox.b-custom-control-lg .custom-control-label::after,.input-group-lg .custom-checkbox .custom-control-label::after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background-size:50% 50%}.custom-checkbox.b-custom-control-sm,.input-group-sm .custom-checkbox{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-checkbox.b-custom-control-sm .custom-control-label::before,.input-group-sm .custom-checkbox .custom-control-label::before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:8px}.custom-checkbox.b-custom-control-sm .custom-control-label::after,.input-group-sm .custom-checkbox .custom-control-label::after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background-size:50% 50%}.custom-switch.b-custom-control-lg,.input-group-lg .custom-switch{padding-left:2.8125rem}.custom-switch.b-custom-control-lg .custom-control-label,.input-group-lg .custom-switch .custom-control-label{font-size:1.25rem;line-height:1.5}.custom-switch.b-custom-control-lg .custom-control-label::before,.input-group-lg .custom-switch .custom-control-label::before{top:.3125rem;height:1.25rem;left:-2.8125rem;width:2.1875rem;border-radius:.625rem}.custom-switch.b-custom-control-lg .custom-control-label::after,.input-group-lg .custom-switch .custom-control-label::after{top:calc(\n        0.3125rem + 2px\n      );left:calc(\n        -2.8125rem + 2px\n      );width:calc(\n  1.25rem - 4px\n);height:calc(\n  1.25rem - 4px\n);border-radius:.625rem;background-size:50% 50%}.custom-switch.b-custom-control-lg .custom-control-input:checked~.custom-control-label::after,.input-group-lg .custom-switch .custom-control-input:checked~.custom-control-label::after{transform:translateX(0.9375rem)}.custom-switch.b-custom-control-sm,.input-group-sm .custom-switch{padding-left:1.96875rem}.custom-switch.b-custom-control-sm .custom-control-label,.input-group-sm .custom-switch .custom-control-label{font-size:.875rem;line-height:1.5}.custom-switch.b-custom-control-sm .custom-control-label::before,.input-group-sm .custom-switch .custom-control-label::before{top:.21875rem;left:-1.96875rem;width:1.53125rem;height:.875rem;border-radius:.4375rem}.custom-switch.b-custom-control-sm .custom-control-label::after,.input-group-sm .custom-switch .custom-control-label::after{top:calc(\n        0.21875rem + 2px\n      );left:calc(\n        -1.96875rem + 2px\n      );width:calc(\n  0.875rem - 4px\n);height:calc(\n  0.875rem - 4px\n);border-radius:.4375rem;background-size:50% 50%}.custom-switch.b-custom-control-sm .custom-control-input:checked~.custom-control-label::after,.input-group-sm .custom-switch .custom-control-input:checked~.custom-control-label::after{transform:translateX(0.65625rem)}.input-group>.input-group-prepend>.btn-group>.btn,.input-group>.input-group-append:not(:last-child)>.btn-group>.btn,.input-group>.input-group-append:last-child>.btn-group:not(:last-child):not(.dropdown-toggle)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn-group>.btn,.input-group>.input-group-prepend:not(:first-child)>.btn-group>.btn,.input-group>.input-group-prepend:first-child>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.b-form-btn-label-control.form-control{display:flex;align-items:stretch;height:auto;padding:0;background-image:none}.input-group .b-form-btn-label-control.form-control{padding:0}[dir=rtl] .b-form-btn-label-control.form-control,.b-form-btn-label-control.form-control[dir=rtl]{flex-direction:row-reverse}[dir=rtl] .b-form-btn-label-control.form-control>label,.b-form-btn-label-control.form-control[dir=rtl]>label{text-align:right}.b-form-btn-label-control.form-control>.btn{line-height:1;font-size:inherit;box-shadow:none !important;border:0}.b-form-btn-label-control.form-control>.btn:disabled{pointer-events:none}.b-form-btn-label-control.form-control.is-valid>.btn{color:#7fb848}.b-form-btn-label-control.form-control.is-invalid>.btn{color:#dc3545}.b-form-btn-label-control.form-control>.dropdown-menu{padding:.5rem}.b-form-btn-label-control.form-control>.form-control{height:auto;min-height:calc(calc(1.5em + 0.75rem + 2px) - 2px);padding-left:.25rem;margin:0;border:0;outline:0;background:rgba(0,0,0,0);word-break:break-word;font-size:inherit;white-space:normal;cursor:pointer}.b-form-btn-label-control.form-control>.form-control.form-control-sm{min-height:calc(calc(1.5em + 0.5rem + 2px) - 2px)}.b-form-btn-label-control.form-control>.form-control.form-control-lg{min-height:calc(calc(1.5em + 1rem + 2px) - 2px)}.input-group.input-group-sm .b-form-btn-label-control.form-control>.form-control{min-height:calc(calc(1.5em + 0.5rem + 2px) - 2px);padding-top:.25rem;padding-bottom:.25rem}.input-group.input-group-lg .b-form-btn-label-control.form-control>.form-control{min-height:calc(calc(1.5em + 1rem + 2px) - 2px);padding-top:.5rem;padding-bottom:.5rem}.b-form-btn-label-control.form-control[aria-disabled=true],.b-form-btn-label-control.form-control[aria-readonly=true]{background-color:#e9ecef;opacity:1}.b-form-btn-label-control.form-control[aria-disabled=true]{pointer-events:none}.b-form-btn-label-control.form-control[aria-disabled=true]>label{cursor:default}.b-form-btn-label-control.btn-group>.dropdown-menu{padding:.5rem}.custom-file-label{white-space:nowrap;overflow-x:hidden}.b-custom-control-lg.custom-file,.b-custom-control-lg .custom-file-input,.b-custom-control-lg .custom-file-label,.input-group-lg.custom-file,.input-group-lg .custom-file-input,.input-group-lg .custom-file-label{font-size:1.25rem;height:calc(1.5em + 1rem + 2px)}.b-custom-control-lg .custom-file-label,.b-custom-control-lg .custom-file-label:after,.input-group-lg .custom-file-label,.input-group-lg .custom-file-label:after{padding:.5rem 1rem;line-height:1.5}.b-custom-control-lg .custom-file-label,.input-group-lg .custom-file-label{border-radius:.3rem}.b-custom-control-lg .custom-file-label::after,.input-group-lg .custom-file-label::after{font-size:inherit;height:calc(\n  1.5em + 1rem\n);border-radius:0 .3rem .3rem 0}.b-custom-control-sm.custom-file,.b-custom-control-sm .custom-file-input,.b-custom-control-sm .custom-file-label,.input-group-sm.custom-file,.input-group-sm .custom-file-input,.input-group-sm .custom-file-label{font-size:.875rem;height:calc(1.5em + 0.5rem + 2px)}.b-custom-control-sm .custom-file-label,.b-custom-control-sm .custom-file-label:after,.input-group-sm .custom-file-label,.input-group-sm .custom-file-label:after{padding:.25rem .5rem;line-height:1.5}.b-custom-control-sm .custom-file-label,.input-group-sm .custom-file-label{border-radius:8px}.b-custom-control-sm .custom-file-label::after,.input-group-sm .custom-file-label::after{font-size:inherit;height:calc(\n  1.5em + 0.5rem\n);border-radius:0 8px 8px 0}.was-validated .form-control:invalid,.was-validated .form-control:valid,.form-control.is-invalid,.form-control.is-valid{background-position:right calc(0.375em + 0.1875rem) center}input[type=color].form-control{height:calc(1.5em + 0.75rem + 2px);padding:.125rem .25rem}input[type=color].form-control.form-control-sm,.input-group-sm input[type=color].form-control{height:calc(1.5em + 0.5rem + 2px);padding:.125rem .25rem}input[type=color].form-control.form-control-lg,.input-group-lg input[type=color].form-control{height:calc(1.5em + 1rem + 2px);padding:.125rem .25rem}input[type=color].form-control:disabled{background-color:#adb5bd;opacity:.65}.input-group>.custom-range{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-range+.form-control,.input-group>.custom-range+.form-control-plaintext,.input-group>.custom-range+.custom-select,.input-group>.custom-range+.custom-range,.input-group>.custom-range+.custom-file{margin-left:-1px}.input-group>.form-control+.custom-range,.input-group>.form-control-plaintext+.custom-range,.input-group>.custom-select+.custom-range,.input-group>.custom-range+.custom-range,.input-group>.custom-file+.custom-range{margin-left:-1px}.input-group>.custom-range:focus{z-index:3}.input-group>.custom-range:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-range:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-range{height:calc(1.5em + 0.75rem + 2px);padding:0 .75rem;background-color:#fff;background-clip:padding-box;border:1px solid #f1f1f1;height:calc(1.5em + 0.75rem + 2px);border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.input-group>.custom-range{transition:none}}.input-group>.custom-range:focus{color:#495057;background-color:#fff;border-color:#15bbff;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.input-group>.custom-range:disabled,.input-group>.custom-range[readonly]{background-color:#e9ecef}.input-group-lg>.custom-range{height:calc(1.5em + 1rem + 2px);padding:0 1rem;border-radius:.3rem}.input-group-sm>.custom-range{height:calc(1.5em + 0.5rem + 2px);padding:0 .5rem;border-radius:8px}.was-validated .input-group .custom-range:valid,.input-group .custom-range.is-valid{border-color:#7fb848}.was-validated .input-group .custom-range:valid:focus,.input-group .custom-range.is-valid:focus{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.was-validated .custom-range:valid:focus::-webkit-slider-thumb,.custom-range.is-valid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #d9eac9}.was-validated .custom-range:valid:focus::-moz-range-thumb,.custom-range.is-valid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #d9eac9}.was-validated .custom-range:valid:focus::-ms-thumb,.custom-range.is-valid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #d9eac9}.was-validated .custom-range:valid::-webkit-slider-thumb,.custom-range.is-valid::-webkit-slider-thumb{background-color:#7fb848;background-image:none}.was-validated .custom-range:valid::-webkit-slider-thumb:active,.custom-range.is-valid::-webkit-slider-thumb:active{background-color:#d9eac9;background-image:none}.was-validated .custom-range:valid::-webkit-slider-runnable-track,.custom-range.is-valid::-webkit-slider-runnable-track{background-color:rgba(127,184,72,.35)}.was-validated .custom-range:valid::-moz-range-thumb,.custom-range.is-valid::-moz-range-thumb{background-color:#7fb848;background-image:none}.was-validated .custom-range:valid::-moz-range-thumb:active,.custom-range.is-valid::-moz-range-thumb:active{background-color:#d9eac9;background-image:none}.was-validated .custom-range:valid::-moz-range-track,.custom-range.is-valid::-moz-range-track{background:rgba(127,184,72,.35)}.was-validated .custom-range:valid~.valid-feedback,.was-validated .custom-range:valid~.valid-tooltip,.custom-range.is-valid~.valid-feedback,.custom-range.is-valid~.valid-tooltip{display:block}.was-validated .custom-range:valid::-ms-thumb,.custom-range.is-valid::-ms-thumb{background-color:#7fb848;background-image:none}.was-validated .custom-range:valid::-ms-thumb:active,.custom-range.is-valid::-ms-thumb:active{background-color:#d9eac9;background-image:none}.was-validated .custom-range:valid::-ms-track-lower,.custom-range.is-valid::-ms-track-lower{background:rgba(127,184,72,.35)}.was-validated .custom-range:valid::-ms-track-upper,.custom-range.is-valid::-ms-track-upper{background:rgba(127,184,72,.35)}.was-validated .input-group .custom-range:invalid,.input-group .custom-range.is-invalid{border-color:#dc3545}.was-validated .input-group .custom-range:invalid:focus,.input-group .custom-range.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated .custom-range:invalid:focus::-webkit-slider-thumb,.custom-range.is-invalid:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.was-validated .custom-range:invalid:focus::-moz-range-thumb,.custom-range.is-invalid:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.was-validated .custom-range:invalid:focus::-ms-thumb,.custom-range.is-invalid:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem #f6cdd1}.was-validated .custom-range:invalid::-webkit-slider-thumb,.custom-range.is-invalid::-webkit-slider-thumb{background-color:#dc3545;background-image:none}.was-validated .custom-range:invalid::-webkit-slider-thumb:active,.custom-range.is-invalid::-webkit-slider-thumb:active{background-color:#f6cdd1;background-image:none}.was-validated .custom-range:invalid::-webkit-slider-runnable-track,.custom-range.is-invalid::-webkit-slider-runnable-track{background-color:rgba(220,53,69,.35)}.was-validated .custom-range:invalid::-moz-range-thumb,.custom-range.is-invalid::-moz-range-thumb{background-color:#dc3545;background-image:none}.was-validated .custom-range:invalid::-moz-range-thumb:active,.custom-range.is-invalid::-moz-range-thumb:active{background-color:#f6cdd1;background-image:none}.was-validated .custom-range:invalid::-moz-range-track,.custom-range.is-invalid::-moz-range-track{background:rgba(220,53,69,.35)}.was-validated .custom-range:invalid~.invalid-feedback,.was-validated .custom-range:invalid~.invalid-tooltip,.custom-range.is-invalid~.invalid-feedback,.custom-range.is-invalid~.invalid-tooltip{display:block}.was-validated .custom-range:invalid::-ms-thumb,.custom-range.is-invalid::-ms-thumb{background-color:#dc3545;background-image:none}.was-validated .custom-range:invalid::-ms-thumb:active,.custom-range.is-invalid::-ms-thumb:active{background-color:#f6cdd1;background-image:none}.was-validated .custom-range:invalid::-ms-track-lower,.custom-range.is-invalid::-ms-track-lower{background:rgba(220,53,69,.35)}.was-validated .custom-range:invalid::-ms-track-upper,.custom-range.is-invalid::-ms-track-upper{background:rgba(220,53,69,.35)}.custom-radio.b-custom-control-lg,.input-group-lg .custom-radio{font-size:1.25rem;line-height:1.5;padding-left:1.875rem}.custom-radio.b-custom-control-lg .custom-control-label::before,.input-group-lg .custom-radio .custom-control-label::before{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;border-radius:50%}.custom-radio.b-custom-control-lg .custom-control-label::after,.input-group-lg .custom-radio .custom-control-label::after{top:.3125rem;left:-1.875rem;width:1.25rem;height:1.25rem;background:no-repeat 50%/50% 50%}.custom-radio.b-custom-control-sm,.input-group-sm .custom-radio{font-size:.875rem;line-height:1.5;padding-left:1.3125rem}.custom-radio.b-custom-control-sm .custom-control-label::before,.input-group-sm .custom-radio .custom-control-label::before{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;border-radius:50%}.custom-radio.b-custom-control-sm .custom-control-label::after,.input-group-sm .custom-radio .custom-control-label::after{top:.21875rem;left:-1.3125rem;width:.875rem;height:.875rem;background:no-repeat 50%/50% 50%}.b-rating{text-align:center}.b-rating.d-inline-flex{width:auto}.b-rating .b-rating-star,.b-rating .b-rating-value{padding:0 .25em}.b-rating .b-rating-value{min-width:2.5em}.b-rating .b-rating-star{display:inline-flex;justify-content:center;outline:0}.b-rating .b-rating-star .b-rating-icon{display:inline-flex;transition:all .15s ease-in-out}.b-rating.disabled,.b-rating:disabled{background-color:#e9ecef;color:gray}.b-rating:not(.disabled):not(.readonly) .b-rating-star{cursor:pointer}.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon,.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon{transform:scale(1.5)}.b-rating[dir=rtl] .b-rating-star-half{transform:scale(-1, 1)}.b-form-spinbutton{text-align:center;overflow:hidden;background-image:none;padding:0}[dir=rtl] .b-form-spinbutton:not(.flex-column),.b-form-spinbutton[dir=rtl]:not(.flex-column){flex-direction:row-reverse}.b-form-spinbutton output{font-size:inherit;outline:0;border:0;background-color:rgba(0,0,0,0);width:auto;margin:0;padding:0 .25rem}.b-form-spinbutton output>div,.b-form-spinbutton output>bdi{display:block;min-width:2.25em;height:1.5em}.b-form-spinbutton.flex-column{height:auto;width:auto}.b-form-spinbutton.flex-column output{margin:0 .25rem;padding:.25rem 0}.b-form-spinbutton:not(.d-inline-flex):not(.flex-column){output-width:100%}.b-form-spinbutton.d-inline-flex:not(.flex-column){width:auto}.b-form-spinbutton .btn{line-height:1;box-shadow:none !important}.b-form-spinbutton .btn:disabled{pointer-events:none}.b-form-spinbutton .btn:hover:not(:disabled)>div>.b-icon{transform:scale(1.25)}.b-form-spinbutton.disabled,.b-form-spinbutton.readonly{background-color:#e9ecef}.b-form-spinbutton.disabled{pointer-events:none}.b-form-tags.focus{color:#495057;background-color:#fff;border-color:#15bbff;outline:0;box-shadow:0 0 0 .2rem rgba(0,105,148,.25)}.b-form-tags.focus.is-valid{border-color:#7fb848;box-shadow:0 0 0 .2rem rgba(127,184,72,.25)}.b-form-tags.focus.is-invalid{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.b-form-tags.disabled{background-color:#e9ecef}.b-form-tags-list{margin-top:-0.25rem}.b-form-tags-list .b-form-tags-field,.b-form-tags-list .b-form-tag{margin-top:.25rem}.b-form-tags-input{color:#495057}.b-form-tag{font-size:75%;font-weight:normal;line-height:1.5;margin-right:.25rem}.b-form-tag.disabled{opacity:.75}.b-form-tag>button.b-form-tag-remove{color:inherit;font-size:125%;line-height:1;float:none;margin-left:.25rem}.form-control-sm .b-form-tag{line-height:1.5}.form-control-lg .b-form-tag{line-height:1.5}.media-aside{display:flex;margin-right:1rem}.media-aside-right{margin-right:0;margin-left:1rem}.modal-backdrop{opacity:.5}.b-pagination-pills .page-item .page-link{border-radius:50rem !important;margin-left:.25rem;line-height:1}.b-pagination-pills .page-item:first-child .page-link{margin-left:0}.popover.b-popover{display:block;opacity:1;outline:0}.popover.b-popover.fade:not(.show){opacity:0}.popover.b-popover.show{opacity:1}.b-popover-primary.popover{background-color:#cce1ea;border-color:#b8d5e1}.b-popover-primary.bs-popover-top>.arrow::before,.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#b8d5e1}.b-popover-primary.bs-popover-top>.arrow::after,.b-popover-primary.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#cce1ea}.b-popover-primary.bs-popover-right>.arrow::before,.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#b8d5e1}.b-popover-primary.bs-popover-right>.arrow::after,.b-popover-primary.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#cce1ea}.b-popover-primary.bs-popover-bottom>.arrow::before,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#b8d5e1}.b-popover-primary.bs-popover-bottom>.arrow::after,.b-popover-primary.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#c1dbe6}.b-popover-primary.bs-popover-bottom .popover-header::before,.b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#c1dbe6}.b-popover-primary.bs-popover-left>.arrow::before,.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#b8d5e1}.b-popover-primary.bs-popover-left>.arrow::after,.b-popover-primary.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#cce1ea}.b-popover-primary .popover-header{color:#212529;background-color:#c1dbe6;border-bottom-color:#afd0de}.b-popover-primary .popover-body{color:#00374d}.b-popover-secondary.popover{background-color:#e6e6e6;border-color:#dbdbdb}.b-popover-secondary.bs-popover-top>.arrow::before,.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#dbdbdb}.b-popover-secondary.bs-popover-top>.arrow::after,.b-popover-secondary.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#e6e6e6}.b-popover-secondary.bs-popover-right>.arrow::before,.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#dbdbdb}.b-popover-secondary.bs-popover-right>.arrow::after,.b-popover-secondary.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#e6e6e6}.b-popover-secondary.bs-popover-bottom>.arrow::before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#dbdbdb}.b-popover-secondary.bs-popover-bottom>.arrow::after,.b-popover-secondary.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#dedede}.b-popover-secondary.bs-popover-bottom .popover-header::before,.b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#dedede}.b-popover-secondary.bs-popover-left>.arrow::before,.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#dbdbdb}.b-popover-secondary.bs-popover-left>.arrow::after,.b-popover-secondary.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#e6e6e6}.b-popover-secondary .popover-header{color:#212529;background-color:#dedede;border-bottom-color:#d2d2d2}.b-popover-secondary .popover-body{color:#434343}.b-popover-success.popover{background-color:#e5f1da;border-color:#dbebcc}.b-popover-success.bs-popover-top>.arrow::before,.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#dbebcc}.b-popover-success.bs-popover-top>.arrow::after,.b-popover-success.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#e5f1da}.b-popover-success.bs-popover-right>.arrow::before,.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#dbebcc}.b-popover-success.bs-popover-right>.arrow::after,.b-popover-success.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#e5f1da}.b-popover-success.bs-popover-bottom>.arrow::before,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#dbebcc}.b-popover-success.bs-popover-bottom>.arrow::after,.b-popover-success.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#ddedcf}.b-popover-success.bs-popover-bottom .popover-header::before,.b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#ddedcf}.b-popover-success.bs-popover-left>.arrow::before,.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#dbebcc}.b-popover-success.bs-popover-left>.arrow::after,.b-popover-success.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#e5f1da}.b-popover-success .popover-header{color:#212529;background-color:#ddedcf;border-bottom-color:#d0e6bc}.b-popover-success .popover-body{color:#426025}.b-popover-info.popover{background-color:#d1ecf1;border-color:#bee5eb}.b-popover-info.bs-popover-top>.arrow::before,.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#bee5eb}.b-popover-info.bs-popover-top>.arrow::after,.b-popover-info.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#d1ecf1}.b-popover-info.bs-popover-right>.arrow::before,.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#bee5eb}.b-popover-info.bs-popover-right>.arrow::after,.b-popover-info.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#d1ecf1}.b-popover-info.bs-popover-bottom>.arrow::before,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#bee5eb}.b-popover-info.bs-popover-bottom>.arrow::after,.b-popover-info.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-bottom .popover-header::before,.b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#c5e7ed}.b-popover-info.bs-popover-left>.arrow::before,.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#bee5eb}.b-popover-info.bs-popover-left>.arrow::after,.b-popover-info.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#d1ecf1}.b-popover-info .popover-header{color:#212529;background-color:#c5e7ed;border-bottom-color:#b2dfe7}.b-popover-info .popover-body{color:#0c5460}.b-popover-warning.popover{background-color:#fff3cd;border-color:#ffeeba}.b-popover-warning.bs-popover-top>.arrow::before,.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#ffeeba}.b-popover-warning.bs-popover-top>.arrow::after,.b-popover-warning.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#fff3cd}.b-popover-warning.bs-popover-right>.arrow::before,.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#ffeeba}.b-popover-warning.bs-popover-right>.arrow::after,.b-popover-warning.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#fff3cd}.b-popover-warning.bs-popover-bottom>.arrow::before,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#ffeeba}.b-popover-warning.bs-popover-bottom>.arrow::after,.b-popover-warning.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-bottom .popover-header::before,.b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#ffefbe}.b-popover-warning.bs-popover-left>.arrow::before,.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#ffeeba}.b-popover-warning.bs-popover-left>.arrow::after,.b-popover-warning.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#fff3cd}.b-popover-warning .popover-header{color:#212529;background-color:#ffefbe;border-bottom-color:#ffe9a4}.b-popover-warning .popover-body{color:#856404}.b-popover-danger.popover{background-color:#f8d7da;border-color:#f5c6cb}.b-popover-danger.bs-popover-top>.arrow::before,.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#f5c6cb}.b-popover-danger.bs-popover-top>.arrow::after,.b-popover-danger.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#f8d7da}.b-popover-danger.bs-popover-right>.arrow::before,.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#f5c6cb}.b-popover-danger.bs-popover-right>.arrow::after,.b-popover-danger.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#f8d7da}.b-popover-danger.bs-popover-bottom>.arrow::before,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#f5c6cb}.b-popover-danger.bs-popover-bottom>.arrow::after,.b-popover-danger.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-bottom .popover-header::before,.b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#f6cace}.b-popover-danger.bs-popover-left>.arrow::before,.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#f5c6cb}.b-popover-danger.bs-popover-left>.arrow::after,.b-popover-danger.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#f8d7da}.b-popover-danger .popover-header{color:#212529;background-color:#f6cace;border-bottom-color:#f2b4ba}.b-popover-danger .popover-body{color:#721c24}.b-popover-light.popover{background-color:#fefefe;border-color:#fdfdfe}.b-popover-light.bs-popover-top>.arrow::before,.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#fdfdfe}.b-popover-light.bs-popover-top>.arrow::after,.b-popover-light.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#fefefe}.b-popover-light.bs-popover-right>.arrow::before,.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#fdfdfe}.b-popover-light.bs-popover-right>.arrow::after,.b-popover-light.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#fefefe}.b-popover-light.bs-popover-bottom>.arrow::before,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#fdfdfe}.b-popover-light.bs-popover-bottom>.arrow::after,.b-popover-light.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-bottom .popover-header::before,.b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#f6f6f6}.b-popover-light.bs-popover-left>.arrow::before,.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#fdfdfe}.b-popover-light.bs-popover-left>.arrow::after,.b-popover-light.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#fefefe}.b-popover-light .popover-header{color:#212529;background-color:#f6f6f6;border-bottom-color:#eaeaea}.b-popover-light .popover-body{color:#818182}.b-popover-dark.popover{background-color:#d1d1d1;border-color:#bfbfbf}.b-popover-dark.bs-popover-top>.arrow::before,.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#bfbfbf}.b-popover-dark.bs-popover-top>.arrow::after,.b-popover-dark.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#d1d1d1}.b-popover-dark.bs-popover-right>.arrow::before,.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#bfbfbf}.b-popover-dark.bs-popover-right>.arrow::after,.b-popover-dark.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#d1d1d1}.b-popover-dark.bs-popover-bottom>.arrow::before,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#bfbfbf}.b-popover-dark.bs-popover-bottom>.arrow::after,.b-popover-dark.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#c9c9c9}.b-popover-dark.bs-popover-bottom .popover-header::before,.b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#c9c9c9}.b-popover-dark.bs-popover-left>.arrow::before,.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#bfbfbf}.b-popover-dark.bs-popover-left>.arrow::after,.b-popover-dark.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#d1d1d1}.b-popover-dark .popover-header{color:#212529;background-color:#c9c9c9;border-bottom-color:#bdbdbd}.b-popover-dark .popover-body{color:#0e0e0e}.b-popover-white.popover{background-color:#fff;border-color:#fff}.b-popover-white.bs-popover-top>.arrow::before,.b-popover-white.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#fff}.b-popover-white.bs-popover-top>.arrow::after,.b-popover-white.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#fff}.b-popover-white.bs-popover-right>.arrow::before,.b-popover-white.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#fff}.b-popover-white.bs-popover-right>.arrow::after,.b-popover-white.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#fff}.b-popover-white.bs-popover-bottom>.arrow::before,.b-popover-white.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#fff}.b-popover-white.bs-popover-bottom>.arrow::after,.b-popover-white.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#f7f7f7}.b-popover-white.bs-popover-bottom .popover-header::before,.b-popover-white.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#f7f7f7}.b-popover-white.bs-popover-left>.arrow::before,.b-popover-white.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#fff}.b-popover-white.bs-popover-left>.arrow::after,.b-popover-white.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#fff}.b-popover-white .popover-header{color:#212529;background-color:#f7f7f7;border-bottom-color:#ebebeb}.b-popover-white .popover-body{color:#858585}.b-popover-blue.popover{background-color:#cce1ea;border-color:#b8d5e1}.b-popover-blue.bs-popover-top>.arrow::before,.b-popover-blue.bs-popover-auto[x-placement^=top]>.arrow::before{border-top-color:#b8d5e1}.b-popover-blue.bs-popover-top>.arrow::after,.b-popover-blue.bs-popover-auto[x-placement^=top]>.arrow::after{border-top-color:#cce1ea}.b-popover-blue.bs-popover-right>.arrow::before,.b-popover-blue.bs-popover-auto[x-placement^=right]>.arrow::before{border-right-color:#b8d5e1}.b-popover-blue.bs-popover-right>.arrow::after,.b-popover-blue.bs-popover-auto[x-placement^=right]>.arrow::after{border-right-color:#cce1ea}.b-popover-blue.bs-popover-bottom>.arrow::before,.b-popover-blue.bs-popover-auto[x-placement^=bottom]>.arrow::before{border-bottom-color:#b8d5e1}.b-popover-blue.bs-popover-bottom>.arrow::after,.b-popover-blue.bs-popover-auto[x-placement^=bottom]>.arrow::after{border-bottom-color:#c1dbe6}.b-popover-blue.bs-popover-bottom .popover-header::before,.b-popover-blue.bs-popover-auto[x-placement^=bottom] .popover-header::before{border-bottom-color:#c1dbe6}.b-popover-blue.bs-popover-left>.arrow::before,.b-popover-blue.bs-popover-auto[x-placement^=left]>.arrow::before{border-left-color:#b8d5e1}.b-popover-blue.bs-popover-left>.arrow::after,.b-popover-blue.bs-popover-auto[x-placement^=left]>.arrow::after{border-left-color:#cce1ea}.b-popover-blue .popover-header{color:#212529;background-color:#c1dbe6;border-bottom-color:#afd0de}.b-popover-blue .popover-body{color:#00374d}.b-sidebar-outer{position:fixed;top:0;left:0;right:0;height:0;overflow:visible;z-index:calc(1030 + 5)}.b-sidebar-backdrop{position:fixed;top:0;left:0;z-index:-1;width:100vw;height:100vh;opacity:.6}.b-sidebar{display:flex;flex-direction:column;position:fixed;top:0;width:320px;max-width:100%;height:100vh;max-height:100%;margin:0;outline:0;transform:translateX(0)}.b-sidebar.slide{transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.b-sidebar.slide{transition:none}}.b-sidebar:not(.b-sidebar-right){left:0;right:auto}.b-sidebar:not(.b-sidebar-right).slide:not(.show){transform:translateX(-100%)}.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close{margin-left:auto}.b-sidebar.b-sidebar-right{left:auto;right:0}.b-sidebar.b-sidebar-right.slide:not(.show){transform:translateX(100%)}.b-sidebar.b-sidebar-right>.b-sidebar-header .close{margin-right:auto}.b-sidebar>.b-sidebar-header{font-size:1.5rem;padding:.5rem 1rem;display:flex;flex-direction:row;flex-grow:0;align-items:center}[dir=rtl] .b-sidebar>.b-sidebar-header{flex-direction:row-reverse}.b-sidebar>.b-sidebar-header .close{float:none;font-size:1.5rem}.b-sidebar>.b-sidebar-body{flex-grow:1;height:100%;overflow-y:auto}.b-sidebar>.b-sidebar-footer{flex-grow:0}.b-skeleton-wrapper{cursor:wait}.b-skeleton{position:relative;overflow:hidden;background-color:rgba(0,0,0,.12);cursor:wait;mask-image:radial-gradient(white, black)}.b-skeleton::before{content:\" \"}.b-skeleton-text{height:1rem;margin-bottom:.25rem;border-radius:.25rem}.b-skeleton-button{width:75px;padding:.375rem .75rem;font-size:14px;line-height:1.5;border-radius:8px}.b-skeleton-avatar{width:2.5em;height:2.5em;border-radius:50%}.b-skeleton-input{height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;line-height:1.5;border:#f1f1f1 solid 1px;border-radius:.25rem}.b-skeleton-icon-wrapper svg{color:rgba(0,0,0,.12)}.b-skeleton-img{height:100%;width:100%}.b-skeleton-animate-wave::after{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background:linear-gradient(90deg, transparent, hsla(0deg, 0%, 100%, 0.4), transparent);animation:b-skeleton-animate-wave 1.75s linear infinite}@media(prefers-reduced-motion: reduce){.b-skeleton-animate-wave::after{background:none;animation:none}}@keyframes b-skeleton-animate-wave{from{transform:translateX(-100%)}to{transform:translateX(100%)}}.b-skeleton-animate-fade{animation:b-skeleton-animate-fade .875s ease-in-out alternate infinite}@media(prefers-reduced-motion: reduce){.b-skeleton-animate-fade{animation:none}}@keyframes b-skeleton-animate-fade{0%{opacity:1}100%{opacity:.4}}.b-skeleton-animate-throb{animation:b-skeleton-animate-throb .875s ease-in alternate infinite}@media(prefers-reduced-motion: reduce){.b-skeleton-animate-throb{animation:none}}@keyframes b-skeleton-animate-throb{0%{transform:scale(1)}100%{transform:scale(0.975)}}.table.b-table.b-table-fixed{table-layout:fixed}.table.b-table.b-table-no-border-collapse{border-collapse:separate;border-spacing:0}.table.b-table[aria-busy=true]{opacity:.55}.table.b-table>tbody>tr.b-table-details>td{border-top:none !important}.table.b-table>caption{caption-side:bottom}.table.b-table.b-table-caption-top>caption{caption-side:top !important}.table.b-table>tbody>.table-active,.table.b-table>tbody>.table-active>th,.table.b-table>tbody>.table-active>td{background-color:rgba(0,0,0,.075)}.table.b-table.table-hover>tbody>tr.table-active:hover td,.table.b-table.table-hover>tbody>tr.table-active:hover th{color:#000;background-image:linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));background-repeat:no-repeat}.table.b-table>tbody>.bg-active,.table.b-table>tbody>.bg-active>th,.table.b-table>tbody>.bg-active>td{background-color:rgba(255,255,255,.075) !important}.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover td,.table.b-table.table-hover.table-dark>tbody>tr.bg-active:hover th{color:#fff;background-image:linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));background-repeat:no-repeat}.b-table-sticky-header,.table-responsive,[class*=table-responsive-]{margin-bottom:1rem}.b-table-sticky-header>.table,.table-responsive>.table,[class*=table-responsive-]>.table{margin-bottom:0}.b-table-sticky-header{overflow-y:auto;max-height:300px}@media print{.b-table-sticky-header{overflow-y:visible !important;max-height:none !important}}@supports(position: sticky){.b-table-sticky-header>.table.b-table>thead>tr>th{position:sticky;top:0;z-index:2}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{position:sticky;left:0}.b-table-sticky-header>.table.b-table>thead>tr>.b-table-sticky-column,.table-responsive>.table.b-table>thead>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>thead>tr>.b-table-sticky-column{z-index:5}.b-table-sticky-header>.table.b-table>tbody>tr>.b-table-sticky-column,.b-table-sticky-header>.table.b-table>tfoot>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tbody>tr>.b-table-sticky-column,.table-responsive>.table.b-table>tfoot>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tbody>tr>.b-table-sticky-column,[class*=table-responsive-]>.table.b-table>tfoot>tr>.b-table-sticky-column{z-index:2}.table.b-table>thead>tr>.table-b-table-default,.table.b-table>tbody>tr>.table-b-table-default,.table.b-table>tfoot>tr>.table-b-table-default{color:#000;background-color:#fff}.table.b-table.table-dark>thead>tr>.bg-b-table-default,.table.b-table.table-dark>tbody>tr>.bg-b-table-default,.table.b-table.table-dark>tfoot>tr>.bg-b-table-default{color:#fff;background-color:#343a40}.table.b-table.table-striped>tbody>tr:nth-of-type(odd)>.table-b-table-default{background-image:linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));background-repeat:no-repeat}.table.b-table.table-striped.table-dark>tbody>tr:nth-of-type(odd)>.bg-b-table-default{background-image:linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));background-repeat:no-repeat}.table.b-table.table-hover>tbody>tr:hover>.table-b-table-default{color:#000;background-image:linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));background-repeat:no-repeat}.table.b-table.table-hover.table-dark>tbody>tr:hover>.bg-b-table-default{color:#fff;background-image:linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));background-repeat:no-repeat}}.table.b-table>thead>tr>[aria-sort],.table.b-table>tfoot>tr>[aria-sort]{cursor:pointer;background-image:none;background-repeat:no-repeat;background-size:.65em 1em}.table.b-table>thead>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right calc(0.75rem / 2) center;padding-right:calc(0.75rem + 0.65em)}.table.b-table>thead>tr>[aria-sort].b-table-sort-icon-left,.table.b-table>tfoot>tr>[aria-sort].b-table-sort-icon-left{background-position:left calc(0.75rem / 2) center;padding-left:calc(0.75rem + 0.65em)}.table.b-table>thead>tr>[aria-sort=none],.table.b-table>tfoot>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table>thead>tr>[aria-sort=ascending],.table.b-table>tfoot>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table>thead>tr>[aria-sort=descending],.table.b-table>tfoot>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table.table-dark>thead>tr>[aria-sort=none],.table.b-table.table-dark>tfoot>tr>[aria-sort=none],.table.b-table>.thead-dark>tr>[aria-sort=none]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table.table-dark>thead>tr>[aria-sort=ascending],.table.b-table.table-dark>tfoot>tr>[aria-sort=ascending],.table.b-table>.thead-dark>tr>[aria-sort=ascending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table.table-dark>thead>tr>[aria-sort=descending],.table.b-table.table-dark>tfoot>tr>[aria-sort=descending],.table.b-table>.thead-dark>tr>[aria-sort=descending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table>thead>tr>.table-dark[aria-sort=none],.table.b-table>tfoot>tr>.table-dark[aria-sort=none]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table>thead>tr>.table-dark[aria-sort=ascending],.table.b-table>tfoot>tr>.table-dark[aria-sort=ascending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table>thead>tr>.table-dark[aria-sort=descending],.table.b-table>tfoot>tr>.table-dark[aria-sort=descending]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\")}.table.b-table.table-sm>thead>tr>[aria-sort]:not(.b-table-sort-icon-left),.table.b-table.table-sm>tfoot>tr>[aria-sort]:not(.b-table-sort-icon-left){background-position:right calc(0.3rem / 2) center;padding-right:calc(0.3rem + 0.65em)}.table.b-table.table-sm>thead>tr>[aria-sort].b-table-sort-icon-left,.table.b-table.table-sm>tfoot>tr>[aria-sort].b-table-sort-icon-left{background-position:left calc(0.3rem / 2) center;padding-left:calc(0.3rem + 0.65em)}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click)>tbody>tr{cursor:pointer}.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range>tbody>tr{user-select:none}@media(max-width: 575.98px){.table.b-table.b-table-stacked-sm{display:block;width:100%}.table.b-table.b-table-stacked-sm>caption,.table.b-table.b-table-stacked-sm>tbody,.table.b-table.b-table-stacked-sm>tbody>tr,.table.b-table.b-table-stacked-sm>tbody>tr>td,.table.b-table.b-table-stacked-sm>tbody>tr>th{display:block}.table.b-table.b-table-stacked-sm>thead,.table.b-table.b-table-stacked-sm>tfoot{display:none}.table.b-table.b-table-stacked-sm>thead>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-sm>tfoot>tr.b-table-bottom-row{display:none}.table.b-table.b-table-stacked-sm>caption{caption-side:top !important}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]::before{content:attr(data-label);width:40%;float:left;text-align:right;overflow-wrap:break-word;font-weight:bold;font-style:normal;padding:0 calc(1rem / 2) 0 0;margin:0}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]::after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-sm>tbody>tr>[data-label]>div{display:inline-block;width:calc(100% - 40%);padding:0 0 0 calc(1rem / 2);margin:0}.table.b-table.b-table-stacked-sm>tbody>tr.top-row,.table.b-table.b-table-stacked-sm>tbody>tr.bottom-row{display:none}.table.b-table.b-table-stacked-sm>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-sm>tbody>tr>[rowspan]+th{border-top-width:3px}}@media(max-width: 767.98px){.table.b-table.b-table-stacked-md{display:block;width:100%}.table.b-table.b-table-stacked-md>caption,.table.b-table.b-table-stacked-md>tbody,.table.b-table.b-table-stacked-md>tbody>tr,.table.b-table.b-table-stacked-md>tbody>tr>td,.table.b-table.b-table-stacked-md>tbody>tr>th{display:block}.table.b-table.b-table-stacked-md>thead,.table.b-table.b-table-stacked-md>tfoot{display:none}.table.b-table.b-table-stacked-md>thead>tr.b-table-top-row,.table.b-table.b-table-stacked-md>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-md>tfoot>tr.b-table-bottom-row{display:none}.table.b-table.b-table-stacked-md>caption{caption-side:top !important}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]::before{content:attr(data-label);width:40%;float:left;text-align:right;overflow-wrap:break-word;font-weight:bold;font-style:normal;padding:0 calc(1rem / 2) 0 0;margin:0}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]::after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-md>tbody>tr>[data-label]>div{display:inline-block;width:calc(100% - 40%);padding:0 0 0 calc(1rem / 2);margin:0}.table.b-table.b-table-stacked-md>tbody>tr.top-row,.table.b-table.b-table-stacked-md>tbody>tr.bottom-row{display:none}.table.b-table.b-table-stacked-md>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-md>tbody>tr>[rowspan]+th{border-top-width:3px}}@media(max-width: 991.98px){.table.b-table.b-table-stacked-lg{display:block;width:100%}.table.b-table.b-table-stacked-lg>caption,.table.b-table.b-table-stacked-lg>tbody,.table.b-table.b-table-stacked-lg>tbody>tr,.table.b-table.b-table-stacked-lg>tbody>tr>td,.table.b-table.b-table-stacked-lg>tbody>tr>th{display:block}.table.b-table.b-table-stacked-lg>thead,.table.b-table.b-table-stacked-lg>tfoot{display:none}.table.b-table.b-table-stacked-lg>thead>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-lg>tfoot>tr.b-table-bottom-row{display:none}.table.b-table.b-table-stacked-lg>caption{caption-side:top !important}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]::before{content:attr(data-label);width:40%;float:left;text-align:right;overflow-wrap:break-word;font-weight:bold;font-style:normal;padding:0 calc(1rem / 2) 0 0;margin:0}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]::after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-lg>tbody>tr>[data-label]>div{display:inline-block;width:calc(100% - 40%);padding:0 0 0 calc(1rem / 2);margin:0}.table.b-table.b-table-stacked-lg>tbody>tr.top-row,.table.b-table.b-table-stacked-lg>tbody>tr.bottom-row{display:none}.table.b-table.b-table-stacked-lg>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-lg>tbody>tr>[rowspan]+th{border-top-width:3px}}@media(max-width: 1199.98px){.table.b-table.b-table-stacked-xl{display:block;width:100%}.table.b-table.b-table-stacked-xl>caption,.table.b-table.b-table-stacked-xl>tbody,.table.b-table.b-table-stacked-xl>tbody>tr,.table.b-table.b-table-stacked-xl>tbody>tr>td,.table.b-table.b-table-stacked-xl>tbody>tr>th{display:block}.table.b-table.b-table-stacked-xl>thead,.table.b-table.b-table-stacked-xl>tfoot{display:none}.table.b-table.b-table-stacked-xl>thead>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked-xl>tfoot>tr.b-table-bottom-row{display:none}.table.b-table.b-table-stacked-xl>caption{caption-side:top !important}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]::before{content:attr(data-label);width:40%;float:left;text-align:right;overflow-wrap:break-word;font-weight:bold;font-style:normal;padding:0 calc(1rem / 2) 0 0;margin:0}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]::after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked-xl>tbody>tr>[data-label]>div{display:inline-block;width:calc(100% - 40%);padding:0 0 0 calc(1rem / 2);margin:0}.table.b-table.b-table-stacked-xl>tbody>tr.top-row,.table.b-table.b-table-stacked-xl>tbody>tr.bottom-row{display:none}.table.b-table.b-table-stacked-xl>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked-xl>tbody>tr>[rowspan]+th{border-top-width:3px}}.table.b-table.b-table-stacked{display:block;width:100%}.table.b-table.b-table-stacked>caption,.table.b-table.b-table-stacked>tbody,.table.b-table.b-table-stacked>tbody>tr,.table.b-table.b-table-stacked>tbody>tr>td,.table.b-table.b-table-stacked>tbody>tr>th{display:block}.table.b-table.b-table-stacked>thead,.table.b-table.b-table-stacked>tfoot{display:none}.table.b-table.b-table-stacked>thead>tr.b-table-top-row,.table.b-table.b-table-stacked>thead>tr.b-table-bottom-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-top-row,.table.b-table.b-table-stacked>tfoot>tr.b-table-bottom-row{display:none}.table.b-table.b-table-stacked>caption{caption-side:top !important}.table.b-table.b-table-stacked>tbody>tr>[data-label]::before{content:attr(data-label);width:40%;float:left;text-align:right;overflow-wrap:break-word;font-weight:bold;font-style:normal;padding:0 calc(1rem / 2) 0 0;margin:0}.table.b-table.b-table-stacked>tbody>tr>[data-label]::after{display:block;clear:both;content:\"\"}.table.b-table.b-table-stacked>tbody>tr>[data-label]>div{display:inline-block;width:calc(100% - 40%);padding:0 0 0 calc(1rem / 2);margin:0}.table.b-table.b-table-stacked>tbody>tr.top-row,.table.b-table.b-table-stacked>tbody>tr.bottom-row{display:none}.table.b-table.b-table-stacked>tbody>tr>:first-child{border-top-width:3px}.table.b-table.b-table-stacked>tbody>tr>[rowspan]+td,.table.b-table.b-table-stacked>tbody>tr>[rowspan]+th{border-top-width:3px}.b-time{min-width:150px}.b-time[aria-disabled=true] output,.b-time[aria-readonly=true] output,.b-time output.disabled{background-color:#e9ecef;opacity:1}.b-time[aria-disabled=true] output{pointer-events:none}[dir=rtl] .b-time>.d-flex:not(.flex-column){flex-direction:row-reverse}.b-time .b-time-header{margin-bottom:.5rem}.b-time .b-time-header output{padding:.25rem;font-size:80%}.b-time .b-time-footer{margin-top:.5rem}.b-time .b-time-ampm{margin-left:.5rem}.b-toast{display:block;position:relative;max-width:350px;backface-visibility:hidden;background-clip:padding-box;z-index:1;border-radius:.25rem}.b-toast .toast{background-color:rgba(255,255,255,.85)}.b-toast:not(:last-child){margin-bottom:.75rem}.b-toast.b-toast-solid .toast{background-color:#fff}.b-toast .toast{opacity:1}.b-toast .toast.fade:not(.show){opacity:0}.b-toast .toast .toast-body{display:block}.b-toast-primary .toast{background-color:rgba(222,236,241,.85);border-color:rgba(184,213,225,.85);color:#00374d}.b-toast-primary .toast .toast-header{color:#00374d;background-color:rgba(204,225,234,.85);border-bottom-color:rgba(184,213,225,.85)}.b-toast-primary.b-toast-solid .toast{background-color:#deecf1}.b-toast-secondary .toast{background-color:rgba(243,243,243,.85);border-color:rgba(219,219,219,.85);color:#434343}.b-toast-secondary .toast .toast-header{color:#434343;background-color:rgba(230,230,230,.85);border-bottom-color:rgba(219,219,219,.85)}.b-toast-secondary.b-toast-solid .toast{background-color:#f3f3f3}.b-toast-success .toast{background-color:rgba(242,248,237,.85);border-color:rgba(219,235,204,.85);color:#426025}.b-toast-success .toast .toast-header{color:#426025;background-color:rgba(229,241,218,.85);border-bottom-color:rgba(219,235,204,.85)}.b-toast-success.b-toast-solid .toast{background-color:#f2f8ed}.b-toast-info .toast{background-color:rgba(229,244,247,.85);border-color:rgba(190,229,235,.85);color:#0c5460}.b-toast-info .toast .toast-header{color:#0c5460;background-color:rgba(209,236,241,.85);border-bottom-color:rgba(190,229,235,.85)}.b-toast-info.b-toast-solid .toast{background-color:#e5f4f7}.b-toast-warning .toast{background-color:rgba(255,249,231,.85);border-color:rgba(255,238,186,.85);color:#856404}.b-toast-warning .toast .toast-header{color:#856404;background-color:rgba(255,243,205,.85);border-bottom-color:rgba(255,238,186,.85)}.b-toast-warning.b-toast-solid .toast{background-color:#fff9e7}.b-toast-danger .toast{background-color:rgba(252,237,238,.85);border-color:rgba(245,198,203,.85);color:#721c24}.b-toast-danger .toast .toast-header{color:#721c24;background-color:rgba(248,215,218,.85);border-bottom-color:rgba(245,198,203,.85)}.b-toast-danger.b-toast-solid .toast{background-color:#fcedee}.b-toast-light .toast{background-color:rgba(255,255,255,.85);border-color:rgba(253,253,254,.85);color:#818182}.b-toast-light .toast .toast-header{color:#818182;background-color:rgba(254,254,254,.85);border-bottom-color:rgba(253,253,254,.85)}.b-toast-light.b-toast-solid .toast{background-color:#fff}.b-toast-dark .toast{background-color:rgba(222,222,222,.85);border-color:rgba(191,191,191,.85);color:#0e0e0e}.b-toast-dark .toast .toast-header{color:#0e0e0e;background-color:rgba(209,209,209,.85);border-bottom-color:rgba(191,191,191,.85)}.b-toast-dark.b-toast-solid .toast{background-color:#dedede}.b-toast-white .toast{background-color:rgba(255,255,255,.85);border-color:rgba(255,255,255,.85);color:#858585}.b-toast-white .toast .toast-header{color:#858585;background-color:rgba(255,255,255,.85);border-bottom-color:rgba(255,255,255,.85)}.b-toast-white.b-toast-solid .toast{background-color:#fff}.b-toast-blue .toast{background-color:rgba(222,236,241,.85);border-color:rgba(184,213,225,.85);color:#00374d}.b-toast-blue .toast .toast-header{color:#00374d;background-color:rgba(204,225,234,.85);border-bottom-color:rgba(184,213,225,.85)}.b-toast-blue.b-toast-solid .toast{background-color:#deecf1}.b-toaster{z-index:1100}.b-toaster .b-toaster-slot{position:relative;display:block}.b-toaster .b-toaster-slot:empty{display:none !important}.b-toaster.b-toaster-top-right,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full,.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full{position:fixed;left:.5rem;right:.5rem;margin:0;padding:0;height:0;overflow:visible}.b-toaster.b-toaster-top-right .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot{position:absolute;max-width:350px;width:100%;left:0;right:0;padding:0;margin:0}.b-toaster.b-toaster-top-full .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot{width:100%;max-width:100%}.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-top-full .b-toaster-slot .toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast{width:100%;max-width:100%}.b-toaster.b-toaster-top-right,.b-toaster.b-toaster-top-left,.b-toaster.b-toaster-top-center,.b-toaster.b-toaster-top-full{top:0}.b-toaster.b-toaster-top-right .b-toaster-slot,.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-top-full .b-toaster-slot{top:.5rem}.b-toaster.b-toaster-bottom-right,.b-toaster.b-toaster-bottom-left,.b-toaster.b-toaster-bottom-center,.b-toaster.b-toaster-bottom-full{bottom:0}.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-bottom-center .b-toaster-slot,.b-toaster.b-toaster-bottom-full .b-toaster-slot{bottom:.5rem}.b-toaster.b-toaster-top-right .b-toaster-slot,.b-toaster.b-toaster-bottom-right .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-bottom-center .b-toaster-slot{margin-left:auto}.b-toaster.b-toaster-top-left .b-toaster-slot,.b-toaster.b-toaster-bottom-left .b-toaster-slot,.b-toaster.b-toaster-top-center .b-toaster-slot,.b-toaster.b-toaster-bottom-center .b-toaster-slot{margin-right:auto}.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-right .b-toast.b-toaster-move,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move{transition:transform .175s}.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade{transition-delay:.175s}.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active{position:absolute;transition-delay:.175s}.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade,.b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade{transition-delay:0s}.tooltip.b-tooltip{display:block;opacity:.9;outline:0}.tooltip.b-tooltip.fade:not(.show){opacity:0}.tooltip.b-tooltip.show{opacity:.9}.tooltip.b-tooltip.noninteractive{pointer-events:none}.tooltip.b-tooltip .arrow{margin:0 .25rem}.tooltip.b-tooltip.bs-tooltip-right .arrow,.tooltip.b-tooltip.bs-tooltip-auto[x-placement^=right] .arrow,.tooltip.b-tooltip.bs-tooltip-left .arrow,.tooltip.b-tooltip.bs-tooltip-auto[x-placement^=left] .arrow{margin:.25rem 0}.tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#006994}.tooltip.b-tooltip-primary.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#006994}.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#006994}.tooltip.b-tooltip-primary.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#006994}.tooltip.b-tooltip-primary .tooltip-inner{color:#fff;background-color:#006994}.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:gray}.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:gray}.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:gray}.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:gray}.tooltip.b-tooltip-secondary .tooltip-inner{color:#fff;background-color:gray}.tooltip.b-tooltip-success.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#7fb848}.tooltip.b-tooltip-success.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#7fb848}.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#7fb848}.tooltip.b-tooltip-success.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#7fb848}.tooltip.b-tooltip-success .tooltip-inner{color:#212529;background-color:#7fb848}.tooltip.b-tooltip-info.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#17a2b8}.tooltip.b-tooltip-info.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#17a2b8}.tooltip.b-tooltip-info .tooltip-inner{color:#fff;background-color:#17a2b8}.tooltip.b-tooltip-warning.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#ffc107}.tooltip.b-tooltip-warning.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#ffc107}.tooltip.b-tooltip-warning .tooltip-inner{color:#212529;background-color:#ffc107}.tooltip.b-tooltip-danger.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#dc3545}.tooltip.b-tooltip-danger.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#dc3545}.tooltip.b-tooltip-danger .tooltip-inner{color:#fff;background-color:#dc3545}.tooltip.b-tooltip-light.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#f8f9fa}.tooltip.b-tooltip-light.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#f8f9fa}.tooltip.b-tooltip-light .tooltip-inner{color:#212529;background-color:#f8f9fa}.tooltip.b-tooltip-dark.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#1a1a1a}.tooltip.b-tooltip-dark.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#1a1a1a}.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#1a1a1a}.tooltip.b-tooltip-dark.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#1a1a1a}.tooltip.b-tooltip-dark .tooltip-inner{color:#fff;background-color:#1a1a1a}.tooltip.b-tooltip-white.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#fff}.tooltip.b-tooltip-white.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#fff}.tooltip.b-tooltip-white.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#fff}.tooltip.b-tooltip-white.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-white.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#fff}.tooltip.b-tooltip-white .tooltip-inner{color:#212529;background-color:#fff}.tooltip.b-tooltip-blue.bs-tooltip-top .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=top] .arrow::before{border-top-color:#006994}.tooltip.b-tooltip-blue.bs-tooltip-right .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=right] .arrow::before{border-right-color:#006994}.tooltip.b-tooltip-blue.bs-tooltip-bottom .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=bottom] .arrow::before{border-bottom-color:#006994}.tooltip.b-tooltip-blue.bs-tooltip-left .arrow::before,.tooltip.b-tooltip-blue.bs-tooltip-auto[x-placement^=left] .arrow::before{border-left-color:#006994}.tooltip.b-tooltip-blue .tooltip-inner{color:#fff;background-color:#006994}.b-icon.bi{display:inline-block;overflow:visible;vertical-align:-0.15em}.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{transform-origin:center;animation:.75s infinite ease-in-out alternate b-icon-animation-cylon}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-cylon,.b-icon.b-iconstack .b-icon-animation-cylon>g{animation:none}}.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{transform-origin:center;animation:.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-cylon-vertical,.b-icon.b-iconstack .b-icon-animation-cylon-vertical>g{animation:none}}.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{transform-origin:center;animation:.75s infinite ease-in-out alternate b-icon-animation-fade}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-fade,.b-icon.b-iconstack .b-icon-animation-fade>g{animation:none}}.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{transform-origin:center;animation:2s infinite linear normal b-icon-animation-spin}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-spin,.b-icon.b-iconstack .b-icon-animation-spin>g{animation:none}}.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{transform-origin:center;animation:2s infinite linear reverse b-icon-animation-spin}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-spin-reverse,.b-icon.b-iconstack .b-icon-animation-spin-reverse>g{animation:none}}.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{transform-origin:center;animation:1s infinite steps(8) normal b-icon-animation-spin}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-spin-pulse,.b-icon.b-iconstack .b-icon-animation-spin-pulse>g{animation:none}}.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{transform-origin:center;animation:1s infinite steps(8) reverse b-icon-animation-spin}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-spin-reverse-pulse,.b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse>g{animation:none}}.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{transform-origin:center;animation:.75s infinite ease-in-out alternate b-icon-animation-throb}@media(prefers-reduced-motion: reduce){.b-icon.b-icon-animation-throb,.b-icon.b-iconstack .b-icon-animation-throb>g{animation:none}}@keyframes b-icon-animation-cylon{0%{transform:translateX(-25%)}100%{transform:translateX(25%)}}@keyframes b-icon-animation-cylon-vertical{0%{transform:translateY(25%)}100%{transform:translateY(-25%)}}@keyframes b-icon-animation-fade{0%{opacity:.1}100%{opacity:1}}@keyframes b-icon-animation-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}@keyframes b-icon-animation-throb{0%{opacity:.5;transform:scale(0.5)}100%{opacity:1;transform:scale(1)}}.btn .b-icon.bi,.nav-link .b-icon.bi,.dropdown-toggle .b-icon.bi,.dropdown-item .b-icon.bi,.input-group-text .b-icon.bi{font-size:125%;vertical-align:text-bottom}.w-65{width:65%}.btn-success{color:#fff}.bg-green-400{background-color:#fafff4}.border-green-400{border-color:#fafff4}.bg-gray-400{background-color:#f1f1f1}.border-gray-400{border-color:#f1f1f1}table thead{border-bottom:1px solid #7fb848}table thead th{font-size:14px;font-weight:700;text-transform:uppercase}.text-transform-none{text-transform:none}.line-height-inherit{line-height:inherit}.line-height-sm{line-height:14px}.line-height-lg{line-height:24px}.line-height-xl{line-height:36px}.font-size-24{font-size:1.5rem}.cursor-pointer{cursor:pointer}.font-weight-medium{font-weight:500}@media(min-width: 768px){.w-md-auto{width:auto !important}.md-h5{font-size:.875rem}.md-h4{font-size:1.25rem}.md-h3{font-size:1.75rem}.md-h2{font-size:2.625rem}.font-weight-md-medium{font-weight:500 !important}.text-md-center{text-align:center !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kiwi.b446d34.png";

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const actions = {
  async nuxtServerInit(_, {
    $axios,
    $config,
    $cookies
  }) {
    const token = $cookies.get('token', {
      fromRes: true
    });
    if (token) return;
    const payload = {
      grant_type: 'client_credentials',
      scope: '*',
      client_id: $config.client_id,
      client_secret: $config.client_secret
    };
    await $axios.post('oauth/token', payload).then(data => {
      $cookies.set('token', data.data.access_token, {
        path: '/',
        maxAge: 60 * 60 // 1 Hour
      });
    });
  }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "JobCustomerInfo", function() { return JobCustomerInfo; });
__webpack_require__.d(components_namespaceObject, "JobNotes", function() { return JobNotes; });
__webpack_require__.d(components_namespaceObject, "JobQuoteItems", function() { return JobQuoteItems; });
__webpack_require__.d(components_namespaceObject, "JobSitePlan", function() { return JobSitePlan; });
__webpack_require__.d(components_namespaceObject, "QuoteCustomerInfo", function() { return QuoteCustomerInfo; });
__webpack_require__.d(components_namespaceObject, "QuoteCustomerNotes", function() { return QuoteCustomerNotes; });
__webpack_require__.d(components_namespaceObject, "QuotePricing", function() { return QuotePricing; });
__webpack_require__.d(components_namespaceObject, "QuoteTerms", function() { return QuoteTerms; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(17);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(18);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(10);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _15ab965f = () => interopDefault(__webpack_require__.e(/* import() | pages/Job */ 9).then(__webpack_require__.bind(null, 57)));
const _720be3f7 = () => interopDefault(__webpack_require__.e(/* import() | pages/Plan */ 10).then(__webpack_require__.bind(null, 58)));
const _a5aa12d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 11).then(__webpack_require__.bind(null, 59)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Job",
    component: _15ab965f,
    name: "Job"
  }, {
    path: "/Plan",
    component: _720be3f7,
    name: "Plan"
  }, {
    path: "/",
    component: _a5aa12d8,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "583cba9d"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "9b60f6de"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(28);

// EXTERNAL MODULE: ./assets/scss/app.scss
var scss_app = __webpack_require__(30);

// EXTERNAL MODULE: ./layouts/default.vue
var layouts_default = __webpack_require__(19);

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default["default"])
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(33), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const JobCustomerInfo = () => __webpack_require__.e(/* import() | components/job-customer-info */ 1).then(__webpack_require__.bind(null, 45)).then(c => wrapFunctional(c.default || c));
const JobNotes = () => __webpack_require__.e(/* import() | components/job-notes */ 2).then(__webpack_require__.bind(null, 46)).then(c => wrapFunctional(c.default || c));
const JobQuoteItems = () => __webpack_require__.e(/* import() | components/job-quote-items */ 3).then(__webpack_require__.bind(null, 47)).then(c => wrapFunctional(c.default || c));
const JobSitePlan = () => __webpack_require__.e(/* import() | components/job-site-plan */ 4).then(__webpack_require__.bind(null, 52)).then(c => wrapFunctional(c.default || c));
const QuoteCustomerInfo = () => __webpack_require__.e(/* import() | components/quote-customer-info */ 5).then(__webpack_require__.bind(null, 48)).then(c => wrapFunctional(c.default || c));
const QuoteCustomerNotes = () => __webpack_require__.e(/* import() | components/quote-customer-notes */ 6).then(__webpack_require__.bind(null, 50)).then(c => wrapFunctional(c.default || c));
const QuotePricing = () => __webpack_require__.e(/* import() | components/quote-pricing */ 7).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const QuoteTerms = () => __webpack_require__.e(/* import() | components/quote-terms */ 8).then(__webpack_require__.bind(null, 51)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(7);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(20);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(21);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://api-staging.ecolawn.nz';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/filters.js

external_vue_default.a.filter('emptyDash', value => {
  return value != null && value != "" ? value : "--";
});
external_vue_default.a.filter('money', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(value);
});
// CONCATENATED MODULE: ./plugins/axios.js
/* harmony default export */ var plugins_axios = (function ({
  $axios,
  $cookies,
  req
}) {
  $axios.onRequest(config => {
    const token = $cookies.get('token', {
      fromRes: true
    });
    if (!req && !token) {
      // re run Nuxt ServerInit to get new token 
      location.reload();
    }
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
});
// CONCATENATED MODULE: ./plugins/bootstrap.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVueIcons"]);
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\bootstrap-vue.js (mode: 'all')
 // Source: .\\cookie-universal-nuxt.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: ..\\plugins\\filters (mode: 'all')
 // Source: ..\\plugins\\axios (mode: 'all')
 // Source: ..\\plugins\\bootstrap (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Eco Lawn",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat:wght@300;400;500;700&display=swap"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/bootstrap.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/bootstrap.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map