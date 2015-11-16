function PersonView(person) {
	'use strict';
	var $row,
		previewButton,
		editButton;


	this.render = function () {
		$row = $('<div class="row"></div>'),
		updateRow();
		return $row;
	};

	this.addEventListeners = function () {
		$row.on('click', '[value="preview"]', showPreview);
		$row.on('click', '[value="edit"]', showEditView);
	};

	function showPreview() {
		mediator.publish('preview:showed', person);
		mediator.subscribe('person:updated', updateRow);
	}

	function showEditView() {
		mediator.publish('editView:showed', person);
		mediator.subscribe('person:updated', updateRow);
	}

	function updateRow() {
		var	personAttributes = person.toJSON();

		$row.html(tableRowTemplate({
			'name': personAttributes.name,
			'lastname': personAttributes.lastname
		}));
		previewButton = $row.find('[value="preview"]').first();
		editButton = $row.find('[value="edit"]').first();
	}
}
