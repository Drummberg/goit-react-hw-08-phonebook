"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{7145:function(e,n,a){a.r(n),a.d(n,{default:function(){return K}});var t=a(9743),r=a(2677),i=a(7022),s=a(885),c=a(2791),o=a(9257),l=a(3360),d=a(3855),u=a(9140),h=a(184);function x(){var e=(0,o.wY)().data,n=(0,o.F3)(),a=(0,s.Z)(n,2),t=a[0],r=a[1].isLoading,i=(0,c.useState)(""),x=(0,s.Z)(i,2),m=x[0],f=x[1],p=(0,c.useState)(""),v=(0,s.Z)(p,2),Z=v[0],b=v[1],j=function(){f(""),b("")},y=function(e){var n=e.currentTarget,a=n.name,t=n.value;switch(a){case"name":f(t);break;case"number":b(t)}};return(0,h.jsxs)(u.Z,{style:{width:"400px",margin:"50px auto",borderStyle:"none"},children:[(0,h.jsx)(u.Z.Header,{as:"h2",style:{background:"#000",color:"white",paddingLeft:"100px"},children:" New contact"}),(0,h.jsx)(u.Z.Body,{children:(0,h.jsxs)(d.Z,{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name===m})))return alert("".concat(m," is already in the contact list"));t({name:m,number:Z}),j()},children:[(0,h.jsxs)(d.Z.Group,{className:"mb-4",controlId:"formBasicText",children:[(0,h.jsx)(d.Z.Label,{children:"Name"}),(0,h.jsx)(d.Z.Control,{type:"text",name:"name",value:m,placeholder:"Enter name",onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)(d.Z.Label,{children:"Number"}),(0,h.jsx)(d.Z.Control,{type:"tel",name:"number",value:Z,placeholder:"Enter number",onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(l.Z,{variant:"dark",type:"submit",style:{background:"#000",color:"white",marginLeft:"130px"},disabled:r,children:"Add contact"})]})})]})}var m=a(5048),f=a(5891);function p(){var e=(0,m.v9)(f.zK).name,n=(0,m.I0)();return(0,h.jsxs)(u.Z,{style:{width:"400px",margin:"40px auto",borderStyle:"none"},children:[(0,h.jsx)(u.Z.Header,{as:"h2",style:{background:"#000",color:"white",paddingLeft:"100px"},children:"Find contacts"}),(0,h.jsx)(u.Z.Body,{children:(0,h.jsx)(d.Z.Control,{type:"text",name:"filter",value:e,onChange:function(e){n((0,f.hX)(e.target.value))},placeholder:"Enter name your contact"})})]})}var v=a(1413),Z=a(5987),b=a(1694),j=a.n(b),y=(a(2391),a(239)),g=a(7503),w=a(162),k=a(9007),C=a(4787),L=a(8633),N=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],z=c.forwardRef((function(e,n){var a=e.bsPrefix,t=e.active,r=e.disabled,i=e.eventKey,c=e.className,o=e.variant,l=e.action,d=e.as,u=(0,Z.Z)(e,N);a=(0,w.vE)(a,"list-group-item");var x=(0,C.v)((0,v.Z)({key:(0,L.h)(i,u.href),active:t},u)),m=(0,s.Z)(x,2),f=m[0],p=m[1],b=(0,k.Z)((function(e){if(r)return e.preventDefault(),void e.stopPropagation();f.onClick(e)}));r&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var y=d||(l?u.href?"a":"button":"div");return(0,h.jsx)(y,(0,v.Z)((0,v.Z)((0,v.Z)({ref:n},u),f),{},{onClick:b,className:j()(c,a,p.isActive&&"active",r&&"disabled",o&&"".concat(a,"-").concat(o),l&&"".concat(a,"-action"))}))}));z.displayName="ListGroupItem";var A=z,S=["className","bsPrefix","variant","horizontal","numbered","as"],I=c.forwardRef((function(e,n){var a,t=(0,y.Ch)(e,{activeKey:"onSelect"}),r=t.className,i=t.bsPrefix,s=t.variant,c=t.horizontal,o=t.numbered,l=t.as,d=void 0===l?"div":l,u=(0,Z.Z)(t,S),x=(0,w.vE)(i,"list-group");return c&&(a=!0===c?"horizontal":"horizontal-".concat(c)),(0,h.jsx)(g.Z,(0,v.Z)((0,v.Z)({ref:n},u),{},{as:d,className:j()(r,x,s&&"".concat(x,"-").concat(s),a&&"".concat(x,"-").concat(a),o&&"".concat(x,"-numbered"))}))}));I.displayName="ListGroup";var P=Object.assign(I,{Item:A}),B=function(e){var n=e.id,a=e.name,i=e.number,c=(0,o.zr)(),d=(0,s.Z)(c,2),x=d[0],m=d[1].isLoading;return(0,h.jsx)(P.Item,{children:(0,h.jsxs)(t.Z,{children:[(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(u.Z.Text,{style:{textAlign:"left"},children:a}),(0,h.jsxs)(u.Z.Text,{style:{textAlign:"left"},children:["tel.:",i]})]}),(0,h.jsx)(r.Z,{children:(0,h.jsx)(l.Z,{variant:"dark",type:"button",onClick:function(){return function(e){x(e)}(n)},disabled:m,children:"Delete"})})]})},n)};function E(){var e=(0,o.wY)(),n=e.data,a=e.isSuccess,t=(0,m.v9)(f.zK);if(a){var r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}));return(0,h.jsxs)(u.Z,{style:{width:"400px",margin:"50px auto",borderStyle:"none"},children:[(0,h.jsx)(u.Z.Header,{as:"h2",style:{background:"#000",color:"white",paddingLeft:"100px"},children:"Contacts List"}),(0,h.jsx)(u.Z.Body,{children:(0,h.jsx)(P,{style:{width:"470px",margin:"10px auto"},children:n&&r.map((function(e){var n=e.id,a=e.name,t=e.phone;return(0,h.jsx)(B,{id:n,name:a,number:t},n)}))})})]})}}function K(){return(0,h.jsxs)(i.Z,{className:"mt-4",children:[(0,h.jsx)("h2",{children:"Phonebook"}),(0,h.jsxs)(t.Z,{children:[(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(x,{}),(0,h.jsx)(p,{})]}),(0,h.jsx)(r.Z,{children:(0,h.jsx)(E,{})})]})]})}}}]);
//# sourceMappingURL=145.ee7ce810.chunk.js.map