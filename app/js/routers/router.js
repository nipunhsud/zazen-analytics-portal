define([
  'backbone',
  'jquery',
  'underscore',
  'marionette',
  'views/demographics',
  'views/sidebar',
  'views/dashboard',
], function (Backbone,$, _, Marionette,Demographic, Sidebar, Dashboard) {
  
 var demographic = new Demographic;
 var dashboard = new Dashboard;
	 
 var MyRouter = Backbone.Router.extend({
    initialize: function(){
      //alert("route created");
    },
    routes: {
        "dashboard/" : "dashboard",
        //potentially user dashboard/dashName eg dashboard/gender
        "demographics/": "demographics",
        "gender/": "gender"
        // matches http://example.com/#anything-here
    },
    dashboard : function() {
      window.app.addRegions({
        menu: '#sidebar'
      });
      window.app.content.show(new Dashboard, { preventDestroy: true });
      window.app.menu.show(new Sidebar);
      
    },
    demographics : function(){
      // Figure out how to call show, maybe use layout manager for layouts
      alert("demo");
      demographic.getDemographics();
    },
    gender : function(){
      // Figure out how to call show, maybe use layout manager for layouts
      dashboard.getGraph();
    }
  });

  

  return MyRouter;
});