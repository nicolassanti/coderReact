import './main.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CategoryListContainer from '../categoryListContainer/CategoryListContainer'
import {Row,Col} from 'react-bootstrap'


function Main() {

  return (
    <>
    <Col className="justify-content-md-center">
      <Row>   
        <Col className='d-flex justify-content-center'>
          <CategoryListContainer className='mt-4'/>
        </Col>
      </Row>
      <Row className='d-flex justify-content-evenly'>
        <ItemListContainer/>
      </Row>
    </Col>
    </>
  )
}

export default Main