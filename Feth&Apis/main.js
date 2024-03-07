const posts = [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];


// Callback: Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
// Cada vez se usan menos.

// const findPostById = (id, callback) => {

//     const post = posts.find(item => item.id === id)
//     if (post) {
//         callback(null, post);
//     } else {

//         //error
//         callback("Post ID not found " + id)
//     }

//     callback(post);

// }

// findPostById(1, (err, post) => {
//     if (err) return console.log(err);
//     console.log(post);

//     findPostById(2, (err, post) => {
//         if (err) return console.log(err);
//         console.log(post);

//         findPostById(3, (err, post) => {
//             if (err) return console.log(err);   
//             console.log(post)
//         })
//     })

// });




//////***********************promesas ************/

// Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso de una operación asíncrona.


// const findPostById = (id) => {


//     const post = posts.find(item => item.id === id)

//     return new Promise((resolve, reject) => {

//         post ? resolve(post) : reject("no se encontro id " + id)
//     })
// }

//** otra coption puede ser  */

const findPostById = id => new Promise((resolve, reject) => {

    setTimeout(() => {
        const post = posts.find(item => item.id === id)

        post ? resolve(post) : reject("no se encontro id " + id)

    }, 2000);

})

// findPostById(4)
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e))
// console.log("esto se tendria que ejecutarse al final")

//******************** async & await  ************************/

// async: La declaración de función async define una función asíncrona, la cual devuelve una AsyncFunction.
// await: El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una función async function.


// const buscar = async(id) => {

//     ejemplo de uso seeria en un loading
//     let loading = true  ---------- y luego en el finally podemos cambiarlo a false.

//     try {
//         const post = await findPostById(id)
//         console.log(post)

//     } catch (err) {
//         console.log(err)
//     } finally {
//         console.log('se ejecuta si o si')
//     }
// }

const buscar = async(id) => {

    //** REGLA DEL ASYNC & AWAIT ---- siempre el await va a esperar una promesa ---- sin async el await no va a funcionar en js vainilla */

    //ejemplo para usar mas de un await
    //usar promiseall sino esperara los dos segundos por cada await. ( en este caso 4 segundos en total )

    try {


        // const postUno = await findPostById(1);
        // en el caso que el await uno no dependa del segundo puede ser valido su uso.


        // const postDos = await findPostById(2);
        // console.log(postUno.tittle, postDos.tittle)

        //*** ejemplo promise.all */ 


        const resPosts = await Promise.all([
            findPostById(1),
            findPostById(2)
        ])

        console.log(resPosts[0].title, resPosts[1].tittle);


    } catch (err) {
        console.log(err)
    } finally {
        console.log('se ejecuta si o si')
    }
}

buscar()
    // console.log("esto se tendria que ejecutarse al final")