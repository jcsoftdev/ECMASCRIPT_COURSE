const obj = {
    name: 'Juan Carlos',
    age: 19,
    country: 'PE'
}
let {name, ...all} = obj;
console.log(name, all);

// unidades de propagacion
const obj1 = {
     name: 'Juan Carlos',
     age: 19
}
const obj2 = {
    ...obj1,
    country: 'PE'
}
console.log(obj2);

// finally en promesas

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('hello World'), 3000)
        :reject(new Error('Error'))
    })
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('La promesa ha finalizado'))
// regex 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// haciendo match 
let match = regexData.exec('2020-02-01');
if (!new RegExp(regexData).test('2020-02-01')) {
    console.log('invalid');
}
console.log(match);
// match al primer grupo
const year = match[1]
// match al Segundo grupo
const month = match[2]
// match al Tercer grupo
const day = match[3]
console.log(year, month, day);

