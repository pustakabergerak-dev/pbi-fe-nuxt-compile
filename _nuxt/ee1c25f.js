(window.webpackJsonp=window.webpackJsonp||[]).push([[43,59],{672:function(t,e,l){"use strict";l.r(e);var r={props:{title:{type:String,required:!0},subtitle:{type:String,default:""},inline:{type:Boolean,default:!1},decoration:{type:Boolean,default:!1}}},n=l(28),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return t.inline?e("div",{staticClass:"d-flex align-center pa-4"},[e("div",{staticClass:"headline font-weight-bold ma-4 pl-4",class:{"title-border":t.decoration}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.subtitle.length>0?[e("div",{staticStyle:{"border-right":"1px solid #bdbdbd",height:"100px"}}),t._v(" "),e("div",{staticClass:"subtitle-1 grey--text text--darken-3 font-italic ma-4",staticStyle:{width:"60%"}},[t._v("\n      "+t._s(t.subtitle)+"\n    ")])]:t._e()],2):e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"headline font-weight-bold pl-4 my-4",class:{"title-border":t.decoration}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.subtitle.length>0?e("div",{staticClass:"subtitle-1 grey--text text--darken-3 font-italic mx-4"},[t._v("\n    Temukan gerakan literasi di sekitarmu, ikutlah bergerak bersama mereka.\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},674:function(t,e,l){"use strict";l.r(e);var r=l(108),n=l(130),d=l(141),c=l(195),o=l(293),m=l(95),h=(l(48),{components:{VClamp:l(668).a},props:{featuredImage:{type:String,required:!0},slug:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,default:""},fullname:{type:String,required:!0},username:{type:String,required:!0},categoryName:{type:String,default:""},categorySlug:{type:String,required:!0},readCount:{type:String,required:!0},publishedAt:{type:String,required:!0},size:{type:String,default:"small",validator:function(t){return["small","medium","large"].includes(t)}},middle:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}},data:function(){return{imageWidth:"100px",imageHeight:"100px"}},mounted:function(){"small"===this.size?(this.imageWidth="100px",this.imageHeight="100px"):"medium"===this.size?(this.imageWidth="220px",this.imageHeight="220px"):(this.imageWidth="520px",this.imageHeight="250px")}}),v=l(28),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return t.isMobile&&"large"===t.size?e(n.a,{directives:[{def:m.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex flex-column pa-0 pointer",attrs:{elevation:"0",to:t.slug}},[e(c.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:t.featuredImage,height:"200px"}}),t._v(" "),e("div",{staticClass:"d-flex flex-column mt-4",class:{"flex-grow-1":!t.middle,"justify-center":t.middle}},[e("div",{staticClass:"d-flex align-center"},[t.fullname.length>0?[e(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:t.username}},[e("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[t._v("\n            "+t._s(t.fullname)+"\n          ")])]),t._v(" "),e("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}})]:t._e(),t._v(" "),e(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:t.categorySlug}},[e("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[t._v("\n          "+t._s(t.categoryName)+"\n        ")])])],2),t._v(" "),e("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!t.middle}},[e("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===t.size,headline:"small"!==t.size}},[e("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"text--secondary",class:{"mt-2":t.content.length>0,caption:"small"===t.size,"text-boody-1":"small"!==t.size}},[e("v-clamp",{attrs:{autoresize:"","max-lines":3}},[t._v("\n          "+t._s(t.content)+"\n        ")])],1)]),t._v(" "),t.middle?t._e():e(o.a),t._v(" "),e("div",{staticClass:"d-flex mt-4"},[e(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[e(d.a,{attrs:{left:"",small:""}},[t._v("mdi-eye")]),t._v("\n        "+t._s(t.readCount)+"\n      ")],1),t._v(" "),e(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[e(d.a,{attrs:{left:"",small:""}},[t._v("mdi-clock")]),t._v("\n        "+t._s(t.publishedAt)+"\n      ")],1)],1)],1)],1):e(n.a,{directives:[{def:m.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex pa-0 pointer",attrs:{elevation:"0",to:t.slug}},[t.circle?e(c.a,{staticClass:"rounded-circle",attrs:{"lazy-src":"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"60px",width:"60px","max-height":"60px","max-width":"60px"}}):e(c.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:t.featuredImage,height:t.imageHeight,width:t.imageWidth,"max-height":t.imageHeight,"max-width":t.imageWidth}}),t._v(" "),e("div",{staticClass:"d-flex flex-column pl-4",class:{"flex-grow-1":!t.middle,"justify-center":t.middle}},[e("div",{staticClass:"d-flex align-center"},[t.fullname.length>0?e(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:t.username}},[e("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[t._v("\n          "+t._s(t.fullname)+"\n        ")])]):t._e(),t._v(" "),t.fullname.length>0&&t.categoryName.length>0?e("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}}):t._e(),t._v(" "),t.categoryName.length>0?e(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:t.categorySlug}},[e("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[t._v("\n          "+t._s(t.categoryName)+"\n        ")])]):t._e()],1),t._v(" "),e("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!t.middle}},[e("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===t.size,headline:"small"!==t.size}},[e("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v("\n          "+t._s(t.title)+"\n        ")])],1),t._v(" "),e("div",{staticClass:"text--secondary",class:{"mt-2":t.content.length>0,caption:"small"===t.size,"text-boody-1":"small"!==t.size}},[e("v-clamp",{attrs:{autoresize:"","max-lines":3}},[t._v("\n          "+t._s(t.content)+"\n        ")])],1)]),t._v(" "),t.middle?t._e():e(o.a),t._v(" "),e("div",{staticClass:"d-flex",class:{"mt-2":t.content.length>0,"mt-4":t.middle}},[e(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[e(d.a,{attrs:{left:"",small:""}},[t._v("mdi-eye")]),t._v("\n        "+t._s(t.readCount)+"\n      ")],1),t._v(" "),e(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[e(d.a,{attrs:{left:"",small:""}},[t._v("mdi-clock")]),t._v("\n        "+t._s(t.publishedAt)+"\n      ")],1)],1)],1),t._v(" "),t._t("button-groups"),t._v(" "),t._t("menu")],2)}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,l){"use strict";l.r(e);var r=l(108),n=l(420),d=l(141),c=l(419),o=l(676),m=l(47),h=(l(7),l(12),l(199),l(142),{props:{currentTab:{type:Object,required:!0}},data:function(){return{leadArticle:{},items:[],start:0,perPage:5,loadmore:{isLoading:!1,isDisabled:!1},isReady:!1}},mounted:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.handlerFetch();case 2:t.isReady=!0;case 3:case"end":return e.stop()}}),e)})))()},methods:{handlerLoadMore:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.start+=t.perPage,e.next=3,t.handlerFetch();case 3:case"end":return e.stop()}}),e)})))()},handlerFetch:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadmore.isLoading=!0,e.next=3,t.$axios.$get("/api/v1/article/getdata",{params:{category:t.currentTab.id,start:t.start,returnType:"list"}});case 3:(l=e.sent).status?((data=l.result.data).forEach((function(e){t.items.push({featuredImage:t.articleImage(e.Cover),slug:"/artikel/"+e.UrlSlug,title:e.Title,content:e.Content,fullname:e.Author,username:e.AuthorSlug,categoryName:e.Category,categorySlug:"/",readCount:t.byteNumeric(e.Reader),publishedAt:t.relativeDate(e.PublishDate)})})),0===t.start&&data.length>0&&(t.items.splice(0,1),t.leadArticle={featuredImage:t.articleImage(data[0].Cover),slug:"/artikel/"+data[0].UrlSlug,title:data[0].Title,content:data[0].Content,fullname:data[0].Author,username:data[0].AuthorSlug,categoryName:data[0].Category,categorySlug:"/",readCount:t.byteNumeric(data[0].Reader),publishedAt:t.relativeDate(data[0].PublishDate)})):t.loadmore.isDisabled=!0,t.loadmore.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),v=l(28),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return t.isReady?e(c.a,[e(n.a,{staticClass:"d-none d-md-block",attrs:{cols:"12"}},[e("BaseTitleSection",t._b({staticClass:"mt-4",attrs:{decoration:"",inline:""}},"BaseTitleSection",t.currentTab,!1))],1),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e("BaseArticleCardItem",t._b({staticClass:"tw-mt-8 tw-mb-16 sm:tw-mt-0",attrs:{size:"large",middle:""}},"BaseArticleCardItem",t.leadArticle,!1)),t._v(" "),e("div",{staticClass:"tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 tw-mt-8 sm:tw-mt-0"},t._l(t.items,(function(l){return e("BaseArticleCardItem",t._b({key:l.title,attrs:{content:""}},"BaseArticleCardItem",l,!1))})),1),t._v(" "),e("div",{staticClass:"text-center mt-8"},[e(r.a,{staticClass:"mr-4 light-green darken-2 white--text",attrs:{loading:t.loadmore.isLoading,disabled:t.loadmore.isDisabled,rounded:"",size:"large"},on:{click:t.handlerLoadMore}},[e(d.a,{attrs:{start:""}},[t._v("mdi-chevron-down")]),t._v("\n        lebih banyak\n      ")],1)],1)],1)],1):e("div",[e(o.a,{staticClass:"mb-2 d-none d-md-block",attrs:{type:"sentences"}}),t._v(" "),e(o.a,{attrs:{type:"image"}}),t._v(" "),e("div",{staticClass:"tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4"},[e(o.a,{staticClass:"pa-2",attrs:{type:"list-item-avatar-two-line@3"}}),t._v(" "),e(o.a,{staticClass:"pa-2",attrs:{type:"list-item-avatar-two-line@3"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTitleSection:l(672).default,BaseArticleCardItem:l(674).default})}}]);