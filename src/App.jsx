import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error/Error404'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
 
  return (

    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/item/:prodId" element={<ItemDetailContainer/>}/>
          <Route path="/item/detail/:prodId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
