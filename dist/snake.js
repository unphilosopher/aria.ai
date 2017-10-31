!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function(){function t(e,n){i(this,t),this.numerator=e,this.denominator=n}return r(t,null,[{key:"add",value:function(e,n){if(e.denominator===n.denominator)return new t(e.numerator+n.numerator,e.denominator);var i=t.lcd(e.denominator,n.denominator);return t.add(new t(e.numerator*(i/e.denominator),i),new t(n.numerator*(i/n.denominator),i))}},{key:"ceil",value:function(e){var n=e.val();return new t(e.val()%1===0?n+1:Math.ceil(n),1)}},{key:"floor",value:function(e){var n=e.val();return new t(e.val()%1===0?n-1:Math.floor(n),1)}},{key:"lcd",value:function(e,n){return e*n/t.gcd(e,n)}},{key:"gcd",value:function(t,e){for(;0!=e;)t>e?t-=e:e-=t;return t}},{key:"sub",value:function(e,n){if(e.denominator===n.denominator)return new t(e.numerator-n.numerator,e.denominator);var i=t.lcd(e.denominator,n.denominator);return t.sub(new t(e.numerator*(i/e.denominator),i),new t(n.numerator*(i/n.denominator),i))}}]),r(t,[{key:"val",value:function(){return this.numerator/this.denominator}}]),t}();e.default=o,o.gcd=function(t){function e(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var o=JSON.stringify(i);if(n[o])return n[o];var s=t.apply(void 0,i);return n[o]=s,s}var n={};return e}(o.gcd)},function(t,e,n){var i;!function(r,o,s,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function h(t,e,n){return!!Array.isArray(t)&&(c(t,n[e],n),!0)}function c(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}function d(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&pt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function p(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,n){c(b(e),function(e){t.addEventListener(e,n,!1)})}function y(t,e,n){c(b(e),function(e){t.removeEventListener(e,n,!1)})}function g(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function T(t,e){return t.indexOf(e)>-1}function b(t){return t.trim().split(/\s+/g)}function E(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function k(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];E(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function x(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<vt.length;){if(n=vt[o],(i=n?n+r:e)in t)return i;o++}return a}function I(){return kt++}function S(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function _(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){p(t.options.enable,[t])&&n.handler(e)},this.init()}function P(t){var e=t.options.inputClass;return new(e||(St?q:_t?U:It?B:W))(t,C)}function C(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Ct&&i-r===0,s=e&(At|Ot)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,M(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function M(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=R(e)),r>1&&!n.firstMultiple?n.firstMultiple=R(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,u=e.center=D(i);e.timeStamp=bt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Y(a,u),e.distance=X(a,u),A(n,e),e.offsetDirection=z(e.deltaX,e.deltaY);var h=N(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=Tt(h.x)>Tt(h.y)?h.x:h.y,e.scale=s?L(s.pointers,i):1,e.rotation=s?F(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,O(n,e);var c=t.element;g(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function A(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Ct&&o.eventType!==At||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function O(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(e.eventType!=Ot&&(u>Pt||s.velocity===a)){var h=e.deltaX-s.deltaX,c=e.deltaY-s.deltaY,l=N(u,h,c);i=l.x,r=l.y,n=Tt(l.x)>Tt(l.y)?l.x:l.y,o=z(h,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function R(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:gt(t.pointers[n].clientX),clientY:gt(t.pointers[n].clientY)},n++;return{timeStamp:bt(),pointers:e,center:D(e),deltaX:t.deltaX,deltaY:t.deltaY}}function D(t){var e=t.length;if(1===e)return{x:gt(t[0].clientX),y:gt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:gt(n/e),y:gt(i/e)}}function N(t,e,n){return{x:e/t||0,y:n/t||0}}function z(t,e){return t===e?Rt:Tt(t)>=Tt(e)?t<0?Dt:Nt:e<0?zt:Xt}function X(t,e,n){n||(n=Wt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function Y(t,e,n){n||(n=Wt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function F(t,e){return Y(e[1],e[0],qt)+Y(t[1],t[0],qt)}function L(t,e){return X(e[0],e[1],qt)/X(t[0],t[1],qt)}function W(){this.evEl=jt,this.evWin=Ut,this.pressed=!1,_.apply(this,arguments)}function q(){this.evEl=Gt,this.evWin=Zt,_.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function H(){this.evTarget=Kt,this.evWin=$t,this.started=!1,_.apply(this,arguments)}function j(t,e){var n=w(t.touches),i=w(t.changedTouches);return e&(At|Ot)&&(n=k(n.concat(i),"identifier",!0)),[n,i]}function U(){this.evTarget=te,this.targetIds={},_.apply(this,arguments)}function V(t,e){var n=w(t.touches),i=this.targetIds;if(e&(Ct|Mt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=w(t.changedTouches),a=[],u=this.target;if(o=n.filter(function(t){return g(t.target,u)}),e===Ct)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(At|Ot)&&delete i[s[r].identifier],r++;return a.length?[k(o.concat(a),"identifier",!0),a]:void 0}function B(){_.apply(this,arguments);var t=f(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new W(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Ct?(this.primaryTouch=e.changedPointers[0].identifier,Z.call(this,e)):t&(At|Ot)&&Z.call(this,e)}function Z(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,ee)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=ne&&s<=ne)return!0}return!1}function K(t,e){this.manager=t,this.set(e)}function $(t){if(T(t,ae))return ae;var e=T(t,ue),n=T(t,he);return e&&n?ae:e||n?e?ue:he:T(t,se)?se:oe}function Q(t){this.options=pt({},this.defaults,t||{}),this.id=I(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=le,this.simultaneous={},this.requireFail=[]}function tt(t){return t&me?"cancel":t&pe?"end":t&fe?"move":t&de?"start":""}function et(t){return t==Xt?"down":t==zt?"up":t==Dt?"left":t==Nt?"right":""}function nt(t,e){var n=e.manager;return n?n.get(t):t}function it(){Q.apply(this,arguments)}function rt(){it.apply(this,arguments),this.pX=null,this.pY=null}function ot(){it.apply(this,arguments)}function st(){Q.apply(this,arguments),this._timer=null,this._input=null}function at(){it.apply(this,arguments)}function ut(){it.apply(this,arguments)}function ht(){Q.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ct(t,e){return e=e||{},e.recognizers=v(e.recognizers,ct.defaults.preset),new lt(t,e)}function lt(t,e){this.options=pt({},ct.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=P(this),this.touchAction=new K(this,this.options.touchAction),dt(this,!0),c(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function dt(t,e){var n=t.element;if(n.style){var i;c(t.options.cssProps,function(r,o){i=x(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ft(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var pt,vt=["","webkit","Moz","MS","ms","o"],mt=o.createElement("div"),yt="function",gt=Math.round,Tt=Math.abs,bt=Date.now;pt="function"!==typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var Et=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),wt=l(function(t,e){return Et(t,e,!0)},"merge","Use `assign`."),kt=1,xt=/mobile|tablet|ip(ad|hone|od)|android/i,It="ontouchstart"in r,St=x(r,"PointerEvent")!==a,_t=It&&xt.test(navigator.userAgent),Pt=25,Ct=1,Mt=2,At=4,Ot=8,Rt=1,Dt=2,Nt=4,zt=8,Xt=16,Yt=Dt|Nt,Ft=zt|Xt,Lt=Yt|Ft,Wt=["x","y"],qt=["clientX","clientY"];_.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(S(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&y(this.element,this.evEl,this.domHandler),this.evTarget&&y(this.target,this.evTarget,this.domHandler),this.evWin&&y(S(this.element),this.evWin,this.domHandler)}};var Ht={mousedown:Ct,mousemove:Mt,mouseup:At},jt="mousedown",Ut="mousemove mouseup";d(W,_,{handler:function(t){var e=Ht[t.type];e&Ct&&0===t.button&&(this.pressed=!0),e&Mt&&1!==t.which&&(e=At),this.pressed&&(e&At&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Vt={pointerdown:Ct,pointermove:Mt,pointerup:At,pointercancel:Ot,pointerout:Ot},Bt={2:"touch",3:"pen",4:"mouse",5:"kinect"},Gt="pointerdown",Zt="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Gt="MSPointerDown",Zt="MSPointerMove MSPointerUp MSPointerCancel"),d(q,_,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Vt[i],o=Bt[t.pointerType]||t.pointerType,s="touch"==o,a=E(e,t.pointerId,"pointerId");r&Ct&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(At|Ot)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var Jt={touchstart:Ct,touchmove:Mt,touchend:At,touchcancel:Ot},Kt="touchstart",$t="touchstart touchmove touchend touchcancel";d(H,_,{handler:function(t){var e=Jt[t.type];if(e===Ct&&(this.started=!0),this.started){var n=j.call(this,t,e);e&(At|Ot)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var Qt={touchstart:Ct,touchmove:Mt,touchend:At,touchcancel:Ot},te="touchstart touchmove touchend touchcancel";d(U,_,{handler:function(t){var e=Qt[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var ee=2500,ne=25;d(B,_,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(r&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ie=x(mt.style,"touchAction"),re=ie!==a,oe="auto",se="manipulation",ae="none",ue="pan-x",he="pan-y",ce=function(){if(!re)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}();K.prototype={set:function(t){"compute"==t&&(t=this.compute()),re&&this.manager.element.style&&ce[t]&&(this.manager.element.style[ie]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return c(this.manager.recognizers,function(e){p(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),$(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=T(i,ae)&&!ce[ae],o=T(i,he)&&!ce[he],s=T(i,ue)&&!ce[ue];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}return s&&o?void 0:r||o&&n&Yt||s&&n&Ft?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var le=1,de=2,fe=4,pe=8,ve=pe,me=16;Q.prototype={defaults:{},set:function(t){return pt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(h(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=nt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return h(t,"dropRecognizeWith",this)?this:(t=nt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(h(t,"requireFailure",this))return this;var e=this.requireFail;return t=nt(t,this),-1===E(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(h(t,"dropRequireFailure",this))return this;t=nt(t,this);var e=E(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<pe&&e(n.options.event+tt(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=pe&&e(n.options.event+tt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|le)))return!1;t++}return!0},recognize:function(t){var e=pt({},t);if(!p(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(ve|me|32)&&(this.state=le),this.state=this.process(e),this.state&(de|fe|pe|me)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},d(it,Q,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(de|fe),r=this.attrTest(t);return i&&(n&Ot||!r)?e|me:i||r?n&At?e|pe:e&de?e|fe:de:32}}),d(rt,it,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Yt&&e.push(he),t&Ft&&e.push(ue),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Yt?(r=0===o?Rt:o<0?Dt:Nt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?Rt:s<0?zt:Xt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return it.prototype.attrTest.call(this,t)&&(this.state&de||!(this.state&de)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=et(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),d(ot,it,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&de)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),d(st,Q,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[oe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(At|Ot)&&!r)this.reset();else if(t.eventType&Ct)this.reset(),this._timer=u(function(){this.state=ve,this.tryEmit()},e.time,this);else if(t.eventType&At)return ve;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ve&&(t&&t.eventType&At?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=bt(),this.manager.emit(this.options.event,this._input)))}}),d(at,it,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ae]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&de)}}),d(ut,it,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Yt|Ft,pointers:1},getTouchAction:function(){return rt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Yt|Ft)?e=t.overallVelocity:n&Yt?e=t.overallVelocityX:n&Ft&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Tt(e)>this.options.velocity&&t.eventType&At},emit:function(t){var e=et(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),d(ht,Q,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[se]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Ct&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=At)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||X(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=u(function(){this.state=ve,this.tryEmit()},e.interval,this),de):ve}return 32},failTimeout:function(){return this._timer=u(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ve&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ct.VERSION="2.0.7",ct.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[at,{enable:!1}],[ot,{enable:!1},["rotate"]],[ut,{direction:Yt}],[rt,{direction:Yt},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[st]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};lt.prototype={set:function(t){return pt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&ve)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(de|fe|pe)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Q)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(h(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(h(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=E(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return c(b(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return c(b(t),function(t){e?n[t]&&n[t].splice(E(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ft(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&dt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},pt(ct,{INPUT_START:Ct,INPUT_MOVE:Mt,INPUT_END:At,INPUT_CANCEL:Ot,STATE_POSSIBLE:le,STATE_BEGAN:de,STATE_CHANGED:fe,STATE_ENDED:pe,STATE_RECOGNIZED:ve,STATE_CANCELLED:me,STATE_FAILED:32,DIRECTION_NONE:Rt,DIRECTION_LEFT:Dt,DIRECTION_RIGHT:Nt,DIRECTION_UP:zt,DIRECTION_DOWN:Xt,DIRECTION_HORIZONTAL:Yt,DIRECTION_VERTICAL:Ft,DIRECTION_ALL:Lt,Manager:lt,Input:_,TouchAction:K,TouchInput:U,MouseInput:W,PointerEventInput:q,TouchMouseInput:B,SingleTouchInput:H,Recognizer:Q,AttrRecognizer:it,Tap:ht,Pan:rt,Swipe:ut,Pinch:ot,Rotate:at,Press:st,on:m,off:y,each:c,merge:wt,extend:Et,assign:pt,inherit:d,bindFn:f,prefixed:x}),("undefined"!==typeof r?r:"undefined"!==typeof self?self:{}).Hammer=ct,(i=function(){return ct}.call(e,n,e,t))!==a&&(t.exports=i)}(window,document)},function(t,e,n){"use strict";function i(t){var e=t.cellWidth,n=t.height,i=t.width;return{x:Math.round(Math.random()*(i-e)/e),y:Math.round(Math.random()*(n-e)/e)}}function r(t,e,n){return l(e,{x:n.x.val(),y:n.y.val()})||c(n,t)}function o(t){if(null==t)throw new Error("Argument was null");return t}function s(t,e,n){var i=t.cellWidth,r=t.snakeColor,o=n.x,s=n.y;e.fillStyle=r,e.strokeStyle=r,e.fillRect(o*i,s*i,i,i),e.strokeRect(o*i,s*i,i,i)}function a(t,e,n,i){var r=window.devicePixelRatio||1,o=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,s=r/o;r!==o?(t.width=n*s,t.height=i*s,t.style.width=n+"px",t.style.height=i+"px"):(t.width=n,t.height=i,t.style.width="",t.style.height=""),e.scale(s,s)}function u(t){return Array.from({length:t},function(t,e){return e})}function h(t,e){return!("right"===t&&"left"===e||"left"===t&&"right"===e||"up"===t&&"down"===e||"down"===t&&"up"===e)}function c(t,e){var n=t.x,i=t.y,r=!0,o=!1,s=void 0;try{for(var a,u=e.slice(1)[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var h=a.value;if(n.val()===h.x.val()&&i.val()===h.y.val())return!0}}catch(t){o=!0,s=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}return!1}function l(t,e){var n=e.x,i=e.y,r=t.width,o=t.height,s=t.cellWidth;return n<0||i<0||n>=r/s||i>=o/s}Object.defineProperty(e,"__esModule",{value:!0}),e.createFood=i,e.didLose=r,e.nullThrows=o,e.paintCell=s,e.scaleCanvas=a,e.seq=u,e.validMove=h;var d=n(0);!function(t){t&&t.__esModule}(d)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(1),o=i(r),s=n(0),a=i(s),u=n(4),h=i(u),c=n(2),l=document.body,d=l.clientHeight,f=l.clientWidth,p=10*Math.ceil(.75*Math.min(d,f)/10+1),v={cellWidth:10,height:p,snakeColor:"#fff",speed:new a.default(1,10),width:p},m=document.getElementById("canvas"),y=m.getContext("2d");(0,c.scaleCanvas)(m,y,v.width,v.height);var g=new h.default(v,y),T=new o.default(document);T.get("swipe").set({direction:o.default.DIRECTION_ALL,threshold:1,velocity:.1}),T.on("swipe",g.onEvent),document.addEventListener("keydown",g.onEvent)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){switch(t){case u.default.DIRECTION_LEFT:case 37:return"left";case u.default.DIRECTION_UP:case 38:return"up";case u.default.DIRECTION_RIGHT:case 39:return"right";case u.default.DIRECTION_DOWN:case 40:return"down";default:return null}}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(1),u=i(a),h=n(0),c=i(h),l=n(2),d=new c.default(1,1),f=function(){function t(){r(this,t),this.body=(0,l.seq)(5).map(function(t){return{x:new c.default(t,1),y:new c.default(0,1),didPivot:!1,direction:"right"}}).reverse(),this.moves=[]}return s(t,[{key:"queueMove",value:function(t){if(!(this.moves.length>=3)){var e=this.moves.length>0?this.moves[this.moves.length-1]:this.body[0].direction;(0,l.validMove)(e,t)&&this.moves.push(t)}}}]),t}(),p=function(){function t(e,n){var i=this;r(this,t),this.accumulator=new c.default(0,1),this.onEvent=function(t){if(i.gameOver)return void i.init();var e=null;t instanceof KeyboardEvent?t.repeat||(e=o(t.keyCode)):e=o(t.direction),e&&i.snake.queueMove(e)},this.config=e,this.ctx=n,this.highScore=parseInt(localStorage.getItem("highScore"))||0,this.highScoreElement=(0,l.nullThrows)(document.getElementById("high-score")),this.scoreElement=(0,l.nullThrows)(document.getElementById("score")),this.init(),this.highScoreElement.innerHTML=""+this.highScore,this.speedup=new c.default(1,10*this.config.speed.denominator)}return s(t,[{key:"init",value:function(){var t=this;this.food=(0,l.createFood)(this.config),this.gameOver=!1,this.setScore(0),this.snake=new f,this.speed=this.config.speed,this.interval=setInterval(function(){t.update(t.speed),t.render()},16)}},{key:"render",value:function(){var t=this.config,e=t.height,n=t.width;this.ctx.fillStyle="black",this.ctx.fillRect(0,0,n,e);var i=!0,r=!1,o=void 0;try{for(var s,a=this.snake.body[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var u=s.value;(0,l.paintCell)(this.config,this.ctx,{x:u.x.val(),y:u.y.val()})}}catch(t){r=!0,o=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}(0,l.paintCell)(this.config,this.ctx,this.food)}},{key:"setScore",value:function(t){this.score=t,this.scoreElement.innerHTML=""+this.score,this.score>this.highScore&&(this.highScore=this.score,this.highScoreElement.innerHTML=""+this.highScore,localStorage.setItem("highScore",""+this.highScore))}},{key:"update",value:function(t){var e=this.config;e.height,e.width;this.accumulator=c.default.add(this.accumulator,t);for(var n=this.snake.body.length-1;n>=0;--n)this.accumulator.val()>=1?"right"===this.snake.body[n].direction?this.snake.body[n].x=c.default.ceil(this.snake.body[n].x):"left"===this.snake.body[n].direction?this.snake.body[n].x=c.default.floor(this.snake.body[n].x):"up"===this.snake.body[n].direction?this.snake.body[n].y=c.default.floor(this.snake.body[n].y):"down"===this.snake.body[n].direction&&(this.snake.body[n].y=c.default.ceil(this.snake.body[n].y)):"right"===this.snake.body[n].direction?this.snake.body[n].x=c.default.add(this.snake.body[n].x,t):"left"===this.snake.body[n].direction?this.snake.body[n].x=c.default.sub(this.snake.body[n].x,t):"up"===this.snake.body[n].direction?this.snake.body[n].y=c.default.sub(this.snake.body[n].y,t):"down"===this.snake.body[n].direction&&(this.snake.body[n].y=c.default.add(this.snake.body[n].y,t)),this.accumulator.val()>=1&&0!==n&&this.snake.body[n-1].didPivot&&(this.snake.body[n].didPivot=!0,this.snake.body[n].direction=this.snake.body[n-1].direction,this.snake.body[n-1].didPivot=!1);if(this.accumulator.val()>=1&&this.snake.moves.length>0&&(this.snake.body[0].direction=this.snake.moves.shift(),this.snake.body[0].didPivot=!0),!(this.accumulator.val()<1)){if(this.accumulator=new c.default(0,1),(0,l.didLose)(this.snake.body,this.config,this.snake.body[0]))return this.gameOver=!0,void clearInterval(this.interval);if(this.snake.body[0].x.val()===this.food.x&&this.snake.body[0].y.val()===this.food.y){var i=this.snake.body[this.snake.body.length-1],r=i.direction,o=i.x,s=i.y;"right"===r?o=c.default.sub(o,d):"left"===r?o=c.default.add(o,d):"up"===r?s=c.default.add(s,d):"down"===r&&(s=c.default.sub(s,d)),this.setScore(this.score+1),this.food=(0,l.createFood)(this.config),this.snake.body.push({didPivot:!1,direction:r,x:o,y:s}),this.speed=c.default.add(this.speed,this.speedup)}}}}]),t}();e.default=p}]);