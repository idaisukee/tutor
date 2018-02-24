Book = Backbone.Model.extend({
	initialize: function() {
		console.log('a new book');
	},
	defaults: {
		name: 'Book Title',
		author: 'No One',
	}
});

var Library = Backbone.Collection.extend({
	model: Book,
	initialize: function() {
		console.log('creating a new library collection');
	}
});

var bookOne = new Book({
	name: 'bb',
	author: 'james',
	year: 2013
});

var bookTwo = new Book({
	name: 'pjdp',
	author: 'dustin',
	year: 2012
});

var myLibrary = new Library([bookOne, bookTwo]);

LibraryView = Backbone.View.extend({
	initialize: function() {
		console.log('view created');
		this.render();
	},

	render: function() {
		var self = this;
		var output = _.template($("#library-template").html(), {
			'library': self.collection.toJSON()
		});
		self.$el.append(output);
		return self;
	}
});

var myView = new LibraryView({
	collection: myLibrary,
	el: '#myLibraryViewSection'
});

