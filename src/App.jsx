import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/pages/inicio/Inicio'
import Productos from './components/pages/productos/Productos'
import Contacto from './components/pages/contacto/Contacto'
import Nosotros from './components/pages/nosotros/Nosotros'

function App() {

  return (
    <div className='app-container'>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/nosotros' element={<Nosotros/>} />

    </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App
