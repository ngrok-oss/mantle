import{a as y,d as m,e as F}from"/build/_shared/chunk-AN5AQZWP.js";import{a as E,b as A}from"/build/_shared/chunk-AFVJBJ7U.js";import{a as G}from"/build/_shared/chunk-YBB4Z6DW.js";import{b as P}from"/build/_shared/chunk-5U3QKZBD.js";import{a as b,b as B}from"/build/_shared/chunk-SQBGVNFG.js";import{c as v}from"/build/_shared/chunk-QDA5CGMH.js";var t=v(b(),1);var I=v(b(),1);function S(r,e=globalThis?.document){let n=m(r);I.useEffect(()=>{let o=s=>{s.key==="Escape"&&n(s)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[n,e])}var O=v(B(),1),J="DismissableLayer",D="dismissableLayer.update",Q="dismissableLayer.pointerDownOutside",V="dismissableLayer.focusOutside",N,W=t.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Z=t.forwardRef((r,e)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:d,onDismiss:l,...L}=r,i=t.useContext(W),[u,K]=t.useState(null),f=u?.ownerDocument??globalThis?.document,[,z]=t.useState({}),H=P(e,a=>K(a)),C=Array.from(i.layers),[j]=[...i.layersWithOutsidePointerEventsDisabled].slice(-1),X=C.indexOf(j),w=u?C.indexOf(u):-1,Y=i.layersWithOutsidePointerEventsDisabled.size>0,g=w>=X,q=te(a=>{let p=a.target,x=[...i.branches].some(R=>R.contains(p));!g||x||(s?.(a),d?.(a),a.defaultPrevented||l?.())},f),T=ne(a=>{let p=a.target;[...i.branches].some(R=>R.contains(p))||(c?.(a),d?.(a),a.defaultPrevented||l?.())},f);return S(a=>{w===i.layers.size-1&&(o?.(a),!a.defaultPrevented&&l&&(a.preventDefault(),l()))},f),t.useEffect(()=>{if(u)return n&&(i.layersWithOutsidePointerEventsDisabled.size===0&&(N=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),i.layersWithOutsidePointerEventsDisabled.add(u)),i.layers.add(u),k(),()=>{n&&i.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=N)}},[u,f,n,i]),t.useEffect(()=>()=>{u&&(i.layers.delete(u),i.layersWithOutsidePointerEventsDisabled.delete(u),k())},[u,i]),t.useEffect(()=>{let a=()=>z({});return document.addEventListener(D,a),()=>document.removeEventListener(D,a)},[]),(0,O.jsx)(E.div,{...L,ref:H,style:{pointerEvents:Y?g?"auto":"none":void 0,...r.style},onFocusCapture:y(r.onFocusCapture,T.onFocusCapture),onBlurCapture:y(r.onBlurCapture,T.onBlurCapture),onPointerDownCapture:y(r.onPointerDownCapture,q.onPointerDownCapture)})});Z.displayName=J;var $="DismissableLayerBranch",ee=t.forwardRef((r,e)=>{let n=t.useContext(W),o=t.useRef(null),s=P(e,o);return t.useEffect(()=>{let c=o.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),(0,O.jsx)(E.div,{...r,ref:s})});ee.displayName=$;function te(r,e=globalThis?.document){let n=m(r),o=t.useRef(!1),s=t.useRef(()=>{});return t.useEffect(()=>{let c=l=>{if(l.target&&!o.current){let i=function(){_(Q,n,u,{discrete:!0})};var L=i;let u={originalEvent:l};l.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=i,e.addEventListener("click",s.current,{once:!0})):i()}else e.removeEventListener("click",s.current);o.current=!1},d=window.setTimeout(()=>{e.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),e.removeEventListener("pointerdown",c),e.removeEventListener("click",s.current)}},[e,n]),{onPointerDownCapture:()=>o.current=!0}}function ne(r,e=globalThis?.document){let n=m(r),o=t.useRef(!1);return t.useEffect(()=>{let s=c=>{c.target&&!o.current&&_(V,n,{originalEvent:c},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function k(){let r=new CustomEvent(D);document.dispatchEvent(r)}function _(r,e,n,{discrete:o}){let s=n.originalEvent.target,c=new CustomEvent(r,{bubbles:!1,cancelable:!0,detail:n});e&&s.addEventListener(r,e,{once:!0}),o?A(s,c):s.dispatchEvent(c)}var h=v(b(),1),M=v(G(),1);var U=v(B(),1),se="Portal",re=h.forwardRef((r,e)=>{let{container:n,...o}=r,[s,c]=h.useState(!1);F(()=>c(!0),[]);let d=n||s&&globalThis?.document?.body;return d?M.default.createPortal((0,U.jsx)(E.div,{...o,ref:e}),d):null});re.displayName=se;export{Z as a,re as b};