import React from 'react';

function EntradaContraseña({ contraseña, mostrarContraseña, manejarCambioContraseña, alternarMostrarContraseña, copiarAlPortapapeles }) {
  return (
    <div>
      <input
        type={mostrarContraseña ? 'text' : 'password'}
        value={contraseña}
        onChange={manejarCambioContraseña}
        placeholder="Ingresa una contraseña"
      />
      <button onClick={alternarMostrarContraseña}>
        {mostrarContraseña ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      </button>
      <button onClick={copiarAlPortapapeles}>Copiar contraseña</button>
    </div>
  );
}

export default EntradaContraseña;
