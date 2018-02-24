var Todo = Backbone.Model.extend({
	initialize: function(){
		console.log('モデルが初期化されました');
		this.on('change:title', function(){
			console.log('model value is changed.');
		})
	},

	defaults: {
		title: '',
		completed: false
	}
});

var todo1 = new Todo();

console.log(todo1.get('title'));
console.log(todo1.get('completed'));
console.log(todo1.get('hoge'));

todo1.set('title', 'New Title');
var todo2 = new Todo({
	title: 'コンソールに出力',
	completed: true
});

console.log(JSON.stringify(todo2));
console.log(todo2.toJSON());

var Person = new Backbone.Model();

console.log(Person.toJSON());

console.log(Person.hasChanged());
console.log(Person.hasChanged('name'));

Person.set({
	name: 'jeremy',
	silent: true
});

console.log(Person.toJSON());

console.log(Person.hasChanged());
console.log(Person.hasChanged('name'));

