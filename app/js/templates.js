define([
  'text!templates/dashboard.html',
  'text!templates/sidebar.html',
  'text!templates/login.html',
  'text!templates/header.html'
], function (dashboard,sidebar, login, header) {

	return {
        dashboard : dashboard,
        sidebar : sidebar,
        login : login,
        header : header
	};
});