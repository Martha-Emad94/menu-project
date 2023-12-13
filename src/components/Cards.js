import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
const Cards =({props})=>{
    return(
        <Row>
            <Zoom>
                <div>
                
                    {
                    props.length >=1 ?(props.map((item)=>{
                        return(
                        <Col key={item.id} sm="12" className="mb-3 mx-3">
                    <Card className="d-flex flex-row">
                        <img className="img-item" variant="top" src={item.img}/>
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between">
                            <div className="card-title">{item.title}</div>
                            <div className="card-price">{item.price}</div>
                            </Card.Title>
                            <Card.Text>
                                <div className="card-descripition">{item.descripition}</div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)})) : null}
            </div>
        </Zoom>
    </Row>
    )
}
export default Cards;