var url = require('url');
var fs = require('fs');
var mod1 = require('./module1');
var mod2 = require('./module2');

function store1(){
	 alert("You have just tried to submit data for day one. Functionality not available right now!");
}

function store2(){
	 alert("You are attempting to submit data for day two. We can't quite do this yet!");
}

function store3(){
	 alert("Hey there, person who wants to submit data for day three. Hold up cause we can't quite do that yet!");
}

function getBig(){}

function change1(){
	document.getElementById("im") "im".src = alt
}



function renderHTML(path, response){
	fs.readFile(path, null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write("file not found sucka");

		}else{
			response.write(data);
			//response.write(mod2.myStr);
		}
		response.end();
	});
}
function submit(){
	onClick: m
}

module.exports = {
	onRequest: function(request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				renderHTML('./index.html', response); 
				//mod1.myF(); 
				break;
			case '/login':
				renderHTML('./pages/login.html', response); break;
			default:
				response.writeHead(404);
				response.write("request path not defined");
				response.end();

		}

	}
}
