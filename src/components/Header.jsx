import React from 'react'

const Header = (props) => {

  return (
    <div>
        <h1>Portfolio {props.persona.apellido}</h1>
        <hr />
    </div>
  )
}

export default Header