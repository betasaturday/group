function Person (name, lastname, gender, age, skype) {
    'use strict';
	var attributes = {
		'name': name,
		'lastname': lastname,
		'gender': gender,
		'age': age,
		'skype': skype
	};
	
	this.getAttributes = function () {
		return JSON.parse(JSON.stringify(attributes));
	};
	
	this.update = function (newAttributes) {
		attributes = newAttributes;
	};

	this.init = function(personArguments) {
		this.constructor.apply(this, personArguments);
	};
};
