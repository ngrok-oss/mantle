import{d as q}from"/build/_shared/chunk-AN5AQZWP.js";import{a as he}from"/build/_shared/chunk-AFVJBJ7U.js";import{b as ve}from"/build/_shared/chunk-5U3QKZBD.js";import{a as T,b as Ge}from"/build/_shared/chunk-SQBGVNFG.js";import{c as P}from"/build/_shared/chunk-QDA5CGMH.js";var be=P(T(),1),Q=0;function _t(){be.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ye()),document.body.insertAdjacentElement("beforeend",e[1]??ye()),Q++,()=>{Q===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Q--}},[])}function ye(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var O=P(T(),1);var Re=P(Ge(),1),J="focusScope.autoFocusOnMount",$="focusScope.autoFocusOnUnmount",ge={bubbles:!1,cancelable:!0},ze="FocusScope",Xe=O.forwardRef((e,t)=>{let{loop:r=!1,trapped:n=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...u}=e,[o,E]=O.useState(null),b=q(c),v=q(i),s=O.useRef(null),d=ve(t,a=>E(a)),m=O.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;O.useEffect(()=>{if(n){let g=function(_){if(m.paused||!o)return;let C=_.target;o.contains(C)?s.current=C:A(s.current,{select:!0})},h=function(_){if(m.paused||!o)return;let C=_.relatedTarget;C!==null&&(o.contains(C)||A(s.current,{select:!0}))},w=function(_){if(document.activeElement===document.body)for(let N of _)N.removedNodes.length>0&&A(o)};var a=g,l=h,f=w;document.addEventListener("focusin",g),document.addEventListener("focusout",h);let y=new MutationObserver(w);return o&&y.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",h),y.disconnect()}}},[n,o,m.paused]),O.useEffect(()=>{if(o){Se.add(m);let a=document.activeElement;if(!o.contains(a)){let f=new CustomEvent(J,ge);o.addEventListener(J,b),o.dispatchEvent(f),f.defaultPrevented||(Ye($e(xe(o)),{select:!0}),document.activeElement===a&&A(o))}return()=>{o.removeEventListener(J,b),setTimeout(()=>{let f=new CustomEvent($,ge);o.addEventListener($,v),o.dispatchEvent(f),f.defaultPrevented||A(a??document.body,{select:!0}),o.removeEventListener($,v),Se.remove(m)},0)}}},[o,b,v,m]);let x=O.useCallback(a=>{if(!r&&!n||m.paused)return;let l=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,f=document.activeElement;if(l&&f){let g=a.currentTarget,[h,w]=Ze(g);h&&w?!a.shiftKey&&f===w?(a.preventDefault(),r&&A(h,{select:!0})):a.shiftKey&&f===h&&(a.preventDefault(),r&&A(w,{select:!0})):f===g&&a.preventDefault()}},[r,n,m.paused]);return(0,Re.jsx)(he.div,{tabIndex:-1,...u,ref:d,onKeyDown:x})});Xe.displayName=ze;function Ye(e,{select:t=!1}={}){let r=document.activeElement;for(let n of e)if(A(n,{select:t}),document.activeElement!==r)return}function Ze(e){let t=xe(e),r=we(t,e),n=we(t.reverse(),e);return[r,n]}function xe(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{let c=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||c?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function we(e,t){for(let r of e)if(!qe(r,{upTo:t}))return r}function qe(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Qe(e){return e instanceof HTMLInputElement&&"select"in e}function A(e,{select:t=!1}={}){if(e&&e.focus){let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&Qe(e)&&t&&e.select()}}var Se=Je();function Je(){let e=[];return{add(t){let r=e[0];t!==r&&r?.pause(),e=Ee(e,t),e.unshift(t)},remove(t){e=Ee(e,t),e[0]?.resume()}}}function Ee(e,t){let r=[...e],n=r.indexOf(t);return n!==-1&&r.splice(n,1),r}function $e(e){return e.filter(t=>t.tagName!=="A")}var et=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},k=new WeakMap,U=new WeakMap,V={},ee=0,_e=function(e){return e&&(e.host||_e(e.parentNode))},tt=function(e,t){return t.map(function(r){if(e.contains(r))return r;var n=_e(r);return n&&e.contains(n)?n:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return Boolean(r)})},rt=function(e,t,r,n){var c=tt(t,Array.isArray(e)?e:[e]);V[r]||(V[r]=new WeakMap);var i=V[r],u=[],o=new Set,E=new Set(c),b=function(s){!s||o.has(s)||(o.add(s),b(s.parentNode))};c.forEach(b);var v=function(s){!s||E.has(s)||Array.prototype.forEach.call(s.children,function(d){if(o.has(d))v(d);else try{var m=d.getAttribute(n),x=m!==null&&m!=="false",a=(k.get(d)||0)+1,l=(i.get(d)||0)+1;k.set(d,a),i.set(d,l),u.push(d),a===1&&x&&U.set(d,!0),l===1&&d.setAttribute(r,"true"),x||d.setAttribute(n,"true")}catch(f){console.error("aria-hidden: cannot operate on ",d,f)}})};return v(t),o.clear(),ee++,function(){u.forEach(function(s){var d=k.get(s)-1,m=i.get(s)-1;k.set(s,d),i.set(s,m),d||(U.has(s)||s.removeAttribute(n),U.delete(s)),m||s.removeAttribute(r)}),ee--,ee||(k=new WeakMap,k=new WeakMap,U=new WeakMap,V={})}},Mt=function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),c=t||et(e);return c?(n.push.apply(n,Array.from(c.querySelectorAll("[aria-live]"))),rt(n,c,r,"aria-hidden")):function(){return null}};var R=function(){return R=Object.assign||function(t){for(var r,n=1,c=arguments.length;n<c;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},R.apply(this,arguments)};function K(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]]);return r}function Ce(e,t,r){if(r||arguments.length===2)for(var n=0,c=t.length,i;n<c;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var Z=P(T());var S=P(T());var M="right-scroll-bar-position",j="width-before-scroll-bar",te="with-scroll-bars-hidden",re="--removed-body-scroll-bar-size";function G(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}var Oe=P(T());function Pe(e,t){var r=(0,Oe.useState)(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var c=r.value;c!==n&&(r.value=n,r.callback(n,c))}}}})[0];return r.callback=t,r.facade}var z=P(T());var nt=typeof window<"u"?z.useLayoutEffect:z.useEffect,Te=new WeakMap;function ne(e,t){var r=Pe(t||null,function(n){return e.forEach(function(c){return G(c,n)})});return nt(function(){var n=Te.get(r);if(n){var c=new Set(n),i=new Set(e),u=r.current;c.forEach(function(o){i.has(o)||G(o,null)}),i.forEach(function(o){c.has(o)||G(o,u)})}Te.set(r,e)},[e]),r}function ot(e){return e}function at(e,t){t===void 0&&(t=ot);var r=[],n=!1,c={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var u=t(i,n);return r.push(u),function(){r=r.filter(function(o){return o!==u})}},assignSyncMedium:function(i){for(n=!0;r.length;){var u=r;r=[],u.forEach(i)}r={push:function(o){return i(o)},filter:function(){return r}}},assignMedium:function(i){n=!0;var u=[];if(r.length){var o=r;r=[],o.forEach(i),u=r}var E=function(){var v=u;u=[],v.forEach(i)},b=function(){return Promise.resolve().then(E)};b(),r={push:function(v){u.push(v),b()},filter:function(v){return u=u.filter(v),r}}}};return c}function oe(e){e===void 0&&(e={});var t=at(null);return t.options=R({async:!0,ssr:!1},e),t}var Ae=P(T()),Me=function(e){var t=e.sideCar,r=K(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return Ae.createElement(n,R({},r))};Me.isSideCarExport=!0;function ae(e,t){return e.useMedium(t),Me}var X=oe();var ce=function(){},W=S.forwardRef(function(e,t){var r=S.useRef(null),n=S.useState({onScrollCapture:ce,onWheelCapture:ce,onTouchMoveCapture:ce}),c=n[0],i=n[1],u=e.forwardProps,o=e.children,E=e.className,b=e.removeScrollBar,v=e.enabled,s=e.shards,d=e.sideCar,m=e.noIsolation,x=e.inert,a=e.allowPinchZoom,l=e.as,f=l===void 0?"div":l,g=e.gapMode,h=K(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=d,y=ne([r,t]),_=R(R({},h),c);return S.createElement(S.Fragment,null,v&&S.createElement(w,{sideCar:X,removeScrollBar:b,shards:s,noIsolation:m,inert:x,setCallbacks:i,allowPinchZoom:!!a,lockRef:r,gapMode:g}),u?S.cloneElement(S.Children.only(o),R(R({},_),{ref:y})):S.createElement(f,R({},_,{className:E,ref:y}),o))});W.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};W.classNames={fullWidth:j,zeroRight:M};var p=P(T());var L=P(T());var Ne=P(T());var je;var Fe=function(){if(je)return je;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ct(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Fe();return t&&e.setAttribute("nonce",t),e}function it(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function ut(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ie=function(){var e=0,t=null;return{add:function(r){e==0&&(t=ct())&&(it(t,r),ut(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}};var ue=function(){var e=ie();return function(t,r){Ne.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}};var B=function(){var e=ue(),t=function(r){var n=r.styles,c=r.dynamic;return e(n,c),null};return t};var lt={left:0,top:0,right:0,gap:0},le=function(e){return parseInt(e||"",10)||0},st=function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[le(r),le(n),le(c)]},se=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return lt;var t=st(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}};var ft=B(),I="data-scroll-locked",dt=function(e,t,r,n){var c=e.left,i=e.top,u=e.right,o=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(te,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(o,"px ").concat(n,`;
  }
  body[`).concat(I,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(o,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(o,"px ").concat(n,`;
  }
  
  .`).concat(j,` {
    margin-right: `).concat(o,"px ").concat(n,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(j," .").concat(j,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(I,`] {
    `).concat(re,": ").concat(o,`px;
  }
`)},ke=function(){var e=parseInt(document.body.getAttribute(I)||"0",10);return isFinite(e)?e:0},pt=function(){L.useEffect(function(){return document.body.setAttribute(I,(ke()+1).toString()),function(){var e=ke()-1;e<=0?document.body.removeAttribute(I):document.body.setAttribute(I,e.toString())}},[])},fe=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,c=n===void 0?"margin":n;pt();var i=L.useMemo(function(){return se(c)},[c]);return L.createElement(ft,{styles:dt(i,!t,c,r?"":"!important")})};var de=!1;if(typeof window<"u")try{H=Object.defineProperty({},"passive",{get:function(){return de=!0,!0}}),window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch{de=!1}var H,F=de?{passive:!1}:!1;var mt=function(e){return e.tagName==="TEXTAREA"},Ie=function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!mt(e)&&r[t]==="visible")},vt=function(e){return Ie(e,"overflowY")},ht=function(e){return Ie(e,"overflowX")},pe=function(e,t){var r=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var c=Le(e,n);if(c){var i=De(e,n),u=i[1],o=i[2];if(u>o)return!0}n=n.parentNode}while(n&&n!==r.body);return!1},yt=function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},bt=function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},Le=function(e,t){return e==="v"?vt(t):ht(t)},De=function(e,t){return e==="v"?yt(t):bt(t)},gt=function(e,t){return e==="h"&&t==="rtl"?-1:1},We=function(e,t,r,n,c){var i=gt(e,window.getComputedStyle(t).direction),u=i*n,o=r.target,E=t.contains(o),b=!1,v=u>0,s=0,d=0;do{var m=De(e,o),x=m[0],a=m[1],l=m[2],f=a-l-i*x;(x||f)&&Le(e,o)&&(s+=f,d+=x),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!E&&o!==document.body||E&&(t.contains(o)||t===o));return(v&&(c&&Math.abs(s)<1||!c&&u>s)||!v&&(c&&Math.abs(d)<1||!c&&-u>d))&&(b=!0),b};var Y=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Be=function(e){return[e.deltaX,e.deltaY]},He=function(e){return e&&"current"in e?e.current:e},wt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},St=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Et=0,D=[];function Ue(e){var t=p.useRef([]),r=p.useRef([0,0]),n=p.useRef(),c=p.useState(Et++)[0],i=p.useState(B)[0],u=p.useRef(e);p.useEffect(function(){u.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Ce([e.lockRef.current],(e.shards||[]).map(He),!0).filter(Boolean);return a.forEach(function(l){return l.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=p.useCallback(function(a,l){if("touches"in a&&a.touches.length===2)return!u.current.allowPinchZoom;var f=Y(a),g=r.current,h="deltaX"in a?a.deltaX:g[0]-f[0],w="deltaY"in a?a.deltaY:g[1]-f[1],y,_=a.target,C=Math.abs(h)>Math.abs(w)?"h":"v";if("touches"in a&&C==="h"&&_.type==="range")return!1;var N=pe(C,_);if(!N)return!0;if(N?y=C:(y=C==="v"?"h":"v",N=pe(C,_)),!N)return!1;if(!n.current&&"changedTouches"in a&&(h||w)&&(n.current=y),!y)return!0;var me=n.current||y;return We(me,l,a,me==="h"?h:w,!0)},[]),E=p.useCallback(function(a){var l=a;if(!(!D.length||D[D.length-1]!==i)){var f="deltaY"in l?Be(l):Y(l),g=t.current.filter(function(y){return y.name===l.type&&(y.target===l.target||l.target===y.shadowParent)&&wt(y.delta,f)})[0];if(g&&g.should){l.cancelable&&l.preventDefault();return}if(!g){var h=(u.current.shards||[]).map(He).filter(Boolean).filter(function(y){return y.contains(l.target)}),w=h.length>0?o(l,h[0]):!u.current.noIsolation;w&&l.cancelable&&l.preventDefault()}}},[]),b=p.useCallback(function(a,l,f,g){var h={name:a,delta:l,target:f,should:g,shadowParent:Rt(f)};t.current.push(h),setTimeout(function(){t.current=t.current.filter(function(w){return w!==h})},1)},[]),v=p.useCallback(function(a){r.current=Y(a),n.current=void 0},[]),s=p.useCallback(function(a){b(a.type,Be(a),a.target,o(a,e.lockRef.current))},[]),d=p.useCallback(function(a){b(a.type,Y(a),a.target,o(a,e.lockRef.current))},[]);p.useEffect(function(){return D.push(i),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:d}),document.addEventListener("wheel",E,F),document.addEventListener("touchmove",E,F),document.addEventListener("touchstart",v,F),function(){D=D.filter(function(a){return a!==i}),document.removeEventListener("wheel",E,F),document.removeEventListener("touchmove",E,F),document.removeEventListener("touchstart",v,F)}},[]);var m=e.removeScrollBar,x=e.inert;return p.createElement(p.Fragment,null,x?p.createElement(i,{styles:St(c)}):null,m?p.createElement(fe,{gapMode:e.gapMode}):null)}function Rt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}var Ve=ae(X,Ue);var Ke=Z.forwardRef(function(e,t){return Z.createElement(W,R({},e,{ref:t,sideCar:Ve}))});Ke.classNames=W.classNames;var xt=Ke;export{_t as a,Xe as b,Mt as c,xt as d};