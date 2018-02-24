MyView = Backbone.View.extend({
	el: '#hoge',
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html('hello');
		return this;
	}
});
