var app = app || {};
var ENTER_KEY = 13;

app.Todo = Backbone.Model.extend({
	initialize: function() {
		console.log('a new Todo');
	},
	defaults: {
		title: 'Todo Title',
		author: 'No One',
	},
	toggle: function () {
		this.save({
			completed: !this.get('completed')
		});
	}
});

Todos = Backbone.Collection.extend({
	model: app.Todo,
	localStorage: new Backbone.LocalStorage('todos-backbone'),
	nextOrder: function () {
		return this.length ? this.last().get('order') + 1 : 1;
	},

	// Filter down the list of all todo items that are finished.
	completed: function () {
		return this.where({completed: true});
	},

	// Filter down the list to only todo items that are still not finished.
	remaining: function () {
		return this.where({completed: false});
	},

});

app.todos = new Todos();

app.AppView = Backbone.View.extend({
	el: '.todoapp',
	statsTemplate: _.template($('#stats-template').html()),
	events: {
		'keypress .new-todo': 'createOnEnter',
	},

	initialize: function() {
		this.listenTo(app.todos, 'add', this.addOne);
		this.listenTo(app.todos, 'filter', this.filterAll);

		console.log('view created');
		this.$input = this.$('.new-todo');
		this.$list = $('.todo-list');
		this.$main = this.$('.main');

		this.$footer = this.$('.footer');
		this.render();
	},

	render: function() {
		var completed = app.todos.completed().length;
		var remaining = app.todos.remaining().length;

		this.$main.show();
		this.$footer.show();

		this.$('.filters li a')
			.removeClass('selected')
			.filter('[href="#/' + (app.TodoFilter || '') + '"]')
			.addClass('selected');

		
		this.$footer.html(this.statsTemplate({
			completed: completed,
			remaining: remaining
		}));

	},

	newAttributes: function () {
		return {
			title: this.$input.val().trim(),
			order: app.todos.nextOrder(),
			completed: false
		};
	},

	createOnEnter: function (e) {
		if (e.which === ENTER_KEY && this.$input.val().trim()) {
			app.todos.create(this.newAttributes());
			this.$input.val('');
		}
	},
	addOne: function (todo) {
		var view = new app.TodoView({ model: todo });
		this.$list.append(view.render().el);
	},

});

new app.AppView();


app.TodoView = Backbone.View.extend({
	tagName:  'li',
	template: _.template($('#item-template').html()),
	events: {
		'click .toggle': 'toggleCompleted',
		'click .destroy': 'clear',
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$input = this.$('.edit');
		return this;
	},
	clear: function () {
		this.model.destroy();
	},
	edit: function () {
		this.$el.addClass('editing');
		this.$input.focus();
	},
	updateOnEnter: function (e) {
		if (e.which === ENTER_KEY) {
			this.close();
		}
	},
	close: function () {
		var value = this.$input.val();
		var trimmedValue = value.trim();

		// We don't want to handle blur events from an item that is no
		// longer being edited. Relying on the CSS class here has the
		// benefit of us not having to maintain state in the DOM and the
		// JavaScript logic.
		if (!this.$el.hasClass('editing')) {
			return;
		}

		if (trimmedValue) {
			this.model.save({ title: trimmedValue });
		} else {
			this.clear();
		}

		this.$el.removeClass('editing');
	},
	toggleCompleted: function() {
		this.model.toggle();
	}


});
new app.TodoView();
