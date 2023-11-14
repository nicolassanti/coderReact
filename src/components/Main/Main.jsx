import './main.css'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import CategoryListContainer from './categoryListContainer/CategoryListContainer'
import {Row,Col} from 'react-bootstrap'


function Main() {

  return (
    <>
    <Row className="justify-content-md-center">
      <Col xs lg="8">   
          <CategoryListContainer className='mt-4'/>
      </Col>
      <Col md="auto">
        <ItemListContainer/>
      </Col>
    </Row>
    </>
  )
}

export default Main