var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var queryData = url.parse(request.url, true).query;
  var pathname = url.parse(request.url, true).pathname;
  console.log(request.url);
  //mainpage if pathway == '/'
  if (pathname == '/' || request.url == '/'){
    request.url = '/main.js';
    queryData.id = 'welcome';
  }
  response.writeHead(200);
  var template = `<body><p>TEST</p></body>`;
  response.end(template);

  /*if (pathname == '/'){
    fs.readFile(`./main.js`, 'utf8', function(err, description){
      var template =`<body>${description}</body>`;
      response.end(template);
    })
  }*/
});
app.listen(3000);
