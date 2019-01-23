var http = require('http');
var fs = require('fs');
var mod1 = require('./module1');
var mod2 = require('./module2');
var app = require('./app');


//DEFINE FUNCTION IN FILE-
/*function onRequest(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./index.html',null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write("file not found sucka");

		}else{
			response.write(data);
		}
		response.end();
	});
	//response.write(mod2.myStr);
	//mod2.myFunction();
	
}
*/

http.createServer(app.onRequest).listen(8000);