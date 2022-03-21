class Player{
    fullName:string;
    health:number;
    isInvincible:boolean;
    partner:Player

    greet():void{
        console.log(`Hello ${this.fullName}`)
    }
}

const joshan=new Player()
joshan.fullName="Joshan Pradhan";
joshan.health=100;
joshan.isInvincible=true;

const ram=new Player()
ram.fullName="Ram Shakya";
ram.health=80;
ram.isInvincible=false;
ram.partner=joshan //set partner of ram as joshan which is instance so that now ram can also have access to joshan instance properties


console.log(joshan)// prints objects of player instance joshan
console.log(ram)// prints objects of player instance ram

console.log(ram.partner.fullName) //prints Joshan Pradhan

joshan.greet()//prints Hello Joshan Pradhan
ram.greet()//prints Hello Ram Shakya