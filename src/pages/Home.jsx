import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {

  const persona ={
    nombre: "Pablo",
    apellido: "Dominguez",
    edad: "25",
    email: "pablodominguez@gmail.com",
    descripcion: "Desarrollador web full stack y estudiante de programacion de la FRT, tengo conocimiento en React, Node.js y MongoDB. Me gusta aprender nuevas tecnologías y mejorar mis habilidades.",
    }

  return (
    <>
        <Header persona={persona}/>
        <Main persona={persona}/>
        <Footer/>
    </>
  )
}

export default Home