(this.webpackJsonpdailytodo=this.webpackJsonpdailytodo||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(0),r=n.n(a),i=n(12),c=n.n(i),b=n(2),d=n(17),f=n(7),u=n(4),l=n(33),g=n(3);function s(){var e=Object(u.a)(["\n  background: #ff34b3;\n  background-image: -webkit-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -moz-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -ms-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -o-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: linear-gradient(to bottom, #ff34b3, #2980b9);\n  -webkit-border-radius: 28;\n  -moz-border-radius: 28;\n  border-radius: 28px;\n  font-family: Courier New;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 5px 10px 5px 10px;\n  text-decoration: none;\n\n  &:hover {\n    background: #3cb0fd;\n    background-image: -webkit-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -moz-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -ms-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -o-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: linear-gradient(to bottom, #3cb0fd, #ff34b3);\n    text-decoration: none;\n}\n"]);return s=function(){return e},e}var p=g.a.input(s());function m(e){var t=e.insertTodo,n=Object(a.useState)({title:"",id:"",tag:"",timeDue:"",isComplete:!1}),r=Object(f.a)(n,2),i=r[0],c=r[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.title.trim()&&(t(Object(b.a)(Object(b.a)({},i),{},{id:Object(l.a)()})),c(Object(b.a)(Object(b.a)({},i),{},{title:""})))},children:[Object(o.jsx)("input",{type:"text",value:i.title,onChange:function(e){c(Object(b.a)(Object(b.a)({},i),{},{title:e.target.value}))}}),Object(o.jsx)(p,{type:"submit",value:"Do it"})]})}function j(){var e=Object(u.a)(["\n  background: #ff34b3;\n  background-image: -webkit-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -moz-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -ms-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: -o-linear-gradient(top, #ff34b3, #2980b9);\n  background-image: linear-gradient(to bottom, #ff34b3, #2980b9);\n  -webkit-border-radius: 28;\n  -moz-border-radius: 28;\n  border-radius: 28px;\n  font-family: Courier New;\n  color: #ffffff;\n  font-size: 12px;\n  padding: 5px 10px 5px 10px;\n  text-decoration: none;\n\n  &:hover {\n    background: #3cb0fd;\n    background-image: -webkit-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -moz-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -ms-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: -o-linear-gradient(top, #3cb0fd, #ff34b3);\n    background-image: linear-gradient(to bottom, #3cb0fd, #ff34b3);\n    text-decoration: none;\n}"]);return j=function(){return e},e}var x=g.a.button(j());function O(e){var t=e.todo,n=e.removeTodo,a=e.toggleIsComplete;return Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("input",{type:"checkbox",onClick:function(){a(t.id)}}),Object(o.jsx)("li",{style:{textDecoration:t.isComplete?"line-through":null},children:t.title}),Object(o.jsx)(x,{onClick:function(){n(t.id)},children:"Done it"})]})}function k(){var e=Object(u.a)(["\nlist-style-type: none;\n"]);return k=function(){return e},e}var v=g.a.ul(k());function h(e){var t=e.todo,n=e.removeTodo,a=e.toggleIsComplete;return Object(o.jsx)(v,{children:t.map((function(e){return Object(o.jsx)(O,{todo:e,removeTodo:n,toggleIsComplete:a},e.id)}))})}n(27);var y=n.p+"static/media/synth-skyline.8336e8fb.mp4",w=n.p+"static/media/Resonance.f3805537.mp3",C=n(16),z=n.n(C);var I=function(){new Audio(w);var e=new Date,t="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()),n=Object(a.useState)([]),r=Object(f.a)(n,2),i=r[0],c=r[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todo",JSON.stringify(i))}),[i]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(z.a,{src:w,autoPlay:!0,loop:!0,controls:!0}),Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("video",{style:{position:"absolute",width:"100%",left:"50%",top:"50%",height:"100%",objectFit:"cover",transform:"translate(-50%,-50%)",zIndex:"-2"},autoPlay:!0,loop:!0,muted:!0,children:Object(o.jsx)("source",{src:y,type:"video/mp4"})}),Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:"Your Todo List"}),Object(o.jsx)(m,{insertTodo:function(e){c([e].concat(Object(d.a)(i)))}}),Object(o.jsx)(h,{todo:i,removeTodo:function(e){c(i.filter((function(t){return t.id!==e})))},toggleIsComplete:function(e){c(i.map((function(t){return t.id===e?Object(b.a)(Object(b.a)({},t),{},{isComplete:!t.isComplete}):t})))}})]})]})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cb0ad72b.chunk.js.map