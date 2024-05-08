import React from 'react';
import Reloj from './componentes/Reloj';
import estilos from './componentes/estilo1.module.css';


function App() {
  return (
    <div className={estilos.cuadro}>
      <div>
        <h1 className={estilos.titulo}>Reloj en Tiempo Real</h1>

        <div className={estilos.reloj}> <Reloj />
        </div> 
      </div>
    </div>
  );
}

export default App;
