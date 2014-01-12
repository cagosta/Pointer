/**
 * almond 0.2.7 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/**
 * SeedHq version: "0.0.14" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/SeedHq for details
 */

/**
 * Pointer version: "0.0.3" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/Pointer for details
 */

var requirejs,require,define;!function(e){function t(e,t){return m.call(e,t)}function n(e,t){var n,i,r,o,s,u,c,f,h,a,p=t&&t.split("/"),l=y.map,d=l&&l["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),f=0;f<e.length;f+=1)if(a=e[f],"."===a)e.splice(f,1),f-=1;else if(".."===a){if(1===f&&(".."===e[2]||".."===e[0]))break;f>0&&(e.splice(f-1,2),f-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||d)&&l){for(n=e.split("/"),f=n.length;f>0;f-=1){if(i=n.slice(0,f).join("/"),p)for(h=p.length;h>0;h-=1)if(r=l[p.slice(0,h).join("/")],r&&(r=r[i])){o=r,s=f;break}if(o)break;!u&&d&&d[i]&&(u=d[i],c=f)}!o&&u&&(o=u,s=c),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function i(t,n){return function(){return h.apply(e,v.call(arguments,0).concat([t,n]))}}function r(e){return function(t){return n(t,e)}}function o(e){return function(t){l[e]=t}}function s(n){if(t(d,n)){var i=d[n];delete d[n],g[n]=!0,f.apply(e,i)}if(!t(l,n)&&!t(g,n))throw new Error("No "+n);return l[n]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function c(e){return function(){return y&&y.config&&y.config[e]||{}}}var f,h,a,p,l={},d={},y={},g={},m=Object.prototype.hasOwnProperty,v=[].slice;a=function(e,t){var i,o=u(e),c=o[0];return e=o[1],c&&(c=n(c,t),i=s(c)),c?e=i&&i.normalize?i.normalize(e,r(t)):n(e,t):(e=n(e,t),o=u(e),c=o[0],e=o[1],c&&(i=s(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:i}},p={require:function(e){return i(e)},exports:function(e){var t=l[e];return"undefined"!=typeof t?t:l[e]={}},module:function(e){return{id:e,uri:"",exports:l[e],config:c(e)}}},f=function(n,r,u,c){var f,h,y,m,v,b,x=[],_=typeof u;if(c=c||n,"undefined"===_||"function"===_){for(r=!r.length&&u.length?["require","exports","module"]:r,v=0;v<r.length;v+=1)if(m=a(r[v],c),h=m.f,"require"===h)x[v]=p.require(n);else if("exports"===h)x[v]=p.exports(n),b=!0;else if("module"===h)f=x[v]=p.module(n);else if(t(l,h)||t(d,h)||t(g,h))x[v]=s(h);else{if(!m.p)throw new Error(n+" missing "+h);m.p.load(m.n,i(c,!0),o(h),{}),x[v]=l[h]}y=u?u.apply(l[n],x):void 0,n&&(f&&f.exports!==e&&f.exports!==l[n]?l[n]=f.exports:y===e&&b||(l[n]=y))}else n&&(l[n]=u)},requirejs=require=h=function(t,n,i,r,o){return"string"==typeof t?p[t]?p[t](n):s(a(t,n).f):(t.splice||(y=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},"function"==typeof i&&(i=r,r=o),r?f(e,t,n,i):setTimeout(function(){f(e,t,n,i)},4),h)},h.config=function(e){return y=e,y.deps&&h(y.deps,y.callback),h},requirejs._defined=l,define=function(e,n,i){n.splice||(i=n,n=[]),t(l,e)||t(d,e)||(d[e]=[e,n,i])},define.amd={jQuery:!0}}(),define("bower_components/almond/almond",function(){}),define("Seed/helpers",[],function(){return{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},remove:function(e,t){for(var n=e.length;n--;)e[n]===t&&e.splice(n,1);return e},clone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},extend:function(e){for(var t=1,n=arguments.length;n>t;t++){var i="object"==typeof arguments[t]||"function"==typeof arguments[t]?arguments[t]:{};for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e},find:function(e,t){for(var n=0,i=e.length;i>n;n++)if(t(e[n],n))return e[n];return!1}}}),define("Seed/extendHooker",["./helpers"],function(e){var t=function(){};return t.prototype={getHooks:function(){},hookify:function(t){var n=t.__hooks=[];t.registerHook=function(e){t.__hooks.push(e)},t.hasHook=function(t){return"s"==typeof t?!!e.find(n,function(e){return e.id===t}):!!e.find(n,function(e){return e===t})},t.unregisterHook=function(t){return e.remove(n,t)}}},new t}),define("Seed/extendHooks/plusMinusExtendHook",["../helpers"],function(e){var t=function(t,n){return"undefined"==typeof n?t:"object"==typeof n&&"object"==typeof t?e.extend({},t,n):n},n=function(e,n){return"function"==typeof e||"function"==typeof n?function(){var i="function"==typeof e?e.apply(this,arguments):e,r="function"==typeof n?n.apply(this,arguments):n;return t(i,r)}:t(e,n)};return{name:"plusMinus",handle:function(e,t){var i=e,r=function(){};for(var o in t)if(t.hasOwnProperty(o)){var s=/(^\+|^-)(.*)/g;if(s.test(o)){var u=o.replace(s,"$2"),c=e[u]||r,f=t[o];switch(o.charAt(0)){case"+":i[u]=n(c,f);break;case"-":i[u]=n(f,c)}delete e[o]}else i[o]=t[o]}return i}}}),define("Seed/extendHooks/accessors/TypeChecker",[],function(){Array.isArray=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;return function(){return t.apply(e,arguments)}});var e=function(){this.is=this.is.bind(this)};return e.prototype={is:function(e,t){return null!==t&&"undefined"!=typeof t&&"function"==typeof t.isTypeOf?t.isTypeOf(e):this[e]?this[e](t)||!1:typeof t===e.toLowerCase()},Truthy:function(e){return!!e},Falsy:function(e){return!!e},Array:function(e){return Array.isArray(e)},Point:function(e){return e&&e.isPoint},Valid:function(e){return"undefined"!=typeof e},defined:function(e){return"undefined"!=typeof e},PlainObject:function(e){var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString;if(!e||"[object Object]"!==n.call(e)||e.nodeType||e.setInterval)return!1;if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1;var i;for(i in e);return void 0===i||t.call(e,i)},isStructure:function(e,t){var n;if(!this.is("PlainObject",t))return n="TypeChecker: Object "+t+" is not a plain Object",!1;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i];if(!i in t&&(n="TypeChecker: Key "+i+" is not in "+object),this.is("PlainObject",e[i]))return this.isStructure(e[i],t[i]);this.is(r,t[i])||(n="TypeChecker: Key "+i+" is not in "+object)}if(n)throw new Error(n);return!0},Profile:function(e){return this.isStructure({label:"String",id:"String"},e)},BenchmarkRawData:function(e){return this.isStructure({settings:"PlainObject",data:{W:"PlainObject",M:"PlainObject"}},e)}},e}),define("Seed/extendHooks/accessors/defaultTypeChecker",["./TypeChecker"],function(e){var t=new e;return t}),define("Seed/extendHooks/accessorsExtendHook",["./accessors/defaultTypeChecker","../helpers"],function(e,t){var n=function(e,t,n,i){this.id="accessors",this.accessorString=t,this.extendObj=n,this.typeChecker=i,this.typeChecker.is=this.typeChecker.is.bind(this.typeChecker),this.oldPrototype=e,this.create()};n.prototype={create:function(){var e,n=this.accessorString.charAt(0),i="-"===n,r="-"===n||"+"===n?this.accessorString.slice(1):this.accessorString,o=r.split("|"),s=o[1],u=o[0],c=t.capitalize(u),f=i?"_":"",h=f+"get"+c,a=f+"set"+c,p=f+u,l=(this.typeChecker,this);t.find(this.getExtendHookConfiguration().allAccessors,function(e){return e})||this.getExtendHookConfiguration().allAccessors.push(u),this.addMethod(h,function(){return this[p]}),s?this.addMethod(a,function(t){if(l.typeChecker.is(s,t))return this[p]=t,t;try{e=JSON.stringify(t)+" is not a "+s}catch(n){}throw new Error(e)}):this.addMethod(a,function(e){return this[p]=e,e})},getOldObj:function(){return this.oldPrototype},getExtendObj:function(){return this.extendObj},getExtendHookConfiguration:function(){return this.getOldObj().__extendHooks[this.id]},addMethod:function(e,t){this.extendObj[e]||(this.oldPrototype[e]=t)}};var i=function(){this.id="accessors",this.handle=this.handle.bind(this),this.typeChecker=e};return i.prototype={configure:function(e){e.typeChecker&&(this.typeChecker=e.typeChecker)},initializeHook:function(e,t){var n=[];t.__extendHooks=e.__extendHooks||{},t.__extendHooks[this.id]={id:this.id,allAccessors:n}},hasHook:function(e){return e&&e.__extendHooks&&e.__extendHooks[this.id]},handle:function(e,t){var i=t.accessors;if(this.hasHook(e)||this.initializeHook(e,t),!i)return e;for(var r=0;r<i.length;r++)new n(e,i[r],t,this.typeChecker);return e}},new i}),define("Seed/extendHooks/typeExtendHook",["../helpers"],function(){var e=function(){this.id="type",this.handle=this.handle.bind(this)},t=function(e){this.id="type",this.oldObj=e.oldObj,this.extendObj=e.extendObj,this.hasHook()||this.initializeHook(),this.handleExtendObjType()};return t.prototype={handleExtendObjType:function(){var e=this.getOldObj().getTypes().slice(),t=this.getExtendObj().type;this.getOldObj().types=e,"string"==typeof t&&-1===e.indexOf(t)&&this.getOldObj().types.push(t)},hasHook:function(){return this.getOldObj().__extendHooks&&this.oldObj.__extendHooks[this.id]},getHookConfigurationObject:function(){return this.getOldObj().__extendHooks[this.id]},getTypes:function(){return this.getOldObj().types},initializeHook:function(){this.getOldObj().__extendHooks||(this.getOldObj().__extendHooks={}),this.getOldObj().__extendHooks[this.id]={id:this.id},this.getOldObj().isTypeOf=function(e){return-1!==this.types.indexOf(e)},this.getOldObj().types=[],this.getOldObj().getTypes=function(){return this.types}},getOldObj:function(){return this.oldObj},getExtendObj:function(){return this.extendObj}},e.prototype={configure:function(){},handle:function(e,n){return new t({oldObj:e,extendObj:n}),e}},new e}),define("Seed/extendHookRegistrations",["./extendHooks/plusMinusExtendHook","./extendHooks/accessorsExtendHook","./extendHooks/typeExtendHook"],function(e,t,n){return[t,n,e]}),define("Seed/Extendable",["./helpers","./extendHooker","./extendHookRegistrations"],function(e,t,n){var i=function(){};i.prototype.constructor=function(){},t.hookify(i);for(var r=0;r<n.length;r++)i.registerHook(n[r]);return i["new"]=function(){},i.extend=function(t){var n=function(){("boolean"!=typeof arguments[0]||arguments[0]!==!1)&&n.prototype.constructor.apply(this,arguments)},r=e.clone(this);for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);for(var s=i.__hooks,u=e.extend(new this(!1),t),o=0;o<s.length;o++)u=s[o].handle(u,t);return n.prototype=u,n},i}),define("Seed/Eventable",["./Extendable","./helpers"],function(e,t){return e.extend({constructor:function(){this._events={},this._attached=[]},emit:function(e){var t=this._events[e];if(t)for(var n=Array.prototype.slice.call(arguments,1),i=t.length;i--;)t[i].fn.apply(t[i].subscriber,n)},fire:function(){this.emit.apply(this,arguments)},on:function(e,t,n){var i=e.split(" ");if("function"==typeof t){var r=n;n=t,t=r}if(1===i.length)return this._on(i[0],t,n);for(var o=[],s=0;s<i.length;s++)o[s].push(this._on(evtName,t,n));return{un:function(){for(var e=0;e<o.length;e++)o[e].un()}}},_on:function(e,n,i){if(n&&"function"!=typeof n.attach)throw new Error("The subscriber should have a attach(event) method");if("string"==typeof i?i=n[i]:"undefined"==typeof i&&(i=n["on"+t.capitalize(e)]),"function"!=typeof i)throw new Error("Cannot find the function to subscribe to "+e);var r=this,o={fn:i,subscriber:n},s={un:function(){r._rmSubscription(e,o)}};return(this._events[e]||(this._events[e]=[])).push(o),s},_rmSubscription:function(e,n){t.remove(this._events[e],n),0==this._events[e].length&&delete this._events[e]},attach:function(e){this._attached.push(e)},detachAll:function(){for(var e=0;e<this._attached.length;e++)this._attached[e].un();this._attached=[]}})}),define("Seed/SeedHq",["./Eventable","./helpers"],function(e,t){return e.extend({constructor:function(e){e=e||{},this._events=[],this._attached=[],this._subs=[],this._o=e,e._a&&(this._a=e._a),this.setOptions()},options:{},bindMethod:function(e){this[e]=this[e].bind(this)},setOptions:function(){var e;if(this.options)for(var n in this.options)this.options.hasOwnProperty(n)&&("undefined"==typeof this._o[n]?this[n]=this.options[n]:(e="set"+t.capitalize(n),"function"==typeof this[e]?this[e](this._o[n]):this[n]=this._o[n]))},sub:function(e,t){if("function"!=typeof e)throw new Error("C is not a valid constructor");var n=new e(this.subParams(t));return this._subs.push(n),n},subParams:function(e){return e||(e={}),e._parent=this,this._a&&(e._a=this._a),e},destroy:function(){this.detachAll();for(var e=0;e<this._subs.length;e++)this._subs[e].destroy()}})}),define("Seed/Seed",["./SeedHq"],function(e){return e}),define("Array.nocomplex/collect",[],function(){Array.prototype.collect=function(e){var t=[];if("string"==typeof e)for(var n=-1,i=this.length;++n<i;)t.push(this[n][e]);else for(var n=-1,i=this.length;++n<i;)t.push(e(this[n]));return t}}),define("Array.nocomplex/each",[],function(){Array.prototype.each=function(e){for(var t=0,n=this.length;n>t;t++)e(this[t],t);return this}}),define("Array.nocomplex/first",[],function(){Array.prototype.first=function(e){for(var t=0,n=this.length;n>t;t++)if(e(this[t]))return this[t];return null}}),define("Array.nocomplex/has",[],function(){Array.prototype.has=function(e){for(var t=this.length;t--;)if(this[t]===e)return!0;return!1}}),define("Array.nocomplex/last",[],function(){Array.prototype.last=function(){return this[this.length-1]}}),define("Array.nocomplex/map",[],function(){Array.prototype.map=Array.prototype.map||function(e,t){t&&(e=e.bind(t));var n=this.slice();if("function"==typeof e)for(var i=0,r=n.length;r>i;i++)n[i]=e(n[i],i);else{e=e.substr(2,e.length);for(var i=0,r=n.length;r>i;i++)n[i]=n[i][e]()}return n}}),define("Array.nocomplex/onEls",[],function(){Array.prototype.onEls=function(e){for(var t=this.length;t--;)this[t]=e(this[t],t);return this}}),define("Array.nocomplex/remove",[],function(){Array.prototype.remove=function(e){for(var t=this.length;t--;)this[t]===e&&this.splice(t,1);return this}}),define("Array.nocomplex/removeOneValue",[],function(){Array.prototype.removeOneValue=function(e){for(var t=this.length;t--;)if(this[t]===e)return this.splice(t,1)}}),define("Array.nocomplex/except",[],function(){Array.prototype.except=function(e){for(var t=[],n=0,i=this.length;i>n;n++)this[n]!==e&&t.push(this[n]);return t}}),define("Array.nocomplex/exceptFn",[],function(){Array.prototype.exceptFn=function(e){for(var t=this.slice(),n=t.length;n--;)e(t[n])&&t.splice(n,1);return t}}),define("Array.nocomplex/indexOf",[],function(){Array.prototype.indexOf=Array.prototype.indexOf||function(e){var t,n;for(t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1}}),define("Array.nocomplex/isIn",["./has"],function(){Array.prototype.isIn=function(e){for(var t=this.length;t--;)if(!e.has(this[t]))return!1;return!0}}),define("Array.nocomplex/send",[],function(){Array.prototype.send=function(e){var t=Array.prototype.slice.call(arguments);if(t.splice(0,1),"string"==typeof e)for(var n=-1,i=this.length;++n<i;)this[n]&&this[n][e].apply(this[n],t);else for(var n=-1,i=this.length;++n<i;)e.apply({},[this[n]].concat(t));return this}}),define("Array.nocomplex/uniq",["./has"],function(){Array.prototype.uniq=function(e){if(e){for(var t=[],n=[],i=0,r=this.length;r>i;i++){var o=e(this[i]);n.has(o)||(t.push(this[i]),n.push(o))}return t}for(var t=[],i=this.length;i--;)!t.has(this[i])&&t.push(this[i]);return t}}),define("Array.nocomplex/equals",["./isIn"],function(){Array.prototype.equals=function(e){return this.isIn(e)&&e.isIn(this)?!0:!1}}),define("Array.nocomplex/find",[],function(){Array.prototype.find=function(e){for(var t=0,n=this.length;n>t;t++)if(e(this[t],t))return this[t];return!1},Array.prototype.findReverse=function(e){for(var t=this.length;t--;)if(e(this[t],t))return this[t];return!1}}),define("Array.nocomplex/where",[],function(){Array.prototype.where=function(e){for(var t=[],n=0,i=this.length;i>n;n++)e(this[n])&&t.push(this[n]);return t}}),define("Array.nocomplex/findIndexOf",[],function(){Array.prototype.findIndexOf=function(e){for(var t=0,n=this.length;n>t;t++)if(e(this[t],t))return t;return!1}}),define("Array.nocomplex/findByKey",[],function(){Array.prototype.findByKey=function(e,t){for(var n=0,i=this.length;i>n;n++)if(this[n][e]===t)return this[n];return!1}}),define("Array.nocomplex/basics",["./collect","./each","./first","./has","./last","./map","./onEls","./remove","./removeOneValue","./remove","./except","./exceptFn","./indexOf","./isIn","./send","./uniq","./equals","./find","./where","./findIndexOf","./findByKey"],function(){return Array.prototype}),define("Array.nocomplex/math/all",[],function(){var e={equals:function(e){for(var t=this.length;t--;)if(e[t]!==this[t])return!1;return!0},multiply:function(e){var t=[];if("number"==typeof e)for(var n=this.length;n--;)t[n]=this[n]*e;else for(var n=this.length;n--;)t[n]=this[n]*e[n];return t},divide:function(e){var t=[];if("number"==typeof e)for(var n=this.length;n--;)t[n]=this[n]/e;else for(var n=this.length;n--;)t[n]=this[n]/e[n];return t},min:function(e){var t=e?this.map(e):this;return Math.min.apply(null,t)},minMax:function(e){return[this.min(e),this.max(e)]},max:function(e){var t=e?this.map(e):this;return Math.max.apply(null,t)},average:function(){for(var e=0,t=this.length;t--;)e+=this[t];return e/this.length},minus:function(e){var t=[];if("number"==typeof e)for(var n=this.length;n--;)t[n]=this[n]-e;else for(var n=this.length;n--;)t[n]=this[n]-e[n];return t},domain:function(e,t){var n,i,r=t&&"number"==typeof t[0]?t[0]:this.min(),o=t&&"number"==typeof t[1]?t[1]:this.max();return r===o?this.map(function(){return e[0]}):(n=(e[1]-e[0])/(o-r),i=(e[0]*o-e[1]*r)/(o-r),this.multiply(n).add(i))},add:function(e){var t=[];if("number"==typeof e)for(var n=this.length;n--;)t[n]=this[n]+e;else for(var n=this.length;n--;)t[n]=this[n]+e[n];return t},round:function(){for(var e=this.length;e--;)this[e]=Math.round(this[e]);return this},sum:function(e){for(var t=0,n=this.length;n--;)t+=e(n);return t},orth:function(){if(2!=this.length)throw Error;return[-this[1],this[0]]},norm:function(){return Math.sqrt(this.sum(function(e){return e*e}))}};for(var t in e)e.hasOwnProperty(t)&&(Array.prototype[t]=e[t]);return Array.prototype}),define("Array.nocomplex/all",["./basics","./math/all"],function(){return Array.prototype}),define("Pointer/Pointer",["Seed/Seed","Array.nocomplex/all"],function(e){return e.extend({"+options":{position:[0,0],lastPosition:[0,0]},"+constructor":function(){this.initEvents()},initEvents:function(){document.body.addEventListener("touchmove",this._onTouchMove.bind(this)),document.body.addEventListener("mousemove",this._onMouseMove.bind(this)),document.body.addEventListener("click",this._onClick.bind(this))},getPosition:function(){return this.position},_onClick:function(e){this._setPosition([e.clientX,e.clientY]),this.fire("click",this.position)},_onMouseMove:function(e){this._setPosition([e.clientX,e.clientY])},_onTouchMove:function(e){e.preventDefault(),this._setPosition([e.touches[0].pageX,e.touches[0].pageY])},_setPosition:function(e){this.lastPosition=this.position,this.position=e,this.direction=this.position.minus(this.lastPosition),this.fire("move",this.position)}})});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,t){this.isNode?this._global.exports=t:this.isBrowser&&(this._global[e]=t)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{Pointer:".",almond:"bower_components/almond/almond",Seed:"bower_components/Seed/app",chai:"bower_components/chai/chai",engineDetector:"bower_components/engineDetector/app","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon","Array.nocomplex":"bower_components/Array.nocomplex/app",SeedHq:"bower_components/SeedHq/app",requestAnimationFrame:"bower_components/requestAnimationFrame/app",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser",window:"bower_components/engineDetector/app/window",engine:"bower_components/engineDetector/app/engine"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var Pointer=requirejs("Pointer/Pointer");engine.exports("Pointer",Pointer)}else requirejs(["Pointer/Pointer"],function(e){engine.exports("Pointer",e)});define("Pointer/main",function(){});