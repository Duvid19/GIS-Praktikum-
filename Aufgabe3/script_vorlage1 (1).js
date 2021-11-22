"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 20;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `David`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3("Brot");
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße David.
 Ich esse gerne Brot.
 Ich gehöre zur Generation Z
 */
// -- [Aufgabe 2]
let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.99],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// Lösung a) ...
console.log(`Array Länge ist: ${events.length}`);
// Lösung b) ...
for (let i = 0; i < events.length; i++) {
    console.log(events[i][0]);
    console.log(events[i][1]);
}
// Lösung c) ...
function lösung(array) {
    let result = array[0][1];
    for (let i = 0; i < array.length; i++) {
        let current = array[i][1];
        if (current > result) {
            result = current;
        }
    }
    return result;
}
console.log('Größter Wert ist:' + lösung(events));
// Lösung d) ...
function AufgabeD(array, name) {
    for (let i = 0; i < events.length; i++) {
        if (name == array[i][0]) {
            return true;
        }
    }
    return false;
}
console.log(AufgabeD(events, "Bee Gees"));
// Lösung e) ...
function factorial(n) {
    let result = 1;
    while (n > 0) {
        result = result * n;
        n--;
    }
    console.log("Die Fakultät lautet:" + " " + result);
}
factorial(4);
// Lösung f) ...
function Aufgabef() {
    let anzahl = 0;
    for (let i = 100; i > 0; i--) {
        if ((i % 3) == 0) {
            console.log(i);
            anzahl++;
        }
    }
    console.log('Anzahl der Zahlen die durch 3 teilbar sind:' + " " + anzahl);
}
Aufgabef();
// Lösung g) ...
class ConcertEvent {
    interpret;
    price;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    show() {
        console.log(this.interpret);
        console.log(this.price);
    }
}
// Lösung h) ...
let concertArray = [
    new ConcertEvent("Mark Knopfler", 10.1),
    new ConcertEvent("Pink Floyd", 15.9),
    new ConcertEvent("Metallica", 20.1),
    new ConcertEvent("Michael Bublé", 11.1),
    new ConcertEvent("Dire Straits", 12.2),
    new ConcertEvent("Mariah Carey", 1.1),
    new ConcertEvent("Cat Stevens", 12.99),
    new ConcertEvent("Mark Forster", 2.1),
    new ConcertEvent("Helene Fischer", 3.1),
    new ConcertEvent("Bee Gees", 25.2)
];
for (let i = 0; i < concertArray.length; i++) {
    concertArray[i].show();
}
//# sourceMappingURL=script_vorlage1%20(1).js.map