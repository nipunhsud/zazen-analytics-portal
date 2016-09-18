define([
	'jquery',
	'marionette',
	'templates',
	'json!data/gender.json',
	'highcharts',
], function ($,Marionette, templates, graphdata,highcharts) {
	'use strict';

	var Dashboard =  Marionette.ItemView.extend({
		template: templates.dashboard,
		events: {
            //'click .test': 'test'
               // this.trigger('notification:close');
        },
        
		onRender: function() {
            this.$('.highchart').highcharts({
        		chart: {
		            renderTo: 'highchart',
		            type: graphdata.graphtype
		        },
		        xAxis: {
		            categories: graphdata.data.xaxis.label
		        },
		        yAxis: {
		            title: {
		                text: graphdata.data.yaxis.label
		            }
		        },
		        series: [{
		        	name : graphdata.data.xaxis.name,
		        	data : graphdata.data.xaxis.datapoint

		        }]
    		});
        }
        

	});
	return Dashboard;
});
