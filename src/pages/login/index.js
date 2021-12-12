import React from 'react'
import './style.css'
import logo from "../../img/logo.svg";
import ComponentCtn from '../../component'


import { Container, Col, Row, Button } from 'react-bootstrap';



function Login() {
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

                    <Col className="login" xxl={6} xl={6} lg={6} md={6} sm={12}>
                        <div className="login_text">
                            <h2>Hello Again!</h2>
                            <p className="text">Welcome Back</p>
                        </div>
                        <form className="form d-grid gap-2">
                            <div className="form-group">
                                <input type="email" className="form-control input" id="inputEmail" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control input" id="inputPassword" placeholder="Password" />
                            </div>
                            <button type="submit" className="login_btn" variant="outline-danger" size="lg">Login</button>
                            <a className="forgot" href="#">Forget password</a>
                            <a className="account" href="#">New to blacklist ? Create Account</a>


                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
