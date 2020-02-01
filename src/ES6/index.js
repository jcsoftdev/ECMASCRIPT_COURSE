














function newFunction(name, age, country){
    var name = name || 'Juan Carlos'
    var age = age || 32
    var country = country || 'PE'
    console.log(name, age, country);
    return true
    
}
var algo = new Date().getFullYear();

// es6
function newFunction2(name = 'oscar', age = 32, country = 'PE') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Andres', 18, 'CO');

// template literals 
let hello = "hello"
let world = 'world'

let epicPhrase = `${hello} ${world} este es un string`

// para hacer enter es de la misma con template literals 
let lorem = "lorem klhcawd;oi cswipohjcas/i jcas inxasilo\n" + "otra frase epica que necesitamos";
// es6 
let lorem2 = `frase epica
ahora es otra frase epica`

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Juan Carlos',
    'age': 32,
    'country': 'MX'
}

let { name, age, country} = person
console.log(name, age, country);

let team1 = ['oscar', 'jualian', 'ricardo']
let team2 = ['jessica', 'andrea', 'rosa']

let education = ['David', ...team1, ...team2]
console.log(education);


// variables 
// let solo está enb el scopre osea el bloque donde está signadoo
{
    var globalVar = 'Globar var' 
}
{
    let globalLet = 'Global Let'
    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet);

const a = 'b';



let name = 'Oscar';
let age = 32;
// es5
obj = {name: name, age: age}
// es6
obj2 = {
    name, age
}
console.log(obj2);


// Arrow function 

const names = [
    {name: 'Juan carlos', age: 19},
    {name: 'jessica', age: 23}
]
let listOfNames = names.map(function (item){
    console.log(item.name);
})
listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country)=>{
    // code 
}
const listOfNames4 = name => {
    // code 
}
const square = num => num*num;

// Promesas 
const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Hey!!!')
        }else{
            reject('Ups!!!')
        }
    })
}
helloPromise().then(response => console.log(response))
.catch(error => console.error(error)
)
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(3,5));

import { hello } from './module';
hello();

// generator: retorna ciertos valores egun el algoritmo

function* helloWorld(){
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World, '
    }
}
const generatorHeloo = helloWorld();
console.log(generatorHeloo.next().value);