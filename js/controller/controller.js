function Controller() {
	'use strict';
	var group,
		listView,
		editView,
		preView,
		currentView,
		$listViewElement,
		$displayedViewElement;

	mediator.subscribe('listView:showed', showList);
	mediator.subscribe('preview:showed', showPreview);
	mediator.subscribe('editView:showed', showEdit);
	mediator.subscribe('group:created', initViews);
	group = new Group();

	function showList() {
		$listViewElement.show();
		$displayedViewElement.hide();
	}

	function showEdit(person) {
		changeDisplayedView(editView.render(person), editView);
	}

	function showPreview(person) {
		changeDisplayedView(preView.render(person), preView);
	}

	function initViews() {
		var _listViewContainer;
		listView = new ListView(group);
		editView = new EditView();
		preView = new Preview();

		$listViewElement = $('#list-view');
		_listViewContainer = listView.getContainer();
		$listViewElement.replaceWith(_listViewContainer);
		$listViewElement = _listViewContainer;

		listView.init();
		$displayedViewElement = $('#view');
		showList();
	};

	function changeDisplayedView(viewElement, view) {
		$listViewElement.hide();
		$displayedViewElement.replaceWith($(viewElement));
		$displayedViewElement = $(viewElement);
		if (view) {
			view.addEventListeners();
		}
		$displayedViewElement.show();
	}
}
