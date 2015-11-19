function Controller() {
	'use strict';
	var $listViewEl = $('#list-view');

	mediator.subscribe('show preview', showPreview);
	mediator.subscribe('show edit-view', showEditView);
	mediator.subscribe('show group', showListView);

	helper.sendAjaxRequest('GET', '/students', createGroup);

	function createGroup (groupJSON) {
		var group = new Group(JSON.parse(groupJSON)),
			listView = new ListView({el: $listViewEl, model: group});
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
