(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"193":function(e,t,n){},"215":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n(198),i=n(7),s=n(50),c=n(53),u=n(51);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var a=t[o](r),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}n(193);var l,p=n(207),d=n(196),f=n(214),h=n(149),b=n(146),v=n(208),g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var m=Object(i.b)(function(e){return{"code":e.user.code,"token":e.user.token}},function(e){return{"getCode":function getCode(t){e(function user_getCode(e){var t,n=this;return t=_asyncToGenerator(regeneratorRuntime.mark(function _callee(t){var o;return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.b)(u.a.getCode,e).catch(function(e){console.log(e)});case 2:(o=n.sent)&&o.data&&0===o.data.errNo&&t({"type":"getCode","code":o.data.data});case 4:case"end":return n.stop()}},_callee,n)})),function(e){return t.apply(this,arguments)}}(t))},"loginRequest":function loginRequest(t){e(function user_loginRequest(e){var t,n=this;return t=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(t){var o;return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.b)(u.a.login,e).catch(function(e){console.log(e)});case 2:(o=n.sent)&&o.data&&0===o.data.errNo&&(Object(c.b)(o.data.data.accessToken),t({"type":"login","token":o.data.data}));case 4:case"end":return n.stop()}},_callee2,n)})),function(e){return t.apply(this,arguments)}}(t))}}})(l=function(e){function Login(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Login.__proto__||Object.getPrototypeOf(Login)).apply(this,arguments));return e.config={"navigationBarTitleText":"登录"},e.state={"value14":"","value15":"","disabled":!1,"second":60,"isOpened":!1,"text":"123","msg":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,o["a"].Component),g(Login,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"handleInput","value":function handleInput(e,t){t||""!==t?this.setState({"isOpened":!1}):"value15"===t&&this.setState({"isOpened":!0,"msg":"请输入手机号！"}),this.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,t))}},{"key":"handleCode","value":function handleCode(){this.props.getCode&&this.props.getCode({"phone":"18810910091"})}},{"key":"showTipText","value":function showTipText(){return this.state.disabled?this.state.second+"s后重试":"发送验证码"}},{"key":"sendCode","value":function sendCode(){var e=this;if(this.state.disabled)return 0;this.setState({"disabled":!0}),this.handleCode();var t=setInterval(function(){e.state.second>0?e.setState({"second":e.state.second-1}):(e.setState({"second":60,"disabled":!1}),clearInterval(t))},1e3)}},{"key":"loginSub","value":function loginSub(){if(""!==this.state.value15&&this.state.value15){var e={"appUserId":"18810910091","appType":0,"code":this.props.code};this.props.loginRequest&&this.props.loginRequest(e)}else this.setState({"isOpened":!0,"msg":"请输入手机号！"})}},{"key":"loginSubWeibo","value":function loginSubWeibo(){alert(1)}},{"key":"render","value":function render(){return r.b.createElement(a.a,{"className":"contain"},r.b.createElement(p.a,{"className":"form"},r.b.createElement(d.a,{"name":"value15","border":!0,"type":"phone","clear":!0,"placeholder":"请输入手机号","value":this.state.value15,"onChange":this.handleInput.bind(this,"value15")},r.b.createElement(a.a,{"style":{"color":this.state.disabled?"#FF4949":"","fontSize":"12px","width":"90px"},"onClick":this.sendCode.bind(this)},this.showTipText())),r.b.createElement(d.a,{"name":"value14","border":!0,"type":"text","maxLength":"6","clear":!0,"placeholder":"请输入验证码","value":this.state.value14,"onChange":this.handleInput.bind(this,"value14")}),r.b.createElement(a.a,{"className":"btn-box"},r.b.createElement(f.a,{"className":"btn","type":"primary","onClick":this.loginSub.bind(this)},"登录")),r.b.createElement(a.a,null,r.b.createElement(h.a,{"className":"line","content":"第三方登录","fontColor":"#999","lineColor":"#f0f0f0"}),r.b.createElement(a.a,{"className":"third-party-login"},r.b.createElement(b.a,{"onClick":this.loginSubWeibo.bind(this),"prefixClass":"travelerZw","value":"weibo","size":"40","color":"#F10215"})))),r.b.createElement(v.a,{"isOpened":this.state.isOpened,"duration":500,"text":this.state.msg}))}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Login}())||l;t.default=m},"50":function(e,t,n){"use strict";n.d(t,"a",function(){return getJSON}),n.d(t,"b",function(){return postJSON});var o=n(213),r=n(122);n(1),n(9);function getJSON(e,t){return Object(o.b)(),Object(r.a)({"url":e,"data":t,"method":"GET"}).then(function(e){return Object(o.a)(),e})}function postJSON(e,t){return Object(o.b)(),Object(r.a)({"header":{"content-type":"application/json"},"url":e,"data":t,"method":"POST"}).then(function(e){return Object(o.a)(),e})}},"51":function(e,t,n){"use strict";t.a={"gettopics":"http://39.98.190.70:2023/free/activity/list","getactdetails":"http://39.98.190.70:2023/free/activity/info","getCode":"http://39.98.190.70:2023/free/user/loginSendSms","login":"http://39.98.190.70:2023/free/user/login","userList":"http://39.98.190.70:2023/free/activity/userList"}},"53":function(e,t,n){"use strict";n.d(t,"b",function(){return saveUserToken}),n.d(t,"a",function(){return loadUserToken});var o=n(54),r="__user_token__";function saveUserToken(e){return o.a.set(r,e),o.a.get(r)}function loadUserToken(){return o.a.get(r,"")}}}]);