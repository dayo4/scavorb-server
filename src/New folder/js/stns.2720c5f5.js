(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stns"],{"11da":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Nav shadow-2 md3 lg3 noselect",class:t.collapsed?"Collapsed":""},[t._l(t.tabsList,(function(e){return s("div",{key:e.id,class:t.activeTab=="Tab_"+e.id?"active":"",on:{click:function(s){return t.$emit("tabClicked",e.id)}}},[s("span",{staticClass:"font-6 mr-4",class:e.icon}),s("span",[t._v(t._s(e.name))])])})),s("span",{staticClass:"Handle shadow-4 b1 br2 font-6 t-white bg-blue-grey--2",class:t.collapsed?"icon-left-big":" icon-right-big",on:{click:function(e){t.collapsed=!t.collapsed}}})],2)},a=[],i=s("2b0e"),o=i["a"].extend({props:{tabsList:{required:!0,type:Array},activeTab:{required:!0,type:String}},data:function(){return{collapsed:!0}}}),r=o,c=(s("1a55"),s("2877")),l=Object(c["a"])(r,n,a,!1,null,"37de4ca4",null);e["a"]=l.exports},"1a55":function(t,e,s){"use strict";s("67d9")},2112:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GBLMContainer flex"},[s("div",{staticClass:"MC-ViewArea",class:t.MainCB?t.MainCB:t.noSideNav?"xs12 "+(["home"].includes(t.$route.name)?"":"padded"):"xs12 lg9",attrs:{id:t.ownID?t.ownID:""}},[t._t("default")],2),s("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{directives:[{name:"show",rawName:"v-show",value:!["user-profile","posts"].includes(t.$route.name),expression:"!['user-profile','posts'].includes($route.name)"}],staticClass:"Footer t-blue-grey text-center"},[t._m(0),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"t-blue--3 no-deco",attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"icon-copyright mr-4"},[t._v("2020 scavorb")])])}],r=s("2b0e"),c=s("c152"),l=r["a"].extend({computed:{scrolled:function(){return c["d"].$container.scrolled}}}),u=l,d=(s("f057"),s("2877")),f=Object(d["a"])(u,i,o,!1,null,"66cb1ed5",null),p=f.exports,h=r["a"].extend({components:{Footer:p},props:{noSideNav:{required:!1,type:Boolean,default:!0},ownID:{required:!1,type:String,default:!1},MainCB:{required:!1,type:String},SideCB:{required:!1,type:String}}}),b=h,v=(s("ce0b"),Object(d["a"])(b,n,a,!1,null,null,null));e["a"]=v.exports},"226c":function(t,e,s){"use strict";s("4208")},3102:function(t,e,s){},4208:function(t,e,s){},"661b":function(t,e,s){},"67d9":function(t,e,s){},"8df41":function(t,e,s){"use strict";s("3102")},ce0b:function(t,e,s){"use strict";s("661b")},d00a:function(t,e,s){"use strict";s("d01a")},d01a:function(t,e,s){},d986:function(t,e,s){"use strict";s("db69")},db69:function(t,e,s){},de24:function(t,e,s){"use strict";s("fb2b")},e067:function(t,e,s){},ee09:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Container",{attrs:{ownID:"MC-Settings",noSideNav:!1}},[s("div",{staticClass:"MainView xs12 sm11 md9 flex wrap j-c-center pl-4"},[s("keep-alive",[s(t.activeTab,{tag:"component"})],1)],1),s("VerticalNavigator",{attrs:{tabsList:t.tabsList,activeTab:t.activeTab},on:{tabClicked:t.switchTab}})],1)},a=[],i=(s("caad"),s("2b0e")),o=s("c152"),r=s("2112"),c=s("11da"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Tab xs12 sm11 lg10"},[s("h2",{staticClass:"text-center t-blue-grey--1"},[t._v("MANAGE ACCOUNT INFORMATION")]),s("section",[s("h3",{staticClass:"Header"},[t._v("NAME")]),t.errors.name?s("span",{staticClass:"t-red p-1 my-1"},[t._v(t._s(t.errors.name))]):t._e(),s("div",{staticClass:"my-2"},[s("label",{staticClass:"mr-5",attrs:{for:"first_name"}},[t._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{name:"first_name",type:"text"},domProps:{value:t.first_name},on:{input:[function(e){e.target.composing||(t.first_name=e.target.value)},function(e){t.errors.name=""}]}})]),s("div",{staticClass:"my-2"},[s("label",{staticClass:"mr-5",attrs:{for:"last_name"}},[t._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{name:"last_name",type:"text"},domProps:{value:t.last_name},on:{input:[function(e){e.target.composing||(t.last_name=e.target.value)},function(e){t.errors.name=""}]}})]),s("transition",{attrs:{name:"slide-fade"}},[t.first_name!==t.userData.first_name||t.last_name!==t.userData.last_name?s("button",{staticClass:"bg-pink--3 mt-4 btn",on:{click:t.saveName}},[t._v("Save Name")]):t._e()])],1),s("section",[s("h3",{staticClass:"Header"},[t._v("About")]),t.errors.about?s("span",{staticClass:"t-red p-1 my-1"},[t._v(t._s(t.errors.about))]):t._e(),s("div",[s("div",{ref:"about",attrs:{contenteditable:"true",placeholder:"About you.."},on:{paste:t.plainText,input:t.setAbout}})]),s("transition",{attrs:{name:"slide-fade"}},[""!==t.about&&t.about!==t.userData.about?s("button",{staticClass:"bg-pink--3 mt-4 btn",on:{click:t.saveAbout}},[t._v("Save Changes")]):t._e()])],1),s("section",[s("h3",{staticClass:"Header"},[t._v("Password")]),s("button",{staticClass:"btn",on:{click:function(e){t.changePassword=!t.changePassword}}},[t._v("Change Password")]),t.errors.password?s("span",{staticClass:"t-red p-1 my-2"},[t._v(t._s(t.errors.password))]):t._e(),s("transition",{attrs:{name:"slide-fade"}},[t.changePassword?s("div",{staticClass:"my-2"},[s("label",{staticClass:"mr-5",attrs:{for:"old_password"}},[t._v("Old Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],attrs:{name:"old_password",type:"password",placeholder:"Enter old password"},domProps:{value:t.oldPassword},on:{input:[function(e){e.target.composing||(t.oldPassword=e.target.value)},function(e){t.errors.password=""}]}})]):t._e()]),s("transition",{attrs:{name:"slide-fade"}},[t.changePassword?s("div",{staticClass:"my-2"},[s("label",{staticClass:"mr-5",attrs:{for:"new_password"}},[t._v("New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],attrs:{name:"new_password",type:"password",placeholder:"Enter new password"},domProps:{value:t.newPassword},on:{input:[function(e){e.target.composing||(t.newPassword=e.target.value)},function(e){t.errors.password=""}]}})]):t._e()]),s("transition",{attrs:{name:"slide-fade"}},[t.newPassword.length>=6?s("button",{staticClass:"bg-pink--3 mt-4 btn",on:{click:t.savePassword}},[t._v("Save New Password")]):t._e()])],1),t.user&&10!=t.user.pr?s("div",{staticClass:"flex j-c-between"},[s("button",{staticClass:"btn p-6 shadow-4 my-10",staticStyle:{"background-color":"#bf360c"},on:{click:t.deactivateAccount}},[t._v("Deactivate Account")]),s("button",{staticClass:"btn bg-pink--4 p-6 shadow-4 my-10",on:{click:t.deleteAccount}},[t._v("Delete Account")])]):t._e()])},u=[],d=(s("b0c0"),s("8205")),f=i["a"].extend({data:function(){return{changeNames:!1,changeAbout:!1,changePassword:!1,first_name:"",last_name:"",oldPassword:"",newPassword:"",about:"",errors:{name:"",about:"",password:""}}},computed:{user:function(){return o["b"].user},userData:function(){return o["b"].userData}},methods:{saveName:function(){var t=[{fieldName:"First Name",data:this.first_name,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}},{fieldName:"First Name",data:this.last_name,rules:{required:!0,string:!0,min:2,max:20,pattern:/^[a-zA-Z]$/},message:{pattern:"Name may only contain letters"}}];d["j"].validate(t)&&o["g"].$settings.editName({first_name:this.first_name,last_name:this.last_name});var e=d["j"].getErrors({format:"single"});this.errors.name=e},setAbout:function(t){this.about=t.target.textContent,this.errors.about&&(this.errors.about="")},saveAbout:function(){var t=[{fieldName:"About",data:this.about,rules:{required:!0,string:!0,min:15,max:1e3}}];d["j"].validate(t)&&o["g"].$settings.editAbout({about:this.about});var e=d["j"].getErrors({format:"single"});this.errors.about=e},savePassword:function(){var t=this,e=[{fieldName:"Old Password",data:this.oldPassword,rules:{required:!0,string:!0,min:8,max:50}},{fieldName:"New Password",data:this.newPassword,rules:{required:!0,string:!0,min:8,max:50}}];d["j"].validate(e)&&o["g"].$settings.changePassword({old_password:this.oldPassword,new_password:this.newPassword}).then((function(e){e&&(t.oldPassword="",t.newPassword="",t.changePassword=!1)}));var s=d["j"].getErrors({format:"single"});this.errors.password=s},deactivateAccount:function(){Object(d["b"])({header:"Deactivate Account",message:"<b>Are you sure you want to deactivate your Account?</b>",type:"danger",onConfirm:function(){return o["g"].$settings.deactivateAccount().then((function(t){if(t)return o["b"].$form.logout(),t}))}})},deleteAccount:function(){Object(d["b"])({header:"Delete Account",message:"Your account will be parmanetly deleted.\n\t\t\t\t<br>\n\t\t\t\t\t<b>Are you sure you want to delete your Account?</b>",type:"danger",onConfirm:function(){return o["g"].$settings.deleteAccount().then((function(t){if(t)return o["b"].$form.logout(),t}))}})},plainText:function(t){d["c"].pasteAsPlainText(t)}},mounted:function(){this.first_name=this.userData.first_name,this.last_name=this.userData.last_name,this.$refs.about.textContent=this.about=this.userData.about}}),p=f,h=(s("d00a"),s("2877")),b=Object(h["a"])(p,l,u,!1,null,"4e6adfd2",null),v=b.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Tab xs12 sm11 lg10"},[s("transition",{attrs:{name:"slide-fade"}},[t.selectedProject||t.createNew?t._e():s("div",{staticClass:"Body"},[s("h2",{staticClass:"text-center t-blue-grey--1"},[t._v("MANAGE PORTFOLIO")]),s("button",{staticClass:"bg-pink--3 mt-4 btn mb-7",on:{click:function(e){t.createNew=!0}}},[t._v("Add New Project")]),s("h3",{staticClass:"Header"},[t._v("LIST OF PROJECTS/WORKS")]),0===t.projects.length?s("div",{staticClass:"t-blue-grey text-center bold-3 font-9 mt-8 letter-space-1"},[t._v("Nothing to show in this filter")]):t._e(),s("div",{staticClass:"mt-5"},[s("Dropdown",{staticClass:"Options icon-search-2 btn",attrs:{ownID:"filt",text:"Filter: "+t.filter,optPos:{left:50}},scopedSlots:t._u([{key:"default",fn:function(){return[s("a",{on:{click:function(e){return t.filterBy("All",{})}}},[t._v("All")]),s("a",{on:{click:function(e){return t.filterBy("Active",{active:!0})}}},[t._v("Active")]),s("a",{on:{click:function(e){return t.filterBy("Inactive",{active:!1})}}},[t._v("Inactive")])]},proxy:!0}],null,!1,2399606079)}),t._l(t.projects,(function(e){return s("div",{key:e.id,staticClass:"ProjList flex mt-5",on:{click:function(s){return t.openProject(e.id)}}},[s("div",{class:e.active?"bg-green-2":"bg-red-2"}),s("div",{staticClass:"flex a-i-center font-6 p-3 t-blue-grey"},[t._v(t._s(e.title))])])}))],2)])]),s("transition",{attrs:{name:"slide-fade"}},[t.createNew||t.selectedProject?s("Editor",{attrs:{projectToView:t.selectedProject},on:{back:t.back}}):t._e()],1)],1)},g=[],w=(s("4de4"),s("d3b7"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticClass:"text-center t-blue-grey--1"},[t._v(t._s(t.projectToView?"EDIT":"NEW")+" PORTFOLIO PROJECT")]),s("h3",{staticClass:"flex a-i-center shadow-1 j-c-between bg-pink-1 t-white font-7 p-2 noselect br2"},[s("span",{staticClass:"font-5"},[t._v(t._s(t.projectToView?"EDIT PROJECT":"CREATE NEW"))]),s("div",{staticClass:"Actions flex"},[s("div",{staticClass:"labeled-action",on:{click:function(e){return t.$emit("back")}}},[s("span",{staticClass:"icon-left-open-big font-10"}),s("span",[t._v("Back")])])])]),t.projectToView?s("section",[s("h3",{staticClass:"Header"},[t._v("CHANGE STATUS")]),s("span",{staticClass:"icon-info bg-blue-5 p-3"},[t._v('Only active projects will be visible in your profile. New projects are "Active" by default.')]),s("Dropdown",{staticClass:"Dropdomn icon-down-open btn t-white bg-trans-3 font-6 p-4 mt-4",attrs:{ownID:"id",text:t.active?"Active":"Inactive",pos:{type:"relative",top:0,right:0}},scopedSlots:t._u([{key:"default",fn:function(){return[s("a",[s("span",{on:{click:function(e){return t.changeStatus(1)}}},[t._v("Active")])]),s("a",[s("span",{on:{click:function(e){return t.changeStatus(0)}}},[t._v("Inactive")])])]},proxy:!0}],null,!1,2288476948)})],1):t._e(),s("section",[s("h3",{staticClass:"Header"},[t._v("PROJECT/WORK TITLE")]),t.errors&&t.errors["Title"]?s("span",{staticClass:"t-red p-1 my-1"},[t._v(t._s(t.errors["Title"]))]):t._e(),s("div",{ref:"titleInput",staticClass:"bg-white br4 p-5",attrs:{contenteditable:"true",placeholder:"Enter Post Title"},on:{input:t.setTitle,paste:t.plainText}})]),s("section",[s("h3",{staticClass:"Header"},[t._v("PROJECT/WORK DETAILS")]),s("div",{staticClass:"icon-info bg-blue-5 p-3 mb-2"},[t._v("Full detail of the project or work experience. You can edit or design as much as you want taking advantage of the editor. You can embed link to videos but images will be discarded.")]),t.errors&&t.errors["Detail"]?s("span",{staticClass:"t-red p-1 my-1"},[t._v(t._s(t.errors["Detail"]))]):t._e(),s("TextEditor",{attrs:{initialContent:t.initialDetail},on:{contentUpdated:t.setDetail}}),s("div",{staticClass:"p-3"},[t._v("Count:"+t._s(t.charCount))])],1),s("div",{staticClass:"flex j-c-between"},[s("div",{staticClass:"flex"},[s("button",{staticClass:"bg-pink--3 mt-4 mr-5 btn",on:{click:t.saveChanges}},[t._v("Save Project")]),s("button",{staticClass:"bg-cyan--3 mt-4 btn",on:{click:function(e){return t.$emit("back")}}},[t._v("Back")])]),t.projectToView?s("button",{staticClass:"bg-red--3 mt-4 mr-5 btn",on:{click:function(e){return t.deleteProject(t.projectToView.id)}}},[t._v("Delete Project")]):t._e()])])}),_=[],C=i["a"].extend({components:{TextEditor:function(){return s.e("txd").then(s.bind(null,"f426"))},Dropdown:function(){return s.e("chunk-c9bb3e9c").then(s.bind(null,"5c81"))}},props:{projectToView:{required:!1,type:Object}},data:function(){return{initialDetail:this.projectToView?this.projectToView.detail:"",title:"",detail:"",active:0,charCount:0,errors:null}},computed:{editorConfig:function(){return o["g"].$Portfolio.editorConfig}},methods:{setTitle:function(t){this.title=t.target.textContent,this.errors&&(this.errors["Title"]="")},setDetail:function(t){this.detail=t,this.charCount=t.length,this.errors&&(this.errors["Detail"]="")},validate:function(){var t=[{fieldName:"Title",data:d["j"].sanitize(this.title),rules:{required:!0,string:!0,min:3,max:100}},{fieldName:"Detail",data:this.detail,rules:{required:!0,min:100}}];return d["j"].validate(t)},saveChanges:function(){var t=this;this.validate()&&(this.projectToView?o["g"].$Portfolio.update({id:this.projectToView.id,title:this.title,detail:this.detail,active:this.active}).then((function(e){e&&t.$emit("back",!0)})):o["g"].$Portfolio.create({title:this.title,detail:this.detail}).then((function(e){e&&t.$emit("back",!0)}))),this.errors=d["j"].getErrors()},changeStatus:function(t){this.active=t},deleteProject:function(t){var e=this;Object(d["b"])({header:"Delete Project",message:'<b class="t-grey--2">Are You Sure You Want To delete this Project?</b>',type:"danger",onConfirm:function(){return new Promise((function(s){o["g"].$Portfolio.delete(t).then((function(t){t&&(e.$emit("back",!0),s(t))}))}))}})},plainText:function(t){d["c"].pasteAsPlainText(t)}},mounted:function(){this.projectToView&&(this.active=this.projectToView.active,this.title=this.$refs.titleInput.textContent=this.projectToView.title)}}),P=C,y=(s("8df41"),Object(h["a"])(P,w,_,!1,null,"937f0af8",null)),x=y.exports,A=i["a"].extend({components:{Editor:x,Dropdown:function(){return s.e("chunk-c9bb3e9c").then(s.bind(null,"5c81"))}},data:function(){return{createNew:!1,selectedProject:null,filter:"All",query:{user_id:o["b"].user.id,filter:{}}}},computed:{projects:function(){return o["g"].$Portfolio.projects_B}},methods:{load:function(){o["g"].$Portfolio.fetchAll(this.query)},filterBy:function(t,e){this.filter=t,this.query.filter=e,o["g"].$Portfolio.fetchAll(this.query)},openProject:function(t){var e=this;o["g"].$Portfolio.fetch(t).then((function(t){t&&(e.selectedProject=t)}))},back:function(t){this.selectedProject=null,this.createNew=!1,t&&this.load()}}}),k=A,T=(s("de24"),Object(h["a"])(k,m,g,!1,null,"5bc86bb2",null)),j=T.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Tab xs12 sm11 lg10"},[s("h2",{staticClass:"text-center t-blue-grey--1"},[t._v("MANAGE POSTS SETTINGS")]),s("section",[s("h3",{staticClass:"Header"},[t._v("YOUR POSTS")]),s("Dropdown",{staticClass:"Options icon-search-2 btn mb-7",attrs:{ownID:"filt",text:"Filter: "+t.filter,optPos:{left:50}},scopedSlots:t._u([{key:"default",fn:function(){return[s("a",{on:{click:function(e){return t.filterBy("All",{})}}},[t._v("All")]),s("a",{on:{click:function(e){return t.filterBy("Published",{published:!0})}}},[t._v("Published")]),s("a",{on:{click:function(e){return t.filterBy("Not Published",{published:!1})}}},[t._v("Not Published")]),s("a",{on:{click:function(e){return t.filterBy("Archived",{archived:!0})}}},[t._v("Archived")])]},proxy:!0}])}),s("transition",{attrs:{name:"slide-down-fade"}},[s("section",{staticClass:"TopActions flex j-c-between noselect mx-4"},[s("span",{staticClass:"btn cyan-gradient-btn",on:{click:t.selectAll}},[t._v(t._s(t.selectedPosts.length>2?"UnSelect All":"Select All"))]),s("Dropdown",{staticClass:"icon-hammer btn pink-gradient-btn font-4 bg-trans-2",attrs:{ownID:"actions",text:"Actions",pos:{top:0,right:0}},scopedSlots:t._u([{key:"default",fn:function(){return[s("a",{on:{click:function(e){return t.deletePosts()}}},[s("span",{staticClass:"icon-trash-empty"}),s("span",[t._v("Delete")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.changeActions("published",!1)||t.changeActions("archived",!0),expression:"changeActions('published', false) || changeActions('archived', true)"}],on:{click:t.publish}},[s("span",{staticClass:"icon-angle-double-up"}),s("span",[t._v("Publish")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.changeActions("published",!0),expression:"changeActions('published', true)"}],on:{click:function(e){return t.publish(!1)}}},[s("span",{staticClass:"icon-angle-double-down"}),s("span",[t._v("Unpublish")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.changeActions("published",!0)||t.changeActions("published",!1),expression:"changeActions('published', true) || changeActions('published',false)"}],on:{click:t.archive}},[s("span",{staticClass:"icon-archive"}),s("span",[t._v("Archive")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.changeActions("archived",!0),expression:"changeActions('archived', true)"}],on:{click:function(e){return t.archive(!1)}}},[s("span",{staticClass:"icon-ccw"}),s("span",[t._v("Unarchive")])])]},proxy:!0}])})],1)]),t.posts.length>0?s("section",{staticClass:"PostsWrapper"},t._l(t.posts,(function(e){return s("article",{key:e.id,staticClass:"Post flex a-i-center px-4"},[s("div",{staticClass:"PostImage flex a-i-center"},[s("img",{attrs:{src:t.$postBaseUrl+e.img,draggable:"false"}})]),s("div",{staticClass:"Details my-1 mx-3"},[s("h5",{staticClass:"m-0 font-3"},[t._v(t._s(e.title))])]),s("span",{staticClass:"CheckBox",class:t.checkBox(e.id)?"icon-check-1":"",on:{click:function(s){return t.selectPost(e.id)}}}),s("Dropdown",{staticClass:"Action btn icon-ellipsis-vert font-8 bg-trans-2",attrs:{ownID:e.id,pos:{type:"absolute",right:10}},scopedSlots:t._u([{key:"default",fn:function(){return[s("router-link",{attrs:{to:{path:"/posts-preview/"+e.slug}}},[s("span",{staticClass:"icon-eye"}),s("span",[t._v("View")])]),s("a",{on:{click:function(s){return t.editPost(e.slug)}}},[s("span",{staticClass:"icon-edit"}),s("span",[t._v("Edit")])]),s("a",{on:{click:function(s){return t.deletePosts(e.id)}}},[s("span",{staticClass:"icon-plus-1"}),s("span",[t._v("Delete")])])]},proxy:!0}],null,!0)})],1)})),0):s("section",{staticClass:"t-blue-grey text-center bold-3 font-9 mt-8 letter-space-1"},[t._v("You Currently Have No Posts In This Filter")])],1)])},$=[],D=(s("4160"),s("c975"),s("a434"),s("2532"),s("159b"),i["a"].extend({components:{Dropdown:function(){return s.e("chunk-c9bb3e9c").then(s.bind(null,"5c81"))}},data:function(){return{selectedPosts:[],filter:"All",query:{filter:{}}}},computed:{user:function(){return o["b"].user},posts:function(){return o["f"].$settings.posts}},methods:{filterBy:function(t,e){this.filter=t,this.query.filter=e,o["f"].$settings.fetchAll(this.query,!0)},changeActions:function(t,e){return this.query.filter[t]===e},selectPost:function(t){this.selectedPosts.includes(t)?this.selectedPosts.splice(this.selectedPosts.indexOf(t),1):this.selectedPosts.push(t)},checkBox:function(t){if(this.selectedPosts.includes(t))return!0},selectAll:function(){var t=this;this.selectedPosts.length<2?this.posts.forEach((function(e){t.selectedPosts.includes(e.id)||t.selectedPosts.push(e.id)})):this.selectedPosts=[]},deletePosts:function(t){var e=this;t?o["f"].$settings.delete({postsIds:[t]}).then((function(){o["f"].$settings.fetchAll(e.query,!0),e.selectedPosts=[]})):this.selectedPosts.length>0?o["f"].$settings.delete({postsIds:this.selectedPosts}).then((function(){o["f"].$settings.fetchAll(e.query,!0),e.selectedPosts=[]})):d["f"].error("No Posts selected")},editPost:function(t){var e=this;o["f"].$compose.fetch({slug:t},!0).then((function(t){t&&e.$router.push({path:"/compose",query:{mode:"edit"}})}))},publish:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.selectedPosts.length>0?o["f"].$settings.publish({postsIds:this.selectedPosts,published:{value:!!e}}).then((function(){o["f"].$settings.fetchAll(t.query,!0),t.selectedPosts=[]})):d["f"].error("No Posts selected")},archive:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.selectedPosts.length>0?o["f"].$settings.archive({postsIds:this.selectedPosts,archived:{value:!!e}}).then((function(){o["f"].$settings.fetchAll(t.query,!0),t.selectedPosts=[]})):d["f"].error("No Posts selected")}}})),E=D,O=(s("d986"),Object(h["a"])(E,N,$,!1,null,"641773a9",null)),S=O.exports,I=i["a"].extend({components:{Container:r["a"],VerticalNavigator:c["a"],Tab_1:v,Tab_3:j,Tab_4:S},beforeRouteEnter:function(t,e,s){s((function(e){t.query.tab&&e.switchTab(t.query.tab),e.activeTab="Tab_1"}))},data:function(){return{activeTab:"Tab_1",sideBar:!1,tabsList:[{id:1,name:"Profile Information",icon:"icon-user"}]}},computed:{user:function(){return o["b"].user}},methods:{switchTab:function(t){this.activeTab="Tab_"+t,3===t?o["g"].$Portfolio.fetchAll({user_id:o["b"].user.id,filter:{}}):4===t&&o["f"].$settings.fetchAll({filter:{}},!0)}},mounted:function(){var t,e=[{id:3,name:"Portfolio Setup",icon:"icon-briefcase-1"},{id:4,name:"Manage Post",icon:"icon-doc-text"}];[9,10].includes(this.user.pr)&&(t=this.tabsList).push.apply(t,e)}}),q=I,B=(s("226c"),Object(h["a"])(q,n,a,!1,null,"be9be6fc",null));e["default"]=B.exports},f057:function(t,e,s){"use strict";s("e067")},fb2b:function(t,e,s){}}]);