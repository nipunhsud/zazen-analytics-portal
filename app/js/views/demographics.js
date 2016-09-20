define([
	'jquery',
	'marionette',
	'templates',
	'json!data/testGraph.json',
	'highcharts',
], function ($,Marionette, templates, graphdata,highcharts) {
	var Demographics =  Marionette.ItemView.extend({
		template: templates.dashboard,
		events: {
            //'click .test': 'test'
               // this.trigger('notification:close');
        },
        getDemographics : function() {
        	window.app.content.show(this.render(), { preventDestroy: true });
        },
		onRender: function() {
            this.$('.highchart').highcharts({
        		chart: {
		            renderTo: 'highchart',
		            type: 'spline'
		        },
		        xAxis: {
		            categories: graphdata.data.label
		        },
		        yAxis: {
		            title: {
		                text: 'Temperature (°F)'
		            }
		        },
		        series: [{
		        	name : "Boston",
		        	data : graphdata.data.datapoint

		        }]
    		});
        }
        

	});
	return Demographics;
});
