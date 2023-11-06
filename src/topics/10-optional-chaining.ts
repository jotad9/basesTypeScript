export interface Passenger{
    name:string;
    //alomejor no tiene hijos
    children?:string[];
}

const passenger1:Passenger={
    name:"Daniel",
    children:["Juan","Maria"]
}
const passenger2:Passenger={
    name:"Juan",
}

const printchildren=(passenger:Passenger)=>{

    const howManyChildren=passenger.children?.length;
    console.log(howManyChildren);
}

printchildren(passenger1);