function Controller() {
	'use strict';
	var $listViewEl = $('#list-view');

	mediator.subscribe('show preview', showPreview);
	mediator.subscribe('show edit-view', showEditView);
	mediator.subscribe('show group', showListView);

	//helper.sendAjaxRequest('GET', '/students', createGroup);

	var group = new Group(),
		groupFetch = group.fetch();

	groupFetch.done(createListView);

	function createListView () {
		var	listView = new ListView({el: $listViewEl, collection: group});
	}

	function hideListView() {
		$listViewEl.hide();
	}

	function showEditView(_model) {
		hideListView();
		var editview = new EditView({el: '#edit-view', model: _model});
	}

	function showPreview(_model) {
		hideListView();
		var preview = new Preview({el: '#preview', model: _model});
	}

	function showListView() {
		$listViewEl.show();
	}
}
