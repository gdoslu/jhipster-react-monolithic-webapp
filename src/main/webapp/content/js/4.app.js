webpackJsonp([4],{372:function(e,t,n){(function(e){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return y(N(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.LogsPage=void 0;var c=n(26),u=l(c),i=n(24),f=l(i),d=n(1),g=l(d),b=n(25),m=l(b),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),h=n(23),v=n(35),E=(l(v),n(39)),L={LogsPage:{displayName:"LogsPage"}},y=(0,m["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/LogsPage.js",components:L,locals:[e],imports:[g["default"]]}),N=(0,f["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/LogsPage.js",components:L,locals:[],imports:[g["default"],u["default"]]}),k=t.LogsPage=s("LogsPage")(function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getLogs=n.getLogs.bind(n),n.changeLevel=n.changeLevel.bind(n),n}return o(t,e),p(t,[{key:"componentDidMount",value:function(){this.props.getLoggers()}},{key:"getLogs",value:function(){this.props.isFetching||this.props.getLoggers()}},{key:"changeLevel",value:function(e,t){this.props.changeLogLevel(e,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.logs,l=t.isFetching,a=n?n.loggers:{};return g["default"].createElement("div",{className:"well ng-scope","ui-view":"content"},g["default"].createElement("div",{className:"table-responsive"},g["default"].createElement("h2",{translate:"logs.title"},"Logs"),g["default"].createElement("p",{translate:"logs.nbloggers","translate-values":"{total: '{{ vm.loggers.length }}'}"},"There are ",a.length," loggers."),g["default"].createElement("span",{translate:"logs.filter"},"Filter"),g["default"].createElement("input",{type:"text",className:"form-control",disabled:l}),g["default"].createElement("table",{className:"table table-condensed table-striped table-bordered"},g["default"].createElement("thead",null,g["default"].createElement("tr",{title:"click to order"},g["default"].createElement("th",{"ng-click":"predicate = 'name'; reverse=!reverse"},g["default"].createElement("span",{translate:"logs.table.name"},"Name")),g["default"].createElement("th",{"ng-click":"predicate = 'level'; reverse=!reverse"},g["default"].createElement("span",{translate:"logs.table.level"},"Level")))),g["default"].createElement("tbody",null,a.map(function(t,n){return g["default"].createElement("tr",null,g["default"].createElement("td",null,g["default"].createElement("small",null,t.name)),g["default"].createElement("td",null,g["default"].createElement("button",{disabled:l,onClick:function(){return e.changeLevel(t.name,"TRACE")},className:"btn btn-default btn-xs "+("TRACE"==t.level?"btn-danger":"btn-default")},"TRACE"),g["default"].createElement("button",{disabled:l,onClick:function(){return e.changeLevel(t.name,"DEBUG")},className:"btn btn-default btn-xs "+("DEBUG"==t.level?"btn-warning":"btn-default")},"DEBUG"),g["default"].createElement("button",{disabled:l,onClick:function(){return e.changeLevel(t.name,"INFO")},className:"btn btn-default btn-xs "+("INFO"==t.level?"btn-info":"btn-default")},"INFO"),g["default"].createElement("button",{disabled:l,onClick:function(){return e.changeLevel(t.name,"WARN")},className:"btn btn-default btn-xs "+("WARN"==t.level?"btn-success":"btn-default")},"WARN"),g["default"].createElement("button",{disabled:l,onClick:function(){return e.changeLevel(t.name,"ERROR")},className:"btn btn-default btn-xs "+("WARN"==t.level?"btn-primary":"btn-default")},"ERROR")))})))))}}]),t}(d.Component));t["default"]=(0,h.connect)(function(e){var t=e.administration;return{logs:t.logs,isFetching:t.isFetching}},{getLoggers:E.getLoggers,changeLogLevel:E.changeLogLevel})(k)}).call(t,n(19)(e))}});
//# sourceMappingURL=4.app.js.map