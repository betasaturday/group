function ListView(viewContainer, group) {
	'use strict';

	this.render = function () {
		var groupTableHTML =  groupTableTemplate({
			'group_name': group.getName(),
		}),
		groupTable,
		personView;

		viewContainer.innerHTML = groupTableHTML;
		groupTable = viewContainer.getElementsByClassName('table')[0];


		group.each(function (person) {
			personView = new PersonView(person);
			groupTable.appendChild(personView.render());
		});

		this.show();
	};

	this.show = function () {
		viewContainer.classList.remove('hidden');
	};

	this.hide = function () {
		viewContainer.classList.add('hidden');
	};

}
