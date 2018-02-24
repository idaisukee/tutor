var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var TodosCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/tmp/a'
});

var todos = new TodosCollection();
todos.fetch();

var todo2 = todos.get(2)
todo2.set('title', 'fishing');
todo2.save();

todos.create({title: 'try sample'});
