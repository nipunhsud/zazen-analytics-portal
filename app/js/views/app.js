define([
	'backbone',
	'marionette',
	'views/dashboard',
	'views/sidebar',
	'views/header',
	'router',
	'views/login'
	], function(Backbone,Marionette,Dashboard, Sidebar,Header, Router, Login) {

  var mApp = new Marionette.Application();
 
  mApp.addRegions({
  		header: '#header',
		menu: '#sidebar',
		content: '#content',
		footer: '#footer'
	});

  mApp.addInitializer(function () {
  		mApp.header.show(new Header());
		mApp.content.show(new Login());
	});

  mApp.on("start", function(){
    var router = new Router();
    Backbone.history.start();
  
  });
  return window.app = mApp;
});

