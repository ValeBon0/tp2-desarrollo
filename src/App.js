import React, { useState } from 'react';
import './App.css';
import EntradaContraseña from './EntradaContraseña';
import FortalezaContraseña from './FortalezaContraseña';
import OpcionesAvanzadas from './OpcionesAvanzadas';

function App() {
  const [contraseña, setContraseña] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [fortalezaMensaje, setFortalezaMensaje] = useState('');
  const [fortalezaClase, setFortalezaClase] = useState('');
  const [mostrarAvanzadas, setMostrarAvanzadas] = useState(false);
  const [largo, setLargo] = useState(8);
  const [incluirMinusculas, setIncluirMinusculas] = useState(true);
  const [incluirMayusculas, setIncluirMayusculas] = useState(true);
  const [incluirNumeros, setIncluirNumeros] = useState(true);
  const [incluirEspeciales, setIncluirEspeciales] = useState(true);
  const [mensajeCopiado, setMensajeCopiado] = useState('');

  const manejarCambioContraseña = (e) => {
    const nuevaContraseña = e.target.value;
    setContraseña(nuevaContraseña);
    clasificarFortalezaContraseña(nuevaContraseña);
  };

  const alternarMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  const clasificarFortalezaContraseña = (contraseña) => {
    if (contraseña.length < 6) {
      setFortalezaMensaje('Poco segura');
      setFortalezaClase('débil');
    } else if (contraseña.length >= 6 && /[A-Z]/.test(contraseña) && /[0-9]/.test(contraseña) && /[\W]/.test(contraseña)) {
      setFortalezaMensaje('Muy segura');
      setFortalezaClase('fuerte');
    } else if (contraseña.length >= 6) {
      setFortalezaMensaje('Segura');
      setFortalezaClase('media');
    } else {
      setFortalezaMensaje('');
      setFortalezaClase('');
    }
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(contraseña);
    setMensajeCopiado('¡Contraseña copiada al portapapeles!');
    setTimeout(() => {
      setMensajeCopiado('');
    }, 3000);
  };

  const alternarMostrarAvanzadas = () => {
    setMostrarAvanzadas(!mostrarAvanzadas);
  };

  const generarContraseñaAleatoria = () => {
    let caracteres = '';
    if (incluirMinusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (incluirMayusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (incluirNumeros) caracteres += '0123456789';
    if (incluirEspeciales) caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';

    let nuevaContraseña = '';
    for (let i = 0; i < largo; i++) {
      nuevaContraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setContraseña(nuevaContraseña);
    clasificarFortalezaContraseña(nuevaContraseña);
  };

  return (
    <div className="container">
      <h1 className="title">Fortaleza de Contraseñas</h1>

      <EntradaContraseña
        contraseña={contraseña}
        mostrarContraseña={mostrarContraseña}
        manejarCambioContraseña={manejarCambioContraseña}
        alternarMostrarContraseña={alternarMostrarContraseña}
        copiarAlPortapapeles={copiarAlPortapapeles}
      />

      <FortalezaContraseña
        contraseña={contraseña}
        fortalezaClase={fortalezaClase}
        fortalezaMensaje={fortalezaMensaje}
      />

      <button onClick={generarContraseñaAleatoria}>Generar contraseña aleatoria</button>

      <button onClick={alternarMostrarAvanzadas}>
        {mostrarAvanzadas ? 'Ocultar opciones avanzadas' : 'Mostrar opciones avanzadas'}
      </button>

      <OpcionesAvanzadas
        mostrarAvanzadas={mostrarAvanzadas}
        largo={largo}
        cambiarLargo={setLargo}
        incluirMinusculas={incluirMinusculas}
        incluirMayusculas={incluirMayusculas}
        incluirNumeros={incluirNumeros}
        incluirEspeciales={incluirEspeciales}
        alternarMinusculas={() => setIncluirMinusculas(!incluirMinusculas)}
        alternarMayusculas={() => setIncluirMayusculas(!incluirMayusculas)}
        alternarNumeros={() => setIncluirNumeros(!incluirNumeros)}
        alternarEspeciales={() => setIncluirEspeciales(!incluirEspeciales)}
      />

      {mensajeCopiado && <p className="mensaje-copiado">{mensajeCopiado}</p>}
    </div>
  );
}

export default App;














