define([
  'backbone',
  'jquery',
  'underscore',
  'marionette',
  'views/demographics',
  'views/sidebar',
  'views/dashboard',
  'views/login'
], function (Backbone,$, _, Marionette,Demographic, Sidebar, Dashboard, Login) {
  
 var demographic = new Demographic;
 var dashboard = new Dashboard;
	 
 var MyRouter = Backbone.Router.extend({
    initialize: function(){
      //alert("route created");
    },
    routes: {
        "home" : "appStart",
        "dashboard" : "dashboard",
        "demographics": "demographics",
        "gender": "gender"
        // matches http://example.com/#anything-here
    },
    appStart : function () {
      window.app.menu.remove(new Sidebar);
      window.app.content.show(new Login());
    },
    dashboard : function() {
      window.app.addRegions({
        menu: '#sidebar'
      });
      window.app.content.show(new Dashboard, { preventDestroy: true });
      window.app.menu.show(new Sidebar, { preventDestroy: true });
      
    },
    demographics : function(){
      // Figure out how to call show, maybe use layout manager for layouts
      demographic.getDemographics();
    },
    gender : function(){
      // Figure out how to call show, maybe use layout manager for layouts
      dashboard.getGraph();
    }
  });

  

  return MyRouter;
});