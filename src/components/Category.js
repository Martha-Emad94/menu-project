import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Roll from 'react-reveal/Roll';
const Category =({filterbyCategory,allcategory})=>{
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return(
        <Row>
            <Roll>
                <Col sm="12" className=" d-flex justify-content-center">
                    {
                        allcategory.length>=1?(allcategory.map((cat)=>{
                            return(
                            <div>
                        <button onClick={()=>onFilter(cat)}className=" bnt1 mx-2">{cat}</button>
                            </div>
                            )})):null
                    }
                </Col>
            </Roll>
        </Row>
    )
}
export default Category;