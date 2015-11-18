var Group = Backbone.Collection.extend({
	model: Person,
	localStorage: new Store('backbone-group')
});
