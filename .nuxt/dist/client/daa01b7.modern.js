(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{316:function(t,e,o){var content=o(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("31d03ffe",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";o.r(e);var n=o(148),l={components:{VZoomer:n.a.Zoomer,VZoomerGallery:n.a.Gallery},props:{image:String}},r=o(57),component=Object(r.a)(l,(function(){var t=this._self._c;return t("v-zoomer",{staticStyle:{width:"100%",height:"100%",border:"solid 1px silver"}},[t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:this.image}})])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,o){"use strict";o(316)},327:function(t,e,o){var n=o(68)((function(i){return i[1]}));n.push([t.i,".full-screen .modal-dialog{height:100%;max-width:100%;padding:24px}",""]),n.locals={},t.exports=n},333:function(t,e,o){"use strict";o.r(e);var n={components:{ProductContainer:o(322).default},data:()=>({products:[{name:"ECO PRIME 40",image:"https://ecolawn.mohamedradwan.me/imgs/soft-fall.png"},{name:"SOFT FALL 15MM",image:"https://ecolawn.mohamedradwan.me/imgs/soft-fall.png"},{name:"Cross section example",image:"https://ecolawn.mohamedradwan.me/imgs/cross-section.png"}],image:"https://ecolawn.mohamedradwan.me/imgs/plan-2.png"})},l=(o(326),o(57)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-5"},[e("b-navbar",{attrs:{variant:"primary"}},[e("b-container",[e("b-button",{staticClass:"text-white font-weight-medium",attrs:{to:"/",variant:"link"}},[e("b-icon",{attrs:{icon:"chevron-left"}}),t._v("\n        Return to quote\n      ")],1)],1)],1),t._v(" "),e("div",{staticClass:"py-5 bg-green-400"},[e("b-container",{},[e("p",{staticClass:"h3 font-weight-bold my-5"},[t._v("Plans")]),t._v(" "),e("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal1",modifiers:{modal1:!0}}],staticClass:"text-center"},[e("img",{attrs:{src:t.image,alt:""}})])])],1),t._v(" "),e("div",[e("b-modal",{staticStyle:{height:"500px"},attrs:{id:"modal1","content-class":"p-0","modal-class":"full-screen","ok-only":"false","cancel-only":"false","hide-footer":""}},[e("div",{staticClass:"p-0"},[e("img",{attrs:{src:t.image,alt:""}})])])],1),t._v(" "),e("b-container",[e("p",{staticClass:"h3 font-weight-bold my-5"},[t._v("Products used")]),t._v(" "),e("b-row",t._l(t.products,(function(o,n){return e("b-col",{key:n,staticClass:"mb-4 mb-md-0",attrs:{cols:"12",md:"4"}},[e("b-img",{staticClass:"w-100",attrs:{src:null==o?void 0:o.image,alt:"eco-prime"}}),t._v(" "),e("p",{staticClass:"h4 font-weight-bold mt-3"},[t._v(t._s(o.name))])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);