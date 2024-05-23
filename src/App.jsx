import './App.css'
import { Navdar } from './components/Navdar'
import { Routes, Route } from 'react-router'
import {Home} from './views/Home.jsx'
import { Contacto } from './views/Contacto.jsx'

function App() {

  return (
    <>
    <Navdar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='contacto' element={<Contacto/>} />
    </Routes>
    </>
  )
}

export default App
