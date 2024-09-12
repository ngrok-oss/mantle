import{a as b}from"/build/_shared/chunk-BEWXWEVD.js";import{a as p,b as u,c as k}from"/build/_shared/chunk-QJ26DRS5.js";import"/build/_shared/chunk-LXOI3BT3.js";import"/build/_shared/chunk-KNSIEFAX.js";import{a as r}from"/build/_shared/chunk-KK737ADX.js";import"/build/_shared/chunk-YBB4Z6DW.js";import{a as c}from"/build/_shared/chunk-FSLJRMMD.js";import{c as n,d as l,e as d,h as i,j as s}from"/build/_shared/chunk-U623FORG.js";import"/build/_shared/chunk-WWFNUYL5.js";import"/build/_shared/chunk-UYLQA7CX.js";import"/build/_shared/chunk-5U3QKZBD.js";import"/build/_shared/chunk-3YTQ7E44.js";import{d as m}from"/build/_shared/chunk-I4CY5NX7.js";import{b as a}from"/build/_shared/chunk-SQBGVNFG.js";import{c as o}from"/build/_shared/chunk-QDA5CGMH.js";var f=o(a(),1);function t({className:h,...x}){return(0,f.jsx)("div",{className:m("dark-high-contrast:bg-black/30 high-contrast:bg-black/30 h-4 animate-pulse rounded-md bg-gray-300/25 dark:bg-gray-950/10",h),...x})}var e=o(a(),1),y=()=>[{title:"@ngrok/mantle \u2014 Skeleton"},{name:"description",content:"mantle is ngrok's UI library and design system"}];function g(){return(0,e.jsxs)("div",{className:"space-y-16",children:[(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h1",{className:"text-5xl font-medium",children:"Skeleton"}),(0,e.jsxs)("p",{className:"font-body text-body mt-4 text-xl",children:["Use to show a placeholder while content is loading. By using a ",(0,e.jsx)(r,{children:"Skeleton"}),", you can give the user an idea of what the content will look like, reducing the perceived loading time and CLS (Cumulative Layout Shift)."]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(c,{children:(0,e.jsx)(t,{className:"w-full"})}),(0,e.jsx)(n,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(l,{children:[(0,e.jsx)(i,{}),(0,e.jsx)(d,{language:"tsx",value:s`
						import { Skeleton } from "@ngrok/mantle/skeleton";

						<Skeleton className="w-full" />
					`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("header",{className:"space-y-1",children:[(0,e.jsxs)("h3",{className:"text-xl font-medium",children:["Skeleton ",(0,e.jsx)(b,{to:"/components/media-object",children:"Media Object"})]}),(0,e.jsx)("p",{className:"font-body text-body mt-1",children:"The Skeleton component can be included within components. You can also pass Tailwind utility classes for further control."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(c,{children:(0,e.jsxs)(p,{children:[(0,e.jsx)(u,{children:(0,e.jsx)(t,{className:"h-12 w-12 rounded-full"})}),(0,e.jsxs)(k,{className:"space-y-3",children:[(0,e.jsx)(t,{className:"w-[250px]"}),(0,e.jsx)(t,{className:"w-[200px]"})]})]})}),(0,e.jsx)(n,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(l,{children:[(0,e.jsx)(i,{}),(0,e.jsx)(d,{language:"tsx",value:s`
									import { MediaObject, MediaObjectMedia, MediaObjectContent } from "@ngrok/mantle/media-object";
									import { Skeleton } from "@ngrok/skeleton";

									<MediaObject>
										<MediaObjectMedia>
											<Skeleton className="h-12 w-12 rounded-full" />
										</MediaObjectMedia>
										<MediaObjectContent className="space-y-3">
											<Skeleton className="w-[250px]" />
											<Skeleton className="w-[200px]" />
										</MediaObjectContent>
									</MediaObject>
								`})]})})]})]})]})}export{g as default,y as meta};
