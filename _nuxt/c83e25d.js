(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{751:function(t,n,e){"use strict";e.r(n);var o={props:{institution:{type:Object,required:!0}},data:function(){return{result:{},mapOptions:{closePopupOnClick:!1,doubleClickZoom:"center",scrollWheelZoom:!1,gestureHandling:!0},mapIcons:{iconRetinaUrl:"/marker-retina.png",iconUrl:"/marker.png",shadowUrl:"/marker-shadow.png"},marker:[0,0],center:[0,0],zoom:12}},fetchOnServer:!1,computed:{dynamicSize:function(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor:function(){return[this.iconSize/2,1.15*this.iconSize]}},mounted:function(){this.marker=[this.institution.Latitude,this.institution.Longitude],this.center=[this.institution.Latitude,this.institution.Longitude]}},r=e(28),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("client-only",[n("LeafletMap",{staticClass:"rounded-xl",staticStyle:{"max-height":"100%","min-height":"197px"},attrs:{zoom:t.zoom,center:t.center,"gesture-handling":"",options:t.mapOptions}},[n("TileLayer",{attrs:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}),t._v(" "),n("MapMarker",{attrs:{"lat-lng":t.marker}},[n("MapIcon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":t.mapIcons.iconUrl,"icon-retina-url":t.mapIcons.iconRetinaUrl,"shadow-url":t.mapIcons.shadowUrl}}),t._v(" "),n("MapTooltip",[t._v("Lokasi saya")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);