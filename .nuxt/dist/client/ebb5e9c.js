(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{393:function(t,n,e){"use strict";e.r(n);e(42),e(14),e(84),e(8),e(12);var l={components:{BIcon:e(69).a},data:function(){return{fields:[{key:"name",tdClass:"w-75 pl-0",thClass:"pl-0"},{key:"quantity",tdClass:"text-right",thClass:"text-right"}],items:[{name:"H4 timber containment",quantity:2,description:"Install timber containment edging using 100x25 RS H4 timber.",_showDetails:!1},{name:"H4 timber containment",quantity:2,description:"Install timber containment edging using 100x25 RS H4 timber.",_showDetails:!1},{name:"H4 timber containment",quantity:2,description:"Install timber containment edging using 100x25 RS H4 timber.",_showDetails:!1}]}},created:function(){this.toggleCollapseAll()},methods:{toggleCollapse:function(t){t._showDetails=!t._showDetails},toggleCollapseAll:function(){var t=this;this.expandAll=!this.expandAll,this.items.forEach((function(n){n._showDetails=t.expandAll}))}}},o=e(92),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("b-container",{staticClass:"pt-5 pb-4"},[n("p",{staticClass:"h3 font-weight-bold"},[t._v("Products")]),t._v(" "),n("b-table",{staticClass:"mt-4",attrs:{borderless:"",responsive:"",items:t.items,fields:t.fields,"details-td-class":"d-md-none pt-0"},on:{"row-clicked":t.toggleCollapse},scopedSlots:t._u([{key:"head(name)",fn:function(){return[t._v("\n      Name\n      "),n("b-btn",{staticClass:"text-uppercase font-weight-bold ml-4 d-none d-md-inline-block",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.toggleCollapseAll}},[t._v("\n        "+t._s(t.allColsExpanded||t.expandAll?"Collapse All":"Expand All")+"\n        "),n("b-icon",{staticClass:"font-weight-bold ml-2",attrs:{icon:t.allColsExpanded||t.expandAll?"chevron-up":"chevron-down"}})],1)]},proxy:!0},{key:"cell(name)",fn:function(e){return[n("div",{staticClass:"d-flex align-items-start cursor-pointer"},[n("p",{staticClass:"h5 mb-0 font-weight-bold d-inline-block"},[t._v("\n          "+t._s(e.item.name)+"\n        ")]),t._v(" "),n("b-icon",{staticClass:"text-dark ml-4",attrs:{icon:e.detailsShowing?"chevron-up":"chevron-down"}})],1),t._v(" "),e.item._showDetails?n("p",{staticClass:"h5 mt-2 d-none d-md-block"},[t._v("\n        "+t._s(e.item.description)+"\n      ")]):t._e()]}},{key:"cell(quantity)",fn:function(e){return[n("p",{staticClass:"h5"},[t._v(t._s(e.item.quantity)+" M")])]}},{key:"row-details",fn:function(e){return[n("p",{staticClass:"h5"},[t._v("\n        "+t._s(e.item.description)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);n.default=component.exports}}]);