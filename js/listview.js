function ListView(viewContainer, controller, group) {
	'use strict';
	var groupTableTemplate = '<div class = "caption"><%group name%></div>' +
								'<div class = "table"></div>',
		self = this;
	
	this.render = function () {
		var groupTableHTML =  templator.replace(groupTableTemplate, {
			'group name': group.getName(),
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