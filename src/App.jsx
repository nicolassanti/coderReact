import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  const enlaces=['Inicio', 'Nosotros', 'Contacto']

  return (

    <>
      <Navbar enlaces={enlaces}></Navbar>
      <Footer/>
    </>
  )
}

export default App
