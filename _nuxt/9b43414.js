(window.webpackJsonp=window.webpackJsonp||[]).push([[5,29],{742:function(t,e,l){"use strict";l.r(e);var r=l(281),n=l(108),o=l(130),c=l(195),d=l(95),m={components:{VClamp:l(668).a},props:{featuredImage:{type:String,default:""},slug:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},label:{type:String,default:""}}},v=l(28),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{directives:[{def:d.a,name:"ripple",rawName:"v-ripple"}],staticClass:"pa-4 d-flex flex-column align-center",attrs:{rounded:"xl",color:"grey lighten-3",to:t.slug,nuxt:""}},[e("p",{staticClass:"caption mb-4"},[t._v(t._s(t.label))]),t._v(" "),e(r.a,{staticClass:"mb-4 elevation-4",attrs:{size:"100"}},[e(c.a,{attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:t.featuredImage}})],1),t._v(" "),e("h1",{staticClass:"headline"},[e("v-clamp",{attrs:{autoresize:"","max-lines":3},scopedSlots:t._u([{key:"after",fn:function(l){var r=l.toggle,o=l.clamped,c=l.expanded;return[e("br"),t._v(" "),c||o?e(n.a,{attrs:{text:"",small:""},on:{click:r}},[e("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[t._v("\n            "+t._s(c?"less":"more")+"\n          ")])]):t._e()]}}])},[t._v("\n      "+t._s(t.title)+"\n      ")])],1),t._v(" "),e("p",{staticClass:"caption mb-4"},[t._v(t._s(t.subtitle))])],1)}),[],!1,null,null,null);e.default=component.exports},822:function(t,e,l){"use strict";l.r(e);var r=l(420),n=l(419),o=l(676),c=(l(29),{props:{tab:{type:Number,required:!0},institution:{type:Object,required:!0}},data:function(){return{items:[],isReady:!1}},mounted:function(){this.isReady=!0},methods:{}}),d=l(28),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return t.isReady?e(n.a,[e(r.a,{attrs:{cols:"12"}},[0===t.tab?e("ActionSimpulTabEdit",{attrs:{institution:t.institution}}):t._e(),t._v(" "),1===t.tab?e("ActionSimpulTabVolunteerManage",{attrs:{institution:t.institution}}):t._e(),t._v(" "),2===t.tab?e("ActionSimpulTabGalleriesManage",{attrs:{institution:t.institution}}):t._e()],1)],1):e("div",[e(o.a,{staticClass:"pa-2",attrs:{type:"list-item-avatar-two-line@6"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActionSimpulTabEdit:l(823).default,ActionSimpulTabVolunteerManage:l(824).default,ActionSimpulTabGalleriesManage:l(849).default})},823:function(t,e,l){"use strict";l.r(e);var r=l(281),n=l(108),o=l(420),c=l(667),d=l(904),m=l(736),v=l(141),h=l(195),f=l(649),_=l(419),k=l(200),x=l(862),w=(l(45),l(15),l(75),l(11)),C=l(47),y=(l(142),l(35),l(13),{layout:"dashboard",props:{institution:{type:Object,required:!0}},data:function(){return{name:null,description:null,bio:null,since:null,menuDate:!1,province:null,districts:null,sub_district:null,village:null,address:null,postal_code:null,profile_picture:null,phone:null,saweria:null,facebook:null,twitter:null,instagram:null,website:null,latitude:null,longitude:null,imageUploadCover:{stateUpload:{pathField:{name:"path",value:"pbi"},fileField:{name:"picture",value:""},uploadPercentage:0,response:null}},imageUploadAvatar:{stateUpload:{pathField:{name:"path",value:"pbi"},fileField:{name:"picture",value:""},uploadPercentage:0,response:null}},imageRules:[function(t){return!t||t.size<2e6||"Image size should be less than 2 MB!"}]}},mounted:function(){this.setFormEdit(this.institution)},methods:{upload:function(t){var e=arguments,l=this;return Object(C.a)(regeneratorRuntime.mark((function r(){var n,o,c,d,m,v,h,element;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(n="avatar"===(e.length>1&&void 0!==e[1]?e[1]:"avatar")?l.imageUploadAvatar.stateUpload:l.imageUploadCover.stateUpload).fileField.value=t,n.uploadPercentage=0,(o=new FormData).append(n.fileField.name,n.fileField.value),n.pathField.value&&o.append(n.pathField.name,n.pathField.value),c={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){n.uploadPercentage=Math.round(100*t.loaded/t.total)}},r.prev=8,r.next=11,l.$axios.post("".concat("https://image-uploader.pustakabergerak.id","/api/upload"),o,c);case 11:200===(d=r.sent).status&&(n.response=d.data,l.$toast.success("Upload Success")),r.next=20;break;case 15:for(r.prev=15,r.t0=r.catch(8),m=r.t0.response.data.errors.picture,v=r.t0.response.data.message,h=0;h<m.length;h++)element=m[h],l.$toast.error(v+" "+element,{duration:1e4});case 20:n.uploadPercentage=0;case 21:case"end":return r.stop()}}),r,null,[[8,15]])})))()},save:function(t){this.$refs.menuDate.save(t)},setFormEdit:function(t){this.id=t.InstitutionId,this.name=t.InstitutionName,this.description=t.Description,this.bio=t.Bio,this.since=t.Since,this.province=t.Province,this.districts=t.Districts,this.sub_district=t.SubDistrict,this.village=t.Village,this.address=t.Address,this.postal_code=t.PostalCode,this.phone=t.Phone,this.saweria=t.Saweria,this.facebook=t.Facebook,this.twitter=t.Twitter,this.instagram=t.Instagram,this.website=t.Website,this.latitude=t.Latitude,this.longitude=t.Longitude,this.profile_picture=t.ProfilePicture,this.cover_photo=t.CoverPhoto,this.imageUploadAvatar.stateUpload.response=t.ProfilePicture?{picture:{name:t.ProfilePicture,url:"".concat("https://image-uploader.pustakabergerak.id","/storage/pbi/").concat(t.ProfilePicture)}}:null,this.imageUploadCover.stateUpload.response=t.CoverPhoto?{picture:{name:t.CoverPhoto,url:"".concat("https://image-uploader.pustakabergerak.id","/storage/pbi/").concat(t.CoverPhoto)}}:null},submit:function(){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var l,r,n,o,c,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={id:t.id,name:t.name,description:t.description,bio:t.bio,since:t.since,province:t.province,districts:t.districts,sub_district:t.sub_district,village:t.village,address:t.address,postal_code:t.postal_code,phone:t.phone,saweria:t.saweria,facebook:t.facebook,twitter:t.twitter,instagram:t.instagram,website:t.website,latitude:t.latitude,longitude:t.longitude,profile_picture:t.imageUploadAvatar.stateUpload.response?t.imageUploadAvatar.stateUpload.response.picture.name:null,cover_photo:t.imageUploadCover.stateUpload.response?t.imageUploadCover.stateUpload.response.picture.name:null},e.prev=1,e.next=4,t.$axios.$post("/api/v1/institution/update",l,{params:{id:t.id}});case 4:if((r=e.sent).status&&(t.$toast.success(r.result.data),t.resetAuthUserData()),!r.status)if("object"===Object(w.a)(r.error))for(n=0,o=Object.keys(r.error);n<o.length;n++)c=o[n],t.$toast.error(r.error[c]);else t.$toast.error(r.error);e.next=12;break;case 9:if(e.prev=9,e.t0=e.catch(1),e.t0.response.data.error)if("object"===Object(w.a)(e.t0.response.data.error))for(d=0,m=Object.keys(e.t0.response.data.error);d<m.length;d++)v=m[d],t.$toast.error(e.t0.response.data.error[v]);else t.$toast.error(e.t0.response.data.error);else t.$toast.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),U=y,P=l(28),component=Object(P.a)(U,(function(){var t=this,e=t._self._c;return e(c.a,[e(_.a,[e(o.a,{staticClass:"text-center my-8",attrs:{cols:"12"}},[e(r.a,{attrs:{size:"200"}},[e(h.a,{attrs:{src:t.imageUploadAvatar.stateUpload.response?t.imageUploadAvatar.stateUpload.response.picture.url:"/avatar.png"}})],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"4"}},[e(m.a,{staticClass:"rounded-lg",attrs:{rules:t.imageRules,accept:"image/png, image/jpeg, image/jpg",label:"Gambar Profil",color:"light-green darken-3",outlined:"","background-color":"white","show-size":"",loading:t.imageUploadAvatar.stateUpload.uploadPercentage>0,"loader-height":"6"},on:{change:function(e){return t.upload(e,"avatar")}}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"8"}},[e(m.a,{staticClass:"rounded-lg",attrs:{rules:t.imageRules,accept:"image/png, image/jpeg, image/jpg",label:"Gambar Sampul",color:"light-green darken-3",outlined:"","background-color":"white","show-size":"",loading:t.imageUploadCover.stateUpload.uploadPercentage>0,"loader-height":"6"},on:{change:function(e){return t.upload(e,"cover")}}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"8"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Nama simpul"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"4"}},[e(f.a,{ref:"menuDate",attrs:{"close-on-content-click":!1,"return-value":t.since,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.since=e},"update:return-value":function(e){t.since=e}},scopedSlots:t._u([{key:"activator",fn:function(l){var r=l.on,n=l.attrs;return[e(k.a,t._g(t._b({staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Tahun Berdiri"},model:{value:t.since,callback:function(e){t.since=e},expression:"since"}},"v-text-field",n,!1),r))]}}]),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[t._v(" "),e(d.a,{attrs:{label:"Select a date"},on:{change:t.save},model:{value:t.since,callback:function(e){t.since=e},expression:"since"}})],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(x.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Deskripsi"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(x.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Alamat"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Provinsi"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Kabupaten"},model:{value:t.districts,callback:function(e){t.districts=e},expression:"districts"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Kecamatan"},model:{value:t.sub_district,callback:function(e){t.sub_district=e},expression:"sub_district"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Desa"},model:{value:t.village,callback:function(e){t.village=e},expression:"village"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"No. Telp"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Kode pos"},model:{value:t.postal_code,callback:function(e){t.postal_code=e},expression:"postal_code"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"4"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Username facebook"},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"4"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Username instagram"},model:{value:t.instagram,callback:function(e){t.instagram=e},expression:"instagram"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"4"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Username twitter"},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Username saweria"},model:{value:t.saweria,callback:function(e){t.saweria=e},expression:"saweria"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"6"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Link website"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e("div",{staticClass:"tw-flex tw-justify-between"},[e(n.a,{attrs:{to:"/dashboard",nuxt:""}},[t._v("Batal")]),t._v(" "),e("div",{staticClass:"tw-flex tw-space-x-2"},[e(n.a,{attrs:{color:"light-green darken-3",dark:""},on:{click:function(e){return t.submit()}}},[e(v.a,{attrs:{left:""}},[t._v("mdi-send")]),t._v("\n            Simpan\n          ")],1)],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},824:function(t,e,l){"use strict";l.r(e);var r=l(108),n=l(420),o=l(667),c=l(141),d=l(419),m=(l(7),l(12),{props:{institution:{type:Object,required:!0}},data:function(){return{users:{admin:{},volunteers:[]}}},mounted:function(){var t,e=this;this.users.admin={featuredImage:this.userImage(this.institution.AdminProfile),slug:"/".concat(this.institution.AdminSlug),title:this.institution.AdministartorName,subtitle:this.institution.AdminSlug,label:"Penanggungjawab"},null===(t=this.institution.volunter)||void 0===t||t.forEach((function(t){e.users.volunteers.push({featuredImage:e.userImage(t.ProfilePicture),slug:"/".concat(t.UrlSlug),title:t.Fullname,subtitle:t.UrlSlug,label:"relawan"})}))}}),v=l(28),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,[e(d.a,[e(n.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(r.a,{attrs:{color:"light-green darken-3",dark:"",to:"/pencarian",nuxt:""}},[e(c.a,[t._v("mdi-plus")]),t._v("\n        Relawan\n      ")],1)],1)],1),t._v(" "),e(d.a,[e(n.a,{attrs:{cols:"6",lg:"4"}},[e("ActionSimpulVolunteerCard",t._b({},"ActionSimpulVolunteerCard",t.users.admin,!1))],1),t._v(" "),t._l(t.users.volunteers,(function(l,r){return e(n.a,{key:r,attrs:{cols:"6",lg:"4"}},[e("ActionSimpulVolunteerCard",t._b({},"ActionSimpulVolunteerCard",l,!1))],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActionSimpulVolunteerCard:l(742).default})},849:function(t,e,l){"use strict";l.r(e);var r=l(28),component=Object(r.a)({},(function(){return(0,this._self._c)("p",[this._v("Manage Galleries")])}),[],!1,null,null,null);e.default=component.exports}}]);