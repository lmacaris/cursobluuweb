// ----------- map crea un nuevo array sin modificar el original -----------------------------------------------------------
const frutas = ["🍌", "🍏", "🍓"];



const nuevoArray = frutas.map((fruta) => fruta);
console.log(nuevoArray);

// -------------- filter ------------------------------------------------

const users = [
    { aud: 1, name: 'John', age: 34 },
    { aud: 2, name: 'Amy', age: 40 },
    { aud: 3, name: 'camperCat', age: 10 },
];

const mayores = users.filter((user) => user.age > 30);

console.log(mayores);

//----------- find --------------------

const amy = users.find((user) => user.aud === 2);

console.log(amy)