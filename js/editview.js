function EditView (viewContainer) {
    'use strict';
	
		var backToListHTML = '<button value="back-to-list">Back to list</button>',
			previewButtonHtml = '<button value="preview">Preview</button>',
			backToListButton,
			previewButton,
			currentPerson;
	
    this.render = function (person) {
		var viewContainerHTML = '',
			personAttributes = person.getAttributes();

		currentPerson = person;
		
		Object.keys(personAttributes).forEach(function (attributeName) {
			viewContainerHTML += labelInputTemplate({
				'name': attributeName,
				'value': personAttributes[attributeName]
			});
		});
		
		viewContainerHTML = tableEditTemplate({
			'table_body': viewContainerHTML
		});
		viewContainerHTML += backToListHTML;
		viewContainerHTML += previewButtonHtml;
		viewContainer.innerHTML = viewContainerHTML;
		backToListButton = viewContainer.querySelector('[value="back-to-list"]');
		previewButton = viewContainer.querySelector('[value="preview"]');
		this.show();
    };
	
	this.show = function () {
		viewContainer.classList.remove('hidden');	
		previewButton.addEventListener('click', showPreview, false);
		backToListButton.addEventListener('click', showList, false);
	};
	
	this.hide = function () {
		viewContainer.classList.add('hidden');
		previewButton.removeEventListener('click', showPreview, false);
		backToListButton.removeEventListener('click', showList, false);
	};
	
	function showPreview() {
		currentPerson.update(getFieldsData());
		mediator.publish('preview', currentPerson);
	}

	function showList() {
		currentPerson.update(getFieldsData());
		mediator.publish('list');
	}

	function getFieldsData() {
		var rowsNodeList = viewContainer.getElementsByClassName('row'),
			rows = [].slice.call(rowsNodeList),
			result = {},
			propertyName = '',
			propertyValue = '',
			labelText;
		
		rows.forEach(function (row) {
			labelText = row.getElementsByTagName('label')[0].innerHTML;	
			propertyName = labelText.slice(0, -2);
			propertyValue = row.getElementsByTagName('input')[0].value;
			result[propertyName] = propertyValue;
		});
		return result;
	}
}
