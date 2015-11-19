var EditView = Backbone.View.extend({
	tpl: editViewTpl,

	events: {
		'click [value="save"]': 'save',
		'click [value="back-to-list"]': 'backToList',
		'click [value="preview"]': 'preview'
	},

	initialize: function () {
		this.render();
		this.inputs = [];
		Object.keys(this.model.toJSON()).forEach(function (key) {
			this.inputs.push(this.$(nameAttributeTemplate({name: key})));
		}, this);
	},

	render: function () {
		this.$el.html(this.tpl(this.model.toJSON()));
		this.$el.show();
		return this;
	},

	save: function () {
		var newPersonJSON = {};
		this.inputs.forEach(function ($input) {
			newPersonJSON[$input.attr('name')] = $input.val();
		});
		this.model.set(newPersonJSON);
		this.backToList();
	},

	backToList: function () {
		this.close();
		mediator.publish('show group');
	},

	preview: function () {
		this.close();
		mediator.publish('show preview', this.model);
	},

	close: function () {
		this.$el.hide();
		this.undelegateEvents();
	}
});

