webpackJsonp([3],{373:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return function(t){return E(j(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.MetricsPage=void 0;var c=n(26),l=r(c),u=n(24),f=r(u),p=n(1),m=r(p),d=n(25),h=r(d),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=n(23),y=n(35),M=r(y),v=n(39),w={MetricsPage:{displayName:"MetricsPage"}},E=(0,h["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/MetricsPage.js",components:w,locals:[e],imports:[m["default"]]}),j=(0,f["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/MetricsPage.js",components:w,locals:[],imports:[m["default"],l["default"]]}),P=t.MetricsPage=o("MetricsPage")(function(e){function t(e){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getMetrics=n.getMetrics.bind(n),n}return a(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.systemMetrics()}},{key:"getMetrics",value:function(){this.props.isFetching||this.props.systemMetrics()}},{key:"render",value:function(){var e=this,t=this.props,n=t.metrics,r=t.isFetching,i=n||{};return m["default"].createElement("div",{className:"well"},m["default"].createElement("div",null,m["default"].createElement("h2",{translate:"metrics.title"},"Application Metrics"),m["default"].createElement("p",null,m["default"].createElement("button",{type:"button",onClick:function(){return e.getMetrics()},className:r?"btn btn-danger":"btn btn-primary",disabled:r},m["default"].createElement("span",{className:"glyphicon glyphicon-refresh"})," ",m["default"].createElement(M["default"],{component:"span",content:"health.refresh.button"}))),"FIX ME",m["default"].createElement("hr",null),m["default"].createElement("div",{className:"row"},m["default"].createElement("div",{className:"col-sm-10"},JSON.stringify(i)))))}}]),t}(p.Component));t["default"]=(0,b.connect)(function(e){var t=e.administration;return{metrics:t.metrics,isFetching:t.isFetching}},{systemMetrics:v.systemMetrics})(P)}).call(t,n(19)(e))}});
//# sourceMappingURL=3.app.js.map