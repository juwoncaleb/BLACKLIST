import React, { Component } from 'react'
import   "./style.css";
import logo from "../../img/logo.svg";

import { Navbar, Container, Nav, NavDropdown , Form ,FormControl, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavCtn =()=> {
    return(
       
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <Navbar.Brand href="#"  className="logo"> <img src={logo}/></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navbar "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                       
                       
                        <Nav.Link href="#action1" className="navlink navigation" >Home</Nav.Link>
                        <Nav.Link href="#action1" className="navlink navigation" >Home</Nav.Link>

                        
                        <NavDropdown className="navlink navigation" title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1" className="navlink navigation" >Home</Nav.Link>
                        <Nav.Link href="#action1" className="navlink navigation" >Home</Nav.Link>

                        

                       
                    </Nav>
                    <Form className="d-flex">
                       
                        <Button variant="outline-success">Create Account</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
   
       )
    
        
    
   
}
export default NavCtn

