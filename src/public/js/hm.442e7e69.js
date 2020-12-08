(window[ "webpackJsonp" ] = window[ "webpackJsonp" ] || []).push([ [ "hm" ], { "138e": function (e, t, s) { "use strict"; var a = function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("section", { staticClass: "flex j-c-center" }, [ s("div", { staticClass: "GenFormStyle xs11 sm9 md7 z-index-1 noselect" }, [ e._m(0), s("div", { staticClass: "Section" }, [ s("span", { staticClass: "Head" }, [ e._v("Name") ]), s("span", { directives: [ { name: "show", rawName: "v-show", value: e.name_err, expression: "name_err" } ], staticClass: "Error t-red-1" }, [ e._v(e._s(e.name_err)) ]), s("input", { directives: [ { name: "model", rawName: "v-model", value: e.name, expression: "name" } ], attrs: { type: "text", placeholder: "Input your full name" }, domProps: { value: e.name }, on: { input: [ function (t) { t.target.composing || (e.name = t.target.value) }, function (t) { e.name_err = "" } ] } }) ]), s("div", { staticClass: "Section" }, [ s("span", { staticClass: "Head" }, [ e._v("E-mail") ]), e.email_err ? s("span", { staticClass: "Error t-red-1" }, [ e._v(e._s(e.email_err)) ]) : s("i", { staticClass: "font-2" }, [ e._v("Please ensure your E-mail is correct!") ]), s("input", { directives: [ { name: "model", rawName: "v-model", value: e.email, expression: "email" } ], attrs: { type: "email", placeholder: "Input your email" }, domProps: { value: e.email }, on: { input: [ function (t) { t.target.composing || (e.email = t.target.value) }, function (t) { e.email_err = "" } ] } }) ]), s("div", { staticClass: "Section" }, [ s("span", { staticClass: "Head" }, [ e._v("Subject") ]), s("span", { directives: [ { name: "show", rawName: "v-show", value: e.subj_err, expression: "subj_err" } ], staticClass: "Error t-red-1" }, [ e._v(e._s(e.subj_err)) ]), s("input", { directives: [ { name: "model", rawName: "v-model", value: e.subject, expression: "subject" } ], attrs: { type: "text", placeholder: "Enter subject" }, domProps: { value: e.subject }, on: { input: [ function (t) { t.target.composing || (e.subject = t.target.value) }, function (t) { e.subj_err = "" } ] } }) ]), s("div", { staticClass: "Section" }, [ s("span", { staticClass: "Head" }, [ e._v("Your Message") ]), s("span", { directives: [ { name: "show", rawName: "v-show", value: e.msg_err, expression: "msg_err" } ], staticClass: "Error t-red-1" }, [ e._v(e._s(e.msg_err)) ]), s("div", { ref: "msgInput", staticClass: "TextArea bg-white font-5 br2 p-7 mt-2", attrs: { contenteditable: "true", placeholder: "Type your message" }, on: { input: e.setMsg } }) ]), s("transition", { attrs: { name: "expand" } }, [ s("div", { directives: [ { name: "show", rawName: "v-show", value: e.showCaptcha, expression: "showCaptcha" } ], staticClass: "mt-2" }, [ s("i", [ e._v("Please check the reCaptcha checkbox below") ]), s("div", { ref: "reCaptcha" }) ]) ]), s("transition", { attrs: { name: "expand" } }, [ e.success || e.error ? s("div", { staticClass: "mt-5" }, [ s("div", { staticClass: "Alert p-3 b1", class: e.error ? "bg-pink-5 t-red-1" : "bg-lime-4 t-green-1" }, [ e._v(e._s(e.success || e.error)) ]) ]) : e._e() ]), s("button", { ref: "send", staticClass: "btn cyan-gradient-btn shadow-5 font-5 br4 mt-5 m-auto noselect", on: { click: e.send } }, [ s("span", { staticClass: "icon-forward mr-3" }), s("span", [ e._v("Send Mail") ]) ]) ], 1) ]) }, i = [ function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("section", { staticClass: "TopInfo bg-blue-5 p-3 mb-7 no-deco" }, [ s("div", [ e._v("Quickly send the detail of your request using the form below or talk to us through other mediums here") ]), s("div", { staticClass: "flex a-i-center j-c-center font-12" }, [ s("a", { staticClass: "icon-mail-alt t-pink--3", attrs: { title: "e-mail", href: "mailto:scavorb@gmail.com" } }), s("a", { staticClass: "icon-whatsapp t-green--1", attrs: { title: "whatsapp", href: "https://wa.me/message/3NSQPMZJFTDHL1", target: "_blank" } }) ]) ]) } ], n = (s("b0c0"), s("2b0e")), r = s("c152"), o = s("8205"), c = n[ "a" ].extend({ data: function () { return { name: "", email: "", subject: "", msg: "", name_err: "", email_err: "", subj_err: "", msg_err: "", showCaptcha: !1 } }, computed: { error: { get: function () { return r[ "e" ].$mailer.error }, set: function (e) { return r[ "e" ].$mailer.error = e } }, success: { get: function () { return r[ "e" ].$mailer.success }, set: function (e) { return r[ "e" ].$mailer.success = e } } }, methods: { setMsg: function (e) { this.msg = e.target.textContent, this.msg_err && (this.msg_err = "") }, send: function () { this.validate() && (this.showCaptcha = !0) }, validate: function () { var e = [ { fieldName: "Email", data: this.email, rules: { required: !0, email: !0 } }, { fieldName: "Name", data: this.name, rules: { required: !0, string: !0, min: 3, max: 50 } }, { fieldName: "Subject", data: this.subject, rules: { required: !0, string: !0, min: 3, max: 100 } }, { fieldName: "Message", data: this.msg, rules: { required: !0, string: !0, min: 20, max: 4e3 } } ]; if (o[ "j" ].validate(e)) return !0; var t = o[ "j" ].getErrors(); this.email_err = t[ "Email" ], this.name_err = t[ "Name" ], this.subj_err = t[ "Subject" ], this.msg_err = t[ "Message" ] } }, mounted: function () { var e = this, t = this; "undefined" !== typeof grecaptcha && grecaptcha.ready((function () { grecaptcha.render(e.$refs.reCaptcha, { sitekey: "6LdDQ9MZAAAAAAXOm_j-i-gaGUjqzNcIDDDyAXzw", "error-callback": function (e) { t.error = e }, callback: function (e) { o[ "g" ].create(t.$refs.send, { icon: "", action: function () { r[ "e" ].$mailer.send({ name: t.name, email: t.email, subject: t.subject, message: t.msg, token: e }).then((function (e) { o[ "g" ].destroy(t.$refs.send), grecaptcha.reset(), t.showCaptcha = !1, e && (t.name = t.email = t.subject = t.msg = "", t.$refs.msgInput.textContent = "") })) } }) } }) })) }, destroyed: function () { this.error = this.success = "" } }), l = c, u = (s("45b4"), s("2877")), d = Object(u[ "a" ])(l, a, i, !1, null, null, null); t[ "a" ] = d.exports }, 2112: function (e, t, s) { "use strict"; var a = function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("div", { staticClass: "GBLMContainer flex" }, [ s("div", { staticClass: "MC-ViewArea", class: e.MainCB ? e.MainCB : e.noSideNav ? "xs12 " + ([ "home" ].includes(e.$route.name) ? "" : "padded") : "xs12 lg9", attrs: { id: e.ownID ? e.ownID : "" } }, [ e._t("default") ], 2), s("Footer") ], 1) }, i = [], n = function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("footer", { directives: [ { name: "show", rawName: "v-show", value: ![ "user-profile", "posts" ].includes(e.$route.name), expression: "!['user-profile','posts'].includes($route.name)" } ], staticClass: "Footer t-blue-grey text-center" }, [ e._m(0), s("div", { staticClass: "mt-4" }, [ s("router-link", { staticClass: "t-blue--3 no-deco", attrs: { to: "/privacy" } }, [ e._v("Privacy") ]) ], 1) ]) }, r = [ function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("div", [ s("span", { staticClass: "icon-copyright mr-4" }, [ e._v("2020 scavorb") ]) ]) } ], o = s("2b0e"), c = s("c152"), l = o[ "a" ].extend({ computed: { scrolled: function () { return c[ "d" ].$container.scrolled } } }), u = l, d = (s("f057"), s("2877")), m = Object(d[ "a" ])(u, n, r, !1, null, "66cb1ed5", null), p = m.exports, v = o[ "a" ].extend({ components: { Footer: p }, props: { noSideNav: { required: !1, type: Boolean, default: !0 }, ownID: { required: !1, type: String, default: !1 }, MainCB: { required: !1, type: String }, SideCB: { required: !1, type: String } } }), g = v, f = (s("ce0b"), Object(d[ "a" ])(g, a, i, !1, null, null, null)); t[ "a" ] = f.exports }, "37a8": function (e, t, s) { }, "45b4": function (e, t, s) { "use strict"; s("d4bc") }, "661b": function (e, t, s) { }, 6752: function (e, t, s) { "use strict"; s("37a8") }, aec6: function (e, t, s) { "use strict"; s.r(t); var a = function () { var e = this, t = e.$createElement, s = e._self._c || t; return s("Container", { attrs: { ownID: "MC-Home bg-blue-grey--2" } }, [ s("div", [ s("section", { staticClass: "Top flex col bg-img-masked noselect br1" }, [ s("div", { staticClass: "Detail xs12 md8 noselect br1" }, [ s("div", { staticClass: "Intro text-center" }, [ s("div", [ e._v("SCAVORB.COMM") ]), s("div", [ e._v("Websites Design and Web Applications Development") ]) ]), s("div", { staticClass: "More" }, [ s("div", [ e._v("We create custom personal and business websites tailored to your needs.") ]), s("ul", [ e._v(" UI Designs "), s("li", [ e._v("Have your website's UI professionally designed for the best user experience.") ]) ]), s("ul", [ e._v(" Single Page Applications(SPAs) "), s("li", [ e._v("Give your website a mobile app appearance and experience with fast page navigation.") ]) ]), s("ul", [ e._v(" Ecommerce Development "), s("li", [ e._v("Render your products to the market with various e-commerce integrations.") ]) ]), s("ul", [ e._v(" Back-end Development "), s("li", [ e._v("Deploy your apps with a fast back-end using powerful NodeJS frameworks.") ]) ]), s("ul", [ e._v(" CMS Development "), s("li", [ e._v("Publish contents with great SEO using CMSs like Wordpress, Ghost, ...") ]) ]) ]) ]), s("div", { staticClass: "Img md4 hide-sm-down" }, [ s("img", { attrs: { src: "/defaults/pgs/a1.png", alt: "intro-image", draggable: "false" } }) ]), s("div", { staticClass: "Logo flex j-c-center noselect" }, [ s("div", { staticClass: "logo-base logo-trans-1 shadow-2" }, [ s("span", [ s("span", [ s("b", [ e._v("S") ]) ]), s("span") ]), s("span") ]) ]), s("div", { staticClass: "flex j-c-center" }, [ s("button", { staticClass: "btn pink-gradient-btn shadow-5 font-5 br4 py-7", on: { click: e.callToAction } }, [ e._v("START A PROJECT NOW") ]) ]) ]), s("div", { staticClass: "Divider" }, [ s("span") ]), s("div", { staticClass: "Quote" }, [ e._v("Every person and every business deserves a virtual online profile that stands out, and We specialize in providing that.") ]), s("section", { staticClass: "Section_2" }, [ s("h2", { staticClass: "text-center t-blue-grey--1" }, [ s("span", { staticClass: "icon-check-1 mr-3" }), s("span", [ e._v(" Deliverables ") ]) ]), s("div", { staticClass: "Tiles bg-img-masked bg-pink--3 flex wrap j-c-center py-8" }, e._l(e.list, (function (t, a) { console.log(caches); return s("div", { key: a, staticClass: "flex col xs8 sm4 md3 shadow-3" }, [ s("div", { staticClass: "noselect" }, [ s("img", { attrs: { src: t.link ? t.link : "/defaults/pgs/icons/" + t.img + ".jpg", draggable: "false" } }) ]), s("div", [ e._v(e._s(t.text)) ]), s("div", [ e._v(e._s(t.detail)) ]) ]) })), 0), s("div", { staticClass: "flex j-c-center" }, [ s("button", { staticClass: "btn cyan-gradient-btn shadow-5 font-5 br4 mt-5", on: { click: function (t) { return e.$router.push({ name: "about" }) } } }, [ s("span", { staticClass: "icon-right-big mr-3" }), s("span", [ e._v("More About Scavorb") ]) ]) ]) ]), s("div", { staticClass: "Divider" }, [ s("span") ]), s("div", { staticClass: "Quote" }, [ e._v("Meet scavorb's lead developer and creator") ]), s("section", [ s("h2", { staticClass: "text-center t-blue-grey--1" }, [ s("span", [ e._v("Adedayo Adeniyi") ]) ]), s("div", { staticClass: "flex j-c-center" }, [ s("div", { staticClass: "LogoBorder logo-base logo-static noselect" }, [ s("span", { staticClass: "bg-img-masked-0" }, [ s("img", { attrs: { src: "/defaults/usr/me.jpg", alt: "Adedayo Adeniyi", draggable: "false" } }) ]), s("span") ]) ]), s("div", { staticClass: "flex j-c-center" }, [ s("button", { staticClass: "btn cyan-gradient-btn shadow-5 font-5 br4 mt-5", on: { click: function (t) { return e.$router.push({ name: "user-profile", params: { username: "dayo" } }) } } }, [ s("span", { staticClass: "icon-right-big mr-3" }), s("span", [ e._v("View Profile") ]) ]) ]) ]), s("div", { staticClass: "Divider" }, [ s("span") ]), s("div", { staticClass: "Quote" }, [ e._v("Short preview gallery of recent site designs") ]), s("section", [ s("h2", { staticClass: "text-center t-blue-grey--1" }, [ s("span", [ e._v("Scavorb Gallery") ]) ]), s("div", { staticClass: "flex j-c-center" }, [ s("div", { staticClass: "GalPreview bg-img-masked-0 xs11 sm18 md5 lg4 noselect" }, [ s("img", { attrs: { src: "/defaults/pgs/scavorb_gallery.jpg", alt: "", draggable: "false" } }) ]) ]), s("div", { staticClass: "flex j-c-center" }, [ s("button", { ref: "fkloading", staticClass: "btn cyan-gradient-btn shadow-5 font-5 br4 mt-5", on: { click: e.fkLoading } }, [ s("span", { staticClass: "icon-right-big mr-3" }), s("span", [ e._v("Full Gallery") ]) ]) ]) ]), s("div", { ref: "contactCTA", staticClass: "Divider" }, [ s("span") ]), s("h2", { staticClass: "text-center t-blue-grey--1" }, [ s("span", { staticClass: "icon-mail-alt mr-3" }), s("span", [ e._v(" Reach Out To Us "), s("i", { staticClass: "font-3" }, [ e._v("Let's Get Things Done!") ]) ]) ]), s("div", [ s("Contact") ], 1) ]) ]) }, i = [], n = s("2b0e"), r = s("2112"), o = s("138e"), c = s("8205"), l = n[ "a" ].extend({ components: { Container: r[ "a" ], Contact: o[ "a" ] }, metaInfo: function () { return c[ "c" ].metaInfo({}) }, data: function () { return { list: [ { img: "resp", text: "Fully Responsive Webpages", detail: "Designs at scavorb are expertly hand crafted with modern layouts, and you are delivered webpages that look and feel perfect on devices of various screen sizes." }, { img: "scale", text: "Performant and Easily Scalable Apps", detail: "A successful web application should be reliable, well-planned and seemlessly accommodate growth. At scavorb, apps are designed to welcome subsequent growths without friction. And we technically avoid anything that can make our apps stuck in a hole." }, { img: "", text: "Concise and Readable Code", link: "/defaults/pgs/icons/clean.png", detail: "Everything that makes up your webpages' layout are structured in codes and are required to be easily understandale. At scavorb you can be rest assured." }, { img: "effect", text: "Effective Development and Customer Service", detail: "It is scavorb's utmost priority to ensure that you get the right value for your input." }, { img: "", text: "Genuine Design Customized To Your Need", link: "/defaults/logo/scavorb.png", detail: "Some people desire minimalist designs and layouts while others want it outright customized. Regardless of your requirement, scavorb is versed as presenting you with a design that simply stands out." } ] } }, methods: { callToAction: function () { this.$refs.contactCTA.scrollIntoView({ behavior: "smooth" }) }, fkLoading: function () { c[ "g" ].create(this.$refs.fkloading, { text: "" }) } } }), u = l, d = (s("6752"), s("2877")), m = Object(d[ "a" ])(u, a, i, !1, null, "2f69f490", null); t[ "default" ] = m.exports }, ce0b: function (e, t, s) { "use strict"; s("661b") }, d4bc: function (e, t, s) { }, e067: function (e, t, s) { }, f057: function (e, t, s) { "use strict"; s("e067") } } ]);