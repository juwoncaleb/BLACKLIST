import React from 'react'
import logo from "../../img/logo.svg";

import { Col, Container, Row, Button, Form } from 'react-bootstrap';

import ComponentCtn from '../../component'

function SignUp() {
    return (
        <div>
            <ComponentCtn />
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <div className="login_1">
                            <img src={logo} alt="logo" />

                            <p className="login_1_text">Alternative database of chronic defaulters <br /> & AI-powered
                                debt recovery. </p>
                            <Button className="button1" variant="outline-danger">Learn more</Button>
                        </div>
                    </Col>



                    <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <div className="text">
                            <p>Hello! </p>
                            <p>Sign Up to get started</p>
                        </div>
                        <Form className="mt-5 forml" >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default SignUp
