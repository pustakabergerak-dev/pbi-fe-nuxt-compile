(window.webpackJsonp=window.webpackJsonp||[]).push([[123,58],{681:function(t,e,n){"use strict";var o=n(2);e.a=o.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},700:function(t,e,n){var content=n(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("d60dc2aa",content,!0,{sourceMap:!1})},701:function(t,e,n){var o=n(17)((function(i){return i[1]}));o.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;padding:0 16px;top:0}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{bottom:100%;flex-direction:column-reverse}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),o.locals={},t.exports=o},709:function(t,e,n){"use strict";n.r(e);var o=n(108),d=n(141),l=n(4),r=(n(48),n(143),n(85),n(45),n(700),n(68)),v=n(121),c=n(681),f=n(144),_=n(9),m=Object(_.a)(v.a,r.a,c.a).extend({name:"v-speed-dial",directives:{ClickOutside:f.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(l.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(l.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(o++,t("div",{style:{transitionDelay:.05*o+"s"},key:i},[b]))}))}var d=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,d])}}),h=n(641),x={data:function(){return{fab:!1}}},k=n(28),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e(m,{attrs:{right:"",fixed:"",bottom:"",direction:"top",transition:"slide-y-reverse"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(o.a,{attrs:{dark:"",color:"light-green darken-3",fab:""}},[t.fab?e(d.a,[t._v(" mdi-close ")]):e(d.a,[t._v(" mdi-plus ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),e(h.a,{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[e(o.a,t._g(t._b({attrs:{fab:"",small:"",to:"/gerakanku/komik/buat"}},"v-btn",r,!1),l),[e(d.a,[t._v("mdi-image-multiple")])],1)]}}])},[t._v(" "),e("span",[t._v("Buat Komik")])]),t._v(" "),e(h.a,{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[e(o.a,t._g(t._b({attrs:{fab:"",small:"",to:"/gerakanku/tulisan/buat"}},"v-btn",r,!1),l),[e(d.a,[t._v("mdi-newspaper-variant")])],1)]}}])},[t._v(" "),e("span",[t._v("Buat Artikel")])])],1)}),[],!1,null,null,null);e.default=component.exports},918:function(t,e,n){"use strict";n.r(e);var o=n(420),d=n(419),l={layout:"dashboard",middleware:["auth"],head:function(){return{title:"Komikku - pustakabergerak.id"}}},r=n(28),component=Object(r.a)(l,(function(){var t=this._self._c;return t(d.a,[t(o.a,{attrs:{cols:"12"}},[t("ActionComicTab")],1),this._v(" "),t("BaseSpeedDial")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActionComicTab:n(898).default,BaseSpeedDial:n(709).default})}}]);