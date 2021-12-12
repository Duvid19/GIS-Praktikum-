"use strict";
let dateEl = document.getElementById("date");
let submitButton = document.getElementById("submitButton");
let dateFormat = document.getElementById("dateFormatter");
submitButton.addEventListener("click", sendToServer);
function createHTMElem(datestring) {
    let paragraph = document.createElement("p");
    paragraph.textContent = datestring;
    dateFormat.appendChild(paragraph);
}
async function requestDateWithGET(url) {
    let response = await fetch(url);
    let text = await response.text();
    return text;
}
async function sendToServer() {
    let date = JSON.stringify(dateEl.value);
    let servResponse = await requestDateWithGET(`http://localhost:3000/convertDate?date=${date}`);
    createHTMElem(servResponse);
}
//# sourceMappingURL=client.js.map