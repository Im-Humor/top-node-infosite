var http = require("node:http");
var fs = require("node:fs");
const url = require('node:url');

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
	fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        console.log(req.url);
		res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(data);
		res.end();
	});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
