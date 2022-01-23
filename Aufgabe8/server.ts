import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://127.0.0.1:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

async function connect() {
  await mongoClient.connect();
  console.log("Connected successfully to server");
}
connect();

async function dbFind(
  db: string,
  collection: string,
  requestObject: any,
  response: http.ServerResponse
) {
  let result = await mongoClient
    .db(db)
    .collection(collection)
    .find(requestObject)
    .toArray();
  // console.log(result, requestObject); // bei Fehlern zum Testen
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
}

const server: http.Server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
    let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
    switch (url.pathname) {
      case "/concertEvent": {
        await mongoClient.connect();
        switch (request.method) {
          case "GET":
            await dbFind(
              "Interpret",
              "Price",
              {
                index: Number(url.searchParams.get("index")) // von String zu Zahl konvertieren
              },
              response
            );
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
  }
);
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Server starten: node ./Aufgabe8/server.js 