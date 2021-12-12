    import * as http from "http";

    const hostname: string = "127.0.0.1"; // Local Host
    const port: number = 3000;  

    
    const server: http.Server = http.createServer(
        (request: http.IncomingMessage, response: http.ServerResponse) => {
            response.statusCode = 200; // definition Status
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Origin", "*"); // "*" -> Kann mit jedem geteilt werden

            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

            switch (url.pathname){
                case "/": //Rootpath
                    response.end("Server erreichbar");
                    break;
                case "/convertDate": 
                    let giveDate: string = url.searchParams.get("date"); // Auslesen eines get Parameters
                    response.end(convertDate(giveDate));
                    break;
                default:
                    response.statusCode = 404; 
                    break;

            }
            response.end();
        }
    );

    function convertDate(date: string): string {
        console.log(date);
        return "Day " + date.substring(9,11) + "," + " " + "Month" + date.substring(6,8) + "," + " " + "Year" + date.substring(1,5);
    }

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
    
    

    
    


    

            
        