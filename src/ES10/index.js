// flat => es algo asi como pasar a texto plano un array 
let array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(2));
/**
  retorna: [
        1, 2, 3, 1, 2,
        3, 1, 2, 3
   ]
   la profundiad es de dos arrays dentro
 **/
let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]));


let helloStart = '                 helloStart world'
console.log(helloStart);
console.log(helloStart.trimStart());

let helloEnd = 'HelloEnd World                '
console.log(helloEnd);
console.log(helloEnd.trimStart);

// optional catch binding

try {
    const Error = new Error('Error')
} catch(error) {
    console.log(error);
}
// de entries a objetos
let entries = [["name", "oscar"],["age", 32]]
console.log(Object.fromEntries(entries));

// objeto de tip[o simbolo 
let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol);
console.log(symbol.description);