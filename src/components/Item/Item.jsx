import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import './item.css'



function Item({prod}) {

  return (
    <>
    <Card className='w-25 m-1 h-auto d-flex flex-row cardFont'>
      <section>
      <Card.Img className='w-75 m-4' variant="top" src={prod.image} />
      </section>
      
      <Card.Body style={{ width: '34rem' }}>
        <Card.Title><Link to={`/item/${prod.id}`}>{prod.title}</Link></Card.Title>
        <Card.Text >
          {prod.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item