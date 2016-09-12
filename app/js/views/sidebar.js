define([
	'marionette',
	'text!templates/sidebar.html',
], function (Marionette, sidebar) {
	'use strict';

	return Marionette.ItemView.extend({
		template: sidebar
	});
});