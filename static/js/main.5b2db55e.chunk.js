(this.webpackJsonpemployereact=this.webpackJsonpemployereact||[]).push([[0],{48:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(18),s=c.n(i),a=c(50),j=c(1);var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.a,{activeKey:"/home",onSelect:function(e){return alert("selected ".concat(e))},children:[Object(j.jsx)(a.a.Item,{children:Object(j.jsx)(a.a.Link,{href:"/home",children:"Active"})}),Object(j.jsx)(a.a.Item,{children:Object(j.jsx)(a.a.Link,{eventKey:"link-1",children:"Link"})}),Object(j.jsx)(a.a.Item,{children:Object(j.jsx)(a.a.Link,{eventKey:"link-2",children:"Link"})}),Object(j.jsx)(a.a.Item,{children:Object(j.jsx)(a.a.Link,{eventKey:"disabled",disabled:!0,children:"Disabled"})})]})})},d=c(7),b=c(19),O=c.n(b);function o(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"picture",src:e.picture})}),Object(j.jsxs)("td",{children:[e.first," ",e.last]}),Object(j.jsx)("td",{children:e.cell}),Object(j.jsx)("td",{children:e.email}),Object(j.jsxs)("td",{children:[e.city,",",e.state]})]},e.key)})}var u=c(20);function h(e){return Object(j.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"IMAGE "}),Object(j.jsxs)("th",{onClick:e.sortClick,children:["NAME",e.currentSort]}),Object(j.jsx)("th",{children:"PHONE"}),Object(j.jsx)("th",{children:"EMAIL"}),Object(j.jsx)("th",{children:"LOCATION"})]})}),e.employeeData.map((function(e){return Object(j.jsx)(o,{picture:e.picture.thumbnail,first:e.name.first,last:e.name.last,cell:e.cell,email:e.email,city:e.location.city,state:e.location.state},e.login.uuid)}))]})}function x(){var e,t=Object(r.useState)([]),c=Object(d.a)(t,2),n=c[0],i=c[1],s=Object(r.useState)(""),a=Object(d.a)(s,2),l=a[0],b=a[1],o=Object(r.useState)(""),u=Object(d.a)(o,2),x=u[0],f=u[1],m=Object(r.useState)([]),p=Object(d.a)(m,2),v=(p[0],p[1]);return Object(r.useEffect)((function(){O.a.get("https://randomuser.me/api/?results=40&nat=us").then((function(e){i(e.data.results)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"search",type:"text",value:l,onChange:function(e){return b(e.target.value)}})}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{employeeData:(e=n,e.filter((function(e){return e.name.first.toLowerCase().indexOf(l)>-1||e.name.last.toLowerCase().indexOf(l)>-1}))),currentSort:"?"===x||"^",sortClick:function(e){if(e.preventDefault(),"^"===x||""===x){var t=n;t.sort((function(e,t){return e.name.first<t.name.first?1:-1})),f({sortOrder:"v"}),v({filteredArray:t})}else{var c=n;c.sort((function(e,t){return e.name.first>t.name.first?1:-1})),f({sortOrder:"^"}),v({filteredArray:c})}}})})]})}function f(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)(x,{})]})}c(47);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5b2db55e.chunk.js.map