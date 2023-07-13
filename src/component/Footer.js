import React from 'react'
import{ Row,Col} from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <Row>
            <Col className='text-center py-1'>
                <i class="fa fa-copyright" aria-hidden="true">copyright &copy;storeapp</i>
            </Col>
        </Row>
    </div>
  )
}

export default Footer