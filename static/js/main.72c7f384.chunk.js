(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),r=n.n(c),o=n(14),s=n(4),l=n(3),u=n(13),d=n.n(u),m=Object(l.a)({form:{display:"flex",flexDirection:"column",flex:1},title:{margin:0,padding:0,maginBottom:10,fontSize:20,color:"lightslategray"},input:{padding:5},btn:{width:150,marginTop:10,padding:5,backgroundColor:"paleturquoise"}}),b=n(1),j=function(e){var t=e.onChangeContacts,n=m(),i=Object(a.useState)(""),c=Object(s.a)(i,2),r=c[0],o=c[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),j=u[0],h=u[1];return Object(b.jsxs)("form",{className:n.form,onSubmit:function(e){e.preventDefault();var n={id:d.a.generate(),name:r,number:j};t(n),o(""),h("")},children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("h3",{className:n.title,children:"Name"}),Object(b.jsx)("input",{className:n.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("h3",{className:n.title,children:"Number"}),Object(b.jsx)("input",{className:n.input,type:"tel",name:"number",value:j,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){return h(e.target.value)}})]}),Object(b.jsx)("button",{className:n.btn,type:"submit",children:"Add contact"})]})},h=Object(l.a)({list:{margin:0,padding:0,marginTop:20},item:{marginBottom:5,fontWeight:600},span:{marginRight:10,fontWeight:400},btn:{color:"maroon",backgroundColor:"salmon"}}),p=function(e){var t=e.contacts,n=e.onDeleteContact,a=h();return Object(b.jsx)("ul",{className:a.list,children:t.map((function(e){var t=e.id,i=e.name,c=e.number;return Object(b.jsxs)("li",{className:a.item,children:[i,": ",Object(b.jsx)("span",{className:a.span,children:c}),Object(b.jsx)("button",{className:a.btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},g=Object(l.a)({title:{margin:0,padding:0,maginBottom:10,color:"lightslategray"},input:{padding:5}}),O=function(e){var t=e.onFilter,n=e.filter,a=g();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:a.title,children:"Find contacts by name"}),Object(b.jsx)("input",{className:a.input,type:"text",value:n,onChange:t})]})},f=Object(l.a)({container:{marginLeft:30}}),x=function(){var e=f(),t=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(s.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),u=l[0],d=l[1],m=u.toLowerCase(),h=i.filter((function(e){return e.name.toLowerCase().includes(m)}));return Object(b.jsxs)("div",{className:e.container,children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(j,{onChangeContacts:function(e){return i.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(O,{onFilter:function(e){return d(e.target.value)},filter:u}),Object(b.jsx)(p,{contacts:h,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.72c7f384.chunk.js.map