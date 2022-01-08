"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
const hostname = "127.0.0.1"; // localhost
const port = 3000;
const mongoUrl = "mongodb://127.0.0.1:27017"; // für lokale MongoDB
let mongoClient = new mongo.MongoClient(mongoUrl);
async function dbFind(db, collection, requestObject, response) {
    let result = await mongoClient
        .db(db)
        .collection(collection)
        .find(requestObject)
        .toArray();
    // console.log(result, requestObject); // bei Fehlern zum Testen
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(result));
}
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
        case "/concertEvent": {
            await mongoClient.connect();
            switch (request.method) {
                case "GET":
                    await dbFind("Interpret", "Price", {
                        index: Number(url.searchParams.get("index")) // von String zu Zahl konvertieren
                    }, response);
                    break;
                case "POST":
                    // tslint:disable-next-line: typedef
                    let jsonString = "";
                    request.on("data", data => {
                        jsonString += data;
                    });
                    request.on("end", async () => {
                        mongoClient
                            .db("Interpret")
                            .collection("Price")
                            .insertOne(JSON.parse(jsonString));
                    });
                    break;
            }
            break;
        }
        case "/concertEvents": {
            await mongoClient.connect();
            switch (request.method) {
                case "GET":
                    await dbFind("Interpret", "Price", {}, response);
                    break;
            }
            break;
        }
        default:
            response.statusCode = 404;
    }
    response.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// Server starten: node ./Aufgabe8/server.js 
//# sourceMappingURL=server.js.map