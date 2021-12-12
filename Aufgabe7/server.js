"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = "127.0.0.1"; // Local Host
const port = 3000;
const server = http.createServer((request, response) => {
    response.statusCode = 200; // definition Status
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*"); // "*" -> Kann mit jedem geteilt werden
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/": //Rootpath
            response.end("Server erreichbar");
            break;
        case "/convertDate":
            let giveDate = url.searchParams.get("date"); // Auslesen eines get Parameters
            response.end(convertDate(giveDate));
            break;
        default:
            response.statusCode = 404;
            break;
    }
    response.end();
});
function convertDate(date) {
    console.log(date);
    return "Day " + date.substring(9, 11) + "," + " " + "Month" + date.substring(6, 8) + "," + " " + "Year" + date.substring(1, 5);
}
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map