define([
	'backbone',
	'marionette',
	'templates'
], function (Backbone,Marionette, templates) {
	'use strict';
	return Marionette.ItemView.extend({
		template: templates.sidebar,
		events: {
			"click .demographics" : "getDemographics"	
		},
		getDemographics : function() {
			Backbone.history.navigate('demographics/',{trigger:true});
		}
		
	});
});