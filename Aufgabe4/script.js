"use strict";
let interpret = document.getElementById("Interpret");
let price = document.getElementById("Price");
let date = document.getElementById("Date");
let eventArray = [];
class eventTable {
    interpret;
    price;
    date;
    constructor(interpret, price, date) {
        this.interpret = interpret;
        this.price = price;
        this.date = date;
    }
    addToList() {
        eventArray.push(this);
    }
}
//# sourceMappingURL=script.js.map