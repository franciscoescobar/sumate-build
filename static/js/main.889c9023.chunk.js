(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,n,t){e.exports=t.p+"static/media/ocean.f7b31a19.mp4"},121:function(e,n,t){e.exports=t.p+"static/media/logo.8b32ee1c.svg"},122:function(e,n,t){e.exports=t.p+"static/media/sumate.921dab27.svg"},124:function(e,n,t){e.exports=t.p+"static/media/mano.5132af15.svg"},125:function(e,n,t){e.exports=t.p+"static/media/huella.8ba8cbed.svg"},126:function(e,n,t){e.exports=t.p+"static/media/finalizado.f2be5f61.svg"},127:function(e,n,t){e.exports=t.p+"static/media/enviar.b90fd636.svg"},128:function(e,n,t){e.exports=t.p+"static/media/lapiz.1f43d02b.svg"},129:function(e,n,t){},130:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(32),c=t.n(r),o=t(10),m=t(12),l=t(18),s=t(48),u=t.n(s),d=t(1),p=t(2),h=t(49),x=t.n(h);function f(){var e=Object(d.a)(["\n  margin-top: 30px;\n"]);return f=function(){return e},e}function b(){var e=Object(d.a)(["\n  height: 65rem;\n  width: 65rem;\n  @media (max-width: 700px) {\n    height: 30rem;\n    width: 30rem;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(d.a)(["\n  margin-top: 7rem;\n  height: 7rem;\n  width: 7rem;\n  @media (max-width: 700px) {\n    height: 5rem;\n    width: 5rem;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(d.a)(["\n  height: 20rem;\n  width: 20rem;\n  @media (max-width: 700px) {\n    height: 10rem;\n    width: 10rem;\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 3;\n"]);return E=function(){return e},e}function w(){var e=Object(d.a)(["\n  position: fixed;\n"]);return w=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: flex;\n  height: 100%;\n  z-index: 2;\n  justify-content: center;\n  background-size: cover;\n  > img {\n    height: 120px;\n    width: 120px;\n  }\n"]);return j=function(){return e},e}var k=p.a.div(j()),A=p.a.video(w()),O=p.a.div(E()),S=p.a.img(v()),I=(p.a.img(g()),p.a.img(b())),y=Object(p.a)(x.a)(f()),C=Object(m.f)(function(e){var n=e.one,r=e.history,c=Object(a.useState)(!1),o=Object(l.a)(c,2),m=o[0],s=o[1];return window.setTimeout(function(){n||r.push("/slide/3")},3e3),i.a.createElement(k,{style:{background:"url(".concat(u.a,")")}},i.a.createElement(A,{loop:!0,autoPlay:!0,playsInline:!0,muted:!0},i.a.createElement("source",{src:t(120),type:"video/mp4"}),"Your browser does not support the video tag."),n?i.a.createElement(O,null,i.a.createElement(S,{alt:"foto",src:t(121)}),i.a.createElement(y,{checked:m,onChange:function(){s(!m),document.body.requestFullscreen(),window.setTimeout(function(){r.push("/slide/2")},500)}})):i.a.createElement(O,null,i.a.createElement(I,{alt:"foto",src:t(122)})))}),G=function(){return i.a.createElement(C,{one:!0})},L=function(){return i.a.createElement(C,{one:!1})};function Q(){var e=Object(d.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: linear-gradient(#833582, #351335);\n  color: white;\n  > img {\n    height: 10rem;\n    width: 10rem;\n\n    @media (max-width: 700px) {\n      height: 7rem;\n      width: 7rem;\n    }\n  }\n  > * > img {\n    height: 10rem;\n    width: 10rem;\n\n    @media (max-width: 700px) {\n      height: 7rem;\n      width: 7rem;\n    }\n  }\n  > img.hand {\n    animation-name: wave-animation;\n    animation-duration: 2.5s;\n    animation-iteration-count: infinite;\n    transform-origin: 70% 70%;\n    @keyframes wave-animation {\n      0% {\n        transform: rotate(0deg);\n      }\n      10% {\n        transform: rotate(-10deg);\n      }\n      20% {\n        transform: rotate(12deg);\n      }\n      30% {\n        transform: rotate(-10deg);\n      }\n      40% {\n        transform: rotate(9deg);\n      }\n      50% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(0deg);\n      }\n    }\n  }\n  > h1 {\n    margin: 0;\n    font-size: 4rem;\n    @media (max-width: 700px) {\n      font-size: 2rem;\n    }\n  }\n  > p {\n    text-align: center;\n    margin: 0;\n    font-size: 1.5rem;\n    width: 600px;\n    @media (max-width: 700px) {\n      width: 300px;\n      font-size: 1rem;\n    }\n  }\n"]);return Q=function(){return e},e}var z=p.a.div(Q()),H=Object(m.f)(function(e){var n=e.number,a=e.history;return window.setTimeout(function(){3===n?a.push("/slide/4"):10===n&&a.push("/")},4e3),i.a.createElement(i.a.Fragment,null,3===n?i.a.createElement(z,null,i.a.createElement("img",{alt:"mano",className:"hand",src:t(124)}),i.a.createElement("h1",null,"Hola"),i.a.createElement("p",null,"Estas interactuando con Anchipurac.")):null,4===n?i.a.createElement(z,null,i.a.createElement(o.b,{to:"/slide/".concat(n+1)},i.a.createElement("img",{alt:"huella",src:t(125)})),i.a.createElement("h1",null,"Dejanos tu huella"),i.a.createElement("p",null,"Posiciona tu dedo")):null,10===n?i.a.createElement(z,null,i.a.createElement("img",{alt:"finalizado",src:t(126)}),i.a.createElement("h1",null,"Gracias"),i.a.createElement("p",null,"Por compartir tu experiencia con Anchipurac. Ahora sos nuestro"," ",i.a.createElement("strong",null,"soicio comprometido")," con el ciudado del ambiente.")):null)}),N=function(){return i.a.createElement(H,{number:3})},M=function(){return i.a.createElement(H,{number:4})},W=function(){return i.a.createElement(H,{number:10})},B=t(54),Y=t.n(B);function q(){var e=Object(d.a)(["\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .canvas {\n    margin: 20px;\n    height: 70%;\n    width: 80%;\n    border: 1px solid #cbcbcb;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    @media (max-width: 700px) {\n      margin: 20px;\n      overflow: hidden;\n    }\n  }\n  > * > h1 {\n    font-size: 24px;\n    @media (max-width: 700px) {\n      font-size: 16px;\n    }\n  }\n  > * .image {\n    height: 5rem;\n    width: 5rem;\n    @media (max-width: 700px) {\n      height: 3rem;\n      width: 3rem;\n    }\n  }\n"]);return q=function(){return e},e}var T=p.a.div(q()),V=function(e){var n=e.title;return i.a.createElement(T,null,i.a.createElement(o.b,{to:"/slide/10"},i.a.createElement("h1",null,n)),i.a.createElement("div",{className:"canvas"},i.a.createElement(Y.a,null)),i.a.createElement(o.b,{to:"/slide/10"},i.a.createElement("img",{className:"image",alt:"img",src:t(127)})))},D={checkboxFive:[{active:!1,span:"Herencia Ancestral"},{active:!1,span:"Somos parte del todo"},{active:!1,span:"Tu huella"},{active:!1,span:"El ciclo de los residuos"},{active:!1,span:"Laboratorio ambiental"},{active:!1,span:"Observatorio ambiental"},{active:!1,span:"El sost\xe9n de la vida"},{active:!1,span:"Nuestro mundo. Tu casa"},{active:!1,span:"M\xe1s de un futuro es posible"},{active:!1,span:"Las voces del compromiso"},{active:!1,span:"La fuerza que mueve al mundo"},{active:!1,span:"Anchipurac, dise\xf1o bioclim\xe1tico"},{active:!1,span:"Tu energ\xeda hace la diferencia"},{active:!1,span:"Somos naturaleza"}],titleFive:"\xbfQu\xe9 temas son los que m\xe1s te interesaron?",checkboxSix:[{active:!1,span:"Glaciares"},{active:!1,span:"Recursos naturales"},{active:!1,span:"El hombre"},{active:!1,span:"Biodiversidad"}],titleSix:"\xbfQu\xe9 temas son los que m\xe1s te interesaron?",checkboxSeven:[{active:!1,span:"Herencia Ancestral"},{active:!1,span:"Somos parte del todo"},{active:!1,span:"Tu huella"},{active:!1,span:"El ciclo de los residuos"},{active:!1,span:"Laboratorio ambiental"},{active:!1,span:"Observatorio ambiental"},{active:!1,span:"El sost\xe9n de la vida"},{active:!1,span:"Nuestro mundo. Tu casa"},{active:!1,span:"M\xe1s de un futuro es posible"},{active:!1,span:"Las voces del compromiso"},{active:!1,span:"La fuerza que mueve al mundo"},{active:!1,span:"Anchipurac, dise\xf1o bioclim\xe1tico"},{active:!1,span:"Tu energ\xeda hace la diferencia"},{active:!1,span:"Somos naturaleza"}],titleSeven:"\xbfQu\xe9 informaci\xf3n quieres que te enviemos?",titleEight:"Dej\xe1 un mensaje de tu experiencia con nosotros"},K=function(){return i.a.createElement(V,{number:9,title:"Dej\xe1 un mensaje de tu experiencia con nosotros"})},R=t(13);function U(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: black;\n  height: 78%;\n  flex-wrap: wrap;\n\n  > * > img {\n    height: 10rem;\n    width: 10rem;\n    border: 1px solid #cbcbcb;\n    border-radius: 3px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n    @media (max-width: 700px) {\n      height: 5rem;\n      width: 5rem;\n    }\n  }\n  > p {\n    margin-top: 3rem;\n    font-size: 1.5rem;\n    font-weight: 300;\n    @media (max-width: 700px) {\n      font-size: 0.75rem;\n    }\n  }\n"]);return U=function(){return e},e}function Z(){var e=Object(d.a)(["\n  background-color: #cbcbcb;\n  border-radius: 50%;\n  margin: 0 1rem;\n  height: 1rem;\n  width: 1rem;\n\n  @media (max-width: 1520px) {\n    height: 0.85rem;\n    width: 0.85rem;\n  }\n  @media (max-width: 700px) {\n    height: 0.7rem;\n    width: 0.7rem;\n  }\n"]);return Z=function(){return e},e}function F(){var e=Object(d.a)(["\n  display: flex;\n  .selected {\n    border: 1px solid black;\n  }\n"]);return F=function(){return e},e}function P(){var e=Object(d.a)(["\n  height: 2rem;\n  width: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n  border: 1px solid #cbcbcb;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"]);return P=function(){return e},e}function X(){var e=Object(d.a)(['\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 60%;\n  width: 80%;\n  padding: 3rem;\n  @media (max-width: 700px) {\n    padding: 1rem;\n    width: 90%;\n  }\n  @media (max-width: 1520px) {\n    padding: 1rem;\n    width: 90%;\n  }\n  .last-item {\n    justify-self: flex-start;\n  }\n  > li {\n    display: flex;\n    align-items: center;\n    flex-basis: 25rem;\n    justify-content: center;\n    @media (max-width: 700px) {\n      padding: 5px;\n      flex-basis: 7rem;\n    }\n  }\n  > li > .checkbox {\n    height: 50px;\n    width: 50px;\n    border: 1px solid #747474;\n\n    @media (max-width: 1520px) {\n      height: 40px;\n      width: 40px;\n    }\n    @media (max-width: 700px) {\n      height: 30px;\n      width: 30px;\n    }\n  }\n  > li > .active {\n    background: url("data:image/png;base64,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");\n    background-size: cover;\n  }\n  > li > span {\n    font-size: 24px;\n    width: 50%;\n    margin-left: 10px;\n\n    @media (max-width: 1520px) {\n      font-size: 18px;\n    }\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n']);return X=function(){return e},e}function J(){var e=Object(d.a)(["\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #030303;\n  > h1 {\n    @media (max-width: 700px) {\n      font-size: 16px;\n    }\n  }\n"]);return J=function(){return e},e}var $=p.a.div(J()),_=p.a.ul(X()),ee=p.a.div(P()),ne=p.a.div(F()),te=p.a.div(Z()),ae=p.a.div(U()),ie=Object(m.f)(function(e){var n=e.number,a=e.title,r=e.checkboxs,c=e.onActiveChange,m=e.onClearCheckboxes,l=e.history;return i.a.createElement($,null,i.a.createElement("h1",null,a),8!==n?i.a.createElement(_,null,r.map(function(e){return i.a.createElement("li",{key:e.span,className:"Tu energ\xeda hace la diferencia"===e.span||"Somos naturaleza"===e.span?"last-item":""},i.a.createElement("div",{name:e.span,className:e.active?"checkbox active":"checkbox",onClick:function(){return n=e.span,void c(n);var n}}),i.a.createElement("span",null,e.span))})):i.a.createElement(ae,null,i.a.createElement(o.b,{to:"/slide/".concat(n+1),onClick:function(){m()}},i.a.createElement("img",{alt:"lapiz",src:t(128)})),i.a.createElement("p",null,"Con el l\xe1piz digital deja tu mensaje o ilustraci\xf3n en esta pantalla.")),8!==n&&i.a.createElement(ee,{onClick:function(){r.filter(function(e){return!0===e.active}).length>0&&l.push("/slide/".concat(n+1))}},i.a.createElement("i",{class:"fas fa-chevron-right"})),i.a.createElement(ne,null,i.a.createElement(te,{className:5===n?"selected":""}),i.a.createElement(te,{className:6===n?"selected":""}),i.a.createElement(te,{className:7===n?"selected":""}),i.a.createElement(te,{className:8===n?"selected":""})))}),re=function(e){var n=e.match,t=Object(a.useState)(D.checkboxFive),r=Object(l.a)(t,2),c=r[0],o=r[1],m=Object(a.useState)(D.checkboxSix),s=Object(l.a)(m,2),u=s[0],d=s[1],p=Object(a.useState)(D.checkboxSeven),h=Object(l.a)(p,2),x=h[0],f=h[1],b=Number(n.params.id),g=function(e){if(5===b){var n=c.findIndex(function(n){return n.span===e}),t=c[n];t.active=!t.active;var a=c.slice(0,n);a.concat(t);var i=c.slice(n,c.length),r=[].concat(Object(R.a)(a),Object(R.a)(i));o(r)}else if(6===b){var m=u.findIndex(function(n){return n.span===e}),l=u[m];l.active=!l.active;var s=u.slice(0,m);s.concat(l);var p=u.slice(m,u.length),h=[].concat(Object(R.a)(s),Object(R.a)(p));d(h)}else if(7===b){var g=x.findIndex(function(n){return n.span===e}),v=x[g];v.active=!v.active;var E=x.slice(0,g);E.concat(v);var w=x.slice(g,x.length),j=[].concat(Object(R.a)(E),Object(R.a)(w));f(j)}};return 5===b?i.a.createElement(ie,{number:b,checkboxs:D.checkboxFive,title:D.titleFive,onActiveChange:g}):6===b?i.a.createElement(ie,{number:b,checkboxs:D.checkboxSix,title:D.titleSix,onActiveChange:g}):7===b?i.a.createElement(ie,{number:b,checkboxs:D.checkboxSeven,title:D.titleSeven,onActiveChange:g}):i.a.createElement(ie,{number:b,title:D.titleEight,onClearCheckboxes:function(){D.checkboxFive.map(function(e){return e.active=!1}),D.checkboxSix.map(function(e){return e.active=!1}),D.checkboxSeven.map(function(e){return e.active=!1}),o(D.checkboxFive),d(D.checkboxSix),f(D.checkboxSeven)}})},ce=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(o.a,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",exact:!0,component:G}),i.a.createElement(m.a,{path:"/slide/2",component:L}),i.a.createElement(m.a,{path:"/slide/3",component:N}),i.a.createElement(m.a,{path:"/slide/4",component:M}),i.a.createElement(m.a,{path:"/slide/9",component:K}),i.a.createElement(m.a,{path:"/slide/10",component:W}),i.a.createElement(m.a,{path:"/slide/:id",component:re}))))};t(129);c.a.render(i.a.createElement(ce,null),document.getElementById("root"))},48:function(e,n,t){e.exports=t.p+"static/media/AGUA-SUMATE.6a45e5de.jpg"},57:function(e,n,t){e.exports=t(130)}},[[57,1,2]]]);
//# sourceMappingURL=main.889c9023.chunk.js.map