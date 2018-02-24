var TodosView = Backbone.View.extend({
	tagName: 'ul',
	className: 'container',
	id: 'todos',
	el: $('#footer')
});

var todosView = new TodosView();
console.log(todosView.el)
