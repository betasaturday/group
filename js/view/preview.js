var Preview = Backbone.View.extend({
	defaults: {
		el: '#preview'
	},
	events: {
		'click [value="back-to-list"]': 'backToList',
		'click [value="edit"]': 'edit'
	},
	tpl: previewTpl,
	initialize: function () {
		this.render();
	},
	render: function () {
		this.$el.html(this.tpl(this.model.toJSON()));
		this.$el.show();
		return this;
	},
	backToList: function () {
		this.close();
		mediator.publish('show group');
	},
	edit: function () {
		this.close();
		mediator.publish('show edit-view', this.model);
	},
	close: function () {
		this.$el.hide();
		this.undelegateEvents();
	}

});

