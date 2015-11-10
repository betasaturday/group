function Preview (viewContainer) {
    'use strict';
	var	backToListHTML = '<button value="back-to-list">Back to list</button>',
		editButtonHTML = '<button value="edit">Edit</button>',
		backToListButton,
		editButton,
		currentPerson;
	
	this.render = function (person) {
		var previewHTML = '',
			personAttributes = person.getAttributes();

		currentPerson = person;
		
		Object.keys(personAttributes).forEach(function (attributeName) {
			previewHTML += nameValueTemplate({
					'name': attributeName,
					'value': personAttributes[attributeName]
				});
		});
		
		previewHTML += backToListHTML;
		previewHTML += editButtonHTML;
		viewContainer.innerHTML = previewHTML;

		backToListButton = viewContainer.querySelector('[value="back-to-list"]');
		editButton = viewContainer.querySelector('[value="edit"]');

		this.show();
	};
	
	this.show = function () {
		viewContainer.classList.remove('hidden');	
		backToListButton.addEventListener('click', showList, false);
		editButton.addEventListener('click', showEdit, false);
	};
	
	this.hide = function () {
		viewContainer.classList.add('hidden');
		backToListButton.removeEventListener('click', showList, false);
		editButton.removeEventListener('click', showEdit, false);

	};
	
	function showList() {
		mediator.unsubscribeAll('person-edited');
		mediator.publish('list');
	}

	function showEdit() {
		mediator.publish('editView', currentPerson);
	}
}
