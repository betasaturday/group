function PersonView(person) {
	'use strict';
	var $row;

	this.render = function () {
		$row = $('<div class="row"></div>'),
		updateRow();
		return $row;
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
		var	personAttributes = person.toJSON(),
			previewButton,
			editButton;

		$row.html(tableRowTemplate({
			'name': personAttributes.name,
			'lastname': personAttributes.lastname
		}));
		previewButton = $row.find('[value="preview"]').first();
		editButton = $row.find('[value="edit"]').first();

		previewButton.click(showPreview);
		editButton.click(showEditView);

	}
}
