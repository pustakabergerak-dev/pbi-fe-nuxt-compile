(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{821:function(t,e,n){"use strict";n.r(e);var r=n(130),o=n(141),l=n(676),c=n(642),d=n(643),m=n(644),f=n(288),v=n(47),w=(n(142),{data:function(){return{tab:0,items:[{text:"Simpul",icon:"mdi-store-edit"},{text:"Relawan",icon:"mdi-account-group"}],result:{},isReady:!1}},fetch:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/v1/institution/detail",{params:{slug:t.$auth.user.InstitutionSlug}});case 2:n=e.sent,t.result=n.result,t.isReady=!0;case 5:case"end":return e.stop()}}),e)})))()}}),x=n(28),component=Object(x.a)(w,(function(){var t=this,e=t._self._c;return t.isReady?e("div",[e(r.a,{staticClass:"pa-4",attrs:{outlined:"",rounded:"xl"}},[e(m.a,{attrs:{"background-color":"transparent",color:"light-green darken-2",grow:"","show-arrows":"","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(c.a,{key:n.text},[t._v("\n        "+t._s(n.text)+"\n        "),e(o.a,[t._v(t._s(n.icon))])],1)})),1),t._v(" "),e(f.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(d.a,{key:n.text},[e("ActionSimpulTabContent",{staticClass:"mt-6",attrs:{tab:t.tab,institution:t.result.data}})],1)})),1)],1)],1):e("div",[e(l.a,{staticClass:"mb-2 d-none d-md-block",attrs:{type:"sentences"}}),t._v(" "),e(l.a,{staticClass:"pa-2",attrs:{type:"list-item-avatar-two-line@3"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActionSimpulTabContent:n(822).default})}}]);