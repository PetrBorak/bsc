/**
 * Created by PetrBorak on 7. 6. 2015.
 */

var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './app/',            // required, the root of the server file tree
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    port: 9090               // optional, defaults to a random port
    //host: '10.0.0.100',       // optional, defaults to any interface
    //followSymlink: true,      // optional, defaults to a 404 error
    //index: 'foo.html'         // optional, defaults to 'index.html'
});

server.start(function(){
    console.log('server listening on port ' + server.port);
})