define([
	'backbone',
	'marionette',
	'views/dashboard',
	'views/sidebar',
	'views/demographics'
	], function(Backbone,Marionette,Dashboard, Sidebar, Demographics) {

var rm = new Marionette.RegionManager();

// With an object literal
var regions = rm.addRegions({


    	menu: '#sidebar',
		main: '#content',
		footer: '#footer'
  
});
return rm;
});