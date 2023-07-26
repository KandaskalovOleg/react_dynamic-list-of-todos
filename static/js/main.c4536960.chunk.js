(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),i=c(2),o=c(1),d=(c(13),c(14),c(15),c(6)),r=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.selectTodo,s=e.setSelectTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id,"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.filter,c=e.setFilter,a=e.filterSelect,n=e.setFilterSelect;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){n(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"Clear Search",onClick:function(){return c("")}})})]})]})},h=(c(17),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e)})).then((function(e){if(!e.ok)throw new Error("Error: ".concat(e.status));return e.json()}));var t}var O=function(e){var t=e.todo,c=e.setSelectTodo,s=Object(o.useState)(null),a=Object(i.a)(s,2),n=a[0],l=a[1],d=Object(o.useState)(!0),r=Object(i.a)(d,2),u=r[0],b=r[1];return Object(o.useEffect)((function(){var e;b(!0),(e=t.userId,m("/users/".concat(e,".json"))).then((function(e){l(e)})).catch((function(e){l(null)})).finally((function(){b(!1)}))}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",!u&&null!==n&&Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name}),!u&&null===n&&Object(j.jsx)("p",{children:"User not found"})]})]})]})]})};var x=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(""),d=Object(i.a)(n,2),r=d[0],x=d[1],f=Object(o.useState)(s.All),v=Object(i.a)(f,2),p=v[0],N=v[1],y=Object(o.useState)(!1),g=Object(i.a)(y,2),S=g[0],k=g[1],C=Object(o.useState)(null),w=Object(i.a)(C,2),T=w[0],A=w[1];Object(o.useEffect)((function(){k(!0),m("/todos.json").then((function(e){a(e)})).catch((function(e){a([])})).finally((function(){k(!1)}))}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{filter:r,setFilter:x,filterSelect:p,setFilterSelect:N})}),Object(j.jsxs)("div",{className:"block",children:[S&&Object(j.jsx)(h,{}),!S&&c.length>0&&Object(j.jsx)(u,{todos:function(){var e=Object(l.a)(c);return(e=e.filter((function(e){switch(p){case s.Active:return!e.completed;case s.Completed:return e.completed;default:return!0}}))).filter((function(e){return e.title.trim().toLowerCase().includes(r.trim().toLocaleLowerCase())}))}(),selectTodo:T,setSelectTodo:function(e){return A(e)}})]})]})})}),null!==T&&Object(j.jsx)(O,{todo:T,setSelectTodo:function(){return A(null)}})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c4536960.chunk.js.map