var Person = new Backbone.Model(
	{
		name: 'jeremy'
	}
);

Person.validate = function(attrs) {
	if (!attrs.name) {
		return 'name required';
	}
};

Person.set(
	{
		name: 'samuel'
	}
);
console.log(Person.get('name'));
Person.unset('name', {validate: true});
console.log(Person.get('name'));
