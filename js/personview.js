function PersonView(person) {
	'use strict';
	var tableRowTemplate = '<div class = "row">' +
								'<div class = "cell"><%name%></div>' +
								'<div class = "cell"><%lastname%></div>' +
								'<div class = "cell"><button value = "preview">Preview</button></div>' +
								'<div class = "cell"><button value = "edit">Edit</button></div>' +
							'</div>';


	this.render = function () {
		var row = helper.createElement('div', {'class': 'row'}),
			personAttributes = person.getAttributes(),
			previewButton,
			editButton;

		row.innerHTML = templator.replace(tableRowTemplate, {
			'name': personAttributes.name,
			'lastname': personAttributes.lastname
		});
		previewButton = row.querySelector('[value="preview]');
		editButton = row.querySelector('[value="edit"]');

		previewButton.addEventListener('click', showPreview, false);
		editButton.addEventListener('click', showEditView, false);
	};

	function showPreview() {
		mediator.publish('preview', person);
	}

	function showEditView() {
		mediator.publish('editView', person);
	}
}