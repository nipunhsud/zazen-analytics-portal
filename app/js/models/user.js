define(['backbone',
	'jquery'], 
	function(Backbone, $){
	var User = Backbone.Model.extend({
		initialize: function(){
			//alert("user created");
		},
		defaults: {
			
 		},
		urlRoot: "/user"

	});


	return User;
});