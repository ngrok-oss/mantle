import{a as c,b as p,c as u,d as C,e as o,f as l,g as a,h as y}from"/build/_shared/chunk-OWVN64HW.js";import{a as s}from"/build/_shared/chunk-FSLJRMMD.js";import{c as d,d as b,e as m,h as T,j as r}from"/build/_shared/chunk-U623FORG.js";import"/build/_shared/chunk-WWFNUYL5.js";import"/build/_shared/chunk-UYLQA7CX.js";import"/build/_shared/chunk-5U3QKZBD.js";import"/build/_shared/chunk-3YTQ7E44.js";import"/build/_shared/chunk-I4CY5NX7.js";import{b as i}from"/build/_shared/chunk-SQBGVNFG.js";import{c as n}from"/build/_shared/chunk-QDA5CGMH.js";var e=n(i(),1),h=()=>[{title:"@ngrok/mantle \u2014 Table"},{name:"description",content:"mantle is ngrok's UI library and design system"}];function v(){return(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h1",{className:"text-5xl font-medium",children:"Table"}),(0,e.jsx)("p",{className:"font-body text-body text-xl",children:"A responsive table component."}),(0,e.jsxs)("div",{children:[(0,e.jsx)(s,{className:"gap-2",children:(0,e.jsx)(g,{})}),(0,e.jsx)(d,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(b,{children:[(0,e.jsx)(T,{}),(0,e.jsx)(m,{language:"tsx",value:r`
							import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@ngrok/mantle/table";

							<Table>
								<TableCaption>A list of your recent invoices.</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px]">Invoice</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Method</TableHead>
										<TableHead className="text-right">Amount</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow key={invoice.invoice}>
											<TableCell className="font-medium">{invoice.invoice}</TableCell>
											<TableCell>{invoice.paymentStatus}</TableCell>
											<TableCell>{invoice.paymentMethod}</TableCell>
											<TableCell className="text-right">{invoice.totalAmount}</TableCell>
										</TableRow>
									))}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell className="text-right">$2,500.00</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						`})]})})]})]})}var g=()=>(0,e.jsx)("div",{className:"z-10 mt-4 overflow-hidden rounded-lg border border-gray-300 bg-white dark:bg-gray-100",children:(0,e.jsxs)(c,{children:[(0,e.jsx)(y,{children:"A list of your recent invoices."}),(0,e.jsx)(p,{children:(0,e.jsxs)(o,{children:[(0,e.jsx)(l,{className:"w-[100px]",children:"Invoice"}),(0,e.jsx)(l,{children:"Status"}),(0,e.jsx)(l,{children:"Method"}),(0,e.jsx)(l,{className:"text-right",children:"Amount"})]})}),(0,e.jsx)(u,{children:[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}].map(t=>(0,e.jsxs)(o,{children:[(0,e.jsx)(a,{className:"font-medium",children:t.invoice}),(0,e.jsx)(a,{children:t.paymentStatus}),(0,e.jsx)(a,{children:t.paymentMethod}),(0,e.jsx)(a,{className:"text-right",children:t.totalAmount})]},t.invoice))}),(0,e.jsx)(C,{children:(0,e.jsxs)(o,{children:[(0,e.jsx)(a,{colSpan:3,children:"Total"}),(0,e.jsx)(a,{className:"text-right",children:"$2,500.00"})]})})]})});export{v as default,h as meta};
