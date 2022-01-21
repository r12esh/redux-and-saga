(this["webpackJsonpredux-and-saga"]=this["webpackJsonpredux-and-saga"]||[]).push([[0],{163:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"deleteEntrySaga",(function(){return ce}));var a={};n.r(a),n.d(a,"getAllEntries",(function(){return oe})),n.d(a,"getAllEntriesDetails",(function(){return le}));var r={};n.r(r),n.d(r,"deleteEntrySaga",(function(){return je}));var s=n(0),i=n.n(s),o=n(41),u=n.n(o),l=(n(163),n(24)),d=n(45),j=n(203),O=n(209),E=n(6),b=function(e){var t=e.type,n=void 0===t?"h1":t,c=e.value;return Object(E.jsx)(O.a,{as:n,children:c})},p=n(204),x=n(207);var v=function(e){var t=e.addEntry;return Object(E.jsxs)(x.a.Group,{style:{marginTop:"20px"},children:[Object(E.jsx)(x.a,{children:"Cancel"}),Object(E.jsx)(x.a.Or,{}),Object(E.jsx)(x.a,{primary:!0,onClick:function(){return t()},children:" Ok "})]})},h=n(211),f=n(214);var T=function(e){var t=e.description,n=e.value,c=e.isExpense,a=e.setIsExpense,r=e.setDescription,i=e.setValue;return Object(E.jsxs)(s.Fragment,{children:[Object(E.jsxs)(p.a.Group,{unstackable:!0,children:[Object(E.jsx)(p.a.Input,{label:"Description ",width:12,icon:"tags",placeholder:"Enter description",value:t,onChange:function(e){return r(e.target.value)}}),Object(E.jsx)(p.a.Input,{label:"Value",width:4,placeholder:"100.00",icon:"rupee",iconPosition:"left",value:n,onChange:function(e){return i(e.target.value)},type:"number"})]}),Object(E.jsx)(h.a,{compact:!0,children:Object(E.jsx)(f.a,{onChange:function(){return a(!c)},label:c?"Expense":"Income",toggle:!0,checked:!c})})]})},y=n(30),_=n(206),R={GET_ENTRIES:"GET_ENTRIES",POPULATE_ENTRIES:"POPULATE_ENTRIES",POPULATE_ENTRY_DETAILS:"POPULATE_ENTRY_DETAILS",ADD_ENTRY:"ADD_ENTRY",REMOVE_ENTRY:"REMOVE_ENTRY",UPDATE_ENTRY:"UPDATE_ENTRY",REMOVE_ENTRY_RESULT:"REMOVE_ENTRY_RESULT"},D=function(e){return{type:R.ADD_ENTRY,payload:e}},g=function(e,t){return{type:R.UPDATE_ENTRY,payload:{id:e,entry:t}}},I=function(e,t){return{type:R.POPULATE_ENTRY_DETAILS,payload:{id:e,entry:t}}},m=R,N={OPEN_EDIT_MODAL:"OPEN_EDIT_MODAL",CLOSE_EDIT_MODAL:"CLOSE_EDIT_MODAL"},A=function(){return{type:N.CLOSE_EDIT_MODAL}},L=N,S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=Object(s.useState)(e),a=Object(d.a)(c,2),r=a[0],i=a[1],o=Object(s.useState)(t),u=Object(d.a)(o,2),l=u[0],j=u[1],O=Object(s.useState)(n),E=Object(d.a)(O,2),b=E[0],p=E[1],x=Object(y.b)();Object(s.useEffect)((function(){i(e),j(t),p(n)}),[e,t,n]);var v=function(e){x(g(e,{id:e,description:r,value:l,isExpense:b})),x(A()),f()},h=function(){x(D({id:Object(_.a)(),description:r,value:l,isExpense:b})),f()},f=function(){i(""),j(""),p(!0)};return{description:r,setDescription:i,value:l,setValue:j,isExpense:b,setIsExpense:p,addEntry:h,updateEntry:v}};var P=function(){var e=S(),t=e.description,n=e.setDescription,c=e.value,a=e.setValue,r=e.isExpense,s=e.setIsExpense,i=e.addEntry;return Object(E.jsxs)(p.a,{children:[Object(E.jsx)(T,{description:t,value:c,isExpense:r,setIsExpense:s,setValue:a,setDescription:n}),Object(E.jsx)(v,{addEntry:i})]})},w=n(208);var Y=function(e){var t=e.size,n=void 0===t?"tiny":t,c=e.color,a=void 0===c?"black":c,r=e.value,s=e.title;return Object(E.jsxs)(w.a,{color:a,size:n,children:[Object(E.jsx)(w.a.Label,{children:s}),Object(E.jsx)(w.a.Value,{children:r})]})},k=n(212);var C=function(e){var t=e.totalIncome,n=e.totalExpenses;return Object(E.jsx)(h.a,{className:"haha",textAlign:"center",children:Object(E.jsx)(k.a,{columns:2,divided:!0,children:Object(E.jsxs)(k.a.Row,{children:[Object(E.jsx)(k.a.Column,{children:Object(E.jsx)(Y,{color:"green",size:"tiny",title:"Income",value:"\u20b9".concat(t)})}),Object(E.jsx)(k.a.Column,{children:Object(E.jsx)(Y,{color:"red",size:"tiny",title:"Expenses",value:"\u20b9".concat(n)})})]})})})},M=n(83);var U=function(e){var t=e.id,n=e.description,c=e.value,a=e.isExpense,r=Object(y.b)();return Object(E.jsx)(s.Fragment,{children:Object(E.jsx)(h.a,{color:a?"red":"green",children:Object(E.jsx)(k.a,{columns:3,children:Object(E.jsxs)(k.a.Row,{children:[Object(E.jsx)(k.a.Column,{width:10,children:n}),Object(E.jsx)(k.a.Column,{width:3,children:"\u20b9"+c}),Object(E.jsxs)(k.a.Column,{width:3,children:[Object(E.jsx)(M.a,{name:"edit",style:{cursor:"pointer"},onClick:function(){return r(function(e){return{type:N.OPEN_EDIT_MODAL,payload:{id:e}}}(t))},bordered:!0}),Object(E.jsx)(M.a,{name:"trash",style:{cursor:"pointer"},onClick:function(){return r(function(e){return{type:R.REMOVE_ENTRY,payload:e}}(t))},bordered:!0})]})]})})})})};var V=function(e){var t=e.entries;return Object(E.jsx)(j.a,{children:t.map((function(e){return Object(s.createElement)(U,Object(l.a)(Object(l.a)({},e),{},{key:e.id}))}))})},G=n(205);var z=function(e){var t=e.isOpen,n=e.id,c=e.description,a=e.value,r=e.isExpense,s=Object(y.b)(),i=S(c,a,r);return Object(E.jsxs)(G.a,{open:t,children:[Object(E.jsx)(G.a.Header,{children:"Edit Entry"}),Object(E.jsx)(G.a.Content,{children:Object(E.jsx)(T,{description:i.description,value:i.value,isExpense:i.isExpense,setIsExpense:i.setIsExpense,setValue:i.setValue,setDescription:i.setDescription})}),Object(E.jsxs)(G.a.Actions,{children:[Object(E.jsx)(x.a,{onClick:function(){return s(A())},children:"Close"}),Object(E.jsx)(x.a,{onClick:function(){return i.updateEntry(n)},primary:!0,children:"Ok"})]})]})};var F=function(){var e=Object(s.useState)("Loading"),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)("Loading"),r=Object(d.a)(a,2),i=r[0],o=r[1],u=Object(s.useState)("Loading"),O=Object(d.a)(u,2),p=O[0],x=O[1],v=Object(s.useState)(),h=Object(d.a)(v,2),f=h[0],T=h[1],_=Object(y.c)((function(e){return e.entries})),D=Object(y.c)((function(e){return e.modals})),g=D.isOpen,I=D.id,m=Object(y.b)();return Object(s.useEffect)((function(){m({type:R.GET_ENTRIES})}),[m]),Object(s.useEffect)((function(){var e=_.findIndex((function(e){return e.id===I}));T(_[e])}),[g,I,_]),Object(s.useEffect)((function(){var e=0,t=0;_.map((function(n){return n.isExpense?t+=parseFloat(n.value):e+=parseFloat(n.value),0})),x(e-t),c(e),o(t)}),[_]),Object(E.jsxs)(j.a,{children:[Object(E.jsx)(b,{type:"h1",value:"Ritesh"}),Object(E.jsx)(Y,{size:"small",title:"Your balance",value:"\u20b9".concat(p)}),Object(E.jsx)(C,{totalExpenses:i,totalIncome:n}),Object(E.jsx)(b,{type:"h3",value:"History"}),Object(E.jsx)(V,{entries:_}),Object(E.jsx)(b,{type:"h3",value:"Add new transaction"}),Object(E.jsx)(P,{}),Object(E.jsx)(z,Object(l.a)({isOpen:g},f))]})},H=(n(171),n(63)),J=n(147),B=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.POPULATE_ENTRIES:return n.payload;case m.ADD_ENTRY:return e=t.concat(Object(l.a)({},n.payload));case m.REMOVE_ENTRY_RESULT:return e=t.filter((function(e){return e.id!==n.payload}));case m.POPULATE_ENTRY_DETAILS:case m.UPDATE_ENTRY:e=Object(J.a)(t);var c=t.findIndex((function(e){return e.id===n.payload.id}));return e[c]=Object(l.a)(Object(l.a)({},e[c]),n.payload.entry),e;default:return t}},W=[],q=n(145),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,id:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.OPEN_EDIT_MODAL:return Object(l.a)(Object(l.a)({},e),{},{isOpen:!0,id:t.payload.id});case L.CLOSE_EDIT_MODAL:return Object(l.a)(Object(l.a)({},e),{},{isOpen:!1,id:null});default:return e}},Q=n(148),X=n(26),Z=n.n(X),$=n(42),ee=n.n($),te=n(20),ne=Z.a.mark(ce);function ce(){var e,t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.d)(m.REMOVE_ENTRY);case 2:return e=n.sent,t=e.payload,n.next=6,Object(te.a)(ae,t);case 6:return n.next=8,Object(te.c)({type:"REMOVE_ENTRY_RESULT",payload:t});case 8:case"end":return n.stop()}}),ne)}function ae(e){ee.a.delete("http://localhost:3001/entries/".concat(e)),ee.a.delete("http://localhost:3001/values/".concat(e))}var re=Z.a.mark(oe),se=Z.a.mark(ue),ie=Z.a.mark(le);function oe(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(te.d)(m.GET_ENTRIES);case 2:return console.log("I need to get Entries now"),t.next=5,Object(te.a)(ee.a.get,"http://localhost:3001/entries");case 5:return e=t.sent,console.log("Saga ka data bc : ",e),t.next=9,Object(te.c)((n=e.data,{type:R.POPULATE_ENTRIES,payload:n}));case 9:case"end":return t.stop()}var n}),re)}function ue(e){var t,n;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(te.a)(ee.a,"http://localhost:3001/values/".concat(e));case 2:return t=c.sent,n=t.data,console.log(n),c.next=7,Object(te.c)(I(e,n));case 7:case"end":return c.stop()}}),se)}function le(){var e,t,n,c;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(te.d)(m.POPULATE_ENTRIES);case 2:e=a.sent,t=e.payload,n=0;case 5:if(!(n<t.length)){a.next=12;break}return c=t[n],a.next=9,Object(te.b)(ue,c.id);case 9:n++,a.next=5;break;case 12:case"end":return a.stop()}}),ie)}var de=Z.a.mark(je);function je(){var e,t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.d)(m.REMOVE_ENTRY);case 2:return e=n.sent,t=e.payload,n.next=6,Object(te.a)(Oe,t);case 6:case"end":return n.stop()}}),de)}function Oe(e){ee.a.delete("http://localhost:3001/entries/".concat(e)),ee.a.delete("http://localhost:3001/values/".concat(e))}var Ee=Object(H.combineReducers)({entries:B,modals:K}),be=Object(Q.a)(),pe=[be],xe=function(){var e,t=Object(H.createStore)(Ee,Object(q.composeWithDevTools)(H.applyMiddleware.apply(void 0,pe)));return e=be,Object.values(a).forEach(e.run.bind(e)),Object.values(r).forEach(e.run.bind(e)),Object.values(c).forEach(e.run.bind(e)),t}();u.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(y.a,{store:xe,children:Object(E.jsx)(F,{})})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.bcde86a8.chunk.js.map