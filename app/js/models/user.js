define(['backbone',
	'jquery'], 
	function(Backbone, $){
	var User = Backbone.Model.extend({

		initialize: function(){
			//alert("user created");
		},
		defaults: {

 		},
		url: "http://localhost:8080/loginmanager/v1/signup/users",

	});


	return User;
});