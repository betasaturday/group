var PersonView = Backbone.View.extend({
	tagName: 'div',
	className: 'row',
	tpl: personRowTemplate,
	events: {
		'click [value="preview"]':	'showPreview',
		'click [value="edit"]': 'showEditView'
	},
	initialize: function () {
		this.model.on('change', this.render, this);
	},
	render: function () {
		this.$el.html(this.tpl(this.model.toJSON()));
		return this;
	},
	showPreview: function () {
		mediator.publish('show preview', this.model);
	},
	showEditView: function () {
		mediator.publish('show edit-view', this.model);
	}
});

