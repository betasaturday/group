var ListView = Backbone.View.extend({
	className: 'table',
	initialize: function () {
		this.render();
	},
	render: function () {
		this.model.forEach(function (person) {
			var personView = new PersonView({model: person});
			this.$el.append(personView.render().$el);
		}, this);
	}
});
