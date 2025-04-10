const http = require('http');

const server = http.createServer(function(req, res){
    // reply to all with hello world

    if (req.url === "/") {
        res.end("<h1>Hello World</h1>");
    }

    if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    }

});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

