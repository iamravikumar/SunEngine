(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"11de":function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"custom-css-admin q-gutter-y-md"},[i("div",{staticClass:"flex q-gutter-md"},[i("q-btn",{staticClass:"send-btn",attrs:{"no-caps":"",icon:t.$iconsSet.CustomCssAdmin.save,label:t.$tl("saveBtn")},on:{click:t.updateCustomCss}}),i("q-btn",{staticClass:"clear-btn",attrs:{"no-caps":"",icon:t.$iconsSet.CustomCssAdmin.clean,color:"warning",label:t.$tl("clearBtn")},on:{click:t.clearCss}}),i("q-space"),i("q-btn",{staticClass:"refresh-btn",attrs:{"no-caps":"",icon:t.$iconsSet.CustomCssAdmin.reset,label:t.$tl("refreshBtn")},on:{click:t.reloadData}})],1),i("q-input",{attrs:{filled:"",label:t.$tl("cssInput"),"input-class":"custom-css-admin__text-area",type:"textarea"},model:{value:t.customCss,callback:function(n){t.customCss=n},expression:"customCss"}}),i("iframe",{staticClass:"hidden",attrs:{id:"testFrame",sandbox:"allow-same-origin"}})],1)},a=[],e=(i("a481"),i("4db1")),l=i.n(e),o=i("e856"),c={name:"CustomCssAdmin",mixins:[o["Page"]],data:function(){return{customCss:null}},methods:{reloadData:function(){var t=this;this.loadData().then((function(n){t.$successNotify(t.$tl("reloadSuccessNotify"),"info")}))},loadData:function(){var t=this;return this.$request(this.$AdminApi.SkinsAdmin.GetCustomCss).then((function(n){t.customCss=n.data}))},clearCss:function(){var t=document.getElementById("testFrame").contentDocument;t.open(),t.write("<!DOCTYPE html><title>CSS</title><style></style>"),t.close(),t.querySelector("style").textContent=this.customCss,this.customCss=l()(t.styleSheets[0].cssRules).map((function(t){return t.cssText.replace("{","{\n").replace("}","\n}")})).join("\n\n")},updateCustomCss:function(){var t=this;this.$request(this.$AdminApi.SkinsAdmin.UpdateCustomCss,{cssText:this.customCss}).then((function(n){t.$successNotify()}))}},created:function(){this.title=this.$tl("title"),this.loadData()}},r=c,u=(i("dd7a"),i("2877")),d=i("eebe"),m=i.n(d),f=i("9c40"),p=i("2c91"),h=i("27f9"),k=Object(u["a"])(r,s,a,!1,null,null,null);n["a"]=k.exports;m()(k,"components",{QBtn:f["a"],QSpace:p["a"],QInput:h["a"]})},1487:function(t,n,i){"use strict";var s=i("2538"),a=i.n(s);a.a},"169e":function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("SunPage",{staticClass:"skins-admin page-padding"},[i("PageHeader",{attrs:{title:t.title}}),i("q-tabs",{staticClass:"bg-grey-2",attrs:{align:"justify","inline-label":""}},[i("q-route-tab",{attrs:{to:{name:"MainSkinsAdmin"},"no-caps":"",name:"skins",icon:t.$iconsSet.SkinsAdmin.main,label:t.$tl("mainSkins")}}),i("q-route-tab",{attrs:{to:{name:"PartialSkinsAdmin"},"no-caps":"",name:"partial-skins",icon:t.$iconsSet.SkinsAdmin.partial,label:t.$tl("partialSkins")}}),i("q-route-tab",{attrs:{to:{name:"CustomCssAdmin"},"no-caps":"",name:"custom-css",icon:t.$iconsSet.SkinsAdmin.customCss,label:t.$tl("customCss")}}),t.allowCustomJavaScript?i("q-route-tab",{attrs:{to:{name:"CustomJavaScriptAdmin"},"no-caps":"",name:"custom-java-script",icon:t.$iconsSet.SkinsAdmin.customJavaScript,label:t.$tl("customJavaScript")}}):t._e()],1),i("div",{staticClass:"q-mb-xl"}),i("router-view")],1)},a=[],e=i("e856"),l={name:"SkinsAdmin",mixins:[e["Page"]],data:function(){return{tab:"skins"}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")},allowCustomJavaScript:function(){return config.Admin.AllowCustomJavaScript}},created:function(){this.title=this.$tl("title")}},o=l,c=(i("6075"),i("2877")),r=i("eebe"),u=i.n(r),d=i("429b"),m=i("7867"),f=i("7460"),p=Object(c["a"])(o,s,a,!1,null,null,null);n["a"]=p.exports;u()(p,"components",{QTabs:d["a"],QRouteTab:m["a"],QTab:f["a"]})},"1c1a":function(t,n,i){"use strict";var s=i("209d"),a=i.n(s);a.a},"209d":function(t,n,i){},2538:function(t,n,i){},3144:function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"main-skins-admin"},[i("div",{staticClass:"flex flex-center"},[i("q-btn",{staticClass:"skins-admin__post-btn post-btn q-mb-lg",attrs:{"no-caps":"",icon:t.$iconsSet.MainSkinsAdmin.upload,loading:t.loading,label:t.$tl("upload")},on:{click:t.showUploadDialog}},[i("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1),i("input",{ref:"file",staticClass:"hidden",attrs:{type:"file",accept:".zip"},on:{change:t.uploadSkin}}),t.skins?i("div",{staticClass:"row q-gutter-lg"},t._l(t.skins,(function(n){return i("q-card",{key:n.name,staticClass:"skins-admin__card"},[i("div",{staticClass:"skins-admin__card-image-section"},[i("q-img",{staticClass:"skins-admin__skin-img",class:{hidden:n.showInfo},attrs:{src:t.skinImgUrl(n.name)}},[i("div",{staticClass:"skins-admin__preview-btn absolute-bottom-right"},[i("q-icon",{attrs:{name:t.$iconsSet.MainSkinsAdmin.preview,size:"20px"}}),i("q-tooltip",{attrs:{anchor:"center middle",self:"center middle"}},[i("img",{attrs:{src:t.skinImgUrl(n.name),width:"800"}})])],1)]),i("q-card-section",{class:{hidden:!n.showInfo}},[i("div",[t._v("\n\t\t\t\t\t\t"+t._s(t.$tl("author"))+"\n\t\t\t\t\t\t"),n.contacts?i("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),n.showContacts=!n.showContacts}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.author))]):i("span",[t._v(" "+t._s(n.author)+" ")])]),i("q-slide-transition",[n.contacts&&n.showContacts?i("div",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$tl("contacts"))+"\n\t\t\t\t\t\t\t"),t._l(n.contacts,(function(s,a){return i("span",{key:a},[s.startsWith("http")?i("a",{staticClass:"link",attrs:{href:s}},[t._v(t._s(s))]):[t._v(" "+t._s(s)+" ")],a!=n.contacts.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e()]),i("div",[t._v(t._s(t.$tl("version"))+" "+t._s(n.version))]),n.sourceUrl?i("div",[i("a",{staticClass:"link",attrs:{target:"_blank",href:n.sourceUrl}},[t._v(t._s(t.$tl("link")))])]):t._e(),n.description?i("div",[t._v("\n\t\t\t\t\t\t"+t._s(t.$tl("description"))+" "+t._s(n.description)+"\n\t\t\t\t\t")]):t._e()],1)],1),i("q-card-section",{staticClass:"skins-admin__skin-name h6"},[t._v("\n\t\t\t\t"+t._s(n.name)+"\n\t\t\t")]),i("q-card-actions",{attrs:{align:"around"}},[n.current?i("q-btn",{staticClass:"skins-admin__current-btn",attrs:{flat:"","no-caps":"",label:t.$tl("current"),icon:t.$iconsSet.MainSkinsAdmin.current}}):t._e(),n.current?t._e():i("q-btn",{staticClass:"skins-admin__send-btn",attrs:{flat:"",loading:n.loading,"no-caps":"",icon:t.$iconsSet.MainSkinsAdmin.set,label:t.$tl("set")},on:{click:function(i){return t.changeSkin(n.name)}}},[i("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1),i("q-btn",{staticClass:"skins-admin__delete-btn",attrs:{"no-caps":"",flat:"",icon:t.$iconsSet.MainSkinsAdmin.info},on:{click:function(i){return t.showSkinInfo(n)}}}),n.current?t._e():i("q-btn",{staticClass:"skins-admin__info-btn",attrs:{"no-caps":"",flat:"",icon:t.$iconsSet.MainSkinsAdmin.delete},on:{click:function(i){return t.deleteSkin(n.name)}}})],1)],1)})),1):i("LoaderWait"),i("q-banner",{staticClass:"skins-admin__info shadow-1 q-mt-xl",attrs:{rounded:""}},[t._v("\n\t\t"+t._s(t.$tl("info"))+"\n\t\t"),i("a",{staticClass:"skins-admin__info-link link",attrs:{href:"https://github.com/sunengine/SunEngine.Skins",target:"_blank"}},[t._v("\n\t\t\thttps://github.com/sunengine/SunEngine.Skins\n\t\t")])])],1)},a=[],e=i("ee68"),l=e["a"],o=(i("1487"),i("2877")),c=i("eebe"),r=i.n(c),u=i("9c40"),d=i("f09f"),m=i("068f"),f=i("0016"),p=i("05c0"),h=i("a370"),k=i("e9c1"),S=i("4b7e"),v=i("54e1"),b=Object(o["a"])(l,s,a,!1,null,null,null);n["a"]=b.exports;r()(b,"components",{QBtn:u["a"],QCard:d["a"],QImg:m["a"],QIcon:f["a"],QTooltip:p["a"],QCardSection:h["a"],QSlideTransition:k["a"],QCardActions:S["a"],QBanner:v["a"]})},"3e4d":function(t,n,i){"use strict";var s=i("e57b"),a=i.n(s);a.a},6075:function(t,n,i){"use strict";var s=i("be6d"),a=i.n(s);a.a},be10:function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"partial-skins-admin"},[i("div",{staticClass:"flex flex-center"},[i("q-btn",{staticClass:"skins-admin__post-btn post-btn q-mb-lg",attrs:{"no-caps":"",icon:t.$iconsSet.PartialSkinsAdmin.upload,loading:t.loading,label:t.$tl("upload")},on:{click:t.showUploadDialog}},[i("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1),i("input",{ref:"file",staticClass:"hidden",attrs:{type:"file",accept:".zip"},on:{change:t.uploadPartialSkin}}),t.pSkins?i("q-markup-table",{attrs:{"wrap-cells":""}},[i("tbody",t._l(t.pSkins,(function(n){return i("q-tr",{key:n.name,class:n.current?"partial-skins-admin__on":"partial-skins-admin__off"},[i("q-td",[t._v(t._s(n.name))]),i("q-td",[i("q-toggle",{on:{input:function(i){return t.enablePartialSkin(i,n)}},model:{value:n.current,callback:function(i){t.$set(n,"current",i)},expression:"pSkin.current"}})],1),i("q-td",{},[t._v(t._s(n.description))]),i("q-td",[i("q-btn",{attrs:{disable:n.current,flat:"",dense:"",icon:t.$iconsSet.PartialSkinsAdmin.delete},on:{click:function(i){return t.deletePartialSkin(n.name)}}})],1)],1)})),1)]):i("LoaderWait")],1)},a=[],e=(i("ac4d"),i("8a81"),i("ac6a"),i("7f7f"),i("551c"),i("06db"),i("097d"),i("e856")),l={name:"PartialSkinsAdmin",mixins:[e["Page"]],data:function(){return{pSkins:null,loading:!1}},computed:{skinsDir:function(){return config.SkinsDir}},methods:{showUploadDialog:function(){this.$refs.file.click()},uploadPartialSkin:function(){var t=this;this.loading=!0;var n=this.$refs.file.files[0],i=new FormData;i.append("file",n),this.$request(this.$AdminApi.SkinsAdmin.UploadPartialSkin,i).then((function(n){t.$successNotify(t.$tl("uploadSuccessNotify")),t.$refs.file.value="",t.getAllPartialSkins()})).finally((function(n){t.loading=!1}))},deletePartialSkin:function(t){var n=this,i=this.$tl("deleteMsg"),s=this.$tl("btnDeleteOk"),a=this.$tl("btnDeleteCancel");this.$q.dialog({message:i,ok:s,cancel:a}).onOk((function(){n.$request(n.$AdminApi.SkinsAdmin.DeletePartialSkin,{name:t}).then((function(t){n.$successNotify(n.$tl("deleteSuccessNotify")),n.getAllPartialSkins()}))}))},enablePartialSkin:function(t,n){var i=this;this.$request(this.$AdminApi.SkinsAdmin.EnablePartialSkin,{name:n.name,enable:t}).then((function(t){i.getAllPartialSkins()}))},getAllPartialSkins:function(){var t=this;this.$request(this.$AdminApi.SkinsAdmin.GetAllPartialSkins).then((function(n){var i=!0,s=!1,a=void 0;try{for(var e,l=n.data[Symbol.iterator]();!(i=(e=l.next()).done);i=!0){var o=e.value;o.showInfo=!1,o.showContacts=!1,o.loading=!1}}catch(c){s=!0,a=c}finally{try{i||null==l.return||l.return()}finally{if(s)throw a}}t.pSkins=n.data}))},showSkinInfo:function(t){t.showInfo=!t.showInfo}},created:function(){this.title=this.$tl("title"),this.getAllPartialSkins()}},o=l,c=(i("3e4d"),i("2877")),r=i("eebe"),u=i.n(r),d=i("9c40"),m=i("2bb1"),f=i("bd08"),p=i("db86"),h=i("9564"),k=Object(c["a"])(o,s,a,!1,null,null,null);n["a"]=k.exports;u()(k,"components",{QBtn:d["a"],QMarkupTable:m["a"],QTr:f["a"],QTd:p["a"],QToggle:h["a"]})},be6d:function(t,n,i){},d2de:function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"custom-java-script-admin q-gutter-y-md"},[i("div",{staticClass:"flex q-gutter-md"},[i("q-btn",{staticClass:"send-btn",attrs:{"no-caps":"",icon:t.$iconsSet.CustomJavaScriptAdmin.save,label:t.$tl("saveBtn")},on:{click:t.updateCustomJavaScript}}),i("q-space"),i("q-btn",{staticClass:"refresh-btn",attrs:{"no-caps":"",icon:t.$iconsSet.CustomJavaScriptAdmin.reset,label:t.$tl("refreshBtn")},on:{click:t.reloadData}})],1),i("q-input",{attrs:{filled:"",label:t.$tl("javaScriptInput"),"input-class":"custom-java-script-admin__text-area",type:"textarea"},model:{value:t.customJavaScript,callback:function(n){t.customJavaScript=n},expression:"customJavaScript"}}),i("iframe",{staticClass:"hidden",attrs:{id:"testFrame",sandbox:"allow-same-origin"}})],1)},a=[],e=i("e856"),l={name:"CustomJavaScriptAdmin",mixins:[e["Page"]],data:function(){return{customJavaScript:null}},methods:{reloadData:function(){var t=this;this.loadData().then((function(n){t.$successNotify(t.$tl("reloadSuccessNotify"),"info")}))},loadData:function(){var t=this;return this.$request(this.$AdminApi.SkinsAdmin.GetCustomJavaScript).then((function(n){t.customJavaScript=n.data}))},updateCustomJavaScript:function(){var t=this;this.$request(this.$AdminApi.SkinsAdmin.UpdateCustomJavaScript,{javaScriptText:this.customJavaScript}).then((function(n){t.$successNotify()}))}},created:function(){this.title=this.$tl("title"),this.loadData()}},o=l,c=(i("1c1a"),i("2877")),r=i("eebe"),u=i.n(r),d=i("9c40"),m=i("2c91"),f=i("27f9"),p=Object(c["a"])(o,s,a,!1,null,null,null);n["a"]=p.exports;u()(p,"components",{QBtn:d["a"],QSpace:m["a"],QInput:f["a"]})},dd7a:function(t,n,i){"use strict";var s=i("e82d"),a=i.n(s);a.a},e57b:function(t,n,i){},e82d:function(t,n,i){},ee68:function(t,n,i){"use strict";(function(t){i("ac4d"),i("8a81"),i("ac6a"),i("7f7f"),i("7514"),i("551c"),i("06db"),i("097d");n["a"]={name:"MainSkinsAdmin",mixins:[t],data:function(){return{skins:null,loading:!1}},methods:{skinImgUrl:function(t){return this.$buildPath(config.UrlPaths.Skins,t,"preview.png")},showUploadDialog:function(){this.$refs.file.click()},uploadSkin:function(){var t=this;this.loading=!0;var n=this.$refs.file.files[0],i=new FormData;i.append("file",n),this.$request(this.$AdminApi.SkinsAdmin.UploadSkin,i).then((function(n){t.$successNotify(t.$tl("uploadSuccessNotify")),t.$refs.file.value="",t.getAllSkins()})).finally((function(n){t.loading=!1}))},deleteSkin:function(t){var n=this,i=this.$tl("deleteMsg"),s=this.$tl("btnDeleteOk"),a=this.$tl("btnDeleteCancel");this.$q.dialog({message:i,ok:s,cancel:a}).onOk((function(){n.$request(n.$AdminApi.SkinsAdmin.DeleteSkin,{name:t}).then((function(t){n.$successNotify(n.$tl("deleteSuccessNotify")),n.getAllSkins()}))}))},changeSkin:function(t){var n=this;this.skins.find((function(n){return n.name===t})).loading=!0,this.$request(this.$AdminApi.SkinsAdmin.ChangeSkin,{name:t}).then((function(t){n.$successNotify(),n.getAllSkins()})).finally((function(i){n.skins.find((function(n){return n.name===t})).loading=!1}))},getAllSkins:function(){var t=this;this.$request(this.$AdminApi.SkinsAdmin.GetAllSkins).then((function(n){var i=!0,s=!1,a=void 0;try{for(var e,l=n.data[Symbol.iterator]();!(i=(e=l.next()).done);i=!0){var o=e.value;o.showInfo=!1,o.showContacts=!1,o.loading=!1}}catch(c){s=!0,a=c}finally{try{i||null==l.return||l.return()}finally{if(s)throw a}}t.skins=n.data}))},showSkinInfo:function(t){t.showInfo=!t.showInfo}},created:function(){this.title=this.$tl("title"),this.getAllSkins()}}}).call(this,i("7c53")["default"])}}]);