
export interface Product{
    desc:string;
    price:number;
}

const phone:Product={
    desc:"Nokia A1",
    price:150
}
const tablet:Product={
    desc:"iPad Air",
    price:350
}
interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}
//esta función pide un objeto con dos propiedades que son tax y products y devuele un array 
//con los valores del objeto options


//function taxCalculation(options: TaxCalculationOptions): [number,number]{
// function taxCalculation({tax,products}: TaxCalculationOptions): [number,number]{
export function taxCalculation(options: TaxCalculationOptions): [number,number]{
    const {tax,products}=options;
    let total=0;
    //options.products.forEach(({price})=>{
    products.forEach(({price})=>{
        //total+=options.products.price;
        total+=price;
    
    });
    //return [total,total*options.tax];
    return [total,total*tax];
}


const shoppingCart=[phone,tablet];
const tax=0.15;

//Al poner number, number estamos indicando que el array que devuelve la función tiene dos valores
const [total,taxTotal]=taxCalculation({
    products:shoppingCart,
    tax:tax
}); 

console.log(total);
console.log(taxTotal);

export { };
