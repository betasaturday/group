var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	mimeTypes = {
	  '.js' : 'text/javascript',
	  '.html': 'text/html',
	  '.css' : 'text/css'
	};

http.createServer(function (request, response) {
	//console.log('Server started');
	var lookup = decodeURI(request.url) === '/' ? '/index.html' : decodeURI(request.url),
		filePath,
		headers;

	if (lookup == '/hello') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello from ajax request!');
	}
	else if (lookup === '/students') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		var students = [{
			name: 'Rjkfg',
			lastname: 'Qrekre',
			age: 45,
			gender: 'M',
			skype: 'djkfj'
		},
		{
			name: 'Were',
			lastname: 'Tthjfhj',
			age: 19,
			gender: 'F',
			skype: 'jdkfdj'
		},
		{
			name: 'Yopioip',
			lastname: 'Buicnvm',
			age: 67,
			gender: 'F',
			skype: 'cxvcxv'
		},
		{
			name: 'Uioopi',
			lastname: 'Ejdkfjk',
			age: 12,
			gender: 'M',
			skype: 'eriouwe'
		}];

		response.end(JSON.stringify(students));
	} else {
		filePath = '../..' + lookup,
		headers;

		console.log(lookup);

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
