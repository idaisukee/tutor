var TodosCollection = new Backbone.Collection();

TodosCollection.on("add", function(todo) {
	console.log("todo is: " + todo.get("title") + "." +
							(todo.get("completed") ? 'done' : 'undone'));
});

TodosCollection.add([
	{ title: 'Jamaica', completed: false },
	{ title: 'China', completed: false },
	{ title: 'DL', completed: true }
]);

var byCompleted = TodosCollection.groupBy('completed');
console.log(byCompleted);
