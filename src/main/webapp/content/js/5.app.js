webpackJsonp([5],{371:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(t){return E(j(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.HealthPage=void 0;var s=n(26),c=a(s),u=n(24),f=a(u),h=n(1),p=a(h),d=n(25),m=a(d),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=n(23),y=n(35),v=a(y),H=n(39),w={HealthPage:{displayName:"HealthPage"}},E=(0,m["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/HealthPage.js",components:w,locals:[e],imports:[p["default"]]}),j=(0,f["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/HealthPage.js",components:w,locals:[],imports:[p["default"],c["default"]]}),P=t.HealthPage=i("HealthPage")(function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getSystemHealth=n.getSystemHealth.bind(n),n}return o(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.systemHealth()}},{key:"getSystemHealth",value:function(){this.props.isFetching||this.props.systemHealth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.health,a=t.isFetching,r=n||{};return p["default"].createElement("div",{className:"well"},p["default"].createElement("div",null,p["default"].createElement("h2",{translate:"health.title"},"Health Checks"),p["default"].createElement("p",null,p["default"].createElement("button",{type:"button",onClick:function(){return e.getSystemHealth()},className:a?"btn btn-danger":"btn btn-primary",disabled:a},p["default"].createElement("span",{className:"glyphicon glyphicon-refresh"})," ",p["default"].createElement(v["default"],{component:"span",content:"health.refresh.button"}))),"FIX ME datatable",p["default"].createElement("hr",null),p["default"].createElement("div",{className:"row"},p["default"].createElement("div",{className:"col-sm-10"},JSON.stringify(r)))))}}]),t}(h.Component));t["default"]=(0,b.connect)(function(e){var t=e.administration;return{health:t.health,isFetching:t.isFetching}},{systemHealth:H.systemHealth})(P)}).call(t,n(19)(e))}});
//# sourceMappingURL=5.app.js.map