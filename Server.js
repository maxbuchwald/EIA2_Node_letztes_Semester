"use strict";
const Http = require("http");
const Url = require("url");
var Server;
(function (Server) {
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleListen() {
        console.log("Ich h�re?");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("Ich h�re Stimmen!");
        _response.write("Ich h�re Stimmen!<br/>");
        let query = Url.parse(_request.url, true).query;
        let a = parseInt(query["a"]);
        let b = parseInt(query["b"]);
        _response.write("Ich habe dich verstanden.<br/>");
        for (let key in query) {
            console.log(query[key]);
            _response.write("Die eingebene Query-Information ist: " + (query[key]) + "<br/>");
        }
        _response.write("Das Ergebnis ist: " + (a + b));
        _response.end();
    }
})(Server || (Server = {}));
//# sourceMappingURL=Server.js.map