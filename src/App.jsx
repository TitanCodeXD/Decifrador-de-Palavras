//React Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

//Pages
import Decifrador from './Pages/Home/Decifrador'
import DecifradorAlimentos from './Pages/Alimentos/DecifradorAlimentos'
import DecifradorAnimais from './Pages/Animais/DecifradorAnimais'
import DecifradorObjetos from './Pages/Objetos/DecifradorObjetos'
import DecifradorVerbos from './Pages/Verbos/DecifradorVerbos'
import Lista from './Pages/Sobre/Lista'
import About from './Pages/About/About'

//CSS
import './App.css'

function App() {

  return (
    <>
      <div>

        <BrowserRouter>
        <Navbar />

        <div className="container">
        <Routes>

        <Route path = "/" element = {<Decifrador />}/>
        <Route path = "/alimentos" element = {<DecifradorAlimentos />}/>
        <Route path = "/animais" element = {<DecifradorAnimais />}/>
        <Route path = "/objetos" element = {<DecifradorObjetos />}/>
        <Route path = "/verbos" element = {<DecifradorVerbos />}/>
        {/*<Route path = "/lista" element = {<Lista />} />*/}
        <Route path = "/sobre" element = {<About />} />

        </Routes>
        </div>

        <Footer />
        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
