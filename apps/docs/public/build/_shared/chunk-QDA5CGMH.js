var h=Object.create,g=Object.freeze,e=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var n=(a,b)=>()=>(a&&(b=a(a=0)),b);var o=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports);var m=(a,b,c,f)=>{if(b&&typeof b=="object"||typeof b=="function")for(let d of j(b))!l.call(a,d)&&d!==c&&e(a,d,{get:()=>b[d],enumerable:!(f=i(b,d))||f.enumerable});return a};var p=(a,b,c)=>(c=a!=null?h(k(a)):{},m(b||!a||!a.__esModule?e(c,"default",{value:a,enumerable:!0}):c,a));var q=(a,b)=>g(e(a,"raw",{value:g(b||a.slice())}));export{n as a,o as b,p as c,q as d};