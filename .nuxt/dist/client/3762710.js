(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{389:function(t,e,o){"use strict";o.r(e);var c={inject:["quote"],computed:{name:function(){var t=this.quote.customer_name.split(" ");return{first:t[0],last:t[1]}},created_date:function(){return new Date(this.quote.quote_create_date).toLocaleDateString()}}},n=o(80),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-5 bg-green-400"},[e("b-container",{staticClass:"pb-5"},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h1 font-weight-bold"},[t._v("Job Reference Number")]),t._v(" "),e("p",{staticClass:"h1 font-weight-bold"},[t._v(t._s(t.quote.id))])]),t._v(" "),e("b-col",{staticClass:"text-left mt-5 mt-md-0",attrs:{cols:"12",md:"6"}},[e("p",{staticClass:"h3 font-weight-bold mb-4"},[t._v("Customer info")]),t._v(" "),e("div",{staticClass:"mb-4"},[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Name")]),t._v(" "),e("p",{staticClass:"h5"},[t._v(t._s(t.quote.customer_name))])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("Phone")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{href:"tel:+".concat(t.quote.customer_phone)}},[t._v(t._s(t.quote.customer_phone))])])]),t._v(" "),e("div",[e("p",{staticClass:"h5 font-weight-bold"},[t._v("address")]),t._v(" "),e("p",{staticClass:"h5"},[e("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(t.quote.site_address)}},[t._v(t._s(t._f("emptyDash")(t.quote.site_address)))])])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);