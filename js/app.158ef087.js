(function(t){function e(e){for(var a,s,c=e[0],o=e[1],u=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/whereshouldigo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08fb":function(t,e,n){},"13df":function(t,e,n){t.exports=n.p+"img/madrid.19f120dd.jpg"},"1ce6":function(t,e,n){t.exports=n.p+"img/amsterdam.3db829e5.jpg"},"56c2":function(t,e,n){"use strict";n("08fb")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("5c0b"),n("2877")),c={},o=Object(s["a"])(c,r,i,!1,null,null,null),u=o.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Main")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h1",{staticClass:"main__title"},[t._v("Where should I go?")]),n("div",{staticClass:"main__input",class:{"main__input--loading":t.isLoading,"main__input--results":!t.isLoading&&t.hasResults}},[n("Input",{attrs:{"is-loading":t.isLoading},on:{search:t.onSearch}}),t.hasError?n("p",{staticClass:"main__input-error"},[t._v(" Oops, something went wrong! Try again with different conditions. ")]):t._e()],1),!t.isLoading&&t.hasResults?n("div",{staticClass:"main__wrapper"},t._l(t.cities,(function(t){return n("div",{key:t.id},[n("Card",{attrs:{city:t}})],1)})),0):t._e()])},h=[],m=(n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),g=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{staticClass:"card__img",attrs:{src:n("7584")("./"+t.city.imgUrl),alt:t.city.name}}),a("div",{staticClass:"card__content"},[a("h2",{staticClass:"card__title"},[t._v(t._s(t.city.name)+", "+t._s(t.city.country))]),t.cheapestFlight?a("div",[a("div",{staticClass:"card__available-seats"},[t._v(" "+t._s(t.cheapestFlight.availability.seats)+" available ")]),a("div",{staticClass:"card__price"},[t._v("€ "+t._s(t.cheapestFlight.price))]),a("a",{staticClass:"card__link",attrs:{href:t.cheapestFlight.deep_link}},[t._v(" Buy ticket "),a("i",{staticClass:"card__chevron-right"})])]):a("div",{staticClass:"card__no-flight"},[t._v("No available flights with this search conditions.")])])])},_=[],b=(n("4de4"),n("7db0"),{name:"Card",props:{city:Object},computed:{cheapestFlight:function(){return this.city.flights.filter((function(t){return t.availability.seats})).find((function(t){return Math.min(t.price)}))}}}),y=b,w=(n("8e54"),Object(s["a"])(y,v,_,!1,null,"339e415e",null)),j=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input",class:{"input--loading":t.isLoading}},[n("label",{staticClass:"input__label",attrs:{for:"origin"}},[t._v("Origin")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.city,expression:"city",modifiers:{lazy:!0}}],staticClass:"input__field",attrs:{id:"origin",name:"origin",type:"text"},domProps:{value:t.city},on:{change:function(e){t.city=e.target.value}}}),n("label",{staticClass:"input__label",attrs:{for:"departure"}},[t._v("Departure")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.date,expression:"date",modifiers:{lazy:!0}}],staticClass:"input__field",attrs:{id:"departure",name:"departure",type:"date"},domProps:{value:t.date},on:{change:function(e){t.date=e.target.value}}}),n("button",{staticClass:"input__field input__field--button",attrs:{disabled:t.isLoading||!t.isValid},on:{click:t.onSearch}},[t.isLoading?n("span",[t._v("Searching...")]):n("span",[t._v("Search")])])])},x=[],C=(n("99af"),{name:"Input",props:{isLoading:Boolean},data:function(){return{city:"",date:""}},computed:{isValid:function(){return!(!this.city||!this.date)}},methods:{onSearch:function(){var t=this.formatDate(this.date);this.$emit("search",{city:this.city,date:t})},formatDate:function(t){var e=new Date(t);return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}}}),k=C,E=(n("bfb7"),Object(s["a"])(k,O,x,!1,null,"1d0eba4d",null)),R=E.exports,M=[{id:"AMS",name:"Amsterdam",country:"Netherlands",imgUrl:"amsterdam.jpg"},{id:"MAD",name:"Madrid",country:"Spain",imgUrl:"madrid.jpg"},{id:"BUD",name:"Budapest",country:"Hungary",imgUrl:"budapest.jpg"}],S=n("bc3a"),L=n.n(S),P=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.get("https://api.skypicker.com/locations?term=".concat(e,"&location_types=airport"));case 2:if(n=t.sent,0!==!n.data.locations.length){t.next=7;break}throw new Error("No location found!");case 7:return t.abrupt("return",n.data.locations[0].id);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",L.a.get("https://api.skypicker.com/flights?fly_from=".concat(e,"&fly_to=").concat(n,"&date_from=").concat(a,"&date_to=").concat(a,"&partner=picky")));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),F={name:"Main",components:{Card:j,Input:R},data:function(){return{cities:M,isLoading:!1,hasResults:!1,hasError:!1}},methods:{onSearch:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var a,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.city,r=t.date,e.hasError=!1,n.prev=2,n.next=5,P(a);case 5:i=n.sent,e.updateCitiesWithFlights(i,r),n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](2),e.hasResults=!1,e.hasError=!0;case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()},updateCitiesWithFlights:function(t,e){var n=this;return Object(g["a"])(regeneratorRuntime.mark((function a(){var r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.isLoading=!0,n.hasError=!1,a.prev=2,r=n.cities.map((function(n){return D(t,n.id,e)})),a.next=6,Promise.all(r);case 6:i=a.sent,n.cities=n.cities.map((function(t,e){return Object(m["a"])(Object(m["a"])({},t),{},{flights:i[e].data.data})})),n.hasResults=!0,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](2),n.hasResults=!1,n.hasError=!0;case 15:n.isLoading=!1;case 16:case"end":return a.stop()}}),a,null,[[2,11]])})))()}}},N=F,U=(n("56c2"),Object(s["a"])(N,f,h,!1,null,"4d2ac576",null)),$=U.exports,T={name:"Home",components:{Main:$}},z=T,B=Object(s["a"])(z,d,p,!1,null,null,null),I=B.exports;a["a"].use(l["a"]);var A=[{path:"/",name:"Home",component:I}],H=new l["a"]({routes:A}),W=H;a["a"].config.productionTip=!1,new a["a"]({router:W,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},7584:function(t,e,n){var a={"./amsterdam.jpg":"1ce6","./budapest.jpg":"c1ed","./madrid.jpg":"13df"};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="7584"},"78bd":function(t,e,n){},"8e54":function(t,e,n){"use strict";n("d035")},"9c0c":function(t,e,n){},bfb7:function(t,e,n){"use strict";n("78bd")},c1ed:function(t,e,n){t.exports=n.p+"img/budapest.2c29d6fb.jpg"},d035:function(t,e,n){}});
//# sourceMappingURL=app.158ef087.js.map