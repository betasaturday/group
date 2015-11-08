function PersonView(person) {
	'use strict';


	this.render = function () {
		var row = helper.createEl('div', {'class': 'row'}),
			personAttributes = person.getAttributes(),
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

		return row;
	};

	function showPreview() {
		mediator.publish('preview', person);
	}

	function showEditView() {
		mediator.publish('editView', person);
	}
}
