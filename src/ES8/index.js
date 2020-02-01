// Object.entries 
const data = {
    frontend: 'Juan',
    backend: 'Carlos',
    design: 'Ruth',
}
const entries = Object.entries(data)
const key = Object.keys(data)
const values = Object.values(data)
console.log(entries)
console.log(key)
console.log(values);
    // obtener ancho 
    console.log(values.length);

// => padEnd and padStart : permiten ingresar texto en un texto ya sea al inicio o al final pero definiendo el ancho que deseas que tenga tu string
//=> ojo: el string original no se corta nunca, solo el string que le pasas para el completa. Eso en el caso de que el numero que especificas es menor al que tu pasate 
const string = ' campeon '
console.log(string.padStart(20, 'Juan Carlos'));
console.log(string.padEnd(16, 'eres tu')); 

//=> async await
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
        ? setTimeout(()=> resolve('Hello Juan Carlos'), 3000)
        : reject(new Error('Test Error'))
    });
}
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync()

// asi se ejecuta correctamente una promesa 
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction()