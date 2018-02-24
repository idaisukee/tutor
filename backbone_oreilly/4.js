var view = new Backbone.View();
view.setElement('<p><a><b>test</b></a></p>')
var v = view.$('b').html();
console.log(v);
