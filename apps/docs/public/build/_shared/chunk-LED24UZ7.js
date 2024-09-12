import{a as k}from"/build/_shared/chunk-3YTQ7E44.js";import{b as T}from"/build/_shared/chunk-I4CY5NX7.js";import{a as E,b as S}from"/build/_shared/chunk-SQBGVNFG.js";import{c as w}from"/build/_shared/chunk-QDA5CGMH.js";var s=w(E(),1);var l=w(S(),1),n=w(S(),1),x="https://cdn.ngrok.com/static/fonts",I=["euclid-square/EuclidSquare-Regular-WebS.woff","euclid-square/EuclidSquare-RegularItalic-WebS.woff","euclid-square/EuclidSquare-Medium-WebS.woff","euclid-square/EuclidSquare-Semibold-WebS.woff","euclid-square/EuclidSquare-MediumItalic-WebS.woff","ibm-plex-mono/IBMPlexMono-Text.woff","ibm-plex-mono/IBMPlexMono-TextItalic.woff","ibm-plex-mono/IBMPlexMono-SemiBold.woff","ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff"],C=e=>[x,e].join("/"),P=()=>(0,l.jsx)(l.Fragment,{children:I.map(e=>(0,l.jsx)("link",{rel:"preload",href:C(e),as:"font",type:"font/woff",crossOrigin:"anonymous"},e))}),f="(prefers-color-scheme: dark)",u="(prefers-contrast: more)",y=["system","light","dark","light-high-contrast","dark-high-contrast"],$=e=>e;function H(e){return typeof e!="string"?!1:y.includes(e)}var p="mantle-ui-theme",q=["system",()=>null],v=(0,s.createContext)(q),M=()=>typeof window<"u";function c(e,t="system"){let a=t??"system";if(M()){let o=window.localStorage.getItem(e);return H(o)?o:a}return a}function F({children:e,defaultTheme:t="system",storageKey:a=p}){let[o,i]=(0,s.useState)(()=>{let r=c(a,t);return d(r),r});(0,s.useEffect)(()=>{let r=c(a,t);i(r),d(r)},[t,a]),(0,s.useEffect)(()=>{let r=window.matchMedia(f),m=window.matchMedia(u),h=()=>{c(a,t)==="system"&&d("system")};return r.addEventListener("change",h),m.addEventListener("change",h),()=>{r.removeEventListener("change",h),m.removeEventListener("change",h)}},[t,a]);let g=(0,s.useMemo)(()=>[o,r=>{window.localStorage.setItem(a,r),i(r),d(r)}],[a,o]);return(0,n.jsx)(v.Provider,{value:g,children:e})}function K(){let e=(0,s.useContext)(v);return k(e,"useTheme must be used within a ThemeProvider"),e}function d(e){if(!M())return;let t=window.document.documentElement;t.classList.remove(...y);let a=window.matchMedia(f).matches,o=window.matchMedia(u).matches,i=b(e,{prefersDarkMode:a,prefersHighContrast:o});t.classList.add(i),t.dataset.appliedTheme=i,t.dataset.theme=e}function b(e,{prefersDarkMode:t,prefersHighContrast:a}){return e==="system"?D({prefersDarkMode:t,prefersHighContrast:a}):e}function D({prefersDarkMode:e,prefersHighContrast:t}){return t?e?"dark-high-contrast":"light-high-contrast":e?"dark":"light"}function L({defaultTheme:e="system",storageKey:t=p}){return`
(function() {
	const themes = ${JSON.stringify(y)};
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "${e}" ?? "system";
	const maybeStoredTheme = window.localStorage.getItem("${t}");
	const hasStoredTheme = isTheme(maybeStoredTheme);
	if (!hasStoredTheme) {
		window.localStorage.setItem("${t}", fallbackTheme);
	}
	const themePreference = hasStoredTheme ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("${f}").matches;
	const prefersHighContrast = window.matchMedia("${u}").matches;
	let initialTheme = themePreference;
	if (initialTheme === "system") {
		if (prefersHighContrast) {
			initialTheme = prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
		} else {
			initialTheme = prefersDarkMode ? "dark" : "light";
		}
	}
	const htmlElement = document.documentElement;
	htmlElement.classList.remove(...themes);
	htmlElement.classList.add(initialTheme);
	htmlElement.dataset.appliedTheme = initialTheme;
	htmlElement.dataset.theme = themePreference;
})();
`.trim()}var N=({defaultTheme:e="system",storageKey:t=p})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("script",{dangerouslySetInnerHTML:{__html:L({defaultTheme:e,storageKey:t})}}),(0,n.jsx)(P,{})]});function j(e){let{className:t="",defaultTheme:a="system",storageKey:o=p}=e??{};return(0,s.useMemo)(()=>{if(!M())return{className:T(t),"data-applied-theme":"system","data-theme":"system"};let i=window.matchMedia(f).matches,g=window.matchMedia(u).matches,r=c(o,a),m=b(r,{prefersDarkMode:i,prefersHighContrast:g});return{className:T(t,m),"data-applied-theme":m,"data-theme":r}},[t,a,o])}export{P as a,$ as b,H as c,F as d,K as e,L as f,N as g,j as h};
