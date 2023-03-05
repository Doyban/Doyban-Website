(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{471:function(e,t,r){"use strict";r(23),r(72);var o=r(1);t.a=o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var r=this;this.clearDelay();var o=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){r.isActive={open:!0,close:!1}[e]},o)}}})},484:function(e,t,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("951d1426",content,!0,{sourceMap:!1})},485:function(e,t,r){var o=r(17)((function(i){return i[1]}));o.push([e.i,'a{font-weight:700;-webkit-text-decoration:none;text-decoration:none}em,p{font-weight:300}.v-card__title,.v-list-item__title,button,h1,h2,h3,h4,h5,h6{font-family:"IM Fell English SC",serif}.v-card__text div,.v-checkbox label,a,em,input,label,p,textarea{font-family:"Cormorant",serif;font-size:inherit;font-style:italic}.v-list-item__subtitle{font-family:"Cormorant",serif;font-style:normal;font-weight:600}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}',""]),o.locals={},e.exports=o},486:function(e,t,r){"use strict";var o=r(471),n=r(66),l=r(11),c=r(13);t.a=Object(l.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},487:function(e,t,r){"use strict";r(12),r(8),r(10),r(5),r(14),r(9),r(15);var o=r(2),n=(r(484),r(37));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},637:function(e,t,r){"use strict";r.r(t);var o=r(217),n=r(459),l=r(487),c=r(486),d=r(140),h=r(64),v=r(458),f=(r(8),r(63),r(1).a.extend({data:function(){return{policies:[]}},created:function(){this.policies=[{description:"This website is using cookies and other identifiers such as local and session storage, but not limited to. Our Assets also may do so.<br><br>Cookies are small text files which are being transferred from a site or service provider to hard drive of your computer, smartphone, tablet or other device via web browser if certain permission was granted. These files recognize some information and are further processed by site owner, here &ndash; by us, in an anonymous way.<br><br>We use cookies to understand behavior of our users and to provide you better experience based on your preferences.<br><br><ul><li>Strictly Necessary Cookies &ndash; essential for lots of functionalities to work properly.</li><li>Performance Cookies &ndash; collects information about how users use websites.</li><li>Functionality Cookies &ndash; remembers user's interface personalization.</li><li>Targeting or Advertising Cookies &ndash; delivers advertisements relevant to your interest.</li><li>Third Party Cookies &ndash; others, provided by some third party software integrations we may use.</li></ul><br>You can always block, delete, disable or restrict some of all of cookies and similar technologies in the settings of your web browser, however it may limit functionality of our Assets.",title:"Cookies"}]},head:function(){return{title:"Cookies Policy"}}})),m=r(62),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("h1",{staticClass:"mt-12 text-center"},[e._v("Cookies Policy")]),e._v(" "),t(v.a,{staticClass:"justify-center"},[t(n.a,{attrs:{sm:"3",xs:"6"}},[t(l.a)],1)],1),e._v(" "),t(v.a,{attrs:{justify:"center"}},[t(n.a,{staticClass:"ma-8",attrs:{md:"6",xs:"12"}},[t(c.a,{scopedSlots:e._u([{key:"default",fn:function(r){var n=r.hover;return[t(o.a,{staticClass:"pb-6",class:{"on-hover":n},attrs:{elevation:n?24:12}},e._l(e.policies,(function(r,o){return t(d.a,{key:o,attrs:{"two-line":""}},[t(h.a,[t(h.c,{staticClass:"mb-3 text-center"},[t("strong",[e._v(e._s(r.title))])]),e._v(" "),t(h.b,{staticClass:"text-justify text-wrap",domProps:{innerHTML:e._s(r.description)}})],1)],1)})),1)]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);