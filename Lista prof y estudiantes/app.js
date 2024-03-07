const formulario = document.querySelector('#formulario');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
const templateEstudiante = document.querySelector('#templateEstudiante').content;
const templateProfesor = document.querySelector('#templateProfesor').content;


formulario.addEventListener('submit', e => {
    e.preventDefault();

    const datos = new FormData(formulario)
    const [nombre, edad, opcion] = [...datos.values()]
    console.log(nombre, edad, opcion)


});


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }
}


class Estudiante extends Persona {
    estado = false;

}


class Produto extends Persona {

}