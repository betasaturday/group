function ListView(group) {
	'use strict';
	var $listViewElement;

	this.init = function () {
		var groupTableHTML =  groupTableTemplate({
			'group_name': group.getName(),
		}),
		$groupTable,
		personView;

		$listViewElement = $(groupTableHTML);
		$groupTable = $listViewElement.find('.table').first();


		group.each(function (person) {
			personView = new PersonView(person);
			$groupTable.append(personView.render());
		});

		return $listViewElement;
	};

	this.render = function () {
		return $listViewElement;
	};

}
