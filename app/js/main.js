require.config({
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore/underscore',
    'backbone': 'vendor/backbone/backbone',
    'text':"vendor/requirejs-text/text",
    'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr',
    'marionette': 'vendor/marionette/lib/core/backbone.marionette',
    'tpl': 'lib/tpl',
    'bootstrap': 'lib/bootstrap.min',
    "json":"vendor/requirejs-plugins/src/json",
    "highcharts":"vendor/highcharts/highcharts",
    'templates': "templates",
    'router': 'routers/router'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Marionette',
      deps: ['backbone']
    }
  },
  deps: ['jquery', 'underscore']
});

require(['views/app'], function(AppView) {
  
   AppView.start();

});