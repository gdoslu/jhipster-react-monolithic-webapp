webpackJsonp([9],{367:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return function(t){return D(j(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.ApiDocsPage=void 0;var s=n(26),l=o(s),u=n(24),p=o(u),f=n(1),d=o(f),m=n(25),g=o(m),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(23),y=n(35),v=(o(y),n(39)),w={ApiDocsPage:{displayName:"ApiDocsPage"}},D=(0,g["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/ApiDocsPage.js",components:w,locals:[e],imports:[d["default"]]}),j=(0,p["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/ApiDocsPage.js",components:w,locals:[],imports:[d["default"],l["default"]]}),P=t.ApiDocsPage=c("ApiDocsPage")(function(e){function t(e){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.getApiDocs()}},{key:"render",value:function(){var e=this.props,t=e.apiDocs;e.isFetching;return d["default"].createElement("div",{className:"well"},d["default"].createElement("div",null,d["default"].createElement("h2",{translate:"health.title"},"API Documentations"),"FIX ME",d["default"].createElement("hr",null),d["default"].createElement("div",{className:"row"},d["default"].createElement("div",{className:"col-sm-10"},JSON.stringify(t)))))}}]),t}(f.Component));t["default"]=(0,b.connect)(function(e){var t=e.administration;return{apiDocs:t.apiDocs,isFetching:t.isFetching}},{getApiDocs:v.getApiDocs})(P)}).call(t,n(19)(e))}});
//# sourceMappingURL=9.app.js.map