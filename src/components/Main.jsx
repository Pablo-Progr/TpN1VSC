import React from 'react'
import '../css/Main.css'
import img from '../img/yo.jpg'

const Main = (props) => {

  return (
    <>
       <div className='backgroundMain'>
        <div className='card'>
          <div>
            <img className='fotoCard' src={img} alt="" />
          </div>
          <div>
            <h2>Nombre: {props.persona.nombre} {props.persona.apellido}</h2>
            <h2>Edad: {props.persona.edad}</h2>
            <h2>Mail: {props.persona.email}</h2>
            <h2>Descripcion: {props.persona.descripcion}</h2>
          </div>
        </div>
      </div> 
        
    </>
  )
}

export default Main