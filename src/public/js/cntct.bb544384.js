(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cntct"],{"0d65":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Container",{attrs:{ownID:"MC-cntct"}},[a("h1",{staticClass:"text-center t-blue-grey"},[e._v("Contact Me")]),a("Contact")],1)},r=[],n=a("d4ec"),i=a("262e"),c=a("2caf"),o=a("9ab4"),l=a("60a3"),u=a("2112"),m=a("138e"),d=function(e){Object(i["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return a}(l["c"]);d=Object(o["a"])([Object(l["a"])({components:{Container:u["a"],Contact:m["a"]}})],d);var b=d,v=b,p=a("2877"),f=Object(p["a"])(v,s,r,!1,null,"464688da",null);t["default"]=f.exports},"138e":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"flex j-c-center"},[a("div",{staticClass:"GenFormStyle xs11 sm9 md7"},[e._m(0),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Name")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.name_err,expression:"name_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.name_err))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Input your full name"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},function(t){e.name_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("E-mail")]),e.email_err?a("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]):a("i",{staticClass:"font-2"},[e._v("Please ensure your E-mail is correct!")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(t){t.target.composing||(e.email=t.target.value)},function(t){e.email_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Subject")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.subj_err,expression:"subj_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.subj_err))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],attrs:{type:"text",placeholder:"Enter subject"},domProps:{value:e.subject},on:{input:[function(t){t.target.composing||(e.subject=t.target.value)},function(t){e.subj_err=""}]}})]),a("div",{staticClass:"Section"},[a("span",{staticClass:"Head py-6 px-8"},[e._v("Your Message")]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.msg_err,expression:"msg_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.msg_err))]),a("div",{ref:"msg",staticClass:"TextArea bg-white font-5 br2 p-7 mt-2",attrs:{contenteditable:"true",placeholder:"Type your message"},on:{input:e.setMsg}})]),a("transition",{attrs:{name:"expand"}},[e.success||e.error?a("div",{staticClass:"mt-5"},[a("div",{staticClass:"Alert p-3 b1",class:e.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green-1"},[e._v(e._s(e.success||e.error))])]):e._e()]),a("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-5 br4 mt-5 m-auto noselect",on:{click:e.send}},[a("span",{staticClass:"icon-forward mr-3"}),a("span",[e._v("Send Mail")])])],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"TopInfo icon-info bg-blue-5 p-3 mb-3 no-deco"},[e._v(" Send me the detail of your request using the form below or talk to me through other medium "),a("a",{staticClass:"icon-mail-alt t-pink--3",attrs:{href:"mailto:dayo4@live.com"}})])}],n=(a("b0c0"),a("d4ec")),i=a("bee2"),c=a("262e"),o=a("2caf"),l=a("9ab4"),u=a("60a3"),m=a("c152"),d=a("8205"),b=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.name="",e.email="",e.subject="",e.msg="",e.name_err="",e.email_err="",e.subj_err="",e.msg_err="",e}return Object(i["a"])(a,[{key:"setMsg",value:function(e){this.msg=e.target.textContent,this.msg_err&&(this.msg_err="")}},{key:"reCAPTCHA",value:function(){}},{key:"send",value:function(){var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Name",data:this.name,rules:{required:!0,string:!0,min:3,max:50}},{fieldName:"Subject",data:this.subject,rules:{required:!0,string:!0,min:3,max:50}},{fieldName:"Message",data:this.msg,rules:{required:!0,string:!0,min:50,max:4e3}}],t=this;d["j"].validate(e)&&d["g"].create(this.$refs.send,{action:function(){m["e"].$mailer.send({name:t.name,email:t.email,subject:t.subject,message:t.msg}).then((function(e){d["g"].destroy(t.$refs.send),e&&(t.name=t.email=t.subject=t.msg="",t.$refs.msg.textContent="")}))}});var a=d["j"].getErrors();this.email_err=a["Email"],this.name_err=a["Name"],this.subj_err=a["Subject"],this.msg_err=a["Message"]}}]),a}(u["c"]);b=Object(l["a"])([Object(u["a"])({computed:{error:function(){return m["e"].$mailer.error},success:function(){return m["e"].$mailer.success}}})],b);var v=b,p=v,f=(a("45b4"),a("2877")),_=Object(f["a"])(p,s,r,!1,null,null,null);t["a"]=_.exports},2112:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"GBLMContainer flex"},[a("div",{staticClass:"MC-ViewArea",class:e.MainCB?e.MainCB:e.noSideNav?"xs12":"xs12 lg9",attrs:{id:e.ownID?e.ownID:""}},[e._t("default")],2),e.noSideNav?e._e():a("div",{staticClass:"hide-lg-down",class:e.SideCB?e.SideCB:"md3"},[e._t("SideNav")],2)])},r=[],n=a("d4ec"),i=a("bee2"),c=a("262e"),o=a("2caf"),l=a("9ab4"),u=a("60a3"),m=a("c152"),d=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(n["a"])(this,a),t.apply(this,arguments)}return Object(i["a"])(a,[{key:"mounted",value:function(){m["d"].$container.element=document.getElementById(this.ownID),m["d"].$container.ScrollingHandler()}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])({required:!1,default:!1})],d.prototype,"noSideNav",void 0),Object(l["a"])([Object(u["b"])({required:!1,default:!1})],d.prototype,"ownID",void 0),Object(l["a"])([Object(u["b"])({required:!1})],d.prototype,"MainCB",void 0),Object(l["a"])([Object(u["b"])({required:!1})],d.prototype,"SideCB",void 0),d=Object(l["a"])([Object(u["a"])({})],d);var b=d,v=b,p=(a("ce0b"),a("2877")),f=Object(p["a"])(v,s,r,!1,null,null,null);t["a"]=f.exports},"45b4":function(e,t,a){"use strict";var s=a("d4bc"),r=a.n(s);r.a},"661b":function(e,t,a){},ce0b:function(e,t,a){"use strict";var s=a("661b"),r=a.n(s);r.a},d4bc:function(e,t,a){}}]);
//# sourceMappingURL=cntct.bb544384.js.map