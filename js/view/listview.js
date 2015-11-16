function ListView(group) {
	'use strict';
	var $listViewElement;

	this.getContainer = function () {
		var groupTableHTML =  groupTableTemplate({
			'group_name': group.getName(),
		});
		$listViewElement = $(groupTableHTML);
		return $listViewElement;
	};

	this.init = function () {
		var $groupTable,
			personView;

		$groupTable = $listViewElement.find('.table').first();


		group.each(function (person) {
			personView = new PersonView(person);
			$groupTable.append(personView.render());
			personView.addEventListeners();
		});

		return $listViewElement;
	};

	this.render = function () {
		return $listViewElement;
	};
}
