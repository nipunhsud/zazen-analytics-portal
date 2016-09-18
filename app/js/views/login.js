define([
	'jquery',
	'marionette',
	'templates',
], function ($,Marionette, templates) {
	var login =  Marionette.ItemView.extend({
		template: templates.login,
		events: {
            'click .login': 'login',
            'click .signup': 'signup'
               // this.trigger('notification:close');
        },
        onRender: function() {
            
        },
        login : function() {
        	alert("test");
            Backbone.history.navigate('dashboard/',{trigger:true});
        	// Use this to route to the dashboard view with default dashboard
        },
        signup : function() {
        	alert("signup");
        }
        

	});
	return login;
});
