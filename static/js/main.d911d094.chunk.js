(this.webpackJsonpreact_crash_todo=this.webpackJsonpreact_crash_todo||[]).push([[0],{34:function(t,e,n){t.exports=n(62)},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=n(19),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(14),h=n(11),f=n(15),b=n.n(f),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.checked=function(t){document.addEventListener("mousedown",(function(t){t.detail>1&&t.preventDefault()}),!1),n.props.toggleComplete(Number(t.target.id))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title,o=t.completed;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",checked:o,onChange:this.props.toggleComplete.bind(this,e),style:{cursor:"pointer"}}),a.a.createElement("span",{style:{cursor:"pointer"},id:e,onClick:this.checked}," "+n),a.a.createElement("button",{style:y,onClick:this.props.deleteItem.bind(this,e)},"X"))}}]),e}(o.Component),y={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},v=g,E=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(v,{key:e.id,todo:e,completed:e.completed,toggleComplete:t.props.toggleComplete,deleteItem:t.props.deleteItem})}))}}]),e}(a.a.Component);var j={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},O={color:"#fff",textDecoration:"none"},k=function(){return a.a.createElement("header",{style:j},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:O,to:"/"},"Home")," ","|"," ",a.a.createElement(m.b,{style:O,to:"/about"},"About"))},C=n(33),x=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState(Object(C.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:1}}))}}]),e}(o.Component);var S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList App v1.0.0. It is part of a React crash course"))},A=(n(61),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.toggleComplete=function(t){console.log(t),n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.deleteItem=function(t){b.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){b.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;b.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(k,null),a.a.createElement("div",{className:"container"},a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{addTodo:t.addTodo}),a.a.createElement(E,{todos:t.state.todos,toggleComplete:t.toggleComplete,deleteItem:t.deleteItem}))}}),a.a.createElement(h.a,{path:"/TodoListApp-ReactJS/about",component:S}))))}}]),e}(a.a.Component));c.a.render(a.a.createElement(A,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d911d094.chunk.js.map