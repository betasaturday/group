var http = require('http'),
	path = require('path'),
	url = require('url'),
	fs = require('fs'),
	mimeTypes = {
	  '.js' : 'text/javascript',
	  '.html': 'text/html',
	  '.css' : 'text/css'
	};

var students = [{
	id: 1,
	name: 'Rjkfg',
	lastname: 'Qrekre',
	age: 45,
	gender: 'M',
	skype: 'djkfj'
},
{
	id: 2,
	name: 'Were',
	lastname: 'Tthjfhj',
	age: 19,
	gender: 'F',
	skype: 'jdkfdj'
},
{
	id: 3,
	name: 'Yopioip',
	lastname: 'Buicnvm',
	age: 67,
	gender: 'F',
	skype: 'cxvcxv'
},
{
	id: 4,
	name: 'Uioopi',
	lastname: 'Ejdkfjk',
	age: 12,
	gender: 'M',
	skype: 'eriouwe'
}];

http.createServer(function (request, response) {
	//console.log('Server started');
	var lookup = decodeURI(request.url) === '/' ? '/index.html' : decodeURI(request.url),
		filePath,
		headers,
		id,
		requestData = '';
	console.log(lookup);

	if (lookup == '/hello') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello from ajax request!');
	}
	else if (lookup === '/students') {
		response.writeHead(200, {'Content-type': 'application/json'});
		response.end(JSON.stringify(students));
	}
	else if (lookup.substring(0, 9) === '/students') {
		id = Number(lookup.substring(lookup.lastIndexOf('/') + 1));

		request.on('data', appendData);
		request.on('end', prepareForSave);

		function appendData(data) {
			requestData += data.toString();
		}

		function prepareForSave() {
			console.log(requestData);
			response.writeHead(200, {'Content-type': 'application/json'});
			response.end(JSON.stringify(saveStudent(id, JSON.parse(requestData))));
		}
	} else {
		filePath = '../..' + lookup,
		headers;


		fs.exists(filePath, function (exists) {
			if (exists) {
				fs.readFile(filePath, function (err, data) {
					if (err) {
						response.writeHead(500);
						response.end('Server Error!');
					} else {
						headers = {'Content-type': mimeTypes[path.extname(lookup)]};
						response.writeHead(200, headers);
						response.end(data);
					}
				});
			} else {
				response.writeHead(404);
				response.end();
			}
		});
	}

}).listen(3000);

console.log('Server started');

function saveStudent(id, studentJSON) {
	var updatedStudent = students.find(compareById),
		indexOfUpdated = students.findIndex(compareById);
	//console.log(updatedStudent);
	//console.log(indexOfUpdated);
	if (updatedStudent) {
		updatedStudent = students[indexOfUpdated] = studentJSON;
	}
	return updatedStudent;

	function compareById(student) {
		return student.id === id;
	}

}
