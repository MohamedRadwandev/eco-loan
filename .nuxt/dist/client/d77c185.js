(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{394:function(t,e,o){"use strict";o.r(e);o(43);var n={inject:["quote"],computed:{name:function(){var t=this.quote.customer_name.split(" ");return{first:t[0],last:t[1]}},created_date:function(){return new Date(this.quote.quote_create_date).toLocaleDateString()}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-5 bg-green-400"},[e("b-container",[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h3 md-h2 font-weight-bold mb-4"},[t._v("\n          "+t._s(t.name.first)+"’s Eco Lawn quote\n        ")]),t._v(" "),e("p",{staticClass:"h4 md-h3 font-weight-bold mb-4"},[t._v("Customer info")]),t._v(" "),e("div",{staticClass:"d-flex align-items-start mb-3",staticStyle:{gap:"50px"}},[e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("First name")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t.name.first))])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Last name")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t.name.last))])])]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Phone")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{href:"tel:+".concat(t.quote.customer_phone)}},[t._v(t._s(t.quote.customer_phone))])])]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Company")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t._f("emptyDash")(t.quote.customer_organization)))])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Site address")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(t.quote.site_address)}},[t._v(t._s(t._f("emptyDash")(t.quote.site_address)))])])])]),t._v(" "),e("b-col",{staticClass:"text-md-right d-flex flex-column justify-content-between mt-5 mt-md-0",attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"mb-md-5 mb-3"},[e("p",{staticClass:"h4 md-h3 font-weight-bold mb-2"},[t._v("\n            Sales ref # "+t._s(t.quote.pipedrive_deal_id)+"\n          ")]),t._v(" "),e("p",{staticClass:"h4 md-h3 font-weight-bold"},[t._v("Quote ref # "+t._s(t.quote.id))])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);