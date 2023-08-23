import{a as S,j as y,c as q}from"./cx-f3deaa61.js";import{r as $}from"./index-61bf1805.js";import{$ as P}from"./index-f5c3bd84.js";import"./_commonjsHelpers-de833af9.js";const h=a=>typeof a=="boolean"?"".concat(a):a===0?"0":a,x=S,A=(a,t)=>e=>{var l;if((t==null?void 0:t.variants)==null)return x(a,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:c,defaultVariants:n}=t,f=Object.keys(c).map(r=>{const o=e==null?void 0:e[r],u=n==null?void 0:n[r];if(o===null)return null;const s=h(o)||h(u);return c[r][s]}),m=e&&Object.entries(e).reduce((r,o)=>{let[u,s]=o;return s===void 0||(r[u]=s),r},{}),R=t==null||(l=t.compoundVariants)===null||l===void 0?void 0:l.reduce((r,o)=>{let{class:u,className:s,...z}=o;return Object.entries(z).every(D=>{let[b,v]=D;return Array.isArray(v)?v.includes({...n,...m}[b]):{...n,...m}[b]===v})?[...r,u,s]:r},[]);return x(a,f,R,e==null?void 0:e.class,e==null?void 0:e.className)},E=A("inline-flex items-center justify-center rounded-md font-medium border border-transparent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{priority:{default:"border-brand-primary-600 text-brand-primary-600 bg-white hover:bg-brand-primary-50 active:bg-brand-primary-100",primary:"bg-brand-primary-500 text-[#fff] hover:bg-brand-primary-600 active:bg-brand-primary-700",secondary:"bg-brand-primary-50 border-brand-primary-300 text-brand-primary-900 hover:bg-brand-primary-100 active:bg-brand-primary-200"},state:{default:"",danger:""},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3 text-sm",lg:"h-12 rounded-md px-6 text-lg"}},defaultVariants:{priority:"default",size:"default"},compoundVariants:[{priority:"default",state:"danger",class:"border-danger-600 text-danger-600 hover:bg-danger-50 active:bg-danger-100"},{priority:"primary",state:"danger",class:"bg-danger-500 hover:bg-danger-600 active:bg-danger-700"},{priority:"secondary",state:"danger",class:"bg-danger-50 border-danger-300 text-danger-900 hover:bg-danger-100 active:bg-danger-200"}]}),i=$.forwardRef(({className:a,priority:t="default",size:e="default",state:l="default",asChild:c=!1,...n},f)=>{const m=c?P:"button";return y.jsx(m,{className:q(E({priority:t,size:e,state:l,className:a})),ref:f,...n})});i.displayName="Button";try{i.displayName="Button",i.__docgenInfo={description:`Renders a button or a component that looks like a button, an interactive
element activated by a user with a mouse, keyboard, finger, voice command, or
other assistive technology. Once activated, it then performs an action, such
as submitting a form or opening a dialog.`,displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:`Use the \`asChild\` prop to compose Radix's functionality onto alternative
element types or your own React components.

All Radix primitive parts that render a DOM element accept an \`asChild\`
prop. When \`asChild\` is set to \`true\`, Radix will not render a default DOM
element, instead cloning the part's child and passing it the props and
behavior required to make it functional.

asChild can be used as deeply as you need to. This means it is a great way
to compose multiple primitive's behavior together.
@see https://www.radix-ui.com/docs/primitives/guides/composition#composition`,name:"asChild",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"default"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'}]}}}}}catch{}const I={title:"Button",component:i,tags:["autodocs"]},d={render:a=>y.jsx(i,{...a,children:"Button"}),args:{priority:"default",size:"default",state:"default"}},p={render:a=>y.jsx(i,{...a,children:"Button"}),args:{...d.args,priority:"primary"}},g={render:a=>y.jsx(i,{...a,children:"Button"}),args:{...d.args,priority:"secondary"}};var B,V,C;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    priority: "default",
    size: "default",
    state: "default"
  }
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var j,N,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    ...Default.args,
    priority: "primary"
  }
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var w,k,O;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    ...Default.args,
    priority: "secondary"
  }
}`,...(O=(k=g.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const K=["Default","Primary","Secondary"];export{d as Default,p as Primary,g as Secondary,K as __namedExportsOrder,I as default};
//# sourceMappingURL=button.stories-c38f7f0f.js.map
