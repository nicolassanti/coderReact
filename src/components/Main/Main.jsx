import './main.css'
import ItemLisContainer from './ItemListContainer/ItemListContainer'
import CategoryListContainer from './categoryListContainer/CategoryListContainer'
import {Container,Row,Col} from 'react-bootstrap'


function Main() {

  return (
    <Container >
    <Row className='p-2 bg-primary' >
        <ul className='mainUl'>
          <CategoryListContainer/>
        </ul>
    </Row>
    <Row>
    <ItemLisContainer className='p-4 bg-secondary' />
    </Row>

    </Container>
  )
}

export default Main