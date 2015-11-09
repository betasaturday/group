function Controller() {
	'use strict';
	var group,
		listView,
		editView,
		preView,
		currentView;

	this.showList = function () {
		updateCurrentView(listView);
		listView.render();
	};
	this.showEdit = function (person) {
		updateCurrentView(editView);
		editView.render(person);
	};
	this.showPreview = function (person) {
		updateCurrentView(preView);
		preView.render(person);
	};

	this.initViews = function() {
		listView = new ListView(helper.getEl('list-view'), group);
		editView = new EditView(helper.getEl('edit-view'));
		preView = new Preview(helper.getEl('preview'));
		currentView = listView;
		this.showList();
	};

	mediator.subscribe('preview', this.showPreview);
	mediator.subscribe('editView', this.showEdit);
	mediator.subscribe('list', this.showList);
	mediator.subscribe('group-created', this.initViews.bind(this));
	group = new Group();

	function updateCurrentView(newCurrentView) {
		currentView.hide();
		currentView = newCurrentView;
	}
}
