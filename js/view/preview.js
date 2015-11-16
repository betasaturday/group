function Preview () {
    'use strict';
	var	$previewElement,
		$backToListButton,
		$editButton,
		person;

	this.render = function (_person) {
		person = _person;
		$previewElement = $(previewTpl(person.toJSON()));

		$backToListButton = $previewElement.find('[value="back-to-list"]').first();
		$editButton = $previewElement.find('[value="edit"]').first();

		return $previewElement;
	};

	this.addEventListeners = function () {
		$backToListButton.click(showList);
		$editButton.click(showEdit);
	};

	function showList() {
		mediator.unsubscribeAll('person:updated');
		mediator.publish('listView:showed');
	}

	function showEdit() {
		mediator.publish('editView:showed', person);
	}
}
