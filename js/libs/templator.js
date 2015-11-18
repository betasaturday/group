var templator = (function () {
	'use strict';
	var left = '<%',
		right = '%>';
	
	function replace(sourceString, hashForReplacing) {
		Object.keys(hashForReplacing).forEach(function (propertyName) {
			sourceString = sourceString.replace(left + propertyName + right,
								 hashForReplacing[propertyName]);
		});
		return sourceString;
	}
	
	return {
		'replace': replace
	};
}());