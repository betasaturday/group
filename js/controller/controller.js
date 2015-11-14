function Controller() {
	'use strict';
	var group,
		listView,
		editView,
		preView,
		currentView;

	mediator.subscribe('listView:showed', showList);
	mediator.subscribe('preview:showed', showPreview);
	mediator.subscribe('editView:showed', showEdit);
	mediator.subscribe('group:created', initViews);
	group = new Group();

	function showList() {
		updateCurrentView(listView);
		listView.show();
	}

	function showEdit(person) {
		updateCurrentView(editView);
		editView.render(person);
	}

	function showPreview(person) {
		updateCurrentView(preView);
		preView.render(person);
	}

	function initViews() {
		listView = new ListView(helper.getEl('list-view'), group);
		editView = new EditView(helper.getEl('edit-view'));
		preView = new Preview(helper.getEl('preview'));
		currentView = listView;
		listView.render();
	};

	function updateCurrentView(newCurrentView) {
		currentView.hide();
		currentView = newCurrentView;
	}
}
