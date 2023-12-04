import './iniciosesion.css';
import {NavLink} from "react-router-dom"
import { useState } from 'react';

function iniciosesion(setUser) {
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

      setUser ([correo])
  }

  return (
    <>
      <body>
        <header>
          <img alt="Buho" src="/src/Img/Logo.png" />
          <h1>Bienvenidos a Instinto Académico de ayuda estudiantil</h1>
          <div>
          <NavLink to="/registro" className="enlace-registro">Regístrate</NavLink>
          </div>
        </header>

        <div>
          <h1>Iniciar Sesión</h1>
        </div>

        <form className="formulario"
        onSubmit={handleSubmit}
        >
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
          <NavLink to="/opciones"><button>Iniciar sesión</button></NavLink>

          

        </form>

        {error && <p>Todos los campos son obligatorios</p>}

          <div className="nocuenta">
          <NavLink to="/registro" ><button type="button">Todavía no tienes cuenta? Regístrate</button></NavLink>
          </div>
       
          <div className="image">
          <img alt="image4" src="/src/Img/image 4.png" />
          </div>
        
      </body>
    </>
  );
}


export default iniciosesion;
