import { Product, taxCalculation } from './05-function-destructuring';

const shoppingCart: Product[]=[
    {
        desc:"Nokia A1",
        price:150
    },
    {
        desc:"iPad Air",
        price:350
    },
    {
        desc:"Headphones",
        price:25
    }
];
//tax=0.15
const [total,taxTotal] = taxCalculation({products:shoppingCart,tax:0.15});

console.log(total);
console.log(taxTotal);
