!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){var t,e;t=document.querySelector(".club-select"),e=t.querySelector("ul"),t.addEventListener("click",(function(t){t.target.closest(".clubs-list")&&e.classList.toggle("active-ul"),window.addEventListener("click",(function(t){t.target.closest(".clubs-list")||e.classList.remove("active-ul")}))}));!function(){document.querySelector("body");var t=document.querySelector(".open-popup"),e=document.getElementById("free_visit_form"),n=document.querySelector(".callback-btn"),o=document.getElementById("callback_form"),r=(document.querySelectorAll("input[type=text]:not(.promoCode), input[type=tel], input[type=checkbox]"),document.querySelectorAll("button[type=submit]"),document.querySelectorAll(".close_icon")),i=document.querySelectorAll(".close-btn"),l=document.getElementById("thanks");r.forEach((function(t){t.addEventListener("click",(function(t){var n=t.target.parentNode.parentNode;"free_visit_form"===n.parentNode.id?e.style.display="none":"callback_form"===n.parentNode.id?o.style.display="none":"thanks"===n.parentNode.id&&(l.style.display="none")}))})),t.addEventListener("click",(function(){e.style.display="block"})),n.addEventListener("click",(function(){o.style.display="block"})),i.forEach((function(t){t.style.marginBottom="30px",t.addEventListener("click",(function(){l.style.display="none"}))}))}();!function(){var t=document.querySelector(".fixed-gift"),e=document.getElementById("gift");document.querySelector(".close-btn");try{t.addEventListener("click",(function(){e.style.display="block",t.style.display="none"})),e.addEventListener("click",(function(t){var n=t.target;(n=n.closest(".form-content"))||(e.style.display=""),t.target.closest(".close-btn")&&(e.style.display="")}))}catch(t){console.error()}}();var n,o,r;n=document.querySelectorAll("input[type=text]:not(.promoCode)"),o=document.querySelectorAll("input[type=tel]:not(.promoCode)"),r=document.querySelectorAll("input[type=checkbox]:not(.promoCode)"),n.forEach((function(t){t.addEventListener("input",(function(){var e=t.value;t.value=e.replace(/[^а-яёА-ЯЁ\s]+/gi,"")}))})),o.forEach((function(t){t.addEventListener("input",(function(t){var e=t.target;r.forEach((function(t,n){e.value.length<18?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled")}))}))}))};function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,l=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw l}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(t);function o(t){var n=t.keyCode,o=e,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,a=o.replace(/[_\d]/g,(function(t){return l<i.length?i.charAt(l++)||r.charAt(l):t}));-1!=(l=a.indexOf("_"))&&(a=a.slice(0,l));var s=o.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=a),"blur"==t.type&&this.value.length<5&&(this.value="")}var i,l=r(n);try{for(l.s();!(i=l.n()).done;){var a=i.value;a.addEventListener("input",o),a.addEventListener("focus",o),a.addEventListener("blur",o)}}catch(t){l.e(t)}finally{l.f()}}l("#callback_form1-phone"),l("#callback_form2-phone"),l("#callback_footer_form-phone"),l("#callback_form-phone"),l("#phone");var a=l,s=function(){var t=document.querySelectorAll("form"),e=document.querySelector("body"),n=document.querySelectorAll("input[type=text]:not(.promoCode), input[type=tel], input[type=checkbox], input[type=radio]"),o=(document.querySelectorAll("input[type=checkbox]"),document.querySelectorAll("button[type=submit]")),r=document.getElementById("thanks"),i=(document.getElementById("banner-form"),document.getElementById("footer_form"));t.forEach((function(t){t.addEventListener("submit",(function(e){var i=e.target;e.preventDefault(),t.appendChild(l);var s=document.querySelector(".form-content>p"),c=function(t,n){var o=e.target;if(s.style.cssText="\n\t\t\t\t\theight: 100%;\n\t\t\t\t    display: flex;\n\t\t\t\t    align-items: center;\n\t\t\t\t    justify-content: center;\n\t\t\t\t","banner-form"===o.id||"footer_form"===o.id){r.style.display="flex";var i=document.createElement("span");i.textContent=n,setTimeout((function(){i.textContent=t}),1e3),setTimeout((function(){i.textContent="",r.style.display="none"}),6e3),s.append(i)}else l.textContent=t};"banner-form"===i.id||"footer_form"===i.id?c(void 0,"Идет отправка..."):l.textContent="Идет отправка...";var d=new FormData(t),u={};d.forEach((function(t,e){u[e]=t})),a(u).then((function(t){if(200!==t.status)throw new Error("status network not 200.");c("Отправлено!"),setTimeout((function(){n.forEach((function(t){return t.value=""})),l.textContent=""}),3e3)})).catch((function(t){c("Ошибка"),console.error(t)})),n.forEach((function(t){t.value="",t.checked=!1})),o.forEach((function(t){t.setAttribute("disabled","disabled")}))})),t.addEventListener("click",(function(t){var e=t.target;if(e.closest("input[type=checkbox]"))for(var n=0;n<o.length;n++)e.checked?(o[n].removeAttribute("disabled"),s.style.display="none"):(o[n].setAttribute("disabled","disabled"),s.style.display="block")})),e.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("overlay")){var r=e.parentNode.id;document.getElementById(r).style.display="none",n.forEach((function(t){t.value="",t.checked=!1})),s.style.display="block",o.forEach((function(t){t.setAttribute("disabled","disabled")}))}}));var s=document.createElement("div");t!==i&&(s.style.cssText="font-size: 14px; color: #ffabab; text-decoration: underline;",s.textContent="Подтвердите обработку персональных данных",t.append(s))}));var l=document.createElement("div");l.style.cssText="font-size: 20px; color: white";var a=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}};function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var u=function(){var t,e=c(document.querySelectorAll('li a[href^= "#"], .wrapper>a[href*= "#"]'));try{var n=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(e.s();!(t=e.n()).done;)n()}catch(t){e.e(t)}finally{e.f()}var o=document.querySelector(".top-menu"),r=document.getElementById("totop"),i=o.offsetHeight;window.addEventListener("scroll",(function(){window.pageYOffset>=i?r.style.transform="translateX(0px)":r.style.transform="translateX(100px)"}))};function f(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=function(){var t,e;try{t=document.querySelectorAll(".slide-text"),document.querySelector(".main-slider"),e=0,setInterval((function(){t[e].classList.remove("active"),++e>=t.length&&(e=0),t[e].classList.add("active")}),15e3)}catch(t){console.error()}new(function(){function t(e){var n=e.main,o=e.wrap,r=e.next,i=e.prev,l=e.infinity,a=void 0!==l&&l,s=e.position,c=void 0===s?0:s,d=e.slidesToShow,u=void 0===d?3:d,f=e.responsive,p=void 0===f?[]:f;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&o||console.warn("slider-courusel: Необходимо 2 свойства, 'main' и 'wrap'"),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slides=document.querySelector(o).children,this.slidesToShow=u,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=p}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider_wrap"),this.wrap.classList.add("services-slider");var t,e=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=p(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCourusel-style");t||((t=document.createElement("style")).id="sliderCourusel-style"),t.textContent="\n\t\t\t\t.glo-slider{\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.services-slider{\n\t\t\t\t\ttransition: transform 0.5s;\n\t\t\t\t\twill-change: transform;\n\t\t\t\t}\n\t\t\t\t.glo-slider__wrap{\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t\t.glo-slider__item{\n\t\t\t\t\tflex: 0 0 ".concat(this.options.widthSlide,"%;\n\t\t\t\t\tmargin: auto 0;\n\t\t\t\t}\n\t\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.next.textContent=">",this.prev.textContent="<",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n\t\t\t\t.glo-slider__prev,\n\t\t\t\t.glo-slider__next{\n\t\t\t\t\twidth: 40px;\n\t\t\t\t    height: 40px;\n\t\t\t\t    border: none;\n\t\t\t\t    background-color: #FAD000;\n\t\t\t\t    border-radius: 50%;\n\t\t\t\t    position: absolute;\n\t\t\t\t\ttop: 45%;\n\t\t\t\t\ttransform: translate(50%, -50%);\n\t\t\t\t\tfont-size: 16px;\n    \t\t\t\tfont-weight: 700;\n    \t\t\t\tpadding-top: 4px;\n    \t\t\t\tfilter: drop-shadow(5px 4px 6px black);\n    \t\t\t\ttransition: all .4s;\n\t\t\t\t}\n\t\t\t\t.glo-slider__prev:hover,\n\t\t\t\t.glo-slider__next:hover{\n\t\t\t\t\tfilter: none;\n\t\t\t\t}\n\t\t\t\t.glo-slider__next{\n\t\t\t\t\tright: 25px; \n\t\t\t\t}\n\n\t\t\t\t.glo-slider__prev{\n\t\t\t\t\tleft: 25px;\n\t\t\t\t}\n\t\t\t",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,n=this.responsive.map((function(t){return t.breakpoint})),o=Math.max.apply(Math,f(n)),r=function(){var r=document.documentElement.clientWidth;if(r<o)for(var i=0;i<n.length;i++)r<n[i]&&(t.slidesToShow=t.responsive[i].slidesToShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=e,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()};r(),window.addEventListener("resize",r)}}])&&y(e.prototype,n),o&&y(e,o),t}())({main:".wrapper-slider",wrap:".services-slider",slidesToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init();try{!function(){for(var t=document.querySelectorAll(".gallery-slider>.slide"),e=document.querySelector(".dots"),n=0;n<t.length;n++){var o=document.createElement("li");o.classList.add("dot"),e.append(o)}var r=document.createElement("style");r.textContent="\n\t\t\t.dots{\n\t\t\t\tposition: absolute;\n\t\t\t    margin: 0 auto;\n\t\t\t    left: 0;\n\t\t\t    right: 0;\n\t\t\t    bottom: 30px;\n\t\t\t}\n\t\t\t.dot.dot-active{\n\t\t\t\tborder: solid #ffd12e;\n\t\t\t}\n\t\t\t.dot{\n\t\t\t    cursor: pointer;\n\t\t\t    height: 6px;\n\t\t\t\twidth: 30px;\n\t\t\t    margin: 0 10px;\n\t\t\t    border: solid #fff;\n\t\t\t    display: inline-block;\n\t\t\t    -webkit-transition: background-color,-webkit-transform .4s;\n\t\t\t    transition: background-color,transform .4s,-webkit-transform .4s;\n\t\t\t}\n\t\t\t.sliderBtn{\n\t\t\t\twidth: 40px;\n\t\t\t    height: 40px;\n\t\t\t    border: none;\n\t\t\t    background-color: #FAD000;\n\t\t\t    border-radius: 50%;\n\t\t\t    position: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translate(50%, -50%);\n\t\t\t\tfont-size: 16px;\n\t\t\t\tfont-weight: 700;\n\t\t\t\tpadding-top: 4px;\n\t\t\t\tfilter: drop-shadow(5px 4px 6px black);\n\t\t\t\ttransition: all .4s;\n\t\t\t}\n\t\t\t.next:hover,\n\t\t\t.prev:hover{\n\t\t\t\tfilter: none;\n\t\t\t}\n\t\t\t.next{\n\t\t\t\tright: 50px;\n\t\t\t}\n\t\t\t.prev{\n\t\t\t\tleft: 10px;\n\t\t\t}\n\t\t",document.head.append(r)}()}catch(t){console.error()}try{!function(){var t,e=document.querySelectorAll(".gallery-slider>.slide"),n=(document.querySelectorAll(".sliderBtn"),document.querySelectorAll(".dot")),o=document.querySelector(".gallery-slider"),r=0;!function(){for(var t=document.querySelectorAll(".dot"),e=0;e<t.length;e++)t[0].classList.add("dot-active")}();var i=function(t,e,n){try{t[e].classList.remove(n)}catch(t){console.error()}},l=function(t,e,n){try{t[e].classList.add(n)}catch(t){console.error()}},a=function(){try{i(e,r,"galleryActive"),i(n,r,"dot-active")}catch(t){console.error()}++r>=e.length&&(r=0),l(e,r,"galleryActive"),l(n,r,"dot-active")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;t=setInterval(a,e)};o.addEventListener("click",(function(t){t.preventDefault();var o=t.target;o.matches(".sliderBtn, .dot")&&(i(e,r,"galleryActive"),i(n,r,"dot-active"),o.matches(".next")?r++:o.matches(".prev")?r--:o.matches(".dot")&&n.forEach((function(t,e){t===o&&(r=e)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),l(e,r,"galleryActive"),l(n,r,"dot-active"))})),o.addEventListener("mouseover",(function(e){(e.target.matches(".sliderBtn")||e.target.matches(".dot"))&&clearInterval(t)})),o.addEventListener("mouseout",(function(t){(t.target.matches(".sliderBtn")||t.target.matches(".dot"))&&s()})),s(4e3)}()}catch(t){console.error()}},v=function(){var t=document.querySelector(".menu-button"),e=document.querySelector(".popup-menu");t.addEventListener("click",(function(){e.style.display="flex"})),e.addEventListener("click",(function(t){var n=t.target;e.style.display="flex",(n.matches(".close-menu-btn img ")||n.matches(".scroll a"))&&(e.style.display="none")}));var n=document.querySelector(".top-menu"),o=n.offsetTop;window.addEventListener("scroll",(function(){window.pageYOffset>=o?n.style.position="fixed":n.style.position="static"}))},b=function(){var t=document.querySelectorAll(".time>input[type=radio]"),e=document.querySelectorAll(".club>input[type=radio]"),n=document.getElementById("card_order"),o=document.querySelector(".input-text"),r=document.querySelector(".promoCode"),i=document.getElementById("price-total");i.textContent=0;t.forEach((function(e){e.addEventListener("click",(function(n){t.forEach((function(t){t.removeAttribute("checked")})),e.setAttribute("checked","checked")}))})),e.forEach((function(t){t.addEventListener("click",(function(n){e.forEach((function(t){t.removeAttribute("checked")})),t.setAttribute("checked","checked")}))}));n.addEventListener("click",(function(t){var e=t.target;console.dir(e);var n={m1:1990,m2:9900,m3:13900,m4:19900};for(var l in n)e.id===l&&(i.textContent=n[l]);var a=i.textContent;0==a?r.setAttribute("disabled","disabled"):r.removeAttribute("disabled"),o.addEventListener("input",(function(t){var e=t.target;console.log(e),"ТЕЛО2019"===e.value&&(console.log("1"),i.textContent=30*a/100,e.classList.contains("promoCode")&&e.setAttribute("disabled","disabled"))}))}))};o(),a("селектор элементов","маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__"),s(),u(),m(),v(),b()}]);