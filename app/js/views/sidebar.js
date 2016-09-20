define([
	'backbone',
	'marionette',
	'templates'
], function (Backbone,Marionette, templates) {
	'use strict';
	return Marionette.ItemView.extend({
		template: templates.sidebar,
		events: {
			"click .demographics" : "getDemographics",
			"click .gender" : "getGender"	
		},
		getDemographics : function() {
			Backbone.history.navigate('demographics/',{trigger:true});
		},
		getGender : function() {
			Backbone.history.navigate('gender/',{trigger:true});
		}
		
	});
});