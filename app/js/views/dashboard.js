define([
	'marionette',
	'text!templates/dashboard.html',
], function (Marionette, dashboard) {
	'use strict';

	return Marionette.ItemView.extend({
		template: dashboard
	});
});
