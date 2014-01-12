/**
 * SeedHq version: "0.0.14" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/SeedHq for details
 */

/**
 * Pointer version: "0.0.4" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/Pointer for details
 */

define("Seed/helpers",[],function(){return{capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},remove:function(t,e){for(var n=t.length;n--;)t[n]===e&&t.splice(n,1);return t},clone:function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},extend:function(t){for(var e=1,n=arguments.length;n>e;e++){var i="object"==typeof arguments[e]||"function"==typeof arguments[e]?arguments[e]:{};for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])}return t},find:function(t,e){for(var n=0,i=t.length;i>n;n++)if(e(t[n],n))return t[n];return!1}}}),define("Seed/extendHooker",["./helpers"],function(t){var e=function(){};return e.prototype={getHooks:function(){},hookify:function(e){var n=e.__hooks=[];e.registerHook=function(t){e.__hooks.push(t)},e.hasHook=function(e){return"s"==typeof e?!!t.find(n,function(t){return t.id===e}):!!t.find(n,function(t){return t===e})},e.unregisterHook=function(e){return t.remove(n,e)}}},new e}),define("Seed/extendHooks/plusMinusExtendHook",["../helpers"],function(t){var e=function(e,n){return"undefined"==typeof n?e:"object"==typeof n&&"object"==typeof e?t.extend({},e,n):n},n=function(t,n){return"function"==typeof t||"function"==typeof n?function(){var i="function"==typeof t?t.apply(this,arguments):t,o="function"==typeof n?n.apply(this,arguments):n;return e(i,o)}:e(t,n)};return{name:"plusMinus",handle:function(t,e){var i=t,o=function(){};for(var r in e)if(e.hasOwnProperty(r)){var s=/(^\+|^-)(.*)/g;if(s.test(r)){var u=r.replace(s,"$2"),h=t[u]||o,c=e[r];switch(r.charAt(0)){case"+":i[u]=n(h,c);break;case"-":i[u]=n(c,h)}delete t[r]}else i[r]=e[r]}return i}}}),define("Seed/extendHooks/accessors/TypeChecker",[],function(){Array.isArray=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;return function(){return e.apply(t,arguments)}});var t=function(){this.is=this.is.bind(this)};return t.prototype={is:function(t,e){return null!==e&&"undefined"!=typeof e&&"function"==typeof e.isTypeOf?e.isTypeOf(t):this[t]?this[t](e)||!1:typeof e===t.toLowerCase()},Truthy:function(t){return!!t},Falsy:function(t){return!!t},Array:function(t){return Array.isArray(t)},Point:function(t){return t&&t.isPoint},Valid:function(t){return"undefined"!=typeof t},defined:function(t){return"undefined"!=typeof t},PlainObject:function(t){var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString;if(!t||"[object Object]"!==n.call(t)||t.nodeType||t.setInterval)return!1;if(t.constructor&&!e.call(t,"constructor")&&!e.call(t.constructor.prototype,"isPrototypeOf"))return!1;var i;for(i in t);return void 0===i||e.call(t,i)},isStructure:function(t,e){var n;if(!this.is("PlainObject",e))return n="TypeChecker: Object "+e+" is not a plain Object",!1;for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];if(!i in e&&(n="TypeChecker: Key "+i+" is not in "+object),this.is("PlainObject",t[i]))return this.isStructure(t[i],e[i]);this.is(o,e[i])||(n="TypeChecker: Key "+i+" is not in "+object)}if(n)throw new Error(n);return!0},Profile:function(t){return this.isStructure({label:"String",id:"String"},t)},BenchmarkRawData:function(t){return this.isStructure({settings:"PlainObject",data:{W:"PlainObject",M:"PlainObject"}},t)}},t}),define("Seed/extendHooks/accessors/defaultTypeChecker",["./TypeChecker"],function(t){var e=new t;return e}),define("Seed/extendHooks/accessorsExtendHook",["./accessors/defaultTypeChecker","../helpers"],function(t,e){var n=function(t,e,n,i){this.id="accessors",this.accessorString=e,this.extendObj=n,this.typeChecker=i,this.typeChecker.is=this.typeChecker.is.bind(this.typeChecker),this.oldPrototype=t,this.create()};n.prototype={create:function(){var t,n=this.accessorString.charAt(0),i="-"===n,o="-"===n||"+"===n?this.accessorString.slice(1):this.accessorString,r=o.split("|"),s=r[1],u=r[0],h=e.capitalize(u),c=i?"_":"",a=c+"get"+h,f=c+"set"+h,p=c+u,d=(this.typeChecker,this);e.find(this.getExtendHookConfiguration().allAccessors,function(t){return t})||this.getExtendHookConfiguration().allAccessors.push(u),this.addMethod(a,function(){return this[p]}),s?this.addMethod(f,function(e){if(d.typeChecker.is(s,e))return this[p]=e,e;try{t=JSON.stringify(e)+" is not a "+s}catch(n){}throw new Error(t)}):this.addMethod(f,function(t){return this[p]=t,t})},getOldObj:function(){return this.oldPrototype},getExtendObj:function(){return this.extendObj},getExtendHookConfiguration:function(){return this.getOldObj().__extendHooks[this.id]},addMethod:function(t,e){this.extendObj[t]||(this.oldPrototype[t]=e)}};var i=function(){this.id="accessors",this.handle=this.handle.bind(this),this.typeChecker=t};return i.prototype={configure:function(t){t.typeChecker&&(this.typeChecker=t.typeChecker)},initializeHook:function(t,e){var n=[];e.__extendHooks=t.__extendHooks||{},e.__extendHooks[this.id]={id:this.id,allAccessors:n}},hasHook:function(t){return t&&t.__extendHooks&&t.__extendHooks[this.id]},handle:function(t,e){var i=e.accessors;if(this.hasHook(t)||this.initializeHook(t,e),!i)return t;for(var o=0;o<i.length;o++)new n(t,i[o],e,this.typeChecker);return t}},new i}),define("Seed/extendHooks/typeExtendHook",["../helpers"],function(){var t=function(){this.id="type",this.handle=this.handle.bind(this)},e=function(t){this.id="type",this.oldObj=t.oldObj,this.extendObj=t.extendObj,this.hasHook()||this.initializeHook(),this.handleExtendObjType()};return e.prototype={handleExtendObjType:function(){var t=this.getOldObj().getTypes().slice(),e=this.getExtendObj().type;this.getOldObj().types=t,"string"==typeof e&&-1===t.indexOf(e)&&this.getOldObj().types.push(e)},hasHook:function(){return this.getOldObj().__extendHooks&&this.oldObj.__extendHooks[this.id]},getHookConfigurationObject:function(){return this.getOldObj().__extendHooks[this.id]},getTypes:function(){return this.getOldObj().types},initializeHook:function(){this.getOldObj().__extendHooks||(this.getOldObj().__extendHooks={}),this.getOldObj().__extendHooks[this.id]={id:this.id},this.getOldObj().isTypeOf=function(t){return-1!==this.types.indexOf(t)},this.getOldObj().types=[],this.getOldObj().getTypes=function(){return this.types}},getOldObj:function(){return this.oldObj},getExtendObj:function(){return this.extendObj}},t.prototype={configure:function(){},handle:function(t,n){return new e({oldObj:t,extendObj:n}),t}},new t}),define("Seed/extendHookRegistrations",["./extendHooks/plusMinusExtendHook","./extendHooks/accessorsExtendHook","./extendHooks/typeExtendHook"],function(t,e,n){return[e,n,t]}),define("Seed/Extendable",["./helpers","./extendHooker","./extendHookRegistrations"],function(t,e,n){var i=function(){};i.prototype.constructor=function(){},e.hookify(i);for(var o=0;o<n.length;o++)i.registerHook(n[o]);return i["new"]=function(){},i.extend=function(e){var n=function(){("boolean"!=typeof arguments[0]||arguments[0]!==!1)&&n.prototype.constructor.apply(this,arguments)},o=t.clone(this);for(var r in o)o.hasOwnProperty(r)&&(n[r]=o[r]);for(var s=i.__hooks,u=t.extend(new this(!1),e),r=0;r<s.length;r++)u=s[r].handle(u,e);return n.prototype=u,n},i}),define("Seed/Eventable",["./Extendable","./helpers"],function(t,e){return t.extend({constructor:function(){this._events={},this._attached=[]},emit:function(t){var e=this._events[t];if(e)for(var n=Array.prototype.slice.call(arguments,1),i=e.length;i--;)e[i].fn.apply(e[i].subscriber,n)},fire:function(){this.emit.apply(this,arguments)},on:function(t,e,n){var i=t.split(" ");if("function"==typeof e){var o=n;n=e,e=o}if(1===i.length)return this._on(i[0],e,n);for(var r=[],s=0;s<i.length;s++)r[s].push(this._on(evtName,e,n));return{un:function(){for(var t=0;t<r.length;t++)r[t].un()}}},_on:function(t,n,i){if(n&&"function"!=typeof n.attach)throw new Error("The subscriber should have a attach(event) method");if("string"==typeof i?i=n[i]:"undefined"==typeof i&&(i=n["on"+e.capitalize(t)]),"function"!=typeof i)throw new Error("Cannot find the function to subscribe to "+t);var o=this,r={fn:i,subscriber:n},s={un:function(){o._rmSubscription(t,r)}};return(this._events[t]||(this._events[t]=[])).push(r),s},_rmSubscription:function(t,n){e.remove(this._events[t],n),0==this._events[t].length&&delete this._events[t]},attach:function(t){this._attached.push(t)},detachAll:function(){for(var t=0;t<this._attached.length;t++)this._attached[t].un();this._attached=[]}})}),define("Seed/SeedHq",["./Eventable","./helpers"],function(t,e){return t.extend({constructor:function(t){t=t||{},this._events=[],this._attached=[],this._subs=[],this._o=t,t._a&&(this._a=t._a),this.setOptions()},options:{},bindMethod:function(t){this[t]=this[t].bind(this)},setOptions:function(){var t;if(this.options)for(var n in this.options)this.options.hasOwnProperty(n)&&("undefined"==typeof this._o[n]?this[n]=this.options[n]:(t="set"+e.capitalize(n),"function"==typeof this[t]?this[t](this._o[n]):this[n]=this._o[n]))},sub:function(t,e){if("function"!=typeof t)throw new Error("C is not a valid constructor");var n=new t(this.subParams(e));return this._subs.push(n),n},subParams:function(t){return t||(t={}),t._parent=this,this._a&&(t._a=this._a),t},destroy:function(){this.detachAll();for(var t=0;t<this._subs.length;t++)this._subs[t].destroy()}})}),define("Seed/Seed",["./SeedHq"],function(t){return t}),define("Array.nocomplex/collect",[],function(){Array.prototype.collect=function(t){var e=[];if("string"==typeof t)for(var n=-1,i=this.length;++n<i;)e.push(this[n][t]);else for(var n=-1,i=this.length;++n<i;)e.push(t(this[n]));return e}}),define("Array.nocomplex/each",[],function(){Array.prototype.each=function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this}}),define("Array.nocomplex/first",[],function(){Array.prototype.first=function(t){for(var e=0,n=this.length;n>e;e++)if(t(this[e]))return this[e];return null}}),define("Array.nocomplex/has",[],function(){Array.prototype.has=function(t){for(var e=this.length;e--;)if(this[e]===t)return!0;return!1}}),define("Array.nocomplex/last",[],function(){Array.prototype.last=function(){return this[this.length-1]}}),define("Array.nocomplex/map",[],function(){Array.prototype.map=Array.prototype.map||function(t,e){e&&(t=t.bind(e));var n=this.slice();if("function"==typeof t)for(var i=0,o=n.length;o>i;i++)n[i]=t(n[i],i);else{t=t.substr(2,t.length);for(var i=0,o=n.length;o>i;i++)n[i]=n[i][t]()}return n}}),define("Array.nocomplex/onEls",[],function(){Array.prototype.onEls=function(t){for(var e=this.length;e--;)this[e]=t(this[e],e);return this}}),define("Array.nocomplex/remove",[],function(){Array.prototype.remove=function(t){for(var e=this.length;e--;)this[e]===t&&this.splice(e,1);return this}}),define("Array.nocomplex/removeOneValue",[],function(){Array.prototype.removeOneValue=function(t){for(var e=this.length;e--;)if(this[e]===t)return this.splice(e,1)}}),define("Array.nocomplex/except",[],function(){Array.prototype.except=function(t){for(var e=[],n=0,i=this.length;i>n;n++)this[n]!==t&&e.push(this[n]);return e}}),define("Array.nocomplex/exceptFn",[],function(){Array.prototype.exceptFn=function(t){for(var e=this.slice(),n=e.length;n--;)t(e[n])&&e.splice(n,1);return e}}),define("Array.nocomplex/indexOf",[],function(){Array.prototype.indexOf=Array.prototype.indexOf||function(t){var e,n;for(e=0,n=this.length;n>e;e++)if(this[e]===t)return e;return-1}}),define("Array.nocomplex/isIn",["./has"],function(){Array.prototype.isIn=function(t){for(var e=this.length;e--;)if(!t.has(this[e]))return!1;return!0}}),define("Array.nocomplex/send",[],function(){Array.prototype.send=function(t){var e=Array.prototype.slice.call(arguments);if(e.splice(0,1),"string"==typeof t)for(var n=-1,i=this.length;++n<i;)this[n]&&this[n][t].apply(this[n],e);else for(var n=-1,i=this.length;++n<i;)t.apply({},[this[n]].concat(e));return this}}),define("Array.nocomplex/uniq",["./has"],function(){Array.prototype.uniq=function(t){if(t){for(var e=[],n=[],i=0,o=this.length;o>i;i++){var r=t(this[i]);n.has(r)||(e.push(this[i]),n.push(r))}return e}for(var e=[],i=this.length;i--;)!e.has(this[i])&&e.push(this[i]);return e}}),define("Array.nocomplex/equals",["./isIn"],function(){Array.prototype.equals=function(t){return this.isIn(t)&&t.isIn(this)?!0:!1}}),define("Array.nocomplex/find",[],function(){Array.prototype.find=function(t){for(var e=0,n=this.length;n>e;e++)if(t(this[e],e))return this[e];return!1},Array.prototype.findReverse=function(t){for(var e=this.length;e--;)if(t(this[e],e))return this[e];return!1}}),define("Array.nocomplex/where",[],function(){Array.prototype.where=function(t){for(var e=[],n=0,i=this.length;i>n;n++)t(this[n])&&e.push(this[n]);return e}}),define("Array.nocomplex/findIndexOf",[],function(){Array.prototype.findIndexOf=function(t){for(var e=0,n=this.length;n>e;e++)if(t(this[e],e))return e;return!1}}),define("Array.nocomplex/findByKey",[],function(){Array.prototype.findByKey=function(t,e){for(var n=0,i=this.length;i>n;n++)if(this[n][t]===e)return this[n];return!1}}),define("Array.nocomplex/basics",["./collect","./each","./first","./has","./last","./map","./onEls","./remove","./removeOneValue","./remove","./except","./exceptFn","./indexOf","./isIn","./send","./uniq","./equals","./find","./where","./findIndexOf","./findByKey"],function(){return Array.prototype}),define("Array.nocomplex/math/all",[],function(){var t={equals:function(t){for(var e=this.length;e--;)if(t[e]!==this[e])return!1;return!0},multiply:function(t){var e=[];if("number"==typeof t)for(var n=this.length;n--;)e[n]=this[n]*t;else for(var n=this.length;n--;)e[n]=this[n]*t[n];return e},divide:function(t){var e=[];if("number"==typeof t)for(var n=this.length;n--;)e[n]=this[n]/t;else for(var n=this.length;n--;)e[n]=this[n]/t[n];return e},min:function(t){var e=t?this.map(t):this;return Math.min.apply(null,e)},minMax:function(t){return[this.min(t),this.max(t)]},max:function(t){var e=t?this.map(t):this;return Math.max.apply(null,e)},average:function(){for(var t=0,e=this.length;e--;)t+=this[e];return t/this.length},minus:function(t){var e=[];if("number"==typeof t)for(var n=this.length;n--;)e[n]=this[n]-t;else for(var n=this.length;n--;)e[n]=this[n]-t[n];return e},domain:function(t,e){var n,i,o=e&&"number"==typeof e[0]?e[0]:this.min(),r=e&&"number"==typeof e[1]?e[1]:this.max();return o===r?this.map(function(){return t[0]}):(n=(t[1]-t[0])/(r-o),i=(t[0]*r-t[1]*o)/(r-o),this.multiply(n).add(i))},add:function(t){var e=[];if("number"==typeof t)for(var n=this.length;n--;)e[n]=this[n]+t;else for(var n=this.length;n--;)e[n]=this[n]+t[n];return e},round:function(){for(var t=this.length;t--;)this[t]=Math.round(this[t]);return this},sum:function(t){for(var e=0,n=this.length;n--;)e+=t(n);return e},orth:function(){if(2!=this.length)throw Error;return[-this[1],this[0]]},norm:function(){return Math.sqrt(this.sum(function(t){return t*t}))}};for(var e in t)t.hasOwnProperty(e)&&(Array.prototype[e]=t[e]);return Array.prototype}),define("Array.nocomplex/all",["./basics","./math/all"],function(){return Array.prototype}),define("Pointer/Pointer",["Seed/Seed","Array.nocomplex/all"],function(t){return t.extend({"+options":{position:[0,0],lastPosition:[0,0]},"+constructor":function(){this.initEvents()},initEvents:function(){document.body.addEventListener("touchmove",this._onTouchMove.bind(this)),document.body.addEventListener("mousemove",this._onMouseMove.bind(this)),document.body.addEventListener("click",this._onClick.bind(this))},getPosition:function(){return this.position},_onClick:function(t){this._setPosition([t.clientX,t.clientY]),this.fire("click",this.position)},_onMouseMove:function(t){this._setPosition([t.clientX,t.clientY])},_onTouchMove:function(t){t.preventDefault(),this._setPosition([t.touches[0].pageX,t.touches[0].pageY])},_setPosition:function(t){this.lastPosition=this.position,this.position=t,this.direction=this.position.minus(this.lastPosition),this.fire("move",this.position)}})});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(t){this._global=t},ifNode:function(t){this.isNode&&t()},ifBrowser:function(t){this.isBrowser&&t()},exports:function(t,e){this.isNode?this._global.exports=e:this.isBrowser&&(this._global[t]=e)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{Pointer:".",almond:"bower_components/almond/almond",Seed:"bower_components/Seed/app",chai:"bower_components/chai/chai",engineDetector:"bower_components/engineDetector/app","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon","Array.nocomplex":"bower_components/Array.nocomplex/app",SeedHq:"bower_components/SeedHq/app",requestAnimationFrame:"bower_components/requestAnimationFrame/app",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser",window:"bower_components/engineDetector/app/window",engine:"bower_components/engineDetector/app/engine"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var Pointer=requirejs("Pointer/Pointer");engine.exports("Pointer",Pointer)}else requirejs(["Pointer/Pointer"],function(t){engine.exports("Pointer",t)});define("Pointer/main",function(){});