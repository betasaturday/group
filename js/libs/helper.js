var helper = (function () {
	'use strict';

	function getEl (id) {
		return document.getElementById(id);
	}

	function createEl(tagName, attributes) {
		var el = document.createElement(tagName);
		Object.keys(attributes).forEach(function (attributeName) {
			el.setAttribute(attributeName, attributes[attributeName]);
		});
		return el;
	}

	return {
		'getEl': getEl,
		'createEl': createEl
	};
}());
