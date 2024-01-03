"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _i18n=_interopRequireDefault(require("i18n")),_express=require("express"),_user=_interopRequireDefault(require("../controllers/user.controller")),_middlewares=require("../middlewares");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */function b(a,b,c){return Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}),a[b]}function f(b,d,e,f){var g=d&&d.prototype instanceof k?d:k,h=Object.create(g.prototype),a=new B(f||[]);return E(h,"_invoke",{value:w(b,e,a)}),h}function j(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}function k(){}function l(){}function m(){}function q(a){["next","throw","return"].forEach(function(c){b(a,c,function(a){return this._invoke(c,a)})})}function s(b,d){function c(e,f,g,i){var a=j(b[e],b,f);if("throw"!==a.type){var k=a.arg,l=k.value;return l&&"object"==_typeof(l)&&t.call(l,"__await")?d.resolve(l.__await).then(function(a){c("next",a,g,i)},function(a){c("throw",a,g,i)}):d.resolve(l).then(function(a){k.value=a,g(k)},function(a){return c("throw",a,g,i)})}i(a.arg)}var e;E(this,"_invoke",{value:function value(a,b){function f(){return new d(function(d,e){c(a,b,d,e)})}return e=e?e.then(f,f):f()}})}function w(a,b,d){var e="suspendedStart";return function(f,g){if(e==="executing")throw new Error("Generator is already running");if("completed"===e){if("throw"===f)throw g;return{value:D,done:!0}}for(d.method=f,d.arg=g;;){var h=d.delegate;if(h){var i=x(h,d);if(i){if(i===G)continue;return i}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===e)throw e="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);e="executing";var k=j(a,b,d);if("normal"===k.type){if(e=d.done?"completed":"suspendedYield",k.arg===G)continue;return{value:k.arg,done:d.done}}"throw"===k.type&&(e="completed",d.method="throw",d.arg=k.arg)}}}function x(b,c){var d=c.method,e=b.iterator[d];if(e===D)return c.delegate=null,"throw"===d&&b.iterator["return"]&&(c.method="return",c.arg=D,x(b,c),"throw"===c.method)||"return"!==d&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+d+"' method")),G;var f=j(e,b.iterator,c.arg);if("throw"===f.type)return c.method="throw",c.arg=f.arg,c.delegate=null,G;var g=f.arg;return g?g.done?(c[b.resultName]=g.value,c.next=b.nextLoc,"return"!==c.method&&(c.method="next",c.arg=D),c.delegate=null,G):g:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,G)}function z(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]),2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]),this.tryEntries.push(b)}function A(a){var b=a.completion||{};b.type="normal",delete b.arg,a.completion=b}function B(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(z,this),this.reset(!0)}function C(a){if(a||""===a){var b=a[F];if(b)return b.call(a);if("function"==typeof a.next)return a;if(!isNaN(a.length)){var c=-1,d=function b(){for(;++c<a.length;)if(t.call(a,c))return b.value=a[c],b.done=!1,b;return b.value=D,b.done=!0,b};return d.next=d}}throw new TypeError(_typeof(a)+" is not iterable")}_regeneratorRuntime=function(){return h};var D,h={},e=Object.prototype,t=e.hasOwnProperty,E=Object.defineProperty||function(a,b,c){a[b]=c.value},n="function"==typeof Symbol?Symbol:{},F=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";try{b({},"")}catch(a){b=function(a,b,c){return a[b]=c}}h.wrap=f;var G={},i={};b(i,F,function(){return this});var o=Object.getPrototypeOf,d=o&&o(o(C([])));d&&d!==e&&t.call(d,F)&&(i=d);var r=m.prototype=k.prototype=Object.create(i);return l.prototype=m,E(r,"constructor",{value:m,configurable:!0}),E(m,"constructor",{value:l,configurable:!0}),l.displayName=b(m,c,"GeneratorFunction"),h.isGeneratorFunction=function(a){var b="function"==typeof a&&a.constructor;return!!b&&(b===l||"GeneratorFunction"===(b.displayName||b.name))},h.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,m):(a.__proto__=m,b(a,c,"GeneratorFunction")),a.prototype=Object.create(r),a},h.awrap=function(a){return{__await:a}},q(s.prototype),b(s.prototype,a,function(){return this}),h.AsyncIterator=s,h.async=function(b,c,d,e,g){void 0===g&&(g=Promise);var j=new s(f(b,c,d,e),g);return h.isGeneratorFunction(c)?j:j.next().then(function(a){return a.done?a.value:j.next()})},q(r),b(r,c,"Generator"),b(r,F,function(){return this}),b(r,"toString",function(){return"[object Generator]"}),h.keys=function(a){var b=Object(a),c=[];for(var d in b)c.push(d);return c.reverse(),function a(){for(;c.length;){var d=c.pop();if(d in b)return a.value=d,a.done=!1,a}return a.done=!0,a}},h.values=C,B.prototype={constructor:B,reset:function reset(a){if(this.prev=0,this.next=0,this.sent=this._sent=D,this.done=!1,this.delegate=null,this.method="next",this.arg=D,this.tryEntries.forEach(A),!a)for(var b in this)"t"===b.charAt(0)&&t.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=D)},stop:function stop(){this.done=!0;var a=this.tryEntries[0].completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function dispatchException(b){function d(a,c){return h.type="throw",h.arg=b,e.next=a,c&&(e.method="next",e.arg=D),!!c}if(this.done)throw b;for(var e=this,f=this.tryEntries.length-1;0<=f;--f){var g=this.tryEntries[f],h=g.completion;if("root"===g.tryLoc)return d("end");if(g.tryLoc<=this.prev){var j=t.call(g,"catchLoc"),k=t.call(g,"finallyLoc");if(j&&k){if(this.prev<g.catchLoc)return d(g.catchLoc,!0);if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(!j){if(!k)throw new Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return d(g.finallyLoc)}else if(this.prev<g.catchLoc)return d(g.catchLoc,!0)}}},abrupt:function abrupt(b,c){for(var d,e=this.tryEntries.length-1;0<=e;--e)if(d=this.tryEntries[e],d.tryLoc<=this.prev&&t.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var f=d;break}f&&("break"===b||"continue"===b)&&f.tryLoc<=c&&c<=f.finallyLoc&&(f=null);var g=f?f.completion:{};return g.type=b,g.arg=c,f?(this.method="next",this.next=f.finallyLoc,G):this.complete(g)},complete:function complete(a,b){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&b&&(this.next=b),G},finish:function finish(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.finallyLoc===a)return this.complete(b.completion,b.afterLoc),A(b),G},catch:function _catch(a){for(var b,c=this.tryEntries.length-1;0<=c;--c)if(b=this.tryEntries[c],b.tryLoc===a){var d=b.completion;if("throw"===d.type){var f=d.arg;A(b)}return f}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(a,b,c){return this.delegate={iterator:C(a),resultName:b,nextLoc:c},"next"===this.method&&(this.arg=D),G}},h}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var router=(0,_express.Router)();router.get("/",_middlewares.setLocale,[_middlewares.verifyToken,_middlewares.isAdmin],_user["default"].getAll),router.get("/profile/:id",_middlewares.verifyToken,isSameUser,validateUserID,_user["default"].findByID),router.get("/profile",_middlewares.setLocale,_middlewares.verifyToken,_user["default"].ownAccount),router.post("/",_middlewares.setLocale,[_middlewares.verifyToken,_middlewares.isAdmin],validateCreateUser,_user["default"].createUser),router.put("/profile/:id",_middlewares.setLocale,[_middlewares.verifyToken,_middlewares.isAdminOrSameUser],validateUpdateUser,_user["default"].updateUser);var _default=exports["default"]=router;// Endpoints validations
function validateUserID(){return _validateUserID.apply(this,arguments)}function _validateUserID(){return _validateUserID=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function d(a,b,c){return _regeneratorRuntime().wrap(function e(d){for(;1;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,_middlewares.handleValidation)([function(a){return a.params.id?null:{msg:_i18n["default"].__("messages.error.notProvided","ID")}}],a,b,c));case 1:case"end":return d.stop()}},d)})),_validateUserID.apply(this,arguments)}function isSameUser(a,b,c){return _isSameUser.apply(this,arguments)}function _isSameUser(){return _isSameUser=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function d(a,b,c){return _regeneratorRuntime().wrap(function e(d){for(;1;)switch(d.prev=d.next){case 0:if(a.params.id!==a.userID){d.next=2;break}return d.abrupt("return",b.status(302).redirect("/api/users/profile"));case 2:c();case 3:case"end":return d.stop()}},d)})),_isSameUser.apply(this,arguments)}function validateCreateUser(a,b,c){return _validateCreateUser.apply(this,arguments)}function _validateCreateUser(){return _validateCreateUser=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function d(a,b,c){return _regeneratorRuntime().wrap(function e(d){for(;1;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,_middlewares.handleValidation)([function(a){return(0,_middlewares.fieldNotEmpty)(a.body.name,_i18n["default"].__("fields.name"))},function(a){return(0,_middlewares.fieldNotEmpty)(a.body.lastname,_i18n["default"].__("fields.lastname"))},function(a){return(0,_middlewares.fieldNotEmpty)(a.body.email,_i18n["default"].__("fields.email"))},function(a){return(0,_middlewares.fieldNotEmpty)(a.body.password,_i18n["default"].__("fields.password"))},function(a){return(0,_middlewares.fieldNotEmpty)(a.body.password2,_i18n["default"].__("fields.confirm-password"))},function(a){return(0,_middlewares.passwordMatches)(a.body.password,a.body.password2)},function(a){return(0,_middlewares.fieldMinLength)(a.body.password,8,_i18n["default"].__("fields.password"))},function(a){return(0,_middlewares.fieldIsEmail)(a.body.email)}],a,b,c));case 1:case"end":return d.stop()}},d)})),_validateCreateUser.apply(this,arguments)}function validateUpdateUser(a,b,c){return _validateUpdateUser.apply(this,arguments)}function _validateUpdateUser(){return _validateUpdateUser=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function d(a,b,c){var e;return _regeneratorRuntime().wrap(function f(d){for(;1;)switch(d.prev=d.next){case 0:if(e=[function(a){return a.params.id?null:{msg:_i18n["default"].__("messages.error.notProvided","ID")}}],a.body.password||a.body.password2||a.body.email){d.next=3;break}return d.abrupt("return",b.status(422).json({errors:[{msg:_i18n["default"].__("messages.error.notProvided",_i18n["default"].__("fields.email"))},{msg:_i18n["default"].__("messages.error.notProvided",_i18n["default"].__("fields.password"))}]}));case 3:return(a.body.password||a.body.password2)&&e.push(function(a){return(0,_middlewares.fieldNotEmpty)(a.body.password,_i18n["default"].__("fields.password"))},function(a){return(0,_middlewares.fieldNotEmpty)(a.body.password2,_i18n["default"].__("fields.confirm-password"))},function(a){return(0,_middlewares.passwordMatches)(a.body.password,a.body.password2)},function(a){return(0,_middlewares.fieldMinLength)(a.body.password2,8,_i18n["default"].__("fields.confirm-password"))}),a.body.email&&e.push(function(a){return(0,_middlewares.fieldIsEmail)(a.body.email)}),d.abrupt("return",(0,_middlewares.handleValidation)(e,a,b,c));case 6:case"end":return d.stop()}},d)})),_validateUpdateUser.apply(this,arguments)}