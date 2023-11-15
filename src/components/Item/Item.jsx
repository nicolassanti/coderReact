import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Item({prod}) {

  return (
    <>
       <Card className='w-25 m-2'>
      <Card.Img className='w-50 m-auto' variant="top" src={prod.image} />
      <Card.Body>
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