(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-114d867b"],{"08df":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Wrapper flex j-c-center"},[e("div",{staticClass:"xs12 sm10 md9"},t._l(t.posts,(function(s){return e("div",{key:s.id},[e("section",{staticClass:"Article br2 mb-3"},[e("section",{staticClass:"PostImage noselect",on:{click:function(e){return t.openPost(s.slug)}}},[e("img",{staticClass:"br2",attrs:{src:s.img?t.$postBaseUrl+s.img:"/defaults/4.jpg",draggable:"false"}})]),e("section",{staticClass:"Details"},[e("div",{staticClass:"cursor-pointer flex h-full w-full",on:{click:function(e){return t.openPost(s.slug)}}},[e("img",{staticClass:"noselect",attrs:{src:t.$userBaseUrl+s.user.profile_image,width:"30",height:"30",draggable:"false"}}),e("div",[e("h5",{staticClass:"font-3 my-1 mx-5 t-white"},[t._v(t._s(s.title))]),e("p",{staticClass:"font-2 my-2 mx-5 t-grey-1 bold-3"},[e("span",{staticClass:"mr-2 bold-5 t-grey-2"},[t._v(t._s(s.user.first_name+" "+s.user.last_name))]),t._v(" - "+t._s(s.comments.length>1?s.comments+" "+(s.comments.length>1?"replies":"reply"):"")+" "),e("span",{staticClass:"icon-clock"},[t._v(t._s(t.$moment(s.updated_at).fromNow()))])])])]),e("Dropdown",{staticClass:"btn icon-ellipsis-vert font-8 bg-trans-2",staticStyle:{width:"30px"},attrs:{ownID:s.id,pos:{type:"absolute",top:4,right:4}},scopedSlots:t._u([{key:"default",fn:function(){return[e("router-link",{attrs:{to:{path:"/posts/"+s.slug}}},[e("span",{staticClass:"icon-eye"}),e("span",[t._v("Open")])]),t.user?e("a",[e("span",{staticClass:"icon-bookmarks"}),e("span",[t._v("Bookmark")])]):t._e(),e("a",{on:{click:function(e){return t.addToQueue(s.id,s.img,s.title,s.slug)}}},[e("span",{staticClass:"icon-plus-1"}),e("span",[t._v("Add to queue")])])]},proxy:!0}],null,!0)})],1)])])})),0)])},n=[],i=(e("d3b7"),e("d4ec")),o=e("bee2"),c=e("262e"),r=e("2caf"),l=e("9ab4"),u=e("60a3"),p=e("c152"),d=function(t){Object(c["a"])(e,t);var s=Object(r["a"])(e);function e(){return Object(i["a"])(this,e),s.apply(this,arguments)}return Object(o["a"])(e,[{key:"openPost",value:function(t){this.$router.push({path:"/posts/"+t})}},{key:"addToQueue",value:function(t,s,e,a){p["h"].add({id:t,image:s?this.$postBaseUrl+s:"/defaults/4.jpg",title:e,slug:a})}}]),e}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0,type:Array})],d.prototype,"posts",void 0),d=Object(l["a"])([Object(u["a"])({components:{Dropdown:function(){return e.e("chunk-c797e606").then(e.bind(null,"5c81"))}},computed:{user:function(){return p["b"].user}}})],d);var f=d,m=f,b=(e("c678"),e("2877")),g=Object(b["a"])(m,a,n,!1,null,"38403bd1",null);s["default"]=g.exports},"31a3":function(t,s,e){},c678:function(t,s,e){"use strict";var a=e("31a3"),n=e.n(a);n.a}}]);