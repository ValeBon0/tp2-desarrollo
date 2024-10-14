import React from 'react';

function FortalezaContraseña({ contraseña, fortalezaClase, fortalezaMensaje }) {
  return (
    contraseña && (
      <p className={`fortaleza-contraseña ${fortalezaClase}`}>
        Fortaleza: {fortalezaMensaje}
      </p>
    )
  );
}

export default FortalezaContraseña;
