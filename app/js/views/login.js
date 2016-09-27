define([
	'jquery',
	'marionette',
	'templates',
    'models/user'
], function ($,Marionette, templates, User) {

	var login =  Marionette.ItemView.extend({
		template: templates.login,
        initialize: function() {
            var self = this;
        },
        model : new User,
		events: {
            'click .login': 'login',
            'click #signup': 'signup',
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
              Backbone.history.navigate('dashboard',{trigger:true});
            $.ajax({
                            url: 'http://localhost:8080/loginmanager/v1/auth/users',
                            contentType: 'application/json',
                            dataType: 'json',
                            type: 'POST',
                            data: self.model,
                           // success: function(token) {
                               
                              //  self.model.set({ id: token.userId });
                             //   $.cookie('user_id', token.userId, { expires: 30 });
                              //  $.cookie('access_token', token.id, { expires: 30 });
                               // that.setupAjax(token.id);
                               // self.user.url = '/api/Users/' + token.userId;
                              //  self.user.fetch({ async: false });
                               // self.set({ user_id: token.userId, logged_in: true });
                           //}
                        });
                    
        	// Use this to route to the dashboard view with default dashboard
        },
        signup : function() {
            Backbone.emulateHTTP = true;
            console.log(this.model);
            this.model.save();
            Backbone.history.navigate('home',{trigger:true});
            
        }
        

	});
	return login;
});
