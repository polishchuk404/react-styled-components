(this["webpackJsonphomework-19"]=this["webpackJsonphomework-19"]||[]).push([[0],{18:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBA8NNy6o63sKAAACvklEQVRo3u2ZSWgUQRSGv9myGUwiGo1gghBwQZCgIPGcgyMRvKk5CIKIl0jwJKMiHkVFJCYuUcSD4k2MSHA5CEHFhQhiTCKCkIDiwkyCyWQ17WXSVPd0T/f0VPVc+tXlTfWr93+91OuumhBerIw4LWxjPTVAim+85zl9zHrKlqdVcoYkmkVLcpplquUP8cNSfKl956A68SiXc4ovtevEVMiX8syVvIbGU0rlA9yxEEoxyCApiyO3ZcsfNwn84iSb9KObOcVvU0SHTPm1TBmSd7M8K6aKa4aYSerkAfQYUrfbxh0zPYySrIEFIe25nLHnhch51skBSAhJh4nmjI3xRYg+IQegX0i53zG6TYh+IUM+woyecIpyx/gK0np8mrBTuGMADUJRecW0Y3ya17pfTn3hACsEf8zVNRu1Ge0RoEzwU64AkoJfUThASPA1VwCazWiPAIotACg6gF1h3Ukr9ZQAK4XePc7zGtgq+Gf5A8wxyiOhPjhYLU9cf/vk0/pY5Ua+hiEl8hoan6lyBuhRJq+hcdUsF8o6/59qvmkzNkctE2KHeRY0K5WHEpqNHeZZID4mn+iUJNvOFt1fnRsgIvhj3JAEsFcAiBgPFb0QBQABQAAQLWBsmB1sAIZ5y6L/AK1cojHjf6WDx17PwpsdpVeXh0Z6OeInQBOdpvdomC7Dl5BigITFrYuS8AsgRNyyf7fzMkQOQLXNdmQl1f4ATNpMun/89QdgnneW/W9Y8AcAuix7r3hJ5Q3gLg+z+h5w3z+ARfZxS1iGa9zkgMvFu8m8luJZDtNNGxuBIe7xwWOegl5GAwwUMDpjRX8dBwABQACQqw7EqJGkIi75TfXSDCBuHrQYNl1l2bjxp/kWfFQgmafCS6V7RP3OhNuZViafpsnNRYozoUR+nF1u71MdFxkR/qoptM0wwgXWWEn9B6E7P6FN+bQAAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA0LTE1VDEzOjU1OjQ2KzAwOjAwSCqsOwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNC0xNVQxMzo1NTo0NiswMDowMDl3FIcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},30:function(e,a,t){e.exports=t(41)},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),l=t(14),s=t(15),o=t(20),c=t(19),d=t(3),m=t(4),h=t(9),u=t(16),p=t(18),A=t.n(p);function f(){var e=Object(d.a)(["\nmargin: 0 auto;\nwidth: 405px;\ntransform: scale(0.9);\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\ndisplay: flex;\nwidth: 350px;\nmargin: 0 auto;\nflex-direction: row;\njustify-content: space-between;\n"]);return g=function(){return e},e}var w=m.a.div(g()),x=m.a.div(f()),E=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:"",checked:!0,emailValid:!1,passwordValid:!1,firstNameValid:!1,lastNameValid:!1,formValid:!1},e.handleCheckboxChange=function(a){e.setState((function(e){return{checked:!e.checked}}))},e.handleInputChange=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(i.a)({},t,n),(function(){return e.validateField(t,n)}))},e.validateField=function(a,t){var n=e.state,r=n.emailValid,i=n.passwordValid,l=n.firstNameValid,s=n.lastNameValid;switch(a){case"email":r=null!=t.match(/^...+@..+\...+$/);break;case"password":i=null!=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);break;case"firstName":l=null!=t.match(/^...+$/);break;case"lastName":s=null!=t.match(/^...+$/)}e.setState({emailValid:r,passwordValid:i,firstNameValid:l,lastNameValid:s})},e.sentData=function(){if(e.state.emailValid&&e.state.passwordValid&&e.state.lastNameValid&&e.state.firstNameValid){var a={firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,password:e.state.password,wantToReceive:e.state.checked};e.setState({firstName:"",lastName:"",email:"",password:"",checked:!1,firstNameValid:!1,lastNameValid:!1,emailValid:!1,passwordValid:!1,formValid:!1}),console.log(a)}else alert("Please write right data")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,{style:{height:"540px"}},r.a.createElement(S,null,r.a.createElement("img",{src:A.a,alt:""})),r.a.createElement(j,null,"Sign Up"),r.a.createElement(w,null,r.a.createElement(Q,{placeholder:"First Name *",style:{width:"150px"},name:"firstName",empty:""===this.state.firstName,hasError:this.state.firstNameValid,value:this.state.firstName,onChange:this.handleInputChange}),r.a.createElement(Q,{placeholder:"Last Name *",style:{width:"150px"},name:"lastName",empty:""===this.state.lastName,hasError:this.state.lastNameValid,value:this.state.lastName,onChange:this.handleInputChange})),r.a.createElement(Q,{placeholder:"Email Address *",style:{width:"325px"},name:"email",empty:""===this.state.email,hasError:this.state.emailValid,value:this.state.email,onChange:this.handleInputChange}),r.a.createElement(Q,{type:"password",placeholder:"Password *",style:{width:"325px"},name:"password",empty:""===this.state.password,hasError:this.state.passwordValid,value:this.state.password,onChange:this.handleInputChange}),r.a.createElement(x,null,r.a.createElement(u.a,{checked:!this.state.checked,label:"I want to receive inspiration, marketing promoting  and updates via email.",onChange:this.handleCheckboxChange})),r.a.createElement(R,{type:"button",style:{width:"325px"},onClick:this.sentData},"Sign Up"),r.a.createElement(h.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(B,{style:{marginLeft:"240px"}},"Already have an account? Sign In")),r.a.createElement(z,null,"Copyright \xa9 Your website 2020"))}}]),t}(r.a.Component);function b(){var e=Object(d.a)(["\ncolor: #474747;\ntext-align: center;\nfont-size: 12px;\nmargin: 40px auto;\n"]);return b=function(){return e},e}function y(){var e=Object(d.a)(["\nfont-family: 'Roboto', sans-serif;\ncolor: #90caf9;\nfont-size: 10px;\ncursor: pointer;\nmargin-top: 0;\ntransition : .3s;\n&:hover{\ncolor: white;\n}\n"]);return y=function(){return e},e}function v(){var e=Object(d.a)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nwidth: 300px;\nmargin: 10px auto ;\n"]);return v=function(){return e},e}function V(){var e=Object(d.a)(["\ndisplay: block;\nwidth: 300px;\nfont-family: 'Roboto', sans-serif;\nfont-weight: bold;\nbackground: #90caf9;\nborder-radius: 3px;\nheight: 35px;\nmargin: 20px auto 0;\ncolor: #121212;\ncursor: pointer;\ntransition : .5s;\n&:&hover{\nbackground-color: aqua;\n}\n   \n"]);return V=function(){return e},e}function k(){var e=Object(d.a)(["\n  display: flex;\n  height: 40px;\n  border-radius: 3px;\n  width: 300px;\n  border: ",";\n  background: transparent;\n  color : #6a6a6a;\n  padding-left: 5px;\n  margin: 0 auto 20px;\n"]);return k=function(){return e},e}function N(){var e=Object(d.a)(["\nmargin-top: 20px;\n text-align: center;\n margin-bottom: 20px;\n"]);return N=function(){return e},e}function C(){var e=Object(d.a)(["\ndisplay: flex;\nalign-item: center;\njustify-content: center;\ntext-align: center;\nwidth: 60px;\nheight: 60px;\npadding: 15px;\nmargin: 0 auto;\nbackground-color: #f08daf;\nborder-radius: 100%;\n"]);return C=function(){return e},e}function I(){var e=Object(d.a)(["\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  background-color: #121212;\n  color: #e5e5e5;\n  width: 450px;\n  height: 450px;\n  margin: 0 auto;\n  padding-top: 40px;\n"]);return I=function(){return e},e}var O=m.a.form(I()),S=m.a.div(C()),j=m.a.h5(N()),Q=m.a.input(k(),(function(e){return e.hasError?"2px solid green":e.empty?"2px solid #6a6a6a":"2px solid red"})),R=m.a.button(V()),F=m.a.div(v()),B=m.a.span(y()),z=m.a.p(b()),U=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",checked:!1,emailValid:!1,passwordValid:!1,formValid:!1},e.handleCheckboxChange=function(a){e.setState((function(e){return{checked:!e.checked}}))},e.handleInputChange=function(a){var t=a.target.name,n=a.target.value;e.setState(Object(i.a)({},t,n),(function(){return e.validateField(t,n)}))},e.validateField=function(a,t){var n=e.state,r=n.emailValid,i=n.passwordValid;switch(a){case"email":r=null!=t.match(/^...+@..+\...+$/);break;case"password":i=null!=t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)}e.setState({emailValid:r,passwordValid:i})},e.sentData=function(){if(e.state.emailValid&&e.state.passwordValid){var a={email:e.state.email,password:e.state.password,remember:e.state.checked};e.state.checked&&localStorage.setItem("user",JSON.stringify(a)),e.setState({email:"",password:"",checked:!1,emailValid:!1,passwordValid:!1,formValid:!1}),console.log(a)}else alert("Please write right data")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(S,null,r.a.createElement("img",{src:A.a,alt:""})),r.a.createElement(j,null,"Sign In"),r.a.createElement(Q,{name:"email",empty:""===this.state.email,hasError:this.state.emailValid,value:this.state.email,placeholder:"Email Address *",onChange:this.handleInputChange}),r.a.createElement(Q,{name:"password",empty:""===this.state.password,hasError:this.state.passwordValid,value:this.state.password,placeholder:"Password *",type:"password",onChange:this.handleInputChange}),r.a.createElement(x,null,r.a.createElement(u.a,{style:{marginLeft:"15px"},checked:!this.state.checked,label:"Remember me",onChange:this.handleCheckboxChange})),r.a.createElement(R,{type:"button",onClick:this.sentData},"SIGN IN"),r.a.createElement(F,null,r.a.createElement(B,{style:{paddingTop:"12px"}},"Forgot password"),r.a.createElement(h.b,{to:"/register",style:{textDecoration:"none"}},r.a.createElement(B,null," Don't have an account? Sign Up"))),r.a.createElement(z,null,"Copyright \xa9 Your website 2020"))}}]),t}(r.a.Component),Z=t(17),D=t.n(Z),T=t(7);D.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",component:U}),r.a.createElement(T.a,{path:"/register",component:E})))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c2d80436.chunk.js.map