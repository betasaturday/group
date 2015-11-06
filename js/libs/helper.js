var helper = (function () {
	'use strict';

	function getEl (id) {
		return document.getElementById(id);
	}

	return {
		'getEl': getEl
	};
}());