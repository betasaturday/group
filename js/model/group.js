function Group() {
	'use strict';
	var groupJson = helper.sendAjaxRequest('GET', '/students', init),
		members,
		name;

	this.getName = function () {
		return name;
	};

	this.each = function (callback) {
		members.forEach(function (member) {
			callback(member);
		});
	};

	function init(groupJson) {
		var sourceObject = JSON.parse(groupJson);

		members = sourceObject.members.map(function (personArguments) {
			var person = new Person();
			person.init(personArguments);
			return person;
		});
		name = sourceObject.name;
		mediator.publish('group:created');
	}
}
