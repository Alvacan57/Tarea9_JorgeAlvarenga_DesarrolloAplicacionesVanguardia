import React from "react";


export const Inicio = () => {
  return (
    <div className='inicioFlexContainer'>
        <h3>DICCIONARIO</h3>
        <img src="palabras.png" alt="Palabras" style={{width:350, height:250, borderRadius: 100}} />
        <span style={{fontSize: 18, fontWeight:'bold'}}>Aplicacion web</span>
        <span>Desarrollo de Aplicacion de Vanguardia</span>
        <span>CEUTEC, 2022</span>
    </div>
  )
}