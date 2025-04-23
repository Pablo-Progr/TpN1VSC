import React from 'react'
import '../css/Main.css'
import img from '../img/yo.jpg'

const Main = (props) => {

  return (
    <>
      <div className='backgroundMain'>
        <div className='card'>

          <div className='containerFoto'>
            <img className='fotoCard' src={img} alt="" />
          </div>

          <div className='containerInfo'>
              <h2>Sobre Mi</h2>
              <br />
              <h3>{props.persona.descripcion}</h3>
              <br />
              <h3>Edad: {props.persona.edad}</h3>
              <br />
              <h3>Mail: {props.persona.email}</h3>
          </div>
        </div>

        <button>Mis proyectos</button>
      </div>

    </>
  )
}

export default Main