(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8,9,10],{381:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("6a3bf757",content,!0,{sourceMap:!1})},382:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(95).default)("9739a00e",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n(381)},384:function(t,e,n){var o=n(94)((function(i){return i[1]}));o.push([t.i,"@media(min-width:768px){[data-v-a64aca16] .table tbody tr:first-child{display:none}}.my-table td[data-v-a64aca16]{white-space:normal;word-break:break-word}",""]),o.locals={},t.exports=o},385:function(t,e,n){"use strict";n(382)},386:function(t,e,n){var o=n(94)((function(i){return i[1]}));o.push([t.i,".card[data-v-0b35c8db]{margin-left:-28px;margin-top:32px}ol[data-v-0b35c8db]{margin-left:-15px}ol li[data-v-0b35c8db]{margin-bottom:60px}ol li ol li[data-v-0b35c8db]:not(:last-child){margin-bottom:24px}ol li ol li[data-v-0b35c8db]:last-child{margin-bottom:0}ol li ol li[data-v-0b35c8db]{font-weight:700}",""]),o.locals={},t.exports=o},394:function(t,e,n){"use strict";n.r(e);n(43);var o={inject:["quote"],computed:{name:function(){var t=this.quote.customer_name.split(" ");return{first:t[0],last:t[1]}},created_date:function(){return new Date(this.quote.quote_create_date).toLocaleDateString()}}},l=n(80),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-5 bg-green-400"},[e("b-container",[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h3 md-h2 font-weight-bold mb-4"},[t._v("\n          "+t._s(t.name.first)+"’s Eco Lawn quote\n        ")]),t._v(" "),e("p",{staticClass:"h4 md-h3 font-weight-bold mb-4"},[t._v("Customer info")]),t._v(" "),e("div",{staticClass:"d-flex align-items-start mb-3",staticStyle:{gap:"50px"}},[e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("First name")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t.name.first))])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Last name")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t.name.last))])])]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Phone")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{href:"tel:+".concat(t.quote.customer_phone)}},[t._v(t._s(t.quote.customer_phone))])])]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Company")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t._f("emptyDash")(t.quote.customer_organization)))])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Site address")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(t.quote.site_address)}},[t._v(t._s(t._f("emptyDash")(t.quote.site_address)))])])])]),t._v(" "),e("b-col",{staticClass:"text-md-right d-flex flex-column justify-content-between mt-5 mt-md-0",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"mb-md-5 mb-3"},[e("p",{staticClass:"h4 md-h3 font-weight-bold mb-2"},[t._v("\n            Sales ref # "+t._s(t.quote.pipedrive_deal_id)+"\n          ")]),t._v(" "),e("p",{staticClass:"h4 md-h3 font-weight-bold"},[t._v("Quote ref # "+t._s(t.quote.id))])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);n(43),n(14),n(86);var o=n(3),l=n(51);n(28),n(8),n(34),n(12),n(30),n(15),n(10),n(16),n(17);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={inject:["quote"],components:{BIcon:n(70).a},data:function(){return{fields:[{key:"name",label:"Name",tdClass:"w-65"},{key:"sub_total",label:"price"},{key:"quantity",label:"quantity",thClass:"text-center",tdClass:"text-center"},{key:"total_amount",label:"total",tdClass:"text-left"}],items:[{_showDetails:!1}].concat(Object(l.a)(this.formatItems())),expandAll:!1}},computed:{allColsExpanded:function(){return this.items.slice(1).every((function(t){return t._showDetails}))}},watch:{allColsExpanded:function(t){this.expandAll=t}},methods:{toggleCollapse:function(t){t._showDetails=!t._showDetails},toggleCollapseAll:function(){var t=this;this.expandAll=!this.expandAll,this.items.slice(1).forEach((function(e){e._showDetails=t.expandAll}))},formatItems:function(){return this.quote.items.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({_showDetails:!1},t)}))}}},d=c,m=(n(383),n(80)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"py-5",staticStyle:{"max-width":"100%"}},[e("p",{staticClass:"h3 font-weight-bold"},[t._v("Cost breakdown")]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"mt-4 my-table",attrs:{borderless:"",items:t.items,fields:t.fields,"details-td-class":"d-md-none pt-0","thead-class":"text-left","td-class":"text-left"},on:{"row-clicked":t.toggleCollapse},scopedSlots:t._u([{key:"head(name)",fn:function(){return[t._v("\n      Name\n      "),e("b-btn",{staticClass:"text-uppercase font-weight-bold ml-4 d-none d-md-inline-block",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.toggleCollapseAll}},[t._v("\n        "+t._s(t.allColsExpanded||t.expandAll?"Collapse All":"Expand All")+"\n        "),e("b-icon",{staticClass:"font-weight-bold ml-2",attrs:{icon:t.allColsExpanded||t.expandAll?"chevron-up":"chevron-down"}})],1)]},proxy:!0},{key:"cell(name)",fn:function(n){return[n.item.name?e("div",[e("div",{staticClass:"d-flex align-items-start cursor-pointer"},[e("p",{staticClass:"h5 mb-0 font-weight-bold d-inline-block"},[t._v("\n            "+t._s(n.item.name)+"\n          ")]),t._v(" "),e("b-icon",{staticClass:"text-dark ml-3",attrs:{icon:n.detailsShowing?"chevron-up":"chevron-down"}})],1),t._v(" "),n.item._showDetails?e("div",{staticClass:"h5 mt-2 d-none d-md-block"},[t._v("\n\n          "+t._s(n.item.description)+"\n          "),e("br")]):t._e()]):e("b-btn",{staticClass:"text-uppercase font-weight-bold text-nowrap",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.toggleCollapseAll}},[t._v("\n        "+t._s(t.allColsExpanded||t.expandAll?"Collapse All":"Expand All")+"\n        "),e("b-icon",{staticClass:"font-weight-bold ml-2",attrs:{icon:t.allColsExpanded||t.expandAll?"chevron-up":"chevron-down"}})],1)]}},{key:"cell(sub_total)",fn:function(n){return[n.item.sub_total?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(t._f("money")(n.item.sub_total))+"\n      ")]):t._e()]}},{key:"cell(quantity)",fn:function(n){return[n.item.quantity?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(n.item.quantity)+" "+t._s(n.item.unit)+"\n      ")]):t._e()]}},{key:"cell(total_amount)",fn:function(n){return[n.item.total_amount?e("p",{staticClass:"font-weight-bold h5"},[t._v("\n        "+t._s(t._f("money")(n.item.total_amount))+"\n      ")]):t._e()]}},{key:"row-details",fn:function(n){return[n.item.description?e("p",{staticClass:"h5"},[t._v("\n        "+t._s(n.item.description)+"\n      ")]):t._e()]}}])}),t._v(" "),e("b-card",{staticClass:"rounded-0 mt-4 text-white py-0 px-0 border-0",staticStyle:{"min-width":"440px"},attrs:{"bg-variant":"dark","border-variant":"dark","body-class":"p-4"}},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h3 font-weight-bold"},[t._v("Deposit payable")]),t._v(" "),e("p",{staticClass:"h5 line-height-lg mb-0"},[t._v("\n          In order to accept this quote you will be required to pay a\n          "+t._s(t.quote.pricing.deposit_percentage)+"% deposit. Clearance of your\n          "+t._s(t.quote.pricing.deposit_percentage)+"% deposit payment will confirm\n          your job booking and quote acceptance.\n        ")])]),t._v(" "),e("b-col",{staticClass:"text-md-right mt-5 mt-md-0",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"d-flex align-items-center justify-content-between justify-content-md-end"},[e("p",{staticClass:"h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"},[t._v("\n            Deposit "+t._s(t.quote.pricing.deposit_percentage)+"% of total amount\n          ")]),t._v(" "),e("p",{staticClass:"font-size-24 font-weight-bold mb-0 ml-4"},[t._v("\n            "+t._s(t._f("money")(t.quote.pricing.deposit_amount))+"\n          ")])]),t._v(" "),e("p",{staticClass:"h6 mt-2 w-50 w-md-auto"},[t._v("\n          Deposit due in xx days for work to start\n        ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between justify-content-md-end mt-4"},[e("p",{staticClass:"h5 md-h4 mb-0 font-weight-bold font-weight-md-medium"},[t._v("\n            Remainder due on completion\n          ")]),t._v(" "),e("p",{staticClass:"font-size-24 font-weight-bold mb-0 ml-4"},[t._v("\n            "+t._s(t._f("money")(t.quote.pricing.total_amount-t.quote.pricing.deposit_amount))+"\n          ")])])])],1)],1)],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12"}})],1)],1)}),[],!1,null,"a64aca16",null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);var o={},l=(n(385),n(80)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("b-container",{staticStyle:{"max-width":"100%","min-width":"450px"}},[e("p",{staticClass:"h3 font-weight-bold mb-5"},[t._v("Next steps")]),t._v(" "),e("ol",{staticClass:"font-weight-bold h4"},[e("li",[e("p",{staticClass:"mb-0"},[t._v("Before quote acceptance")]),t._v(" "),e("b-card",{staticClass:"h5 rounded-sm py-4",attrs:{"bg-variant":"gray-400","border-variant":"gray-400"}},[e("b-card-text",{attrs:{"text-tag":"div"}},[e("ol",[e("li",[t._v("Current lead time is 7-9 weeks")]),t._v(" "),e("li",[t._v("Pebbles to be left onsite as agreed with client")]),t._v(" "),e("li",[t._v("\n              Pavers to be stacked onsite or cut around as agreed with client\n              at $25+gst per paver quantity is to be agreed prior to install\n            ")])])])],1)],1),t._v(" "),e("li",[e("p",{staticClass:"mb-0"},[t._v("Accepting your quote")]),t._v(" "),e("b-card",{staticClass:"h5 rounded-sm py-4",attrs:{"bg-variant":"gray-400","border-variant":"gray-400"}},[e("b-card-text",{attrs:{"text-tag":"div"}},[e("ol",[e("li",[t._v("Click the PAY DEPOSIT button to accept your quote")]),t._v(" "),e("li",[t._v("\n              You'll have the option to pay by Bank Deposit or Credit Card\n            ")]),t._v(" "),e("li",[t._v("Accounts will clear your payment")]),t._v(" "),e("li",[t._v("\n              Operations will then schedule you into the next block of\n              installs\n            ")]),t._v(" "),e("li",[t._v("\n              You'll be emailed the with the date your work will start\n              "),e("span",[t._v("(Please note date may be subject to change, based on other\n                booked jobs and weather conditions)")])]),t._v(" "),e("li",[t._v("\n              The above usually takes 2-5 business days to arrange and plan\n            ")]),t._v(" "),e("li",[t._v("\n              If required, a final inspection usually occurs within 14 days of\n              job start\n            ")])])])],1)],1),t._v(" "),e("li",[e("p",{staticClass:"mb-0"},[t._v("After quote acceptancece")]),t._v(" "),e("b-card",{staticClass:"h5 rounded-sm py-4",attrs:{"bg-variant":"gray-400","border-variant":"gray-400"}},[e("b-card-text",{attrs:{"text-tag":"div"}},[e("ol",[e("li",[t._v("\n              Clear the work area/s of all objects including any rubbish,\n              toys, pot plants, furniture etc.\n            ")]),t._v(" "),e("li",[t._v("\n              Please also ensure that the access path between our parking area\n              and the work area is clear of furniture and any other objects.\n            ")]),t._v(" "),e("li",[t._v("\n              Eco Lawn requires full access to the driveway, walkways and\n              power.\n            ")])])])],1)],1)])])}),[],!1,null,"0b35c8db",null);e.default=component.exports},407:function(t,e,n){"use strict";n.r(e);var o=n(49),l=(n(96),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,data,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.post("https://api-staging.ecolawn.nz/oauth/token",{grant_type:"client_credentials",scope:"*",client_id:3,client_secret:"oYRKUskRYhAWwsA9Qz6Bv5VdZT6FfqaVYJYoP9v7"});case 3:return o=e.sent,data=o.data,l=data.access_token,e.next=8,n.get("quotes/e129d7ca-363c-11ed-9a2d-00163edf12f7",{params:{token:"63312f338ec63"},headers:{Authorization:"Bearer "+l}});case 8:return r=e.sent,e.abrupt("return",{quote:r.data});case 10:case"end":return e.stop()}}),e)})))()},provide:function(){return{quote:this.quote}}}),r=n(80),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("QuoteCustomerInfo"),t._v(" "),e("QuotePricing"),t._v(" "),e("QuoteCustomerNotes"),t._v(" "),e("QuoteTerms")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{QuoteCustomerInfo:n(394).default,QuotePricing:n(395).default,QuoteCustomerNotes:n(396).default,QuoteTerms:n(401).default})}}]);