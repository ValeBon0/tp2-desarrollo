import React from 'react';

function OpcionesAvanzadas({ mostrarAvanzadas, largo, cambiarLargo, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirEspeciales, alternarMinusculas, alternarMayusculas, alternarNumeros, alternarEspeciales }) {
  return (
    mostrarAvanzadas && (
      <div className="opciones-avanzadas">
        <label>
          Largo de la contraseña:
          <input 
            type="number" 
            value={largo} 
            onChange={(e) => cambiarLargo(e.target.value)} 
            min="1" 
          />
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={incluirMinusculas} 
            onChange={alternarMinusculas} 
          /> Incluir letras minúsculas
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={incluirMayusculas} 
            onChange={alternarMayusculas} 
          /> Incluir letras mayúsculas
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={incluirNumeros} 
            onChange={alternarNumeros} 
          /> Incluir números
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={incluirEspeciales} 
            onChange={alternarEspeciales} 
          /> Incluir caracteres especiales
        </label>
      </div>
    )
  );
}

export default OpcionesAvanzadas;
