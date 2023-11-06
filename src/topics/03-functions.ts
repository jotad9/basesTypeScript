// function addNumbers(a: number, b: number): number {
//     return a + b;
// }

// function multiply(firstNumber: number,secondNumber ?: number, base: number=2){
//     return firstNumber * base;
// }
// const addNumbersArrow = (a: number, b: number): string => `${a + b}`;
// const result:number = addNumbers(2, 3);
// const result2:string = addNumbersArrow(2, 3);

// console.log(result, result2);

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}
const strider: Character ={
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(this.hp);
    }
}
const healCharacter=(character:Character, amount:number)=>{
    character.hp+=amount;
    console.log(character);
}

healCharacter(strider, 20);
healCharacter(strider, 20);
healCharacter(strider, 200);

export { };
