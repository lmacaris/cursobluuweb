export const chili = "🌶️";

export function pintarChili() {
    console.log("🌶️");
}


export const frutilla = () => {
    console.log("🍓")
}

export class Fruta {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//--- tambien podriamos usar el export y agrupar todo lo que queremos exportar ejemplo:



//  export {chili, pintarChili, frutilla, Fruta }; y funcionaria exactamente igual ( recomendado usar asi )