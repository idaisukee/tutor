var ourObject = {};
_.extend(ourObject, Backbone.Events);

ourObject.on('dance', function(msg) {
	console.log('occured: ' + msg);
});

ourObject.trigger('dance', 'orig event');
var d = "dance"
ourObject.trigger(d, 'orig event 1');
