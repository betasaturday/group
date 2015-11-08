function Controller() {
	'use strict';
	var group = new Group(),
		listView = new ListView(helper.getEl('list-view'), this, group),
		editView = new EditView(helper.getEl('edit-view'), this, group),
		preView = new Preview(helper.getEl('preview'), this, group),
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

	mediator.subscribe('preview', this.showPreview);
	mediator.subscribe('editView', this.showEdit);
	mediator.subscribe('list', this.showList);

	currentView = listView;
	this.showList();

	function updateCurrentView(newCurrentView) {
		currentView.hide();
		currentView = newCurrentView;
	}
}
