(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"330":function(e,t,n){},"354":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),i=n(335),a=n(57),l=n(61),c=n(56),s=n(336),f=n(7),u=n(39),p=n(40);function fanslist_getFansList(e){var t,n=this;return t=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var i=t[o](r),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}(regeneratorRuntime.mark(function _callee(t){var o;return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.b)(p.a.fansUser,e).catch(function(e){console.log(e)});case 2:(o=n.sent)&&o.data&&0===o.data.errNo&&t({"type":"getFansList","list":o.data.data.dataList});case 4:case"end":return n.stop()}},_callee,n)})),function(e){return t.apply(this,arguments)}}var h,d=n(37),b=(n(330),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};var y=Object(f.b)(function(e){return m({},e.fanslist)},function(e){return{"getFansList":function getFansList(t){e(fanslist_getFansList(t))}}})(h=function(e){function Fanslist(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fanslist),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fanslist.__proto__||Object.getPrototypeOf(Fanslist)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fanslist,o["a"].Component),b(Fanslist,[{"key":"componentWillMount","value":function componentWillMount(){var e=this.props,t=e.page,n=e.size,o={"userId":1,"token":Object(d.a)(),"page":t,"size":n};this.props.getFansList&&this.props.getFansList(o)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(e)}},{"key":"onScrollToLower","value":function onScrollToLower(){var e=this.props,t=e.page,n=e.limit;this.props.getNextList&&this.props.getNextList({"page":t+1,"limit":n,"userId":userId})}},{"key":"render","value":function render(){var e=this.props.list;return console.log("粉丝列表"),console.log(e),r.b.createElement(l.a,{"style":{"height":"100vh","paddingTop":"46PX","paddingBottom":"65PX","paddingLeft":"10PX","paddingRight":"10PX","boxSizing":"border-box"},"onScrollToLower":this.onScrollToLower.bind(this),"scrollX":!1,"scrollY":!0},e&&e.length?e.map(function(e){return r.b.createElement(i.a,{"className":"fans-list"},r.b.createElement(i.a,{"className":"head"},r.b.createElement(i.a,{"className":"head-img-name"},r.b.createElement(c.a,{"className":"head-img","src":e.photo?e.photo:""}),r.b.createElement(i.a,{"className":"name"},e.nick?e.nick:""))))}):r.b.createElement(i.a,{"className":"list-no-price"},r.b.createElement(s.a,null,"暂时还没有粉丝！")))}}]),Fanslist}())||h,v=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var g=function(e){function Fans(){!function fans_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fans);var e=function fans_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fans.__proto__||Object.getPrototypeOf(Fans)).apply(this,arguments));return e.config={"navigationBarTitleText":"粉丝列表"},e.state={"status":"more"},e}return function fans_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fans,o["a"].Component),v(Fans,[{"key":"handleClick","value":function handleClick(){o.a.navigateBack({"delta":1})}},{"key":"render","value":function render(){return r.b.createElement(i.a,{"className":"follow"},r.b.createElement(a.a,{"onClickLeftIcon":this.handleClick,"color":"#000","fixed":!0,"leftIconType":"chevron-left","border":!1,"title":"粉丝列表"}),r.b.createElement(y,null))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Fans}();t.default=g},"37":function(e,t,n){"use strict";n.d(t,"b",function(){return saveUserToken}),n.d(t,"a",function(){return loadUserToken});var o=n(53),r="__user_token__";function saveUserToken(e){return o.a.set(r,e),o.a.get(r)}function loadUserToken(){return o.a.get(r,"")}},"39":function(e,t,n){"use strict";n.d(t,"a",function(){return getJSON}),n.d(t,"b",function(){return postJSON});var o=n(352),r=n(337);n(1),n(8);function getJSON(e,t){return Object(o.b)(),Object(r.a)({"url":e,"data":t,"method":"GET"}).then(function(e){return Object(o.a)(),e})}function postJSON(e,t){return Object(o.b)(),Object(r.a)({"header":{"content-type":"application/json"},"url":e,"data":t,"method":"POST"}).then(function(e){return Object(o.a)(),e})}},"40":function(e,t,n){"use strict";t.a={"gettopics":"http://39.98.190.70:2023/free/activity/list","getactdetails":"http://39.98.190.70:2023/free/activity/info","getCode":"http://39.98.190.70:2023/free/user/loginSendSms","login":"http://39.98.190.70:2023/free/user/login","userList":"http://39.98.190.70:2023/free/activity/userList","partakePrice":"http://39.98.190.70:2023/free/action/raffle","commentList":"http://39.98.190.70:2023/free/activity/commentAndLikeInfo","userInfo":"http://39.98.190.70:2023/free/user/info","followUser":"http://39.98.190.70:2023/free/user/attention/list","fansUser":"http://39.98.190.70:2023/free/user/fans/list","priceList":"http://39.98.190.70:2023/free/user/activity/list"}},"41":function(e,t,n){var o=n(42);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(36)(o,r);o.locals&&(e.exports=o.locals)},"42":function(e,t,n){(e.exports=n(35)(!1)).push([e.i,".taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}",""])},"49":function(e,t,n){var o=n(50);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(36)(o,r);o.locals&&(e.exports=o.locals)},"50":function(e,t,n){(e.exports=n(35)(!1)).push([e.i,".taro-scroll {\n  -webkit-overflow-scrolling: touch;\n}\n\n.taro-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n.taro-scroll-view {\n  overflow: hidden;\n}\n\n.taro-scroll-view__scroll-x {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.taro-scroll-view__scroll-y {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}",""])},"56":function(e,t,n){"use strict";n(34);var o=n(1),r=n(31),i=n.n(r),a=(n(41),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var c=function(e){function Image(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,o["b"].Component),l(Image,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,r=e.style,l=e.mode,c=e.onLoad,s=e.onError,f=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["className","src","style","mode","onLoad","onError"]),u=i()("taro-img",{"taro-img__widthfix":"widthFix"===l},t),p="taro-img__mode-"+(l||"scaleToFill").toLowerCase().replace(/\s/g,"");return o.b.createElement("div",a({"className":u,"style":r},f),o.b.createElement("img",{"className":p,"src":n,"onLoad":c,"onError":s}))}}]),Image}();t.a=c},"57":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(1),r=n(335),i=n(336),a=n(33),l=n.n(a),c=n(31),s=n.n(c),f=n(32),u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var p=function(e){function AtNavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNavBar.__proto__||Object.getPrototypeOf(AtNavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNavBar,f["a"]),u(AtNavBar,[{"key":"handleClickLeftView","value":function handleClickLeftView(){var e;(e=this.props).onClickLeftIcon.apply(e,arguments)}},{"key":"handleClickSt","value":function handleClickSt(){var e;(e=this.props).onClickRgIconSt.apply(e,arguments)}},{"key":"handleClickNd","value":function handleClickNd(){var e;(e=this.props).onClickRgIconNd.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,a=e.color,l=e.fixed,c=e.border,f=e.leftIconType,u=e.leftText,p=e.title,h=e.rightFirstIconType,d=e.rightSecondIconType,b={"color":a},m=s()("at-icon",_defineProperty({},"at-icon-"+f,f)),y=s()("at-icon",_defineProperty({},"at-icon-"+h,h)),v=s()("at-icon",_defineProperty({},"at-icon-"+d,d));return o.b.createElement(r.a,{"className":s()({"at-nav-bar":!0,"at-nav-bar--fixed":l,"at-nav-bar--no-border":!c},n),"style":t},o.b.createElement(r.a,{"className":"at-nav-bar__left-view","onClick":this.handleClickLeftView.bind(this),"style":b},f&&o.b.createElement(i.a,{"className":m}),o.b.createElement(i.a,{"className":"at-nav-bar__text"},u)),o.b.createElement(r.a,{"className":"at-nav-bar__title"},p),o.b.createElement(r.a,{"className":"at-nav-bar__right-view"},o.b.createElement(r.a,{"className":s()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!d}),"style":b,"onClick":this.handleClickNd.bind(this)},d&&o.b.createElement(i.a,{"className":v})),o.b.createElement(r.a,{"className":s()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!h}),"style":b,"onClick":this.handleClickSt.bind(this)},h&&o.b.createElement(i.a,{"className":y}))))}}]),AtNavBar}();p.defaultProps={"customStyle":"","className":"","fixed":!1,"border":!0,"color":"","leftIconType":"","leftText":"","title":"","rightFirstIconType":"","rightSecondIconType":"","onClickLeftIcon":function onClickLeftIcon(){},"onClickRgIconSt":function onClickRgIconSt(){},"onClickRgIconNd":function onClickRgIconNd(){}},p.propTypes={"customStyle":l.a.oneOfType([l.a.object,l.a.string]),"className":l.a.oneOfType([l.a.array,l.a.string]),"fixed":l.a.bool,"border":l.a.bool,"color":l.a.string,"leftIconType":l.a.string,"leftText":l.a.string,"title":l.a.string,"rightFirstIconType":l.a.string,"rightSecondIconType":l.a.string,"onClickLeftIcon":l.a.func,"onClickRgIconSt":l.a.func,"onClickRgIconNd":l.a.func}},"61":function(e,t,n){"use strict";n(34);var o=n(1),r=n(43),i=n(31),a=n.n(i),l=(n(49),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}function easeOutScroll(e,t,n){if(e!==t&&"number"==typeof e){var o=t-e,r=500,i=+new Date,a=t>=e;!function step(){e=function linear(e,t,n,o){return n*e/o+t}(+new Date-i,e,o,r),a&&e>=t||!a&&t>=e?n(t):(n(e),requestAnimationFrame(step))}()}}var s=function(e){function ScrollView(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ScrollView),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ScrollView.__proto__||Object.getPrototypeOf(ScrollView)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ScrollView,o["b"].Component),c(ScrollView,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;setTimeout(function(){var t=e.props;t.scrollY&&"number"==typeof t.scrollTop&&("scrollWithAnimation"in t?easeOutScroll(0,t.scrollTop,function(t){e.container.scrollTop=t}):e.container.scrollTop=t.scrollTop,e._scrollTop=t.scrollTop),t.scrollX&&"number"==typeof t.scrollLeft&&("scrollWithAnimation"in t?easeOutScroll(0,t.scrollLeft,function(t){e.container.scrollLeft=t}):e.container.scrollLeft=t.scrollLeft,e._scrollLeft=t.scrollLeft)},10)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=this,n=this.props;e.scrollY&&"number"==typeof e.scrollTop&&e.scrollTop!==this._scrollTop&&("scrollWithAnimation"in e?easeOutScroll(this._scrollTop,e.scrollTop,function(e){t.container.scrollTop=e}):this.container.scrollTop=e.scrollTop,this._scrollTop=e.scrollTop),e.scrollX&&"number"==typeof n.scrollLeft&&e.scrollLeft!==this._scrollLeft&&("scrollWithAnimation"in e?easeOutScroll(this._scrollLeft,e.scrollLeft,function(e){t.container.scrollLeft=e}):this.container.scrollLeft=e.scrollLeft,this._scrollLeft=e.scrollLeft)}},{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.className,c=n.onScroll,s=n.onScrollToUpper,f=n.onScrollToLower,u=n.scrollX,p=n.scrollY,h=this.props,d=h.upperThreshold,b=void 0===d?50:d,m=h.lowerThreshold,y=void 0===m?50:m,v=a()("taro-scroll",(_defineProperty(e={},"taro-scroll-view__scroll-x",u),_defineProperty(e,"taro-scroll-view__scroll-y",p),e),i);b=parseInt(b),y=parseInt(y);var g=function throttle(e,t){var n=null;return function(){clearTimeout(n),n=setTimeout(function(){e()},t)}}(function uperAndLower(){var e=t.container,n=e.offsetWidth,o=e.offsetHeight,r=e.scrollLeft,i=e.scrollTop,a=e.scrollHeight,l=e.scrollWidth;f&&(t.props.scrollY&&o+i+y>=a||t.props.scrollX&&n+r+y>=l)&&f(),s&&(t.props.scrollY&&i<=b||t.props.scrollX&&r<=b)&&s()},200);return o.b.createElement("div",l({"ref":function ref(e){t.container=e}},Object(r.a)(this.props,["className","scrollTop","scrollLeft"]),{"className":v,"onScroll":function _onScroll(e){var n=t.container,o=n.scrollLeft,r=n.scrollTop,i=n.scrollHeight,a=n.scrollWidth;t._scrollLeft=o,t._scrollTop=r,e.detail={"scrollLeft":o,"scrollTop":r,"scrollHeight":i,"scrollWidth":a},g(),c&&c(e)}}),this.props.children)}}]),ScrollView}();t.a=s}}]);