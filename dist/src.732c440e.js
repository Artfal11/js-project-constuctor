parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V48B":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(t){var r=i(t,"string");return"symbol"==e(r)?r:String(r)}function i(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var u=exports.Site=function(){function e(r){t(this,e),this.$el=document.querySelector(r)}return n(e,[{key:"render",value:function(e){var t=this;this.$el.innerHTML="",e.forEach(function(e){t.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),e}();
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class="col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"string"==typeof n?n:Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>\n    </form>\n    <hr />\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=r,exports.col=o,exports.css=t,exports.row=n;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleBlock=exports.TextBlock=exports.ImageBlock=exports.ColumnsBlock=void 0;var t=require("../utils");function e(t,e,r){return e=i(e),o(t,n()?Reflect.construct(e,r||[],i(t).constructor):e.apply(t,r))}function o(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return r(t)}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(n=function(){return!!t})()}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function a(t,e,o){return e&&f(t.prototype,e),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=y(t,"string");return"symbol"==s(e)?e:String(e)}function y(t,e){if("object"!=s(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var b=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return a(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован")}}]),t}(),v=exports.TitleBlock=function(o){function r(t,o){return l(this,r),e(this,r,[t,o])}return u(r,b),a(r,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,r=void 0===o?"h1":o,n=e.styles;return(0,t.row)((0,t.col)("<".concat(r,">").concat(this.value,"<").concat(r,">")),(0,t.css)(n))}}]),r}(),h=exports.ImageBlock=function(o){function r(t,o){return l(this,r),e(this,r,[t,o])}return u(r,b),a(r,[{key:"toHTML",value:function(){var e=this.options,o=e.imageStyles,r=e.alt,n=void 0===r?"":r,i=e.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(n,'" style="').concat((0,t.css)(o),'" />'),(0,t.css)(i))}}]),r}(),m=exports.ColumnsBlock=function(o){function r(t,o){return l(this,r),e(this,r,[t,o])}return u(r,b),a(r,[{key:"toHTML",value:function(){var e=this.options.styles,o=this.value.map(t.col).join("");return(0,t.row)(o,(0,t.css)(e))}}]),r}(),w=exports.TextBlock=function(o){function r(t,o){return l(this,r),e(this,r,[t,o])}return u(r,b),a(r,[{key:"toHTML",value:function(){var e=this.options.styles;return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(e))}}]),r}();
},{"../utils":"FOZT"}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var t=require("../utils"),e=require("./blocks");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t){var e=a(t,"string");return"symbol"==r(e)?e:String(e)}function a(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var l=exports.Sidebar=function(){function r(t,e){n(this,r),this.$el=document.querySelector(t),this.update=e,this.init()}return o(r,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"template",get:function(){return[(0,t.block)("text"),(0,t.block)("title")].join("")}},{key:"add",value:function(t){t.preventDefault();var r=t.target.name,n=t.target.value.value,i=t.target.styles.value,o="text"==r?new e.TextBlock(n,{styles:i}):new e.TitleBlock(n,{styles:i});this.update(o),t.target.value.value="",t.target.styles.value=""}}]),r}();
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),t=require("./sidebar");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e){var t=a(e,"string");return"symbol"==r(t)?t:String(t)}function a(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var f=exports.App=function(){function r(e){n(this,r),this.model=e}return i(r,[{key:"init",value:function(){var r=this,n=new e.Site("#site");n.render(this.model);new t.Sidebar("#panel",function(e){r.model.push(e),n.render(r.model)})}}]),r}();
},{"./site":"V48B","./sidebar":"idI0"}],"CrKI":[function(require,module,exports) {
module.exports="/image.61dd97e5.png";
},{}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=l(require("./assets/image.png")),t=require("./classes/blocks");function l(e){return e&&e.__esModule?e:{default:e}}var o=exports.model=[new t.TitleBlock("Конструктор сайтов на JS",{tag:"h2",styles:{background:"red",color:"#fff",padding:"1.5rem","text-align":"center"}}),new t.TextBlock("Это блок с текстом)",{styles:{"font-size":"16px",background:"black",color:"red","text-align":"right",padding:"1rem","font-weight":"bold"}}),new t.ColumnsBlock(["Первая колонна","Вторая колонна","Третья колонна"],{styles:{background:"purple",color:"#fff",padding:"2rem","font-weight":"bold"}}),new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"Эта картинка"})];
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./classes/app"),s=require("./model");require("./styles/main.css"),new e.App(s.model).init();
},{"./classes/app":"Z1kE","./model":"JDu1","./styles/main.css":"jExt"}]},{},["Focm"], null)