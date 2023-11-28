import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import './item.css'



function Item({prod}) {

  return (
    <>
    <Card className=' w-25 m-1 h-auto d-flex flex-row'>
      <section>
      <Card.Img className='w-50' variant="top" src={prod.image} />
      <Contador className="" inicial={1} stock={prod.qty}/>
      </section>
      
      
      <Card.Body className='w-50'>
        <Card.Title><Link to={`/item/${prod.id}`}>{prod.title}</Link></Card.Title>
        <Card.Text >
          {prod.description}
        </Card.Text>
            <div><strong>Precio: </strong> ${prod.price}</div>
            <div><strong>Stock: </strong> {prod.qty}</div>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default Item