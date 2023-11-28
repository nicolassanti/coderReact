import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error/Error404'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
 
  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:prodId" element={<ItemDetailContainer/>}/>
          <Route path="/item/detail/:prodId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
