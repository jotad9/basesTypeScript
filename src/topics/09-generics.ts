
// Generics
// Generics allow us to create reusable blocks of code which can be used with different types.
export function whatsMyType<T>(param:T):T{
    return  param;
}
//Si te pones encima de cada uno veras que amIString es de tipo string y stringSinT es de tipo String
//pero amIString devuelve directamente "I am a string" y stringSinT devuelve un objeto de tipo String
//porque le hemos indicado que es de tipo String
//Si no lo indicamos, el compilador lo infiere a partir del valor que le pasamos

//ademas si pasamos otro tipo de datos en el primero no te dará error
//pero en segundo si porque le hemos indicado que es de tipo String
const amIString=whatsMyType("I am a string");
const stringSinT=whatsMyType<String>("Soy un string");

console.log(typeof(stringSinT),typeof(amIString)); 