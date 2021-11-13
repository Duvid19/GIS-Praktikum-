// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 20;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `David`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3("Brot");
}


/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße David.
 Ich esse gerne Brot.
 Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: any[][] = [
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
for (let i: number = 0; i < events.length; i++) {
  console.log(events[i][0]);
  console.log(events[i][1]);
}
// Lösung c) ...
function lösung(array: any[][]): number {
  let result: number = array[0][1];
  for (let i: number = 0; i < array.length; i++) {
    let current: number = array[i][1];
    if (current > result) {
      result = current;
    }
  }
  return result;
}
console.log('Größter Wert ist:' + lösung(events));

// Lösung d) ...
function AufgabeD(array: any[][], name: string): boolean {
  for (let i: number = 0; i < events.length; i++) {
    if (name == array[i][0]) {
      return true;
    }
  }
  return false;
}
console.log(AufgabeD(events,"Mark baguette"));
// Lösung e) ...
function factorial(n: number): void {
  let result: number = 1;
  while (n > 0) {
    result = result * n;
    n--;
  }
  console.log(result);
}
factorial(5);
// Lösung f) ...

function Aufgabef(): void {
  let anzahl: number = 0;
  for (let i: number = 100; i > 0; i--) {
    if ((i % 3) == 0) {
      console.log(i);
      anzahl++;

    }
  }
  console.log('Anzahl der Zahlen die durch 3 teilbar sind:' + anzahl);
}
Aufgabef();


// Lösung g) ...

class ConcertEvent {
  private interpret: string;
  private price: number;


  constructor(interpret: string, price: number) {
    this.interpret = interpret;
    this.price = price;
  }

  show(): void {

    console.log(this.interpret);
    console.log(this.price);
  }
}

// Lösung h) ...

let concertArray: ConcertEvent[] = [
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