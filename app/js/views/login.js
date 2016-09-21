define([
	'jquery',
	'marionette',
	'templates',
    'models/user'
], function ($,Marionette, templates, User) {
	var login =  Marionette.ItemView.extend({
		template: templates.login,
        model : new User,
		events: {
            'click .login': 'login',
            'click .signup': 'signup',
            'change input.username': 'setUsername',
            'change input.password': 'setPassword',
            'change input.firstname': 'setFirstName',
            'change input.lastname': 'setLastName',
            'change input.email': 'setEmail',
            'change input.confirmPassword': 'setConfirmpassword'
               // this.trigger('notification:close');
        },
        onRender: function() {
            
        },
        setUsername: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'username': val});
        },
        setPassword: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'password': val});
        },
        setFirstName: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'firstname': val});
        },
        setLastName: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'lastname': val});
        },
        setEmail: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'email': val});
        },
        confirmPassword: function(e) {
            var val = $(e.currentTarget).val();
            this.model.set({'confirmPassword': val});
        },
        login : function() {
            //var user = new User();
             this.model.set({'signup' : false});
            console.log(this.model);
            this.model.save();
            Backbone.history.navigate('dashboard/',{trigger:true});
        	// Use this to route to the dashboard view with default dashboard
        },
        signup : function() {
            this.model.set({'signup' : true});
            console.log(this.model);
            this.model.save();
        }
        

	});
	return login;
});
