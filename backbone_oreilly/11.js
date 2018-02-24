var View = Backbone.View.extend({
	el: '#todo',

	events: {
		'click [type="checkbox"]': 'clicked',
	},

	initialize: function() {
		this.$el.click(this.jqueryClicked);
		this.on('apiEvent', this.callback);
	},

	clicked: function(event) {
		console.log("event handler: " + this.el.outerHTML);
		this.trigger('apiEvent', event.type);
	},

	jqueryClicked: function(event) {
		console.log("jQuery handler: " + this.outerHTML);
	},

	callback: function(eventType) {
		console.log("event kind: " + eventType);
	}
});

var view = new View();
		
