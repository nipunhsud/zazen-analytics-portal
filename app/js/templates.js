define([
  'text!templates/dashboard.html',
  'text!templates/sidebar.html',
  'text!templates/login.html'
], function (dashboard,sidebar, login) {

	return {
        dashboard : dashboard,
        sidebar : sidebar,
        login : login
	};
});