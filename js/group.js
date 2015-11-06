function Group() {
	'use strict';
	var members = [
			new Person('Dsdjfkd', 'Sdjfk', 'M', 43, 'dfjksdjf'),
			new Person('Axcnvt', 'Rjsdkfjd', 'M', 19, 'xcvxcvx'),
			new Person('Tsdfjkdsf', 'Qkdsjf', 'F', 34, 'uwerwere'),
			new Person('Gkdsfjkdlsf', 'Idfjkdsf', 'M', 27, 'cvxcv'),
			new Person('Esdjk', 'Vfdsdfpp', 'M', 23, 'opwe'),
			new Person('Rsdjfk', 'Cdfs', 'M', 18, 'xcvjk'),
			new Person('Bskdfjdks', 'Udfdj', 'F', 31, 'cnsdosd'),
			new Person('Udsfj', 'Qcvnxc', 'M', 28, 'evjkj')
		],
		name = 'Group name';

	this.getMembers = function () {
		return members.slice();
	};

	this.getName = function () {
		return name;
	};

	this.getPersonAttributesByIndex = function (index) {
		return members[index].getAttributes();
	};
	
	this.updatePerson = function (index, personAttributes) {
		members[index].update(personAttributes);
	};

	this.each = function (callback) {
		members.forEach(function (member) {
			callback(member);
		});
	};
}