(this["webpackJsonppokedex-app-v2"]=this["webpackJsonppokedex-app-v2"]||[]).push([[0],{38:function(e,t,n){},45:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(29),s=n.n(r),o=n(5),i=n.n(o),u=n(10),l=n(2),j=n(11),b=n(3),p=(n(37),n(38),n(1)),m=function(){return Object(p.jsx)("header",{className:"navbar navbar-light bg-light App-header w-100",children:Object(p.jsx)(j.b,{to:"/",children:Object(p.jsx)("h1",{className:"pokemon-font navbar-brand mb-0 h1",children:"Pokedex"})})})},d=(n(45),n.p+"static/media/flying_pikachu.cb56e344.gif"),f=function(e){var t=e.name,n=e.url,c=e.isLoading,r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],i=s[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),m=b[0],f=b[1];return Object(a.useEffect)((function(){var e=n.split("/")[n.split("/").length-2],t="https://pokeres.bastionbot.org/images/pokemon/".concat(e,".png");f(t),i(e)}),[]),Object(p.jsx)("div",{className:"col col-lg-2 text-center mb-5",children:Object(p.jsxs)(j.b,{className:"pokemon-text-dec",to:"pokemon/".concat(o),children:[Object(p.jsxs)("h6",{className:"text-left ml-3 pokemon-font",children:["# ",o]}),c?Object(p.jsx)("img",{className:"pokemon-img mb-4",src:d,alt:t}):Object(p.jsx)("img",{className:"pokemon-img mb-4",src:m,alt:t}),Object(p.jsx)("h1",{className:"pokemon pokemon-font",children:t.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})]})})},h=function(e){var t=e.pokemons,n=e.isLoading,a=t.map((function(e){return Object(p.jsx)(f,{name:e.name,url:e.url,isLoading:n},e.name)}));return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row mt-5",children:a})})},O=n(12),x=n.n(O),g=(n(64),function(e){var t=e.allPokemon,n=e.pokemonNamesList,c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],o=r[1],j=Object(a.useState)(!0),m=Object(l.a)(j,2),d=m[0],f=m[1],h=Object(a.useState)([]),O=Object(l.a)(h,2),x=O[0],g=O[1],v=Object(a.useState)(-1),k=Object(l.a)(v,2),N=k[0],w=k[1],y=Object(a.useRef)(null),S=Object(a.useRef)(),C=Object(b.f)();Object(a.useEffect)((function(){return document.addEventListener("mousedown",E),function(){document.removeEventListener("mousedown",E)}}),[]);var E=function(e){var t=y.current;t&&!t.contains(e.target)&&g([])},A=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.toLowerCase(),e.next=3,t.find((function(e){return e.name===n}));case 3:(a=e.sent)?(f(!0),c=a.url.split("/")[a.url.split("/").length-2],C.push("/pokemon/".concat(c))):f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(e){"ArrowDown"===e.key&&x&&(w((function(e){return e<x.length-1?e+1:e})),o(x[N+1])),"ArrowUp"===e.key&&(w((function(e){return e>0?e-1:0})),o(x[N-1])),"Escape"===e.key&&g([]),console.log(N),console.log(e.key)};return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A(),o(""),g([])},className:"form-inline justify-content-center mt-4",ref:y,children:[Object(p.jsxs)("div",{className:"autocomplete",children:[Object(p.jsx)("input",{onChange:function(e){var t=e.target.value;o(t);var a=[];if(t.length>0){var c=new RegExp("^".concat(t),"i");a=n.sort().filter((function(e){return c.test(e)}))}g(a)},value:s,className:"form-control mr-sm-2",type:"search",placeholder:d?"Search Pokedex":"Pokemon doesn't exist","aria-label":"Search",ref:S,onKeyDown:function(e){return U(e)}}),Object(p.jsx)("div",{children:0===x.length?null:Object(p.jsx)("ul",{onKeyDown:function(e){return U(e)},children:x.map((function(e,t){return Object(p.jsx)("li",{className:N===t?"highlight":null,tabIndex:"0",onClick:function(){return o(e),g([]),void S.current.focus()},children:e},e)}))})})]}),Object(p.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0 searchBtn",type:"submit",children:"Search"})]})}),v=function(e){var t=e.prevUrl,n=e.nextUrl,a=e.gotoPrevUrl,c=e.gotoNextUrl;return Object(p.jsx)("div",{className:"text-center mt-3","aria-label":"...",children:Object(p.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(p.jsx)("li",{className:t?"page-item pointer":"page-item disabled",onClick:t?a:null,children:Object(p.jsx)("button",{className:"page-link",children:"Previous"})}),Object(p.jsx)("li",{className:n?"page-item pointer":"page-item disabled",onClick:n?c:null,children:Object(p.jsx)("button",{className:"page-link",children:"Next"})})]})})},k=n(19),N=(n(65),function(e){var t=e.name,n=e.url,c=Object(a.useState)(""),r=Object(l.a)(c,2),s=r[0],o=r[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(n);case 2:t=e.sent,a="",t.data.flavor_text_entries.some((function(e){return"en"===e.language.name&&(a=e.flavor_text),a})),o(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var j=t.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ");return Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("h5",{children:j}),Object(p.jsx)("p",{children:s})]})}),w=function(){var e=Object(a.useState)({name:"",id:"",height:"",weight:""}),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),o=s[0],j=s[1],m=Object(a.useState)([]),f=Object(l.a)(m,2),h=f[0],O=f[1],g=Object(a.useState)([]),v=Object(l.a)(g,2),w=v[0],y=v[1],S=Object(a.useState)(!1),C=Object(l.a)(S,2),E=C[0],A=C[1],U=Object(b.h)().pokeIndex,D="https://pokeapi.co/api/v2/pokemon/".concat(U,"/"),L="https://pokeres.bastionbot.org/images/pokemon/".concat(U,".png"),B=Object(b.g)();Object(a.useEffect)((function(){A(!0),function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(D);case 2:return t=e.sent,e.next=5,t.data.abilities.map((function(e){return e.ability}));case 5:return n=e.sent,e.next=8,t.data.types.map((function(e){return e.type.name}));case 8:return a=e.sent,e.next=11,x.a.get(t.data.species.url).then((function(e){var t="";e.data.flavor_text_entries.some((function(e){return"en"===e.language.name&&(t=e.flavor_text.replace("\f"," ")),t})),j(t)}));case 11:y(a),O(n),c((function(e){return Object(k.a)(Object(k.a)({},e),{},{name:t.data.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "),id:t.data.id,height:t.data.height,weight:t.data.weight})})),A(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[B]);var P={normal:"#A0A29F",poison:"#BD62D2",psychic:"#FD998E",grass:"#5BC173",ground:"#DB7A4A",ice:"#88DAD0",fire:"#FBAB48",rock:"#D5CA8F",dragon:"#027DC7",water:"#67B7E3",bug:"#ABC635",dark:"#6C7182",fighting:"#E3434C",ghost:"#7272CF",steel:"#52899E",flying:"#94ACDE",electric:"#F8E06A",fairy:"#F2A4E7"},F=h.map((function(e){return Object(p.jsx)(N,{name:e.name,url:e.url},e.name)})),I=w.map((function(e){return Object(p.jsx)("span",{style:{backgroundColor:"".concat(P[e]),color:"black"},className:"badge badge-primary badge-pill mr-1",children:e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")},e)})),_=Math.round(100*(.328084*n.height+1e-4))/100,H=Math.round(100*(.220462*n.weight+1e-4))/100;return Object(p.jsx)("div",{className:"justify-content-center text-center mt-5 container",children:E?Object(p.jsx)("img",{className:"pokemon-img mb-4",src:d,alt:n.name}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"pokemon-font",children:n.name}),Object(p.jsx)("p",{className:"poke-types",children:I}),Object(p.jsx)("img",{className:"pokemon-img mt-5",src:L,alt:n.name}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"d-flex justify-content-around font-weight-bold mt-5 poke-info",children:[Object(p.jsxs)("span",{children:["ID: ",n.id]}),Object(p.jsxs)("span",{children:["HEIGHT: ",_,"ft"]}),Object(p.jsxs)("span",{children:["WEIGHT: ",H,"lbs"]})]})}),Object(p.jsx)("p",{className:"mt-5",children:o}),Object(p.jsxs)("div",{className:"container mt-5 text-left pokemond-abilities",children:[Object(p.jsx)("h3",{className:"mb-3 text-center",children:Object(p.jsx)("u",{children:"Abilities"})}),Object(p.jsx)("div",{children:F})]})]})})};var y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(l.a)(r,2),o=s[0],d=s[1],f=Object(a.useState)([]),O=Object(l.a)(f,2),k=O[0],N=O[1],y=Object(a.useState)("https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"),S=Object(l.a)(y,2),C=S[0],E=S[1],A=Object(a.useState)(""),U=Object(l.a)(A,2),D=U[0],L=U[1],B=Object(a.useState)(""),P=Object(l.a)(B,2),F=P[0],I=P[1],_=Object(a.useState)(!1),H=Object(l.a)(_,2),M=H[0],R=H[1];Object(a.useEffect)((function(){R(!0),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(C).then((function(e){c(e.data.results),L(e.data.next),I(e.data.previous),R(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");case 2:t=e.sent,n=t.data.results.map((function(e){return e.name})),a=t.data.results.map((function(e){return e})),d(a),N(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var G=function(){E(F)},J=function(){E(D)};return Object(p.jsx)("div",{children:Object(p.jsxs)(j.a,{basename:"/",children:[Object(p.jsx)(m,{}),Object(p.jsx)(g,{allPokemon:o,pokemonNamesList:k}),Object(p.jsxs)(b.c,{children:[Object(p.jsxs)(b.a,{exact:!0,path:"/",children:[Object(p.jsx)(v,{prevUrl:F,nextUrl:D,gotoPrevUrl:G,gotoNextUrl:J}),Object(p.jsx)(h,{pokemons:n,isLoading:M}),Object(p.jsx)(v,{prevUrl:F,nextUrl:D,gotoPrevUrl:G,gotoNextUrl:J})]}),Object(p.jsx)(b.a,{exact:!0,path:"/pokemon/:pokeIndex",children:Object(p.jsx)(w,{})})]})]})})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.70880990.chunk.js.map