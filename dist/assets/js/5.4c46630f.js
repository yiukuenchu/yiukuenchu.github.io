(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(t,n,e){},250:function(t,n,e){"use strict";e(77);var a=e(7),s={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:function(t,n){var e=n.props,s=e.name,i=e.icon,r=e.size;return t("span",{class:"post-tag",attrs:{title:s}},[t(a.a,{class:"post-tag-icon",attrs:{name:i,size:r}}),t("span",{class:"post-tag-name"},[s])])}},i=(e(251),e(2)),r=Object(i.a)(s,void 0,void 0,!1,null,null,null);n.a=r.exports},251:function(t,n,e){"use strict";var a=e(247);e.n(a).a},294:function(t,n,e){"use strict";e.r(n);var a={name:"Categories",components:{IconTag:e(250).a}},s=e(2),i=Object(s.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"categories"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.categories))]),this._v(" "),this._l(this.$categories.list,function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"category",name:t.name}})],1)})],2)])},[],!1,null,null,null);n.default=i.exports}}]);