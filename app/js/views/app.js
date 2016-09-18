define([
	'backbone',
	'marionette',
	'views/dashboard',
	'views/sidebar',
	'router',
	'views/login'
	], function(Backbone,Marionette,Dashboard, Sidebar, Router, Login) {

  var mApp = new Marionette.Application();
 
  mApp.addRegions({
		menu: '#sidebar',
		content: '#content',
		footer: '#footer'
	});

  mApp.addInitializer(function () {
		mApp.content.show(new Login());
	});

  mApp.on("start", function(){
    var router = new Router();
    Backbone.history.start();
  
  });
  return window.app = mApp;
});

