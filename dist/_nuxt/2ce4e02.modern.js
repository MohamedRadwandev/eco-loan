(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{319:function(t,e,n){"use strict";n.r(e);var o=n(148),r={components:{VZoomer:o.a.Zoomer,VZoomerGallery:o.a.Gallery},props:{image:String}},l=n(57),component=Object(l.a)(r,(function(){var t=this._self._c;return t("v-zoomer",{staticStyle:{width:"100%",height:"500px",border:"solid 1px silver"}},[t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:this.image}})])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var o={components:{ProductContainer:n(319).default},data:()=>({products:[{name:"ECO PRIME 40",image:"../static/imgs/soft-fall.png"},{name:"SOFT FALL 15MM",image:"../static/imgs/soft-fall.png"},{name:"Cross section example",image:"../static/imgs/cross-section.png"}],image:"../static/imgs/plan.png"})},r=n(57),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-5"},[e("b-navbar",{attrs:{variant:"primary"}},[e("b-container",[e("b-button",{staticClass:"text-white font-weight-medium",attrs:{to:"/",variant:"link"}},[e("b-icon",{attrs:{icon:"chevron-left"}}),t._v("\n        Return to quote\n      ")],1)],1)],1),t._v(" "),e("div",{staticClass:"py-5 bg-green-400"},[e("b-container",[e("p",{staticClass:"h3 font-weight-bold my-5"},[t._v("Plans")]),t._v(" "),e("div",{staticClass:"text-center"},[e("ProductContainer",{attrs:{image:t.image}})],1)])],1),t._v(" "),e("b-container",[e("p",{staticClass:"h3 font-weight-bold my-5"},[t._v("Products used")]),t._v(" "),e("b-row",t._l(t.products,(function(n,o){return e("b-col",{key:o,staticClass:"mb-4 mb-md-0",attrs:{cols:"12",md:"4"}},[e("b-img",{staticClass:"w-100",attrs:{src:null==n?void 0:n.image,alt:"eco-prime"}}),t._v(" "),e("p",{staticClass:"h4 font-weight-bold mt-3"},[t._v(t._s(n.name))])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductContainer:n(319).default})}}]);