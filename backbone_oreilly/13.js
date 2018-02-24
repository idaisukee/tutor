var View = Backbone.View.extend({
	el: '#todo',
	tagName: 'div',
	className: 'hoge',

	events: {
		'click [type="checkbox"]': 'clicked',
	},


	initialize: function() {
		this.$el.click(this.jqueryClicked);

		this.render();
	},

	initialize: function() {
		this.$el.click(this.jqueryClicked);

	},
	render: function() {
		this.$el.html('foo');
		return this;
	},

	jqueryClicked: function(event) {
	},

});

var view = new View();
		
