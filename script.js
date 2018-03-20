// var fs = require('fs');
// var http = require('http');

// var server = http.createServer();

// fs.readFile('./index.html', 'utf-8', function(err, data) {

// 	server.on('request', function (request, response) {
//     	response.setHeader("Content-Type", "text/html; charset=utf-8");
//     	if (request.method === 'GET' && request.url === '/') {
//         	response.write(data);
//             	response.end();
//     	} else {
//             	response.statusCode = 404;
//             	response.write('<h1>404: Zła ścieżka!</h1>');
//             	response.end();
//     	}
// 	});
// });

// server.listen(8080);

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));

