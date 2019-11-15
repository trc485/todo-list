(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{160:function(e,t,n){e.exports=n(237)},237:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(88),l=n(247),u=l.a.Header,d=l.a.Footer,s=l.a.Content,f=function(e){var t=e.children;return o.a.createElement(l.a,{style:{minHeight:"100vh"}},o.a.createElement(u,null,o.a.createElement("h1",{style:{color:"white",textAlign:"center"}},"Todo List App")),o.a.createElement(s,{style:{padding:"3rem 2rem"}},o.a.createElement("div",{style:{maxWidth:608,margin:"0 auto",backgroundColor:"white"}},t)),o.a.createElement(d,{style:{textAlign:"center"}},"Made with \u2764 by Thomas Chappel"))},p=n(77),m=n(242),g=n(39),O=n(40);function b(){var e=Object(g.a)(["\n    margin-left: 1rem;\n    &:hover {\n        cursor: pointer;\n    }\n"]);return b=function(){return e},e}function E(){var e=Object(g.a)(["\n    color: red;\n    margin-left: 1rem;\n"]);return E=function(){return e},e}function y(){var e=Object(g.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin-right: auto;\n"]);return y=function(){return e},e}function v(){var e=Object(g.a)(["\n    margin-right: 1rem;\n    &:hover {\n        cursor: pointer;\n    }\n"]);return v=function(){return e},e}function h(){var e=Object(g.a)(["\n    width: 100%;\n    height: 100%\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: start;\n    align-items: center;\n"]);return h=function(){return e},e}var T=O.a.div(h()),j=O.a.span(v()),w=O.a.div(y()),D=O.a.span(E()),C=O.a.span(b()),k=n(138),x=n(139),S=n(54),I={"circle-filled":S.a,"circle-outlined":x.a,edit:S.b,delete:S.c},_=function(e){var t=e.type,n=Object(p.a)(e,["type"]);return o.a.createElement(k.a,Object.assign({icon:I[t]},n))},B=n(152),P=Object(r.forwardRef)((function(e,t){var n=e.originalValue,a=void 0===n?"":n,i=e.placeholder,c=void 0===i?"":i,l=e.onBlur,u=e.onSubmit,d=e.onChange,s=Object(r.useState)(a),f=Object(B.a)(s,2),p=f[0],m=f[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(p)}},o.a.createElement("input",{type:"text",name:"edit-text",placeholder:c,ref:t,value:p,onChange:function(e){m(e.target.value),d()},onBlur:l}))})),M=Object(r.forwardRef)((function(e,t){var n=e.todo,r=e.onBtnSelectionClick,a=e.onBtnEditClick,i=e.onBtnDeleteClick,c=e.onInputTextBlur,l=e.onInputTextOnChange,u=e.onInputTextSubmit,d=n.title,s=n.selected,f=n.id,p=n.editing,m=n.errorMessage;return o.a.createElement(T,null,o.a.createElement(j,null,o.a.createElement(_,{type:s?"circle-filled":"circle-outlined",onClick:function(){return r(f)}})),o.a.createElement(w,null,p?o.a.createElement(P,{originalValue:d,placeholder:"Enter new todo title",onBlur:function(){return c(n)},onSubmit:u(f),ref:t,onChange:function(){return l(f)}}):d,m&&o.a.createElement(D,null,m)),p?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null,o.a.createElement(_,{type:"edit",onClick:function(){return a(f)}})),o.a.createElement(C,null,o.a.createElement(_,{type:"delete",onClick:i(f)}))))}));function R(){var e=Object(g.a)(["\n    &:hover {\n        background-color: #F7F9F9\n    }\n"]);return R=function(){return e},e}var L=Object(O.a)(m.a.Item)(R()),A=Object(r.forwardRef)((function(e,t){var n=e.todos,r=void 0===n?[]:n,a=Object(p.a)(e,["todos"]);return o.a.createElement("div",null,o.a.createElement(m.a,{bordered:!0,dataSource:r,renderItem:function(e){return o.a.createElement(L,null,o.a.createElement(M,Object.assign({todo:e,ref:t},a)))}}))})),N=n(64),F=n(9),Y=n(243).a.confirm,G=function(e){return function(t){return function(){Y({title:"Are you sure you want to delete this todo?",content:"Press yes to confirm deletion",okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){e(t)}})}}},K=n(147),W=n(151),q=n(246),H=n(114),J=n.n(H);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(K.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=[{id:J()("todo"),title:"first todo",selected:!0,editing:!1,errorMessage:""}],U=function(){return{id:J()("todo"),title:"",selected:!1,editing:!0,errorMessage:""}},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{type:"TOGGLE_TODO_KEYS",payload:{keys:t,todoId:e}}},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:"SET_TODO_KEYS",payload:{entries:t,todoId:e}}},$=Object(q.a)(["todos"]),ee=n(1),te=n.n(ee),ne=te.a.shape({id:te.a.string.isRequired,title:te.a.string,selected:te.a.bool.isRequired,editing:te.a.bool.isRequired,errorMessage:te.a.string}),re=(te.a.arrayOf(ne),{todos:[]}),oe={toggleTodoSelected:function(e){return X(e,["selected"])},toggleTodoEditing:function(e){return X(e,["editing"])},addNewTodo:function(){return{type:"ADD_NEW_TODO"}},deleteTodo:function(e){return{type:"DELETE_TODO",payload:e}},setTodoTitle:function(e,t){return Z(e,{title:t})},setTodoErrorMessage:function(e,t){return Z(e,{errorMessage:t})}},ae=Object(c.b)((function(e){return{todos:$(e)}}),oe)((function(e){var t=e.todos,n=void 0===t?re.todos:t,a=e.toggleTodoSelected,i=e.toggleTodoEditing,c=e.addNewTodo,l=e.deleteTodo,u=e.setTodoTitle,d=e.setTodoErrorMessage,s=Object(r.useRef)(null),p=n.find((function(e){return!0===e.editing})),m=function(e){return n.find((function(t){return t.title.toLowerCase()===e.toLowerCase()}))};return Object(r.useEffect)((function(){s&&s.current&&s.current.focus()}),[n]),o.a.createElement(f,null,o.a.createElement(A,{todos:n,ref:s,onBtnSelectionClick:a,onBtnEditClick:function(e){p||i(e)},onBtnDeleteClick:G(l),onInputTextBlur:function(e){e.title?(d(e.id,""),i(e.id)):(d(e.id,"Please enter new todo title"),s.current.focus())},onInputTextOnChange:function(e){d(e,"")},onInputTextSubmit:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0===t.length)d(e,"Cannot submit an empty value!");else{var n=m(t);n&&n.id!==e?d(e,"This Todo already exists!"):(u(e,t),d(e,""),i(e))}}}}),o.a.createElement(N.a,{style:{float:"right",marginTop:"1rem"},type:"primary",size:"large",onClick:function(){p||c()}},"New Item",o.a.createElement(F.a,{type:"plus"})))})),ie=(n(236),n(45)),ce=n(148),le=n(241),ue=n(245),de=Object(le.a)(),se=Object(ue.a)(),fe=Object(ie.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;if("ADD_NEW_TODO"===t.type){var n=U();return[].concat(Object(W.a)(e),[z({},n)])}if("DELETE_TODO"===t.type)return e.filter((function(e){return e.id!==t.payload}));if("TOGGLE_TODO_KEYS"===t.type){var r=t.payload,o=r.keys,a=void 0===o?[]:o,i=r.todoId;return e.map((function(e){if(e.id===i){var t=a.reduce((function(t,n){return t[n]=!e[n],t}),{});return z({},e,{},t)}return e}))}if("SET_TODO_KEYS"===t.type){var c=t.payload,l=c.entries,u=void 0===l?{}:l,d=c.todoId;return e.map((function(e){return e.id===d?z({},e,{},u):e}))}return e}});var pe=function(){var e=Object(ie.createStore)(fe,Object(ce.composeWithDevTools)(Object(ie.applyMiddleware)(de)));return de.run(se),e}();i.a.render(o.a.createElement(c.a,{store:pe},o.a.createElement(ae,null)),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.162d6d77.chunk.js.map