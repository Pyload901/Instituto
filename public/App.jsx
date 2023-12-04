import './App.css'
import InicioSesion from './components/iniciosesion'
import Registro from './components/registro'
import Opciones from './components/opciones'
import Ventas from './components/Ventas'
import Consultas from './components/Consultas'
import Compraprodu from './components/Compraprodu'
import Materias from './components/Materia'
import CerrarSesion from './components/cerrasesion'
import Guardados from './components/guardados'
import Comprar from './components/Comprar'
import Tareas from './components/Tareas'
import PublicarTar from './components/PublicarTar'
import Subir from './components/subir' 
import Publicarlo from './components/publicarlo'
import Push from './components/Push'
import PublicarProducto from './components/PublicarProducto'

import { useState } from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'


function App() {

  const [user,setUser] = useState ([])


  return (
    <Routes>
      <Route path='/' element={<InicioSesion />}/> 
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/opciones' element={<Opciones/>}/>
      <Route path='/Ventas' element={<Ventas/>}/>
      <Route path='/Consultas' element={<Consultas/>}/>
      <Route path='/Compraprodu' element={<Compraprodu/>}/>
      <Route path='/Materia' element={<Materias/>}/>
      <Route path='/cerrarsesion' element={<CerrarSesion/>}/>
      <Route path='/guardados' element={<Guardados/>}/>
      <Route path='/Comprar' element={<Comprar/>}/>
      <Route path='/Tareas' element={<Tareas/>}/>
      <Route path='/Publicarlo' element={<Publicarlo/>}/>
      <Route path='/subir' element={<Subir/>}/>
      <Route path='/PublicarTar' element={<PublicarTar/>}/>
      <Route path='/PublicarProducto' element={<PublicarProducto/>}/>
      <Route path='/Push' element={<Push/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
