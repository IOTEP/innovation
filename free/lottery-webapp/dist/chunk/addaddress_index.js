(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"319":function(e,t,n){},"344":function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n(335),l=n(351),i=n(57),c=n(209),s=n(214),u=n(334),d=(n(319),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function Addaddress(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Addaddress);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=n=_possibleConstructorReturn(this,(e=Addaddress.__proto__||Object.getPrototypeOf(Addaddress)).call.apply(e,[this].concat(r))),n.state={"diqu":[[{"label":"北京","value":"1"},{"label":"天津","value":"2"}],[{"label":"北京市","value":"1-1"},{"label":"天津市","value":"2-1"}],[{"label":"东城区","value":"1-1-1"},{"label":"西城区","value":"1-1-2"},{"label":"和平区","value":"2-1-1"},{"label":"西青区","value":"2-1-2"}]],"value":"","selectorChecked":[0,0,0],"rangeKey":""},n.config={"navigationBarTitleText":"新增地址"},n.onChange=function(e){n.setState({"selectorChecked":n.state.selector[e.detail.value]})},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Addaddress,a["a"].Component),d(Addaddress,[{"key":"handleChange","value":function handleChange(e){this.setState({"value":e})}},{"key":"handleClickBack","value":function handleClickBack(){a.a.navigateBack({"delta":1})}},{"key":"render","value":function render(){return r.b.createElement(o.a,{"className":"addaddress"},r.b.createElement(i.a,{"onClickLeftIcon":this.handleClickBack.bind(this),"color":"#000","fixed":!0,"leftIconType":"chevron-left","border":!1,"title":"新增地址"}),r.b.createElement(l.a,{"mode":"multiSelector","range":this.state.diqu,"rangeKey":"label","onChange":this.onChange},r.b.createElement(c.a,null,r.b.createElement(s.a,{"arrow":"right","title":"所在地区","extraText":""}))),r.b.createElement(u.a,{"name":"value","title":"详细地址","type":"text","placeholder":"输入详细地址（街道，门牌号）","value":this.state.value,"onChange":this.handleChange.bind(this)}))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Addaddress}();t.default=f}}]);