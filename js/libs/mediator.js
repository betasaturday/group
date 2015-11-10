var mediator = (function() {
	var handlersMap = {};

	function subscribe(channel, handler) {
		if (!(channel in handlersMap)) {
			handlersMap[channel] = [];
		}
		handlersMap[channel].push(handler);
	}

	function publish(channel) {
		var newArguments = [].slice.call(arguments, 1);
		if (channel in handlersMap) {
			handlersMap[channel].forEach(function (handler) {
				handler.apply(null, newArguments);
			});
		}
	}

	function unsubscribeAll(channel) {
		if (channel in handlersMap) {
			handlersMap[channel] = [];
		}
	}

	return {
		'subscribe': subscribe,
		'publish': publish,
		'unsubscribeAll': unsubscribeAll
	};

}());
