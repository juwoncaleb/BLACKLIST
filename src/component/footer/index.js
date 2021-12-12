import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/logo.svg";
import FB from "../../img/fb.png";
import twitter from "../../img/twitter.png";


import { Container, Row, Col } from 'react-bootstrap';
// const Footer =()=> {
//     return (
//         <>
//            <>
            
//         </>  
//         </>
//     )
// }

// export default Footer

// import React from 'react'

function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={12}>
                        <img className="logo" src={logo} />
                        <p>Alternate database of chronic defaulters <br /> & AI-powered debt  recovery</p>

                    </Col>

                    <Col xxl={2} xl={2} lg={2} md={2} sm={12} >
                        <p>Support</p>
                        <a href="#">Help Desk</a>
                        <a href="#">Contact us</a>
                    </Col>


                    <Col xxl={2} xl={2} lg={2} md={2} sm={12}>
                        <p>About</p>
                        <a href="#">Overview</a>
                        <a href="#">Documentation</a>
                        <a href="#">Status</a>
                        <a href="#">Career</a>
                    </Col>

                    <Col xxl={2} xl={2} lg={2} md={2} sm={12}>
                        <p>Developer</p>
                        <a href="#">Company</a>
                        <a href="#">Pricing</a>
                        <a href="#">Privacy & Terms</a>
                    </Col>

                    <Col xxl={3} xl={3} lg={3} md={3} sm={12}>
                    <p>Contact us</p>
                    <a href="#"> <img className="fb" src={FB} /></a>
                    <a href="#"> <img className="twitter" src={twitter} /></a>
                    <p>info@blacklistng.com</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Footer



