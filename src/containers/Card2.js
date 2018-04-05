import React, {Component} from 'react'
import {Row,Col,Card} from 'react-materialize'
class Card2 extends Component {

  render(){
    return(
      <Row>
        <Col m={6} s={12}>
            <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
            I am a very simple card.
            </Card>
        </Col>
      </Row>
    )
  }
}

export default Card2
