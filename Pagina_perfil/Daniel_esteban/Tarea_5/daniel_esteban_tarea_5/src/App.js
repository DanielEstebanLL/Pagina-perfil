import React from 'react';
import LoginForm from './componentes/LoginForm';
import estiloF from './componentes/estilosF.module.css';

function App() {
  return (
    <div className={estiloF.cuadro}>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
