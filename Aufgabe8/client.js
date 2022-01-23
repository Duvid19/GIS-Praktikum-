"use strict";
var localStoragePraktikum;
(function (localStoragePraktikum) {
    let interpret = document.getElementById("Interpret");
    let price = document.getElementById("Price");
    let date = document.getElementById("Date");
    let eventArray = [];
    let table = document.getElementById("box1");
    let id = 0;
    let button = document.getElementById("button");
    async function getFromServer() {
        await fetch("http://127.0.0.1:3000/concertEvents")
            .then(response => response.json())
            .then(data => {
            let responseData = data;
            console.log(eventArray);
            for (let entry of data) {
                renderListe(new EventTable(entry.interpret, entry.price, entry.date));
            }
            responseData;
        });
    }
    getFromServer();
    class EventTable {
        interpret;
        price;
        date;
        id;
        constructor(interpret, price, date) {
            this.interpret = interpret;
            this.price = price;
            this.date = date;
            this.id = id;
            id++;
        }
        getId() {
            return this.id.toString();
        }
        getInterpret() {
            return this.interpret;
        }
        getPrice() {
            return this.price;
        }
        getDate() {
            return this.date;
        }
        addToList() {
            eventArray.push(this);
        }
        removeFromList(index) {
            eventArray.splice(index, 1);
        }
    }
    button.addEventListener("click", addElement);
    function addElement() {
        if (interpret.value == "" || price.value == "" || date.value == "") {
            alert("Felder bitte ausfüllen");
            return;
        }
        let newEvent = new EventTable(interpret.value, price.value, date.value);
        newEvent.addToList();
        renderListe(newEvent);
        console.log("nice");
        getFromServer();
        sendToServer();
    }
    function removeEvent(event) {
        let element = event.currentTarget;
        let parent = event.target.parentElement;
        let elementId = element.getAttribute("data-id");
        eventArray.forEach((eventelem, index) => {
            if (eventelem.getId() == elementId)
                eventArray.splice(index, 1);
        });
        parent.remove();
    }
    function renderListe(input) {
        let row = document.createElement("tr");
        let interpret = document.createElement("td");
        let price = document.createElement("td");
        let date = document.createElement("td");
        let trash = document.createElement("td");
        interpret.textContent = input.getInterpret();
        price.textContent = input.getPrice();
        date.textContent = input.getDate();
        trash.setAttribute("class", "trash");
        trash.setAttribute("data-id", input.getId());
        trash.addEventListener("click", removeEvent);
        row.appendChild(interpret);
        row.appendChild(price);
        row.appendChild(date);
        row.appendChild(trash);
        table.appendChild(row);
    }
    async function sendToServer() {
        try {
            await fetch("http://127.0.0.1:3000/concertEvent", {
                method: "POST",
                headers: {},
                body: JSON.stringify({
                    interpret: interpret.value,
                    price: price.value,
                    date: date.value
                })
            })
                .then(response => {
                if (response.status == 201) {
                    return true;
                }
                else {
                    return false;
                }
            });
            console.log("cool");
        }
        catch (error) {
            console.log(error);
            return;
        }
    }
})(localStoragePraktikum || (localStoragePraktikum = {}));
//# sourceMappingURL=client.js.map