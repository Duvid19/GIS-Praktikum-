
namespace localStoragePraktikum {
    let interpret: HTMLInputElement = document.getElementById("Interpret") as HTMLInputElement;
    let price: HTMLInputElement = document.getElementById("Price") as HTMLInputElement;
    let date: HTMLInputElement = document.getElementById("Date") as HTMLInputElement;
    let eventArray: any = [];
    let table: HTMLElement = document.getElementById("box1") as HTMLElement;
    let id: number = 0;
    let button: HTMLElement = document.getElementById("button") as HTMLElement;

    async function getFromServer(): Promise<void> {
       await fetch("http://localhost:3000/concertEvents")
        .then(response => response.json())
        .then(data => {
            eventArray = data;
            console.log(eventArray);
            renderListe;
        });
    }
    
    class eventTable {
        private interpret: string;
        private price: string;
        private date: string;
        private id: number;


        constructor(interpret: string, price: string, date: string) {
            this.interpret = interpret;
            this.price = price;
            this.date = date;
            this.id = id;
            id++;
        }
        getId(): string {
            return this.id.toString();
        }
        getInterpret(): string {
            return this.interpret;
        }
        getPrice(): string {
            return this.price;
        }
        getDate(): string {
            return this.date;
        }

        addToList() {
            eventArray.push(this);
        }

        removeFromList(index: number) {
            eventArray.splice(index, 1);
        }

    }

    button.addEventListener("click", addElement);

    function addElement(): void {
        if (interpret.value == "" || price.value == "" || date.value == "") {
            alert("Felder bitte ausfüllen");
            return;
        }
        let newEvent: eventTable = new eventTable(interpret.value, price.value, date.value);
        newEvent.addToList();
        renderListe(newEvent);
        getFromServer();
        sendToServer();
    }

    function removeEvent(event: Event): void {
        let element: HTMLElement = event.currentTarget as HTMLElement;
        let parent: HTMLElement = (<HTMLElement>event.target).parentElement;
        let elementId: string = element.getAttribute("data-id");
        eventArray.forEach((eventelem: eventTable, index: number) => {
            if (eventelem.getId() == elementId) eventArray.splice(index, 1);
        });
        parent.remove();
        
    }

    function renderListe(input: eventTable) {
        let row: HTMLElement = document.createElement("tr");
        let interpret: HTMLElement = document.createElement("td");
        let price: HTMLElement = document.createElement("td");
        let date: HTMLElement = document.createElement("td");
        let trash: HTMLTableCellElement = document.createElement("td");

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
    async function sendToServer(): Promise<void> {
        try {
            await fetch("http://127.0.0.1:3000/concertEvents", {
                method: "POST",
                headers:  {                   
                },
                body: JSON.stringify({
                    interpret: interpret.value,
                    price: price.value,
                    date: date.value
                })               
                
            })
            .then(response => {
                if (response.status == 201) {
                    return true;
                } else {
                    return false;
                }
            });
        } catch (error) {
            console.log(error);
            return;
        }
    }
}


