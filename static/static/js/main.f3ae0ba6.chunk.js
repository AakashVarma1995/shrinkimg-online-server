(this.webpackJsonpshrinkimg=this.webpackJsonpshrinkimg||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(15),n(3)),d=n(9),l=Object(d.a)({root:{position:"relative"},background:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url('/images/background.jpg')",minHeight:"100vh",minWidth:"100%",position:"fixed",top:0,left:0,zIndex:-2},overlay:{background:"rgba(0,0,0,.6)",minHeight:"100vh",minWidth:"100%",position:"fixed",top:0,left:0,zIndex:-1},content:{display:"grid",placeItems:"center",minHeight:"100vh",minWidth:"100%"},centerCard:{background:"white",padding:"16px",borderRadius:"16px",display:"inline-grid",gridTemplateColumns:"auto auto",alignItems:"center"},footer:{position:"fixed",bottom:"0",background:"rgba(0,0,0,.6)",color:"white",textAlign:"center",paddingTop:"12px",paddingBottom:"12px",width:"100%"},leftContainer:{width:"100%",marginRight:"16px"},rightContainer:{},selectedImage:{width:"250px",height:"250px",position:"relative",borderRadius:"28px"},imageName:{position:"absolute",bottom:0,left:0,width:"100%",textAlign:"center",paddinTop:"8px",paddinBottom:"80px",background:"rgba(0,0,0,.7)",borderRadius:"0px 0px 28px 28px",overflow:"hidden"},colName:{padding:"8px"},inputNum:{width:"60px",padding:"8px",border:"none",outline:"none",background:"#E2E2E2",borderRadius:"50px",color:"black",textAlign:"center",fontFamily:"Raleway",fontSize:"1.1rem",margin:"8px"},uploadBtn:{background:"#FF4230",color:"white",padding:"8px 16px 8px 16px",borderRadius:"45px",margin:"8px",cursor:"pointer"},downloadBtn:{background:"#059E1F",width:"100%",outline:"none",border:"none",padding:"8px",color:"white",fontSize:"1.1rem",borderRadius:"50px",cursor:"pointer",transition:".5s ease",display:"flex",justifyContent:"center",alignItems:"center","&:hover":{background:"#00A51C"}},inputCol:{display:"flex",justifyContent:"center"},errorBox:{background:"#F8D7DA",border:"1px solid #F5C6CB",padding:"8px",color:"#8B3F46",borderRadius:"35px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",maxWidth:"450px",margin:"0 auto"},"@media screen and (max-width: 600px)":{centerCard:{width:"calc(100% - 50px)"},selectedImage:{display:"none"},leftContainer:{gridColumn:"span 3"},inputCol:{justifyContent:"flex-end"}}});var p=function(){var e=l(),t=Object(a.useState)(null),n=Object(s.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),d=Object(s.a)(c,2),p=d[0],u=d[1],m=Object(a.useState)("auto"),g=Object(s.a)(m,2),b=g[0],x=g[1],j=Object(a.useState)(300),h=Object(s.a)(j,2),O=h[0],f=h[1],v=Object(a.useState)(60),y=Object(s.a)(v,2),N=y[0],C=y[1],k=Object(a.useState)(null),w=Object(s.a)(k,2),S=w[0],I=w[1],R=Object(a.useState)(!1),B=Object(s.a)(R,2),F=B[0],A=B[1];return Object(i.jsxs)("div",{className:e.root,children:[Object(i.jsx)("div",{className:e.background}),Object(i.jsx)("div",{className:e.overlay}),Object(i.jsx)("div",{className:e.content,children:Object(i.jsxs)("div",{className:e.centerCard,children:[Object(i.jsx)("div",{className:e.leftContainer,children:Object(i.jsxs)("table",{width:"100%",children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:e.colName,style:{padding:"16px 8px"},children:"Select Image"}),Object(i.jsxs)("td",{className:e.inputCol,children:[Object(i.jsx)("input",{type:"file",id:"filename",style:{display:"none"},accept:".jpg, .jpeg, .png, .bmp",onChange:function(e){return function(e){var t=e.target.files[0];t.name.length>20?u(t.name.substring(0,20)+"..."):u(t.name);var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){o(n.result)}}(e)}}),Object(i.jsx)("label",{for:"filename",className:e.uploadBtn,children:r?"Uploaded":"Upload"})]})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:e.colName,children:"Height (px)"}),Object(i.jsx)("td",{className:e.inputCol,children:Object(i.jsx)("input",{type:"text",className:e.inputNum,value:O,onChange:function(e){return f(e.target.value)}})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:e.colName,children:"Width (px)"}),Object(i.jsx)("td",{className:e.inputCol,children:Object(i.jsx)("input",{type:"text",className:e.inputNum,value:b,onChange:function(e){return x(e.target.value)}})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:e.colName,children:"Quality (%)"}),Object(i.jsx)("td",{className:e.inputCol,children:Object(i.jsx)("input",{type:"number",className:e.inputNum,value:N,onChange:function(e){e.target.value<1?C(1):e.target.value>100?C(100):C(e.target.value)},max:100,min:1})})]})]})}),Object(i.jsx)("div",{className:e.rightContainer,children:Object(i.jsx)("div",{className:e.selectedImage,style:{backgroundImage:r?"url(".concat(r,")"):'url("https://via.placeholder.com/250x250")',backgroundSize:"cover",backgroundPosition:"center"},children:Object(i.jsx)("div",{className:e.imageName,children:Object(i.jsx)("div",{style:{position:"relative",padding:"8px",color:"white"},children:p||"No File Selected"})})})}),S&&Object(i.jsx)("div",{style:{gridColumn:"span 2",marginTop:"16px"},children:Object(i.jsxs)("div",{className:e.errorBox,children:[Object(i.jsx)("img",{src:"/images/error.svg",style:{marginRight:"8px"}})," ",Object(i.jsx)("span",{children:S})]})}),Object(i.jsx)("div",{style:{gridColumn:"span 3",marginTop:"16px"},children:Object(i.jsxs)("button",{className:e.downloadBtn,onClick:function(e){return A(!0),I(null),void fetch("/compress",{method:"post",body:JSON.stringify({image:r,width:b,height:O,quality:N}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if(A(!1),e.url){var t=document.createElement("a");t.href=e.url,t.target="_blank",t.setAttribute("download",e.file_name),document.body.appendChild(t),t.click(),document.body.removeChild(t)}else e.error&&I(e.error)}))},style:F?{pointerEvents:"none"}:{},children:["Download Image ",F&&Object(i.jsx)("img",{src:"/images/bars.svg",style:{marginLeft:"8px",height:"20px"}})]})})]})}),Object(i.jsx)("footer",{className:e.footer,children:"Copyright \xa9 ShrinkImg.Online 2020"})]})};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f3ae0ba6.chunk.js.map