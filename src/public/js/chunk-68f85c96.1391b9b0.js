(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f85c96"],{"044d":function(e,s,t){"use strict";t("25c8")},"25c8":function(e,s,t){},"307e":function(e,s,t){"use strict";t("f122")},"5bef":function(e,s,t){"use strict";t("9ab9")},"9ab9":function(e,s,t){},c7ce:function(e,s,t){"use strict";t("fe0b")},df0e:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("transition",{attrs:{name:"slide-fade"}},[e.showModal?t("div",{staticClass:"AuthModal noselect"},[t("h3",{staticClass:"Head flex a-i-center j-c-between bg-white t-blue-grey font-7 p-4 my-0 noselect"},[t("span",{staticClass:"Header text-up font-6"},[e._v("Login or Create Account")]),t("div",{staticClass:"labeled-action px-2",on:{click:e.dismiss}},[t("span",{staticClass:"icon-off t-pink-2"}),t("span",{staticClass:"font-2"},[e._v("Close")])])]),t("transition",{attrs:{name:"slide-fade"}},[e.query.showQuery?t("h4",{staticClass:"bg-light-blue-5 t-light-blue p-4 my-0"},[t("span",{staticClass:"icon-info mr-2 t-blue"}),e._v(" "+e._s(e.query.message?e.query.message:"Sorry! You have to login to access this section.")+" ")]):e._e()]),t("hr",{staticClass:"my-2 shadow-10"}),t("div",{staticClass:"FormCont flex j-c-center bg-white h-full"},[t("div",{staticClass:"Pillar xs11 sm9 md7 lg5"},[t("div",{staticClass:"Logo logo-base logo-small shadow-5"},[t("span",[t("span",[t("b",[e._v("S")])]),t("span")]),t("span")]),t("div",{staticClass:"Title flex text-center noselect"},[t("h3",[e._v("SCAVORB")])]),t("div",{staticClass:"text-right mb-5"},[1===e.mode?t("b",{staticClass:"font-6 t-blue-grey bg-grey-4 p-2 br3 text-right cursor-pointer",on:{click:function(s){return e.switchMode(3)}}},[e._v("Forgot password?")]):e._e()]),e.sysSet.allow_new_reg&&1===e.mode?t("div",{staticClass:"flex wrap a-i-center mb-5 t-blue-grey-1"},[t("span",{staticClass:"mr-3 bold-2"},[e._v("Dont have an account yet?")]),t("span",{staticClass:"Alternate bold-4 shadow-1 icon-user-add noselect",on:{click:function(s){return e.switchMode(2)}}},[e._v("Create New Account")])]):e._e(),1!=e.mode?t("div",{staticClass:"flex wrap a-i-center mb-5 t-blue-grey-1"},[t("span",{staticClass:"mr-3 bold-2"},[e._v(e._s(3===e.mode?"Oh! I just remembered":"Already have an account?"))]),t("span",{staticClass:"Alternate bold-4 shadow-1 icon-login noselect",on:{click:function(s){return e.switchMode(1)}}},[e._v("Login")])]):e._e(),t("Login",{attrs:{show:1===e.mode}}),t("Register",{attrs:{show:2===e.mode}}),t("Reset",{attrs:{show:3===e.mode}})],1)])],1):e._e()])},r=[],n=t("2b0e"),i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-login text-center t-blue-grey--2 font-8 mt-0 mb-8"},[e._v("Login")]),e.stage_2?e._e():t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-at"},[e._v("E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1",class:e.email_err?"vibrate":""},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-lock-open-alt"},[e._v("Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1",class:e.pass_err?"vibrate":""},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Input your Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})])]),e.stage_2?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user"},[e._v("First Name")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.fname_err,expression:"fname_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.fname_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.fname},on:{input:[function(s){s.target.composing||(e.fname=s.target.value)},function(s){return e.resetResponse("fname_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user"},[e._v("Last Name")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.lname_err,expression:"lname_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.lname_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.lname},on:{input:[function(s){s.target.composing||(e.lname=s.target.value)},function(s){return e.resetResponse("lname_err")}]}})])]):e._e(),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green-1"},[e._v(e._s(e.response.message))])]):e._e()]),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-paper-plane mr-4"}),t("span",[e._v("OK")])])],1)])},o=[],l=t("c152"),c=t("8205"),m=n["a"].extend({props:{show:{required:!0,type:Boolean}},data:function(){return{stage_2:!1,email:"",password:"",fname:"",lname:"",email_err:"",pass_err:"",fname_err:"",lname_err:"",staticData:[]}},computed:{response:function(){return l["b"].$form.response}},methods:{send:function(){this.resetResponse();var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],s=[{fieldName:"First Name",data:this.fname,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}},{fieldName:"First Name",data:this.lname,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}}],t=this,a=this.$refs.send;c["j"].validate(this.stage_2?s:e)&&c["g"].create(a,{action:function(){t.stage_2?l["b"].$form.login({email:t.staticData[0],password:t.staticData[1],first_name:t.fname,last_name:t.lname},2).then((function(e){c["g"].destroy(a)})):(t.staticData=[t.email,t.password],l["b"].$form.login({email:t.email,password:t.password}).then((function(e){c["g"].destroy(a),e.next&&(t.stage_2=!0)})))}});var r=c["j"].getErrors();this.email_err=r["Email"],this.pass_err=r["Password"],this.fname_err=r["First Name"],this.lname_err=r["Last Name"]},resetResponse:function(e){this[e]&&(this[e]=""),this.response&&l["b"].$form.resetResponse()}}}),d=m,p=(t("044d"),t("2877")),u=Object(p["a"])(d,i,o,!1,null,null,null),v=u.exports,f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-user-add text-center t-blue-grey--2 font-8 mt-0 mb-8 noselect"},[e._v("New Account")]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-user"},[e._v("Username")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.username_err,expression:"username_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.username_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Input your username"},domProps:{value:e.username},on:{input:[function(s){s.target.composing||(e.username=s.target.value)},function(s){return e.resetResponse("username_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-at"},[e._v("E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Input your email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})]),t("div",{staticClass:"Section"},[t("span",{staticClass:"Head icon-lock-open-alt"},[e._v("Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Input your Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})]),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-4 t-green--1"},[e._v(e._s(e.response.message))])]):e._e()]),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-paper-plane mr-4"}),t("span",[e._v("OK")])])],1)])},_=[],g=n["a"].extend({props:{show:{required:!0,type:Boolean}},data:function(){return{username:"",email:"",password:"",username_err:"",email_err:"",pass_err:""}},computed:{response:function(){return l["b"].$form.response}},methods:{send:function(){this.resetResponse();var e=[{fieldName:"Username",data:this.username,rules:{required:!0,string:!0,min:3,max:15,pattern:/^([a-zA-Z]{3,})([0-9])*$/},messages:{pattern:"Username may only contain letters and numbers. Must start with minimum of 3 letters"}},{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}},{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],s=this,t=this.$refs.send;c["j"].validate(e)&&c["g"].create(t,{action:function(){l["b"].$form.register({username:s.username,email:s.email,password:s.password}).then((function(e){c["g"].destroy(t)}))}});var a=c["j"].getErrors();this.username_err=a["Username"],this.email_err=a["Email"],this.pass_err=a["Password"]},resetResponse:function(e){this[e]&&(this[e]=""),this.response&&l["b"].$form.resetResponse()}}}),h=g,w=(t("c7ce"),Object(p["a"])(h,f,_,!1,null,null,null)),b=w.exports,C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"GenFormWrapper py-4 shadow-12 bg-cyan--3"},[t("div",{staticClass:"GenFormStyle shadow-12 bg-white py-8 px-5",on:{keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.send(s)}}},[t("h3",{staticClass:"icon-arrows-cw text-center t-blue-grey--2 font-8 mt-0 mb-8 noselect"},[e._v("Reset Password")]),1===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head"},[e._v("Your E-mail")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.email_err,expression:"email_err"}],staticClass:"Error t-red-1"},[e._v(e._s(e.email_err))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Enter your account email"},domProps:{value:e.email},on:{input:[function(s){s.target.composing||(e.email=s.target.value)},function(s){return e.resetResponse("email_err")}]}})])]):e._e(),2===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head"},[e._v("Enter Code")]),e.code_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.code_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"Enter the code sent to you"},domProps:{value:e.code},on:{input:[function(s){s.target.composing||(e.code=s.target.value)},function(s){return e.resetResponse("code_err")}]}})])]):e._e(),3===e.stage?t("section",{staticClass:"StageWrapper"},[t("div",{staticClass:"Section"},[t("span",{staticClass:"Head"},[e._v("New Password")]),e.pass_err?t("span",{staticClass:"Error t-red-1"},[e._v(e._s(e.pass_err))]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Enter a new Password"},domProps:{value:e.password},on:{input:[function(s){s.target.composing||(e.password=s.target.value)},function(s){return e.resetResponse("pass_err")}]}})])]):e._e(),t("transition",{attrs:{name:"expand"}},[e.response.message?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"Alert p-3 b1",class:e.response.error?"bg-pink-5 t-red-1":"bg-lime-5 t-green"},[e._v(e._s(e.response.message))])]):e._e()]),t("div",{staticClass:"flex j-c-center"},[2===e.stage?t("button",{staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:function(s){(e.stage=1)&&(e.code="")}}},[t("span",{staticClass:"icon-left-open-big mr-4"}),t("span",{staticClass:"font-5"},[e._v("BACK")])]):e._e(),t("button",{ref:"send",staticClass:"btn cyan-gradient-btn shadow-5 font-7 br4 mt-5 m-auto noselect",on:{click:e.send}},[t("span",{staticClass:"icon-right-open-big mr-4"}),t("span",{staticClass:"font-5"},[e._v("NEXT")])])])],1)])},y=[],x=n["a"].extend({props:{show:{required:!0,type:Boolean}},data:function(){return{stage:1,email:"",password:"",code:"",email_err:"",pass_err:"",code_err:"",staticEmail:""}},computed:{response:function(){return l["b"].$reset.response}},methods:{send:function(){this.resetResponse();var e=[{fieldName:"Email",data:this.email,rules:{required:!0,email:!0}}],s=[{fieldName:"Code",data:this.code,rules:{required:!0}}],t=[{fieldName:"Password",data:this.password,rules:{required:!0,string:!0,min:8,max:50}}],a=this,r=this.$refs.send;c["j"].validate(1===this.stage?e:2===this.stage?s:t)&&c["g"].create(r,{action:function(){1===a.stage?(a.staticEmail=a.email,l["b"].$reset.send({stage_1:{email:a.email}}).then((function(e){c["g"].destroy(r),e&&2===e.stage&&(a.stage=2)}))):2===a.stage?l["b"].$reset.send({stage_2:{email:a.staticEmail,token:a.code}}).then((function(e){c["g"].destroy(r),e&&3===e.stage&&(a.stage=3)})):l["b"].$reset.send({stage_3:{email:a.staticEmail,password:a.password}}).then((function(e){c["g"].destroy(r)}))}});var n=c["j"].getErrors();this.email_err=n["Email"],this.pass_err=n["Password"],this.code_err=n["Code"]},resetResponse:function(e){this[e]&&(this[e]=""),this.response&&(this.response.message="")}}}),N=x,E=(t("307e"),Object(p["a"])(N,C,y,!1,null,null,null)),k=E.exports,$=n["a"].extend({components:{Login:v,Register:b,Reset:k},computed:{sysSet:function(){return l["b"].sysSettings},response:function(){return l["b"].$form.response},showModal:function(){return l["b"].$form.status},mode:function(){return l["b"].$form.mode},query:function(){return l["b"].$form.query}},methods:{switchMode:function(e){l["b"].$form.resetResponse(),l["b"].$form.mode=e},dismiss:function(){l["b"].$form.dismiss()}}}),R=$,P=(t("5bef"),Object(p["a"])(R,a,r,!1,null,null,null));s["default"]=P.exports},f122:function(e,s,t){},fe0b:function(e,s,t){}}]);