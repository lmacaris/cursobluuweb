import React from 'react'
import Frutas from './components/Frutas';
import Contador from './components/Contador';

const App = () => {
  const titulo = "Mi primera APP";
  const colores = {
      primary: "text-primary",
      info: "text-info",
      danger: "text-danger",
  }

  const user = false;

  const frutas = ["🍏", "🍓", "🍌"]

  const SaludoBienvenida = () => {

    return (<h2 className="text-success">Bienvenido</h2>)

  } 

  const SaludoDespedida = () => {
    return (<h2 className="text-danger">Adiooooooos!</h2>)
  }


  

  const funcionClick = (nombre) => {
    console.log(`click ${nombre}`)
  }
  return (
      <div className="container">
        

        <h1 className={colores.primary}>{titulo}</h1>

        <Contador/>
        
          {
            user ? <SaludoBienvenida/> : <SaludoDespedida/>
          }

         <Frutas frutasApp={frutas}/>

          <button className="btn btn-primary" onClick= {() => funcionClick("laladiosa")}>Dame click por favor</button>
      </div>
  );
};

export default App;