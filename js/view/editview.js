function EditView () {
    'use strict';
	var $editViewElement,
		$backToListButton,
		$previewButton,
		$saveButton,
		person;

    this.render = function (_person) {
		person = _person;

		$editViewElement = $(editViewTpl(person.toJSON()));

		$backToListButton = $editViewElement.find('[value="back-to-list"]').first();
		$previewButton = $editViewElement.find('[value="preview"]').first();
		$saveButton = $editViewElement.find('[value="save"]').first();

		return $editViewElement;
    };

	this.addEventListeners = function () {
		$previewButton.click(showPreview);
		$backToListButton.click(showList);
		$saveButton.click(save);
	};

	function showPreview() {
		mediator.publish('preview:showed', person);
	}

	function showList() {
		mediator.unsubscribeAll('person:updated');
		mediator.publish('listView:showed');
	}

	function save() {
		person.update(getFieldsData());
		mediator.publish('person:updated');
		alert("Saved successfully");
	}

	function getFieldsData() {
		var $rows = $editViewElement.find('.row').toArray(),
			result = {},
			propertyName = '',
			propertyValue = '',
			labelText;

		$rows.forEach(function (row) {
			labelText = $(row).find('label').first().html();
			propertyName = labelText.slice(0, -2);
			propertyValue = $(row).find('input').first().val();
			result[propertyName] = propertyValue;
		});
		return result;
	}
}
