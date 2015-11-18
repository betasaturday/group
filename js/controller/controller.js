function Controller() {
	'use strict';
	var group = new Group([{
			name: 'Rjkfg',
			lastname: 'Qrekre',
			age: 45,
			gender: 'M',
			skype: 'djkfj'
		},
		{
			name: 'Were',
			lastname: 'Tthjfhj',
			age: 19,
			gender: 'F',
			skype: 'jdkfdj'
		},
		{
			name: 'Yopioip',
			lastname: 'Buicnvm',
			age: 67,
			gender: 'F',
			skype: 'cxvcxv'
		},
		{
			name: 'Uioopi',
			lastname: 'Ejdkfjk',
			age: 12,
			gender: 'M',
			skype: 'eriouwe'
		}]),
		$listViewEl = $('#list-view'),
		listView;

	mediator.subscribe('show preview', showPreview);
	mediator.subscribe('show edit-view', showEditView);
	mediator.subscribe('show group', showListView);

	listView = new ListView({el: $listViewEl, model: group});

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
