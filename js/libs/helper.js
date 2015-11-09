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

	function makeAjaxRequest() {
		var xhr;
		if (XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}

	function sendAjaxRequest(method, uri, callback) {
		var xhr = makeAjaxRequest();
		xhr.open(method, uri, true);
		xhr.addEventListener('readystatechange', function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				callback(xhr.responseText);
			}
		}, false);
		xhr.send(null);
	}

	return {
		'getEl': getEl,
		'createEl': createEl,
		'sendAjaxRequest': sendAjaxRequest
	};
}());
