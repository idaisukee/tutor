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
		for(var i=0; i < this.collection.size(); i++){
			var bookname = this.collection.at(i).get('name');
			//			this.$el.append('<li id=\'' + bookname + '\'>Bookname: ' + bookname + '</li>');
			this.$el.append(bookname);
		}
		return this;
	}
});

var myView = new LibraryView({
	collection: myLibrary,
	el: '#myLibraryViewSection',
	tagName: 'div',
});

