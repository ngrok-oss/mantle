import{j as i,a as _}from"./cx-7c29962e.js";import{r as w}from"./index-61bf1805.js";import{$ as j}from"./index-f5c3bd84.js";import{c as C}from"./index-dc3cc2b1.js";import"./_commonjsHelpers-de833af9.js";const R=C("inline-flex items-center justify-center rounded-md font-medium border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",{variants:{priority:{default:"border-brand-primary-500 text-brand-primary-500 bg-white hover:bg-brand-primary-50 active:bg-brand-primary-100 focus-visible:ring-brand-primary-600/25",primary:"bg-brand-primary-500 text-button hover:bg-brand-primary-600 active:bg-brand-primary-700 focus-visible:ring-brand-primary-600/25",secondary:"bg-brand-primary-50 border-brand-primary-200 text-brand-primary-900 hover:bg-brand-primary-100 active:bg-brand-primary-200 focus-visible:ring-brand-primary-600/25"},state:{default:"",danger:""},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3 text-sm",lg:"h-12 rounded-md px-6 text-lg"}},defaultVariants:{priority:"default",size:"default"},compoundVariants:[{priority:"default",state:"danger",class:"border-red-500 text-red-500 hover:bg-red-50 active:bg-red-100 focus-visible:ring-red-600/25"},{priority:"primary",state:"danger",class:"bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-600/25"},{priority:"secondary",state:"danger",class:"bg-red-50 border-red-200 text-red-900 hover:bg-red-100 active:bg-red-200 focus-visible:ring-red-600/25"}]}),r=w.forwardRef(({className:e,priority:y="default",size:f="default",state:b="default",asChild:v=!1,...h},x)=>{const B=v?j:"button";return i.jsx(B,{className:_(R({priority:y,size:f,state:b,className:e})),ref:x,...h})});r.displayName="Button";try{r.displayName="Button",r.__docgenInfo={description:`Renders a button or a component that looks like a button, an interactive
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
@see https://www.radix-ui.com/docs/primitives/guides/composition#composition`,name:"asChild",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"sm"'},{value:'"lg"'}]}},priority:{defaultValue:{value:"default"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const k={title:"Button",component:r,tags:["autodocs"]},a={render:e=>i.jsx(r,{...e,children:"Button"}),args:{priority:"default",size:"default",state:"default"}},t={render:e=>i.jsx(r,{...e,children:"Button"}),args:{...a.args,priority:"primary"}},n={render:e=>i.jsx(r,{...e,children:"Button"}),args:{...a.args,priority:"secondary"}};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    priority: "default",
    size: "default",
    state: "default"
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    ...Default.args,
    priority: "primary"
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>,
  args: {
    ...Default.args,
    priority: "secondary"
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const N=["Default","Primary","Secondary"];export{a as Default,t as Primary,n as Secondary,N as __namedExportsOrder,k as default};
//# sourceMappingURL=button.stories-d0c02935.js.map
