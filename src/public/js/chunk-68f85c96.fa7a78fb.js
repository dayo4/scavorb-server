(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f85c96"],{"044d":function(e,s,t){"use strict";var a=t("25c8"),r=t.n(a);r.a},"25c8":function(e,s,t){},"307e":function(e,s,t){"use strict";var a=t("f122"),r=t.n(a);r.a},"5bef":function(e,s,t){"use strict";var a=t("9ab9"),r=t.n(a);r.a},"9ab9":function(e,s,t){},c7ce:function(e,s,t){"use strict";var a=t("fe0b"),r=t.n(a);r.a},df0e:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("transition",{attrs:{name:"slide-fade"}},[e.showModal?t("div",{staticClass:"AuthModal"},[t("h3",{staticClass:"Head flex a-i-center j-c-between bg-white t-blue-grey font-7 p-4 my-0 noselect"},[t("span",{staticClass:"Header text-up font-6"},[e._v("Login or Create Account")]),t("div",{staticClass:"labeled-action px-2",on:{click:e.dismiss}},[t("span",{staticClass:"icon-off t-pink-2"}),t("span",{staticClass:"font-2"},[e._v("Close")])])]),t("transition",{attrs:{name:"slide-fade"}},[e.query.showQuery?t("h4",{staticClass:"bg-light-blue-5 t-light-blue p-4 my-0"},[t("span",{staticClass:"icon-info mr-2 t-blue"}),e._v(" "+e._s(e.query.message?e.query.message:"Sorry! You have to login to access this section.")+" ")]):e._e()]),t("hr",{staticClass:"my-2 shadow-10"}),t("div",{staticClass:"FormCont flex j-c-center bg-white h-full"},[t("div",{staticClass:"Pillar xs11 sm9 md7 lg5"},[t("div",{staticClass:"Logo logo-base logo-small shadow-5"},[t("span",[t("span",[t("b",[e._v("S")])]),t("span")]),t("span")]),t("div",{staticClass:"Title flex j-c-center noselect"},[t("h3",{staticClass:"text-center"},[e._v("SCAVORB")])]),t("div",{staticClass:"text-right mb-5"},[1===e.mode?t("b",{staticClass:"font-6 t-blue-grey bg-grey-4 p-2 br3 text-right cursor-pointer",on:{click:function(s){return e.switchMode(3)}}},[e._v("Forgot password?")]):e._e()]),e.sysSet.allow_new_reg?t("div",{staticClass:"flex wrap a-i-center mb-5"},[t("span",{staticClass:"mr-3 bold-2"},[e._v(e._s(1===e.mode?"Dont have an account yet?":"Already have an account?"))]),t("span",{staticClass:"Alternate bold-4 shadow-1 noselect",class:1===e.mode?"icon-user-add":"icon-login",on:{click:function(s){1===e.mode?e.switchMode(2):e.switchMode(1)}}},[e._v(e._s(1===e.mode?"Create New Account":"Login"))])]):e._e(),t("Login",{attrs:{show:1===e.mode}}),t("Register",{attrs:{show:2===e.mode}}),t("Reset",{attrs:{show:3===e.mode}})],1)])],1):e._e()])},r=[],n=t("d4ec"),i=t("bee2"),o=t("262e"),l=t("2caf"),c=t("9ab4"),m=t("60a3"),p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle noselect shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-login text-center t-blue-grey--2 font-8 mt-0 mb-8 noselect"},[e._v("Login")]),e.stage_2?e._e():t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-at py-6 px-8"},[e._v("E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1",class:e.email_err?"vibrate":""},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-lock-open-alt py-6 px-8"},[e._v("Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1",class:e.pass_err?"vibrate":""},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Input your Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})])]),e.stage_2?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user py-6 px-8"},[e._v("First Name")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.fname_err,expression:"fname_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.fname_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.fname},on:{input:[function(s){s.target.composing||(e.fname=s.target.value)},function(s){return e.resetResponse("fname_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user py-6 px-8"},[e._v("Last Name")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.lname_err,expression:"lname_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.lname_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.lname},on:{input:[function(s){s.target.composing||(e.lname=s.target.value)},function(s){return e.resetResponse("lname_err")}]}})])]):e._e(),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green-1"},[e._v(e._s(e.response.message))])]):e._e()]),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-paper-plane mr-4"}),t("span",[e._v("OK")])])],1)])},d=[],u=t("c152"),v=t("8205"),f=function(e){Object(o["a"])(t,e);var s=Object(l["a"])(t);function t(){var e;return Object(n["a"])(this,t),e=s.apply(this,arguments),e.stage_2=!1,e.email="",e.password="",e.fname="",e.lname="",e.email_err="",e.pass_err="",e.fname_err="",e.lname_err="",e.staticData=[],e}return Object(i["a"])(t,[{key:"send",value:function(){this.resetResponse();var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],s=[{fieldName:"First Name",data:this.fname,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}},{fieldName:"First Name",data:this.lname,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}}],t=this;v["j"].validate(this.stage_2?s:e)&&v["g"].create(this.$refs.send,{action:function(){t.stage_2?u["b"].$form.login({email:t.staticData[0],password:t.staticData[1],first_name:t.fname,last_name:t.lname},2).then((function(e){v["g"].destroy(t.$refs.send)})):(t.staticData=[t.email,t.password],u["b"].$form.login({email:t.email,password:t.password}).then((function(e){v["g"].destroy(t.$refs.send),e.next&&(t.stage_2=!0)})))}});var a=v["j"].getErrors();this.email_err=a["Email"],this.pass_err=a["Password"],this.fname_err=a["First Name"],this.lname_err=a["Last Name"]}},{key:"resetResponse",value:function(e){this[e]&&(this[e]=""),this.response&&u["b"].$form.resetResponse()}}]),t}(m["c"]);Object(c["a"])([Object(m["b"])({required:!0})],f.prototype,"show",void 0),f=Object(c["a"])([Object(m["a"])({computed:{response:function(){return u["b"].$form.response}}})],f);var _=f,h=_,g=(t("044d"),t("2877")),w=Object(g["a"])(h,p,d,!1,null,null,null),b=w.exports,y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle noselect shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-user-add text-center t-blue-grey--2 font-8 mt-0 mb-8 noselect"},[e._v("New Account")]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user py-6 px-8"},[e._v("Username")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.username_err,expression:"username_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.username_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.username},on:{input:[function(s){s.target.composing||(e.username=s.target.value)},function(s){return e.resetResponse("username_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-at py-6 px-8"},[e._v("E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-lock-open-alt py-6 px-8"},[e._v("Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Input your Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})]),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green--1"},[e._v(e._s(e.response.message))])]):e._e()]),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-paper-plane mr-4"}),t("span",[e._v("OK")])])],1)])},C=[],x=function(e){Object(o["a"])(t,e);var s=Object(l["a"])(t);function t(){var e;return Object(n["a"])(this,t),e=s.apply(this,arguments),e.username="",e.email="",e.password="",e.username_err="",e.email_err="",e.pass_err="",e}return Object(i["a"])(t,[{key:"send",value:function(){this.resetResponse();var e=[{fieldName:"Username",data:this.username,rules:{required:!0,string:!0,min:3,max:15,pattern:/^([a-zA-Z]{3,})([0-9])*$/},messages:{pattern:"Username may only contain letters and numbers. Must start with minimum of 3 letters"}},{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],s=this;v["j"].validate(e)&&v["g"].create(this.$refs.send,{action:function(){u["b"].$form.register({username:s.username,email:s.email,password:s.password}).then((function(e){v["g"].destroy(s.$refs.send)}))}});var t=v["j"].getErrors();this.username_err=t["Username"],this.email_err=t["Email"],this.pass_err=t["Password"]}},{key:"resetResponse",value:function(e){this[e]&&(this[e]=""),this.response&&u["b"].$form.resetResponse()}}]),t}(m["c"]);Object(c["a"])([Object(m["b"])({required:!0})],x.prototype,"show",void 0),x=Object(c["a"])([Object(m["a"])({components:{},computed:{response:function(){return u["b"].$form.response}}})],x);var j=x,N=j,k=(t("c7ce"),Object(g["a"])(N,y,C,!1,null,null,null)),O=k.exports,E=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle noselect shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-arrows-cw text-center t-blue-grey--2 font-8 mt-0 mb-8 noselect"},[e._v("Reset Password")]),1===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head py-6 px-8"},[e._v("Your E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter your account email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})])]):e._e(),2===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head py-6 px-8"},[e._v("Enter Code")]),e.code_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.code_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"Enter the code sent to you"},domProps:{value:e.code},on:{input:[function(s){s.target.composing||(e.code=s.target.value)},function(s){return e.resetResponse("code_err")}]}})])]):e._e(),3===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head py-6 px-8"},[e._v("New Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter a new Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})])]):e._e(),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-5 t-green"},[e._v(e._s(e.response.message))])]):e._e()]),t("div",{staticClass:"flex j-c-center"},[2===e.stage?t("button",{staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:function(s){(e.stage=1)&&(e.code="")}}},[t("span",{staticClass:"icon-left-open-big mr-4"}),t("span",{staticClass:"font-5"},[e._v("BACK")])]):e._e(),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-right-open-big mr-4"}),t("span",{staticClass:"font-5"},[e._v("NEXT")])])])],1)])},$=[],R=function(e){Object(o["a"])(t,e);var s=Object(l["a"])(t);function t(){var e;return Object(n["a"])(this,t),e=s.apply(this,arguments),e.stage=1,e.email="",e.password="",e.code="",e.email_err="",e.pass_err="",e.code_err="",e.staticEmail="",e}return Object(i["a"])(t,[{key:"send",value:function(){this.resetResponse();var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}}],s=[{fieldName:"Code",data:this.code,rules:{required:!0}}],t=[{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],a=this;v["j"].validate(1===this.stage?e:2===this.stage?s:t)&&v["g"].create(this.$refs.send,{action:function(){1===a.stage?(a.staticEmail=a.email,u["b"].$reset.send({stage_1:{email:a.email}}).then((function(e){v["g"].destroy(a.$refs.send),e&&2===e.stage&&(a.stage=2)}))):2===a.stage?u["b"].$reset.send({stage_2:{email:a.staticEmail,token:a.code}}).then((function(e){v["g"].destroy(a.$refs.send),e&&3===e.stage&&(a.stage=3)})):u["b"].$reset.send({stage_3:{email:a.staticEmail,password:a.password}}).then((function(e){v["g"].destroy(a.$refs.send)}))}});var r=v["j"].getErrors();this.email_err=r["Email"],this.pass_err=r["Password"],this.code_err=r["Code"]}},{key:"resetResponse",value:function(e){this[e]&&(this[e]=""),this.response&&(this.response.message="")}}]),t}(m["c"]);Object(c["a"])([Object(m["b"])({required:!0})],R.prototype,"show",void 0),R=Object(c["a"])([Object(m["a"])({computed:{response:function(){return u["b"].$reset.response}}})],R);var P=R,S=P,q=(t("307e"),Object(g["a"])(S,E,$,!1,null,null,null)),A=q.exports,F=function(e){Object(o["a"])(t,e);var s=Object(l["a"])(t);function t(){return Object(n["a"])(this,t),s.apply(this,arguments)}return Object(i["a"])(t,[{key:"switchMode",value:function(e){u["b"].$form.resetResponse(),u["b"].$form.mode=e}},{key:"dismiss",value:function(){u["b"].$form.dismiss()}}]),t}(m["c"]);F=Object(c["a"])([Object(m["a"])({components:{Login:b,Register:O,Reset:A},computed:{sysSet:function(){return u["b"].sysSettings},response:function(){return u["b"].$form.response},showModal:function(){return u["b"].$form.status},mode:function(){return u["b"].$form.mode},query:function(){return u["b"].$form.query}}})],F);var H=F,L=H,M=(t("5bef"),Object(g["a"])(L,a,r,!1,null,null,null));s["default"]=M.exports},f122:function(e,s,t){},fe0b:function(e,s,t){}}]);
//# sourceMappingURL=chunk-68f85c96.fa7a78fb.js.map