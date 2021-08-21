(this["webpackJsonp@shared-service/demo"]=this["webpackJsonp@shared-service/demo"]||[]).push([[0],{20:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(93),t)},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.actionTypes=void 0,t.actionTypes={close:"action/close",getState:"action/getState",setState:"action/setState",unsubscribe:"action/unsubscribe",execute:"action/execute"}},54:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Transport=void 0;var s=o(n(95)),i=n(43),a=n(67),c=function(e){function t(t){var n=t.port,r=t.timeout,o=void 0===r?15e3:r,s=e.call(this)||this;return s._onMessage=function(e){var t=e.data;if(t.type!==s.events.request)if(t.type!==s.events.response)t.type===s.events.push&&s.emit(s.events.push,t.payload);else{var n=t.requestId;if(n&&s._requests.has(n)){var r=t.error;if(r)s._requests.get(n).reject(new Error(r));else{var o=t.result;s._requests.get(n).resolve(o)}}}else s.emit(s.events.request,{requestId:t.requestId,payload:t.payload})},s._timeout=o,s._port=n,s._requests=new Map,s._port.addEventListener("message",s._onMessage),s}return r(t,e),t.prototype.request=function(e){var t=this,n=e.payload,r=s.default.v4(),o=new Promise((function(e,o){t._requests.set(r,{resolve:e,reject:o}),t._port.postMessage({type:t.events.request,payload:n,requestId:r})})),i=setTimeout((function(){i=null,t._requests.get(r).reject(new Error(t.events.timeout))}),this._timeout);return o=o.then((function(e){return void 0!==i&&null!==i&&clearTimeout(i),t._requests.delete(r),Promise.resolve(e)})).catch((function(e){return void 0!==i&&null!==i&&clearTimeout(i),t._requests.delete(r),Promise.reject(e)}))},t.prototype.response=function(e){var t=e.requestId,n=e.result,r=e.error;this._port.postMessage({type:this.events.response,requestId:t,result:n,error:r})},t.prototype.push=function(e){var t=e.payload;this._port.postMessage({type:this.events.push,payload:t})},t.prototype.dispose=function(){this._requests=new Map,this._port.removeEventListener("message",this._onMessage)},Object.defineProperty(t.prototype,"events",{get:function(){return a.eventTypes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"port",{get:function(){return this._port},enumerable:!1,configurable:!0}),t}(i.EventEmitter);t.Transport=c},59:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(94),t),o(n(68),t),o(n(98),t),o(n(69),t),o(n(44),t),o(n(67),t),o(n(99),t),o(n(54),t)},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.eventTypes=void 0,t.eventTypes={request:"transport/request",response:"transport/response",push:"transport/push",timeout:"transport/timeout"}},68:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedServiceServer=void 0;var i=n(43),a=n(69),c=n(44),u=function(e){function t(t){var n=e.call(this)||this;return n._ports=[],n._executors={},n._state=t||{},n}return r(t,e),t.prototype.onNewPort=function(e){var t=this,n=new a.ClientPort(e);this._ports.push(n),n.on(c.actionTypes.close,(function(){t._ports=t._ports.filter((function(e){return e!==n})),n.removeAllListeners(),n.dispose()})),n.on(c.actionTypes.getState,(function(e){var r=e.key,o=e.requestId,s=t.getState(r);n.response({requestId:o,result:s,error:null})})),n.on(c.actionTypes.setState,(function(e){var r=e.key,o=e.state,s=e.requestId;t.setState(r,o),n.response({requestId:s,result:"ok",error:null})})),n.on(c.actionTypes.execute,(function(e){var r=e.funcName,i=e.args,a=e.requestId;return o(t,void 0,void 0,(function(){var e,t,o,c;return s(this,(function(s){switch(s.label){case 0:if(!(e=this._executors[r]))return n.response({requestId:a,result:null,error:"Function not found"}),[2];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,e.apply(void 0,i)];case 2:return t=s.sent(),[3,4];case 3:return c=s.sent(),o=c.message,[3,4];case 4:return n.response({requestId:a,result:t,error:o}),[2]}}))}))}))},t.prototype.getState=function(e){return this._state[e]},t.prototype.setState=function(e,t){"string"===typeof e&&(this._state[e]=t,this._ports.forEach((function(n){n.pushState(e,t)})),this.emit("stateChange",{key:e,state:t}))},t.prototype.registerExecutor=function(e,t){if(this._executors[e])throw new Error(e+" is registered.");this._executors[e]=t},t.prototype.unregisterExecutor=function(e){delete this._executors[e]},t.prototype.dispose=function(){this._executors={},this._ports.forEach((function(e){e.removeAllListeners(),e.dispose()})),this._ports=[]},t}(i.EventEmitter);t.SharedServiceServer=u},69:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ClientPort=void 0;var o=n(43),s=n(54),i=n(44),a=function(e){function t(t){var n=e.call(this)||this;return n._subscribedStateKeys={},n._transport=new s.Transport({port:t}),n._transport.on(n._transport.events.push,(function(e){e.action===i.actionTypes.close&&n.emit(i.actionTypes.close),e.action===i.actionTypes.unsubscribe&&delete n._subscribedStateKeys[e.key]})),n._transport.on(n._transport.events.request,(function(e){n._handleRequest(e)})),"function"===typeof t.start&&t.start(),n}return r(t,e),t.prototype._handleRequest=function(e){var t=e.payload;if(t.action===i.actionTypes.getState)return this._subscribedStateKeys[t.key]=!0,void this.emit(i.actionTypes.getState,{key:t.key,requestId:e.requestId});t.action!==i.actionTypes.setState?t.action===i.actionTypes.execute&&this.emit(i.actionTypes.execute,{funcName:t.funcName,args:t.args,requestId:e.requestId}):this.emit(i.actionTypes.setState,{key:t.key,state:t.state,requestId:e.requestId})},t.prototype.response=function(e){var t=e.requestId,n=e.result,r=e.error;this._transport.response({requestId:t,result:n,error:r})},t.prototype.dispose=function(){this._transport.removeAllListeners(),this._transport.dispose(),this._transport=null},t.prototype.pushState=function(e,t){this._subscribedStateKeys[e]&&this._transport.push({payload:{action:i.actionTypes.setState,key:e,state:t}})},t}(o.EventEmitter);t.ClientPort=a},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(38),o=n.n(r),s=n(39),i=n(76),a=n(60),c=n(71),u=n.n(c),p=n(59);function l(e,t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(o.a.mark((function e(t,n){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.keys();case 2:return r=e.sent,s=r.map((function(e){return t.getItem(e).then((function(t){n.setState(e,t)}))})),e.next=6,Promise.all(s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.a.createInstance({name:"todoData"}),e.next=3,n.ready();case 3:return e.next=5,l(n,t);case 5:t.on("stateChange",(function(e){var t=e.key,r=e.state;n.setItem(t,r)})),"undefined"!==typeof window&&window.addEventListener("focus",(function(){l(n,t)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){var e=new p.SharedServiceServer({tasks:[{id:0,name:"Eat",completed:!0},{id:1,name:"Sleep",completed:!1},{id:2,name:"Repeat",completed:!1}],taskInput:""});return e.registerExecutor("addTask",(function(){var t=e.getState("taskInput");if(t){var n=e.getState("tasks"),r={id:Date.now(),name:t,completed:!1};e.setState("tasks",[].concat(Object(i.a)(n),[r])),e.setState("taskInput","")}})),e.registerExecutor("updateTaskCompleted",(function(t,n){var r=e.getState("tasks").map((function(e){return t===e.id?Object(s.a)(Object(s.a)({},e),{},{completed:n}):e}));e.setState("tasks",r)})),e.registerExecutor("deleteTask",(function(t){var n=e.getState("tasks").filter((function(e){return t!==e.id}));e.setState("tasks",n)})),e.registerExecutor("editTask",(function(t,n){var r=e.getState("tasks").map((function(e){return t===e.id?Object(s.a)(Object(s.a)({},e),{},{name:n}):e}));e.setState("tasks",r)})),function(e){d.apply(this,arguments)}(e),e}},77:function(e,t,n){"use strict";var r=n(30),o=n(0),s=n(40),i=n(157),a=n(159),c=n(160),u=n(158),p=n(161),l=n(156),f=n(154),d=n(146),h=n(20),y=n(149),v=n(151),b=n(155),_=n(153),j=n(162),m=n(152),S=n(75),O=n.n(S),x=n(74),g=n.n(x),w=n(73),k=n.n(w),T=n(7),q=Object(d.a)({itemText:{paddingRight:"50px"},text:{cursor:"pointer"}});var P=function(e){var t=e.id,n=e.name,o=e.completed,i=e.handleCompleteChange,a=e.deleteTask,u=e.editTask,p=q(),l=Object(h.useSharedState)("editing-".concat(t),!1),f=Object(r.a)(l,2),d=f[0],S=f[1],x=Object(h.useSharedState)("editingName-".concat(t),n),w=Object(r.a)(x,2),P=w[0],C=w[1],E=function(){P&&(P!==n&&u(P),S(!1))};return Object(T.jsxs)(y.a,{children:[Object(T.jsx)(v.a,{children:Object(T.jsx)(j.a,{edge:"start",checked:o,tabIndex:-1,disableRipple:!0,onChange:i})}),Object(T.jsx)(_.a,{className:p.itemText,children:d?Object(T.jsx)(c.a,{variant:"outlined",multiline:!0,fullWidth:!0,onChange:function(e){C(e.target.value)},value:P}):Object(T.jsx)(s.a,{onClick:function(){return S(!0)},className:p.text,children:n})}),Object(T.jsx)(b.a,{children:d?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(m.a,{edge:"end","aria-label":"Cancel",onClick:E,children:Object(T.jsx)(k.a,{})}),Object(T.jsx)(m.a,{edge:"end","aria-label":"Save",onClick:E,children:Object(T.jsx)(g.a,{})})]}):Object(T.jsx)(m.a,{edge:"end","aria-label":"Delete",onClick:a,children:Object(T.jsx)(O.a,{})})})]})},C=Object(d.a)({root:{paddingTop:"20px",display:"flex",flexDirection:"column",minHeight:"100%"},form:{paddingTop:"20px",display:"flex",flexDirection:"column",alignItems:"flex-end"},remaining:{padding:"20px 0"},list:{flex:1}}),E={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},I=Object.keys(E);t.a=function(){var e=Object(h.useSharedState)("tasks",[]),t=Object(r.a)(e,1)[0],n=Object(h.useSharedState)("taskInput",""),d=Object(r.a)(n,2),y=d[0],v=d[1],b=Object(o.useState)(0),_=Object(r.a)(b,2),j=_[0],m=_[1],S=C(),O=t.filter(E[I[j]]),x=O.map((function(e){return Object(T.jsx)(P,{id:e.id,name:e.name,completed:e.completed,handleCompleteChange:function(t){var n,r;n=e.id,r=t.target.checked,$sharedService.execute("updateTaskCompleted",[n,r])},deleteTask:function(){var t;t=e.id,$sharedService.execute("deleteTask",[t])},editTask:function(t){var n,r;n=e.id,r=t,$sharedService.execute("editTask",[n,r])}},e.id)})),g=I.map((function(e){return Object(T.jsx)(l.a,{label:e},e)}));return Object(T.jsxs)(i.a,{maxWidth:"sm",className:S.root,children:[Object(T.jsx)(s.a,{variant:"h4",component:"h1",children:"My TODO List"}),Object(T.jsxs)("form",{className:S.form,children:[Object(T.jsx)(c.a,{value:y,onChange:function(e){v(e.target.value)},label:"TODO",placeholder:"What needs to be done?",fullWidth:!0,multiline:!0,minRows:3,maxRows:10,margin:"normal",variant:"outlined"}),Object(T.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){return $sharedService.execute("addTask")},children:"Add"})]}),Object(T.jsx)(p.a,{value:j,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){m(t)},"aria-label":"TODO filter",children:g}),Object(T.jsxs)(s.a,{variant:"h6",component:"h6",className:S.remaining,children:[O.length," tasks remaining"]}),Object(T.jsx)(f.a,{className:S.list,children:x}),Object(T.jsxs)(s.a,{variant:"body2",color:"textSecondary",align:"center",children:["Powered by \xa0",Object(T.jsx)(a.a,{href:"https://github.com/shared-service/shared-service",target:"_blank",children:"Shared Service"})]})]})}},79:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),o=n(10),s=n.n(o),i=n(20),a=n(70),c=n(77),u=n(7);if("undefined"!==typeof SharedWorker){var p=new SharedWorker(e,void 0);Object(i.initSharedService)({port:p.port})}else{Object(a.a)().onNewPort(window),Object(i.initSharedService)({port:window})}s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(c.a,{})}),document.getElementById("root"))}.call(this,n(88))},88:function(e,t,n){e.exports=n.p+"static/js/0.1be9dbba.chunk.worker.js"},93:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.useSharedState=t.initSharedService=void 0;var r,o,s=n(0),i=n(59);"undefined"!==typeof window&&(o=window),"undefined"!==typeof e&&(o=e.window||e),t.initSharedService=function(e){var t=e.port;r=new i.SharedServiceClient({port:t}),o.$sharedService=r},t.useSharedState=function(e,t){var n=s.useState(t),o=n[0],i=n[1];return r?(s.useEffect((function(){r.getState(e).then((function(e){e&&i(e)})).catch((function(e){console.error(e)}));return r.subscribe(e,(function(e){i(e)}))}),[]),[o,function(t){return r.setState(e,t)}]):(console.warn("Share service is not initialized."),[o,i])}}).call(this,n(64))},94:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(t){s(t)}}function a(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedServiceClient=void 0;var i=n(43),a=n(54),c=n(44),u=function(e){function t(t){var n=t.port,r=e.call(this)||this;return r._port=n,r._transport=new a.Transport({port:n}),r._transport.on(r._transport.events.push,(function(e){e.action===c.actionTypes.setState&&r.emit(e.key,e.state)})),"function"===typeof n.start&&n.start(),window.addEventListener("unload",(function(){r._transport.push({payload:{action:c.actionTypes.close}})})),r}return r(t,e),t.prototype.subscribe=function(e,t){var n=this;return this.on(e,t),function(){n.off(e,t),n._transport.push({payload:{action:c.actionTypes.unsubscribe,key:e}})}},t.prototype.setState=function(e,t){return o(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,this._transport.request({payload:{action:c.actionTypes.setState,key:e,state:t}})];case 1:return n.sent(),[2]}}))}))},t.prototype.getState=function(e){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._transport.request({payload:{action:c.actionTypes.getState,key:e}})];case 1:return[2,t.sent()]}}))}))},t.prototype.execute=function(e,t){return o(this,void 0,void 0,(function(){return s(this,(function(n){return[2,this._transport.request({payload:{action:c.actionTypes.execute,funcName:e,args:t}})]}))}))},t}(i.EventEmitter);t.SharedServiceClient=u},98:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.SharedServiceWorker=void 0;var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.onConnect=function(e){this.onNewPort(e.ports[0])},t}(n(68).SharedServiceServer);t.SharedServiceWorker=o},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}},[[79,1,2]]]);
//# sourceMappingURL=main.fe24d350.chunk.js.map