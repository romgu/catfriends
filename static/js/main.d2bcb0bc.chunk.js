(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(57)},34:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=n(11),s=n(7),l=n(19),u=n(20),d=(n(33),n(2)),h=n(3),f=n(5),p=n(4),g=n(6),m=(n(34),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-washed-yellow dib br3 pa3 ma3 dim bw2 shadow-5"},r.a.createElement("img",{alt:"cats",src:"https://robohash.org/".concat(a,"?set=set4&size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f2"},t),r.a.createElement("p",{className:"helvetica"},n)))}),E=function(e){var t=e.cats;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},v=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Cats",className:"pa3 ba b--black bg-lightest-yellow ttc helvetica",type:"search",placeholder:"search cats",onChange:t}))},b=n(21),C=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("h1",{className:"f1 marginTop"},"CatFriends")}}]),t}(a.Component),w=(n(54),function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestCats()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.cats,c=e.isPending,o=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return c?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(C,null),r.a.createElement(v,{searchChange:n}),r.a.createElement(b.Scrollbars,{style:{width:"100%",height:"80vh"}},r.a.createElement(E,{cats:o})))}}]),t}(a.Component)),y=(n(55),function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(w,this.props)}}]),t}(a.Component)),j=Object(i.b)(function(e){return{searchField:e.searchCats.searchField,cats:e.requestCats.cats,isPending:e.requestCats.isPending,error:e.requestCats.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestCats:function(){return e(function(e){e({type:"REQUEST_CATS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_CATS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_CATS_FAILED",payload:t})})})}}})(y),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _={searchField:""},k={isPending:!1,cats:[],error:""},N=(n(56),Object(l.createLogger)()),A=Object(s.c)({searchCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_CATS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_CATS_SUCCESS":return Object.assign({},e,{cats:t.payload,isPending:!1});case"REQUEST_CATS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(A,Object(s.a)(u.a,N));o.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/catfriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/catfriends","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.d2bcb0bc.chunk.js.map