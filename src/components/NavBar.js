import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Row } from 'react-bootstrap';
const NavBar =({filterbySearch})=>{
  const [searchValue,setSearchValue]=useState("")
  const onSearch=(e)=>{
    filterbySearch(searchValue)
    setSearchValue('')
    e.preventDefault()
  }
    return (
      <Row>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#" >
                <div className="nav" >Restaurant</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100%' }}
              navbarScroll> 
              </Nav>
              <Form className="d-flex">
                <Form.Control 
                  type="text"
                  placeholder="Search"
                  className="me-2"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <button onClick={onSearch} className="bnt">Search</button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Row>  
      );
}
export default NavBar;