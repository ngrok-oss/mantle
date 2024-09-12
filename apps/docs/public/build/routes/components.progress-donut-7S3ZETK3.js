import{a as G,b as D,c as y,d as C,e as k,f as I,j as w,k as p}from"/build/_shared/chunk-R6Q5KFLB.js";import"/build/_shared/chunk-OWVN64HW.js";import{a as F}from"/build/_shared/chunk-KNSIEFAX.js";import{a as n}from"/build/_shared/chunk-KK737ADX.js";import"/build/_shared/chunk-QLWHGWSQ.js";import"/build/_shared/chunk-4CQPBNMS.js";import"/build/_shared/chunk-D36BACC2.js";import"/build/_shared/chunk-YYUGFPNA.js";import"/build/_shared/chunk-B65FA2P7.js";import"/build/_shared/chunk-AN5AQZWP.js";import"/build/_shared/chunk-AFVJBJ7U.js";import"/build/_shared/chunk-YBB4Z6DW.js";import{a as b}from"/build/_shared/chunk-FSLJRMMD.js";import{c as v,d as f,e as h,h as N,j as P}from"/build/_shared/chunk-U623FORG.js";import"/build/_shared/chunk-WWFNUYL5.js";import"/build/_shared/chunk-UYLQA7CX.js";import"/build/_shared/chunk-5U3QKZBD.js";import"/build/_shared/chunk-3YTQ7E44.js";import{b as R,d as M}from"/build/_shared/chunk-I4CY5NX7.js";import{a as W,b as V}from"/build/_shared/chunk-SQBGVNFG.js";import{c as d}from"/build/_shared/chunk-QDA5CGMH.js";var g=d(W(),1),L=d(W(),1),o=d(V(),1),J=(t="mantle")=>(0,L.useMemo)(()=>K(t),[t]);function K(t="mantle"){return[t.trim()||"mantle",Q()].join("-")}function Q(){return Math.random().toString(36).substring(2,9)}var E=100,u=32,U=(0,g.createContext)({max:E,radius:16,strokeWidth:"0.25rem",value:0}),i=({children:t,className:r,max:a=E,strokeWidth:s=4,value:c,...T})=>{let x=re(a)?a:E,m=te(c,x)?c:c==null?0:"indeterminate",z=_(s),$=H(z),B=Z(z),A=S(m)?m:void 0,Y=(0,g.useMemo)(()=>({max:x,radius:B,strokeWidth:$,value:m}),[x,B,$,m]);return(0,o.jsx)(U.Provider,{value:Y,children:(0,o.jsxs)("svg",{"aria-valuemax":x,"aria-valuemin":0,"aria-valuenow":A,className:R("origin-center",m==="indeterminate"&&"animate-spin",m!=="indeterminate"&&"-rotate-90 transform-gpu",M("animation-duration-[15s] size-6 text-gray-200 dark:text-gray-300",r)),"data-max":x,"data-min":0,"data-value":A,role:"progressbar",viewBox:`0 0 ${u} ${u}`,...T,children:[(0,o.jsx)("circle",{cx:u/2,cy:u/2,fill:"transparent",r:B,stroke:"currentColor",strokeWidth:H(z)}),t]})})},X=.6,l=({className:t,style:r})=>{let a=J(),s=(0,g.useContext)(U),c=ee(s.radius),T=s.value=="indeterminate"?X:s.value/s.max;return(0,o.jsxs)("g",{className:M("text-accent-600",t),style:r,children:[s.value=="indeterminate"&&(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:a,children:[(0,o.jsx)("stop",{className:"stop-opacity-100 stop-color-current",offset:"0%"}),(0,o.jsx)("stop",{className:"stop-opacity-0 stop-color-current",offset:"95%"})]})}),(0,o.jsx)("circle",{cx:u/2,cy:u/2,fill:"transparent",r:s.radius,stroke:s.value=="indeterminate"?`url(#${a})`:"currentColor",strokeDasharray:c,strokeDashoffset:`${(1-T)*c}px`,strokeLinecap:"round",strokeWidth:s.strokeWidth})]})};function Z(t){let r=Number.isNaN(t)?4:t,a=j(r,{min:1,max:16});return(u-a)/2}function j(t,{min:r,max:a}){return Math.min(a,Math.max(r,t))}function H(t){return`${t/16}rem`}function _(t){let r=4;if(t==null)return r;typeof t=="number"?r=t:t.endsWith("rem")?r=Number(t.replace("rem",""))*16:r=Number(t);let a=Number.isNaN(r)?4:r;return j(a,{min:1,max:12})}function ee(t){return 2*Math.PI*t}function S(t){return typeof t=="number"}function te(t,r){return S(t)&&!Number.isNaN(t)&&t<=r&&t>=0}function re(t){return S(t)&&!Number.isNaN(t)&&t>0}var q=d(W(),1),e=d(V(),1),ae=()=>[{title:"@ngrok/mantle \u2014 Progress Donut"},{name:"description",content:"mantle is ngrok's UI library and design system"}];function O(){return(0,e.jsxs)("div",{className:"space-y-16",children:[(0,e.jsxs)("div",{className:"space-y-4",children:[(0,e.jsx)("h1",{className:"text-5xl font-medium",children:"Progress Donut"}),(0,e.jsx)("p",{className:"font-body text-body text-xl",children:"Displays an indicator showing the completion progress of a task as a circular progress bar."}),(0,e.jsxs)("p",{className:"font-body text-body text-xl",children:["The indicator color is inherited via ",(0,e.jsx)(n,{children:"currentColor"}),". Override the default (",(0,e.jsx)(n,{children:"accent-600"}),") by setting the",(0,e.jsx)(n,{children:"ProgressDonutIndicator"}),"'s text color."]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)(b,{className:"flex-col gap-6",children:[(0,e.jsx)(i,{value:60,className:"size-10",children:(0,e.jsx)(l,{})}),(0,e.jsx)(i,{value:60,className:"size-10",children:(0,e.jsx)(l,{className:"text-fuchsia-600"})}),(0,e.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,e.jsxs)("div",{className:"flex items-center gap-1.5 text-sm",children:[(0,e.jsx)(i,{value:100,className:"size-6",children:(0,e.jsx)(l,{})}),"Data transfer out"]}),(0,e.jsxs)("div",{className:"flex items-center gap-1.5 text-xs",children:[(0,e.jsx)("div",{className:"grid w-6 place-items-center",children:(0,e.jsx)(i,{value:100,className:"size-4",strokeWidth:"0.315rem",children:(0,e.jsx)(l,{})})}),"Included"]}),(0,e.jsxs)("div",{className:"flex items-center gap-1.5 text-xs",children:[(0,e.jsx)("div",{className:"grid w-6 place-items-center",children:(0,e.jsx)(i,{className:"size-4",value:"indeterminate",strokeWidth:"0.315rem",children:(0,e.jsx)(l,{})})}),"Additional"]})]})]}),(0,e.jsx)(v,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(f,{children:[(0,e.jsx)(N,{}),(0,e.jsx)(h,{language:"tsx",value:P`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator />
									</ProgressDonut>

									<ProgressDonut value={60} className="size-10">
										<ProgressDonutIndicator className="text-fuchsia-600" />
									</ProgressDonut>

									<div className="flex flex-col gap-2">
										<div className="flex items-center gap-1.5 text-sm">
											<ProgressDonut value={100} className="size-6">
												<ProgressDonutIndicator />
											</ProgressDonut>
											Data transfer out
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={100} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator />
												</ProgressDonut>
											</div>
											Included
										</div>

										<div className="flex items-center gap-1.5 text-xs">
											<div className="grid w-6 place-items-center">
												<ProgressDonut value={25} className="size-4" strokeWidth="0.315rem">
													<ProgressDonutIndicator className="text-success-600" />
												</ProgressDonut>
											</div>
											Additional
										</div>
									</div>
								`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h2",{id:"indeterminate",className:"text-3xl font-medium",children:"Indeterminate Value"}),(0,e.jsxs)("p",{className:"font-body text-body text-xl",children:["You can set the ",(0,e.jsx)(n,{children:"value"})," prop to ",(0,e.jsx)(n,{children:'"indeterminate"'})," to show the progress bar in an indeterminate state."]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(b,{children:(0,e.jsx)(i,{className:"size-10",value:"indeterminate",children:(0,e.jsx)(l,{})})}),(0,e.jsx)(v,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(f,{children:[(0,e.jsx)(N,{}),(0,e.jsx)(h,{language:"tsx",value:P`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									<ProgressDonut className="size-10" value="indeterminate">
										<ProgressDonutIndicator />
									</ProgressDonut>
								`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h2",{id:"dynamic-colors",className:"text-3xl font-medium",children:"Dynamic Colors"}),(0,e.jsxs)("p",{className:"font-body text-body text-xl",children:["The color of the ",(0,e.jsx)(n,{children:"ProgressDonutIndicator"})," is inherited from the parent text color using"," ",(0,e.jsx)(n,{children:"currentColor"}),". Using this, you can easily change the color of it based on the current progress value."]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(b,{children:(0,e.jsx)("div",{className:"min-w-72",children:(0,e.jsx)(se,{})})}),(0,e.jsx)(v,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(f,{children:[(0,e.jsx)(N,{}),(0,e.jsx)(h,{language:"tsx",value:P`
									import { ProgressDonut, ProgressDonutIndicator } from "@ngrok/mantle/progress";

									const Example = () => {
										const [value, setValue] = useState(0);

										function computeColor() {
											switch (true) {
												case value <= 20:
													return "text-accent-600";
												case value <= 40:
													return "text-success-600";
												case value <= 60:
													return "text-warning-600";
												case value <= 80:
													return "text-fuchsia-600";
												default:
													return "text-danger-600";
											}
										};

										return (
											<form className="space-y-4">
												<ProgressDonut value={value} className="size-10">
													<ProgressDonutIndicator className={computeColor()} />
												</ProgressDonut>
												<label className="block space-y-1">
													<p>Value:</p>
													<input type="range" min={0} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} /> (
													{value}%)
												</label>
											</form>
										);
									};
								`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h2",{id:"api",className:"text-3xl font-medium",children:"API Reference"}),(0,e.jsxs)("p",{className:"font-body text-body text-xl",children:["The ",(0,e.jsx)(n,{children:"ProgressDonut"})," accepts the following props in addition to the"," ",(0,e.jsx)(F,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg#attributes",children:"standard HTML svg attributes"}),"."]}),(0,e.jsxs)(G,{children:[(0,e.jsxs)(D,{children:[(0,e.jsx)(y,{name:"max",optional:!0}),(0,e.jsx)(C,{children:(0,e.jsx)(p,{})}),(0,e.jsx)(k,{children:(0,e.jsx)(p,{value:100})}),(0,e.jsx)(I,{children:(0,e.jsx)("p",{children:"The maximum value of the progress bar. This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0. The default value is 100."})})]}),(0,e.jsxs)(D,{children:[(0,e.jsx)(y,{name:"strokeWidth",optional:!0}),(0,e.jsx)(C,{children:(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(p,{})}),(0,e.jsx)("li",{children:(0,e.jsx)(w,{value:"`${number}rem`"})})]})}),(0,e.jsx)(k,{children:(0,e.jsx)(w,{value:"0.25rem"})}),(0,e.jsx)(I,{children:(0,e.jsx)("p",{children:"The width of the progress bar stroke. Note, we clamp the stroke width to a minimum of 1px and max of 12px since it is proportional to the viewbox size (0 0 32 32)."})})]}),(0,e.jsxs)(D,{children:[(0,e.jsx)(y,{name:"value",optional:!0}),(0,e.jsx)(C,{children:(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(p,{})}),(0,e.jsx)("li",{children:(0,e.jsx)(w,{value:"indeterminate"})})]})}),(0,e.jsx)(k,{children:(0,e.jsx)(p,{value:0})}),(0,e.jsxs)(I,{className:"space-y-2",children:[(0,e.jsx)("p",{children:"The current value of the progress bar. This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 100 if max is omitted."}),(0,e.jsxs)("p",{children:["If set to ",(0,e.jsx)(n,{children:'"indeterminate"'}),", the progress bar is considered"," ",(0,e.jsx)("strong",{children:"indeterminate"}),"."]})]})]})]})]})]})}var se=()=>{let[t,r]=(0,q.useState)(0);function a(){switch(!0){case t<=20:return"text-accent-600";case t<=40:return"text-success-600";case t<=60:return"text-warning-600";case t<=80:return"text-fuchsia-600";default:return"text-danger-600"}}return(0,e.jsxs)("form",{className:"space-y-4",children:[(0,e.jsx)(i,{value:t,className:"size-10",children:(0,e.jsx)(l,{className:a()})}),(0,e.jsxs)("label",{className:"block space-y-1",children:[(0,e.jsx)("p",{children:"Value:"}),(0,e.jsx)("input",{type:"range",min:0,max:100,value:t,onChange:s=>r(Number(s.target.value))})," (",t,"%)"]})]})};export{O as default,ae as meta};
