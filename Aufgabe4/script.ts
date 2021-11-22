let interpret: HTMLInputElement = document.getElementById("Interpret") as HTMLInputElement;
let price: HTMLInputElement= document.getElementById("Price") as HTMLInputElement; 
let date: HTMLInputElement = document.getElementById("Date") as HTMLInputElement;
let eventArray : any = [];

class eventTable{
    private interpret : string;
    private price: number;
    private date : Date;


    constructor(interpret: string, price : number, date: Date){
        this.interpret = interpret;
        this.price = price; 
        this.date = date;
    }
    addToList(){
        eventArray.push(this);
    }
}


