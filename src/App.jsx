//React Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

//Pages
import Decifrador from './Pages/Home/Decifrador'
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
        <Route path = "/lista" element = {<Lista />} />
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
