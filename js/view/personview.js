function PersonView(person) {
	'use strict';
	var row;

	this.render = function () {
		row = helper.createEl('div', {'class': 'row'}),
		updateRow();
		return row;
	};

	function showPreview() {
		mediator.publish('preview', person);
		mediator.subscribe('person-edited', updateRow);
	}

	function showEditView() {
		mediator.publish('editView', person);
		mediator.subscribe('person-edited', updateRow);
	}

	function updateRow() {
		var	personAttributes = person.getAttributes(),
			previewButton,
			editButton;

		row.innerHTML = tableRowTemplate({
			'name': personAttributes.name,
			'lastname': personAttributes.lastname
		});
		previewButton = row.querySelector('[value="preview"]');
		editButton = row.querySelector('[value="edit"]');

		previewButton.addEventListener('click', showPreview, false);
		editButton.addEventListener('click', showEditView, false);

	}
}
