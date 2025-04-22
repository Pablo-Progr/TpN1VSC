import React from 'react'
import '../css/Header.css'

const Header = (props) => {

  return (
    <div>
      <div className='containerHeader'>
        <h1>Portfolio de {props.persona.nombre} {props.persona.apellido}</h1>
      </div>

      <hr />
    </div>
    
  )
}

export default Header