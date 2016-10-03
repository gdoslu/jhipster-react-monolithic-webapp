webpackJsonp([2],{374:function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return function(t){return N(j(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.UserManagement=void 0;var i=a(26),u=n(i),o=a(24),d=n(o),m=a(1),f=n(m),p=a(25),g=n(p),h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(23),b=a(35),E=n(b),v=a(39),M={UserManagement:{displayName:"UserManagement"}},N=(0,g["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/UserManagementPage.js",components:M,locals:[e],imports:[f["default"]]}),j=(0,d["default"])({filename:"/Users/gdsl/workspace/repo/gd/github/gdoslu/jhipster-react-monolithic-webapp/src/main/js/ui/pages/administration/UserManagementPage.js",components:M,locals:[],imports:[f["default"],u["default"]]}),w=t.UserManagement=c("UserManagement")(function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.getUserList=a.getUserList.bind(a),a}return s(t,e),h(t,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"getUserList",value:function(){this.props.isFetching||this.props.getUsers()}},{key:"render",value:function(){var e=this,t=this.props,a=t.userManagement,n=t.isFetching,l=a&&a.users?a.users:[];return f["default"].createElement("div",{className:"well"},f["default"].createElement("div",null,f["default"].createElement("h2",{"data-translate":"gateway.title"},"Users"),"FIX ME datatable pagination, activate/deactivate, action buttons",f["default"].createElement("p",null,f["default"].createElement("button",{type:"button",onClick:function(){return e.getUserList()},className:n?"btn btn-danger":"btn btn-primary",disabled:n},f["default"].createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-"})," ",f["default"].createElement(E["default"],{component:"span",content:"gateway.refresh.button"})))),f["default"].createElement("div",{className:"table-responsive"},f["default"].createElement("table",{className:"table table-striped"},f["default"].createElement("thead",null,f["default"].createElement("tr",{"jh-sort":"vm.predicate",ascending:"vm.reverse",callback:"vm.transition()"},f["default"].createElement("th",{"jh-sort-by":"id"},f["default"].createElement("span",{translate:"global.field.id"},"ID"),f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",{"jh-sort-by":"login"},f["default"].createElement("span",{translate:"userManagement.login"},"Login")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",{"jh-sort-by":"email"},f["default"].createElement("span",{translate:"userManagement.email"},"Email")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",null),f["default"].createElement("th",{"jh-sort-by":"langKey"}," ",f["default"].createElement("span",{translate:"userManagement.langKey"},"Lang Key")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),"                ",f["default"].createElement("th",null,f["default"].createElement("span",{translate:"userManagement.profiles"},"Profiles")),"                ",f["default"].createElement("th",{"jh-sort-by":"createdDate"},f["default"].createElement("span",{translate:"userManagement.createdDate"},"Created Date")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",{"jh-sort-by":"lastModifiedBy"},f["default"].createElement("span",{translate:"userManagement.lastModifiedBy"},"Last Modified By")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",{"jh-sort-by":"lastModifiedDate"},f["default"].createElement("span",{translate:"userManagement.lastModifiedDate"},"Last Modified Date")," ",f["default"].createElement("span",{className:"glyphicon glyphicon-sort"})),f["default"].createElement("th",null))),f["default"].createElement("tbody",null,l.map(function(t,a){return f["default"].createElement("tr",{key:"user-"+a},f["default"].createElement("td",null,f["default"].createElement("a",null,t.id)),f["default"].createElement("td",null,t.login),f["default"].createElement("td",null,t.email),f["default"].createElement("td",null,t.activated?f["default"].createElement("span",{className:"label label-success","ng-click":"vm.setActive(user, false)","ng-show":"user.activated",translate:"userManagement.activated",style:{cursor:"pointer"}},"Activated"):f["default"].createElement("span",{className:"label label-danger","ng-click":"vm.setActive(user, true)","ng-show":"!user.activated",translate:"userManagement.deactivated",style:{cursor:"pointer"}},"Deactivated")),f["default"].createElement("td",null,t.langKey),f["default"].createElement("td",null,l.authorities?l.authorities.map(function(e,t){return f["default"].createElement("div",null,f["default"].createElement("span",{className:"label label-info"},e))}):null),f["default"].createElement("td",null,t.createdDate),f["default"].createElement("td",null,t.lastModifiedBy),f["default"].createElement("td",null,t.lastModifiedDate),f["default"].createElement("td",{className:"text-right"},f["default"].createElement("div",{className:"btn-group flex-btn-group-container"},f["default"].createElement("button",{type:"submit",className:"btn btn-info btn-sm"},f["default"].createElement("span",{className:"glyphicon glyphicon-eye-open"}),f["default"].createElement("span",{className:"hidden-xs hidden-sm"},f["default"].createElement(E["default"],{content:"entity.action.view"}))),f["default"].createElement("button",{type:"submit",className:"btn btn-primary btn-sm"},f["default"].createElement("span",{className:"glyphicon glyphicon-pencil"}),f["default"].createElement("span",{className:"hidden-xs hidden-sm"},f["default"].createElement(E["default"],{content:"entity.action.edit"}))),f["default"].createElement("button",{type:"submit",className:"btn btn-danger btn-sm",disabled:e.props.account.login===t.login},f["default"].createElement("span",{className:"glyphicon glyphicon-remove-circle"}),f["default"].createElement("span",{className:"hidden-xs hidden-sm"},f["default"].createElement(E["default"],{content:"entity.action.delete"}))))))})))))}}]),t}(m.Component));t["default"]=(0,y.connect)(function(e){return{userManagement:e.administration.userManagement,isFetching:e.administration.isFetching,account:e.authentication.account}},{getUsers:v.getUsers})(w)}).call(t,a(19)(e))}});
//# sourceMappingURL=2.app.js.map