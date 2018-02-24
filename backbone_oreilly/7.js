var TodosCollection = new Backbone.Collection();

TodosCollection.on("change:title", function(model) {
	console.log("changed.  todo is: " + model.get('title'));
});

TodosCollection.add([
	{ title: 'Jamaica', completed: false, id: 3}
]);

var myTodo = TodosCollection.get(3);

myTodo.set('title', 'fishing')
