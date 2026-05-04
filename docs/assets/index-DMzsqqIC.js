var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=re(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var A=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},j={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=j,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,A)}catch(e){A(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),k=Symbol.iterator;function ne(e){return typeof e!=`object`||!e?null:(e=k&&e[k]||e[`@@iterator`],typeof e==`function`?e:null)}var re=Symbol.for(`react.client.reference`);function ie(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ie(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ae=Array.isArray,A=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},se=[],ce=-1;function le(e){return{current:e}}function ue(e){0>ce||(e.current=se[ce],se[ce]=null,ce--)}function M(e,t){ce++,se[ce]=e.current,e.current=t}var de=le(null),fe=le(null),pe=le(null),me=le(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ue(de),M(de,e)}function ge(){ue(de),ue(fe),ue(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(ue(de),ue(fe)),me.current===e&&(ue(me),Qf._currentValue=oe)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=j.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Ee.call(Mt,e)?!0:Ee.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ae(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,`passive`,{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=h({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(h({},Nn,{dataTransfer:0})),In=Tn(h({},On,{relatedTarget:0})),Ln=Tn(h({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(h({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(h({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(h({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(h({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=xn(),bn=yn=vn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Vt(Ct(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(hn){var vr;if(hn){var N=`oninput`in document;if(!N){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),N=typeof yr.oninput==`function`}vr=N}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function br(){fr&&(fr.detachEvent(`onpropertychange`,xr),pr=fr=null)}function xr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,cn(e)),pn(mr,t)}}function Sr(e,t,n){e===`focusin`?(br(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function wr(e,t){if(e===`click`)return hr(t)}function Tr(e,t){if(e===`input`||e===`change`)return hr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function P(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=hn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Ht(r)||(r=Pr,`selectionStart`in r&&P(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Or(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};hn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Ot(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=fi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=fi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=fi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Ue(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function Wi(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Gi(){F=Li=null,I=!1}function Ki(){var e=Ri;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=le(null),Yi=null,Xi=null;function Zi(e,t,n){M(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,ue(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,L={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new sa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=A.S;A.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=le(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?M(ba,ba.current):M(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:L._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case O:return t=Aa(t),f(e,t,n)}if(ae(t)||ne(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Aa(n),p(e,t,n,r)}if(ae(n)||ne(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Aa(r),m(e,t,n,r,i)}if(ae(r)||ne(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Aa(o),b(e,r,o,c)}if(ae(o))return h(e,r,o,c);if(ne(o)){if(l=ne(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=le(null),to=le(0);function no(e,t){e=Wl,M(to,e),M(eo,t),Wl=e|t.baseLanes}function ro(){M(to,Wl),M(eo,eo.current)}function io(){Wl=to.current,ue(eo),ue(to)}var ao=le(null),oo=null;function so(e){var t=e.alternate;M(R,R.current&1),M(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){M(R,R.current),M(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(M(R,R.current),M(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){M(R,R.current),M(ao,ao.current)}function fo(e){ue(ao),oo===e&&(oo=null),ue(R)}var R=le(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){A.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&na(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=A.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};A.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=A.T,o={};A.T=o;try{var s=n(i,r),c=A.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),A.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=z;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Dr(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Dr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=j.p;j.p=a!==0&&8>a?a:8;var o=A.T,s={};A.T=s,Fs(e,!1,t,n);try{var c=i(),l=A.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{j.p=a,o!==null&&s.types!==null&&(o.types=s.types),A.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,oe,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ia(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return ai(e,t,i,0),K===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var zs={readContext:ia,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ia,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ei(e)}function Ys(e){console.error(e)}function Xs(e){ei(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=ao.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:L._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Gi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?so(t):uo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=L._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(R,o),ac(e,t,r,n),r=I?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&na(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Zi(t,L,e.memoizedState.cache),Gi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Zi(t,L,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,I&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ie(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,L,r),r!==o.cache&&ea(t,[L],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=Si(Error(i(424)),t),qi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(L),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,L,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,L,r),r!==a.cache&&ea(t,[L],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,L,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(L),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=de.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=de.current,Wi(t))Hi(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Qi(t.type),U(t),null;case 19:if(ue(R),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return M(R,R.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=R.current,M(R,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ue(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(L),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(L),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(R),null;case 4:return ge(),null;case 10:return Qi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&ue(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(L),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Qi(L),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:ue(R);break;case 10:Qi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&ue(ba);break;case 24:Qi(L)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),P(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ia(L),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(L).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:A.T===null?lt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||I){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),nt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-je(),10<a)){if(yu(r,t,Jl,!Vl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Ml(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Xi=Yi=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=mi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ii(),n}function Cu(e,t){z=null,A.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Si(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=A.H;return A.H=zs,e===null?zs:e}function Eu(){var e=A.A;return A.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,G=r,A.H=i,A.A=a,q===null&&(K=null,J=0,ii()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=je()+500,Su(e,t)):Hl=Qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,A.H=r,A.A=a,G=n,q===null?(K=null,J=0,ii(),X):0}function ju(){for(;q!==null&&!ke();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=hi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Xi=Yi=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Si(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Si(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,rt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=A.T,A.T=null,a=j.p,j.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,j.p=a,A.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&P(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,j.p=r,A.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=A.T,A.T=null;var r=j.p;j.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,j.p=r,A.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=A.T,i=j.p,j.p=2,A.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{A.T=t,j.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=A.T,a=j.p;try{j.p=32>n?32:n,A.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{j.p=a,A.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>je()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=si(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ze(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ze(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Wr:case Gr:case Kr:l=Ln;break;case Xr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=gr):v=wr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=j.d;j.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=2,up(e,t,n,r)}finally{j.p=a,A.T=i}}function lp(e,t,n,r){var i=A.T;A.T=null;var a=j.p;try{j.p=8,up(e,t,n,r)}finally{j.p=a,A.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:A,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/`+e},x={},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=b(t,n),t in x)return;x[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=`popstate`;function w(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function T(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ne(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),te(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:k(t))}function r(e,t){D(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return re(t,n,r,e)}function E(e,t){if(e===!1||e==null)throw Error(t)}function D(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function O(){return Math.random().toString(36).substring(2,10)}function ee(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ne(t):t,state:n,key:t&&t.key||r||O(),unstable_mask:i}}function k({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ne(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function re(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=w(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=ee(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=w(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=ee(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ie(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(C,d),c=e,()=>{i.removeEventListener(C,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ie(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),E(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:k(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ae(e,t,n=`/`){return A(e,t,n,!1)}function A(e,t,n,r){let i=xe((typeof t==`string`?ne(t):t).pathname||`/`,n);if(i==null)return null;let a=oe(e);ce(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=be(i);o=_e(a[e],t,r)}return o}function j(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function oe(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;E(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ae([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(E(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),oe(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:he(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of se(e.path))a(e,t,!0,n)}),t}function se(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=se(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ce(e){e.sort((e,t)=>e.score===t.score?ge(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var le=/^:[\w-]+$/,ue=3,M=2,de=1,fe=10,pe=-2,me=e=>e===`*`;function he(e,t){let n=e.split(`/`),r=n.length;return n.some(me)&&(r+=pe),t&&(r+=M),n.filter(e=>!me(e)).reduce((e,t)=>e+(le.test(t)?ue:t===``?de:fe),r)}function ge(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function _e(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ae([a,u.pathname]),pathnameBase:Me(Ae([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ae([a,u.pathnameBase]))}return o}function ve(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ye(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ye(e,t=!1,n=!0){D(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function be(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return D(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Se=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ce(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ne(e):e,a;return n?(n=ke(n),a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)):a=t,{pathname:a,search:Ne(r),hash:Pe(i)}}function we(e,t){let n=je(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e){let t=Ee(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Oe(e,t,n,r=!1){let i;typeof e==`string`?i=ne(e):(i={...e},E(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),E(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),E(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.replace(/\/\/+/g,`/`),Ae=e=>ke(e.join(`/`)),je=e=>e.replace(/\/+$/,``),Me=e=>je(e).replace(/^\/*/,`/`),Ne=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Pe=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Fe=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ie(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Le(e){return Ae(e.map(e=>e.route.path).filter(Boolean))||`/`}var Re=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ze(e,t){let n=e;if(typeof n!=`string`||!Se.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Re)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=xe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{D(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Be=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Be);var Ve=[`GET`,...Be];new Set(Ve);var He=_.createContext(null);He.displayName=`DataRouter`;var Ue=_.createContext(null);Ue.displayName=`DataRouterState`;var We=_.createContext(!1);function Ge(){return _.useContext(We)}var Ke=_.createContext({isTransitioning:!1});Ke.displayName=`ViewTransition`;var qe=_.createContext(new Map);qe.displayName=`Fetchers`;var Je=_.createContext(null);Je.displayName=`Await`;var Ye=_.createContext(null);Ye.displayName=`Navigation`;var Xe=_.createContext(null);Xe.displayName=`Location`;var Ze=_.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName=`Route`;var Qe=_.createContext(null);Qe.displayName=`RouteError`;var $e=`REACT_ROUTER_ERROR`,et=`REDIRECT`,tt=`ROUTE_ERROR_RESPONSE`;function nt(e){if(e.startsWith(`${$e}:${et}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function rt(e){if(e.startsWith(`${$e}:${tt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Fe(t.status,t.statusText,t.data)}catch{}}function it(e,{relative:t}={}){E(at(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(Ye),{hash:i,pathname:a,search:o}=dt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ae([n,a])),r.createHref({pathname:s,search:o,hash:i})}function at(){return _.useContext(Xe)!=null}function ot(){return E(at(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Xe).location}var st=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ct(e){_.useContext(Ye).static||_.useLayoutEffect(e)}function lt(){let{isDataRoute:e}=_.useContext(Ze);return e?At():ut()}function ut(){E(at(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(He),{basename:t,navigator:n}=_.useContext(Ye),{matches:r}=_.useContext(Ze),{pathname:i}=ot(),a=JSON.stringify(De(r)),o=_.useRef(!1);return ct(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(D(o.current,st),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Oe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ae([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function dt(e,{relative:t}={}){let{matches:n}=_.useContext(Ze),{pathname:r}=ot(),i=JSON.stringify(De(n));return _.useMemo(()=>Oe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ft(e,t){return pt(e,t)}function pt(e,t,n){E(at(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(Ye),{matches:i}=_.useContext(Ze),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Mt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ot(),d;if(t){let e=typeof t==`string`?ne(t):t;E(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ae(e,{pathname:p});D(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),D(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=bt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ae([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ae([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Xe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function mt(){let e=kt(),t=Ie(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var ht=_.createElement(mt,null),gt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=rt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(Ze.Provider,{value:this.props.routeContext},_.createElement(Qe.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(vt,{error:e},t):t}};gt.contextType=We;var _t=new WeakMap;function vt({children:e,error:t}){let{basename:n}=_.useContext(Ye);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=nt(t.digest);if(e){let r=_t.get(t);if(r)throw r;let i=ze(e.location,n);if(Re&&!_t.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw _t.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function yt({routeContext:e,match:t,children:n}){let r=_.useContext(He);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Ze.Provider,{value:e},n)}function bt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);E(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Le(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||ht,o&&(s<0&&c===0?(Mt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(yt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(gt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function xt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function St(e){let t=_.useContext(He);return E(t,xt(e)),t}function Ct(e){let t=_.useContext(Ue);return E(t,xt(e)),t}function wt(e){let t=_.useContext(Ze);return E(t,xt(e)),t}function Tt(e){let t=wt(e),n=t.matches[t.matches.length-1];return E(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Et(){return Tt(`useRouteId`)}function Dt(){return Ct(`useNavigation`).navigation}function Ot(){let{matches:e,loaderData:t}=Ct(`useMatches`);return _.useMemo(()=>e.map(e=>j(e,t)),[e,t])}function kt(){let e=_.useContext(Qe),t=Ct(`useRouteError`),n=Tt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function At(){let{router:e}=St(`useNavigate`),t=Tt(`useNavigate`),n=_.useRef(!1);return ct(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{D(n.current,st),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var jt={};function Mt(e,t,n){!t&&!jt[e]&&(jt[e]=!0,D(!1,n))}_.memo(Nt);function Nt({routes:e,future:t,state:n,isStatic:r,onError:i}){return pt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Pt(e){E(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ft({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){E(!at(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ne(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=_.useMemo(()=>{let e=xe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return D(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(Ye.Provider,{value:c},_.createElement(Xe.Provider,{children:t,value:h}))}function It({children:e,location:t}){return ft(Lt(e),t)}_.Component;function Lt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Lt(e.props.children,i));return}E(e.type===Pt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Lt(e.props.children,i)),n.push(a)}),n}var Rt=`get`,zt=`application/x-www-form-urlencoded`;function Bt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Vt(e){return Bt(e)&&e.tagName.toLowerCase()===`button`}function Ht(e){return Bt(e)&&e.tagName.toLowerCase()===`form`}function Ut(e){return Bt(e)&&e.tagName.toLowerCase()===`input`}function Wt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gt(e,t){return e.button===0&&(!t||t===`_self`)&&!Wt(e)}var Kt=null;function qt(){if(Kt===null)try{new FormData(document.createElement(`form`),0),Kt=!1}catch{Kt=!0}return Kt}var Jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Yt(e){return e!=null&&!Jt.has(e)?(D(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zt}"`),null):e}function Xt(e,t){let n,r,i,a,o;if(Ht(e)){let o=e.getAttribute(`action`);r=o?xe(o,t):null,n=e.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`enctype`))||zt,a=new FormData(e)}else if(Vt(e)||Ut(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?xe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Rt,i=Yt(e.getAttribute(`formenctype`))||Yt(o.getAttribute(`enctype`))||zt,a=new FormData(o,e),!qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Bt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Rt,r=null,i=zt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Zt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Qt=/[&><\u2028\u2029]/g;function $t(e){return e.replace(Qt,e=>Zt[e])}function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&xe(i.pathname,t)===`/`?i.pathname=`${je(t)}/_root.${r}`:i.pathname=`${je(i.pathname)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await S(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=_.useContext(He);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=_.useContext(Ue);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=_.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=_.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=_.useContext(mn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let n=Ge(),{router:r}=fn(),i=_.useMemo(()=>ae(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?_.createElement(bn,{page:e,matches:i,...t}):_.createElement(xn,{page:e,matches:i,...t}):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=ot(),{future:i}=hn(),{basename:a}=fn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=tn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function xn({page:e,matches:t,...n}){let r=ot(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=_.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Sn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Cn&&(window.__reactRouterVersion=`7.14.2`)}catch{}function wn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=_.useRef();i.current??=T({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Ft,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Tn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Ft,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Tn.displayName=`unstable_HistoryRouter`;var En=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:v}=_.useContext(Ye),y=typeof l==`string`&&En.test(l),b=ze(l,h);l=b.to;let x=it(l,{relative:r}),S=ot(),C=null;if(o){let e=Oe(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ae([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=gn(n,p),D=Pn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:v});function O(t){e&&e(t),t.defaultPrevented||D(t)}let ee=!(b.isExternal||i),te=_.createElement(`a`,{...p,...E,href:(ee?C:void 0)||b.absoluteURL||x,onClick:ee?O:e,ref:Sn(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,te,_.createElement(vn,{page:x})):te});Dn.displayName=`Link`;var On=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=dt(a,{relative:c.relative}),d=ot(),f=_.useContext(Ue),{navigator:p,basename:m}=_.useContext(Ye),h=f!=null&&Wn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=xe(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return _.createElement(Dn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});On.displayName=`NavLink`;var kn=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Rt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=_.useContext(Ye),g=Ln(),v=Rn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&En.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});kn.displayName=`Form`;function An({getKey:e,storageKey:t,...n}){let r=_.useContext(mn),{basename:i}=_.useContext(Ye),a=ot(),o=Ot();Hn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Vn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${$t(JSON.stringify(t||zn))}, ${$t(JSON.stringify(s))})`}})}An.displayName=`ScrollRestoration`;function jn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mn(e){let t=_.useContext(He);return E(t,jn(e)),t}function Nn(e){let t=_.useContext(Ue);return E(t,jn(e)),t}function Pn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=lt(),d=ot(),f=dt(e,{relative:o});return _.useCallback(p=>{if(Gt(p,t)){p.preventDefault();let t=n===void 0?k(d)===k(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Fn=0,In=()=>`__${String(++Fn)}__`;function Ln(){let{router:e}=Mn(`useSubmit`),{basename:t}=_.useContext(Ye),n=Et(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Xt(e,t);a.navigate===!1?await r(a.fetcherKey||In(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Rn(e,{relative:t}={}){let{basename:n}=_.useContext(Ye),r=_.useContext(Ze);E(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...dt(e||`.`,{relative:t})},o=ot();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ae([n,a.pathname])),k(a)}var zn=`react-router-scroll-positions`,Bn={};function Vn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:xe(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Hn({getKey:e,storageKey:t}={}){let{router:n}=Mn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Nn(`useScrollRestoration`),{basename:a}=_.useContext(Ye),o=ot(),s=Ot(),c=Dt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Un(_.useCallback(()=>{if(c.state===`idle`){let t=Vn(o,s,a,e);Bn[t]=window.scrollY}try{sessionStorage.setItem(t||zn,JSON.stringify(Bn))}catch(e){D(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||zn);e&&(Bn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Bn,()=>window.scrollY,e?(t,n)=>Vn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{D(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Un(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Wn(e,{relative:t}={}){let n=_.useContext(Ke);E(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mn(`useViewTransitionState`),i=dt(e,{relative:t});if(!n.isTransitioning)return!1;let a=xe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=xe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ve(i.pathname,o)!=null||ve(i.pathname,a)!=null}var Gn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kn=_.createContext&&_.createContext(Gn),qn=[`attr`,`size`,`title`];function Jn(e,t){if(e==null)return{};var n,r,i=Yn(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Yn(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Xn(){return Xn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xn.apply(null,arguments)}function Zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zn(Object(n),!0).forEach(function(t){$n(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zn(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function $n(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function er(e){var t=tr(e,`string`);return typeof t==`symbol`?t:t+``}function tr(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function nr(e){return e&&e.map((e,t)=>_.createElement(e.tag,Qn({key:t},e.attr),nr(e.child)))}function rr(e){return t=>_.createElement(ir,Xn({attr:Qn({},e.attr)},t),nr(e.child))}function ir(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Jn(e,qn),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,Xn({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Qn(Qn({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return Kn===void 0?t(Gn):_.createElement(Kn.Consumer,null,e=>t(e))}var ar=c(m(),1);function or(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function sr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`9`,cy:`7`,r:`4`},child:[]},{tag:`path`,attr:{d:`M23 21v-2a4 4 0 0 0-3-3.87`},child:[]},{tag:`path`,attr:{d:`M16 3.13a4 4 0 0 1 0 7.75`},child:[]}]})(e)}function cr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`6`},child:[]},{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`2`},child:[]}]})(e)}function lr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`3`,y1:`12`,x2:`21`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`18`,x2:`21`,y2:`18`},child:[]}]})(e)}function ur(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polygon`,attr:{points:`12 2 2 7 12 12 22 7 12 2`},child:[]},{tag:`polyline`,attr:{points:`2 17 12 22 22 17`},child:[]},{tag:`polyline`,attr:{points:`2 12 12 17 22 12`},child:[]}]})(e)}function dr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`},child:[]},{tag:`polyline`,attr:{points:`15 3 21 3 21 9`},child:[]},{tag:`line`,attr:{x1:`10`,y1:`14`,x2:`21`,y2:`3`},child:[]}]})(e)}function fr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`ellipse`,attr:{cx:`12`,cy:`5`,rx:`9`,ry:`3`},child:[]},{tag:`path`,attr:{d:`M21 12c0 1.66-4 3-9 3s-9-1.34-9-3`},child:[]},{tag:`path`,attr:{d:`M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5`},child:[]}]})(e)}function pr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,ry:`2`},child:[]},{tag:`rect`,attr:{x:`9`,y:`9`,width:`6`,height:`6`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`1`,x2:`9`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`1`,x2:`15`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`9`,y1:`20`,x2:`9`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`15`,y1:`20`,x2:`15`,y2:`23`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`9`,x2:`23`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`20`,y1:`14`,x2:`23`,y2:`14`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`9`,x2:`4`,y2:`9`},child:[]},{tag:`line`,attr:{x1:`1`,y1:`14`,x2:`4`,y2:`14`},child:[]}]})(e)}function mr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`9 18 15 12 9 6`},child:[]}]})(e)}function hr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`15 18 9 12 15 6`},child:[]}]})(e)}function gr(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`20`,x2:`18`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`20`,x2:`6`,y2:`14`},child:[]}]})(e)}function _r(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`5`,y1:`12`,x2:`19`,y2:`12`},child:[]},{tag:`polyline`,attr:{points:`12 5 19 12 12 19`},child:[]}]})(e)}var vr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=o(((e,t)=>{t.exports=vr()}))(),yr=[{label:`한국인공지능협회`,href:`https://koraia.org/`},{label:`한국인공지능자격센터`,href:`https://lic.koraia.org/`},{label:`한국인공지능인증센터`,href:`https://cc.koraia.org/`}];function br({variant:e=`dark`}){let t=e===`light`,n=t?`bg-white`:`bg-black`,r=t?`mx-auto flex max-w-[980px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-2.5 pt-10 text-[12px] font-semibold text-[#162033] sm:px-8 lg:px-0`:`mx-auto flex max-w-[980px] flex-wrap items-center gap-x-2 sm:gap-x-4 gap-y-2 px-6 py-2.5 pt-10 text-[12px] font-semibold text-white sm:px-8 lg:px-0`,i=t?`text-[#162033]/24`:`text-white/40`,a=t?`footer-link !text-[#162033]/88 hover:!text-[#162033]`:`footer-link text-white/92`,o=t?`bg-white text-[#162033]`:`bg-black text-white`,s=t?`text-sm font-semibold tracking-[-0.01em] text-[#162033]`:`text-sm font-semibold tracking-[-0.01em] text-white`,c=t?`mt-3 text-xs leading-7 text-[#162033]/78`:`mt-3 text-xs leading-7 text-white/80`,l=t?`mt-4 border-t border-[#162033]/12 pt-4`:`mt-4 border-t border-white/18 pt-4`,u=t?`footer-link underline underline-offset-2 !text-[#162033]/78 hover:!text-[#162033]`:`footer-link underline underline-offset-2`,d=t?`mt-4 text-xs leading-7 text-[#162033]/56`:`mt-4 text-xs leading-7 text-white/60`;return(0,N.jsxs)(`footer`,{className:`mt-0`,children:[(0,N.jsx)(`div`,{className:n,children:(0,N.jsx)(`div`,{className:r,children:yr.map((e,t)=>(0,N.jsxs)(`div`,{className:`flex items-center gap-1.5 md:gap-4`,children:[t>0&&(0,N.jsx)(`span`,{className:i,children:`|`}),(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,className:a,children:e.label})]},e.label))})}),(0,N.jsx)(`div`,{className:o,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[980px] px-6 py-10 sm:px-8 lg:px-0`,children:[(0,N.jsx)(`h3`,{className:s,children:`사단법인 한국인공지능협회`}),(0,N.jsxs)(`div`,{className:c,children:[(0,N.jsxs)(`p`,{children:[`회장: 김현철 · 개인정보책임관리자: 나상원 · 사업자번호: 436-82-00239 ·`,` `,(0,N.jsx)(`a`,{href:`https://bizno.net/?area=&query=+436-82-00239`,target:`_blank`,rel:`noreferrer`,className:u,children:`사업자정보확인`})]}),(0,N.jsx)(`p`,{children:`서울특별시 마포구 백범로 88, 경총빌딩 3층`}),(0,N.jsx)(`p`,{children:`Tel. 02-713-4800 · Email. info@koraia.org · 주중 9시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)`})]}),(0,N.jsx)(`div`,{className:l,children:(0,N.jsx)(`p`,{className:d,children:`© BY KOREA ARTIFICIAL INTELLIGENCE ASSOCIATION, ALL RIGHTS RESERVED.`})})]})})]})}var xr=`/assets/logo-D6tMdGZX.png`,Sr=`/assets/logo-white-Cd_1NGvD.png`,Cr=[{id:`seoul`,label:`서울 4기`,to:`/seoul`,status:`모집 중`},{id:`cheonan`,label:`천안 1기`,to:`/cheonan`,status:`진행 중`},{id:`gwangju`,label:`광주 2기`,to:`/gwangju`,status:`모집 예정`}];function wr({variant:e=`dark`}){let[t,n]=(0,_.useState)(!1),r=e===`light`,i=r?`fixed top-0 left-0 right-0 z-50 bg-white/88 text-[#162033] shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-md`:`fixed top-0 left-0 right-0 z-50 bg-black/72 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md`,a=r?`mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-[#162033]`:`mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-white`,o=r?`flex items-center gap-1 text-sm font-medium text-[#162033]/68 transition-colors hover:text-[#162033]`:`flex items-center gap-1 text-sm font-medium text-white/72 transition-colors hover:text-white`,s=r?`border-t border-[#162033]/10 text-[#162033]`:`border-t border-white/10 text-white`,c=r?`mx-auto flex max-w-[1080px] divide-x divide-[#162033]/10 text-[#162033]`:`mx-auto flex max-w-[1080px] divide-x divide-white/10 text-white`,l=r?`flex-1 py-3 text-center text-sm font-medium text-[#162033]/64 transition-colors hover:bg-[#162033]/[0.04] hover:text-[#162033]`:`flex-1 py-3 text-center text-sm font-medium text-white/64 transition-colors hover:bg-white/6 hover:text-white`,u=r?`flex h-16 items-center justify-between px-5 text-[#162033]`:`flex h-16 items-center justify-between px-5 text-white`,d=r?`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#162033]/[0.03] text-[#162033]/82 transition-colors hover:bg-[#162033]/[0.07] hover:text-[#162033]`:`inline-flex h-10 w-10 items-center justify-center rounded-full text-white/78 transition-colors hover:bg-white/6 hover:text-white`,f=r?`absolute inset-y-0 right-0 w-full max-w-[320px] border-l border-[#162033]/10 bg-white/96 text-[#162033] shadow-[-16px_0_48px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out`:`absolute inset-y-0 right-0 w-full max-w-[320px] border-l border-white/10 bg-[#090909]/96 text-white shadow-[-16px_0_48px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out`,p=r?`absolute inset-0 bg-[#162033]/20 transition-opacity duration-300 ease-out`:`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out`,m=r?`flex items-center justify-between px-4 py-4 text-[#162033] transition-colors hover:text-[#162033]/72`:`flex items-center justify-between px-4 py-4 text-white transition-colors hover:text-white/72`,h=r?`mt-3 flex items-center justify-between px-4 py-4 text-[#162033] transition-colors hover:text-[#162033]/72`:`mt-3 flex items-center justify-between px-4 py-4 text-white transition-colors hover:text-white/72`;return(0,N.jsxs)(`header`,{className:i,children:[(0,N.jsxs)(`div`,{className:`relative md:hidden`,children:[(0,N.jsxs)(`div`,{className:u,children:[(0,N.jsx)(Dn,{to:`/`,children:(0,N.jsx)(`img`,{src:r?xr:Sr,alt:`CAIO`,className:`h-7 w-auto`})}),(0,N.jsx)(`button`,{type:`button`,className:d,"aria-label":t?`메뉴 닫기`:`메뉴 열기`,"aria-expanded":t,onClick:()=>n(e=>!e),children:t?(0,N.jsx)(or,{size:18}):(0,N.jsx)(lr,{size:18})})]}),(0,N.jsxs)(`div`,{className:`absolute left-0 top-full z-40 h-[calc(100svh-4rem)] w-full overflow-hidden transition-[visibility] duration-300 ${t?`visible`:`invisible`}`,"aria-hidden":!t,children:[(0,N.jsx)(`button`,{type:`button`,className:`${p} ${t?`opacity-100`:`opacity-0`}`,"aria-label":`메뉴 닫기`,tabIndex:t?0:-1,onClick:()=>n(!1)}),(0,N.jsx)(`div`,{className:`${f} ${t?`translate-x-0`:`translate-x-full`}`,children:(0,N.jsxs)(`div`,{className:`px-5 pb-5 pt-4`,children:[(0,N.jsx)(`nav`,{className:`space-y-3`,children:Cr.map(e=>(0,N.jsxs)(Dn,{to:e.to,className:m,onClick:()=>n(!1),children:[(0,N.jsx)(`span`,{className:`text-sm font-semibold`,children:e.label}),(0,N.jsx)(`span`,{className:`px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400`,children:e.status})]},e.id))}),(0,N.jsxs)(`a`,{href:`https://caiom.koraia.org/`,target:`_blank`,rel:`noreferrer`,className:h,children:[(0,N.jsx)(`span`,{className:`text-sm font-semibold`,children:`원우회 수첩 바로가기`}),(0,N.jsx)(dr,{})]})]})})]})]}),(0,N.jsxs)(`div`,{className:`hidden md:block`,children:[(0,N.jsxs)(`div`,{className:a,children:[(0,N.jsx)(Dn,{to:`/`,children:(0,N.jsx)(`img`,{src:r?xr:Sr,alt:`CAIO`,className:`h-7 w-auto`})}),(0,N.jsxs)(`a`,{href:`https://caiom.koraia.org/`,target:`_blank`,rel:`noreferrer`,className:o,children:[`원우회 수첩 바로가기`,(0,N.jsx)(dr,{})]})]}),(0,N.jsx)(`div`,{className:s,children:(0,N.jsx)(`div`,{className:c,children:Cr.map(e=>(0,N.jsxs)(Dn,{to:e.to,className:`${l} inline-flex items-center justify-center gap-2`,children:[(0,N.jsx)(`span`,{children:e.label}),(0,N.jsx)(`span`,{className:`rounded-full bg-transparent px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400`,children:e.status})]},e.label))})})]})]})}var Tr=`/assets/logo-cheonan-BujrKGT0.jpg`,Er=`/assets/logo-chungnam-CoR2zETl.png`,Dr=`/assets/logo-ctp-CC4PT53R.png`,Or=`/assets/logo-jnu-Bsi8jyg5.png`,kr=`/assets/logo-kicox.-hX0ftFGV.png`,Ar=`/assets/logo-koraia-QkGfcQOk.png`,jr=`/assets/logo-pwc-Z0Mzi1sE.png`,Mr=`*,\r
    *::before,\r
    *::after {\r
      box-sizing: border-box;\r
      margin: 0;\r
      padding: 0\r
    }\r
\r
    html {\r
      scroll-behavior: smooth\r
    }\r
\r
    body {\r
      font-family: 'Pretendard Variable', 'Noto Sans KR', sans-serif;\r
      background: #fff;\r
      color: #111;\r
      overflow-x: hidden;\r
      -webkit-font-smoothing: antialiased;\r
    }\r
\r
    :root {\r
      --navy-deep: #10006a;\r
      /* rgb(16,0,105) - instructor section */\r
      --navy-dark: #00113e;\r
      /* rgb(0,17,62) - photo strip */\r
      --blue-main: #3941ff;\r
      /* rgb(57,65,255) */\r
      --blue-light: rgb(175, 193, 255);\r
      --purple: #7c3aed;\r
      --gray-bg: #f5f6fa;\r
      --border: #e7e7e8;\r
      --W: 980px;\r
      --PX: clamp(20px, 5vw, 470px);\r
    }\r
\r
    /* ── NAV ── */\r
    nav {\r
      position: fixed;\r
      top: 0;\r
      left: 0;\r
      right: 0;\r
      z-index: 200;\r
      height: 68px;\r
      background: rgba(255, 255, 255, 0.97);\r
      border-bottom: 1px solid var(--border);\r
      backdrop-filter: blur(8px);\r
      display: flex;\r
      align-items: center;\r
      padding: 0 clamp(20px, 4vw, 470px);\r
      justify-content: space-between;\r
      transition: box-shadow .3s;\r
    }\r
\r
    nav.scrolled {\r
      box-shadow: 0 2px 16px rgba(0, 0, 0, .08)\r
    }\r
\r
    .nav-logo img {\r
      height: 28px\r
    }\r
\r
    .nav-links {\r
      display: flex;\r
      gap: 28px\r
    }\r
\r
    .nav-links a {\r
      font-size: 14px;\r
      font-weight: 600;\r
      color: #3b3b3b;\r
      text-decoration: none;\r
      letter-spacing: -.01em;\r
      transition: color .2s\r
    }\r
\r
    .nav-links a:hover {\r
      color: var(--blue-main)\r
    }\r
\r
    .nav-cta {\r
      background: #000;\r
      color: #fff;\r
      border: none;\r
      padding: 10px 24px;\r
      border-radius: 8px;\r
      font-size: 14px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      font-family: inherit;\r
      transition: background .2s;\r
    }\r
\r
    .nav-cta:hover {\r
      background: #222\r
    }\r
\r
    /* ── CONTAINER ── */\r
    .fluid {\r
      width: 100%;\r
      position: relative\r
    }\r
\r
    .wrap {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      padding: 0 20px;\r
    }\r
\r
    /* ── HERO ── */\r
    .hero {\r
      padding-top: 68px;\r
      background: #fff;\r
      text-align: center;\r
    }\r
\r
    .hero-inner {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      padding: 120px 20px;\r
    }\r
\r
    .hero-opened {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #525252;\r
      letter-spacing: 0;\r
      margin-bottom: 48px;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
    }\r
\r
    .hero-title {\r
      font-size: clamp(48px, 5vw, 70px);\r
      font-weight: 700;\r
      line-height: 1.2;\r
      margin-bottom: 20px;\r
    }\r
\r
    .hero-title .line1 {\r
      color: #000\r
    }\r
\r
    .hero-title .line2 {\r
      color: var(--purple)\r
    }\r
\r
    .hero-subtitle {\r
      font-size: clamp(18px, 2vw, 28px);\r
      font-weight: 400;\r
      color: #000;\r
      letter-spacing: -.2px;\r
      margin-bottom: 60px;\r
    }\r
\r
    .hero-cta-wrap {\r
      margin-bottom: 72px\r
    }\r
\r
    .hero-apply-btn {\r
      background: #000;\r
      color: #fff;\r
      border: none;\r
      padding: 18px 38px;\r
      border-radius: 10px;\r
      font-size: 20px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      font-family: inherit;\r
      transition: background .2s;\r
      display: inline-block;\r
    }\r
\r
    .hero-apply-btn:hover {\r
      background: #222\r
    }\r
\r
    /* INFO TABLE */\r
    .info-table {\r
      width: 100%;\r
      border-top: 1px solid var(--border);\r
      border-left: 1px solid var(--border);\r
    }\r
\r
    .info-row {\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      border-bottom: 1px solid var(--border)\r
    }\r
\r
    .info-cell {\r
      display: flex;\r
      align-items: center;\r
      gap: 16px;\r
      padding: 20px 24px;\r
      border-right: 1px solid var(--border);\r
      text-align: left;\r
    }\r
\r
    .info-label {\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      min-width: 64px;\r
      letter-spacing: -.01em;\r
    }\r
\r
    .info-value {\r
      font-size: 15px;\r
      font-weight: 600;\r
      color: #111;\r
      letter-spacing: -.02em\r
    }\r
\r
    /* ── PHOTO STRIP ── */\r
    .strip-section {\r
      background: var(--navy-dark);\r
      padding: 50px 0;\r
      overflow: hidden;\r
      position: relative;\r
    }\r
\r
    .strip-track {\r
      display: flex;\r
      gap: 20px;\r
      width: max-content;\r
      animation: scroll-left 55s linear infinite;\r
    }\r
\r
    @keyframes scroll-left {\r
      0% {\r
        transform: translateX(0)\r
      }\r
\r
      100% {\r
        transform: translateX(-50%)\r
      }\r
    }\r
\r
    @keyframes scroll-right {\r
      0% {\r
        transform: translateX(-50%)\r
      }\r
\r
      100% {\r
        transform: translateX(0)\r
      }\r
    }\r
\r
    .strip-img {\r
      width: 420px;\r
      height: 280px;\r
      border-radius: 12px;\r
      overflow: hidden;\r
      flex-shrink: 0;\r
    }\r
\r
    .strip-img img {\r
      width: 100%;\r
      height: 100%;\r
      object-fit: cover;\r
      opacity: .7\r
    }\r
\r
    .strip-overlay {\r
      position: absolute;\r
      inset: 0;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      pointer-events: none;\r
    }\r
\r
    .strip-overlay span {\r
      font-size: clamp(32px, 4vw, 64px);\r
      font-weight: 700;\r
      color: #fff;\r
      text-align: center;\r
      text-shadow: 0 2px 20px rgba(0, 0, 0, .5);\r
      letter-spacing: -.03em;\r
      line-height: 1.2;\r
    }\r
\r
    /* ── QUOTE GRADIENT ── */\r
    .quote-section {\r
      background: linear-gradient(180deg, #00113e 0%, #3941ff 100%);\r
      padding: 119px var(--PX);\r
      text-align: center;\r
    }\r
\r
    .quote-section p {\r
      font-size: clamp(18px, 2.3vw, 30px);\r
      font-weight: 700;\r
      color: #fff;\r
      line-height: 1.5;\r
      letter-spacing: -.02em;\r
      max-width: var(--W);\r
      margin: 0 auto;\r
    }\r
\r
    /* ── REASON ── */\r
    .reason-section {\r
      background: #fff;\r
      padding: 100px var(--PX)\r
    }\r
\r
    .reason-top {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 40px;\r
      align-items: end;\r
      margin-bottom: 60px;\r
    }\r
\r
    .reason-label {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #4d6bff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 16px;\r
    }\r
\r
    .reason-h2 {\r
      font-size: clamp(32px, 3vw, 45px);\r
      font-weight: 700;\r
      line-height: 1.2;\r
      letter-spacing: -.2px;\r
      color: #000;\r
      word-break: keep-all;\r
    }\r
\r
    .reason-desc {\r
      font-size: 22px;\r
      line-height: 1.5;\r
      letter-spacing: -.15px;\r
      color: #000;\r
      word-break: keep-all;\r
      align-self: center;\r
      padding-left: 20px;\r
    }\r
\r
    .stats-row {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      border-top: 1px solid var(--border);\r
      border-left: 1px solid var(--border);\r
    }\r
\r
    .stat-cell {\r
      padding: 36px 28px;\r
      border-right: 1px solid var(--border);\r
      border-bottom: 1px solid var(--border);\r
    }\r
\r
    .stat-cell-num {\r
      font-size: clamp(40px, 4vw, 56px);\r
      font-weight: 700;\r
      color: #4d6bff;\r
      line-height: 1;\r
      margin-bottom: 10px;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
    }\r
\r
    .stat-cell-label {\r
      font-size: 14px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      letter-spacing: -.01em;\r
      margin-bottom: 4px;\r
    }\r
\r
    .stat-cell-sub {\r
      font-size: 18px;\r
      font-weight: 500;\r
      color: #000;\r
      letter-spacing: -.02em\r
    }\r
\r
    /* ── SPECIAL POINT ── */\r
    .special-section {\r
      position: relative;\r
      background: linear-gradient(180deg, #3941ff 0%, rgb(175, 193, 255) 100%);\r
      padding: 100px var(--PX);\r
      text-align: center;\r
      overflow: hidden;\r
    }\r
\r
    .special-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('배경사진') center/cover no-repeat;\r
      opacity: .25;\r
      mix-blend-mode: overlay;\r
    }\r
\r
    .special-section .special-pill,\r
    .special-section .special-h2 {\r
      position: relative;\r
      z-index: 1\r
    }\r
\r
    .special-pill {\r
      display: inline-block;\r
      background: #fff;\r
      border-radius: 60px;\r
      padding: 11px 20px;\r
      font-size: 18px;\r
      font-weight: 700;\r
      color: #3941ff;\r
      margin-bottom: 20px;\r
    }\r
\r
    .special-h2 {\r
      font-size: clamp(24px, 2.5vw, 32px);\r
      font-weight: 700;\r
      color: #fff;\r
      letter-spacing: -.15px;\r
      text-shadow: 0 2px 20px rgba(0, 0, 0, .25);\r
    }\r
\r
    /* ── CERT + REVIEWS ── */\r
    .cert-section {\r
      position: relative;\r
      background: var(--navy-deep);\r
      padding: 120px var(--PX);\r
      overflow: hidden;\r
    }\r
\r
    .cert-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('배경사진') center/cover no-repeat;\r
      opacity: .2;\r
    }\r
\r
    .cert-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(180deg, rgba(16, 0, 106, .92) 0%, rgba(0, 17, 62, .96) 100%);\r
    }\r
\r
    .cert-section>.cert-inner,\r
    .cert-section>.reviews-label,\r
    .cert-section>.reviews-track-wrap {\r
      position: relative;\r
      z-index: 1\r
    }\r
\r
    .cert-inner {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 60px;\r
      align-items: center;\r
    }\r
\r
    .cert-eyebrow {\r
      font-size: 12px;\r
      font-weight: 700;\r
      color: rgba(175, 193, 255, .7);\r
      letter-spacing: .14em;\r
      margin-bottom: 14px;\r
    }\r
\r
    .cert-card {\r
      background: #fff;\r
      border-radius: 20px;\r
      padding: 32px 32px 36px;\r
      box-shadow: 0 24px 60px rgba(0, 0, 0, .4);\r
      display: flex;\r
      flex-direction: column;\r
      align-items: stretch;\r
      gap: 22px;\r
      border: 1px solid rgba(255, 255, 255, .05);\r
    }\r
\r
    .cert-photo {\r
      position: relative;\r
      width: 100%;\r
      height: 550px;\r
      /* aspect-ratio:4/3; */\r
      border-radius: 12px;\r
      overflow: hidden;\r
      background: linear-gradient(135deg, #3941ff 0%, #7c3aed 100%);\r
      box-shadow: 0 12px 32px rgba(57, 65, 255, .25);\r
    }\r
\r
    .cert-photo-img {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center;\r
    }\r
\r
    .cert-photo-emoji {\r
      position: absolute;\r
      inset: 0;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 64px;\r
      opacity: .65;\r
      pointer-events: none;\r
    }\r
\r
    .cert-card-body {\r
      display: flex;\r
      flex-direction: column;\r
      align-items: center;\r
      text-align: center;\r
      gap: 12px;\r
      padding: 0 8px;\r
    }\r
\r
    .cert-card h3 {\r
      font-size: 22px;\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.02em\r
    }\r
\r
    .cert-card p {\r
      font-size: 14px;\r
      color: #6b7280;\r
      line-height: 1.7;\r
      word-break: keep-all;\r
      max-width: 320px\r
    }\r
\r
    .cert-text h4 {\r
      font-size: 18px;\r
      font-weight: 700;\r
      color: rgba(175, 193, 255, .9);\r
      margin-bottom: 16px;\r
      letter-spacing: -.02em;\r
    }\r
\r
    .cert-text p {\r
      font-size: 16px;\r
      color: rgba(255, 255, 255, .75);\r
      line-height: 1.75;\r
      word-break: keep-all;\r
    }\r
\r
    .reviews-label {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      font-size: 24px;\r
      font-weight: 700;\r
      color: #fff;\r
      letter-spacing: -.15px;\r
      margin-top: 80px;\r
      margin-bottom: 24px;\r
    }\r
\r
    .reviews-track-wrap {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      position: relative;\r
    }\r
\r
    .reviews-track {\r
      display: flex;\r
      gap: 20px;\r
      justify-content: space-between;\r
      align-items: stretch;\r
      padding: 48px 4px 12px;\r
    }\r
\r
    .reviews-track::-webkit-scrollbar {\r
      display: none\r
    }\r
\r
    .review-card {\r
      width: calc(50% - 10px);\r
      background: #fff;\r
      border-radius: 16px;\r
      padding: 52px 28px 28px;\r
      box-shadow: 0 12px 32px rgba(0, 0, 0, .08);\r
      position: relative;\r
      overflow: visible;\r
    }\r
\r
    .review-avatar {\r
      position: absolute;\r
      top: -38px;\r
      left: 28px;\r
      width: 76px;\r
      height: 76px;\r
      border-radius: 50%;\r
      background: #e8edf5 center/cover no-repeat;\r
      border: 4px solid #fff;\r
      box-shadow: 0 10px 24px rgba(0, 17, 62, .25);\r
      overflow: hidden;\r
    }\r
\r
    .review-avatar::after {\r
      content: '';\r
      position: absolute;\r
      inset: 0;\r
      border-radius: 50%;\r
      box-shadow: inset 0 0 0 1px rgba(0, 17, 62, .06);\r
    }\r
\r
    .review-stars {\r
      color: #f59e0b;\r
      font-size: 14px;\r
      margin-bottom: 14px\r
    }\r
\r
    .review-text {\r
      font-size: 14px;\r
      color: #3b3b3b;\r
      line-height: 1.8;\r
      word-break: keep-all;\r
      margin-bottom: 20px;\r
    }\r
\r
    .review-author {\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #9ca3af\r
    }\r
\r
    /* ── INSTRUCTOR / CURRICULUM (deep navy) ── */\r
    .dark-section {\r
      background: var(--navy-deep);\r
      padding: 120px var(--PX) 60px\r
    }\r
\r
    .dark-section .sec-label {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #fff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 80px;\r
    }\r
\r
    .dark-split {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 40px;\r
      margin-bottom: 40px;\r
    }\r
\r
    .dark-h2 {\r
      font-size: clamp(32px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #fff;\r
      line-height: 1.2;\r
      letter-spacing: -.2px;\r
      word-break: keep-all;\r
    }\r
\r
    .dark-desc {\r
      font-size: 22px;\r
      line-height: 1.5;\r
      color: #fff;\r
      letter-spacing: -.15px;\r
      word-break: keep-all;\r
      align-self: center;\r
      padding-left: 20px;\r
    }\r
\r
    .dark-divider {\r
      max-width: var(--W);\r
      margin: 0 auto 40px;\r
      height: 1px;\r
      background: rgba(136, 128, 180, .5);\r
    }\r
\r
    .instructor-grid {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      gap: 20px;\r
      padding-bottom: 80px;\r
    }\r
\r
    .instructor-card {\r
      position: relative;\r
      border-radius: 16px;\r
      overflow: hidden;\r
      aspect-ratio: 4/5;\r
      background: transparent;\r
      border: none;\r
      transition: transform .3s ease, box-shadow .3s ease;\r
      cursor: default;\r
    }\r
\r
    .instructor-card:hover {\r
      transform: translateY(-4px);\r
      box-shadow: 0 20px 50px rgba(0, 0, 0, .4);\r
    }\r
\r
    .instructor-card-bg {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center top;\r
      transition: transform .6s ease;\r
    }\r
\r
    .instructor-card:hover .instructor-card-bg {\r
      transform: scale(1.05)\r
    }\r
\r
    .instructor-card-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(to top, rgba(0, 17, 62, .95) 0%, rgba(0, 17, 62, .3) 55%, rgba(0, 17, 62, 0) 100%);\r
    }\r
\r
    .instructor-info {\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      z-index: 1;\r
      padding: 24px 22px;\r
    }\r
\r
    .instructor-name {\r
      font-size: 18px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 6px;\r
      letter-spacing: -.02em\r
    }\r
\r
    .instructor-role {\r
      font-size: 12px;\r
      color: rgba(255, 255, 255, .72);\r
      line-height: 1.55;\r
      word-break: keep-all\r
    }\r
\r
    /* CURRICULUM TABLE */\r
    .cur-table {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      border-top: 1px solid rgba(136, 128, 180, .4);\r
      padding-bottom: 80px;\r
    }\r
\r
    .cur-row {\r
      display: grid;\r
      grid-template-columns: 100px 1fr;\r
      border-bottom: 1px solid rgba(136, 128, 180, .2);\r
      padding: 28px 0;\r
      gap: 24px;\r
      align-items: start;\r
    }\r
\r
    .cur-week {\r
      font-size: 14px;\r
      font-weight: 700;\r
      color: rgba(255, 255, 255, .4);\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      letter-spacing: .05em;\r
      padding-top: 2px;\r
    }\r
\r
    .cur-content h4 {\r
      font-size: 18px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 6px;\r
      letter-spacing: -.02em;\r
    }\r
\r
    .cur-content p {\r
      font-size: 14px;\r
      color: rgba(255, 255, 255, .55);\r
      line-height: 1.7;\r
      word-break: keep-all;\r
    }\r
\r
    /* ── PERKS ── */\r
    .perks-section {\r
      position: relative;\r
      padding: 120px var(--PX);\r
      background: #000;\r
    }\r
\r
    .perks-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('assets/gallery1.png') center/cover no-repeat;\r
      opacity: .35;\r
    }\r
\r
    .perks-inner {\r
      position: relative;\r
      z-index: 1;\r
      max-width: var(--W);\r
      margin: 0 auto;\r
    }\r
\r
    .perks-label {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #fff;\r
      margin-bottom: 60px;\r
      letter-spacing: -.15px;\r
    }\r
\r
    .perks-grid {\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      gap: 16px;\r
      margin-top: 60px;\r
    }\r
\r
    .perk-card {\r
      position: relative;\r
      background: rgba(255, 255, 255, .06);\r
      backdrop-filter: blur(20px);\r
      -webkit-backdrop-filter: blur(20px);\r
      border: 1px solid rgba(255, 255, 255, .14);\r
      border-radius: 16px;\r
      padding: 36px 30px 30px;\r
      min-height: 260px;\r
      display: flex;\r
      flex-direction: column;\r
      transition: background .3s ease, border-color .3s ease, transform .3s ease;\r
      cursor: default;\r
      overflow: hidden;\r
    }\r
\r
    .perk-card::before {\r
      content: '';\r
      position: absolute;\r
      top: 0;\r
      left: 0;\r
      right: 0;\r
      height: 2px;\r
      background: linear-gradient(90deg, #3941ff, #7c3aed);\r
      opacity: 0;\r
      transition: opacity .3s;\r
    }\r
\r
    .perk-card:hover {\r
      background: rgba(255, 255, 255, .1);\r
      border-color: rgba(255, 255, 255, .28);\r
      transform: translateY(-4px);\r
    }\r
\r
    .perk-card:hover::before {\r
      opacity: 1\r
    }\r
\r
    .perk-num {\r
      display: inline-flex;\r
      width: 44px;\r
      height: 44px;\r
      border-radius: 10px;\r
      background: rgba(255, 255, 255, .14);\r
      backdrop-filter: blur(10px);\r
      -webkit-backdrop-filter: blur(10px);\r
      border: 1px solid rgba(255, 255, 255, .22);\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #fff;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      letter-spacing: .02em;\r
      margin-bottom: 28px;\r
    }\r
\r
    .perk-name {\r
      font-size: clamp(17px, 1.5vw, 20px);\r
      font-weight: 700;\r
      color: #fff;\r
      letter-spacing: -.02em;\r
      margin-bottom: 10px;\r
      word-break: keep-all;\r
      line-height: 1.35;\r
    }\r
\r
    .perk-desc {\r
      font-size: 14px;\r
      color: rgba(255, 255, 255, .65);\r
      line-height: 1.65;\r
      word-break: keep-all;\r
      margin-bottom: auto;\r
      font-weight: 400;\r
    }\r
\r
    .perk-arrow {\r
      color: rgba(255, 255, 255, .4);\r
      font-size: 18px;\r
      margin-top: 24px;\r
      align-self: flex-end;\r
      transition: transform .25s, color .25s;\r
      padding-left: 0;\r
    }\r
\r
    .perk-card:hover .perk-arrow {\r
      color: #fff;\r
      transform: translateX(4px)\r
    }\r
\r
    /* ── VISION FULLBLEED ── */\r
    .vision-section {\r
      position: relative;\r
      min-height: 600px;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      overflow: hidden;\r
    }\r
\r
    .vision-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('assets/gallery1.png') center/cover no-repeat;\r
    }\r
\r
    .vision-blur {\r
      position: absolute;\r
      inset: 0;\r
      background: rgba(8, 20, 46, 0.72);\r
      /* backdrop-filter:blur(5px); */\r
      background-image: url('img/intro_cover.png');\r
      background-size: contain;\r
      background-blend-mode: darken;\r
    }\r
\r
    .vision-content {\r
      position: relative;\r
      z-index: 1;\r
      text-align: center;\r
      max-width: 860px;\r
      padding: 80px 40px;\r
    }\r
\r
    .vision-tag {\r
      display: inline-block;\r
      background: rgba(57, 65, 255, 0.3);\r
      border: 1px solid rgba(57, 65, 255, 0.5);\r
      color: rgba(175, 193, 255, 1);\r
      font-size: 11px;\r
      font-weight: 700;\r
      letter-spacing: .14em;\r
      padding: 6px 16px;\r
      border-radius: 100px;\r
      margin-bottom: 28px;\r
    }\r
\r
    .vision-h1 {\r
      font-size: clamp(36px, 5vw, 72px);\r
      font-weight: 900;\r
      color: #fff;\r
      line-height: 1.1;\r
      letter-spacing: -.03em;\r
      margin-bottom: 20px;\r
      word-break: keep-all;\r
    }\r
\r
    .vision-h1 em {\r
      background: linear-gradient(90deg, #60a5fa, #a78bfa);\r
      -webkit-background-clip: text;\r
      -webkit-text-fill-color: transparent;\r
      font-style: normal;\r
    }\r
\r
    .vision-sub {\r
      font-size: 18px;\r
      color: rgba(255, 255, 255, .55);\r
      line-height: 1.8;\r
      font-weight: 400;\r
      word-break: keep-all;\r
    }\r
\r
    /* ── PARTNER MARQUEE ── */\r
    .partner-section {\r
      background: #fff;\r
      padding: 48px 0;\r
      border-top: 1px solid var(--border);\r
      border-bottom: 1px solid var(--border);\r
      overflow: hidden;\r
    }\r
\r
    .marquee-track {\r
      display: flex;\r
      gap: 60px;\r
      width: max-content;\r
      align-items: center;\r
      animation: scroll-left 68s linear infinite;\r
    }\r
\r
    .partner-item {\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      min-width: 180px;\r
      height: 72px;\r
      padding: 12px 24px;\r
    }\r
\r
    .partner-logo {\r
      max-width: 132px;\r
      max-height: 34px;\r
      width: auto;\r
      height: auto;\r
      object-fit: contain;\r
      filter: saturate(.96) contrast(1.02);\r
    }\r
\r
    /* ── QUOTE ── */\r
    .quote-hero-section {\r
      position: relative;\r
      padding: 120px var(--PX);\r
      overflow: hidden;\r
    }\r
\r
    .quote-hero-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('assets/poster1.png') center/cover no-repeat;\r
      opacity: .15;\r
    }\r
\r
    .quote-hero-inner {\r
      position: relative;\r
      z-index: 1;\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: auto 1fr;\r
      gap: 40px;\r
      align-items: start;\r
    }\r
\r
    .quote-mark {\r
      font-size: 120px;\r
      line-height: .8;\r
      color: var(--blue-main);\r
      opacity: .2;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      font-weight: 900;\r
      flex-shrink: 0;\r
    }\r
\r
    .quote-body {}\r
\r
    .quote-text {\r
      font-size: clamp(22px, 2.5vw, 36px);\r
      font-weight: 700;\r
      color: #000;\r
      line-height: 1.4;\r
      letter-spacing: -.03em;\r
      margin-bottom: 28px;\r
      word-break: keep-all;\r
    }\r
\r
    .quote-author {\r
      display: flex;\r
      align-items: center;\r
      gap: 16px;\r
    }\r
\r
    .quote-avatar {\r
      width: 48px;\r
      height: 48px;\r
      border-radius: 50%;\r
      background: linear-gradient(135deg, #3941ff, #7c3aed);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 18px;\r
    }\r
\r
    .quote-who {\r
      font-size: 15px;\r
      font-weight: 700;\r
      color: #111\r
    }\r
\r
    .quote-role {\r
      font-size: 13px;\r
      color: #6b7280;\r
      margin-top: 2px\r
    }\r
\r
    /* ── CITY PHOTO CARDS ── */\r
    .city-cards-section {\r
      background: var(--navy-deep);\r
      padding: 100px var(--PX)\r
    }\r
\r
    .city-cards-section .sec-label-w {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: rgba(175, 193, 255, .7);\r
      margin-bottom: 12px;\r
    }\r
\r
    .city-cards-section h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #fff;\r
      letter-spacing: -.2px;\r
      margin-bottom: 48px;\r
      word-break: keep-all;\r
    }\r
\r
    .city-cards-grid {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      gap: 20px;\r
    }\r
\r
    .city-photo-card {\r
      border-radius: 20px;\r
      overflow: hidden;\r
      position: relative;\r
      cursor: pointer;\r
      aspect-ratio: 3/4;\r
    }\r
\r
    .city-photo-card-bg {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center;\r
      transition: transform .5s ease;\r
    }\r
\r
    .city-photo-card:hover .city-photo-card-bg {\r
      transform: scale(1.05)\r
    }\r
\r
    .city-photo-card-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(to top, rgba(8, 20, 46, .9) 0%, rgba(8, 20, 46, .2) 50%, transparent 100%);\r
    }\r
\r
    .city-photo-card-content {\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      padding: 28px 24px;\r
    }\r
\r
    .city-photo-card-tag {\r
      font-size: 11px;\r
      font-weight: 700;\r
      letter-spacing: .1em;\r
      color: rgba(255, 255, 255, .5);\r
      margin-bottom: 8px;\r
    }\r
\r
    .city-photo-card-name {\r
      font-size: 22px;\r
      font-weight: 900;\r
      color: #fff;\r
      margin-bottom: 4px;\r
      letter-spacing: -.02em;\r
    }\r
\r
    .city-photo-card-sub {\r
      font-size: 13px;\r
      color: rgba(255, 255, 255, .55)\r
    }\r
\r
    .city-photo-card-arrow {\r
      position: absolute;\r
      top: 20px;\r
      right: 20px;\r
      width: 36px;\r
      height: 36px;\r
      border-radius: 50%;\r
      background: rgba(255, 255, 255, .12);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      color: #fff;\r
      font-size: 14px;\r
      transition: background .2s, transform .2s;\r
    }\r
\r
    .city-photo-card:hover .city-photo-card-arrow {\r
      background: rgba(255, 255, 255, .25);\r
      transform: rotate(45deg)\r
    }\r
\r
    /* ── IMPACT CTA BANNER ── */\r
    .impact-cta {\r
      position: relative;\r
      overflow: hidden;\r
      padding: 100px var(--PX);\r
      background: var(--navy-dark);\r
    }\r
\r
    .impact-cta-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('assets/gallery2.png') center/cover no-repeat;\r
      opacity: .2;\r
    }\r
\r
    .impact-cta-glow {\r
      position: absolute;\r
      inset: 0;\r
      background: radial-gradient(ellipse 60% 80% at 30% 50%, rgba(57, 65, 255, .35), transparent);\r
    }\r
\r
    .impact-cta-inner {\r
      position: relative;\r
      z-index: 1;\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: 1fr auto;\r
      gap: 60px;\r
      align-items: center;\r
    }\r
\r
    .impact-cta-text {}\r
\r
    .impact-cta-eyebrow {\r
      font-size: 12px;\r
      font-weight: 700;\r
      letter-spacing: .12em;\r
      color: rgba(175, 193, 255, .7);\r
      margin-bottom: 16px;\r
    }\r
\r
    .impact-cta-h2 {\r
      font-size: clamp(28px, 3.5vw, 52px);\r
      font-weight: 900;\r
      color: #fff;\r
      line-height: 1.15;\r
      letter-spacing: -.03em;\r
      margin-bottom: 16px;\r
      word-break: keep-all;\r
    }\r
\r
    .impact-cta-sub {\r
      font-size: 16px;\r
      color: rgba(255, 255, 255, .45);\r
      line-height: 1.7\r
    }\r
\r
    .impact-cta-btns {\r
      display: flex;\r
      flex-direction: column;\r
      gap: 12px;\r
      align-items: stretch;\r
    }\r
\r
    .impact-btn-primary {\r
      background: var(--blue-main);\r
      color: #fff;\r
      border: none;\r
      padding: 17px 36px;\r
      border-radius: 10px;\r
      font-size: 16px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      font-family: inherit;\r
      white-space: nowrap;\r
      text-decoration: none;\r
      transition: background .2s;\r
    }\r
\r
    .impact-btn-primary:hover {\r
      background: rgb(46, 53, 255)\r
    }\r
\r
    .impact-btn-outline {\r
      background: transparent;\r
      color: rgba(255, 255, 255, .7);\r
      border: 1px solid rgba(255, 255, 255, .2);\r
      padding: 15px 36px;\r
      border-radius: 10px;\r
      font-size: 15px;\r
      font-weight: 600;\r
      cursor: pointer;\r
      font-family: inherit;\r
      white-space: nowrap;\r
      text-decoration: none;\r
      transition: all .2s;\r
    }\r
\r
    .impact-btn-outline:hover {\r
      border-color: rgba(255, 255, 255, .5);\r
      color: #fff\r
    }\r
\r
    /* ── MARQUEE ANNOUNCE ── */\r
    .announce-bar {\r
      background: var(--purple);\r
      padding: 14px 0;\r
      overflow: hidden;\r
    }\r
\r
    .announce-track {\r
      display: flex;\r
      gap: 0;\r
      width: max-content;\r
      animation: scroll-left 18s linear infinite;\r
    }\r
\r
    .announce-item {\r
      font-size: 14px;\r
      font-weight: 700;\r
      color: #fff;\r
      white-space: nowrap;\r
      padding: 0 40px;\r
      letter-spacing: -.01em;\r
    }\r
\r
    .announce-sep {\r
      color: rgba(255, 255, 255, .4);\r
      margin: 0 4px\r
    }\r
\r
    /* ── NUMBER HIGHLIGHT ── */\r
    .numbers-section {\r
      background: var(--gray-bg);\r
      padding: 80px var(--PX)\r
    }\r
\r
    .numbers-grid {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(4, 1fr);\r
      gap: 20px;\r
    }\r
\r
    .number-card {\r
      background: #fff;\r
      border-radius: 16px;\r
      padding: 32px 24px;\r
      border: 1px solid var(--border);\r
      position: relative;\r
      overflow: hidden;\r
      transition: transform .2s, box-shadow .2s;\r
    }\r
\r
    .number-card:hover {\r
      transform: translateY(-3px);\r
      box-shadow: 0 12px 40px rgba(20, 71, 212, .1)\r
    }\r
\r
    .number-card::before {\r
      content: '';\r
      position: absolute;\r
      top: 0;\r
      left: 0;\r
      right: 0;\r
      height: 3px;\r
    }\r
\r
    .number-card:nth-child(1)::before {\r
      background: linear-gradient(90deg, #1447d4, #60a5fa)\r
    }\r
\r
    .number-card:nth-child(2)::before {\r
      background: linear-gradient(90deg, #3941ff, #a78bfa)\r
    }\r
\r
    .number-card:nth-child(3)::before {\r
      background: linear-gradient(90deg, #0891b2, #22d3ee)\r
    }\r
\r
    .number-card:nth-child(4)::before {\r
      background: linear-gradient(90deg, #7c3aed, #f472b6)\r
    }\r
\r
    .number-card-n {\r
      font-size: clamp(36px, 4vw, 52px);\r
      font-weight: 900;\r
      color: var(--text-main);\r
      line-height: 1;\r
      margin-bottom: 8px;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
    }\r
\r
    .number-card-n span {\r
      font-size: .6em;\r
      font-weight: 700;\r
      color: var(--blue-main)\r
    }\r
\r
    .number-card-label {\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      margin-bottom: 4px;\r
      letter-spacing: .03em\r
    }\r
\r
    .number-card-sub {\r
      font-size: 15px;\r
      font-weight: 600;\r
      color: var(--text-main);\r
      word-break: keep-all;\r
      line-height: 1.4\r
    }\r
\r
    @media(max-width:768px) {\r
      .city-cards-grid {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .numbers-grid {\r
        grid-template-columns: 1fr 1fr\r
      }\r
\r
      .impact-cta-inner {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .quote-hero-inner {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .quote-mark {\r
        display: none\r
      }\r
    }\r
\r
    /* ── FOOTER ── */\r
    footer {\r
      background: rgb(46, 46, 46)\r
    }\r
\r
    .footer-top {\r
      background: rgb(94, 94, 94);\r
      padding: 0 var(--PX);\r
      height: 44px;\r
      display: flex;\r
      align-items: center;\r
    }\r
\r
    .footer-top-links {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      width: 100%;\r
      display: flex;\r
      gap: 0;\r
    }\r
\r
    .footer-top-links a {\r
      font-size: 12px;\r
      font-weight: 700;\r
      color: #fff;\r
      text-decoration: none;\r
      padding-right: 24px;\r
      border-right: 1px solid rgb(145, 145, 145);\r
      margin-right: 24px;\r
    }\r
\r
    .footer-top-links a:last-child {\r
      border-right: none\r
    }\r
\r
    .footer-bottom {\r
      padding: 24px var(--PX)\r
    }\r
\r
    .footer-content {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: flex;\r
      flex-direction: column;\r
      gap: 8px;\r
    }\r
\r
    .footer-name {\r
      font-size: 16px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 8px;\r
    }\r
\r
    .footer-info {\r
      font-size: 12px;\r
      color: rgba(255, 255, 255, .5);\r
      line-height: 1.8;\r
    }\r
\r
    .footer-copy {\r
      font-size: 12px;\r
      color: rgba(255, 255, 255, .3);\r
      margin-top: 16px;\r
    }\r
\r
    /* ── REVIEWS NAV BUTTONS ── */\r
    .reviews-nav {\r
      display: flex;\r
      justify-content: flex-end;\r
      gap: 8px;\r
      margin-bottom: 16px;\r
    }\r
\r
    .rev-btn {\r
      width: 36px;\r
      height: 36px;\r
      border-radius: 50%;\r
      background: #fff;\r
      border: 1px solid var(--border);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      cursor: pointer;\r
      font-size: 14px;\r
      color: #111;\r
      box-shadow: 0 2px 8px rgba(0, 0, 0, .08);\r
      transition: all .2s;\r
      flex-shrink: 0;\r
    }\r
\r
    .rev-btn:hover {\r
      background: #f5f6fa;\r
      box-shadow: 0 4px 12px rgba(0, 0, 0, .12)\r
    }\r
\r
    /* ── HISTORY ── */\r
    .history-section {\r
      background: #fff;\r
      padding: 100px var(--PX)\r
    }\r
\r
    .history-section .sec-label-b {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #4d6bff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 12px;\r
    }\r
\r
    .history-section h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.2px;\r
      margin-bottom: 56px;\r
      word-break: keep-all;\r
    }\r
\r
    .history-list {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      border-top: 1px solid var(--border);\r
    }\r
\r
    .history-item {}\r
\r
    .history-toggle {\r
      width: 100%;\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      padding: 24px 0;\r
      background: none;\r
      border: none;\r
      border-bottom: 1px solid var(--border);\r
      cursor: pointer;\r
      font-family: inherit;\r
      text-align: left;\r
      transition: background .15s;\r
    }\r
\r
    .history-toggle:hover {\r
      background: #fafafa\r
    }\r
\r
    .history-toggle-left {\r
      display: flex;\r
      align-items: center;\r
      gap: 20px\r
    }\r
\r
    .history-badge-city {\r
      font-size: 11px;\r
      font-weight: 700;\r
      padding: 4px 10px;\r
      border-radius: 100px;\r
      letter-spacing: .06em;\r
    }\r
\r
    .history-toggle-title {\r
      font-size: clamp(16px, 2vw, 22px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.02em;\r
    }\r
\r
    .history-toggle-meta {\r
      font-size: 13px;\r
      color: #9ca3af;\r
      font-weight: 500;\r
      margin-left: 4px;\r
    }\r
\r
    .history-toggle-status {\r
      font-size: 11px;\r
      font-weight: 700;\r
      padding: 4px 10px;\r
      border-radius: 100px;\r
      margin-left: auto;\r
      margin-right: 16px;\r
      flex-shrink: 0;\r
    }\r
\r
    .hs-done {\r
      background: #f1f5f9;\r
      color: #94a3b8\r
    }\r
\r
    .hs-open {\r
      background: #dbeafe;\r
      color: #1d4ed8\r
    }\r
\r
    .hs-new {\r
      background: #ede9fe;\r
      color: #6d28d9\r
    }\r
\r
    .history-chevron {\r
      font-size: 16px;\r
      color: #9ca3af;\r
      transition: transform .3s;\r
      flex-shrink: 0;\r
    }\r
\r
    .history-chevron.open {\r
      transform: rotate(180deg)\r
    }\r
\r
    .history-body {\r
      overflow: hidden;\r
      max-height: 0;\r
      transition: max-height .4s ease;\r
      border-bottom: 1px solid var(--border);\r
    }\r
\r
    .history-body.open {\r
      max-height: 2000px\r
    }\r
\r
    .history-body-inner {\r
      padding: 32px 0 40px\r
    }\r
\r
    .history-gallery {\r
      display: grid;\r
      grid-template-columns: repeat(4, 1fr);\r
      gap: 12px;\r
      margin-bottom: 36px;\r
    }\r
\r
    .history-gallery-img {\r
      aspect-ratio: 4/3;\r
      border-radius: 10px;\r
      overflow: hidden;\r
      background: var(--gray-bg);\r
    }\r
\r
    .history-gallery-img img {\r
      width: 100%;\r
      height: 100%;\r
      object-fit: cover\r
    }\r
\r
    .history-gallery-placeholder {\r
      width: 100%;\r
      height: 100%;\r
      background: linear-gradient(135deg, #e8edf5, #f5f7fb);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      color: #b0b8c8;\r
      font-size: 11px;\r
      font-family: monospace;\r
      text-align: center;\r
      padding: 8px;\r
      line-height: 1.4;\r
    }\r
\r
    .history-speakers-label {\r
      font-size: 14px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      letter-spacing: .05em;\r
      margin-bottom: 16px;\r
    }\r
\r
    .history-speakers {\r
      display: grid;\r
      grid-template-columns: repeat(4, 1fr);\r
      gap: 16px;\r
    }\r
\r
    .speaker-card {\r
      position: relative;\r
      border-radius: 12px;\r
      overflow: hidden;\r
      aspect-ratio: 3/4;\r
      background: transparent;\r
      border: none;\r
      transition: transform .3s ease, box-shadow .3s ease;\r
      cursor: default;\r
    }\r
\r
    .speaker-card:hover {\r
      transform: translateY(-3px);\r
      box-shadow: 0 12px 28px rgba(0, 17, 62, .18);\r
    }\r
\r
    .speaker-card-bg {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center top;\r
      transition: transform .6s ease;\r
    }\r
\r
    .speaker-card:hover .speaker-card-bg {\r
      transform: scale(1.05)\r
    }\r
\r
    .speaker-card-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(to top, rgba(0, 17, 62, .93) 0%, rgba(0, 17, 62, .3) 55%, rgba(0, 17, 62, 0) 100%);\r
    }\r
\r
    .speaker-info {\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      z-index: 1;\r
      padding: 14px 14px;\r
    }\r
\r
    .speaker-name {\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 4px;\r
      letter-spacing: -.01em\r
    }\r
\r
    .speaker-lecture {\r
      font-size: 11px;\r
      color: rgba(255, 255, 255, .72);\r
      line-height: 1.5;\r
      word-break: keep-all\r
    }\r
\r
    @media(max-width:768px) {\r
      .history-gallery {\r
        grid-template-columns: repeat(2, 1fr)\r
      }\r
\r
      .history-speakers {\r
        grid-template-columns: repeat(2, 1fr)\r
      }\r
\r
      .history-toggle-meta {\r
        display: none\r
      }\r
    }\r
\r
    /* ── COURSE TABS ── */\r
    .tabs-section {\r
      background: var(--gray-bg);\r
      padding: 100px var(--PX)\r
    }\r
\r
    .tabs-section .sec-label-b {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #4d6bff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 12px;\r
    }\r
\r
    .tabs-section h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.2px;\r
      margin-bottom: 48px;\r
      word-break: keep-all;\r
    }\r
\r
    .tab-btns {\r
      display: flex;\r
      gap: 12px;\r
      flex-wrap: wrap;\r
      margin-bottom: 40px;\r
    }\r
\r
    .tab-btn {\r
      padding: 13px 28px;\r
      border-radius: 10px;\r
      background: rgb(231, 231, 232);\r
      border: none;\r
      font-size: 15px;\r
      font-weight: 700;\r
      color: #6b7280;\r
      cursor: pointer;\r
      font-family: inherit;\r
      letter-spacing: -.02em;\r
      transition: all .2s;\r
    }\r
\r
    .tab-btn.active {\r
      background: #fff;\r
      color: var(--blue-main);\r
      box-shadow: 0 2px 12px rgba(57, 65, 255, .15);\r
      border: 1.5px solid rgba(57, 65, 255, .2)\r
    }\r
\r
    .tab-btn:hover:not(.active) {\r
      background: #e4e5e8\r
    }\r
\r
    .tab-content {\r
      background: #fff;\r
      border-radius: 16px;\r
      border: 1px solid var(--border);\r
      overflow: hidden;\r
    }\r
\r
    .tab-hero {\r
      padding: 48px 40px 40px;\r
      border-bottom: 1px solid var(--border);\r
      display: grid;\r
      grid-template-columns: 1fr auto;\r
      gap: 32px;\r
      align-items: start;\r
    }\r
\r
    .tab-city-badge {\r
      display: inline-block;\r
      font-size: 11px;\r
      font-weight: 700;\r
      padding: 4px 12px;\r
      border-radius: 100px;\r
      letter-spacing: .06em;\r
      margin-bottom: 14px;\r
    }\r
\r
    .tab-course-name {\r
      font-size: clamp(22px, 2.5vw, 34px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.03em;\r
      margin-bottom: 8px;\r
      word-break: keep-all;\r
    }\r
\r
    .tab-course-sub {\r
      font-size: 15px;\r
      color: #6b7280;\r
      margin-bottom: 20px\r
    }\r
\r
    .tab-cohort-list {\r
      display: flex;\r
      flex-wrap: wrap;\r
      gap: 8px;\r
      margin-bottom: 24px\r
    }\r
\r
    .tab-cohort-pill {\r
      padding: 6px 14px;\r
      border-radius: 100px;\r
      border: 1px solid var(--border);\r
      font-size: 12px;\r
      font-weight: 600;\r
      color: #6b7280;\r
    }\r
\r
    .tab-cohort-pill.latest {\r
      background: #eff6ff;\r
      border-color: #bfdbfe;\r
      color: #1d4ed8\r
    }\r
\r
    .tab-apply-btn {\r
      background: #000;\r
      color: #fff;\r
      border: none;\r
      padding: 14px 28px;\r
      border-radius: 8px;\r
      font-size: 14px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      font-family: inherit;\r
      white-space: nowrap;\r
      transition: background .2s;\r
      height: fit-content;\r
    }\r
\r
    .tab-apply-btn:hover {\r
      background: #222\r
    }\r
\r
    .tab-detail-grid {\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      border-top: 1px solid var(--border);\r
    }\r
\r
    .tab-detail-cell {\r
      padding: 24px 28px;\r
      border-right: 1px solid var(--border);\r
    }\r
\r
    .tab-detail-cell:last-child {\r
      border-right: none\r
    }\r
\r
    .tab-detail-label {\r
      font-size: 12px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      margin-bottom: 6px;\r
      letter-spacing: .03em\r
    }\r
\r
    .tab-detail-val {\r
      font-size: 16px;\r
      font-weight: 700;\r
      color: #111;\r
      letter-spacing: -.02em\r
    }\r
\r
    /* ── FAQ ── */\r
    .faq-section {\r
      background: #fff;\r
      padding: 100px var(--PX)\r
    }\r
\r
    .faq-section .sec-label-b {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #4d6bff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 12px;\r
    }\r
\r
    .faq-section h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.2px;\r
      margin-bottom: 56px;\r
      word-break: keep-all;\r
    }\r
\r
    .faq-list {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      border-top: 1px solid var(--border)\r
    }\r
\r
    .faq-item {}\r
\r
    .faq-q {\r
      width: 100%;\r
      display: flex;\r
      align-items: center;\r
      justify-content: space-between;\r
      padding: 24px 0;\r
      background: none;\r
      border: none;\r
      border-bottom: 1px solid var(--border);\r
      cursor: pointer;\r
      font-family: inherit;\r
      text-align: left;\r
      gap: 16px;\r
    }\r
\r
    .faq-q:hover .faq-q-text {\r
      color: var(--blue-main)\r
    }\r
\r
    .faq-q-left {\r
      display: flex;\r
      align-items: flex-start;\r
      gap: 16px\r
    }\r
\r
    .faq-q-badge {\r
      font-size: 12px;\r
      font-weight: 700;\r
      color: var(--blue-main);\r
      min-width: 18px;\r
      padding-top: 2px;\r
      flex-shrink: 0;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
    }\r
\r
    .faq-q-text {\r
      font-size: clamp(15px, 1.5vw, 18px);\r
      font-weight: 700;\r
      color: #111;\r
      letter-spacing: -.02em;\r
      line-height: 1.4;\r
      word-break: keep-all;\r
      transition: color .2s;\r
    }\r
\r
    .faq-icon {\r
      width: 24px;\r
      height: 24px;\r
      border-radius: 50%;\r
      border: 1.5px solid #d1d5db;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 14px;\r
      color: #6b7280;\r
      flex-shrink: 0;\r
      transition: all .3s;\r
    }\r
\r
    .faq-icon.open {\r
      background: var(--blue-main);\r
      border-color: var(--blue-main);\r
      color: #fff;\r
      transform: rotate(45deg)\r
    }\r
\r
    .faq-a {\r
      overflow: hidden;\r
      max-height: 0;\r
      transition: max-height .35s ease, padding .35s ease;\r
      border-bottom: 1px solid var(--border);\r
    }\r
\r
    .faq-a.open {\r
      max-height: 600px\r
    }\r
\r
    .faq-a-inner {\r
      padding: 20px 0 28px 34px;\r
      font-size: 15px;\r
      color: #4b5563;\r
      line-height: 1.8;\r
      word-break: keep-all;\r
    }\r
\r
    @media(max-width:768px) {\r
      .tab-hero {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .tab-detail-grid {\r
        grid-template-columns: 1fr 1fr\r
      }\r
    }\r
\r
    /* ── TWEAKS ── */\r
    .tweaks-panel {\r
      position: fixed;\r
      bottom: 20px;\r
      right: 20px;\r
      z-index: 999;\r
      background: #fff;\r
      border-radius: 14px;\r
      box-shadow: 0 8px 40px rgba(0, 0, 0, .15);\r
      padding: 20px;\r
      width: 240px;\r
      font-family: inherit;\r
      display: none;\r
    }\r
\r
    .tweaks-panel.show {\r
      display: block\r
    }\r
\r
    .tweaks-title {\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #111;\r
      margin-bottom: 14px\r
    }\r
\r
    .tw-row {\r
      margin-bottom: 12px\r
    }\r
\r
    .tw-label {\r
      font-size: 11px;\r
      color: #6b7280;\r
      margin-bottom: 5px;\r
      font-weight: 500\r
    }\r
\r
    .tw-select {\r
      width: 100%;\r
      padding: 7px 10px;\r
      border: 1px solid #e5e7eb;\r
      border-radius: 7px;\r
      font-size: 13px;\r
      font-family: inherit;\r
      background: #fff;\r
      cursor: pointer;\r
    }\r
\r
    /* ── TARGET AUDIENCE ── */\r
    .target-section {\r
      position: relative;\r
      padding: 120px var(--PX);\r
      background: var(--navy-dark);\r
      overflow: hidden;\r
    }\r
\r
    .target-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('배경사진') center/cover no-repeat;\r
      opacity: .22;\r
    }\r
\r
    .target-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(180deg, rgba(0, 17, 62, .88) 0%, rgba(16, 0, 106, .92) 100%);\r
    }\r
\r
    .target-section .wrap,\r
    .target-section .target-grid {\r
      position: relative;\r
      z-index: 1\r
    }\r
\r
    .target-section .sec-label-b {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: rgba(175, 193, 255, .8);\r
      letter-spacing: -.15px;\r
      margin-bottom: 12px;\r
    }\r
\r
    .target-section h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #fff;\r
      letter-spacing: -.2px;\r
      margin-bottom: 56px;\r
      word-break: keep-all;\r
      line-height: 1.2;\r
    }\r
\r
    .target-grid {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(4, 1fr);\r
      gap: 16px;\r
    }\r
\r
    .target-card {\r
      position: relative;\r
      border-radius: 16px;\r
      overflow: hidden;\r
      aspect-ratio: 3/4;\r
      cursor: default;\r
      transition: transform .3s ease, box-shadow .3s ease;\r
    }\r
\r
    .target-card:hover {\r
      transform: translateY(-4px);\r
      box-shadow: 0 20px 50px rgba(0, 0, 0, .35);\r
    }\r
\r
    .target-card-bg {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center;\r
      transition: transform .6s ease;\r
    }\r
\r
    .target-card:hover .target-card-bg {\r
      transform: scale(1.06)\r
    }\r
\r
    .target-card-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(to top, rgba(0, 17, 62, .95) 0%, rgba(0, 17, 62, .45) 50%, rgba(0, 17, 62, .1) 100%);\r
    }\r
\r
    .target-num {\r
      position: absolute;\r
      top: 20px;\r
      left: 20px;\r
      z-index: 2;\r
      width: 44px;\r
      height: 44px;\r
      border-radius: 10px;\r
      background: rgba(255, 255, 255, .12);\r
      backdrop-filter: blur(14px);\r
      -webkit-backdrop-filter: blur(14px);\r
      border: 1px solid rgba(255, 255, 255, .22);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #fff;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      letter-spacing: .02em;\r
    }\r
\r
    .target-card-content {\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      z-index: 1;\r
      padding: 26px 22px;\r
    }\r
\r
    .target-name {\r
      font-size: 17px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 10px;\r
      letter-spacing: -.02em;\r
      line-height: 1.35;\r
    }\r
\r
    .target-desc {\r
      font-size: 13px;\r
      color: rgba(255, 255, 255, .72);\r
      line-height: 1.65;\r
      word-break: keep-all;\r
    }\r
\r
    /* ── PROCESS ── */\r
    .process-section {\r
      position: relative;\r
      padding: 100px var(--PX);\r
      background: var(--navy-deep);\r
      overflow: hidden\r
    }\r
\r
    .process-bg {\r
      position: absolute;\r
      inset: 0;\r
      background: url('배경사진') center/cover no-repeat;\r
      opacity: .15;\r
    }\r
\r
    .process-section::before {\r
      content: '';\r
      position: absolute;\r
      top: -30%;\r
      right: -10%;\r
      width: 60%;\r
      height: 80%;\r
      background: radial-gradient(ellipse, rgba(57, 65, 255, .28), transparent 70%);\r
      pointer-events: none\r
    }\r
\r
    .process-section::after {\r
      content: '';\r
      position: absolute;\r
      bottom: -20%;\r
      left: -10%;\r
      width: 50%;\r
      height: 60%;\r
      background: radial-gradient(ellipse, rgba(124, 58, 237, .22), transparent 70%);\r
      pointer-events: none\r
    }\r
\r
    .process-inner {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      position: relative;\r
      z-index: 1\r
    }\r
\r
    .process-label {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: rgba(175, 193, 255, .8);\r
      margin-bottom: 12px;\r
      letter-spacing: -.15px\r
    }\r
\r
    .process-h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #fff;\r
      line-height: 1.2;\r
      letter-spacing: -.2px;\r
      margin-bottom: 56px;\r
      word-break: keep-all\r
    }\r
\r
    .process-steps {\r
      display: grid;\r
      grid-template-columns: repeat(5, 1fr);\r
      gap: 8px;\r
      position: relative\r
    }\r
\r
    .process-step {\r
      text-align: left;\r
      position: relative;\r
      padding: 24px 20px 24px 0\r
    }\r
\r
    .process-step:not(:last-child)::after {\r
      content: '→';\r
      position: absolute;\r
      top: 34px;\r
      right: 0;\r
      color: rgba(175, 193, 255, .35);\r
      font-size: 16px;\r
      font-weight: 300\r
    }\r
\r
    .process-num {\r
      display: inline-flex;\r
      width: 44px;\r
      height: 44px;\r
      border-radius: 50%;\r
      background: linear-gradient(135deg, #3941ff, #7c3aed);\r
      color: #fff;\r
      align-items: center;\r
      justify-content: center;\r
      font-size: 15px;\r
      font-weight: 700;\r
      margin-bottom: 20px;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      box-shadow: 0 4px 16px rgba(57, 65, 255, .4)\r
    }\r
\r
    .process-step h4 {\r
      font-size: 16px;\r
      font-weight: 700;\r
      color: #fff;\r
      margin-bottom: 8px;\r
      letter-spacing: -.02em\r
    }\r
\r
    .process-step p {\r
      font-size: 13px;\r
      color: rgba(255, 255, 255, .55);\r
      line-height: 1.6;\r
      word-break: keep-all\r
    }\r
\r
    /* ── PRESS ── */\r
    .press-section {\r
      background: #fff;\r
      padding: 80px var(--PX);\r
      border-top: 1px solid var(--border)\r
    }\r
\r
    .press-label {\r
      text-align: center;\r
      font-size: 12px;\r
      font-weight: 700;\r
      color: #9ca3af;\r
      letter-spacing: .12em;\r
      margin-bottom: 40px\r
    }\r
\r
    .press-grid {\r
      max-width: var(--W);\r
      margin: 0 auto;\r
      display: grid;\r
      grid-template-columns: repeat(3, 1fr);\r
      gap: 20px\r
    }\r
\r
    .press-card {\r
      position: relative;\r
      border-radius: 16px;\r
      overflow: hidden;\r
      aspect-ratio: 4/5;\r
      cursor: pointer;\r
      transition: transform .3s ease, box-shadow .3s ease;\r
    }\r
\r
    .press-card:hover {\r
      transform: translateY(-4px);\r
      box-shadow: 0 20px 50px rgba(0, 17, 62, .18);\r
    }\r
\r
    .press-card-bg {\r
      position: absolute;\r
      inset: 0;\r
      background-size: cover;\r
      background-position: center;\r
      transition: transform .6s ease;\r
    }\r
\r
    .press-card:hover .press-card-bg {\r
      transform: scale(1.06)\r
    }\r
\r
    .press-card-overlay {\r
      position: absolute;\r
      inset: 0;\r
      background: linear-gradient(to top, rgba(0, 17, 62, .94) 0%, rgba(0, 17, 62, .5) 45%, rgba(0, 17, 62, .1) 100%);\r
    }\r
\r
    .press-media {\r
      position: absolute;\r
      top: 20px;\r
      left: 20px;\r
      z-index: 2;\r
      background: rgba(255, 255, 255, .14);\r
      backdrop-filter: blur(14px);\r
      -webkit-backdrop-filter: blur(14px);\r
      border: 1px solid rgba(255, 255, 255, .22);\r
      color: #fff;\r
      padding: 7px 14px;\r
      border-radius: 100px;\r
      font-size: 11px;\r
      font-weight: 700;\r
      letter-spacing: .08em;\r
    }\r
\r
    .press-card-content {\r
      position: absolute;\r
      bottom: 0;\r
      left: 0;\r
      right: 0;\r
      z-index: 1;\r
      padding: 24px 22px;\r
    }\r
\r
    .press-title {\r
      font-size: 15px;\r
      font-weight: 700;\r
      color: #fff;\r
      line-height: 1.55;\r
      letter-spacing: -.02em;\r
      margin-bottom: 14px;\r
      word-break: keep-all;\r
    }\r
\r
    .press-date {\r
      font-size: 12px;\r
      color: rgba(255, 255, 255, .6);\r
      font-weight: 500;\r
      display: flex;\r
      align-items: center;\r
      gap: 6px;\r
    }\r
\r
    .press-date::before {\r
      content: '';\r
      width: 4px;\r
      height: 4px;\r
      border-radius: 50%;\r
      background: rgba(255, 255, 255, .35);\r
    }\r
\r
    .press-card-arrow {\r
      position: absolute;\r
      top: 20px;\r
      right: 20px;\r
      z-index: 2;\r
      width: 36px;\r
      height: 36px;\r
      border-radius: 50%;\r
      background: rgba(255, 255, 255, .12);\r
      backdrop-filter: blur(14px);\r
      -webkit-backdrop-filter: blur(14px);\r
      border: 1px solid rgba(255, 255, 255, .2);\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      color: #fff;\r
      font-size: 14px;\r
      transition: background .2s, transform .2s;\r
    }\r
\r
    .press-card:hover .press-card-arrow {\r
      background: rgba(255, 255, 255, .22);\r
      transform: rotate(45deg);\r
    }\r
\r
    /* ── KEYWORDS MARQUEE ── */\r
    .keywords-section {\r
      position: relative;\r
      background: var(--navy-deep);\r
      padding: 80px 0 90px;\r
      overflow: hidden;\r
      border-top: 1px solid rgba(255, 255, 255, .06);\r
      border-bottom: 1px solid rgba(255, 255, 255, .06);\r
    }\r
\r
    .keywords-section::before {\r
      content: '';\r
      position: absolute;\r
      inset: 0;\r
      background: radial-gradient(ellipse at 50% 50%, rgba(57, 65, 255, .18), transparent 65%);\r
      pointer-events: none;\r
    }\r
\r
    .keywords-label {\r
      position: relative;\r
      z-index: 2;\r
      text-align: center;\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: rgba(175, 193, 255, .7);\r
      letter-spacing: .14em;\r
      margin-bottom: 48px;\r
      padding: 0 var(--PX);\r
    }\r
\r
    .keywords-label span {\r
      color: #fff;\r
      font-size: 22px;\r
      font-weight: 700;\r
      display: block;\r
      margin-top: 10px;\r
      letter-spacing: -.02em;\r
    }\r
\r
    .keywords-row {\r
      display: flex;\r
      width: max-content;\r
      gap: 0;\r
      will-change: transform;\r
    }\r
\r
    .keywords-row.row-1 {\r
      animation: scroll-left 60s linear infinite\r
    }\r
\r
    .keywords-row.row-2 {\r
      animation: scroll-right 70s linear infinite;\r
      margin-top: 16px;\r
    }\r
\r
    .keywords-section:hover .keywords-row {\r
      animation-play-state: paused\r
    }\r
\r
    .keyword-item {\r
      display: inline-flex;\r
      align-items: center;\r
      padding: 0 40px;\r
      font-family: 'DM Sans', 'Pretendard Variable', sans-serif;\r
      font-size: clamp(36px, 5vw, 72px);\r
      font-weight: 800;\r
      letter-spacing: -.03em;\r
      white-space: nowrap;\r
      line-height: 1.1;\r
    }\r
\r
    .keyword-item.outline {\r
      color: transparent;\r
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, .35);\r
    }\r
\r
    .keyword-item.fill {\r
      color: #fff;\r
    }\r
\r
    .keyword-item.accent {\r
      background: linear-gradient(135deg, #7f93ff 0%, #c4b5fd 100%);\r
      -webkit-background-clip: text;\r
      background-clip: text;\r
      color: transparent;\r
    }\r
\r
    .keyword-star {\r
      display: inline-flex;\r
      align-items: center;\r
      color: rgba(175, 193, 255, .35);\r
      font-size: 20px;\r
      padding: 0 4px;\r
      flex-shrink: 0;\r
    }\r
\r
    /* gradient fade on edges */\r
    .keywords-row-wrap {\r
      position: relative;\r
      z-index: 1;\r
      mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);\r
      -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);\r
    }\r
\r
    /* ── APPLICATION FORM ── */\r
    .form-section {\r
      background: var(--gray-bg);\r
      padding: 100px var(--PX)\r
    }\r
\r
    .form-inner {\r
      max-width: var(--W);\r
      margin: 0 auto\r
    }\r
\r
    .form-label-b {\r
      font-size: 22px;\r
      font-weight: 500;\r
      color: #4d6bff;\r
      letter-spacing: -.15px;\r
      margin-bottom: 12px\r
    }\r
\r
    .form-h2 {\r
      font-size: clamp(28px, 3vw, 45px);\r
      font-weight: 700;\r
      color: #000;\r
      letter-spacing: -.2px;\r
      margin-bottom: 16px;\r
      word-break: keep-all;\r
      line-height: 1.2\r
    }\r
\r
    .form-desc {\r
      font-size: 16px;\r
      color: #6b7280;\r
      margin-bottom: 40px;\r
      line-height: 1.7;\r
      letter-spacing: -.01em\r
    }\r
\r
    .form-card {\r
      background: #fff;\r
      border-radius: 20px;\r
      padding: 48px;\r
      box-shadow: 0 4px 24px rgba(0, 0, 0, .05);\r
      border: 1px solid var(--border)\r
    }\r
\r
    .form-grid {\r
      display: grid;\r
      grid-template-columns: 1fr 1fr;\r
      gap: 20px\r
    }\r
\r
    .form-cell.full {\r
      grid-column: 1 / -1\r
    }\r
\r
    .form-cell label {\r
      display: block;\r
      font-size: 13px;\r
      font-weight: 700;\r
      color: #111;\r
      margin-bottom: 8px;\r
      letter-spacing: -.01em\r
    }\r
\r
    .form-cell label .req {\r
      color: var(--blue-main);\r
      margin-left: 2px\r
    }\r
\r
    .form-cell input,\r
    .form-cell select,\r
    .form-cell textarea {\r
      width: 100%;\r
      padding: 14px 16px;\r
      border: 1px solid var(--border);\r
      border-radius: 10px;\r
      font-family: inherit;\r
      font-size: 14px;\r
      color: #111;\r
      background: #fff;\r
      transition: border-color .2s, box-shadow .2s\r
    }\r
\r
    .form-cell input:focus,\r
    .form-cell select:focus,\r
    .form-cell textarea:focus {\r
      outline: none;\r
      border-color: var(--blue-main);\r
      box-shadow: 0 0 0 3px rgba(57, 65, 255, .1)\r
    }\r
\r
    .form-cell textarea {\r
      resize: vertical;\r
      min-height: 110px;\r
      font-family: inherit\r
    }\r
\r
    .form-agree {\r
      display: flex;\r
      align-items: flex-start;\r
      gap: 10px;\r
      margin-top: 24px;\r
      padding: 16px;\r
      background: var(--gray-bg);\r
      border-radius: 10px;\r
      font-size: 13px;\r
      color: #6b7280;\r
      line-height: 1.6;\r
      cursor: pointer\r
    }\r
\r
    .form-agree input {\r
      margin-top: 3px;\r
      flex-shrink: 0;\r
      accent-color: var(--blue-main)\r
    }\r
\r
    .form-submit {\r
      width: 100%;\r
      background: #000;\r
      color: #fff;\r
      border: none;\r
      padding: 18px;\r
      border-radius: 10px;\r
      font-size: 16px;\r
      font-weight: 700;\r
      cursor: pointer;\r
      font-family: inherit;\r
      margin-top: 16px;\r
      transition: background .2s;\r
      letter-spacing: -.01em\r
    }\r
\r
    .form-submit:hover {\r
      background: var(--blue-main)\r
    }\r
\r
    @media(max-width:768px) {\r
      .target-grid {\r
        grid-template-columns: 1fr 1fr\r
      }\r
\r
      .process-steps {\r
        grid-template-columns: 1fr;\r
        gap: 0\r
      }\r
\r
      .process-step {\r
        padding: 20px 0 20px 0\r
      }\r
\r
      .process-step:not(:last-child)::after {\r
        content: '↓';\r
        top: auto;\r
        bottom: -10px;\r
        right: auto;\r
        left: 22px;\r
        font-size: 14px\r
      }\r
\r
      .press-grid {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .form-card {\r
        padding: 28px 24px\r
      }\r
\r
      .perks-grid {\r
        grid-template-columns: 1fr\r
      }\r
    }\r
\r
    @media(max-width:768px) {\r
      .nav-links {\r
        display: none\r
      }\r
\r
      .hero-title {\r
        font-size: 38px\r
      }\r
\r
      .info-row {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .reason-top,\r
      .dark-split,\r
      .cert-inner {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .reason-desc,\r
      .dark-desc {\r
        padding-left: 0\r
      }\r
\r
      .stats-row {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .stat-cell {\r
        padding: 28px 22px\r
      }\r
\r
      .stat-cell-sub {\r
        font-size: 16px\r
      }\r
\r
      .instructor-grid {\r
        grid-template-columns: 1fr 1fr\r
      }\r
\r
      .review-card {\r
        width: 100%\r
      }\r
\r
      .form-grid {\r
        grid-template-columns: 1fr\r
      }\r
\r
      .form-cell.full {\r
        grid-column: 1\r
      }\r
    }\r
`,P=e=>`/assets/home/${e}`,Nr=Mr.replace(/^(\s*)html\s*\{/m,`$1:host {`).replace(/^(\s*)body\s*\{/m,`$1:host {`).replace(/^(\s*):root\s*\{/m,`$1:host {`).replaceAll(`img/intro_cover.png`,P(`hero-intro-cover.png`)),Pr=[{q:`CAIO 과정은 어떤 분들을 대상으로 하나요?`,a:`대표이사 및 임원급 C레벨을 대상으로 합니다. AI를 활용해 산업지능화·AX를 추진하고자 하는 수요기업, AI 솔루션 공급기업, 공공·민간 분야 리더급 인사가 주요 대상입니다.`},{q:`수강료와 신청 방법은 어떻게 되나요?`,a:`수강료와 신청 방법은 기수별로 상이합니다. 페이지 상단의 정보 테이블 또는 하단 신청 폼을 통해 문의 주시면 안내드리겠습니다.`},{q:`이수증은 어떻게 받을 수 있나요?`,a:`출석률 80% 이상일 경우 한국인공지능협회 협회장 명의의 이수증이 수여됩니다. 이수증과 함께 CAIO 자격 및 협회 네트워크 혜택이 제공됩니다.`},{q:`서울/광주/천안 과정의 차이점이 있나요?`,a:`핵심 커리큘럼은 동일하게 운영되며, 지역별 산업 환경과 수강생 구성에 맞춰 일부 콘텐츠가 커스터마이징됩니다. 각 지역 특화 네트워크도 함께 형성됩니다.`},{q:`과정 수료 후 어떤 혜택이 있나요?`,a:`CAIO 자격 부여, 한국인공지능협회 회원사 전용 리소스 활용, 수료 후에도 이어지는 원우 네트워크 등 다양한 혜택이 제공됩니다.`}],Fr=[{id:`seoul1`,city:`서울`,cityColor:`#1447d4`,period:`서울 1기`,date:`2023`,fullName:`[2023] AI CEO ACADEMY 최고위과정 서울 1기`,status:`done`,galleries:[P(`cohort-seoul-1-activity-1.png`),P(`cohort-seoul-1-activity-2.png`),P(`cohort-seoul-1-activity-3.png`),P(`cohort-seoul-1-activity-4.png`)],speakers:[{name:`과학기술정보통신부 엄열 국장`,lecture:`(축사 및 특강) 대한민국 AI 정책 방향`,bg:P(`speaker-eom-yeol.png`)},{name:`피에스인베스트먼트 서병수 대표`,lecture:`AI 대중화 시대에 변화될 기업환경`,bg:P(`speaker-seo-byeongsu.png`)},{name:`한양대학교 이상욱 교수`,lecture:`AI가 바꿀 미래 사회와 국내외 정책 동향`,bg:P(`speaker-lee-sanguk.png`)},{name:`인텔 이주석 부사장`,lecture:`데이터가 주도하는 디지털 혁신과 생성형 AI 의 활용`,bg:P(`speaker-lee-juseok.png`)},{name:`두물머리 천영록 대표`,lecture:`AI automation 신산업의 등장`,bg:P(`speaker-cheon-yeongrok.png`)},{name:`KT 전략신사업 신수정 부문장`,lecture:`AI 시대의 리더십`,bg:P(`speaker-shin-soojung.png`)},{name:`서울여자대학교 김명주 교수`,lecture:`AI 공존 시대에 필요한 윤리적 상상력 그리고 규제`,bg:P(`speaker-kim-myeongju.png`)},{name:`팬덤퍼널 김윤경 대표`,lecture:`생성형 AI시대! 우리는 어떻게 살아남아야 하는가?`,bg:P(`speaker-kim-yunkyeong.png`)},{name:`경희대학교 김재인 교수`,lecture:`인공지능과 미래역량`,bg:P(`speaker-kim-jaein.png`)},{name:`태평양 이상직 변호사`,lecture:`인공지능시대의 위험과 도전, 창의와 혁신`,bg:P(`speaker-lee-sangjik.png`)}]},{id:`seoul2`,city:`서울`,cityColor:`#1447d4`,period:`서울 2기`,date:`2024`,fullName:`[2024] AI LEADER ACADEMY 최고위과정 서울 2기`,status:`done`,galleries:[P(`cohort-seoul-2-activity-1.png`),P(`cohort-seoul-2-activity-2.png`),P(`cohort-seoul-2-activity-3.png`),P(`cohort-seoul-2-activity-4.png`)],speakers:[{name:`LG AI연구원 임우형 상무`,lecture:`LG 초거대 AI 모델 엑사원 경영 활용 동향과 배울 점`,bg:P(`speaker-lim-uhyeong.png`)},{name:`SK mySUNI 김지현 부사장`,lecture:`전통기업의 디지털 전환(DX)의 우여곡절과 성과창출 방안`,bg:P(`speaker-kim-jihyeon.png`)},{name:`업스테이지 최홍준 총괄부사장`,lecture:`기업의 생성형 AI 활용 생산성 제고 전략`,bg:P(`speaker-choi-hongjun.png`)},{name:`마음AI 최홍섭 대표`,lecture:`수익 창출형 생성형 AI 플랫폼 구축 전략`,bg:P(`speaker-choi-hongseop.png`)},{name:`SERICEO 김대균 이사`,lecture:`AI와 리더십, 인공지능 시대에 리더의 자기학습과 성장, 구성원을 이끄는 방향`,bg:P(`speaker-kim-daegyun.png`)},{name:`포티투마루 김동환 대표`,lecture:`생성형 AI(sLLM)의 산업별 도입 절차와 기대성과`,bg:P(`speaker-kim-donghwan.png`)},{name:`이즈파크 김갑산 대표`,lecture:`기업의 수익 제고 비결 디지털전환(DX) 노하우`,bg:P(`speaker-kim-gapsan.png`)},{name:`STA테스팅컨설팅 권원일 대표`,lecture:`국내외 AI 인증 동향과 대응전략`,bg:P(`speaker-kwon-wonil.png`)}]},{id:`seoul3`,city:`서울`,cityColor:`#1447d4`,period:`서울 3기`,date:`2025`,fullName:`[2025] CAIO 리더 아카데미 IN 서울 3기`,status:`done`,galleries:[P(`cohort-seoul-3-activity-1.jpg`),P(`cohort-seoul-3-activity-2.jpg`),P(`cohort-seoul-3-activity-3.jpg`),P(`cohort-seoul-3-activity-4.jpg`)],speakers:[{name:`LG AI연구원 임우형 상무`,lecture:`인공지능 활용 사례 및 기술 협력을 통한 사업화 전략`,bg:P(`speaker-lim-uhyeong.png`)},{name:`연세대학교 미래캠퍼스 AI융합과학원 이주석 교수`,lecture:`데이터가 주도하는 디지털 혁신과 생성형 AI의 활용`,bg:P(`speaker-lee-juseok.png`)},{name:`구글 정명훈 파트너`,lecture:`AI 도구 도입 시 조직 전환: 변화관리와 인재 전략`,bg:P(`speaker-jeong-myeonghun.png`)},{name:`네이버클라우드 김필수 리더`,lecture:`생성형 AI를 통한 AI Agent와 적용 사례`,bg:P(`speaker-kim-pilsu.png`)},{name:`마음AI 최홍섭 대표`,lecture:`Next ChatGPT, Physical AI 시대를 대비하라`,bg:P(`speaker-choi-hongseop.png`)},{name:`한양대학교 한재권 교수`,lecture:`로봇과 함께 살아갈 세상`,bg:P(`speaker-han-jaegwon.png`)},{name:`에이아이플랫폼 신형섭 대표`,lecture:`AI 기반 의료마이데이터: 미래 의료 혁신을 이끄는 핵심 기술`,bg:P(`speaker-shin-hyeongseop.png`)},{name:`울산과학기술원 이세돌 교수`,lecture:`AI와 인간의 상호작용: 감성과 창의성의 중요성`,bg:P(`speaker-lee-sedol.png`)}]},{id:`gwangju1`,city:`광주`,cityColor:`#0891b2`,period:`광주 1기`,date:`2025`,fullName:`[2025] CAIO IN 광주 1기`,status:`done`,galleries:[P(`cohort-gwangju-1-activity-1.jpg`),P(`cohort-gwangju-1-activity-2.jpg`),P(`cohort-gwangju-1-activity-3.jpg`),P(`cohort-gwangju-1-activity-4.jpg`)],speakers:[{name:`전남대학교 김경백 교수`,lecture:`AI 일상화를 위한 대전환 전략`,bg:P(`speaker-kim-gyeongbaek.png`)},{name:`에이아이플랫폼 신형섭 대표`,lecture:`AI 기반 의료마이데이터: 미래 의료 혁신을 이끄는 핵심 기술`,bg:P(`speaker-shin-hyeongseop.png`)},{name:`네이버클라우드 김필수 리더`,lecture:`생성형 AI를 통한 AI Agent와 적용 사례`,bg:P(`speaker-kim-pilsu.png`)},{name:`울산과학기술원 이세돌 교수`,lecture:`AI와 인간의 상호작용: 감성과 창의성의 중요성`,bg:P(`speaker-lee-sedol.png`)},{name:`한국과학기술원 김갑진 교수`,lecture:`양자컴퓨팅 원리`,bg:P(`speaker-kim-gapjin.png`)},{name:`마음AI 최홍섭 대표`,lecture:`Next ChatGPT, Physical AI 시대를 대비하라`,bg:P(`speaker-choi-hongseop.png`)},{name:`연세대학교 AI융합과학원 이주석 교수`,lecture:`데이터가 주도하는 디지털 혁신과 생성형 AI의 활용`,bg:P(`speaker-lee-juseok.png`)},{name:`구글 정명훈 파트너`,lecture:`AI 도구 도입 시 조직 전환: 변화관리와 인재 전략`,bg:P(`speaker-jeong-myeonghun.png`)},{name:`KAIST 김대식 교수`,lecture:`AGI 시장지배력의 시대`,bg:P(`speaker-kim-daesik.png`)},{name:`전남대학교 양형정 교수`,lecture:`AI 전환기의 리더십과 책임: 전략, 기술, 사람`,bg:P(`speaker-yang-hyeongjeong.png`)}]}],Ir={done:{cls:`hs-done`,label:`수료 완료`},open:{cls:`hs-open`,label:`모집 예정`},new:{cls:`hs-new`,label:`신규 개설`}},Lr=[{stars:`★★★★★`,text:`솔직히 큰 기대는 안 하고 들어왔습니다.
그런데 생각보다 실무적인 내용이 많아서 놀랐고, 바로 적용해볼 수 있는 것들이 꽤 있었습니다.
특히 비슷한 고민을 하는 분들을 만난 게 도움이 됐습니다.`,author:`서울 1기 원우회원`,avatar:P(`review-avatar-01.png`)},{stars:`★★★★★`,text:`강의 내용도 좋았지만, 사람을 얻어가는 과정이었습니다.
각자 다른 산업에 있지만 비슷한 고민을 하고 있다는 걸 알게 됐고, 끝난 뒤에도 자연스럽게 이어지는 관계가 가장 큰 자산이라고 생각합니다.`,author:`광주 1기 원우회원`,avatar:P(`review-avatar-02.png`)},{stars:`★★★★★`,text:`경영진 입장에서 AI를 어떻게 바라봐야 하는지, 어디서부터 시작해야 하는지 정리되는 과정이었습니다. 막연했던 것들이 구체화되었습니다.`,author:`서울 3기 원우회원`,avatar:P(`review-avatar-03.png`)}],Rr=[{week:`CHAPTER 01`,title:`경영진 의사결정 - 왜 AI인가?`,desc:`AI 기본법 시행 배경과 C레벨이 알아야 할 AI 전략의 핵심`},{week:`CHAPTER 02`,title:`데이터·거버넌스 - 전략 실행의 기반`,desc:`데이터 인프라, AI 거버넌스 체계 구축과 법적 의무 이해`},{week:`CHAPTER 03`,title:`Agentic AI 실행 - 자율 AI 도입`,desc:`AI 에이전트 개념부터 조직 내 실전 도입 방법론까지`},{week:`CHAPTER 04`,title:`조직 재설계 - AI 시대의 인재 전략`,desc:`AI 친화적 조직 구조와 직무 재정의, 변화 관리 전략`},{week:`CHAPTER 05`,title:`산업 적용 - 현장 성과 창출`,desc:`내 산업에 AI를 접목하는 실전 워크숍 및 사례 발표`}],zr=[P(`gallery-strip-01.jpg`),P(`gallery-strip-02.png`),P(`gallery-strip-03.png`),P(`gallery-strip-04.jpg`),P(`gallery-strip-05.png`),P(`gallery-strip-06.png`)],Br=[{num:`01`,name:`대표이사 · CEO`,desc:`AI 시대의 경영 방향성과 전략적 의사결정 기준을 재정립하고자 하는 분`,bg:P(`audience-ceo.png`)},{num:`02`,name:`임원 · C-레벨`,desc:`CFO · COO · CMO 등 각 기능 조직의 AI 전략 실행을 책임지는 분`,bg:P(`audience-c-level.png`)},{num:`03`,name:`CDO · CIO · AI 총괄`,desc:`조직 내 AI 도입과 거버넌스 체계 수립을 주도하는 리더`,bg:P(`audience-cdo-cio.png`)},{num:`04`,name:`AI 솔루션 공급기업`,desc:`AI 기반 제품·서비스로 산업 고객을 확장하려는 기업 대표`,bg:P(`audience-solution-provider.png`)}],Vr=[{name:`김갑진`,role:`KAIST 교수`,bg:P(`speaker-kim-gapjin.png`)},{name:`이세돌`,role:`UNIST 교수`,bg:P(`speaker-lee-sedol.png`)},{name:`한재권`,role:`한양대 교수`,bg:P(`speaker-han-jaegwon.png`)}],Hr=[{media:`CAIO`,title:`한국인공지능협회, 2026년 CAIO 과정 전국 확대 운영`,date:`2026. 05`,bg:P(`press-caio-cover.jpg`),url:``},{media:`서울신문`,title:`AI는 선택 아닌 필수…전남대 CAIO 과정, 지역 혁신 플랫폼 될 것`,date:`2025. 08`,bg:`https://img.seoul.co.kr/img/upload/2026/03/10/SSC_20260310091344_O2.jpg.webp`,url:`https://www.seoul.co.kr/news/society/2025/08/18/20250818500056`},{media:`IT조선`,title:`인공지능협회, CAIO 과정 신설… 이세돌 등 강사 참여`,date:`2025. 07`,bg:`https://cdn.it.chosun.com/news/photo/202507/2023092144655_421583_1710.png`,url:`https://it.chosun.com/news/articleView.html?idxno=2023092144655`}],Ur=[{city:`서울`,sub:`한국인공지능협회 × PwC`,cohort:`1~4기`,bg:P(`location-seoul.png`),to:`/seoul`},{city:`광주`,sub:`지역 특화 AI 최고위과정`,cohort:`1~2기`,bg:P(`location-gwangju.png`),to:`/gwangju`},{city:`천안`,sub:`충청권 AX 얼라이언스`,cohort:`1기`,bg:P(`location-cheonan.png`),to:`/cheonan`}],Wr=[{src:Ar,alt:`한국인공지능협회`},{src:jr,alt:`PwC Korea`},{src:Or,alt:`전남대학교`},{src:Er,alt:`충청남도`},{src:Tr,alt:`천안시`},{src:Dr,alt:`충남테크노파크`},{src:kr,alt:`한국산업단지공단`}];function Gr(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(!1),c=[...zr,...zr,...zr];(0,_.useEffect)(()=>{let e=window.matchMedia(`(max-width: 768px)`),t=()=>s(e.matches);return t(),e.addEventListener(`change`,t),()=>{e.removeEventListener(`change`,t)}},[]);let l=o?[Lr[i]]:[Lr[i],Lr[(i+1)%Lr.length]];return(0,N.jsxs)(`div`,{className:`home-page-shell`,children:[(0,N.jsxs)(`section`,{className:`vision-section fluid`,children:[(0,N.jsx)(`div`,{className:`vision-bg`}),(0,N.jsx)(`div`,{className:`vision-blur`}),(0,N.jsxs)(`div`,{className:`vision-content`,children:[(0,N.jsx)(`div`,{className:`vision-tag`,children:`AI LEADERSHIP · 2023-2026`}),(0,N.jsxs)(`h1`,{className:`vision-h1`,children:[`경영진이 직접`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`em`,{children:`AI 전략을 설계하는`}),(0,N.jsx)(`br`,{}),`유일한 과정`]}),(0,N.jsxs)(`p`,{className:`vision-sub`,children:[`단순 이론이 아닌, 실전 전략 수립부터 조직 실행까지.`,(0,N.jsx)(`br`,{}),`C레벨을 위한 최고위과정 CAIO.`]})]})]}),(0,N.jsxs)(`div`,{className:`strip-section fluid`,children:[(0,N.jsx)(`div`,{className:`strip-track`,children:c.map((e,t)=>(0,N.jsx)(`div`,{className:`strip-img`,children:(0,N.jsx)(`img`,{src:e,alt:``})},`${e}-${t}`))}),(0,N.jsx)(`div`,{className:`strip-overlay`,children:(0,N.jsx)(`span`,{children:`왜 지금 시작해야 하나요?`})})]}),(0,N.jsx)(`div`,{className:`quote-section fluid`,children:(0,N.jsxs)(`p`,{children:[`AI는 이미 “도입할까 말까”의 단계가 아니라,`,(0,N.jsx)(`br`,{}),`“누가 전략을 만들고 누가 실행을 밀어붙일 것인가”인`,(0,N.jsx)(`br`,{}),`AI 네이티브(AI-native) 단계로 넘어갔습니다.`]})}),(0,N.jsxs)(`section`,{id:`about`,className:`reason-section fluid`,children:[(0,N.jsxs)(`div`,{className:`reason-top`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`reason-label`,children:`REASON`}),(0,N.jsxs)(`h2`,{className:`reason-h2`,children:[`기술이 아닌 리더십의 부재,`,(0,N.jsx)(`br`,{}),`바로 CAIO가 필요한 이유입니다.`]})]}),(0,N.jsxs)(`p`,{className:`reason-desc`,children:[`수많은 기업이 AI 도입에 실패하는 진짜 이유는 비용이나 기술력 부족이 아닙니다.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`br`,{}),`어떻게 도입하고 어디에 쓸지 결정할 '전략'과 '실행 체계'가 없기 때문입니다.`]})]}),(0,N.jsx)(`div`,{className:`stats-row`,children:[{num:`84.2%`,label:`압도적인 필요성 인식`,sub:`AI 도입의 필요성을 절감`},{num:`17.9%`,label:`저조한 실제 실행률`,sub:`실제로 AI를 활용하는 비율은 참담`},{num:`25.5%`,label:`파일럿의 함정`,sub:`성과를 내는 곳은 10곳 중 2곳 남짓`}].map(e=>(0,N.jsxs)(`div`,{className:`stat-cell`,children:[(0,N.jsx)(`div`,{className:`stat-cell-num`,children:e.num}),(0,N.jsx)(`div`,{className:`stat-cell-label`,children:e.label}),(0,N.jsx)(`div`,{className:`stat-cell-sub`,children:e.sub})]},e.label))})]}),(0,N.jsxs)(`section`,{className:`target-section fluid`,children:[(0,N.jsx)(`div`,{className:`target-bg`}),(0,N.jsx)(`div`,{className:`target-overlay`}),(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label-b`,children:`WHO · 대상자`}),(0,N.jsxs)(`h2`,{children:[`CAIO는 바로`,(0,N.jsx)(`br`,{}),`여러분들을 위한 과정입니다`]})]}),(0,N.jsx)(`div`,{className:`target-grid`,children:Br.map(e=>(0,N.jsxs)(`div`,{className:`target-card`,children:[(0,N.jsx)(`div`,{className:`target-card-bg`,style:{backgroundImage:`url("${e.bg}")`}}),(0,N.jsx)(`div`,{className:`target-card-overlay`}),(0,N.jsx)(`div`,{className:`target-num`,children:e.num}),(0,N.jsxs)(`div`,{className:`target-card-content`,children:[(0,N.jsx)(`div`,{className:`target-name`,children:e.name}),(0,N.jsx)(`div`,{className:`target-desc`,children:e.desc})]})]},e.num))})]}),(0,N.jsx)(`section`,{className:`dark-section fluid`,children:(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label`,children:`INSTRUCTOR`}),(0,N.jsxs)(`div`,{className:`dark-split`,children:[(0,N.jsxs)(`h2`,{className:`dark-h2`,children:[`그래서 준비했습니다.`,(0,N.jsx)(`br`,{})]}),(0,N.jsxs)(`p`,{className:`dark-desc`,children:[`바쁜 경영진에게`,(0,N.jsx)(`br`,{}),`원론적인 기술 강의는 필요 없습니다.`]})]}),(0,N.jsx)(`p`,{style:{fontSize:18,fontWeight:500,color:`rgba(231,231,232,1)`,marginBottom:32,letterSpacing:`-.15px`},children:`경영진의 시간은 가장 비싸기에, 헤맬 필요 없는 가장 완벽한 지름길을 설계했습니다.`}),(0,N.jsx)(`p`,{style:{fontSize:18,fontWeight:500,color:`rgba(231,231,232,1)`,marginBottom:32,letterSpacing:`-.15px`},children:`"AI 전략은 누가 세우고, 실행은 어떻게 하는가?"`}),(0,N.jsx)(`p`,{style:{fontSize:18,fontWeight:500,color:`rgba(231,231,232,1)`,marginBottom:32,letterSpacing:`-.15px`},children:`그 질문에 대한 답을 철저한 현장 중심의 커리큘럼과 최고의 연사진 라인업으로 증명합니다.`}),(0,N.jsx)(`div`,{className:`dark-divider`}),(0,N.jsxs)(`div`,{className:`instructor-grid`,children:[Vr.map(e=>(0,N.jsxs)(`div`,{className:`instructor-card`,children:[(0,N.jsx)(`div`,{className:`instructor-card-bg`,style:{backgroundImage:`url("${e.bg}")`}}),(0,N.jsx)(`div`,{className:`instructor-card-overlay`}),(0,N.jsxs)(`div`,{className:`instructor-info`,children:[(0,N.jsx)(`div`,{className:`instructor-name`,children:e.name}),(0,N.jsx)(`div`,{className:`instructor-role`,children:e.role})]})]},e.name)),(0,N.jsx)(`p`,{style:{fontSize:12,fontWeight:500,color:`rgb(166 166 198)`},children:`※ 매 기수별로 연사진은 달라질 수 있습니다.`})]})]})}),(0,N.jsxs)(`section`,{className:`keywords-section fluid`,children:[(0,N.jsxs)(`div`,{className:`keywords-label`,children:[`KEYWORDS`,(0,N.jsx)(`span`,{children:`CAIO 과정에서 다루는 핵심 키워드`})]}),(0,N.jsxs)(`div`,{className:`keywords-row-wrap`,children:[(0,N.jsx)(`div`,{className:`keywords-row row-1`,children:Array.from({length:2}).flatMap((e,t)=>[{t:`AI 전략`,s:`fill`},{t:`Generative AI`,s:`outline`},{t:`LLM`,s:`accent`},{t:`Data Governance`,s:`outline`},{t:`AI 거버넌스`,s:`fill`},{t:`Multi-Agent`,s:`outline`},{t:`RAG`,s:`accent`},{t:`디지털 전환`,s:`outline`},{t:`AI 윤리`,s:`fill`},{t:`Prompt Engineering`,s:`outline`}].map((e,n)=>(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`span`,{className:`keyword-item ${e.s}`,children:e.t}),(0,N.jsx)(`span`,{className:`keyword-star`,children:`✦`})]},`row-1-${t}-${n}`)))}),(0,N.jsx)(`div`,{className:`keywords-row row-2`,children:Array.from({length:2}).flatMap((e,t)=>[{t:`MLOps`,s:`outline`},{t:`AI 기본법`,s:`fill`},{t:`Vertical AI`,s:`outline`},{t:`Fine-tuning`,s:`accent`},{t:`Agentic Workflow`,s:`outline`},{t:`AI ROI`,s:`fill`},{t:`Vector Database`,s:`outline`},{t:`경영 의사결정`,s:`accent`},{t:`AI Transformation`,s:`outline`},{t:`Enterprise AI`,s:`fill`}].map((e,n)=>(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`span`,{className:`keyword-item ${e.s}`,children:e.t}),(0,N.jsx)(`span`,{className:`keyword-star`,children:`✦`})]},`row-2-${t}-${n}`)))})]})]}),(0,N.jsx)(`section`,{className:`dark-section fluid`,style:{paddingTop:0},children:(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label`,style:{paddingTop:80,display:`block`},children:`CURRICULUM`}),(0,N.jsxs)(`div`,{className:`dark-split`,children:[(0,N.jsxs)(`h2`,{className:`dark-h2`,children:[`편안하게,`,(0,N.jsx)(`br`,{}),`그리고 깊이 있게.`]}),(0,N.jsxs)(`p`,{className:`dark-desc`,children:[`가장 실용적이고`,(0,N.jsx)(`br`,{}),`압도적인 커리큘럼을 준비했습니다.`]})]}),(0,N.jsx)(`div`,{className:`cur-table`,children:Rr.map(e=>(0,N.jsxs)(`div`,{className:`cur-row`,children:[(0,N.jsx)(`div`,{className:`cur-week`,children:e.week}),(0,N.jsxs)(`div`,{className:`cur-content`,children:[(0,N.jsx)(`h4`,{children:e.title}),(0,N.jsx)(`p`,{children:e.desc})]})]},e.week))})]})}),(0,N.jsxs)(`section`,{className:`history-section fluid`,children:[(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label-b`,children:`HISTORY`}),(0,N.jsxs)(`h2`,{children:[`지금까지의 CAIO,`,(0,N.jsx)(`br`,{}),`기수별 운영 연혁`]})]}),(0,N.jsx)(`div`,{className:`history-list`,style:{maxWidth:`var(--W)`,margin:`0 auto`},children:Fr.map(n=>{let r=e===n.id,i=Ir[n.status];return(0,N.jsxs)(`div`,{className:`history-item`,children:[(0,N.jsxs)(`button`,{className:`history-toggle`,onClick:()=>t(r?null:n.id),children:[(0,N.jsxs)(`div`,{className:`history-toggle-left`,children:[(0,N.jsx)(`span`,{className:`history-badge-city`,style:{background:`${n.cityColor}22`,color:n.cityColor},children:n.city}),(0,N.jsx)(`span`,{className:`history-toggle-title`,children:n.period}),(0,N.jsxs)(`span`,{className:`history-toggle-meta`,children:[`— `,n.date]})]}),(0,N.jsx)(`span`,{className:`history-toggle-status ${i.cls}`,children:i.label}),(0,N.jsx)(`span`,{className:`history-chevron ${r?`open`:``}`,children:`▾`})]}),(0,N.jsx)(`div`,{className:`history-body ${r?`open`:``}`,children:(0,N.jsxs)(`div`,{className:`history-body-inner`,children:[(0,N.jsx)(`p`,{style:{fontSize:14,color:`#6b7280`,marginBottom:24,letterSpacing:`-.01em`},children:n.fullName}),(0,N.jsx)(`div`,{className:`history-gallery`,children:n.galleries.map((e,t)=>(0,N.jsx)(`div`,{className:`history-gallery-img`,children:(0,N.jsx)(`img`,{src:e,alt:``})},`${n.id}-gallery-${t}`))}),(0,N.jsx)(`p`,{className:`history-speakers-label`,children:`SPEAKERS`}),(0,N.jsx)(`div`,{className:`history-speakers`,children:n.speakers.map(e=>(0,N.jsxs)(`div`,{className:`speaker-card`,children:[(0,N.jsx)(`div`,{className:`speaker-card-bg`,style:{backgroundImage:`url("${e.bg}")`}}),(0,N.jsx)(`div`,{className:`speaker-card-overlay`}),(0,N.jsxs)(`div`,{className:`speaker-info`,children:[(0,N.jsx)(`div`,{className:`speaker-name`,children:e.name}),(0,N.jsx)(`div`,{className:`speaker-lecture`,children:e.lecture})]})]},`${n.id}-${e.name}`))})]})})]},n.id)})})]}),(0,N.jsxs)(`section`,{className:`cert-section fluid`,children:[(0,N.jsx)(`div`,{className:`cert-bg`}),(0,N.jsx)(`div`,{className:`cert-overlay`}),(0,N.jsxs)(`div`,{className:`cert-inner`,children:[(0,N.jsxs)(`div`,{className:`cert-card`,children:[(0,N.jsx)(`div`,{className:`cert-photo`,children:(0,N.jsx)(`div`,{className:`cert-photo-img`,style:{backgroundImage:`url("${P(`certificate-membership.png`)}")`}})}),(0,N.jsxs)(`div`,{className:`cert-card-body`,children:[(0,N.jsx)(`h3`,{children:`CAIO 수료 및 멤버십`}),(0,N.jsxs)(`p`,{children:[`출석률 80% 이상 달성 시,`,(0,N.jsx)(`br`,{}),`최고인공지능경영자 자격증이 발급됩니다.`]})]})]}),(0,N.jsxs)(`div`,{className:`cert-text`,children:[(0,N.jsx)(`p`,{className:`cert-eyebrow`,children:`CERTIFICATE & MEMBERSHIP · CAIO 수료`}),(0,N.jsx)(`h4`,{children:`끝까지 참여하는 이유는 명확합니다.`}),(0,N.jsxs)(`p`,{children:[`단순한 강의가 아닌,`,(0,N.jsx)(`br`,{}),`경영진으로서의 AI 전략 역량을 인증받는 과정입니다.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`br`,{}),`수료 후에는 협회의 든든한 지원과`,(0,N.jsx)(`br`,{}),`국내 최고 수준의 AI C레벨 알럼나이(원우) 네트워크가`,(0,N.jsx)(`br`,{}),`평생의 자산으로 주어집니다.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`br`,{}),`본 과정은 단순한 지식 습득을 넘어,`,(0,N.jsx)(`br`,{}),`실전 AI 역량을 갖춘 리더임을 증명하는 과정입니다.`]})]})]}),(0,N.jsx)(`div`,{className:`reviews-label`,children:`후기`}),(0,N.jsxs)(`div`,{className:`reviews-track-wrap`,children:[(0,N.jsxs)(`div`,{className:`reviews-nav`,children:[(0,N.jsx)(`button`,{className:`rev-btn`,onClick:()=>{a(e=>e===0?Lr.length-1:e-1)},"aria-label":`이전 후기`,children:(0,N.jsx)(hr,{"aria-hidden":`true`})}),(0,N.jsx)(`button`,{className:`rev-btn`,onClick:()=>{a(e=>e===Lr.length-1?0:e+1)},"aria-label":`다음 후기`,children:(0,N.jsx)(mr,{"aria-hidden":`true`})})]}),(0,N.jsx)(`div`,{className:`reviews-track`,children:l.map(e=>(0,N.jsxs)(`div`,{className:`review-card`,children:[(0,N.jsx)(`div`,{className:`review-avatar`,style:{backgroundImage:`url("${e.avatar}")`}}),(0,N.jsx)(`div`,{className:`review-stars`,children:e.stars}),(0,N.jsx)(`p`,{className:`review-text`,children:e.text.split(`
`).map((t,n)=>(0,N.jsxs)(`span`,{children:[t,(0,N.jsx)(`br`,{})]},`${e.author}-${n}`))}),(0,N.jsx)(`div`,{className:`review-author`,children:e.author})]},`${i}-${e.author}`))})]})]}),(0,N.jsxs)(`section`,{className:`press-section fluid`,children:[(0,N.jsx)(`p`,{className:`press-label`,children:`IN THE NEWS · 언론 보도`}),(0,N.jsx)(`div`,{className:`press-grid`,children:Hr.map(e=>(0,N.jsxs)(`a`,{className:`press-card`,href:e.url||void 0,target:e.url?`_blank`:void 0,rel:e.url?`noopener noreferrer`:void 0,style:{cursor:e.url?`pointer`:`default`},children:[(0,N.jsx)(`div`,{className:`press-card-bg`,style:{backgroundImage:`url("${e.bg}")`}}),(0,N.jsx)(`div`,{className:`press-card-overlay`}),(0,N.jsx)(`div`,{className:`press-media`,children:e.media}),(0,N.jsx)(`div`,{className:`press-card-arrow`,children:`↗`}),(0,N.jsxs)(`div`,{className:`press-card-content`,children:[(0,N.jsx)(`div`,{className:`press-title`,children:e.title}),(0,N.jsx)(`div`,{className:`press-date`,children:e.date})]})]},e.title))})]}),(0,N.jsxs)(`section`,{className:`process-section fluid`,children:[(0,N.jsx)(`div`,{className:`process-bg`}),(0,N.jsxs)(`div`,{className:`process-inner`,children:[(0,N.jsx)(`p`,{className:`process-label`,children:`PROCESS`}),(0,N.jsxs)(`h2`,{className:`process-h2`,children:[`신청부터 수료까지,`,(0,N.jsx)(`br`,{}),`5단계 프로세스`]}),(0,N.jsx)(`div`,{className:`process-steps`,children:[{n:`01`,t:`온라인 신청`,d:`신청서 및 재직증명서 등 서류 제출`},{n:`02`,t:`서류 검토`,d:`운영사무국 서류 심사 진행`},{n:`03`,t:`안내 절차`,d:`개별 통지 및 수강료 납부 안내`},{n:`04`,t:`입과 · 수강`,d:`정규 커리큘럼 시작`},{n:`05`,t:`수료 · 자격`,d:`출석률 80% 이상 시 CAIO 자격 부여`}].map(e=>(0,N.jsxs)(`div`,{className:`process-step`,children:[(0,N.jsx)(`div`,{className:`process-num`,children:e.n}),(0,N.jsx)(`h4`,{children:e.t}),(0,N.jsx)(`p`,{children:e.d})]},e.n))})]})]}),(0,N.jsxs)(`section`,{className:`faq-section fluid`,children:[(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label-b`,children:`FAQ`}),(0,N.jsx)(`h2`,{children:`자주 묻는 질문`})]}),(0,N.jsx)(`div`,{className:`faq-list`,children:Pr.map((e,t)=>{let i=n===t;return(0,N.jsxs)(`div`,{className:`faq-item`,children:[(0,N.jsxs)(`button`,{className:`faq-q`,onClick:()=>r(i?null:t),children:[(0,N.jsxs)(`div`,{className:`faq-q-left`,children:[(0,N.jsx)(`span`,{className:`faq-q-badge`,children:`Q.`}),(0,N.jsx)(`span`,{className:`faq-q-text`,children:e.q})]}),(0,N.jsx)(`div`,{className:`faq-icon ${i?`open`:``}`,children:`+`})]}),(0,N.jsx)(`div`,{className:`faq-a ${i?`open`:``}`,children:(0,N.jsx)(`div`,{className:`faq-a-inner`,children:e.a})})]},e.q)})})]}),(0,N.jsxs)(`section`,{className:`city-cards-section fluid`,children:[(0,N.jsxs)(`div`,{className:`wrap`,children:[(0,N.jsx)(`p`,{className:`sec-label-w`,children:`LOCATIONS`}),(0,N.jsxs)(`h2`,{children:[`전국 3개 도시에서`,(0,N.jsx)(`br`,{}),`만날 수 있습니다!`]})]}),(0,N.jsx)(`div`,{className:`city-cards-grid`,children:Ur.map(e=>(0,N.jsxs)(Dn,{className:`city-photo-card`,to:e.to,children:[(0,N.jsx)(`div`,{className:`city-photo-card-bg`,style:{backgroundImage:`url("${e.bg}")`}}),(0,N.jsx)(`div`,{className:`city-photo-card-overlay`}),(0,N.jsxs)(`div`,{className:`city-photo-card-content`,children:[(0,N.jsxs)(`div`,{className:`city-photo-card-tag`,children:[e.cohort,` 운영`]}),(0,N.jsx)(`div`,{className:`city-photo-card-name`,children:e.city}),(0,N.jsx)(`div`,{className:`city-photo-card-sub`,children:e.sub})]}),(0,N.jsx)(`div`,{className:`city-photo-card-arrow`,children:`↗`})]},e.city))})]}),(0,N.jsxs)(`section`,{className:`impact-cta fluid`,children:[(0,N.jsx)(`div`,{className:`impact-cta-bg`}),(0,N.jsx)(`div`,{className:`impact-cta-glow`}),(0,N.jsxs)(`div`,{className:`impact-cta-inner`,children:[(0,N.jsxs)(`div`,{className:`impact-cta-text`,children:[(0,N.jsx)(`p`,{className:`impact-cta-eyebrow`,children:`APPLY NOW · 2026`}),(0,N.jsxs)(`h2`,{className:`impact-cta-h2`,children:[`AI 전략의 주체가 될`,(0,N.jsx)(`br`,{}),`준비가 되셨나요?`]}),(0,N.jsx)(`p`,{className:`impact-cta-sub`,children:`가장 먼저 준비한 리더가 변화를 주도합니다.`})]}),(0,N.jsxs)(`div`,{className:`impact-cta-btns`,children:[(0,N.jsx)(Dn,{className:`impact-btn-primary`,to:`/seoul`,children:`서울 4기`}),(0,N.jsx)(Dn,{className:`impact-btn-outline`,to:`/cheonan`,children:`천안 1기`}),(0,N.jsx)(Dn,{className:`impact-btn-outline`,to:`/gwangju`,children:`광주 2기`})]})]})]}),(0,N.jsx)(`div`,{className:`partner-section`,children:(0,N.jsx)(`div`,{style:{overflow:`hidden`},children:(0,N.jsx)(`div`,{className:`marquee-track`,children:Array.from({length:6}).map((e,t)=>Wr.map((e,n)=>(0,N.jsx)(`div`,{className:`partner-item`,children:(0,N.jsx)(`img`,{className:`partner-logo`,src:e.src,alt:e.alt})},`${t}-${n}`)))})})})]})}function Kr(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(null);return(0,_.useEffect)(()=>{let t=e.current;if(!t)return;let r=t.shadowRoot??t.attachShadow({mode:`open`});r.replaceChildren();let i=document.createElement(`link`);i.rel=`preconnect`,i.href=`https://fonts.googleapis.com`;let a=document.createElement(`link`);a.rel=`preconnect`,a.href=`https://fonts.gstatic.com`,a.crossOrigin=`anonymous`;let o=document.createElement(`link`);o.rel=`stylesheet`,o.href=`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap`;let s=document.createElement(`link`);s.rel=`stylesheet`,s.href=`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css`;let c=document.createElement(`style`);c.textContent=Nr;let l=document.createElement(`div`);return r.append(i,a,o,s,c,l),n(l),()=>{n(null),r.replaceChildren()}},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(wr,{}),(0,N.jsx)(`div`,{style:{height:`64px`},className:`md:hidden`}),(0,N.jsx)(`div`,{style:{height:`106px`},className:`hidden md:block`}),(0,N.jsx)(`div`,{ref:e,style:{display:`block`,minHeight:`100vh`}}),t?(0,ar.createPortal)((0,N.jsx)(Gr,{}),t):null,(0,N.jsx)(br,{})]})}var qr=`/assets/Instructor-su4-01-DccSRuXj.png`,Jr=`/assets/Instructor-su4-02-BKVVWs7v.png`,Yr=`/assets/Instructor-su4-03-Db9vRseq.png`,Xr=`/assets/Instructor-su4-04-e-Szj1Sl.png`,Zr=`/assets/Instructor-su4-05-ClRExFHK.png`,Qr=`/assets/Instructor-su4-06-DgL26kbl.png`,$r=`/assets/Instructor-su4-07-Cq_0HhFB.png`,ei=`/assets/Instructor-su4-08-CRBTumf3.png`,ti=`/assets/Instructor-su4-09-BAldYBZO.png`,ni=`/assets/Instructor-su4-10-BvGpUWd3.png`;function ri(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function ii(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:ri(t[n])&&ri(e[n])&&Object.keys(t[n]).length>0&&ii(e[n],t[n])})}var ai={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function oi(){let e=typeof document<`u`?document:{};return ii(e,ai),e}var si={document:ai,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function ci(){let e=typeof window<`u`?window:{};return ii(e,si),e}function li(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function ui(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function di(e,t=0){return setTimeout(e,t)}function fi(){return Date.now()}function pi(e){let t=ci(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function mi(e,t=`x`){let n=ci(),r,i,a,o=pi(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function hi(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function gi(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function _i(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!gi(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(hi(t[i])&&hi(r[i])?r[i].__swiper__?t[i]=r[i]:_i(t[i],r[i]):!hi(t[i])&&hi(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:_i(t[i],r[i])):t[i]=r[i])}}}return t}function vi(e,t,n){e.style.setProperty(t,n)}function yi({swiper:e,targetPosition:t,side:n}){let r=ci(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function bi(e,t=``){let n=ci(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function xi(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function Si(e,t){let n=ci(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=xi(e,t)),r}function Ci(e){try{console.warn(e);return}catch{}}function wi(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:li(t)),n}function Ti(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Ei(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Di(e,t){return ci().getComputedStyle(e,null).getPropertyValue(t)}function Oi(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function ki(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ai(e,t,n){let r=ci();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}function ji(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function Mi(e,t=``){typeof trustedTypes<`u`?e.innerHTML=trustedTypes.createPolicy(`html`,{createHTML:e=>e}).createHTML(t):e.innerHTML=t}function Ni(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=bi(e.el,`.${r[i]}`)[0];a||(a=wi(`div`,r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Pi(e=``){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,`\\$1`).replace(/ /g,`.`)}`}function Fi({swiper:e,extendParams:t,on:n,emit:r}){let i=`swiper-pagination`;t({pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function s(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(t,n){let{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&(t.classList.add(`${r}-${n}`),t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&t.classList.add(`${r}-${n}-${n}`)))}function l(e,t,n){if(e%=n,t%=n,t===e+1)return`next`;if(t===e-1)return`previous`}function u(t){let n=t.target.closest(Pi(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();let r=Oi(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;let t=l(e.realIndex,r,e.slides.length);t===`next`?e.slideNext():t===`previous`?e.slidePrev():e.slideToLoop(r)}else e.slideTo(r)}function d(){let t=e.rtl,n=e.params.pagination;if(s())return;let i=e.pagination.el;i=ji(i);let l,u,d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,f=e.params.loop?Math.ceil(d/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):e.snapIndex===void 0?(u=e.previousIndex||0,l=e.activeIndex||0):(l=e.snapIndex,u=e.previousSnapIndex),n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,s,d,f;if(n.dynamicBullets&&(a=Ai(r[0],e.isHorizontal()?`width`:`height`,!0),i.forEach(t=>{t.style[e.isHorizontal()?`width`:`height`]=`${a*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&u!==void 0&&(o+=l-(u||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(l-o,0),d=s+(Math.min(r.length,n.dynamicMainBullets)-1),f=(d+s)/2),r.forEach(e=>{let t=[...[``,`-next`,`-next-next`,`-prev`,`-prev-prev`,`-main`].map(e=>`${n.bulletActiveClass}${e}`)].map(e=>typeof e==`string`&&e.includes(` `)?e.split(` `):e).flat();e.classList.remove(...t)}),i.length>1)r.forEach(t=>{let r=Oi(t);r===l?t.classList.add(...n.bulletActiveClass.split(` `)):e.isElement&&t.setAttribute(`part`,`bullet`),n.dynamicBullets&&(r>=s&&r<=d&&t.classList.add(...`${n.bulletActiveClass}-main`.split(` `)),r===s&&c(t,`prev`),r===d&&c(t,`next`))});else{let t=r[l];if(t&&t.classList.add(...n.bulletActiveClass.split(` `)),e.isElement&&r.forEach((e,t)=>{e.setAttribute(`part`,t===l?`bullet-active`:`bullet`)}),n.dynamicBullets){let e=r[s],t=r[d];for(let e=s;e<=d;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(` `));c(e,`prev`),c(t,`next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),o=(a*i-a)/2-f*a,s=t?`right`:`left`;r.forEach(t=>{t.style[e.isHorizontal()?s:`top`]=`${o}px`})}}i.forEach((t,i)=>{if(n.type===`fraction`&&(t.querySelectorAll(Pi(n.currentClass)).forEach(e=>{e.textContent=n.formatFractionCurrent(l+1)}),t.querySelectorAll(Pi(n.totalClass)).forEach(e=>{e.textContent=n.formatFractionTotal(f)})),n.type===`progressbar`){let r;r=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let i=(l+1)/f,a=1,o=1;r===`horizontal`?a=i:o=i,t.querySelectorAll(Pi(n.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}n.type===`custom`&&n.renderCustom?(Mi(t,n.renderCustom(e,l+1,f)),i===0&&r(`paginationRender`,t)):(i===0&&r(`paginationRender`,t),r(`paginationUpdate`,t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](n.lockClass)})}function f(){let t=e.params.pagination;if(s())return;let n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,i=e.pagination.el;i=ji(i);let a=``;if(t.type===`bullets`){let r=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?a+=t.renderBullet.call(e,n,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?`part="bullet"`:``} class="${t.bulletClass}"></${t.bulletElement}>`}t.type===`fraction`&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type===`progressbar`&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(n=>{t.type!==`custom`&&Mi(n,a||``),t.type===`bullets`&&e.pagination.bullets.push(...n.querySelectorAll(Pi(t.bulletClass)))}),t.type!==`custom`&&r(`paginationRender`,i[0])}function p(){e.params.pagination=Ni(e,e.originalParams.pagination,e.params.pagination,{el:`swiper-pagination`});let t=e.params.pagination;if(!t.el)return;let n;typeof t.el==`string`&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el==`string`&&(n=[...document.querySelectorAll(t.el)]),n||=t.el,!(!n||n.length===0)&&(e.params.uniqueNavElements&&typeof t.el==`string`&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.find(t=>ki(t,`.swiper`)[0]===e.el))),Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=ji(n),n.forEach(n=>{t.type===`bullets`&&t.clickable&&n.classList.add(...(t.clickableClass||``).split(` `)),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type===`bullets`&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener(`click`,u),e.enabled||n.classList.add(t.lockClass)}))}function m(){let t=e.params.pagination;if(s())return;let n=e.pagination.el;n&&(n=ji(n),n.forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(n.classList.remove(...(t.clickableClass||``).split(` `)),n.removeEventListener(`click`,u))})),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(` `)))}n(`changeDirection`,()=>{if(!e.pagination||!e.pagination.el)return;let t=e.params.pagination,{el:n}=e.pagination;n=ji(n),n.forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{e.params.pagination.enabled===!1?g():(p(),f(),d())}),n(`activeIndexChange`,()=>{e.snapIndex===void 0&&d()}),n(`snapIndexChange`,()=>{d()}),n(`snapGridLengthChange`,()=>{f(),d()}),n(`destroy`,()=>{m()}),n(`enable disable`,()=>{let{el:t}=e.pagination;t&&(t=ji(t),t.forEach(t=>t.classList[e.enabled?`remove`:`add`](e.params.pagination.lockClass)))}),n(`lock unlock`,()=>{d()}),n(`click`,(t,n)=>{let i=n.target,a=ji(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&a&&a.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;a[0].classList.contains(e.params.pagination.hiddenClass)===!0?r(`paginationShow`):r(`paginationHide`),a.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});let h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=ji(t),t.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),p(),f(),d()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=ji(t),t.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:h,disable:g,render:f,update:d,init:p,destroy:m})}var Ii;function Li(){let e=ci(),t=oi();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function F(){return Ii||=Li(),Ii}var I;function Ri({userAgent:e}={}){let t=F(),n=ci(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function zi(e={}){return I||=Ri(e),I}var Bi;function Vi(){let e=ci(),t=zi(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function Hi(){return Bi||=Vi(),Bi}function Ui({swiper:e,on:t,emit:n}){let r=ci(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function Wi({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=ci(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=ki(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Gi={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Ki(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Di(r,`padding-left`)||0,10)-parseInt(Di(r,`padding-right`)||0,10),n=n-parseInt(Di(r,`padding-top`)||0,10)-parseInt(Di(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function qi(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=bi(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(vi(r,`--swiper-centered-offset-before`,``),vi(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(vi(r,`--swiper-slides-offset-before`,`${m}px`),vi(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),Di(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Ai(i,`width`,!0):Ai(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){vi(r,`--swiper-centered-offset-before`,`${-d[0]}px`),vi(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function Ji(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Yi(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var Xi=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Zi(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),Xi(c,h,n.slideVisibleClass),Xi(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function Qi(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var $i=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function ea(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>bi(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=Ei(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=Ti(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{$i(e,e===c,n.slideActiveClass),$i(e,e===u,n.slideNextClass),$i(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var ta=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},na=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},ra=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&na(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&na(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&na(e,r)};function ia(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function aa(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=ia(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&ra(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function oa(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var sa={updateSize:Ki,updateSlides:qi,updateAutoHeight:Ji,updateSlidesOffset:Yi,updateSlidesProgress:Zi,updateProgress:Qi,updateSlidesClasses:ea,updateActiveIndex:aa,updateClickedSlide:oa};function ca(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=mi(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function la(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function L(){return-this.snapGrid[0]}function ua(){return-this.snapGrid[this.snapGrid.length-1]}function da(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return yi({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var fa={getTranslate:ca,setTranslate:la,minTranslate:L,maxTranslate:ua,translateTo:da};function pa(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function ma({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function ha(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),ma({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function ga(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),ma({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var _a={setTransition:pa,transitionStart:ha,transitionEnd:ga};function va(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return yi({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=Hi().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function ya(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function ba(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function xa(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function Sa(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Ca(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function wa(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(bi(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),di(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var Ta={slideTo:va,slideToLoop:ya,slideNext:ba,slidePrev:xa,slideReset:Sa,slideToClosest:Ca,slideToClickedSlide:wa};function Ea(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{bi(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=bi(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?wi(`swiper-slide`,[r.slideBlankClass]):wi(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):Ci(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):Ci(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function Da({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?Ci(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&Ci("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,E=a&&T-_<y&&!v,D=E?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):D=i;let O=n===`next`||!n,ee=n===`prev`||!n,te=0,k=0,ne=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(ne<x){te=Math.max(x-ne,b);for(let e=0;e<x-ne;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(ne+y>T-x){k=Math.max(ne-(T-x*2),b),E&&(k=Math.max(k,y-T+_+1));for(let e=0;e<k;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),ee&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),O&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&ee||w.length>0&&O)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&ee){if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D+te]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D+Math.ceil(te),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&O)if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D-k]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D-k,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function Oa(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var ka={loopCreate:Ea,loopFix:Da,loopDestroy:Oa};function Aa(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ja(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Ma={setGrabCursor:Aa,unsetGrabCursor:ja};function Na(e,t=this){function n(t){if(!t||t===oi()||t===ci())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function Pa(e,t,n){let r=ci(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function Fa(e){let t=this,n=oi(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){Pa(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!Si(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?Na(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!Pa(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=fi(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function Ia(e){let t=oi(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=fi());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function La(e){let t=this,n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=fi(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=fi(),di(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function Ra(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function za(e){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ba(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function Va(e){let t=this;ta(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update()}function Ha(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var Ua=(e,t)=>{let n=oi(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,Ra,!0):e[l](`observerUpdate`,Ra,!0),i[c](`load`,e.onLoad,{capture:!0}))};function Wa(){let e=this,{params:t}=e;e.onTouchStart=Fa.bind(e),e.onTouchMove=Ia.bind(e),e.onTouchEnd=La.bind(e),e.onDocumentTouchStart=Ha.bind(e),t.cssMode&&(e.onScroll=Ba.bind(e)),e.onClick=za.bind(e),e.onLoad=Va.bind(e),Ua(e,`on`)}function Ga(){Ua(this,`off`)}var Ka={attachEvents:Wa,detachEvents:Ga},qa=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Ja(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=oi(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=qa(e,r),f=qa(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),_i(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function Ya(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=ci(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var Xa={setBreakpoint:Ja,getBreakpoint:Ya};function Za(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function Qa(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Za([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function $a(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var eo={addClasses:Qa,removeClasses:$a};function to(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var no={checkOverflow:to},ro={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function io(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){_i(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){_i(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),_i(t,n)}}var ao={eventsEmitter:Gi,update:sa,translate:fa,transition:_a,slide:Ta,loop:ka,grabCursor:Ma,events:Ka,breakpoints:Xa,checkOverflow:no,classes:eo},oo={},so=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=_i({},r),n&&!r.el&&(r.el=n);let i=oi();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=_i({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=F(),a.device=zi({userAgent:r.userAgent}),a.browser=Hi(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:io(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=_i({},_i({},ro,o),oo,r),a.originalParams=_i({},a.params),a.passedParams=_i({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=Oi(bi(t,`.${n.slideClass}, swiper-slide`)[0]);return Oi(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=bi(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&ta(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):bi(n,r())[0];return!i&&t.params.createElements&&(i=wi(`div`,t.params.wrapperClass),n.append(i),bi(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||Di(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||Di(n,`direction`)===`rtl`),wrongRTL:Di(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?ta(t,e):e.addEventListener(`load`,e=>{ta(t,e.target)})}),ra(t),t.initialized=!0,ra(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),ui(n)),n.destroyed=!0,null)}static extendDefaults(e){_i(oo,e)}static get extendedDefaults(){return oo}static get defaults(){return ro}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(ao).forEach(e=>{Object.keys(ao[e]).forEach(t=>{so.prototype[t]=ao[e][t]})}),so.use([Ui,Wi]);var co=`eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(`.`);function lo(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`&&!e.__swiper__}function uo(e,t){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:lo(t[n])&&lo(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:uo(e[n],t[n]):e[n]=t[n]})}function fo(e={}){return e.navigation&&e.navigation.nextEl===void 0&&e.navigation.prevEl===void 0}function R(e={}){return e.pagination&&e.pagination.el===void 0}function po(e={}){return e.scrollbar&&e.scrollbar.el===void 0}function mo(e=``){let t=e.split(` `).map(e=>e.trim()).filter(e=>!!e),n=[];return t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),n.join(` `)}function z(e=``){return e?e.includes(`swiper-wrapper`)?e:`swiper-wrapper ${e}`:`swiper-wrapper`}function B({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:o,paginationEl:s}){let c=r.filter(e=>e!==`children`&&e!==`direction`&&e!==`wrapperClass`),{params:l,pagination:u,navigation:d,scrollbar:f,virtual:p,thumbs:m}=e,h,g,_,v,y,b,x,S;r.includes(`thumbs`)&&n.thumbs&&n.thumbs.swiper&&!n.thumbs.swiper.destroyed&&l.thumbs&&(!l.thumbs.swiper||l.thumbs.swiper.destroyed)&&(h=!0),r.includes(`controller`)&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(g=!0),r.includes(`pagination`)&&n.pagination&&(n.pagination.el||s)&&(l.pagination||l.pagination===!1)&&u&&!u.el&&(_=!0),r.includes(`scrollbar`)&&n.scrollbar&&(n.scrollbar.el||o)&&(l.scrollbar||l.scrollbar===!1)&&f&&!f.el&&(v=!0),r.includes(`navigation`)&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(y=!0);let C=t=>{e[t]&&(e[t].destroy(),t===`navigation`?(e.isElement&&(e[t].prevEl.remove(),e[t].nextEl.remove()),l[t].prevEl=void 0,l[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(e.isElement&&e[t].el.remove(),l[t].el=void 0,e[t].el=void 0))};r.includes(`loop`)&&e.isElement&&(l.loop&&!n.loop?b=!0:!l.loop&&n.loop?x=!0:S=!0),c.forEach(e=>{if(lo(l[e])&&lo(n[e]))Object.assign(l[e],n[e]),(e===`navigation`||e===`pagination`||e===`scrollbar`)&&`enabled`in n[e]&&!n[e].enabled&&C(e);else{let t=n[e];(t===!0||t===!1)&&(e===`navigation`||e===`pagination`||e===`scrollbar`)?t===!1&&C(e):l[e]=n[e]}}),c.includes(`controller`)&&!g&&e.controller&&e.controller.control&&l.controller&&l.controller.control&&(e.controller.control=l.controller.control),r.includes(`children`)&&t&&p&&l.virtual.enabled?(p.slides=t,p.update(!0)):r.includes(`virtual`)&&p&&l.virtual.enabled&&(t&&(p.slides=t),p.update(!0)),r.includes(`children`)&&t&&l.loop&&(S=!0),h&&m.init()&&m.update(!0),g&&(e.controller.control=l.controller.control),_&&(e.isElement&&(!s||typeof s==`string`)&&(s=document.createElement(`div`),s.classList.add(`swiper-pagination`),s.part.add(`pagination`),e.el.appendChild(s)),s&&(l.pagination.el=s),u.init(),u.render(),u.update()),v&&(e.isElement&&(!o||typeof o==`string`)&&(o=document.createElement(`div`),o.classList.add(`swiper-scrollbar`),o.part.add(`scrollbar`),e.el.appendChild(o)),o&&(l.scrollbar.el=o),f.init(),f.updateSize(),f.setTranslate()),y&&(e.isElement&&((!i||typeof i==`string`)&&(i=document.createElement(`div`),i.classList.add(`swiper-button-next`),Mi(i,e.navigation.arrowSvg),i.part.add(`button-next`),e.el.appendChild(i)),(!a||typeof a==`string`)&&(a=document.createElement(`div`),a.classList.add(`swiper-button-prev`),Mi(a,e.navigation.arrowSvg),a.part.add(`button-prev`),e.el.appendChild(a))),i&&(l.navigation.nextEl=i),a&&(l.navigation.prevEl=a),d.init(),d.update()),r.includes(`allowSlideNext`)&&(e.allowSlideNext=n.allowSlideNext),r.includes(`allowSlidePrev`)&&(e.allowSlidePrev=n.allowSlidePrev),r.includes(`direction`)&&e.changeDirection(n.direction,!1),(b||S)&&e.loopDestroy(),(x||S)&&e.loopCreate(),e.update()}function ho(e={},t=!0){let n={on:{}},r={},i={};uo(n,ro),n._emitClasses=!0,n.init=!1;let a={},o=co.map(e=>e.replace(/_/,``)),s=Object.assign({},e);return Object.keys(s).forEach(s=>{e[s]!==void 0&&(o.indexOf(s)>=0?lo(e[s])?(n[s]={},i[s]={},uo(n[s],e[s]),uo(i[s],e[s])):(n[s]=e[s],i[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]==`function`?t?r[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s])}),[`navigation`,`pagination`,`scrollbar`].forEach(e=>{n[e]===!0&&(n[e]={}),n[e]===!1&&delete n[e]}),{params:n,passedParams:i,rest:a,events:r}}function go({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},o){fo(o)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),R(o)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),po(o)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}function _o(e,t,n,r,i){let a=[];if(!t)return a;let o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){let e=r.map(i),t=n.map(i);e.join(``)!==t.join(``)&&o(`children`),r.length!==n.length&&o(`children`)}return co.filter(e=>e[0]===`_`).map(e=>e.replace(/_/,``)).forEach(n=>{if(n in e&&n in t)if(lo(e[n])&&lo(t[n])){let r=Object.keys(e[n]),i=Object.keys(t[n]);r.length===i.length?(r.forEach(r=>{e[n][r]!==t[n][r]&&o(n)}),i.forEach(r=>{e[n][r]!==t[n][r]&&o(n)})):o(n)}else e[n]!==t[n]&&o(n)}),a}var vo=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit(`_virtualUpdated`),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function bo(e){return e.type&&e.type.displayName&&e.type.displayName.includes(`SwiperSlide`)}function xo(e){let t=[];return _.Children.toArray(e).forEach(e=>{bo(e)?t.push(e):e.props&&e.props.children&&xo(e.props.children).forEach(e=>t.push(e))}),t}function So(e){let t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return _.Children.toArray(e).forEach(e=>{if(bo(e))t.push(e);else if(e.props&&e.props.slot&&n[e.props.slot])n[e.props.slot].push(e);else if(e.props&&e.props.children){let r=xo(e.props.children);r.length>0?r.forEach(e=>t.push(e)):n[`container-end`].push(e)}else n[`container-end`].push(e)}),{slides:t,slots:n}}function V(e,t,n){if(!n)return null;let r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},i=e.isHorizontal()?{[e.rtlTranslate?`right`:`left`]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,l=[];for(let e=s;e<c;e+=1)e>=a&&e<=o&&l.push(t[r(e)]);return l.map((t,n)=>_.cloneElement(t,{swiper:e,style:i,key:t.props.virtualIndex||t.key||`slide-${n}`}))}function Co(e,t){return typeof window>`u`?(0,_.useEffect)(e,t):(0,_.useLayoutEffect)(e,t)}var wo=(0,_.createContext)(null),To=(0,_.createContext)(null),Eo=(0,_.forwardRef)(({className:e,tag:t=`div`,wrapperTag:n=`div`,children:r,onSwiper:i,...a}={},o)=>{let s=!1,[c,l]=(0,_.useState)(`swiper`),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(!1),m=(0,_.useRef)(!1),h=(0,_.useRef)(null),g=(0,_.useRef)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(null),{params:w,passedParams:T,rest:E,events:D}=ho(a),{slides:O,slots:ee}=So(r),te=()=>{p(!f)};Object.assign(w.on,{_containerClasses(e,t){l(t)}});let k=()=>{Object.assign(w.on,D),s=!0;let e={...w};if(delete e.wrapperClass,g.current=new so(e),g.current.virtual&&g.current.params.virtual.enabled){g.current.virtual.slides=O;let e={cache:!1,slides:O,renderExternal:d,renderExternalUpdate:!1};uo(g.current.params.virtual,e),uo(g.current.originalParams.virtual,e)}};h.current||k(),g.current&&g.current.on(`_beforeBreakpoint`,te);let ne=()=>{s||!D||!g.current||Object.keys(D).forEach(e=>{g.current.on(e,D[e])})},re=()=>{!D||!g.current||Object.keys(D).forEach(e=>{g.current.off(e,D[e])})};(0,_.useEffect)(()=>()=>{g.current&&g.current.off(`_beforeBreakpoint`,te)}),(0,_.useEffect)(()=>{!m.current&&g.current&&(g.current.emitSlidesClasses(),m.current=!0)}),Co(()=>{if(o&&(o.current=h.current),h.current)return g.current.destroyed&&k(),go({el:h.current,nextEl:b.current,prevEl:x.current,paginationEl:S.current,scrollbarEl:C.current,swiper:g.current},w),i&&!g.current.destroyed&&i(g.current),()=>{g.current&&!g.current.destroyed&&g.current.destroy(!0,!1)}},[]),Co(()=>{ne();let e=_o(T,v.current,O,y.current,e=>e.key);return v.current=T,y.current=O,e.length&&g.current&&!g.current.destroyed&&B({swiper:g.current,slides:O,passedParams:T,changedParams:e,nextEl:b.current,prevEl:x.current,scrollbarEl:C.current,paginationEl:S.current}),()=>{re()}}),Co(()=>{vo(g.current)},[u]);function ie(){return w.virtual?V(g.current,O,u):O.map((e,t)=>_.cloneElement(e,{swiper:g.current,swiperSlideIndex:t}))}return _.createElement(t,yo({ref:h,className:mo(`${c}${e?` ${e}`:``}`)},E),_.createElement(To.Provider,{value:g.current},ee[`container-start`],_.createElement(n,{className:z(w.wrapperClass)},ee[`wrapper-start`],ie(),ee[`wrapper-end`]),fo(w)&&_.createElement(_.Fragment,null,_.createElement(`div`,{ref:x,className:`swiper-button-prev`}),_.createElement(`div`,{ref:b,className:`swiper-button-next`})),po(w)&&_.createElement(`div`,{ref:C,className:`swiper-scrollbar`}),R(w)&&_.createElement(`div`,{ref:S,className:`swiper-pagination`}),ee[`container-end`]))});Eo.displayName=`Swiper`;var Do=(0,_.forwardRef)(({tag:e=`div`,children:t,className:n=``,swiper:r,zoom:i,lazy:a,virtualIndex:o,swiperSlideIndex:s,...c}={},l)=>{let u=(0,_.useRef)(null),[d,f]=(0,_.useState)(`swiper-slide`),[p,m]=(0,_.useState)(!1);function h(e,t,n){t===u.current&&f(n)}Co(()=>{if(s!==void 0&&(u.current.swiperSlideIndex=s),l&&(l.current=u.current),!(!u.current||!r)){if(r.destroyed){d!==`swiper-slide`&&f(`swiper-slide`);return}return r.on(`_slideClass`,h),()=>{r&&r.off(`_slideClass`,h)}}}),Co(()=>{r&&u.current&&!r.destroyed&&f(r.getSlideClasses(u.current))},[r]);let g={isActive:d.indexOf(`swiper-slide-active`)>=0,isVisible:d.indexOf(`swiper-slide-visible`)>=0,isFullyVisible:d.indexOf(`swiper-slide-fully-visible`)>=0,isPrev:d.indexOf(`swiper-slide-prev`)>=0,isNext:d.indexOf(`swiper-slide-next`)>=0},v=()=>typeof t==`function`?t(g):t;return _.createElement(e,yo({ref:u,className:mo(`${d}${n?` ${n}`:``}`),"data-swiper-slide-index":o,onLoad:()=>{m(!0)}},c),i&&_.createElement(wo.Provider,{value:g},_.createElement(`div`,{className:`swiper-zoom-container`,"data-swiper-zoom":typeof i==`number`?i:void 0},v(),a&&!p&&_.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}}))),!i&&_.createElement(wo.Provider,{value:g},v(),a&&!p&&_.createElement(`div`,{className:`swiper-lazy-preloader`,ref:e=>{e&&(e.lazyPreloaderManaged=!0)}})))});Do.displayName=`SwiperSlide`;function Oo(e){return rr({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M128,140a12,12,0,0,1-12,12H72a12,12,0,0,1,0-24h44A12,12,0,0,1,128,140ZM116,88H72a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm120,79.14V228a12,12,0,0,1-17.95,10.42L196,225.82,174,238.42A12,12,0,0,1,156,228V204H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216a20,20,0,0,1,20,20V88.86a55.87,55.87,0,0,1,0,78.28ZM196,160a32,32,0,1,0-32-32A32,32,0,0,0,196,160Zm-40,20V167.14a56,56,0,0,1,56-92.8V60H44V180Zm56,27.32V181.66a55.87,55.87,0,0,1-32,0v25.66l10.05-5.74a12,12,0,0,1,11.9,0Z`},child:[]}]})(e)}function ko(e){return rr({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z`},child:[]}]})(e)}function Ao(e){return rr({tag:`svg`,attr:{viewBox:`0 0 640 512`},child:[{tag:`path`,attr:{d:`M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z`},child:[]}]})(e)}function jo(e){return rr({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0`},child:[]},{tag:`path`,attr:{d:`M10 7h4`},child:[]},{tag:`path`,attr:{d:`M10 18v4l2 -1l2 1v-4`},child:[]},{tag:`path`,attr:{d:`M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2`},child:[]}]})(e)}function H(e){return rr({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`circle`,attr:{cx:`152`,cy:`184`,r:`72`},child:[]},{tag:`path`,attr:{d:`M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z`},child:[]},{tag:`path`,attr:{d:`M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z`},child:[]},{tag:`circle`,attr:{cx:`340`,cy:`168`,r:`88`},child:[]}]})(e)}function Mo(e){return rr({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeMiterlimit:`10`,strokeWidth:`32`,d:`M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 1 1 316.53-44.49z`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeMiterlimit:`10`,strokeWidth:`32`,d:`M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`m266.71 368.21-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z`},child:[]}]})(e)}var No=`/assets/img-seoul-DtjWc6vs.png`,Po=`/assets/bg-caio-01-9LdYlMGV.jpg`,Fo=`/assets/bg-caio-02-naL5UTgQ.jpg`,Io=`/assets/bg-caio-03-CqFeQAgI.jpg`,Lo={"01":Oo,"02":ko,"03":jo,"04":Mo,"05":Ao,"06":H},Ro=[{num:`01`,title:`CAIO 자격 부여`,desc:`최고위과정 이수와 함께 공식 자격 체계를 경험할 수 있습니다.`},{num:`02`,title:`AI 리더 네트워크`,desc:`광주 지역 리더들과 함께 실행 중심 네트워크를 구축합니다.`},{num:`03`,title:`수료증 제공`,desc:`과정 종료 후 협회 명의 수료증이 제공됩니다.`},{num:`04`,title:`홍보 및 브랜딩 지원`,desc:`과정 참여 기업과 리더의 대외 노출 기회를 넓혀드립니다.`},{num:`05`,title:`실전형 커리큘럼`,desc:`기술 설명보다 실행 기준과 의사결정 관점을 먼저 다룹니다.`},{num:`06`,title:`수료 후 연결`,desc:`과정 종료 이후에도 커뮤니티와 협업 접점이 이어집니다.`}],zo=[{title:`CAIO 자격 부여`,desc:`공식 인증으로 전문성을 증명합니다.`},{title:`협회 프리미엄 혜택`,desc:`회원사 전용 리소스를 활용할 수 있습니다.`},{title:`원우 네트워크`,desc:`이수 이후에도 연결은 계속됩니다.`}],Bo=[{name:`한국인공지능협회`,href:`https://koraia.org/`,src:Ar},{name:`PWC`,href:`https://www.pwc.com/kr`,src:jr}],Vo=[{title:`AI 시대와 리더의 역할 변화`,desc:`AI 도입이 조직과 의사결정 구조에 미치는 영향을 이해하고 리더에게 요구되는 새로운 역할과 관점을 정립합니다.`,Icon:pr},{title:`AX 전환 전략과 기업 설계`,desc:`AI를 도입하는 수준을 넘어 AX 중심의 조직과 비즈니스 구조를 설계하는 방법을 학습합니다.`,Icon:fr},{title:`Agentic AI와 기술 패러다임 이해`,desc:`자율 에이전트와 피지컬 AI 흐름을 기반으로 차세대 AI 기술과 실전 적용 방향을 파악합니다.`,Icon:ur},{title:`현장 중심 AI 적용 사례`,desc:`마케팅, 의사결정 자동화 등 실제 기업 사례를 통해 AI가 어떻게 업무에 적용되는지 구체적으로 확인합니다.`,Icon:cr},{title:`AI 시대 조직·도구·미래 전략`,desc:`조직 설계, AI 도구 활용, 그리고 향후 10년의 변화까지 실행과 전략을 함께 고려한 종합적인 방향을 정리합니다.`,Icon:gr}],Ho={"01":{schedule:`7.16 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"02":{schedule:`7.23 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"03":{schedule:`7.30 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"04":{schedule:`8.6 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"05":{schedule:`8.13 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"06":{schedule:`8.20 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"07":{schedule:`8.27 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"08":{schedule:`9.3 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},"09":{schedule:`9.10 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``},10:{schedule:`9.17 아모레퍼시픽 본사 17층 삼일회계법인 세종홀`,description:``}},Uo=Object.entries(Object.assign({"../assets/img/instructor/seoul-4/Instructor-su4-01.png":qr,"../assets/img/instructor/seoul-4/Instructor-su4-02.png":Jr,"../assets/img/instructor/seoul-4/Instructor-su4-03.png":Yr,"../assets/img/instructor/seoul-4/Instructor-su4-04.png":Xr,"../assets/img/instructor/seoul-4/Instructor-su4-05.png":Zr,"../assets/img/instructor/seoul-4/Instructor-su4-06.png":Qr,"../assets/img/instructor/seoul-4/Instructor-su4-07.png":$r,"../assets/img/instructor/seoul-4/Instructor-su4-08.png":ei,"../assets/img/instructor/seoul-4/Instructor-su4-09.png":ti,"../assets/img/instructor/seoul-4/Instructor-su4-10.png":ni})).sort(([e],[t])=>e.localeCompare(t)).map(([e,t],n)=>({id:n+1,src:t,label:`연사 ${String(n+1).padStart(2,`0`)}`,fileName:e.split(`/`).pop()?.replace(/\.[^.]+$/,``)??`Instructor ${n+1}`,lesson:e.match(/-(\d+)\.[^.]+$/)?.[1]??String(n+1).padStart(2,`0`)}));function Wo(){let e={"--page-primary":`#7460af`},[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!0),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(null),l=e=>{i(e.isBeginning),o(e.isEnd)};return(0,_.useEffect)(()=>{let e=document.querySelectorAll(`.reveal-on-scroll`),t=[],n=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let r=e.target;r.classList.add(`is-visible`);let i=window.getComputedStyle(r),a=i.transitionDelay.split(`,`).map(e=>Number.parseFloat(e)*1e3),o=i.transitionDuration.split(`,`).map(e=>Number.parseFloat(e)*1e3),s=Math.max(...a,0),c=Math.max(...o,0);t.push(window.setTimeout(()=>{r.style.transitionDelay=`0ms`},s+c)),n.unobserve(r)})},{threshold:.18,rootMargin:`0px 0px -8% 0px`});return e.forEach(e=>n.observe(e)),()=>{n.disconnect(),t.forEach(e=>window.clearTimeout(e))}},[]),(0,N.jsxs)(`div`,{style:e,children:[(0,N.jsx)(wr,{}),(0,N.jsxs)(`section`,{className:`relative min-h-screen overflow-hidden pt-16 md:pt-[101px] lg:h-screen`,children:[(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-cover bg-center md:top-[101px]`,style:{backgroundImage:`url(${No})`}}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(180deg,rgba(20,6,30,0.76)_0%,rgba(58,12,87,0.54)_42%,rgba(22,5,34,0.82)_100%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_34%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1080px] items-center px-5 py-12 text-center sm:px-8 sm:py-16 md:min-h-[calc(100svh-101px)]`,children:(0,N.jsxs)(`div`,{className:`w-full`,children:[(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-1 mb-8 text-sm uppercase tracking-[0.25em] text-white/62`,children:`Chief AI Officer`}),(0,N.jsxs)(`h1`,{className:`hero-sequence hero-delay-2 mb-6 text-[44px] font-bold leading-[1.05] text-white/92 sm:mb-8 sm:text-[58px] lg:text-[70px]`,children:[`CAIO IN`,(0,N.jsx)(`br`,{}),`SEOUL 4기`]}),(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-3 mx-auto mb-10 max-w-[760px] text-base text-white/88 sm:mb-12 sm:text-lg`,children:`경영진을 위한 실전 AI 전략 및 거버넌스 최고위과정.`}),(0,N.jsxs)(`a`,{href:`https://survey.koraia.org/public/caio4th`,target:`_blank`,rel:`noreferrer`,className:`hero-sequence hero-delay-4 relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out group outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`수강 신청하기`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]`}),(0,N.jsx)(`span`,{className:`absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300`}),(0,N.jsx)(`span`,{className:`absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300`})]}),(0,N.jsx)(`div`,{className:`hero-sequence hero-delay-5 mx-auto mt-14 max-w-[860px] bg-[rgba(27,9,39,0.3)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px] sm:mt-20 sm:p-8`,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 text-left md:grid-cols-2`,children:[(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsxs)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white`,children:[`일시 및`,(0,N.jsx)(`br`,{}),`장소`]}),(0,N.jsxs)(`div`,{className:`text-sm leading-relaxed text-white/88`,children:[(0,N.jsxs)(`p`,{children:[`2026년 7월 16일 ~ 2026년 9월 17일`,(0,N.jsx)(`br`,{}),`매주 목요일 18:40 ~ 21:00`]}),(0,N.jsx)(`p`,{children:`아모레퍼시픽 본사 17층 삼일회계법인 세종홀`})]})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`문의`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`한국인공지능협회 사무국 02-713-4800`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsx)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium text-white`,children:`신청 마감`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`2026년 6월 30일(화) 까지`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`교육비`}),(0,N.jsxs)(`div`,{className:`text-sm leading-relaxed text-white/88`,children:[(0,N.jsx)(`p`,{className:`text-white`,children:`380만원 (VAT 별도)`}),(0,N.jsx)(`p`,{className:`mt-1 text-xs text-white/64`,children:`5월 6일 ~ 5월 8일 AI EXPO KOREA 기간 내 등록 신청 시 20% 할인`})]})]})]})})]})}),(0,N.jsx)(`div`,{className:`hidden md:block`,children:(0,N.jsxs)(`button`,{type:`button`,onClick:()=>{document.getElementById(`hero-next-section`)?.scrollIntoView({behavior:`smooth`,block:`start`})},className:`hero-scroll-indicator hero-sequence hero-delay-5 border-0 bg-transparent p-0`,"aria-label":`다음 섹션으로 스크롤`,children:[(0,N.jsx)(`span`,{className:`hero-scroll-mouse`,children:(0,N.jsx)(`span`,{className:`hero-scroll-wheel`})}),(0,N.jsx)(`span`,{className:`hero-scroll-text`,children:`SCROLL`})]})})]}),(0,N.jsxs)(`section`,{id:`hero-next-section`,className:`relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:h-[700px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Po})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto flex min-h-[560px] max-w-[1080px] items-center justify-center px-5 py-16 text-center sm:min-h-[640px] sm:px-8 lg:h-full lg:min-h-0`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-soft`,style:{transitionDelay:`180ms`},children:[(0,N.jsx)(`h2`,{className:`mb-5 text-[34px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]`,children:`무엇이 이들을 움직였을까요?`}),(0,N.jsxs)(`p`,{className:`mt-8 text-base font-semibold leading-relaxed text-white/90 sm:mt-12 sm:text-xl`,children:[`AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.`,(0,N.jsx)(`br`,{}),`그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.`]})]})})]}),(0,N.jsx)(`section`,{className:`bg-white py-20 sm:py-24 lg:py-32`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--page-primary)]`,children:`Reason`}),(0,N.jsxs)(`div`,{className:`mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-center`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-black md:w-1/2 md:text-[42px]`,children:[`CAIO 최고위과정을`,(0,N.jsx)(`br`,{}),`선택해야 하는 이유.`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-base leading-relaxed text-black md:w-1/2 md:pt-2`,children:[`인재 부족, 전략 부재, 실행 지연.`,(0,N.jsx)(`br`,{}),`이 문제는 개인이 아닌 사회 구조의 문제입니다.`]})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:Ro.map(e=>(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-card rounded-2xl border border-gray-100 bg-white p-7`,style:{transitionDelay:`${Number(e.num)*95}ms`},children:[(0,N.jsxs)(`div`,{className:`mb-5 flex items-start justify-between gap-4`,children:[(0,N.jsxs)(`p`,{className:`text-sm font-semibold text-[var(--page-primary)]`,children:[`혜택 `,e.num]}),(()=>{let t=Lo[e.num];return(0,N.jsx)(`span`,{className:`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(203,93,255,0.08)] text-[var(--page-primary)]`,children:(0,N.jsx)(t,{className:`text-[22px]`})})})()]}),(0,N.jsx)(`h3`,{className:`mb-3 text-xl font-bold text-black`,children:e.title}),(0,N.jsx)(`p`,{className:`text-sm leading-relaxed text-gray-500`,children:e.desc})]},e.num))})]})}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`div`,{className:`bg-gradient-to-b from-[white] to-[#EADFF9] px-5 pb-20 pt-14 text-center sm:px-8 sm:pb-28 sm:pt-16`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`span`,{className:`mb-7 inline-block rounded-full border border-[#7460af] bg-transparent px-5 py-2 text-sm font-semibold text-[#7460af]`,children:`Special Point`}),(0,N.jsx)(`h2`,{className:`text-[30px] font-bold text-[#7460af] sm:text-[36px]`,children:`네트워킹으로 완성되는 경험`})]})}),(0,N.jsx)(`div`,{className:`bg-[#F5F6FA] pb-20 pt-16 sm:pt-[120px]`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto -mt-6 flex max-w-[1080px] flex-col gap-10 px-5 sm:-mt-10 sm:px-8 lg:flex-row lg:items-start lg:gap-16`,children:[(0,N.jsxs)(`div`,{className:`flex-1 pt-0 lg:pt-10`,children:[(0,N.jsx)(`h3`,{className:`mb-2 text-[24px] font-bold text-gray-800 sm:text-[28px]`,children:`평균 출석률`}),(0,N.jsx)(`p`,{className:`mb-8 text-[38px] font-bold leading-none text-[#7460af] sm:mb-10 sm:text-[46px]`,children:`98.8%`}),(0,N.jsx)(`p`,{className:`mb-8 text-base text-gray-700 sm:mb-10 sm:text-lg`,children:`끝까지 참여하는 이유는 명확합니다.`}),(0,N.jsxs)(`p`,{className:`text-base leading-relaxed text-gray-400`,children:[`출석률 80% 이상 시`,(0,N.jsx)(`br`,{}),`한국인공지능협회 협회장 명의의 이수증이 수여됩니다.`]})]}),(0,N.jsx)(`div`,{className:`w-full shrink-0 pt-0 lg:w-auto lg:pt-10`,children:(0,N.jsxs)(`a`,{href:`/files/img-su4-poster.png`,download:`CAIO_IN_SEOUL_4TH.png`,className:`poster-card group relative m-auto block h-[260px] w-full max-w-[380px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 text-[#2c1838] sm:h-[280px] sm:p-8`,children:[(0,N.jsx)(`div`,{className:`absolute -right-[72px] -top-[72px] z-0 h-36 w-36 rounded-full bg-[var(--page-primary)] transition-transform duration-500 group-hover:scale-[8]`}),(0,N.jsxs)(`div`,{className:`relative z-10 flex h-full flex-col justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#8f6da6] transition-colors duration-500 group-hover:text-white/80`,children:`Brochure`}),(0,N.jsxs)(`h3`,{className:`w-full text-[28px] font-bold leading-tight text-[#2c1838] transition-colors duration-500 group-hover:text-white sm:text-[32px]`,children:[`CAIO IN SEOUL`,(0,N.jsx)(`br`,{}),`4TH`]})]}),(0,N.jsxs)(`span`,{className:`absolute bottom-8 left-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--page-primary)] transition-colors duration-500 group-hover:text-white`,children:[(0,N.jsx)(`span`,{children:`포스터 다운로드하기`}),(0,N.jsx)(_r,{className:`text-base`})]})]})]})})]})})]}),(0,N.jsx)(`section`,{className:`bg-[#fcf9ff] py-20 sm:py-24`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-xs uppercase tracking-[0.25em] text-gray-800`,children:`Curriculum`}),(0,N.jsxs)(`div`,{className:`mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-center md:justify-between md:gap-8`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-gray-800 md:w-1/2 md:text-[42px]`,children:[`이번`,(0,N.jsx)(`br`,{}),`커리큘럼은요`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-left text-base leading-relaxed text-gray-800 md:w-1/2 md:pt-3 md:text-lg`,children:[`전략부터 실행까지,`,(0,N.jsx)(`br`,{}),`현장에서 바로 쓰이는 AI를 다룹니다.`]})]}),(0,N.jsxs)(`div`,{className:`mb-20 px-6 py-10 md:px-10`,children:[(0,N.jsxs)(`div`,{className:`relative hidden md:block`,children:[(0,N.jsx)(`div`,{className:`absolute left-0 right-0 top-4 h-4 rounded-full bg-gray-200`}),(0,N.jsx)(`div`,{className:`absolute left-0 top-4 h-4 rounded-full bg-[var(--page-primary)] transition-[width] duration-300 ease-out`,style:{width:s===null?`0%`:`${(s+.5)/Vo.length*100}%`}}),(0,N.jsx)(`div`,{className:`grid grid-cols-5 gap-0`,children:Vo.map((e,t)=>(0,N.jsxs)(`div`,{className:`group relative min-w-0`,onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:[(0,N.jsx)(`div`,{className:`mb-5 flex justify-center`,children:(0,N.jsx)(`div`,{className:`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(134,105,148,0.08)] bg-white text-[var(--page-primary)] shadow-[0_10px_24px_rgba(134,105,148,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(134,105,148,0.24)] group-hover:shadow-[0_16px_32px_rgba(134,105,148,0.14)]`,children:(0,N.jsx)(e.Icon,{className:`text-[20px]`})})}),(0,N.jsx)(`h4`,{className:`mx-auto max-w-[220px] text-center text-sm font-semibold leading-6 text-gray-600 transition-colors duration-300 group-hover:text-[var(--page-primary)]`,children:e.title}),(0,N.jsx)(`div`,{className:`pointer-events-none absolute top-[94px] z-20 w-[190px] rounded-2xl border border-[rgba(134,105,148,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_18px_36px_rgba(134,105,148,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 ${t===0?`left-0`:t===Vo.length-1?`right-0`:`left-1/2 -translate-x-1/2`}`,children:(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})})]},e.title))})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:hidden`,children:Vo.map(e=>(0,N.jsxs)(`div`,{className:`rounded-[22px] border border-[rgba(134,105,148,0.12)] bg-white p-5`,children:[(0,N.jsxs)(`div`,{className:`mb-3 flex items-center gap-3`,children:[(0,N.jsx)(`span`,{className:`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(134,105,148,0.08)] text-[var(--page-primary)]`,children:(0,N.jsx)(e.Icon,{className:`text-[18px]`})}),(0,N.jsx)(`h4`,{className:`text-base font-bold text-gray-900`,children:e.title})]}),(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})]},e.title))})]}),(0,N.jsxs)(`div`,{className:`mt-20 sm:mt-24 lg:mt-32`,children:[(0,N.jsx)(`div`,{className:`mb-10 flex items-end justify-center gap-8`,children:(0,N.jsx)(`h3`,{className:`text-center text-[24px] font-semibold leading-tight text-gray-900 sm:text-[28px]`,children:`이번 과정을 함께할 연사들`})}),(0,N.jsxs)(`div`,{className:`relative overflow-hidden px-2 py-8 sm:px-8 sm:py-12`,children:[!r&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slidePrev(),className:`absolute left-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#8b69a4] transition-colors duration-300 hover:text-[#5d1f82] lg:flex`,"aria-label":`이전 연사 보기`,children:(0,N.jsx)(hr,{size:24})}),!a&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slideNext(),className:`absolute right-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#8b69a4] transition-colors duration-300 hover:text-[#5d1f82] lg:flex`,"aria-label":`다음 연사 보기`,children:(0,N.jsx)(mr,{size:24})}),(0,N.jsx)(Eo,{className:`instructor-swiper`,modules:[Fi],pagination:{clickable:!0},onSwiper:e=>{n(e),l(e)},onSlideChange:l,speed:900,slidesPerView:1.15,slidesPerGroup:1,spaceBetween:18,roundLengths:!0,watchOverflow:!0,breakpoints:{640:{slidesPerView:2.1,spaceBetween:20},900:{slidesPerView:3,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:24}},children:Uo.map(e=>(0,N.jsx)(Do,{children:(0,N.jsxs)(`article`,{className:`group relative h-full bg-transparent`,children:[(0,N.jsxs)(`span`,{className:`mb-5 inline-flex border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[rgba(15,24,45,0.78)]`,children:[e.lesson,`강`]}),(0,N.jsx)(`p`,{className:`mb-4 px-1 text-sm font-medium leading-6 text-[rgba(15,24,45,0.88)] sm:mb-6`,children:Ho[e.lesson]?.schedule??``}),(0,N.jsx)(`div`,{className:`speaker-card relative flex items-center justify-center overflow-hidden rounded-[10px]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.label,decoding:`async`,className:`max-h-full max-w-full object-contain`})}),(0,N.jsx)(`p`,{className:`mt-5 px-1 text-sm leading-6 text-[rgba(15,24,45,0.78)]`,children:Ho[e.lesson]?.description??``})]})},e.id))}),(0,N.jsxs)(`p`,{className:`mt-12 text-left text-sm leading-7 tracking-[0.02em] text-[#949494]`,children:[`* 커리큘럼 내용과 일정은 변경될 수 있습니다.`,(0,N.jsx)(`br`,{}),`* 외부 행사 연계, 야유회 등의 네트워크 활동이 포함될 수 있습니다.`]})]})]})]})}),(0,N.jsxs)(`section`,{className:`relative overflow-hidden py-20 sm:py-24`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Fo})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]`}),(0,N.jsx)(`div`,{className:`perks-ambient-light absolute inset-0`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto max-w-[1080px] px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[780px]`,children:[(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`p`,{className:`mb-8 text-center text-xs uppercase tracking-[0.25em] text-white/70`,children:`Perks`}),(0,N.jsxs)(`h2`,{className:`mb-12 text-center text-[30px] font-bold leading-tight text-white sm:mb-14 sm:text-[36px]`,children:[`단순 교육을 넘어,`,(0,N.jsx)(`br`,{}),`자격 · 네트워크 · 실행 기회를 함께 제공합니다.`]})]}),(0,N.jsx)(`div`,{className:`overflow-hidden`,children:zo.map((e,t)=>(0,N.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-8 px-3 py-8 md:grid-cols-[4fr_6fr] ${t===0?``:`border-t border-white/30`}`,children:[(0,N.jsx)(`h3`,{className:`bg-gradient-to-r from-[#8892aa] via-[#F5F7FA] to-[#8E949F] bg-clip-text text-center text-[24px] font-semibold text-transparent md:text-left`,children:e.title}),(0,N.jsx)(`p`,{className:`text-center text-base leading-relaxed text-white/82 md:text-left`,children:e.desc})]},e.title))})]})})]}),(0,N.jsxs)(`section`,{className:`relative min-h-[520px] overflow-hidden sm:min-h-[620px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Io})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsxs)(`h2`,{className:`mb-6 text-[34px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]`,children:[`미래 비즈니스의`,(0,N.jsx)(`br`,{}),`지휘권을 확보하십시오.`]}),(0,N.jsx)(`p`,{className:`mb-10 text-sm text-white/80 sm:mb-12 sm:text-base`,children:`지금 준비하지 않으면 격차는 더 벌어집니다.`}),(0,N.jsxs)(`a`,{href:`https://survey.koraia.org/public/caio4th`,target:`_blank`,rel:`noreferrer`,className:`group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`지금 신청하세요`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]`}),(0,N.jsx)(`span`,{className:`absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`}),(0,N.jsx)(`span`,{className:`absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`})]})]})})]}),(0,N.jsx)(`section`,{className:`bg-[#F5F6FA] py-20`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsxs)(`div`,{className:`mb-10 text-center`,children:[(0,N.jsx)(`p`,{className:`mb-3 text-left text-xs font-semibold uppercase tracking-[0.24em] text-[var(--page-primary)]`,children:`Organizer`}),(0,N.jsx)(`h2`,{className:`text-left text-[32px] font-bold leading-tight text-[#1d1628]`,children:`주최사`})]}),(0,N.jsx)(`div`,{className:`flex flex-wrap justify-center gap-5 md:justify-start`,children:Bo.map(e=>(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,title:e.name,className:`flex h-[150px] w-full items-center justify-center rounded-xl border border-gray-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--page-primary)]/20 hover:shadow-[0_18px_36px_rgba(134,105,148,0.1)] sm:h-[180px] md:w-[calc((100%-2.5rem)/3)]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.name,className:`max-h-[78px] max-w-full object-contain`})},e.name))})]})}),(0,N.jsx)(br,{})]})}var Go=`/assets/Instructor-gj2-01-BfEgrt3q.png`,Ko=`/assets/Instructor-gj2-02-CsttuUAT.png`,qo=`/assets/Instructor-gj2-03-B2ZMM8WN.png`,Jo=`/assets/Instructor-gj2-05-0z9W_GWD.png`,Yo=`/assets/Instructor-gj2-06-YDGvp0i4.png`,Xo=`/assets/Instructor-gj2-07-C5ip74Qq.png`,Zo=`/assets/Instructor-gj2-08-Dlx5B7aQ.png`,Qo=`/assets/Instructor-gj2-10-C1iceAk0.png`,$o=`/assets/Instructor-gj2-11-ChD3ZEOy.png`,es=`/assets/Instructor-gj2-12-BS7qooye.png`,ts=`/assets/Instructor-gj2-13-CyvARB75.png`,ns=`/assets/img-gwangju-C1lv792N.png`,rs={"01":Oo,"02":ko,"03":jo,"04":Mo,"05":Ao,"06":H},is=[{num:`01`,title:`CAIO 자격 부여`,desc:`최고위과정 이수와 함께 공식 자격 체계를 경험할 수 있습니다.`},{num:`02`,title:`AI 리더 네트워크`,desc:`광주 지역 리더들과 함께 실행 중심 네트워크를 구축합니다.`},{num:`03`,title:`수료증 제공`,desc:`과정 종료 후 협회 명의 수료증이 제공됩니다.`},{num:`04`,title:`홍보 및 브랜딩 지원`,desc:`과정 참여 기업과 리더의 대외 노출 기회를 넓혀드립니다.`},{num:`05`,title:`실전형 커리큘럼`,desc:`기술 설명보다 실행 기준과 의사결정 관점을 먼저 다룹니다.`},{num:`06`,title:`수료 후 연결`,desc:`과정 종료 이후에도 커뮤니티와 협업 접점이 이어집니다.`}],as=[{title:`CAIO 자격 부여`,desc:`공식 인증으로 전문성을 증명합니다.`},{title:`협회 프리미엄 혜택`,desc:`회원사 전용 리소스를 활용할 수 있습니다.`},{title:`원우 네트워크`,desc:`이수 이후에도 연결은 계속됩니다.`}],os=[{title:`AI 개념과 미래 방향 이해`,desc:`피지컬 AI부터 생성형 AI까지 기술의 흐름과 AI가 사회와 산업에 미치는 영향을 구조적으로 이해합니다.`,Icon:pr},{title:`데이터 기반 산업 혁신 사례`,desc:`제조, 디스플레이 등 실제 기업 사례를 통해 데이터와 AI가 어떻게 산업 경쟁력을 만드는지 확인합니다.`,Icon:fr},{title:`현장 중심 AI 적용과 기술 이해`,desc:`공정 데이터, 딥러닝 등 실제 적용 사례를 바탕으로 AI 기술이 현장에서 어떻게 활용되는지 학습합니다.`,Icon:ur},{title:`AX 전환과 기업 적용 전략`,desc:`기업이 겪는 AI 도입의 문제를 분석하고 효과적인 AX 전환 전략과 실행 방안을 정리합니다.`,Icon:cr},{title:`AI 시대 리더십과 미래 전략`,desc:`LLM·Agent 흐름과 인간-AI 협업을 바탕으로 조직과 리더의 의사결정 방향을 설계합니다.`,Icon:gr}],ss={"01":{schedule:`전남대학교 공과대학 코스모스홀`,description:`지역과 대학의 경계를 넘어 대한민국 AI 연구의 기초 체력을 다지는 교육자이자, 차세대 컴퓨팅 환경의 설계자`},"02":{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`독일 언론학 박사이자 청와대 디지털소통센터장을 지낸, 기술과 사회의 접점을 설계하는 국내 최고의 미디어ㆍIT 전략가`},"03":{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`연구소장에서 대표까지, AI 원천 기술의 상용화를 진두지휘하며 국내 최고의 AI 서비스 플랫폼을 구축한 기술 경영인`},"05":{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`AI 시대에 필요한 창의적 사고와 인문학적 리더십을 강의하며, 리더들의 디지털 마인드셋을 일깨우는 경영 전략 멘토`},"06":{schedule:`전남대학교 공과대학 영명홀`,description:`AI 기술의 객관적 검증과 표준을 정립하며, 기업들이 신뢰할 수 있는 AI 비즈니스를 펼칠 수 있도록 돕는 인증 전략 전문가`},"07":{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`데이터 시각화 아티스트이자 기술 행정가로서, 차가운 알고리즘을 인간 중심의 시각 언어로 번역하는 데이터 아트 분야의 선구자`},"08":{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`국내 최초 자바 챔피언 출신으로, AI 학습 데이터의 표준과 신뢰성을 구축하며 데이터 주도형 혁신을 이끄는 기술 리더`},10:{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`AI 기반의 사용자 경험과 상호작용을 연구하며, 지능형 시스템의 인간 중심 설계를 선도하는 AI 교육 및 연구 전문가`},11:{schedule:`전남대학교 공과대학 코스모스홀`,description:`인공지능 알파고를 상대로 '신의 한 수'를 던진 인류 유일의 승리자이자, AI 시대의 서막을 온몸으로 겪어낸 통찰가`},12:{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`인텔 글로벌 부사장 출신의 통찰력으로 반도체 인프라부터 클라우드까지 AI 하드웨어 생태계 전반을 꿰뚫는 ICT 업계의 거목`},13:{schedule:`빛고을창업스테이션 코워킹스페이스2`,description:`차세대 AI 반도체의 시장 가치를 창출하고, 글로벌 테크 기업들과의 전략적 파트너십을 통해 실질적인 성장을 견인하는 수익 창출 전문가`}},cs=Object.entries(Object.assign({"../assets/img/instructor/gwangju-2/Instructor-gj2-01.png":Go,"../assets/img/instructor/gwangju-2/Instructor-gj2-02.png":Ko,"../assets/img/instructor/gwangju-2/Instructor-gj2-03.png":qo,"../assets/img/instructor/gwangju-2/Instructor-gj2-05.png":Jo,"../assets/img/instructor/gwangju-2/Instructor-gj2-06.png":Yo,"../assets/img/instructor/gwangju-2/Instructor-gj2-07.png":Xo,"../assets/img/instructor/gwangju-2/Instructor-gj2-08.png":Zo,"../assets/img/instructor/gwangju-2/Instructor-gj2-10.png":Qo,"../assets/img/instructor/gwangju-2/Instructor-gj2-11.png":$o,"../assets/img/instructor/gwangju-2/Instructor-gj2-12.png":es,"../assets/img/instructor/gwangju-2/Instructor-gj2-13.png":ts})).sort(([e],[t])=>e.localeCompare(t)).map(([e,t],n)=>({id:n+1,src:t,label:`연사 ${String(n+1).padStart(2,`0`)}`,fileName:e.split(`/`).pop()?.replace(/\.[^.]+$/,``)??`Instructor ${n+1}`,lesson:e.match(/-(\d+)\.[^.]+$/)?.[1]??String(n+1).padStart(2,`0`)}));function ls(){let e={"--page-primary":`#4E5F7E`},[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!0),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(null),l=e=>{i(e.isBeginning),o(e.isEnd)};return(0,_.useEffect)(()=>{let e=document.querySelectorAll(`.reveal-on-scroll`),t=[],n=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let r=e.target;r.classList.add(`is-visible`);let i=window.getComputedStyle(r),a=i.transitionDelay.split(`,`).map(e=>Number.parseFloat(e)*1e3),o=i.transitionDuration.split(`,`).map(e=>Number.parseFloat(e)*1e3),s=Math.max(...a,0),c=Math.max(...o,0);t.push(window.setTimeout(()=>{r.style.transitionDelay=`0ms`},s+c)),n.unobserve(r)})},{threshold:.18,rootMargin:`0px 0px -8% 0px`});return e.forEach(e=>n.observe(e)),()=>{n.disconnect(),t.forEach(e=>window.clearTimeout(e))}},[]),(0,N.jsxs)(`div`,{style:e,children:[(0,N.jsx)(wr,{}),(0,N.jsxs)(`section`,{className:`relative min-h-screen overflow-hidden pt-16 md:pt-[101px] lg:h-screen`,children:[(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-cover bg-center md:top-[101px]`,style:{backgroundImage:`url(${ns})`}}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(180deg,rgba(6,12,28,0.72)_0%,rgba(10,18,40,0.48)_42%,rgba(5,9,22,0.78)_100%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1080px] items-center px-5 py-12 text-center sm:px-8 sm:py-16 md:min-h-[calc(100svh-101px)]`,children:(0,N.jsxs)(`div`,{className:`w-full`,children:[(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-1 mb-8 text-sm uppercase tracking-[0.25em] text-white/62`,children:`Chief AI Officer`}),(0,N.jsxs)(`h1`,{className:`hero-sequence hero-delay-2 mb-6 text-[42px] font-bold leading-[1.05] text-white/90 sm:mb-8 sm:text-[58px] lg:text-[70px]`,children:[`CAIO IN`,(0,N.jsx)(`br`,{}),`GWANGJU 2기`]}),(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-3 mx-auto mb-10 max-w-[720px] text-base text-white/90 sm:mb-12 sm:text-lg`,children:`AI 시대, 의사결정의 기준을 다시 설계합니다.`}),(0,N.jsxs)(`button`,{className:`hero-sequence hero-delay-4 relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out group outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`COMMING SOON`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-tl-lg border-l-1 border-t-1 top-0 left-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-1 border-t-1 top-0 right-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-1 border-b-1 left-0 bottom-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-br-lg border-r-1 border-b-1 right-0 bottom-0`})]}),(0,N.jsx)(`div`,{className:`hero-sequence hero-delay-5 mx-auto mt-14 max-w-[780px] bg-[rgba(10,16,31,0.26)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px] sm:mt-20 sm:p-8`,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 text-left md:grid-cols-2`,children:[(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsx)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white`,children:`예정 일시`}),(0,N.jsx)(`div`,{className:`text-left text-sm leading-relaxed text-white/88`,children:(0,N.jsx)(`p`,{children:`2026년 하반기 예정`})})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`문의`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`062-376-8840`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsx)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium text-white`,children:`신청 마감`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`2026년 하반기 예정`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`참가비`}),(0,N.jsx)(`span`,{className:`text-sm text-white`,children:`380만원 (VAT 포함)`})]})]})})]})}),(0,N.jsx)(`div`,{className:`hidden md:block`,children:(0,N.jsxs)(`button`,{type:`button`,onClick:()=>{document.getElementById(`hero-next-section`)?.scrollIntoView({behavior:`smooth`,block:`start`})},className:`hero-scroll-indicator hero-sequence hero-delay-5 border-0 bg-transparent p-0`,"aria-label":`다음 섹션으로 스크롤`,children:[(0,N.jsx)(`span`,{className:`hero-scroll-mouse`,children:(0,N.jsx)(`span`,{className:`hero-scroll-wheel`})}),(0,N.jsx)(`span`,{className:`hero-scroll-text`,children:`SCROLL`})]})})]}),(0,N.jsxs)(`section`,{id:`hero-next-section`,className:`relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:h-[700px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Po})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto flex min-h-[560px] max-w-[1080px] items-center justify-center px-5 py-16 text-center sm:min-h-[640px] sm:px-8 lg:h-full lg:min-h-0`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-soft`,style:{transitionDelay:`180ms`},children:[(0,N.jsx)(`h2`,{className:`mb-5 text-[34px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]`,children:`무엇이 이들을 움직였을까요?`}),(0,N.jsxs)(`p`,{className:`mt-8 text-base font-semibold leading-relaxed text-white/90 sm:mt-12 sm:text-xl`,children:[`AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.`,(0,N.jsx)(`br`,{}),`그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.`]})]})})]}),(0,N.jsx)(`section`,{className:`bg-white py-20 sm:py-24 lg:py-32`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--page-primary)]`,children:`Reason`}),(0,N.jsxs)(`div`,{className:`mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-center`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-black md:w-1/2 md:text-[42px]`,children:[`CAIO 최고위과정을`,(0,N.jsx)(`br`,{}),`선택해야 하는 이유.`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-base leading-relaxed text-black md:w-1/2 md:pt-2`,children:[`인재 부족, 전략 부재, 실행 지연.`,(0,N.jsx)(`br`,{}),`이 문제는 개인이 아닌 사회 구조의 문제입니다.`]})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:is.map(e=>(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-card rounded-2xl border border-gray-100 bg-white p-7`,style:{transitionDelay:`${Number(e.num)*95}ms`},children:[(0,N.jsxs)(`div`,{className:`mb-5 flex items-start justify-between gap-4`,children:[(0,N.jsxs)(`p`,{className:`text-sm font-semibold text-[var(--page-primary)]`,children:[`혜택 `,e.num]}),(()=>{let t=rs[e.num];return(0,N.jsx)(`span`,{className:`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(78,95,126,0.08)] text-[var(--page-primary)]`,children:(0,N.jsx)(t,{className:`text-[22px]`})})})()]}),(0,N.jsx)(`h3`,{className:`mb-3 text-xl font-bold text-black`,children:e.title}),(0,N.jsx)(`p`,{className:`text-sm leading-relaxed text-gray-500`,children:e.desc})]},e.num))})]})}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`div`,{className:`bg-gradient-to-b from-[white] to-[#AFC1FF] pt-16 pb-28 text-center`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`span`,{className:`mb-7 inline-block rounded-full border border-[var(--page-primary)] bg-transparent px-5 py-2 text-sm font-semibold text-[var(--page-primary)]`,children:`Special Point`}),(0,N.jsx)(`h2`,{className:`text-[30px] font-bold text-[var(--page-primary)] sm:text-[36px]`,children:`네트워킹으로 완성되는 경험`})]})}),(0,N.jsx)(`div`,{className:`bg-[#F5F6FA] pb-20 pt-[104px] sm:pt-[120px]`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto -mt-10 flex max-w-[1080px] flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:gap-16`,children:[(0,N.jsxs)(`div`,{className:`flex-1 pt-6 md:pt-10`,children:[(0,N.jsx)(`h3`,{className:`mb-2 text-[24px] font-bold text-gray-800 sm:text-[28px]`,children:`평균 출석률`}),(0,N.jsx)(`p`,{className:`mb-8 text-[40px] font-bold leading-none text-[var(--page-primary)] sm:mb-10 sm:text-[46px]`,children:`98.8%`}),(0,N.jsx)(`p`,{className:`mb-8 text-base text-gray-700 sm:mb-10 sm:text-lg`,children:`끝까지 참여하는 이유는 명확합니다.`}),(0,N.jsxs)(`p`,{className:`text-base leading-relaxed text-gray-400`,children:[`출석률 80% 이상 시`,(0,N.jsx)(`br`,{}),`한국인공지능협회 협회장 명의의 이수증이 수여됩니다.`]})]}),(0,N.jsx)(`div`,{className:`shrink-0 pt-2 md:pt-10`,children:(0,N.jsxs)(`a`,{download:`CAIO_IN_GWANGJU_2기_포스터.jpg`,className:`poster-card group relative m-auto block h-[260px] w-full max-w-[380px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 text-[#23304c] sm:h-[280px] sm:p-8`,children:[(0,N.jsx)(`div`,{className:`absolute -right-[72px] -top-[72px] z-0 h-36 w-36 rounded-full bg-[var(--page-primary)] transition-transform duration-500 group-hover:scale-[8]`}),(0,N.jsxs)(`div`,{className:`relative z-10 flex h-full flex-col justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7a869f] transition-colors duration-500 group-hover:text-white/80`,children:`Brochure`}),(0,N.jsxs)(`h3`,{className:`w-full text-[28px] font-bold leading-tight text-[#23304c] transition-colors duration-500 group-hover:text-white sm:text-[32px]`,children:[`CAIO IN GWANGJU`,(0,N.jsx)(`br`,{}),`2ND`]})]}),(0,N.jsxs)(`span`,{className:`absolute bottom-8 left-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--page-primary)] transition-colors duration-500 group-hover:text-white`,children:[(0,N.jsx)(`span`,{children:`준비 예정입니다.`}),(0,N.jsx)(_r,{className:`text-base`})]})]})]})})]})})]}),(0,N.jsx)(`section`,{className:`bg-[#f4f6ff] py-20 sm:py-24`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-xs uppercase tracking-[0.25em] text-gray-800`,children:`Curriculum`}),(0,N.jsxs)(`div`,{className:`mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-center md:justify-between md:gap-8`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-gray-800 md:w-1/2 md:text-[42px]`,children:[`이번`,(0,N.jsx)(`br`,{}),`커리큘럼은요`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-left text-base leading-relaxed text-gray-800 md:w-1/2 md:pt-3 md:text-lg`,children:[`전략부터 실행까지,`,(0,N.jsx)(`br`,{}),`현장에서 바로 쓰이는 AI를 다룹니다.`]})]}),(0,N.jsxs)(`div`,{className:`px-6 py-10 md:px-10 mb-20`,children:[(0,N.jsxs)(`div`,{className:`relative hidden md:block`,children:[(0,N.jsx)(`div`,{className:`absolute left-0 right-0 top-4 h-4 rounded-full bg-gray-200`}),(0,N.jsx)(`div`,{className:`absolute left-0 top-4 h-4 rounded-full bg-[var(--page-primary)] transition-[width] duration-300 ease-out`,style:{width:s===null?`0%`:`${(s+.5)/os.length*100}%`}}),(0,N.jsx)(`div`,{className:`grid grid-cols-5 gap-0`,children:os.map((e,t)=>(0,N.jsxs)(`div`,{className:`group relative min-w-0`,onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:[(0,N.jsx)(`div`,{className:`mb-5 flex justify-center`,children:(0,N.jsx)(`div`,{className:`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(78,95,126,0.14)] bg-white text-[var(--page-primary)] shadow-[0_10px_24px_rgba(78,95,126,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(78,95,126,0.24)] group-hover:shadow-[0_16px_32px_rgba(78,95,126,0.14)]`,children:(0,N.jsx)(e.Icon,{className:`text-[20px]`})})}),(0,N.jsx)(`h4`,{className:`mx-auto max-w-[220px] text-center text-sm font-semibold leading-6 text-gray-600 transition-colors duration-300 group-hover:text-[var(--page-primary)]`,children:e.title}),(0,N.jsx)(`div`,{className:`pointer-events-none absolute top-[94px] z-20 w-[190px] rounded-2xl border border-[rgba(78,95,126,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_18px_36px_rgba(78,95,126,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 ${t===0?`left-0`:t===os.length-1?`right-0`:`left-1/2 -translate-x-1/2`}`,children:(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})})]},e.title))})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:hidden`,children:os.map(e=>(0,N.jsxs)(`div`,{className:`rounded-[22px] border border-[rgba(78,95,126,0.12)] bg-white p-5`,children:[(0,N.jsxs)(`div`,{className:`mb-3 flex items-center gap-3`,children:[(0,N.jsx)(`span`,{className:`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(78,95,126,0.08)] text-[var(--page-primary)]`,children:(0,N.jsx)(e.Icon,{className:`text-[18px]`})}),(0,N.jsx)(`h4`,{className:`text-base font-bold text-gray-900`,children:e.title})]}),(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})]},e.title))})]}),(0,N.jsxs)(`div`,{className:`mt-20 sm:mt-24 lg:mt-32`,children:[(0,N.jsx)(`div`,{className:`mb-10 flex items-end justify-center gap-8`,children:(0,N.jsx)(`h3`,{className:`text-center text-[24px] font-semibold leading-tight text-gray-900 sm:text-[28px]`,children:`함께할 연사 기획안`})}),(0,N.jsxs)(`div`,{className:`relative overflow-hidden px-2 py-8 sm:px-8 sm:py-12`,children:[!r&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slidePrev(),className:`absolute left-0 top-[42%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex`,"aria-label":`이전 연사 보기`,children:(0,N.jsx)(hr,{size:24})}),!a&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slideNext(),className:`absolute right-0 top-[42%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex`,"aria-label":`다음 연사 보기`,children:(0,N.jsx)(mr,{size:24})}),(0,N.jsx)(Eo,{className:`instructor-swiper`,modules:[Fi],pagination:{clickable:!0},onSwiper:e=>{n(e),l(e)},onSlideChange:l,speed:900,slidesPerView:1.15,slidesPerGroup:1,spaceBetween:18,roundLengths:!0,watchOverflow:!0,breakpoints:{640:{slidesPerView:2.1,spaceBetween:20},900:{slidesPerView:3,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:24}},children:cs.map(e=>(0,N.jsx)(Do,{children:(0,N.jsxs)(`article`,{className:`group relative h-full bg-transparent`,children:[(0,N.jsxs)(`span`,{className:`mb-5 inline-flex border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[rgba(15,24,45,0.78)]`,children:[e.lesson,`강`]}),(0,N.jsx)(`p`,{className:`mb-4 px-1 text-sm font-medium leading-6 text-[rgba(15,24,45,0.88)] sm:mb-6`,children:ss[e.lesson]?.schedule??``}),(0,N.jsx)(`div`,{className:`speaker-card relative flex items-center justify-center overflow-hidden rounded-[10px]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.label,decoding:`async`,className:`max-h-full max-w-full object-contain`})}),(0,N.jsx)(`p`,{className:`mt-5 px-1 text-sm leading-6 text-[rgba(15,24,45,0.78)]`,children:ss[e.lesson]?.description??``})]})},e.id))}),(0,N.jsxs)(`p`,{className:`mt-12 text-left text-sm tracking-[0.02em] leading-7 text-[#949494]`,children:[`* 커리큘럼 내용과 일정은 변경될 수 있습니다.`,(0,N.jsx)(`br`,{}),`* 외부 행사 연계, 야유회 등의 네트워크 활동이 포함될 수 있습니다.`]})]})]})]})}),(0,N.jsxs)(`section`,{className:`relative overflow-hidden py-20 sm:py-24`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Fo})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]`}),(0,N.jsx)(`div`,{className:`perks-ambient-light absolute inset-0`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto max-w-[1080px] px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[780px]`,children:[(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`p`,{className:`mb-8 text-center text-xs uppercase tracking-[0.25em] text-white/70`,children:`Perks`}),(0,N.jsxs)(`h2`,{className:`mb-12 text-center text-[30px] font-bold leading-tight text-white sm:mb-14 sm:text-[36px]`,children:[`단순 교육을 넘어,`,(0,N.jsx)(`br`,{}),`자격 · 네트워크 · 실행 기회를 함께 제공합니다.`]})]}),(0,N.jsx)(`div`,{className:`overflow-hidden`,children:as.map((e,t)=>(0,N.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-8 px-3 py-8 md:grid-cols-[4fr_6fr] ${t===0?``:`border-t border-white/30`}`,children:[(0,N.jsx)(`h3`,{className:`bg-gradient-to-r from-[#8892aa] via-[#F5F7FA] to-[#8E949F] bg-clip-text text-center text-[24px] font-semibold text-transparent md:text-left`,children:e.title}),(0,N.jsx)(`p`,{className:`text-center text-base leading-relaxed text-white/82 md:text-left`,children:e.desc})]},e.title))})]})})]}),(0,N.jsxs)(`section`,{className:`relative min-h-[520px] overflow-hidden sm:min-h-[620px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Io})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsxs)(`h2`,{className:`mb-6 text-[34px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]`,children:[`AI 시대,`,(0,N.jsx)(`br`,{}),`리더가 먼저 바뀌어야 합니다.`]}),(0,N.jsx)(`p`,{className:`mb-10 text-sm text-white/80 sm:mb-12 sm:text-base`,children:`지금 준비하지 않으면 격차는 더 벌어집니다.`}),(0,N.jsxs)(`button`,{className:`group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`광주 CAIO 오픈 예정`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]`}),(0,N.jsx)(`span`,{className:`absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`}),(0,N.jsx)(`span`,{className:`absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`})]})]})})]}),(0,N.jsx)(br,{})]})}var us=`/assets/Instructor-ch-01-B8_rlOuI.png`,ds=`/assets/Instructor-ch-03-BHXNDWII.png`,fs=`/assets/Instructor-ch-04-BVoWawBj.png`,ps=`/assets/Instructor-ch-05-CTMQE2DV.png`,ms=`/assets/Instructor-ch-06-DDMmOsDO.png`,hs=`/assets/Instructor-ch-07-BVvBcXTf.png`,gs=`/assets/Instructor-ch-08-BFsS40CT.png`,_s=`/assets/Instructor-ch-09-CEfzVvch.png`,vs=`/assets/Instructor-ch-10-BKNzLQPW.png`,ys=`/assets/img-cheonan-CZeYvAzA.png`,bs={"01":Oo,"02":ko,"03":jo,"04":Mo,"05":Ao,"06":H},xs=[{num:`01`,title:`CAIO 자격 부여`,desc:`최고위과정 이수와 함께 공식 자격 체계를 경험할 수 있습니다.`},{num:`02`,title:`AI 리더 네트워크`,desc:`광주 지역 리더들과 함께 실행 중심 네트워크를 구축합니다.`},{num:`03`,title:`수료증 제공`,desc:`과정 종료 후 협회 명의 수료증이 제공됩니다.`},{num:`04`,title:`홍보 및 브랜딩 지원`,desc:`과정 참여 기업과 리더의 대외 노출 기회를 넓혀드립니다.`},{num:`05`,title:`실전형 커리큘럼`,desc:`기술 설명보다 실행 기준과 의사결정 관점을 먼저 다룹니다.`},{num:`06`,title:`수료 후 연결`,desc:`과정 종료 이후에도 커뮤니티와 협업 접점이 이어집니다.`}],Ss=[{title:`파이프라인 연계`,desc:`수요발굴-컨설팅-매칭-실증 지원`},{title:`1:1 매칭 연계`,desc:`AI 전문가 자문과 멘토링 경험`},{title:`매칭데이 우선 참여권`,desc:`AI 도입 니즈 기반의 솔루션/파트너 수요-공급 매칭데이 참여권`}],Cs=[{title:`산업별 AI 적용 인사이트`,desc:`제조, 반도체, 디스플레이 등 실제 기업 사례를 통해 AI가 어떻게 적용되는지 이해합니다.`,Icon:pr},{title:`데이터 기반 의사결정 경험`,desc:`공정 데이터, 딥러닝, 온톨로지 기반 분석까지 실무에서 활용 가능한 접근 방식을 학습합니다.`,Icon:fr},{title:`최신 AI 트렌드와 전략`,desc:`LLM, Agentic AI 등 최신 기술 흐름을 기반으로 조직에 적용할 수 있는 전략을 정리합니다.`,Icon:gr},{title:`실행 중심 네트워크`,desc:`각 분야 리더들과의 교류를 통해 단순 학습을 넘어 실제 협업 기회를 만듭니다.`,Icon:sr}],ws=[{name:`충청남도`,href:`https://www.chungnam.go.kr`,src:Er},{name:`천안시`,href:`https://www.cheonan.go.kr`,src:Tr}],Ts=[{name:`한국산업단지공단`,href:`https://www.kicox.or.kr/`,src:kr},{name:`충남테크노파크`,href:`https://www.ctp.or.kr/`,src:Dr},{name:`한국인공지능협회`,href:`https://koraia.org/`,src:Ar}],Es={"01":{schedule:`4.29 충남지식산업센터 2층 대회의실`},"03":{schedule:`5.13 충남지식산업센터 2층 대회의실`},"04":{schedule:`5.20 충남지식산업센터 2층 대회의실`},"05":{schedule:`5.27 충남지식산업센터 2층 대회의실`},"06":{schedule:`6.10 충남지식산업센터 2층 대회의실`},"07":{schedule:`6.17 충남지식산업센터 2층 대회의실`},"08":{schedule:`6.24 충남지식산업센터 2층 대회의실`},"09":{schedule:`7.1 충남지식산업센터 2층 대회의실`},10:{schedule:`7.8 충남지식산업센터 2층 대회의실`}},Ds=Object.entries(Object.assign({"../assets/img/instructor/cheonan/Instructor-ch-01.png":us,"../assets/img/instructor/cheonan/Instructor-ch-03.png":ds,"../assets/img/instructor/cheonan/Instructor-ch-04.png":fs,"../assets/img/instructor/cheonan/Instructor-ch-05.png":ps,"../assets/img/instructor/cheonan/Instructor-ch-06.png":ms,"../assets/img/instructor/cheonan/Instructor-ch-07.png":hs,"../assets/img/instructor/cheonan/Instructor-ch-08.png":gs,"../assets/img/instructor/cheonan/Instructor-ch-09.png":_s,"../assets/img/instructor/cheonan/Instructor-ch-10.png":vs})).sort(([e],[t])=>e.localeCompare(t)).map(([e,t],n)=>({id:n+1,src:t,path:e,label:`연사 ${String(n+1).padStart(2,`0`)}`,fileName:e.split(`/`).pop()?.replace(/\.[^.]+$/,``)??`Instructor ${n+1}`,lesson:e.match(/-(\d+)\.[^.]+$/)?.[1]??String(n+1).padStart(2,`0`)})).filter(e=>e.fileName.startsWith(`Instructor-ch-`)&&Es[e.lesson]);function Os(){let e={"--page-primary":`#093872`},[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!0),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(null),l=e=>{i(e.isBeginning),o(e.isEnd)};return(0,_.useEffect)(()=>{let e=document.body.style.backgroundColor;return document.body.style.backgroundColor=`#ffffff`,()=>{document.body.style.backgroundColor=e}},[]),(0,_.useEffect)(()=>{let e=document.querySelectorAll(`.reveal-on-scroll`),t=[],n=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let r=e.target;r.classList.add(`is-visible`);let i=window.getComputedStyle(r),a=i.transitionDelay.split(`,`).map(e=>Number.parseFloat(e)*1e3),o=i.transitionDuration.split(`,`).map(e=>Number.parseFloat(e)*1e3),s=Math.max(...a,0),c=Math.max(...o,0);t.push(window.setTimeout(()=>{r.style.transitionDelay=`0ms`},s+c)),n.unobserve(r)})},{threshold:.18,rootMargin:`0px 0px -8% 0px`});return e.forEach(e=>n.observe(e)),()=>{n.disconnect(),t.forEach(e=>window.clearTimeout(e))}},[]),(0,N.jsxs)(`div`,{style:e,children:[(0,N.jsx)(wr,{variant:`light`}),(0,N.jsxs)(`section`,{className:`relative min-h-screen overflow-hidden pt-16 md:pt-[101px] lg:h-screen`,children:[(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-cover bg-center md:top-[101px]`,style:{backgroundImage:`url(${ys})`}}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(180deg,rgba(6,12,28,0.72)_0%,rgba(10,18,40,0.48)_42%,rgba(5,9,22,0.78)_100%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 top-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%)] md:top-[101px]`}),(0,N.jsx)(`div`,{className:`relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1080px] items-center px-5 py-12 text-center sm:px-8 sm:py-16 md:min-h-[calc(100svh-101px)]`,children:(0,N.jsxs)(`div`,{className:`w-full`,children:[(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-1 mb-8 text-sm uppercase tracking-[0.25em] text-white/62`,children:`Chief AI Officer`}),(0,N.jsx)(`h1`,{className:`hero-sequence hero-delay-2 mb-6 text-[40px] font-bold leading-[1.05] text-white/90 sm:mb-8 sm:text-[56px] lg:text-[70px]`,children:`기업대표교육 CAIO 과정`}),(0,N.jsx)(`p`,{className:`hero-sequence hero-delay-3 mx-auto mb-10 max-w-[720px] text-base text-white/90 sm:mb-12 sm:text-lg`,children:`충남 천안 AX 얼라이언스`}),(0,N.jsxs)(`button`,{className:`hero-sequence hero-delay-4 relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out group outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`모집 신청 마감`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-tl-lg border-l-1 border-t-1 top-0 left-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-1 border-t-1 top-0 right-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-1 border-b-1 left-0 bottom-0`}),(0,N.jsx)(`span`,{className:`w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-br-lg border-r-1 border-b-1 right-0 bottom-0`})]}),(0,N.jsx)(`div`,{className:`hero-sequence hero-delay-5 mx-auto mt-14 max-w-[780px] bg-[rgba(10,16,31,0.26)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px] sm:mt-20 sm:p-8`,children:(0,N.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 text-left md:grid-cols-2`,children:[(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsx)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white`,children:`일시`}),(0,N.jsxs)(`div`,{className:`text-left text-sm leading-relaxed text-white/88`,children:[(0,N.jsx)(`p`,{children:`2026년 4월 29일 ~ 2026년 7월 8일`}),(0,N.jsx)(`p`,{children:`매주 수요일 16:30 ~ 18:30`}),(0,N.jsx)(`p`,{className:`mt-1 text-xs text-white/64`,children:`단, 5월 7일 목요일, 26' 국제인공지능대전 참관`})]})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`문의`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`한국인공지능협회 사무국 02-713-4800`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38`,children:[(0,N.jsx)(`span`,{className:`min-w-[68px] shrink-0 text-sm font-medium text-white`,children:`장소`}),(0,N.jsx)(`span`,{className:`text-sm text-white/88`,children:`충남지식산업센터 2층 대회의실`})]}),(0,N.jsxs)(`div`,{className:`flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10`,children:[(0,N.jsx)(`span`,{className:`shrink-0 text-sm font-medium text-white`,children:`참석자`}),(0,N.jsxs)(`span`,{className:`text-sm text-white`,children:[`충남천안 산단내 제조기업 CEO 및 임원`,(0,N.jsx)(`br`,{}),`(40명 이내)`]})]})]})})]})}),(0,N.jsx)(`div`,{className:`hidden md:block`,children:(0,N.jsxs)(`button`,{type:`button`,onClick:()=>{document.getElementById(`hero-next-section`)?.scrollIntoView({behavior:`smooth`,block:`start`})},className:`hero-scroll-indicator hero-sequence hero-delay-5 border-0 bg-transparent p-0`,"aria-label":`다음 섹션으로 스크롤`,children:[(0,N.jsx)(`span`,{className:`hero-scroll-mouse`,children:(0,N.jsx)(`span`,{className:`hero-scroll-wheel`})}),(0,N.jsx)(`span`,{className:`hero-scroll-text`,children:`SCROLL`})]})})]}),(0,N.jsxs)(`section`,{id:`hero-next-section`,className:`relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:h-[700px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Po})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto flex min-h-[560px] max-w-[1080px] items-center justify-center px-5 py-16 text-center sm:min-h-[640px] sm:px-8 lg:h-full lg:min-h-0`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-soft`,style:{transitionDelay:`180ms`},children:[(0,N.jsx)(`h2`,{className:`mb-5 text-[34px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]`,children:`무엇이 이들을 움직였을까요?`}),(0,N.jsxs)(`p`,{className:`mt-8 text-base font-semibold leading-relaxed text-white/90 sm:mt-12 sm:text-xl`,children:[`AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.`,(0,N.jsx)(`br`,{}),`그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.`]})]})})]}),(0,N.jsx)(`section`,{className:`bg-white py-20 sm:py-24 lg:py-32`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#1DCFD9]`,children:`Reason`}),(0,N.jsxs)(`div`,{className:`mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-center`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-black md:w-1/2 md:text-[42px]`,children:[`CAIO 최고위과정을`,(0,N.jsx)(`br`,{}),`선택해야 하는 이유.`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-left text-base leading-relaxed text-gray-800 md:w-1/2 md:pt-3 md:text-lg`,children:[`인재 부족, 전략 부재, 실행 지연.`,(0,N.jsx)(`br`,{}),`이 문제는 개인이 아닌 사회 구조의 문제입니다.`]})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:xs.map(e=>(0,N.jsxs)(`div`,{className:`reveal-on-scroll reveal-card rounded-2xl border border-gray-100 bg-white p-7`,style:{transitionDelay:`${Number(e.num)*95}ms`},children:[(0,N.jsxs)(`div`,{className:`mb-5 flex items-start justify-between gap-4`,children:[(0,N.jsxs)(`p`,{className:`text-sm font-semibold text-[var(--page-primary)]`,children:[`혜택 `,e.num]}),(()=>{let t=bs[e.num];return(0,N.jsx)(`span`,{className:`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4fcfe] text-[var(--page-primary)]`,children:(0,N.jsx)(t,{className:`text-[22px]`})})})()]}),(0,N.jsx)(`h3`,{className:`mb-3 text-xl font-bold text-black`,children:e.title}),(0,N.jsx)(`p`,{className:`text-sm leading-relaxed text-gray-500`,children:e.desc})]},e.num))})]})}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`div`,{className:`bg-gradient-to-b from-[white] to-[#1DCFD9] pt-16 pb-28 text-center`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`span`,{className:`mb-7 inline-block rounded-full border border-[var(--page-primary)] bg-transparent px-5 py-2 text-sm font-semibold text-[var(--page-primary)]`,children:`Special Point`}),(0,N.jsx)(`h2`,{className:`text-[30px] font-bold text-[var(--page-primary)] sm:text-[36px]`,children:`네트워킹으로 완성되는 경험`})]})}),(0,N.jsx)(`div`,{className:`bg-[#F2F3F8] pb-20 pt-[104px] sm:pt-[120px]`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto -mt-10 flex max-w-[1080px] flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:gap-16`,children:[(0,N.jsxs)(`div`,{className:`flex-1 pt-6 md:pt-10`,children:[(0,N.jsx)(`h3`,{className:`mb-2 text-[24px] font-bold text-gray-800 sm:text-[28px]`,children:`평균 출석률`}),(0,N.jsx)(`p`,{className:`mb-8 text-[40px] font-bold leading-none text-[var(--page-primary)] sm:mb-10 sm:text-[46px]`,children:`98.8%`}),(0,N.jsx)(`p`,{className:`mb-8 text-base text-gray-700 sm:mb-10 sm:text-lg`,children:`끝까지 참여하는 이유는 명확합니다.`}),(0,N.jsxs)(`p`,{className:`text-base leading-relaxed text-gray-400`,children:[`출석률 80% 이상 시`,(0,N.jsx)(`br`,{}),`한국인공지능협회 협회장 명의의 이수증이 수여됩니다.`]})]}),(0,N.jsx)(`div`,{className:`shrink-0 pt-2 md:pt-10`,children:(0,N.jsxs)(`a`,{href:`/files/img-ch-poster.png`,download:`충남_천안_AX_얼라이언스_기업대표교육_CAIO과정_포스터.png`,className:`poster-card group relative m-auto block h-[260px] w-full max-w-[380px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 text-[#23304c] sm:h-[280px] sm:p-8`,children:[(0,N.jsx)(`div`,{className:`absolute -right-[72px] -top-[72px] z-0 h-36 w-36 rounded-full bg-[#1DCFD9] transition-transform duration-500 group-hover:scale-[8]`}),(0,N.jsxs)(`div`,{className:`relative z-10 flex h-full flex-col justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7a869f] transition-colors duration-500 group-hover:text-white/80`,children:`Brochure`}),(0,N.jsxs)(`h3`,{className:`w-full text-[24px] font-bold leading-tight text-[#23304c] transition-colors duration-500 group-hover:text-white sm:text-[32px]`,children:[`충남 천안 AX 얼라이언스`,(0,N.jsx)(`br`,{}),`기업대표교육 CAIO 과정`]})]}),(0,N.jsxs)(`span`,{className:`absolute bottom-8 left-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--page-primary)] transition-colors duration-500 group-hover:text-white`,children:[(0,N.jsx)(`span`,{children:`포스터 다운로드하기`}),(0,N.jsx)(_r,{className:`text-base`})]})]})]})})]})})]}),(0,N.jsx)(`section`,{className:`bg-[#f5f6f8] py-20 sm:py-24`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsx)(`p`,{className:`mb-6 text-xs uppercase tracking-[0.25em] text-gray-800`,children:`Curriculum`}),(0,N.jsxs)(`div`,{className:`mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-center md:justify-between md:gap-8`,children:[(0,N.jsxs)(`h2`,{className:`w-full text-[32px] font-bold leading-tight text-gray-800 md:w-1/2 md:text-[42px]`,children:[`이번`,(0,N.jsx)(`br`,{}),`커리큘럼은요`]}),(0,N.jsxs)(`p`,{className:`w-full pt-0 text-left text-base leading-relaxed text-gray-800 md:w-1/2 md:pt-3 md:text-lg`,children:[`각 세션은 산업 현장의 실제 사례를 기반으로,`,(0,N.jsx)(`br`,{}),`AI 도입과 실행까지 이어지도록 설계되어 있습니다.`]})]}),(0,N.jsx)(`div`,{children:(0,N.jsx)(`div`,{children:(0,N.jsxs)(`div`,{className:`mb-20 px-6 py-10 md:px-10`,children:[(0,N.jsxs)(`div`,{className:`relative hidden md:block`,children:[(0,N.jsx)(`div`,{className:`absolute left-0 right-0 top-4 h-4 rounded-full bg-gray-200`}),(0,N.jsx)(`div`,{className:`absolute left-0 top-4 h-4 rounded-full bg-[#1DCFD9] transition-[width] duration-300 ease-out`,style:{width:s===null?`0%`:`${(s+.5)/Cs.length*100}%`}}),(0,N.jsx)(`div`,{className:`grid grid-cols-4 gap-0`,children:Cs.map((e,t)=>(0,N.jsxs)(`div`,{className:`group relative min-w-0`,style:{transitionDelay:`${t*70}ms`},onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:[(0,N.jsx)(`div`,{className:`mb-5 flex justify-center`,children:(0,N.jsx)(`div`,{className:`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(9,56,114,0.14)] bg-white text-[var(--page-primary)] shadow-[0_10px_24px_rgba(9,56,114,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(9,56,114,0.24)] group-hover:shadow-[0_16px_32px_rgba(9,56,114,0.14)]`,children:(0,N.jsx)(e.Icon,{className:`text-[20px]`})})}),(0,N.jsx)(`h4`,{className:`mx-auto max-w-[220px] text-center text-sm font-semibold leading-6 text-gray-600 transition-colors duration-300 group-hover:text-[var(--page-primary)]`,children:e.title}),(0,N.jsx)(`div`,{className:`pointer-events-none absolute top-[94px] z-20 w-[220px] rounded-2xl border border-[rgba(9,56,114,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_18px_36px_rgba(9,56,114,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 ${t===0?`left-0`:t===Cs.length-1?`right-0`:`left-1/2 -translate-x-1/2`}`,children:(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})})]},e.title))})]}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-4 md:hidden`,children:Cs.map(e=>(0,N.jsxs)(`div`,{className:`rounded-[22px] border border-[rgba(9,56,114,0.12)] bg-white p-5`,children:[(0,N.jsxs)(`div`,{className:`mb-3 flex items-center gap-3`,children:[(0,N.jsx)(`span`,{className:`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(9,56,114,0.08)] text-[var(--page-primary)]`,children:(0,N.jsx)(e.Icon,{className:`text-[18px]`})}),(0,N.jsx)(`h4`,{className:`text-base font-bold text-gray-900`,children:e.title})]}),(0,N.jsx)(`p`,{className:`text-sm leading-6 text-gray-600`,children:e.desc})]},e.title))})]})})}),(0,N.jsxs)(`div`,{className:`mt-20 sm:mt-24 lg:mt-32`,children:[(0,N.jsx)(`div`,{className:`mb-10 flex items-end justify-center gap-8`,children:(0,N.jsx)(`h3`,{className:`text-center text-[24px] font-semibold leading-tight text-gray-900 sm:text-[28px]`,children:`이번 과정을 함께할 연사들`})}),(0,N.jsxs)(`div`,{className:`relative overflow-hidden px-2 py-8 sm:px-8 sm:py-12`,children:[!r&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slidePrev(),className:`absolute left-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex`,"aria-label":`이전 연사 보기`,children:(0,N.jsx)(hr,{size:24})}),!a&&(0,N.jsx)(`button`,{type:`button`,onClick:()=>t?.slideNext(),className:`absolute right-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex`,"aria-label":`다음 연사 보기`,children:(0,N.jsx)(mr,{size:24})}),(0,N.jsx)(Eo,{className:`instructor-swiper`,modules:[Fi],pagination:{clickable:!0},onSwiper:e=>{n(e),l(e)},onSlideChange:l,speed:900,slidesPerView:1.15,slidesPerGroup:1,spaceBetween:18,roundLengths:!0,watchOverflow:!0,breakpoints:{640:{slidesPerView:2.1,spaceBetween:20},900:{slidesPerView:3,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:24}},children:Ds.map(e=>(0,N.jsx)(Do,{children:(0,N.jsxs)(`article`,{className:`group relative h-full bg-transparent`,children:[(0,N.jsxs)(`span`,{className:`mb-5 inline-flex border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[rgba(15,24,45,0.78)]`,children:[e.lesson,`강`]}),(0,N.jsx)(`p`,{className:`mb-4 px-1 text-sm font-medium leading-6 text-[rgba(15,24,45,0.88)] sm:mb-6`,children:Es[e.lesson]?.schedule??``}),(0,N.jsx)(`div`,{className:`speaker-card relative flex items-center justify-center overflow-hidden rounded-[10px]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.label,decoding:`async`,className:`max-h-full max-w-full object-contain`})})]})},e.id))}),(0,N.jsxs)(`p`,{className:`mt-12 text-left text-sm leading-7 tracking-[0.02em] text-[#949494]`,children:[`* 커리큘럼 내용과 일정은 변경될 수 있습니다.`,(0,N.jsx)(`br`,{}),`* 외부 행사 연계, 야유회 등의 네트워크 활동이 포함될 수 있습니다.`]})]})]})]})}),(0,N.jsxs)(`section`,{className:`relative overflow-hidden py-20 sm:py-24`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Fo})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]`}),(0,N.jsx)(`div`,{className:`perks-ambient-light absolute inset-0`}),(0,N.jsx)(`div`,{className:`relative z-10 mx-auto max-w-[1080px] px-5 sm:px-8`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[780px]`,children:[(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsx)(`p`,{className:`mb-8 text-center text-xs uppercase tracking-[0.25em] text-white/70`,children:`Perks`}),(0,N.jsxs)(`h2`,{className:`mb-12 text-center text-[30px] font-bold leading-tight text-white sm:mb-14 sm:text-[36px]`,children:[`단순 교육을 넘어,`,(0,N.jsx)(`br`,{}),`자격 · 네트워크 · 실행 기회를 함께 제공합니다.`]})]}),(0,N.jsx)(`div`,{className:`overflow-hidden`,children:Ss.map((e,t)=>(0,N.jsxs)(`div`,{className:`grid grid-cols-1 items-center gap-8 px-3 py-8 md:grid-cols-[4fr_6fr] ${t===0?``:`border-t border-white/30`}`,children:[(0,N.jsx)(`h3`,{className:`bg-gradient-to-r from-[#8892aa] via-[#F5F7FA] to-[#8E949F] bg-clip-text text-center text-[24px] font-semibold text-transparent md:text-left`,children:e.title}),(0,N.jsx)(`p`,{className:`text-center text-base leading-relaxed text-white/82 md:text-left`,children:e.desc})]},e.title))})]})})]}),(0,N.jsxs)(`section`,{className:`relative min-h-[520px] overflow-hidden sm:min-h-[620px]`,children:[(0,N.jsx)(`div`,{className:`absolute inset-0 bg-cover bg-center`,style:{backgroundImage:`url(${Io})`}}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]`}),(0,N.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8`,children:(0,N.jsxs)(`div`,{className:`reveal-on-scroll`,children:[(0,N.jsxs)(`h2`,{className:`mb-6 text-[34px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]`,children:[`AI 시대,`,(0,N.jsx)(`br`,{}),`리더가 먼저 바뀌어야 합니다.`]}),(0,N.jsx)(`p`,{className:`mb-10 text-sm text-white/80 sm:mb-12 sm:text-base`,children:`지금 준비하지 않으면 격차는 더 벌어집니다.`}),(0,N.jsxs)(`button`,{className:`group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out outline-offset-4 sm:px-8 sm:py-4 sm:text-base`,children:[(0,N.jsx)(`span`,{className:`relative z-20`,children:`모집 신청 마감`}),(0,N.jsx)(`span`,{className:`absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]`}),(0,N.jsx)(`span`,{className:`absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`}),(0,N.jsx)(`span`,{className:`absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]`}),(0,N.jsx)(`span`,{className:`absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300`})]})]})})]}),(0,N.jsx)(`section`,{className:`bg-[#F2F3F8] py-20`,children:(0,N.jsxs)(`div`,{className:`mx-auto max-w-[1080px] px-5 sm:px-8`,children:[(0,N.jsxs)(`div`,{className:`mb-10 text-center`,children:[(0,N.jsx)(`p`,{className:`mb-3 text-left text-xs font-semibold uppercase tracking-[0.24em] text-[var(--page-primary)]`,children:`Partners`}),(0,N.jsx)(`h2`,{className:`text-left text-[32px] font-bold leading-tight text-[#162033]`,children:`주최사ㆍ주관사`})]}),(0,N.jsxs)(`div`,{className:`space-y-14`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{className:`mb-5 text-left text-[20px] font-semibold leading-tight text-[#162033]`,children:`주최사`}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-5 md:grid-cols-3`,children:ws.map(e=>(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,title:e.name,className:`flex h-[150px] items-center justify-center rounded-xl border border-gray-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--page-primary)]/30 hover:shadow-[0_18px_36px_rgba(9,56,114,0.1)]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.name,className:`max-h-[64px] max-w-full object-contain`})},e.name))})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{className:`mb-5 text-left text-[20px] font-semibold leading-tight text-[#162033]`,children:`주관사`}),(0,N.jsx)(`div`,{className:`grid grid-cols-1 gap-5 md:grid-cols-3`,children:Ts.map(e=>(0,N.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,title:e.name,className:`flex h-[150px] items-center justify-center rounded-xl border border-gray-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--page-primary)]/30 hover:shadow-[0_18px_36px_rgba(9,56,114,0.1)]`,children:(0,N.jsx)(`img`,{src:e.src,alt:e.name,className:`max-h-[64px] max-w-full object-contain`})},e.name))})]})]})]})}),(0,N.jsx)(br,{variant:`light`})]})}function ks(){return(0,N.jsxs)(`div`,{className:`min-h-screen bg-[#0b0f19] text-white`,children:[(0,N.jsx)(wr,{}),(0,N.jsx)(`main`,{className:`flex min-h-[calc(100vh-320px)] items-center justify-center px-5 pt-24 text-center sm:px-8 md:pt-32`,children:(0,N.jsxs)(`div`,{className:`w-full max-w-[720px]`,children:[(0,N.jsx)(`p`,{className:`mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/46`,children:`404 PAGE NOT FOUND`}),(0,N.jsx)(`h1`,{className:`text-[36px] font-bold leading-tight text-white sm:text-[48px]`,children:`요청하신 페이지를 찾을 수 없습니다.`}),(0,N.jsx)(`p`,{className:`mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/72 sm:text-base`,children:`해당 주소는 변경되었거나 삭제된 페이지일 수 있습니다.`}),(0,N.jsx)(`div`,{className:`mt-20 flex flex-col items-center justify-center gap-3 sm:flex-row`,children:(0,N.jsx)(Dn,{to:`/`,className:`inline-flex min-w-[180px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f19] transition-transform duration-200 hover:-translate-y-0.5`,children:`홈으로 이동`})})]})}),(0,N.jsx)(br,{})]})}function As(){let{pathname:e}=ot();return(0,_.useEffect)(()=>{let e=window.history.scrollRestoration;return window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=e}},[]),(0,_.useLayoutEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`auto`})},[e]),null}function js(){return(0,N.jsxs)(wn,{children:[(0,N.jsx)(As,{}),(0,N.jsxs)(It,{children:[(0,N.jsx)(Pt,{path:`/`,element:(0,N.jsx)(Kr,{})}),(0,N.jsx)(Pt,{path:`/seoul`,element:(0,N.jsx)(Wo,{})}),(0,N.jsx)(Pt,{path:`/gwangju`,element:(0,N.jsx)(ls,{})}),(0,N.jsx)(Pt,{path:`/cheonan`,element:(0,N.jsx)(Os,{})}),(0,N.jsx)(Pt,{path:`*`,element:(0,N.jsx)(ks,{})})]})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(_.StrictMode,{children:(0,N.jsx)(js,{})}));