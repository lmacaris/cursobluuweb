// funcion constructora = plantilla class

// function Persona(nombre) {


//     this.nombre = nombre;

//     this.saludar = function() {
//         return `${this.nombre} dice hola`
//     }

// }


// --------- *3 Prototipos --------------------------------
//Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.
// Persona.prototype.saludarIngles = function() {
//     return `${this.nombre} says hi!`
// };

// --*1 ejemplo de instancia ( new )

// const juanito = new Persona("juanito");  --* 2aca se crea el objeto a partir de la plantilla
// const pedrito = new Persona("pedrito");
// console.log(juanito)
// console.log(juanito.saludar())
// console.log(pedrito)
// console.log(pedrito.saludarIngles())


// ------- *4  Class ( sugar sintax  o mejora sintaxica que realiza lo mismo que una funcion constructora ( cadena de prototypos ) con alguns diferencias)   --------


class Persona {

    constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;

            // Alunos prefieren está convención
            // para que no choque con los getter
            // o para definir una propiedad privada (no queda privada)
            // this._nombre = nombre 

            //los metodos 
        }
        // ---- *5 GETTERS Y SETTERS -------
    get getNombre() {
        return this.nombre //*5
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `${this.nombre} dice holis`
            // Método pero se crea un prototype
    }

    // ---- *6 Static ------

    static probarSaludo(nombre) {
        return `${nombre} probando saludo`
    }

}

class Estudiante extends Persona {

    constructor(nombre, edad, notas = []) {
        super(nombre, edad) // utilizamos super para agregar propiedades y seguir usando las del padre (solo agregamos las que queremos seguir usando)
        this.notas = notas;
    }

    set setNotas(nota) {
        this.notas.push(nota)
    }

    get getNotas() {
        return this.notas;
    }

    saludar() {
        return `${this.nombre} dice holis desde estudiante` // esto soobres escribe al metodo de la clase padre. - ejemplo de polymorfismo
    }
}

console.log(Persona.probarSaludo("Nacho"))


Persona.prototype.saludarIngles = function() { // no es necesario realizaar esto dado que class crea un Método pero se crea un prototype.
    return `${this.nombre} says hi!`;
};

const juanito = new Estudiante("juanito", 25);

juanito.setNotas = 6
juanito.setNotas = 5
juanito.setNotas = 1

console.log(juanito.getNotas)
console.log(juanito)
    // juanito.setNombre = "perdrito"
    // console.log(juanito.getNombre)
    // console.log(juanito.saludar())
    // console.log(juanito.saludarIngles())

//-- en resumen funciona de la misma forma pero mucho mas practica y legible.