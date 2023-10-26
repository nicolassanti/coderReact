import './main.css'
import ItemLisContainer from './ItemListContainer/ItemListContainer'

function Main() {
let saludo="Bienvenidos a esta hermosa tienda!"

  return (
    <main className='main'>
    <ItemLisContainer greeting={saludo}/>
        <ul className='mainUl'>
            <li className='mainUlLi'><a href='/Mates'>Mates</a></li>
            <li className='mainUlLi'><a href='/Termos'>Termos</a></li>
            <li className='mainUlLi'><a href='/Bombillas'>Bombillas</a></li>
            <li className='mainUlLi'><a href='/Accesorios'>Accesorios</a></li>
        </ul>


    </main>

  )
}

export default Main