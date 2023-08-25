import{j as n,a as y}from"./cx-7c29962e.js";import{r as h}from"./index-61bf1805.js";import{c as _}from"./index-dc3cc2b1.js";import"./_commonjsHelpers-de833af9.js";const I=_("flex h-10 w-full rounded-md border border-neutral-400 bg-white px-3 py-2 text-neutral-800 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus:border-brand-primary-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary-500/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",{variants:{state:{default:"",danger:"text-danger-500 border-danger-500 focus:border-danger-500 focus-visible:ring-danger-500/25 placeholder:text-danger-400",success:"text-success-500 border-success-500 focus:border-success-500 focus-visible:ring-success-500/25"}},defaultVariants:{state:"default"}}),r=h.forwardRef(({className:e,type:m,state:b="default",...x},v)=>n.jsx("input",{type:m,className:y(I({state:b}),e),ref:v,...x}));r.displayName="Input";try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'},{value:'"success"'}]}}}}}catch{}const D={title:"Input",component:r,tags:["autodocs"]},a={render:e=>n.jsx(r,{...e}),args:{placeholder:"Choose a username",state:"default"}},s={render:e=>n.jsx(r,{...e}),args:{value:"@aaronshekey",state:"danger"}},t={render:e=>n.jsx(r,{...e}),args:{value:"@aaronshekey",state:"success"}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Input {...args} />,
  args: {
    placeholder: "Choose a username",
    state: "default"
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Input {...args} />,
  args: {
    value: "@aaronshekey",
    state: "danger"
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Input {...args} />,
  args: {
    value: "@aaronshekey",
    state: "success"
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const N=["Default","Danger","Success"];export{s as Danger,a as Default,t as Success,N as __namedExportsOrder,D as default};
//# sourceMappingURL=input.stories-656e12d3.js.map
