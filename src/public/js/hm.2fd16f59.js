(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hm"],{"0cd8":function(e,t,a){"use strict";var s=a("994e"),i=a.n(s);i.a},"138e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"flex j-c-center"},[a("div",{staticClass:"GenFormStyle xs11 sm9 md7"},[e._m(0),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Name")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.name_err,expression:"name_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.name_err))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Input your full name"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},function(t){e.name_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("E-mail")]),e.email_err?a("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]):a("i",{staticClass:"font-2"},[e._v("Please ensure your E-mail is correct!")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},function(t){e.email_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Subject")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.subj_err,expression:"subj_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.subj_err))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",placeholder:"Enter subject"},domProps:{value:e.subject},on:{input:[function(t){t.target.composing||(e.subject=t.target.value)},function(t){e.subj_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Your Message")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.msg_err,expression:"msg_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.msg_err))]),a("div",{ref:"msg",staticClass:"TextArea bg-white font-5 br2 p-7 mt-2",attrs:{contenteditable:"true",placeholder:"Type your message"},on:{input:e.setMsg}})]),a("transition",{attrs:{name:"expand"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCaptcha,expression:"showCaptcha"}],staticClass:"mt-2"},[a("i",[e._v("Please check the reCaptcha checkbox below")]),a("div",{ref:"reCaptcha"})])]),a("transition",{attrs:{name:"expand"}},[e.success||e.error?a("div",{staticClass:"mt-5"},[a("div",{staticClass:"Alert p-3 b1",class:e.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green-1"},[e._v(e._s(e.success||e.error))])]):e._e()]),a("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-5 br4 mt-5 m-auto noselect",on:{click:e.send}},[a("span",{staticClass:"icon-forward mr-3"}),a("span",[e._v("Send Mail")])])],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"TopInfo icon-info bg-blue-5 p-3 mb-3 no-deco"},[e._v(" Send me the detail of your request using the form below or talk to me through other medium "),a("a",{staticClass:"icon-mail-alt t-pink--3",attrs:{title:"e-mail",href:"mailto:scavorb@gmail.com"}}),a("a",{staticClass:"icon-whatsapp t-green--1",attrs:{title:"whatsapp",href:"https://wa.me/message/3NSQPMZJFTDHL1",target:"_blank"}})])}],n=(a("b0c0"),a("d4ec")),r=a("bee2"),c=a("262e"),o=a("2caf"),l=a("9ab4"),u=a("60a3"),d=a("c152"),m=a("8205"),v=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.name="",e.email="",e.subject="",e.msg="",e.name_err="",e.email_err="",e.subj_err="",e.msg_err="",e.showCaptcha=!1,e}return Object(r["a"])(a,[{key:"mounted",value:function(){var e=this,t=this;grecaptcha.ready((function(){grecaptcha.render(e.$refs.reCaptcha,{sitekey:"6LdDQ9MZAAAAAAXOm_j-i-gaGUjqzNcIDDDyAXzw","error-callback":function(e){t.error=e},callback:function(e){m["g"].create(t.$refs.send,{icon:"",action:function(){d["e"].$mailer.send({name:t.name,email:t.email,subject:t.subject,message:t.msg,token:e}).then((function(e){m["g"].destroy(t.$refs.send),grecaptcha.reset(),t.showCaptcha=!1,e&&(t.name=t.email=t.subject=t.msg="",t.$refs.msg.textContent="")}))}})}})}))}},{key:"beforeDestroy",value:function(){this.error=this.success=""}},{key:"setMsg",value:function(e){this.msg=e.target.textContent,this.msg_err&&(this.msg_err="")}},{key:"send",value:function(){this.validate()&&(this.showCaptcha=!0)}},{key:"validate",value:function(){var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Name",data:this.name,rules:{required:!0,string:!0,min:3,max:50}},{fieldName:"Subject",data:this.subject,rules:{required:!0,string:!0,min:3,max:100}},{fieldName:"Message",data:this.msg,rules:{required:!0,string:!0,min:20,max:4e3}}];if(m["j"].validate(e))return!0;var t=m["j"].getErrors();this.email_err=t["Email"],this.name_err=t["Name"],this.subj_err=t["Subject"],this.msg_err=t["Message"]}}]),a}(u["c"]);v=Object(l["a"])([Object(u["a"])({computed:{error:{get:function(){return d["e"].$mailer.error},set:function(e){return d["e"].$mailer.error=e}},success:{get:function(){return d["e"].$mailer.success},set:function(e){return d["e"].$mailer.success=e}}}})],v);var p=v,b=p,f=(a("45b4"),a("2877")),g=Object(f["a"])(b,s,i,!1,null,null,null);t["a"]=g.exports},2112:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GBLMContainer flex"},[a("div",{staticClass:"MC-ViewArea",class:e.MainCB?e.MainCB:e.noSideNav?"xs12":"xs12 lg9",attrs:{id:e.ownID?e.ownID:""}},[e._t("default"),a("Footer")],2),e.noSideNav?e._e():a("div",{staticClass:"hide-lg-down",class:e.SideCB?e.SideCB:"lg3"},[e._t("SideNav")],2)])},i=[],n=a("d4ec"),r=a("bee2"),c=a("262e"),o=a("2caf"),l=a("9ab4"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{directives:[{name:"show",rawName:"v-show",value:!["user-profile","posts"].includes(e.$route.name),expression:"!['user-profile','posts'].includes($route.name)"}],staticClass:"Footer t-blue-grey text-center"},[e._m(0),a("div",{staticClass:"mt-4"},[a("router-link",{staticClass:"t-blue--3 no-deco",attrs:{to:"/privacy"}},[e._v("Privacy")])],1)])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("span",{staticClass:"icon-copyright mr-4"},[e._v("2020 scavorb")])])}],m=a("60a3"),v=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(m["c"]);v=Object(l["a"])([Object(m["a"])({})],v);var p=v,b=p,f=(a("0cd8"),a("2877")),g=Object(f["a"])(b,u,d,!1,null,"09bb7d70",null),h=g.exports,C=a("c152"),_=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"mounted",value:function(){C["d"].$container.element=document.getElementById(this.ownID),C["d"].$container.ScrollingHandler()}}]),a}(m["c"]);Object(l["a"])([Object(m["b"])({required:!1,default:!0})],_.prototype,"noSideNav",void 0),Object(l["a"])([Object(m["b"])({required:!1,default:!1})],_.prototype,"ownID",void 0),Object(l["a"])([Object(m["b"])({required:!1})],_.prototype,"MainCB",void 0),Object(l["a"])([Object(m["b"])({required:!1})],_.prototype,"SideCB",void 0),_=Object(l["a"])([Object(m["a"])({components:{Footer:h}})],_);var j=_,y=j,w=(a("ce0b"),Object(f["a"])(y,s,i,!1,null,null,null));t["a"]=w.exports},3224:function(e,t,a){"use strict";var s=a("defe"),i=a.n(s);i.a},"45b4":function(e,t,a){"use strict";var s=a("d4bc"),i=a.n(s);i.a},"661b":function(e,t,a){},"7dac":function(e,t,a){"use strict";var s=a("9184"),i=a.n(s);i.a},9184:function(e,t,a){},"994e":function(e,t,a){},aec6:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Container",{attrs:{ownID:"MC-Home bg-blue-grey--2"}},[a("section",{staticClass:"Top noselect br1"},[a("div",{staticClass:"Detail noselect br1"},[a("div",{staticClass:"Intro"},[a("div",[e._v("Adedayo Adeniyi")]),a("div",[e._v("A Full-stack Web Applications Developer")])]),a("div",{staticClass:"More"},[a("div",[e._v("I develop and implement custom web software solutions tailored to your needs.")]),a("div",[e._v("Front-end Development")]),a("div",[e._v("Back-end Development")]),a("div",[e._v("UI Designs")]),a("div",[e._v("Single Page Applications(SPAs)")]),a("div",[e._v("Ecommerce Development")]),a("div",[e._v("Wordpress Development")])])]),a("div",{staticClass:"Img"},[a("img",{attrs:{src:"/defaults/usr/me.jpg",alt:"profile image",draggable:"false"}}),a("span",{staticClass:"Icon b1 shadow-4",on:{click:function(t){return e.$router.push({path:"/profile/dayo"})}}},[e._v("View Profile")])]),a("div",{staticClass:"Logo flex j-c-center pt-5 noselect"},[a("div",{staticClass:"logo-base logo-large logo-trans"},[a("span",[a("span",[a("b",[e._v("S")])]),a("span")]),a("span")])])]),a("div",{staticClass:"Divider"},[a("span")]),a("section",{staticClass:"Section_2"},[a("h2",{staticClass:"text-center t-blue-grey--1"},[a("span",{staticClass:"icon-check-1 mr-3"}),a("span",[e._v(" Deliverables ")])]),a("div",{staticClass:"Tiles flex wrap j-c-center py-8"},e._l(e.list,(function(t,s){return a("div",{key:s,staticClass:"shadow-3"},[a("div",[a("img",{attrs:{src:t.link?t.link:"/defaults/pgs/icons/"+t.img+".jpg",draggable:"false"}})]),a("div",[e._v(e._s(t.text))])])})),0),a("button",{staticClass:"btn cyan-gradient-btn shadow-5 font-5 br4 mt-5 m-auto noselect",on:{click:function(t){return e.$router.push({name:"about"})}}},[a("span",{staticClass:"icon-right-big mr-3"}),a("span",[e._v("More Info")])])]),a("div",{staticClass:"Divider"},[a("span")]),a("section",[a("h2",{staticClass:"text-center t-blue-grey--1"},[a("span",{staticClass:"icon-chart-line-1 mr-3"}),a("span",[e._v(" Skills Chart "),a("i",{staticClass:"font-2"},[e._v("Few")])])]),a("SkillChart")],1),a("div",{staticClass:"Divider"},[a("span")]),a("h2",{staticClass:"text-center t-blue-grey--1"},[a("span",{staticClass:"icon-mail-alt mr-3"}),a("span",[e._v(" Message Me "),a("i",{staticClass:"font-3"},[e._v("Let's Work Together")])])]),a("Contact")],1)},i=[],n=a("d4ec"),r=a("262e"),c=a("2caf"),o=a("9ab4"),l=a("60a3"),u=a("2112"),d=a("138e"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"CanvasCont flex j-c-center"},[a("canvas",{ref:"Canvas",attrs:{width:"400",height:"290"}})])},v=[],p=a("bee2"),b=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return Object(p["a"])(a,[{key:"mounted",value:function(){this.createCanvas()}},{key:"createCanvas",value:function(){var e=this.$refs.Canvas,t=e.width,a=e.getContext("2d"),s=[.93,.94,.93,.91,.92,.9,.82,.6,.68,.62],i=["JAVASCRIPT","CSS","HTML","TYPESCRIPT","VUEJS","NODEJS","UI DESIGN","PYTHON","GRAPHICS","PHP"];function n(){for(var e=0;e<s.length;e++)a.fillStyle="#bdbdbd",a.fillRect(0,30*e,t,20),a.fillStyle="#ad1457",a.fillRect(0,30*e,t*s[e],20),a.fillStyle="#c2185b",a.fillRect(0,30*e,72,20),a.fillStyle="white",a.fillText(i[e],3,30*e+13)}n()}}]),a}(l["c"]);b=Object(o["a"])([Object(l["a"])({})],b);var f=b,g=f,h=(a("3224"),a("2877")),C=Object(h["a"])(g,m,v,!1,null,"7b7f2e02",null),_=C.exports,j=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.list=[{img:"resp",text:"Fully Responsive Webpages"},{img:"scale",text:"Progressive and Easily Scalable Apps"},{img:"",text:"Clean and Readable Code",link:"/defaults/pgs/icons/clean.png"},{img:"flexb",text:"Flexible Business Logic Implementation"},{img:"effect",text:"Cost Effective Development Service"},{img:"",text:"Genuine Design Customized To Your Need",link:"/defaults/logo/scavorb.png"}],e}return a}(l["c"]);j=Object(o["a"])([Object(l["a"])({components:{Container:u["a"],Contact:d["a"],SkillChart:_}})],j);var y=j,w=y,x=(a("7dac"),Object(h["a"])(w,s,i,!1,null,"4e852287",null));t["default"]=x.exports},ce0b:function(e,t,a){"use strict";var s=a("661b"),i=a.n(s);i.a},d4bc:function(e,t,a){},defe:function(e,t,a){}}]);
//# sourceMappingURL=hm.2fd16f59.js.map