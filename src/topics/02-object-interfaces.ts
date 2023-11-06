
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?:string;
}
const strider: Character ={
    name: "Strider",
    hp: 100,
    skills: ["Run", "Jump"]
}

strider.hometown = "Gondor";
console.table(strider);
export { };
