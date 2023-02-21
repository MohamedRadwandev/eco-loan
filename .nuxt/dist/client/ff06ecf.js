(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{375:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(138).default)("7e9b2d1c",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n(375)},379:function(t,e,n){var o=n(137)(!1);o.push([t.i,"@media(min-width: 768px){[data-v-706ecf8a] .table tbody tr:first-child{display:none}}",""]),t.exports=o},387:function(t,e,n){"use strict";n.r(e);n(42),n(14),n(84);var o=n(3),l=n(50);n(28),n(8),n(33),n(12),n(30),n(15),n(10),n(16),n(17);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={inject:["quote"],components:{BIcon:n(69).a},data:function(){return{fields:[{key:"name",label:"Name",tdClass:"w-65"},{key:"sub_total",label:"price"},{key:"quantity",label:"quantity",thClass:"text-center",tdClass:"text-center"},{key:"total_amount",label:"total",tdClass:"text-right"}],items:[{_showDetails:!1}].concat(Object(l.a)(this.formatItems())),expandAll:!1}},computed:{allColsExpanded:function(){return this.items.slice(1).every((function(t){return t._showDetails}))}},watch:{allColsExpanded:function(t){this.expandAll=t}},methods:{toggleCollapse:function(t){t._showDetails=!t._showDetails},toggleCollapseAll:function(){var t=this;this.expandAll=!this.expandAll,this.items.slice(1).forEach((function(e){e._showDetails=t.expandAll}))},formatItems:function(){return this.quote.items.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({_showDetails:!1},t)}))}}},d=c,m=(n(378),n(92)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"py-5"},[e("p",{staticClass:"h3 font-weight-bold"},[t._v("Cost breakdown")]),t._v(" "),e("b-table",{staticClass:"mt-4",attrs:{borderless:"",responsive:"",items:t.items,fields:t.fields,"details-td-class":"d-md-none pt-0"},on:{"row-clicked":t.toggleCollapse},scopedSlots:t._u([{key:"head(name)",fn:function(){return[t._v("\n      Name\n      "),e("b-btn",{staticClass:"text-uppercase font-weight-bold ml-4 d-none d-md-inline-block",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.toggleCollapseAll}},[t._v("\n        "+t._s(t.allColsExpanded||t.expandAll?"Collapse All":"Expand All")+"\n        "),e("b-icon",{staticClass:"font-weight-bold ml-2",attrs:{icon:t.allColsExpanded||t.expandAll?"chevron-up":"chevron-down"}})],1)]},proxy:!0},{key:"head(total_amount)",fn:function(){return[e("div",{staticClass:"text-nowrap text-right"},[t._v("\n        Total\n        "),e("span",{staticClass:"h6 text-muted text-transform-none font-weight-normal"},[t._v("(inc GST)")])])]},proxy:!0},{key:"cell(name)",fn:function(n){return[n.item.name?e("div",[e("div",{staticClass:"d-flex align-items-start cursor-pointer"},[e("p",{staticClass:"h5 mb-0 font-weight-bold d-inline-block"},[t._v("\n            "+t._s(n.item.name)+"\n          ")]),t._v(" "),e("b-icon",{staticClass:"text-dark ml-3",attrs:{icon:n.detailsShowing?"chevron-up":"chevron-down"}})],1),t._v(" "),n.item._showDetails?e("p",{staticClass:"h5 mt-2 d-none d-md-block"},[t._v("\n          "+t._s(n.item.description)+"\n        ")]):t._e()]):e("b-btn",{staticClass:"text-uppercase font-weight-bold text-nowrap",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.toggleCollapseAll}},[t._v("\n        "+t._s(t.allColsExpanded||t.expandAll?"Collapse All":"Expand All")+"\n        "),e("b-icon",{staticClass:"font-weight-bold ml-2",attrs:{icon:t.allColsExpanded||t.expandAll?"chevron-up":"chevron-down"}})],1)]}},{key:"cell(sub_total)",fn:function(n){return[n.item.sub_total?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(t._f("money")(n.item.sub_total))+"\n      ")]):t._e()]}},{key:"cell(quantity)",fn:function(n){return[n.item.quantity?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(n.item.quantity)+" "+t._s(n.item.unit)+"\n      ")]):t._e()]}},{key:"cell(total_amount)",fn:function(n){return[n.item.total_amount?e("p",{staticClass:"font-weight-bold h5"},[t._v("\n        "+t._s(t._f("money")(n.item.total_amount))+"\n      ")]):t._e()]}},{key:"row-details",fn:function(n){return[n.item.description?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(n.item.description)+"\n      ")]):t._e()]}}])}),t._v(" "),e("b-card",{staticClass:"mt-4",attrs:{"bg-variant":"green-400","border-variant":"green-400"}},[e("b-card-text",{staticClass:"py-3 d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row",attrs:{"text-tag":"div"}},[e("b-btn",{staticClass:"px-5 w-100 w-md-auto",attrs:{variant:"success"}},[t._v("VIEW PLAN HERE")]),t._v(" "),e("div",{staticClass:"d-flex align-items-start align-items-md-start flex-column flex-md-row mt-3 mt-md-0"},[e("p",{staticClass:"h4 mb-0 line-height-xl"},[t._v("Total amount (inc GST)")]),t._v(" "),e("div",[e("p",{staticClass:"font-size-24 font-weight-bold ml-md-4 mb-0"},[t._v("\n            "+t._s(t._f("money")(t.quote.pricing.total_amount))+"\n          ")]),t._v(" "),e("p",{staticClass:"text-muted h6 mt-1 text-right mb-0"},[t._v("\n            GST included $500.50\n          ")])])])],1)],1),t._v(" "),e("b-card",{staticClass:"rounded-0 mt-4 text-white py-0 px-0 border-0",attrs:{"bg-variant":"dark","border-variant":"dark","body-class":"p-4"}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h3 font-weight-bold"},[t._v("Deposit payable")]),t._v(" "),e("p",{staticClass:"h5 line-height-lg mb-0"},[t._v("\n          In order to accept this quote you will be required to pay a\n          "+t._s(t.quote.pricing.deposit_percentage)+"% deposit. Clearance of your\n          "+t._s(t.quote.pricing.deposit_percentage)+"% deposit payment will confirm\n          your job booking and quote acceptance.\n        ")])]),t._v(" "),e("b-col",{staticClass:"text-md-right mt-5 mt-md-0",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"d-flex align-items-center justify-content-between justify-content-md-end"},[e("p",{staticClass:"h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"},[t._v("\n            Deposit "+t._s(t.quote.pricing.deposit_percentage)+"% of total amount\n          ")]),t._v(" "),e("p",{staticClass:"font-size-24 font-weight-bold mb-0 ml-4"},[t._v("\n            "+t._s(t._f("money")(t.quote.pricing.deposit_amount))+"\n          ")])]),t._v(" "),e("p",{staticClass:"h6 mt-2 w-50 w-md-auto"},[t._v("\n          Deposit due in xx days for work to start\n        ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between justify-content-md-end mt-4"},[e("p",{staticClass:"h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"},[t._v("\n            Remainder due on completion\n          ")]),t._v(" "),e("p",{staticClass:"font-size-24 font-weight-bold mb-0 ml-4"},[t._v("\n            "+t._s(t._f("money")(t.quote.pricing.total_amount-t.quote.pricing.deposit_amount))+"\n          ")])])])],1)],1)],1)}),[],!1,null,"706ecf8a",null);e.default=component.exports}}]);