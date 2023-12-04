import './registro.css'
import {NavLink} from "react-router-dom"
import { useState } from 'react';

function registro() {

  const [nombre,setNombre] = useState ("")
  const [Apellido,setApellido] = useState ("")
  const [correo,setCorreo] = useState ("")
  const [contraseña, setContraseña] = useState ("")
  const [error, setError] = useState (false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(correo == "" || contraseña == ""){
        setError(true)
        return
      }

      setError(false)

      setUser ([nombre])
      setUser ([Apellido])
      setUser ([correo])
      setUser ([contraseña])
  }

  return (
    <div>
      <header>
        <img alt="Buho" src="src/Img/Logo.png" />
        <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
        <div>
        <NavLink to="/iniciosesion" className="enlace-iniciosesion">Iniciar Sesión</NavLink>
        </div>
      </header>

      <form className="formulario"
        onSubmit={handleSubmit}
        >
          <label htmlFor="nombre">Nombre:</label>
          <input 
          type="text"
          value={nombre}  
          onChange={e => setNombre (e.target.value)}
          />
          <label htmlFor="apellido">Apellido:</label>
          <input 
          type="text"
          value={Apellido}  
          onChange={e => setApellido (e.target.value)}
          />
          <label htmlFor="correo">Correo:</label>
          <input 
          type="text"
          value={correo}  
          onChange={e => setCorreo (e.target.value)}
          />
          <label htmlFor="contraseña">Contraseña:</label>
          <input 
          type="password"
          value={contraseña}  
          onChange={e => setContraseña (e.target.value)}
          />
          <label htmlFor="confirmarcontraseña">Confirmar Contraseña:</label>
          <input 
          type="password"
          value={contraseña}  
          onChange={e => setContraseña (e.target.value)}
          />
          <NavLink to="/iniciosesion"><button>Regístrate</button></NavLink>

          

        </form>

      <div>
        <img alt="inicio_sesion" src="src/Img/Inicio_sesion.jpeg" />
      </div>
    </div>
  );
}

export default registro;
