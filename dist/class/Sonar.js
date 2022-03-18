"use strict";
class Sonar {
    constructor() {
        this.roll = 10;
    }
    ping() {
        console.log("Ping");
    }
}
class Example extends Sonar {
    hello() {
        console.log("roll", this.roll); //also i can use this roll property only because i have extended it 
    }
}
class AnotherSonar {
    constructor() {
        this.name = "John Doe";
    }
    ping() {
        console.log("Ping" + this.name);
    }
    pong() {
        console.log("Pong");
    }
}
let sonar = new Sonar();
let example = new Example();
let anotherSonar = new AnotherSonar();
// console.log(anotherSonar.name) //error as name property is set to private and can use used only by AnotherSonar Class
