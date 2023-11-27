var http = require("node:http");
var fs = require("node:fs");
const url = require("node:url");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
	if (req.url != "/favicon.ico") {
		let myURL = req.url;
		myURL = myURL.slice(1, myURL.length);
		fs.readdir(".", (err, files) => {
			if (err) throw err;
			let myFiles = files;
			myFiles = myFiles.filter((item) => item.includes(".htm"));
			if (myFiles.includes(myURL)) {
				fs.readFile(myURL, (err, data) => {
					if (err) throw err;
					res.statusCode = 200;
					res.setHeader("Content-Type", "text/html");
					res.write(data);
					res.end();
				});
			} else {
				fs.readFile("404.html", (err, data) => {
					if (err) throw err;
					res.statusCode = 200;
					res.setHeader("Content-Type", "text/html");
					res.write(data);
					res.end();
				});
			}
		});
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
