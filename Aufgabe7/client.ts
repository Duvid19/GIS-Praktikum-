
let dateEl: HTMLInputElement = document.getElementById("date") as HTMLInputElement;
let submitButton: HTMLInputElement = document.getElementById("submitButton") as HTMLInputElement;
let dateFormat: HTMLInputElement = document.getElementById("dateFormatter") as HTMLInputElement;

submitButton.addEventListener("click" , sendToServer);

function createHTMElem(datestring: string): void {
    let paragraph: HTMLElement = document.createElement("p");
    paragraph.textContent = datestring;
    dateFormat.appendChild(paragraph);
}

async function requestDateWithGET(url: RequestInfo): Promise <string> {
let response: Response = await fetch(url);
let text: string = await response.text();
return text;
}
async function sendToServer() {
let date: string = JSON.stringify(dateEl.value);
let servResponse: string = await requestDateWithGET(`http://localhost:3000/convertDate?date=${date}`);
createHTMElem(servResponse);
}


