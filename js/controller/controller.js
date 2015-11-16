function Controller() {
	'use strict';
	var group,
		listView,
		editView,
		preView,
		currentView,
		$displayedViewElement;

	mediator.subscribe('listView:showed', showList);
	mediator.subscribe('preview:showed', showPreview);
	mediator.subscribe('editView:showed', showEdit);
	mediator.subscribe('group:created', initViews);
	group = new Group();

	function showList() {
		changeDisplayedView(listView.render());
	}

	function showEdit(person) {
		changeDisplayedView(editView.render(person));
	}

	function showPreview(person) {
		changeDisplayedView(preView.render(person));
	}

	function initViews() {
		listView = new ListView(group);
		editView = new EditView();
		preView = new Preview();

		listView.init();
		$displayedViewElement = $('#view');
		showList();
	};

	function changeDisplayedView(viewElement) {
		$displayedViewElement.replaceWith($(viewElement));
		$displayedViewElement = $(viewElement);
	}
}
