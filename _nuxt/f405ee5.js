(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{745:function(t,e,r){"use strict";r.r(e);var n=r(108),l=r(130),o=r(101),c=r(294),d=r(134),v=r(141),h=r(293),f=r(200),k=r(47),w=(r(142),r(29),r(60),{props:{article:{type:Object,default:function(){return{}}}},data:function(){return{showFab:!0,lastScrollPosition:0,dialog:!1,shareLink:"https://pustakabergerak.id",isCopied:!1,saweria:{isDisable:!1,link:"https://saweria.co/"+this.article.Saweria},isLiked:!1,counter:0}},fetch:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$auth.loggedIn){e.next=5;break}return e.next=3,t.$axios.$get("/api/v1/article/checkliked",{params:{id:t.article.ArticleId}});case 3:r=e.sent,t.isLiked=!!r.result.data;case 5:t.counter=isNaN(t.article.Liked)?0:Number(t.article.Liked);case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){window.addEventListener("scroll",this.onScroll),this.shareLink+="/artikel/".concat(this.article.UrlSlug),Boolean(this.article.Saweria)||(this.saweria.isDisable=!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;t<0||Math.abs(t-this.lastScrollPosition)<60||(this.showFab=t<this.lastScrollPosition,this.lastScrollPosition=t)},handlerCopy:function(){var t=this;navigator.clipboard.writeText(this.shareLink),this.isCopied=!0,setTimeout((function(){t.isCopied=!1}),1e3)},like:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/api/v1/article/postlike",{id:t.article.ArticleId});case 3:(r=e.sent).status?(t.$toast.success("Anda menyukai artikel ini"),t.isLiked=!!r.result.data,t.counter=r.result.data?t.counter+1:t.counter):t.$toast.error(r.error),e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(0),401!==e.t0.response.status){e.next=14;break}return t.$toast.error(e.t0.response.statusText),e.abrupt("return",t.$router.push("/auth/login"));case 14:t.$toast.error(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),m=r(28),component=Object(m.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFab,expression:"showFab"}],staticClass:"tw-fixed tw-bottom-16 tw-left-1/2 -tw-translate-x-1/2 tw-rounded-full tw-z-10 white"},[e("div",{staticClass:"d-flex elevation-4 tw-rounded-full",attrs:{rounded:""}},[e(n.a,{staticClass:"tw-rounded-l-full",attrs:{elevation:"0"},on:{click:function(e){return t.like()}}},[e(v.a,{attrs:{left:""}},[t._v("$vuetify.icons.LeafDark")]),t._v(" "),e("span",[t._v(t._s(t._f("byteNumeric")(t.counter)))])],1),t._v(" "),e(n.a,{attrs:{elevation:"0",disabled:t.saweria.isDisable,href:t.saweria.Link,target:"_blank"}},[e(v.a,{attrs:{left:""}},[t._v("mdi-cash-fast")]),t._v(" "),e("span",[t._v("Sawer")])],1),t._v(" "),e(n.a,{staticClass:"tw-rounded-r-full",attrs:{elevation:"0"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[e(v.a,{attrs:{left:""}},[t._v("mdi-share")]),t._v(" "),e("span",[t._v("share")])],1)],1)])]),t._v(" "),e(c.a,{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(l.a,[e(o.d,{staticClass:"text-h5"},[t._v(" Bagikan tulisan ini ")]),t._v(" "),e(o.c,{staticClass:"mt-6"},[e("div",{staticClass:"d-flex justify-space-between"},[e(n.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"#4267B2",href:t.socialMediaLink("facebook",{title:t.article.Title,url:t.article.UrlSlug,id:t.article.ArticleId}),target:"_blank"}},[e(v.a,{attrs:{dark:""}},[t._v(" mdi-facebook ")])],1),e(n.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"#1DA1F2",href:t.socialMediaLink("twitter",{title:t.article.Title,url:t.article.UrlSlug,id:t.article.ArticleId}),target:"_blank"}},[e(v.a,{attrs:{dark:""}},[t._v(" mdi-twitter ")])],1),e(n.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"#25D366",href:t.socialMediaLink("whatsapp",{title:t.article.Title,url:t.article.UrlSlug,id:t.article.ArticleId}),target:"_blank"}},[e(v.a,{attrs:{dark:""}},[t._v(" mdi-whatsapp ")])],1)],1),t._v(" "),e("div",[e("p",{staticClass:"text-center my-4"},[t._v("Atau")]),t._v(" "),e(f.a,{attrs:{type:"text",label:"Salin link ini",readonly:"",value:t.shareLink,outlined:"","append-icon":"mdi-content-copy"},on:{"click:append":t.handlerCopy}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isCopied,expression:"isCopied"}],staticClass:"mt-n8 light-green--text text--darken-3 caption"},[t._v("\n            Copied!\n          ")])],1)]),t._v(" "),e(o.a,[e(h.a),t._v(" "),e(n.a,{attrs:{color:"light-green darken-3",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Tutup\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);