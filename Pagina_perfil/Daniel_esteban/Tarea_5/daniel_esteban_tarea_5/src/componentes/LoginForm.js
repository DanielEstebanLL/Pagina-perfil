import React, { useState } from 'react';
import estiloF from './estilosF.module.css';



function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de nombre de usuario y contraseña
    if (usuario.trim() === '' || contrasena.trim() === '') {
      setError('Por favor, completa todos los campos.');
      return;
    }
    // Lógica de autenticación (simulada)
    if (usuario === 'usuario' && contrasena === 'contraseña') {
      setError('');
      alert('Inicio de sesión exitoso!');
    } else {
      setError('Nombre de usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={estiloF.titulo}>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className={estiloF.espacio1}>
        <label> Usuario:         </label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div className={estiloF.espacio2}>
        <label>Contraseña:    </label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button className={estiloF.boton} type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginForm;