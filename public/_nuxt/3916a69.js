(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4],{470:function(e,t,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("4ec49f8a",content,!0,{sourceMap:!1})},472:function(e,t,o){"use strict";o.r(t);var n=o(459),r=o(177),l=o(211),c=o(209),f=o(458),d=(o(8),o(63),o(1).a.extend({props:{description:String,items:Object,selectedItem:Boolean,storeUrls:Object,title:String,url:String},data:function(){return{storeButtons:[{filename:"AppleAppStoreButton",title:"Apple App Store",url:this.$props.storeUrls.appleAppStore},{filename:"GooglePlayStoreButton",title:"Google Play Store",url:this.storeUrls.googlePlayStore},{filename:"MessengerButton",title:"Messenger",url:this.storeUrls.messenger},{filename:"FacebookWebButton",title:"Facebook Web",url:this.storeUrls.facebookWeb},{filename:"ItchIoButton",title:"itch.io",url:this.storeUrls.itchIo},{filename:"ChromeWebStoreButton",title:"Chrome Web Store",url:this.storeUrls.chromeWebStore}]}},head:function(){return{title:this.title}}})),m=(o(480),o(62)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t(f.a,[t(n.a,{staticClass:"text-center mt-12 pt-12"},[t("img",{staticClass:"mb-5",attrs:{alt:e.title,src:e.url}}),e._v(" "),t("blockquote",{staticClass:"blockquote"},[e._v("\n        “"+e._s(e.description)+"”\n        "),t("footer",[t("small",[t("em",[e._v("—"+e._s(e.title))])])])]),e._v(" "),e._l(e.storeButtons,(function(n,r){return t("a",{key:r,attrs:{href:n.url,title:n.title,rel:"noreferrer noopener"}},[n.url?t("img",{staticClass:"storeButtons",attrs:{alt:n.title,src:o(473)("./".concat(n.filename)+".webp"),title:n.title}}):e._e()])})),e._v(" "),e.selectedItem?t(l.a,[t(r.a,{attrs:{src:e.selectedItem?e.selectedItem.src:"",contain:""},on:{click:function(t){e.selectedItem=null}}})],1):e._e()],2)],1),e._v(" "),t(f.a,{staticClass:"mb-8"},e._l(e.items,(function(o){return t(n.a,{key:o.id,staticClass:"px-6 mt-6",attrs:{xs:"12",md:"4"}},[t(r.a,{staticClass:"grey lighten-2",attrs:{src:o.src,contain:""},on:{click:function(t){e.selectedItem=o}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t(f.a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t(c.a,{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,"1dea2fe2",null);t.default=component.exports;installComponents(component,{Footer:o(316).default})},473:function(e,t,o){var map={"./AppleAppStoreButton.webp":474,"./ChromeWebStoreButton.webp":475,"./FacebookWebButton.webp":476,"./GooglePlayStoreButton.webp":477,"./ItchIoButton.webp":478,"./MessengerButton.webp":479};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=473},474:function(e,t,o){e.exports=o.p+"img/AppleAppStoreButton.99afcfb.webp"},475:function(e,t,o){e.exports=o.p+"img/ChromeWebStoreButton.d2d483f.webp"},476:function(e,t,o){e.exports=o.p+"img/FacebookWebButton.ad3b60c.webp"},477:function(e,t,o){e.exports=o.p+"img/GooglePlayStoreButton.f954514.webp"},478:function(e,t,o){e.exports=o.p+"img/ItchIoButton.4b08795.webp"},479:function(e,t,o){e.exports=o.p+"img/MessengerButton.8e178c8.webp"},480:function(e,t,o){"use strict";o(470)},481:function(e,t,o){var n=o(17)((function(i){return i[1]}));n.push([e.i,'a[data-v-1dea2fe2]{font-weight:700;-webkit-text-decoration:none;text-decoration:none}em[data-v-1dea2fe2],p[data-v-1dea2fe2]{font-weight:300}.v-card__title[data-v-1dea2fe2],.v-list-item__title[data-v-1dea2fe2],button[data-v-1dea2fe2],h1[data-v-1dea2fe2],h2[data-v-1dea2fe2],h3[data-v-1dea2fe2],h4[data-v-1dea2fe2],h5[data-v-1dea2fe2],h6[data-v-1dea2fe2]{font-family:"IM Fell English SC",serif}.v-card__text div[data-v-1dea2fe2],.v-checkbox label[data-v-1dea2fe2],a[data-v-1dea2fe2],em[data-v-1dea2fe2],input[data-v-1dea2fe2],label[data-v-1dea2fe2],p[data-v-1dea2fe2],textarea[data-v-1dea2fe2]{font-family:"Cormorant",serif;font-size:inherit;font-style:italic}.v-list-item__subtitle[data-v-1dea2fe2]{font-family:"Cormorant",serif;font-style:normal;font-weight:600}a img[data-v-1dea2fe2]{margin:1.5rem}blockquote[data-v-1dea2fe2]{font-family:"Cormorant",serif}blockquote>footer>small[data-v-1dea2fe2]{font-family:"IM Fell English SC",serif}.storeButtons[data-v-1dea2fe2]{animation:turn-1dea2fe2 3.5s ease-out 1s forwards;height:60px;transform:rotateY(560deg);width:160px}@keyframes turn-1dea2fe2{to{transform:rotateY(0deg)}}',""]),n.locals={},e.exports=n},498:function(e,t,o){e.exports=o.p+"img/1.f383ab3.webp"},499:function(e,t,o){e.exports=o.p+"img/2.191333c.webp"},500:function(e,t,o){e.exports=o.p+"img/3.29ba536.webp"},501:function(e,t,o){e.exports=o.p+"img/4.d156be8.webp"},502:function(e,t,o){e.exports=o.p+"img/5.1aa4d12.webp"},639:function(e,t,o){"use strict";o.r(t);o(8),o(63);var n=o(1),r=o(472),l=n.a.extend({components:{SingleGame:r.default},data:function(){return{description:"InfiniteHell is a neverending hell!",selectedItem:null,items:[{id:1,src:o(498)},{id:2,src:o(499)},{id:3,src:o(500)},{id:4,src:o(501)},{id:5,src:o(502)}],storeUrls:{appleAppStore:"https://apps.apple.com/app/infinitehell/id1450304986",googlePlayStore:"https://play.google.com/store/apps/details?id=com.doyban.infinitehell",messenger:"https://m.me/2211491489066459?game=infinitehell-instant",facebookWeb:"https://apps.facebook.com/infinitehell",itchIo:"https://doyban.itch.io/infinitehell"},title:"InfiniteHell",url:"/games/icons/InfiniteHell.webp"}}}),c=o(62),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("SingleGame",{attrs:{description:e.description,items:e.items,"store-urls":e.storeUrls,title:e.title,url:e.url}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SingleGame:o(472).default})}}]);