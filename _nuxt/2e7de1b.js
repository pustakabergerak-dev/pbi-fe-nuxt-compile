(window.webpackJsonp=window.webpackJsonp||[]).push([[46,3,7,9,10,11,15,18,19,49,72,148],{668:function(e,t,l){"use strict";var r=null;var o=null;function n(e,t){void 0===t&&(t={});var l=document.createElement(e);return Object.keys(t).forEach((function(e){l[e]=t[e]})),l}function d(e,t,l){return(window.getComputedStyle(e,l||null)||{display:"none"})[t]}function _(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if("none"===d(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var v='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',h=0,style=null;function c(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=m.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var l=e.offsetWidth,r=e.offsetHeight,o=new ResizeObserver((function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==l||e.offsetHeight!==r))&&f(e)})),c=_(e),y=c.detached,w=c.rendered;e.__resize_observer_triggered__=!1===y&&!1===w,e.__resize_observer__=o,o.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){f(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(h||(style=function(e){var style=document.createElement("style");return style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}(v)),function(e){var t=d(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};var l=n("div",{className:"resize-triggers"}),r=n("div",{className:"resize-expand-trigger"}),o=n("div"),_=n("div",{className:"resize-contract-trigger"});r.appendChild(o),l.appendChild(r),l.appendChild(_),e.appendChild(l),e.__resize_triggers__={triggers:l,expand:r,expandChild:o,contract:_},x(e),e.addEventListener("scroll",k,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=_(e).rendered,window.MutationObserver){var z=new MutationObserver(e.__resize_mutation_handler__);z.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=z}e.__resize_listeners__.push(t),h++}function m(){var e=_(this),t=e.rendered,l=e.detached;t!==this.__resize_rendered__&&(!l&&this.__resize_triggers__&&(x(this),this.addEventListener("scroll",k,!0)),this.__resize_rendered__=t,f(this))}function k(){var e,t,l=this;x(this),this.__resize_raf__&&(e=this.__resize_raf__,o||(o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),o(e)),this.__resize_raf__=(t=function(){var e,t,r,o,n,d,_=(t=(e=l).__resize_last__,r=t.width,o=t.height,n=e.offsetWidth,d=e.offsetHeight,n!==r||d!==o?{width:n,height:d}:null);_&&(l.__resize_last__=_,f(l))},r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(t))}function f(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((function(t){t.call(e,e)}))}function x(e){var t=e.__resize_triggers__,l=t.expand,r=t.expandChild,o=t.contract,n=o.scrollWidth,d=o.scrollHeight,_=l.offsetWidth,v=l.offsetHeight,h=l.scrollWidth,c=l.scrollHeight;o.scrollLeft=n,o.scrollTop=d,r.style.width=_+1+"px",r.style.height=v+1+"px",l.scrollLeft=h,l.scrollTop=c}var y={name:"vue-clamp",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},location:{type:String,default:"end",validator:function(e){return-1!==["start","middle","end"].indexOf(e)}},expanded:Boolean},data:function(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText:function(){if("start"===this.location)return this.ellipsis+(this.text.slice(-this.offset)||"").trim();if("middle"===this.location){var e=Math.floor(this.offset/2);return(this.text.slice(0,e)||"").trim()+this.ellipsis+(this.text.slice(-e)||"").trim()}return(this.text.slice(0,this.offset)||"").trim()+this.ellipsis},isClamped:function(){return!!this.text&&this.offset!==this.text.length},realText:function(){return this.isClamped?this.clampedText:this.text},realMaxHeight:function(){if(this.localExpanded)return null;var e=this.maxHeight;return e?"number"==typeof e?e+"px":e:null}},watch:{expanded:function(e){this.localExpanded=e},localExpanded:function(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)},isClamped:{handler:function(e){var t=this;this.$nextTick((function(){return t.$emit("clampchange",e)}))},immediate:!0}},mounted:function(){this.init(),this.$watch((function(e){return[e.maxLines,e.maxHeight,e.ellipsis,e.isClamped,e.location].join()}),this.update),this.$watch((function(e){return[e.tag,e.text,e.autoresize].join()}),this.init)},updated:function(){this.text=this.getText(),this.applyChange()},beforeDestroy:function(){this.cleanUp()},methods:{init:function(){var i=this;this.$slots.default&&(this.offset=this.text.length,this.cleanUp(),this.autoresize&&(c(this.$el,this.update),this.unregisterResizeCallback=function(){!function(e,t){var l=e.__resize_listeners__;if(l){if(t&&l.splice(l.indexOf(t),1),!l.length||!t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",k),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--h&&style&&style.parentNode.removeChild(style)}}(i.$el,i.update)}),this.update())},update:function(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand:function(){this.localExpanded=!0},collapse:function(){this.localExpanded=!1},toggle:function(){this.localExpanded=!this.localExpanded},getLines:function(){return Object.keys(Array.prototype.slice.call(this.$refs.content.getClientRects()).reduce((function(e,t){var i=t.top+"/"+t.bottom;return e[i]||(e[i]=!0),e}),{})).length},isOverflow:function(){return!!((this.maxLines||this.maxHeight)&&(this.maxLines&&this.getLines()>this.maxLines||this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight))},getText:function(){var e=(this.$slots.default||[]).filter((function(e){return!e.tag&&!e.isComment}))[0];return e?e.text.trim():""},moveEdge:function(e){this.clampAt(this.offset+e)},clampAt:function(e){this.offset=e,this.applyChange()},applyChange:function(){this.$refs.text.textContent=this.realText},stepToFit:function(){this.fill(),this.clamp()},fill:function(){for(;(!this.isOverflow()||this.getLines()<2)&&this.offset<this.text.length;)this.moveEdge(1)},clamp:function(){for(;this.isOverflow()&&this.getLines()>1&&this.offset>0;)this.moveEdge(-1)},search:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i=e[0];void 0===i&&(i=0);var s=e[1];if(void 0===s&&(s=this.offset),s-i<=3)this.stepToFit();else{var l=Math.floor((s+i)/2);this.clampAt(l),this.isOverflow()?this.search(i,l):this.search(l,s)}},cleanUp:function(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render:function(e){var t=[e("span",this.$isServer?{}:{ref:"text",attrs:{"aria-label":this.text.trim()}},this.$isServer?this.text:this.realText)],i={expand:this.expand,collapse:this.collapse,toggle:this.toggle,clamped:this.isClamped,expanded:this.localExpanded},s=this.$scopedSlots.before?this.$scopedSlots.before(i):this.$slots.before;s&&t.unshift.apply(t,Array.isArray(s)?s:[s]);var l=this.$scopedSlots.after?this.$scopedSlots.after(i):this.$slots.after;l&&t.push.apply(t,Array.isArray(l)?l:[l]);var a=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},a)}};t.a=y},670:function(e,t,l){var content=l(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(18).default)("37bc1ea0",content,!0,{sourceMap:!1})},671:function(e,t,l){var r=l(17)((function(i){return i[1]}));r.push([e.i,'.theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{animation:loading 1.5s infinite;content:"";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;margin:0 auto;padding:0 12px}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;height:40px;margin:4px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{border-radius:0;height:200px}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image:first-child,.v-skeleton-loader__image:last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@keyframes loading{to{transform:translateX(100%)}}',""]),r.locals={},e.exports=r},674:function(e,t,l){"use strict";l.r(t);var r=l(108),o=l(130),n=l(141),d=l(195),_=l(293),v=l(95),h=(l(48),{components:{VClamp:l(668).a},props:{featuredImage:{type:String,required:!0},slug:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,default:""},fullname:{type:String,required:!0},username:{type:String,required:!0},categoryName:{type:String,default:""},categorySlug:{type:String,required:!0},readCount:{type:String,required:!0},publishedAt:{type:String,required:!0},size:{type:String,default:"small",validator:function(e){return["small","medium","large"].includes(e)}},middle:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}},data:function(){return{imageWidth:"100px",imageHeight:"100px"}},mounted:function(){"small"===this.size?(this.imageWidth="100px",this.imageHeight="100px"):"medium"===this.size?(this.imageWidth="220px",this.imageHeight="220px"):(this.imageWidth="520px",this.imageHeight="250px")}}),c=l(28),component=Object(c.a)(h,(function(){var e=this,t=e._self._c;return e.isMobile&&"large"===e.size?t(o.a,{directives:[{def:v.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex flex-column pa-0 pointer",attrs:{elevation:"0",to:e.slug}},[t(d.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:e.featuredImage,height:"200px"}}),e._v(" "),t("div",{staticClass:"d-flex flex-column mt-4",class:{"flex-grow-1":!e.middle,"justify-center":e.middle}},[t("div",{staticClass:"d-flex align-center"},[e.fullname.length>0?[t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.username}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n            "+e._s(e.fullname)+"\n          ")])]),e._v(" "),t("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}})]:e._e(),e._v(" "),t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.categorySlug}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.categoryName)+"\n        ")])])],2),e._v(" "),t("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!e.middle}},[t("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===e.size,headline:"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v("\n          "+e._s(e.title)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"text--secondary",class:{"mt-2":e.content.length>0,caption:"small"===e.size,"text-boody-1":"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":3}},[e._v("\n          "+e._s(e.content)+"\n        ")])],1)]),e._v(" "),e.middle?e._e():t(_.a),e._v(" "),t("div",{staticClass:"d-flex mt-4"},[t(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[t(n.a,{attrs:{left:"",small:""}},[e._v("mdi-eye")]),e._v("\n        "+e._s(e.readCount)+"\n      ")],1),e._v(" "),t(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[t(n.a,{attrs:{left:"",small:""}},[e._v("mdi-clock")]),e._v("\n        "+e._s(e.publishedAt)+"\n      ")],1)],1)],1)],1):t(o.a,{directives:[{def:v.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex pa-0 pointer",attrs:{elevation:"0",to:e.slug}},[e.circle?t(d.a,{staticClass:"rounded-circle",attrs:{"lazy-src":"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"60px",width:"60px","max-height":"60px","max-width":"60px"}}):t(d.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:e.featuredImage,height:e.imageHeight,width:e.imageWidth,"max-height":e.imageHeight,"max-width":e.imageWidth}}),e._v(" "),t("div",{staticClass:"d-flex flex-column pl-4",class:{"flex-grow-1":!e.middle,"justify-center":e.middle}},[t("div",{staticClass:"d-flex align-center"},[e.fullname.length>0?t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.username}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.fullname)+"\n        ")])]):e._e(),e._v(" "),e.fullname.length>0&&e.categoryName.length>0?t("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}}):e._e(),e._v(" "),e.categoryName.length>0?t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.categorySlug}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.categoryName)+"\n        ")])]):e._e()],1),e._v(" "),t("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!e.middle}},[t("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===e.size,headline:"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v("\n          "+e._s(e.title)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"text--secondary",class:{"mt-2":e.content.length>0,caption:"small"===e.size,"text-boody-1":"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":3}},[e._v("\n          "+e._s(e.content)+"\n        ")])],1)]),e._v(" "),e.middle?e._e():t(_.a),e._v(" "),t("div",{staticClass:"d-flex",class:{"mt-2":e.content.length>0,"mt-4":e.middle}},[t(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[t(n.a,{attrs:{left:"",small:""}},[e._v("mdi-eye")]),e._v("\n        "+e._s(e.readCount)+"\n      ")],1),e._v(" "),t(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[t(n.a,{attrs:{left:"",small:""}},[e._v("mdi-clock")]),e._v("\n        "+e._s(e.publishedAt)+"\n      ")],1)],1)],1),e._v(" "),e._t("button-groups"),e._v(" "),e._t("menu")],2)}),[],!1,null,null,null);t.default=component.exports},676:function(e,t,l){"use strict";l(13),l(15),l(14),l(7),l(19),l(12),l(20);var r=l(33),o=l(4),n=(l(85),l(63),l(54),l(34),l(59),l(670),l(198)),d=l(112),_=l(27),v=l(9),h=l(0);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(v.a)(n.a,d.a,_.a).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:m({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return m(m({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return m({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(text,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(text," v-skeleton-loader__bone")},e)},genBones:function(e){var t=this,l=e.split("@"),o=Object(r.a)(l,2),n=o[0],d=o[1];return Array.from({length:d}).map((function(){return t.genStructure(n)}))},genStructure:function(e){var t=[];e=e||this.type||"";var l=this.rootTypes[e]||"";if(e===l);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);l.indexOf(",")>-1?t=this.mapBones(l):l.indexOf("@")>-1?t=this.genBones(l):l&&t.push(this.genStructure(l))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(h.o)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},717:function(e,t,l){var content=l(762);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(18).default)("0de43ac4",content,!0,{sourceMap:!1})},761:function(e,t,l){"use strict";l(717)},762:function(e,t,l){var r=l(17)((function(i){return i[1]}));r.push([e.i,".custom-overlay .v-overlay__content{height:100%!important}",""]),r.locals={},e.exports=r},807:function(e,t,l){"use strict";l.r(t);var r=l(281),o=l(108),n=l(130),d=l(420),_=l(141),v=l(195),h=l(278),c=l(419),m=l(676),k=l(293),f=l(95),x=(l(56),l(47)),y=(l(142),{components:{VClamp:l(668).a},data:function(){return{result:{data:[],count:0}}},fetch:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/v1/article/top");case 2:l=t.sent,e.result=l.result;case 4:case"end":return t.stop()}}),t)})))()},fetchOnServer:!1}),w=(l(761),l(28)),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return e.$fetchState.pending||e.$fetchState.error?t(c.a,[t(d.a,{attrs:{cols:"6"}},[t(m.a,{attrs:{type:"image"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(m.a,{attrs:{type:"list-item-avatar-two-line@3"}})],1)],1):t(c.a,[t(d.a,{attrs:{cols:"6"}},[t(n.a,{directives:[{def:f.a,name:"ripple",rawName:"v-ripple"}],staticClass:"pointer",attrs:{rounded:"xl",to:"/artikel/".concat(e.result.data[0].UrlSlug),nuxt:""}},[t(v.a,{staticClass:"white--text align-end rounded-xl",attrs:{height:"340px",src:e.articleImage(e.result.data[0].Cover),"lazy-src":"https://picsum.photos/id/11/10/6"}},[t(h.a,{staticClass:"custom-overlay",attrs:{absolute:"",color:"black"}},[t(k.a),e._v(" "),t("div",{staticClass:"d-flex flex-column justify-end fill-height pa-6"},[t(o.a,{staticClass:"align-self-start ml-n4 light-green--text",attrs:{text:""}},[t("span",{staticClass:"text-capitalize"},[e._v(e._s(e.result.data[0].Category))])]),e._v(" "),t("div",{staticClass:"white--text display-1"},[t("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v(e._s(e.result.data[0].Title))])],1),e._v(" "),t("div",{staticClass:"d-flex align-center mt-8"},[t(o.a,{staticClass:"text-capitalize ml-n4",attrs:{elevation:"0",text:""}},[t(r.a,{staticClass:"mr-4",staticStyle:{border:"1px solid white"},attrs:{size:"36px"}},[t("img",{attrs:{alt:"Avatar",src:e.userImage(e.result.data[0].AuthorProfile),"lazy-src":"https://picsum.photos/id/11/10/6"}})]),e._v("\n                "+e._s(e.result.data[0].Author)+"\n              ")],1),e._v(" "),t("div",{staticStyle:{"border-left":"1px solid #fff",height:"10px"}}),e._v(" "),t("div",{staticClass:"ml-4"},[t(_.a,{attrs:{"x-small":""}},[e._v("mdi-eye")]),e._v(" "),t("span",{staticClass:"caption"},[e._v(e._s(e._f("byteNumeric")(e.result.data[0].Reader)))]),e._v(" "),t(_.a,{staticClass:"ml-2",attrs:{"x-small":""}},[e._v("mdi-clock")]),e._v(" "),t("span",{staticClass:"caption"},[e._v(e._s(e._f("relativeDate")(e.result.data[0].PublishDate)))])],1)],1)],1)],1)],1)],1)],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t("div",{staticClass:"tw-grid tw-grid-cols-1 tw-gap-4"},e._l(e.result.data.slice(1,4),(function(l,r){return t("BaseArticleCardItem",{key:r,attrs:{"featured-image":e.articleImage(l.Cover),title:l.Title,slug:"/artikel/".concat(l.UrlSlug),content:"",fullname:l.Author,username:l.AuthorSlug,"category-name":l.Category,"category-slug":"","read-count":e._f("byteNumeric")(parseInt(l.Reader)),"published-at":e._f("relativeDate")(l.PublishDate)}})})),1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseArticleCardItem:l(674).default})}}]);