function Person (name, lastname, gender, age, skype) {
    'use strict';
	var attributes = {
		'name': name,
		'lastname': lastname,
		'gender': gender,
		'age': age,
		'skype': skype
	};

	this.toJSON = function () {
		return JSON.parse(JSON.stringify(attributes));
	};

	this.update = function (personJSON) {
		attributes = personJSON;
	};

	this.init = function(personJSON) {
		this.constructor.apply(this, personJSON);
	};
};
