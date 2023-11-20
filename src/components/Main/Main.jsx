import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CategoryListContainer from '../categoryListContainer/CategoryListContainer'
import {Row,Col} from 'react-bootstrap'
import './main.css'


function Main() {

  return (
    <>
    <Col className="justify-content-md-center h-75">
      <Row >   
        <Col className='d-flex justify-content-center'>
          <CategoryListContainer/>
        </Col>
      </Row>
      <Row className='d-flex justify-content-evenly flex-wrap'>
        <ItemListContainer/>
      </Row>
    </Col>
    </>
  )
}

export default Main