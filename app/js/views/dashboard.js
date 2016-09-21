define([
	'jquery',
	'marionette',
	'templates',
	'json!data/gender.json',
	'json!data/genderbox.json',
	'highcharts',
], function ($,Marionette, templates, graphdata, boxgraph, highcharts) {
	'use strict';

	var Dashboard =  Marionette.ItemView.extend({
		template: templates.dashboard,
		events: {
            'click .gender': 'getGraph'
               // this.trigger('notification:close');
        },
        getGraph: function() {
        	window.app.content.show(this.render(), { preventDestroy: true });
        },
		getSpline: function() {
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
        },

        onRender : function() {
        	this.$('.highchart').highcharts({
        		chart: {
		            renderTo: 'highchart',
		            type: boxgraph.graphtype
		        },
		        title : {
		        	text : boxgraph.title
		        },
		        xAxis: {
		            categories: boxgraph.data.xaxis.label
		        },
		        yAxis: {
		            title: {
		                text: boxgraph.data.yaxis.name
		            }
		        },
		        series: [{
		        	name : boxgraph.data.series[0].name,
		        	data : boxgraph.data.series[0].data

		        },
		        {
		        	name : boxgraph.data.series[1].name,
		        	data : boxgraph.data.series[1].data
		        }]
    		});
        }
        

	});
	return Dashboard;
});
