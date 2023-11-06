export class Person{
    // public name:string;
    // public age:number;
    // public hometown:string;

    constructor(public name:string, public age:number, public hometown:string){
    }
}

// export class Hero extends Person{

//     constructor(public nameHero: string, public ageHero:number, public hometownHero:string){
//         super(nameHero, ageHero, hometownHero);
//     }
// }


//composition
export class Hero {

    // public person:Person;

    constructor(public nameHero: string, public ageHero:number, public hometownHero:string, public person:Person){

        // this.person=new Person(nameHero, ageHero, hometownHero);
    }
}
const person=new Person("juanolas", 25, "Madrid");
const ironman=new Hero("juanolas", 25, "Madrid", person);

console.log(ironman);
console.log(person);