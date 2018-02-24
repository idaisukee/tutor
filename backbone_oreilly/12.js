var TodoRouter = Backbone.Router.extend({
	routes: {
		"about": "showAbout",
		"todo/:id": "getTodo",
	},

	showAbout: function() {
	},

	getTodo: function(id) {
		console.log("todo id: " + id);
	}
});

var myTodoRouter = new TodoRouter();

