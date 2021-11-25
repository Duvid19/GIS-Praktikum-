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
    class eventTable {
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
    class Eventstorage {
        static loadEvent() {
            let eventJSON = localStorage.getItem("events") || "[]";
            for (let table of JSON.parse(eventJSON)) {
                Eventstorage.addLoadedElement(table.interpret, table.price, table.date);
            }
        }
        static addLoadedElement(interpret, price, date) {
            let newEvent = new eventTable(interpret, price, date);
            newEvent.addToList();
            renderListe(newEvent);
        }
        static storeEvent() {
            localStorage.setItem("events", JSON.stringify(eventArray));
        }
    }
    Eventstorage.loadEvent();
    button.addEventListener("click", addElement);
    function addElement() {
        if (interpret.value == "" || price.value == "" || date.value == "") {
            alert("Felder bitte ausfüllen");
            return;
        }
        let newEvent = new eventTable(interpret.value, price.value, date.value);
        newEvent.addToList();
        renderListe(newEvent);
        Eventstorage.storeEvent();
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
        Eventstorage.storeEvent();
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
    /*  interpret.addEventListener("click", safeButtonHandler) ;
  
          function safeButtonHandler() {
          
              console.log("Speucher-Button geklickt");
              let currentValue: string = interpret.value;
              localStorage.setItem("aktueller Inputwert",currentValue );
          }
          
          function ladeButtonHandler(){
              console.log("Lade-Button geklickt");
              let wertVomLocalStorage: string = localStorage.getItem("aktuellerInputWert");
              interpret.value = wertVomLocalStorage;
          }
       */
})(localStoragePraktikum || (localStoragePraktikum = {}));
//# sourceMappingURL=script.js.map