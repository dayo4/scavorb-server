(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sngl-pst"],{"0cd8":function(t,e,s){"use strict";var o=s("994e"),n=s.n(o);n.a},2112:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GBLMContainer flex"},[s("div",{staticClass:"MC-ViewArea",class:t.MainCB?t.MainCB:t.noSideNav?"xs12":"xs12 lg9",attrs:{id:t.ownID?t.ownID:""}},[t._t("default"),s("Footer")],2),t.noSideNav?t._e():s("div",{staticClass:"hide-lg-down",class:t.SideCB?t.SideCB:"lg3"},[t._t("SideNav")],2)])},n=[],a=s("d4ec"),i=s("bee2"),c=s("262e"),r=s("2caf"),l=s("9ab4"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{directives:[{name:"show",rawName:"v-show",value:!["user-profile","posts"].includes(t.$route.name),expression:"!['user-profile','posts'].includes($route.name)"}],staticClass:"Footer t-blue-grey text-center"},[t._m(0),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"t-blue--3 no-deco",attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"icon-copyright mr-4"},[t._v("2020 scavorb")])])}],d=s("60a3"),f=function(t){Object(c["a"])(s,t);var e=Object(r["a"])(s);function s(){return Object(a["a"])(this,s),e.apply(this,arguments)}return s}(d["c"]);f=Object(l["a"])([Object(d["a"])({})],f);var m=f,b=m,v=(s("0cd8"),s("2877")),h=Object(v["a"])(b,u,p,!1,null,"09bb7d70",null),C=h.exports,_=s("c152"),g=function(t){Object(c["a"])(s,t);var e=Object(r["a"])(s);function s(){return Object(a["a"])(this,s),e.apply(this,arguments)}return Object(i["a"])(s,[{key:"mounted",value:function(){_["d"].$container.element=document.getElementById(this.ownID),_["d"].$container.ScrollingHandler()}}]),s}(d["c"]);Object(l["a"])([Object(d["b"])({required:!1,default:!0})],g.prototype,"noSideNav",void 0),Object(l["a"])([Object(d["b"])({required:!1,default:!1})],g.prototype,"ownID",void 0),Object(l["a"])([Object(d["b"])({required:!1})],g.prototype,"MainCB",void 0),Object(l["a"])([Object(d["b"])({required:!1})],g.prototype,"SideCB",void 0),g=Object(l["a"])([Object(d["a"])({components:{Footer:C}})],g);var w=g,y=w,x=(s("ce0b"),Object(v["a"])(y,o,n,!1,null,null,null));e["a"]=x.exports},"28a4":function(t,e,s){},"661b":function(t,e,s){},"72c1":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Container",{attrs:{ownID:"MC-PostView"}},[s("div",{staticClass:"flex j-c-center mx-4"},[s("div",{staticClass:"Wrapper xs12 sm10 md9 lg10"},[s("section",{staticClass:"UserDetails flex a-i-center bg-white px-3 mb-2 mt-8"},[s("div"),s("div",{staticClass:"Info flex col text-center w-full mr-2"},[s("div",{staticClass:"font-6 bold-3 t-blue-grey--1 text-cap m-1"},[t._v(t._s(t.post.user.first_name)+" "+t._s(t.post.user.last_name))]),s("div",{staticClass:"flex a-s-center"},[t.user&&t.user.id===t.post.user_id?s("button",{staticClass:"icon-edit btn a-s-center font-3 py-1 px-2 m-1 bg-pink--2 t-white br1",on:{click:function(e){return t.editPost(t.post.slug)}}},[t._v("Edit Post")]):t._e()]),s("i",{staticClass:"t-cyan--2 font-3 p-1 b1 br3"},[t._v(t._s(t.post.user.status))])]),s("div",{staticClass:"Image noselect"},[s("img",{attrs:{src:t.$userBaseUrl+t.post.user.profile_image,alt:"user",draggable:"false"}})])]),s("section",{staticClass:"Head flex col j-c-center p-4"},[s("div",{staticClass:"Title a-s-center font-9 bold-3 t-blue-grey text-cap text-center letter-space-1 px-8 mb-8"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"FeaturedImage a-s-center br4 p-0 noselect"},[s("img",{staticClass:"w-full br4",attrs:{src:t.$postBaseUrl+t.post.img,alt:"image",draggable:"false"}})])]),s("section",{staticClass:"Meta mt-2"},[s("hr"),s("div",{staticClass:"m-1 t-blue-grey"},[s("b",[t._v("Updated:")]),t._v(" "+t._s(t.$moment(t.post.updated_at).fromNow())+" ")]),s("hr"),s("div",{staticClass:"ShareIcons flex a-i-center noselect"},[s("div",{staticClass:"icon-forward pink-gradient-btn flex a-i-center j-c-center t-white font-12 br5 bg-pink--4"}),s("div",{staticClass:"font-7 pl-10 py-2 pr-4 br4 flex j-c-around"},[s("a",{staticClass:"icon-facebook t-blue--2",on:{mouseout:function(e){t.shareIconsTooltip=""},mouseover:function(e){t.shareIconsTooltip="facebook"}}}),s("a",{staticClass:"icon-twitter t-cyan",attrs:{href:"https://twitter.com/share?url="+t.href,target:"_blank"},on:{mouseout:function(e){t.shareIconsTooltip=""},mouseover:function(e){t.shareIconsTooltip="twitter"}}}),s("a",{staticClass:"icon-whatsapp t-green--2",on:{mouseout:function(e){t.shareIconsTooltip=""},mouseover:function(e){t.shareIconsTooltip="whatsapp"}}}),s("a",{staticClass:"icon-reddit t-red-1",on:{mouseout:function(e){t.shareIconsTooltip=""},mouseover:function(e){t.shareIconsTooltip="reddit"}}}),s("i",{staticClass:"Tooltip font-4 text-center",class:t.shareIconsTooltip?"":"transform"},[t._v(t._s(t.shareIconsTooltip))])])]),s("hr"),s("div",{staticClass:"Actions flex j-c-center noselect my-1"},[s("span",{staticClass:"icon-comment btn cyan-gradient-btn",on:{click:function(e){return t.showCommentModal(t.post)}}},[t._v("Comments ("+t._s(t.post.comments)+")")])])]),s("section",{staticClass:"Body p-9",domProps:{innerHTML:t._s(t.post.content)}}),s("hr",{staticClass:"shadow-9"}),s("div",{staticClass:"Divider px-8 mt-10 font-9 bold-3 t-blue-grey text-cap text-center letter-space-1"},[t._v("Author")]),s("section",{staticClass:"Foot"},[s("div",{staticClass:"UserDetails py-1 px-3 mb-2 mt-8"},[s("div",{staticClass:"Info flex col text-center w-full mr-2"},[s("div",{staticClass:"font-6 bold-3 t-blue-grey--1 text-cap m-1"},[t._v(t._s(t.post.user.first_name)+" "+t._s(t.post.user.last_name))]),s("div",{staticClass:"flex a-s-center"},[s("button",{staticClass:"icon-user btn font-3 py-1 px-2 m-1 bg-pink--2 t-white br1",on:{click:function(e){return t.$router.push({name:"user-profile",params:{username:t.post.user.username}})}}},[t._v("View Profile")]),t.user&&t.user.id===t.post.user_id?s("button",{staticClass:"icon-edit btn a-s-center font-3 py-1 px-2 m-1 bg-pink--2 t-white br1",on:{click:function(e){return t.editPost(t.post.slug)}}},[t._v("Edit Post")]):t._e()]),s("div",{staticClass:"flex wrap sm-nowrap j-c-center a-i-center"},[s("div",{staticClass:"Image noselect"},[s("img",{attrs:{src:t.$userBaseUrl+t.post.user.profile_image,alt:"user",draggable:"false"}})]),s("Minimizer",{attrs:{initialHeight:90,closeable:!1}},[s("div",{staticClass:"t-cyan--3 font-4 p-1 b1 br3"},[t._v(t._s(t.post.user.about))])])],1)])])])]),s("Comments",{attrs:{showComments:t.showComments,socket:t.socket,post:t.activePost},on:{dismiss:function(e){t.showComments=!1}}})],1)])},n=[],a=(s("d3b7"),s("d4ec")),i=s("bee2"),c=s("262e"),r=s("2caf"),l=s("9ab4"),u=s("60a3"),p=s("c152"),d=s("8205"),f=s("2112"),m=function(t){Object(c["a"])(s,t);var e=Object(r["a"])(s);function s(){var t;return Object(a["a"])(this,s),t=e.apply(this,arguments),t.shareIconsTooltip="",t.href=window.location.href,t.body=document.querySelector(".Body"),t.activePost=null,t.showComments=!1,t.socket=null,t}return Object(i["a"])(s,[{key:"refreshProfile",value:function(){p["f"].$single.fetch({slug:this.$route.params.slug})}},{key:"showCommentModal",value:function(t){var e=this;d["h"].add("Setting up comments"),this.socket=Object(d["l"])("/comments/fetch-"+t.id),this.activePost=t,p["c"].fetchAll(this.socket,t.id,{},!0).then((function(t){t&&(e.showComments=!0)})).finally((function(){return d["h"].hide()}))}},{key:"editPost",value:function(t){var e=this;p["f"].$compose.fetch({slug:t},!0).then((function(t){t&&e.$router.push({path:"/compose",query:{mode:"edit"}})}))}},{key:"thumbUp",value:function(){}}]),s}(u["c"]);Object(l["a"])([Object(u["d"])("$route")],m.prototype,"refreshProfile",null),m=Object(l["a"])([Object(u["a"])({components:{Container:f["a"],Comments:function(){return s.e("chunk-570ce188").then(s.bind(null,"858d"))},Minimizer:function(){return s.e("chunk-12a8da41").then(s.bind(null,"9eae"))}},metaInfo:function(){return d["c"].metaInfo(this.post.title,this.post.content,this.$postBaseUrl+this.post.img,this.href,"Article")},computed:{user:function(){return p["b"].user},post:function(){return p["f"].$single.post}}})],m);var b=m,v=b,h=(s("79a4"),s("2877")),C=Object(h["a"])(v,o,n,!1,null,"97aa1f1c",null);e["default"]=C.exports},"79a4":function(t,e,s){"use strict";var o=s("28a4"),n=s.n(o);n.a},"994e":function(t,e,s){},ce0b:function(t,e,s){"use strict";var o=s("661b"),n=s.n(o);n.a}}]);
//# sourceMappingURL=sngl-pst.9a0dabba.js.map