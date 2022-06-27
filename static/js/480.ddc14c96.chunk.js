"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{8480:function(e,a,r){r.r(a),r.d(a,{default:function(){return Ce}});var s=r(885),i=r(2791),t=r(5048),l=r(3360),o=r(1413),n=r(5987),d=r(1694),c=r.n(d),m=r(2007),f=r.n(m),v=r(184),u=["as","className","type","tooltip"],p={type:f().string,tooltip:f().bool,as:f().elementType},x=i.forwardRef((function(e,a){var r=e.as,s=void 0===r?"div":r,i=e.className,t=e.type,l=void 0===t?"valid":t,d=e.tooltip,m=void 0!==d&&d,f=(0,n.Z)(e,u);return(0,v.jsx)(s,(0,o.Z)((0,o.Z)({},f),{},{ref:a,className:c()(i,"".concat(l,"-").concat(m?"tooltip":"feedback"))}))}));x.displayName="Feedback",x.propTypes=p;var b=x,h=i.createContext({}),y=r(162),Z=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=i.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,t=e.className,l=e.type,d=void 0===l?"checkbox":l,m=e.isValid,f=void 0!==m&&m,u=e.isInvalid,p=void 0!==u&&u,x=e.as,b=void 0===x?"input":x,N=(0,n.Z)(e,Z),j=(0,i.useContext)(h).controlId;return s=(0,y.vE)(s,"form-check-input"),(0,v.jsx)(b,(0,o.Z)((0,o.Z)({},N),{},{ref:a,type:d,id:r||j,className:c()(t,s,f&&"is-valid",p&&"is-invalid")}))}));N.displayName="FormCheckInput";var j=N,w=["bsPrefix","className","htmlFor"],I=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.htmlFor,l=(0,n.Z)(e,w),d=(0,i.useContext)(h).controlId;return r=(0,y.vE)(r,"form-check-label"),(0,v.jsx)("label",(0,o.Z)((0,o.Z)({},l),{},{ref:a,htmlFor:t||d,className:c()(s,r)}))}));I.displayName="FormCheckLabel";var P=I;var g=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],C=i.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,t=e.bsSwitchPrefix,l=e.inline,d=void 0!==l&&l,m=e.disabled,f=void 0!==m&&m,u=e.isValid,p=void 0!==u&&u,x=e.isInvalid,Z=void 0!==x&&x,N=e.feedbackTooltip,w=void 0!==N&&N,I=e.feedback,C=e.feedbackType,k=e.className,F=e.style,E=e.title,R=void 0===E?"":E,S=e.type,L=void 0===S?"checkbox":S,T=e.label,z=e.children,V=e.as,O=void 0===V?"input":V,H=(0,n.Z)(e,g);s=(0,y.vE)(s,"form-check"),t=(0,y.vE)(t,"form-switch");var B=(0,i.useContext)(h).controlId,_=(0,i.useMemo)((function(){return{controlId:r||B}}),[B,r]),G=!z&&null!=T&&!1!==T||function(e,a){return i.Children.toArray(e).some((function(e){return i.isValidElement(e)&&e.type===a}))}(z,P),M=(0,v.jsx)(j,(0,o.Z)((0,o.Z)({},H),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:p,isInvalid:Z,disabled:f,as:O}));return(0,v.jsx)(h.Provider,{value:_,children:(0,v.jsx)("div",{style:F,className:c()(k,G&&s,d&&"".concat(s,"-inline"),"switch"===L&&t),children:z||(0,v.jsxs)(v.Fragment,{children:[M,G&&(0,v.jsx)(P,{title:R,children:T}),I&&(0,v.jsx)(b,{type:C,tooltip:w,children:I})]})})})}));C.displayName="FormCheck";var k=Object.assign(C,{Input:j,Label:P}),F=r(4942),E=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),R=i.forwardRef((function(e,a){var r,s,t=e.bsPrefix,l=e.type,d=e.size,m=e.htmlSize,f=e.id,u=e.className,p=e.isValid,x=void 0!==p&&p,b=e.isInvalid,Z=void 0!==b&&b,N=e.plaintext,j=e.readOnly,w=e.as,I=void 0===w?"input":w,P=(0,n.Z)(e,E),g=(0,i.useContext)(h).controlId;(t=(0,y.vE)(t,"form-control"),N)?r=(0,F.Z)({},"".concat(t,"-plaintext"),!0):(s={},(0,F.Z)(s,t,!0),(0,F.Z)(s,"".concat(t,"-").concat(d),d),r=s);return(0,v.jsx)(I,(0,o.Z)((0,o.Z)({},P),{},{type:l,size:m,ref:a,readOnly:j,id:f||g,className:c()(u,r,x&&"is-valid",Z&&"is-invalid","color"===l&&"".concat(t,"-color"))}))}));R.displayName="FormControl";var S=Object.assign(R,{Feedback:b}),L=r(6543),T=(0,L.Z)("form-floating"),z=["controlId","as"],V=i.forwardRef((function(e,a){var r=e.controlId,s=e.as,t=void 0===s?"div":s,l=(0,n.Z)(e,z),d=(0,i.useMemo)((function(){return{controlId:r}}),[r]);return(0,v.jsx)(h.Provider,{value:d,children:(0,v.jsx)(t,(0,o.Z)((0,o.Z)({},l),{},{ref:a}))})}));V.displayName="FormGroup";var O=V,H=r(2677),B=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=i.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,t=e.bsPrefix,l=e.column,d=e.visuallyHidden,m=e.className,f=e.htmlFor,u=(0,n.Z)(e,B),p=(0,i.useContext)(h).controlId;t=(0,y.vE)(t,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var b=c()(m,t,d&&"visually-hidden",l&&x);return f=f||p,l?(0,v.jsx)(H.Z,(0,o.Z)({ref:a,as:"label",className:b,htmlFor:f},u)):(0,v.jsx)(s,(0,o.Z)({ref:a,className:b,htmlFor:f},u))}));_.displayName="FormLabel",_.defaultProps={column:!1,visuallyHidden:!1};var G=_,M=["bsPrefix","className","id"],A=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.id,l=(0,n.Z)(e,M),d=(0,i.useContext)(h).controlId;return r=(0,y.vE)(r,"form-range"),(0,v.jsx)("input",(0,o.Z)((0,o.Z)({},l),{},{type:"range",ref:a,className:c()(s,r),id:t||d}))}));A.displayName="FormRange";var D=A,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,t=e.htmlSize,l=e.className,d=e.isValid,m=void 0!==d&&d,f=e.isInvalid,u=void 0!==f&&f,p=e.id,x=(0,n.Z)(e,q),b=(0,i.useContext)(h).controlId;return r=(0,y.vE)(r,"form-select"),(0,v.jsx)("select",(0,o.Z)((0,o.Z)({},x),{},{size:t,ref:a,className:c()(l,r,s&&"".concat(r,"-").concat(s),m&&"is-valid",u&&"is-invalid"),id:p||b}))}));J.displayName="FormSelect";var K=J,Q=["bsPrefix","className","as","muted"],U=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.as,t=void 0===i?"small":i,l=e.muted,d=(0,n.Z)(e,Q);return r=(0,y.vE)(r,"form-text"),(0,v.jsx)(t,(0,o.Z)((0,o.Z)({},d),{},{ref:a,className:c()(s,r,l&&"text-muted")}))}));U.displayName="FormText";var W=U,X=i.forwardRef((function(e,a){return(0,v.jsx)(k,(0,o.Z)((0,o.Z)({},e),{},{ref:a,type:"switch"}))}));X.displayName="Switch";var Y=Object.assign(X,{Input:k.Input,Label:k.Label}),$=["bsPrefix","className","children","controlId","label"],ee=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.children,t=e.controlId,l=e.label,d=(0,n.Z)(e,$);return r=(0,y.vE)(r,"form-floating"),(0,v.jsxs)(O,(0,o.Z)((0,o.Z)({ref:a,className:c()(s,r),controlId:t},d),{},{children:[i,(0,v.jsx)("label",{htmlFor:t,children:l})]}))}));ee.displayName="FloatingLabel";var ae=ee,re=["className","validated","as"],se={_ref:f().any,validated:f().bool,as:f().elementType},ie=i.forwardRef((function(e,a){var r=e.className,s=e.validated,i=e.as,t=void 0===i?"form":i,l=(0,n.Z)(e,re);return(0,v.jsx)(t,(0,o.Z)((0,o.Z)({},l),{},{ref:a,className:c()(r,s&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=se;var te=Object.assign(ie,{Group:O,Control:S,Floating:T,Check:k,Switch:Y,Label:G,Text:W,Range:D,Select:K,FloatingLabel:ae}),le=r(7472),oe=["bsPrefix","className","variant","as"],ne=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.variant,t=e.as,l=void 0===t?"img":t,d=(0,n.Z)(e,oe),m=(0,y.vE)(r,"card-img");return(0,v.jsx)(l,(0,o.Z)({ref:a,className:c()(i?"".concat(m,"-").concat(i):m,s)},d))}));ne.displayName="CardImg";var de=ne,ce=r(6040),me=["bsPrefix","className","as"],fe=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.as,l=void 0===t?"div":t,d=(0,n.Z)(e,me),m=(0,y.vE)(r,"card-header"),f=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,v.jsx)(ce.Z.Provider,{value:f,children:(0,v.jsx)(l,(0,o.Z)((0,o.Z)({ref:a},d),{},{className:c()(s,m)}))})}));fe.displayName="CardHeader";var ve=fe,ue=["bsPrefix","className","bg","text","border","body","children","as"],pe=(0,le.Z)("h5"),xe=(0,le.Z)("h6"),be=(0,L.Z)("card-body"),he=(0,L.Z)("card-title",{Component:pe}),ye=(0,L.Z)("card-subtitle",{Component:xe}),Ze=(0,L.Z)("card-link",{Component:"a"}),Ne=(0,L.Z)("card-text",{Component:"p"}),je=(0,L.Z)("card-footer"),we=(0,L.Z)("card-img-overlay"),Ie=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,i=e.bg,t=e.text,l=e.border,d=e.body,m=e.children,f=e.as,u=void 0===f?"div":f,p=(0,n.Z)(e,ue),x=(0,y.vE)(r,"card");return(0,v.jsx)(u,(0,o.Z)((0,o.Z)({ref:a},p),{},{className:c()(s,x,i&&"bg-".concat(i),t&&"text-".concat(t),l&&"border-".concat(l)),children:d?(0,v.jsx)(be,{children:m}):m}))}));Ie.displayName="Card",Ie.defaultProps={body:!1};var Pe=Object.assign(Ie,{Img:de,Title:he,Subtitle:ye,Body:be,Link:Ze,Text:Ne,Header:ve,Footer:je,ImgOverlay:we}),ge=r(3832);function Ce(){var e=(0,t.I0)(),a=(0,i.useState)(""),r=(0,s.Z)(a,2),o=r[0],n=r[1],d=(0,i.useState)(""),c=(0,s.Z)(d,2),m=c[0],f=c[1],u=function(e){var a=e.target,r=a.name,s=a.value;switch(r){case"email":return n(s);case"password":return f(s);default:return}};return(0,v.jsxs)(Pe,{style:{width:"500px",margin:"30px auto"},children:[(0,v.jsx)(Pe.Header,{as:"h2",children:" Sign in"}),(0,v.jsx)(Pe.Body,{children:(0,v.jsxs)(te,{onSubmit:function(a){a.preventDefault(),e(ge.Z.logIn({email:o,password:m})),n(""),f("")},autoComplete:"off",children:[(0,v.jsx)(te.Group,{className:"mb-3",controlId:"formBasicEmail",children:(0,v.jsxs)(te.Label,{children:["Email",(0,v.jsx)(te.Control,{type:"email",placeholder:"Enter email",name:"email",value:o,onChange:u,style:{width:"400px"}})]})}),(0,v.jsx)(te.Group,{className:"mb-3",controlId:"formBasicPassword",children:(0,v.jsxs)(te.Label,{children:["Password",(0,v.jsx)(te.Control,{placeholder:"Enter password",type:"password",name:"password",value:m,onChange:u,style:{width:"400px"}})]})}),(0,v.jsx)(l.Z,{variant:"primary",type:"submit",children:"Log in"})]})})]})}},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=480.ddc14c96.chunk.js.map