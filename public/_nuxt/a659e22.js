(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4],{470:function(t,e,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("4ec49f8a",content,!0,{sourceMap:!1})},472:function(t,e,o){"use strict";o.r(e);var n=o(459),r=o(177),l=o(211),c=o(209),f=o(458),d=(o(8),o(63),o(1).a.extend({props:{description:String,items:Object,selectedItem:Boolean,storeUrls:Object,title:String,url:String},data:function(){return{storeButtons:[{filename:"AppleAppStoreButton",title:"Apple App Store",url:this.$props.storeUrls.appleAppStore},{filename:"GooglePlayStoreButton",title:"Google Play Store",url:this.storeUrls.googlePlayStore},{filename:"MessengerButton",title:"Messenger",url:this.storeUrls.messenger},{filename:"FacebookWebButton",title:"Facebook Web",url:this.storeUrls.facebookWeb},{filename:"ItchIoButton",title:"itch.io",url:this.storeUrls.itchIo},{filename:"ChromeWebStoreButton",title:"Chrome Web Store",url:this.storeUrls.chromeWebStore}]}},head:function(){return{title:this.title}}})),m=(o(480),o(62)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",[e(f.a,[e(n.a,{staticClass:"text-center mt-12 pt-12"},[e("img",{staticClass:"mb-5",attrs:{alt:t.title,src:t.url}}),t._v(" "),e("blockquote",{staticClass:"blockquote"},[t._v("\n        “"+t._s(t.description)+"”\n        "),e("footer",[e("small",[e("em",[t._v("—"+t._s(t.title))])])])]),t._v(" "),t._l(t.storeButtons,(function(n,r){return e("a",{key:r,attrs:{href:n.url,title:n.title,rel:"noreferrer noopener"}},[n.url?e("img",{staticClass:"storeButtons",attrs:{alt:n.title,src:o(473)("./".concat(n.filename)+".webp"),title:n.title}}):t._e()])})),t._v(" "),t.selectedItem?e(l.a,[e(r.a,{attrs:{src:t.selectedItem?t.selectedItem.src:"",contain:""},on:{click:function(e){t.selectedItem=null}}})],1):t._e()],2)],1),t._v(" "),e(f.a,{staticClass:"mb-8"},t._l(t.items,(function(o){return e(n.a,{key:o.id,staticClass:"px-6 mt-6",attrs:{xs:"12",md:"4"}},[e(r.a,{staticClass:"grey lighten-2",attrs:{src:o.src,contain:""},on:{click:function(e){t.selectedItem=o}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(f.a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(c.a,{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,"1dea2fe2",null);e.default=component.exports;installComponents(component,{Footer:o(316).default})},473:function(t,e,o){var map={"./AppleAppStoreButton.webp":474,"./ChromeWebStoreButton.webp":475,"./FacebookWebButton.webp":476,"./GooglePlayStoreButton.webp":477,"./ItchIoButton.webp":478,"./MessengerButton.webp":479};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=473},474:function(t,e,o){t.exports=o.p+"img/AppleAppStoreButton.99afcfb.webp"},475:function(t,e,o){t.exports=o.p+"img/ChromeWebStoreButton.d2d483f.webp"},476:function(t,e,o){t.exports=o.p+"img/FacebookWebButton.ad3b60c.webp"},477:function(t,e,o){t.exports=o.p+"img/GooglePlayStoreButton.f954514.webp"},478:function(t,e,o){t.exports=o.p+"img/ItchIoButton.4b08795.webp"},479:function(t,e,o){t.exports=o.p+"img/MessengerButton.8e178c8.webp"},480:function(t,e,o){"use strict";o(470)},481:function(t,e,o){var n=o(17)((function(i){return i[1]}));n.push([t.i,'a[data-v-1dea2fe2]{font-weight:700;-webkit-text-decoration:none;text-decoration:none}em[data-v-1dea2fe2],p[data-v-1dea2fe2]{font-weight:300}.v-card__title[data-v-1dea2fe2],.v-list-item__title[data-v-1dea2fe2],button[data-v-1dea2fe2],h1[data-v-1dea2fe2],h2[data-v-1dea2fe2],h3[data-v-1dea2fe2],h4[data-v-1dea2fe2],h5[data-v-1dea2fe2],h6[data-v-1dea2fe2]{font-family:"IM Fell English SC",serif}.v-card__text div[data-v-1dea2fe2],.v-checkbox label[data-v-1dea2fe2],a[data-v-1dea2fe2],em[data-v-1dea2fe2],input[data-v-1dea2fe2],label[data-v-1dea2fe2],p[data-v-1dea2fe2],textarea[data-v-1dea2fe2]{font-family:"Cormorant",serif;font-size:inherit;font-style:italic}.v-list-item__subtitle[data-v-1dea2fe2]{font-family:"Cormorant",serif;font-style:normal;font-weight:600}a img[data-v-1dea2fe2]{margin:1.5rem}blockquote[data-v-1dea2fe2]{font-family:"Cormorant",serif}blockquote>footer>small[data-v-1dea2fe2]{font-family:"IM Fell English SC",serif}.storeButtons[data-v-1dea2fe2]{animation:turn-1dea2fe2 3.5s ease-out 1s forwards;height:60px;transform:rotateY(560deg);width:160px}@keyframes turn-1dea2fe2{to{transform:rotateY(0deg)}}',""]),n.locals={},t.exports=n},493:function(t,e,o){t.exports=o.p+"img/1.6175ae6.webp"},494:function(t,e,o){t.exports=o.p+"img/2.96fd6e2.webp"},495:function(t,e,o){t.exports=o.p+"img/3.075884a.webp"},496:function(t,e,o){t.exports=o.p+"img/4.df578f5.webp"},497:function(t,e,o){t.exports=o.p+"img/5.f51728e.webp"},641:function(t,e,o){"use strict";o.r(e);o(8),o(63);var n=o(1),r=o(472),l=n.a.extend({components:{SingleGame:r.default},data:function(){return{description:"CashNinja is a free and fun game where you get get a lot of cash!",selectedItem:null,items:[{id:1,src:o(493)},{id:2,src:o(494)},{id:3,src:o(495)},{id:4,src:o(496)},{id:5,src:o(497)}],storeUrls:{appleAppStore:"https://apps.apple.com/app/cashninja/id1450304980",googlePlayStore:"https://play.google.com/store/apps/details?id=com.doyban.cashninja",messenger:"https://m.me/320930938515454?game=cashninja-instant",facebookWeb:"https://apps.facebook.com/cash-ninja",itchIo:"https://doyban.itch.io/cashninja"},title:"CashNinja",url:"/games/icons/CashNinja.webp"}}}),c=o(62),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("SingleGame",{attrs:{description:t.description,items:t.items,"store-urls":t.storeUrls,title:t.title,url:t.url}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SingleGame:o(472).default})}}]);