define([
	'backbone',
	'marionette',
	'views/dashboard',
	'views/sidebar'
	], function(Backbone,Marionette,Dashboard, Sidebar) {

  var mApp = new Marionette.Application();
 
  mApp.addRegions({
		menu: '#sidebar',
		main: '#content',
		footer: '#footer'
	});

  mApp.addInitializer(function () {
        mApp.menu.show(new Sidebar());
		mApp.main.show(new Dashboard());
	});

  mApp.on("start", function(){
  	console.log("CM");
  });
  return mApp;
});