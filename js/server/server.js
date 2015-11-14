var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	mimeTypes = {
	  '.js' : 'text/javascript',
	  '.html': 'text/html',
	  '.css' : 'text/css'
	};

http.createServer(function (request, response) {
	var lookup = decodeURI(request.url) === '/' ? '/index.html' : decodeURI(request.url),
		filePath,
		headers;

	if (lookup == '/hello') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Hello from ajax request!');
	}
	else if (lookup === '/students') {
		response.writeHead(200, {'Content-type': 'text/plain'});
		var students = {"members": [
				['Dsdjfkd', 'Sdjfk', 'M', 43, 'dfjksdjf'],
				['Axcnvt', 'Rjsdkfjd', 'M', 19, 'xcvxcvx'],
				['Tsdfjkdsf', 'Qkdsjf', 'F', 34, 'uwerwere'],
				['Gkdsfjkdlsf', 'Idfjkdsf', 'M', 27, 'cvxcv'],
				['Esdjk', 'Vfdsdfpp', 'M', 23, 'opwe'],
				['Rsdjfk', 'Cdfs', 'M', 18, 'xcvjk'],
				['Bskdfjdks', 'Udfdj', 'F', 31, 'cnsdosd'],
				['Udsfj', 'Qcvnxc', 'M', 28, 'evjkj']
			],
			"name": "Group name"
		};
		response.end(JSON.stringify(students));
	} else {
		filePath = '../..' + lookup,
		headers;

		console.log(filePath);

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

