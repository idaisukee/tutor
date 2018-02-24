var ListView = Backbone.View.extend({
	render: function() {
		this.$el.html(this.model.toJSON());
	}
});

var ItemView = Backbone.View.extend({
	render: function() {
		var items = this.model.get('items');
		_.each(items, function(item) {
			var itemView = new ItemView({ model: item });
			this.$el.append(itemView.render().el);
		}, this);
	}
});

var TodoView = Backbone.View.extend({
	initialize: function() {
		this.model.bind('change', _.bind(this.render, this));
	},
	
	tagName: 'li',

	events: {
		'click .toggle': 'toggleCompleted',
		'dblclick label': 'edit',
		'click .destroy': 'clear',
		'keydown .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},
});

var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var TodosCollection = Backbone.Collection.extend({
	model: Todo
});

var myTodo = new Todo({title: 'to read a book', id: 2});

var todos = new TodosCollection([myTodo]);
console.log("collection size: " + todos.length);

var a = new Todo({ title: 'Jamaica' });
var b = new Todo({ title: 'China' });
var c = new Todo({ title: 'Disneyland' });

var todos1 = new TodosCollection([a, b]);
console.log("collection size: " + todos1.length);
todos1.add(c);
console.log("collection size: " + todos1.length);
todos1.remove(a);
console.log("collection size: " + todos1.length);
todos1.remove([b, c]);
console.log("collection size: " + todos1.length);
todos1.add([a, b]);
console.log("collection size: " + todos1.length);

var items = new Backbone.Collection;
items.add([{id: 1, name: 'dog', age: 3}]);
console.log(JSON.stringify(items.toJSON()));
items.add([{id: 1, name: 'bear'}], { merge: true });
console.log(JSON.stringify(items.toJSON()));
items.add([{id: 1, name: 'dog', age: 3}]);
console.log(JSON.stringify(items.toJSON()));

var d = items.get(1).toJSON();
console.log(d)

