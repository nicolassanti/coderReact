import './main.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import CategoryListContainer from '../categoryListContainer/CategoryListContainer'
import {Row,Col} from 'react-bootstrap'


function Main() {

  return (
    <>
    <Col className="justify-content-md-center">
      <Row>   
        <Col>
          <CategoryListContainer className='mt-4'/>
        </Col>
      </Row>
      <Row >
        <ItemListContainer/>
      </Row>
    </Col>
    </>
  )
}

export default Main