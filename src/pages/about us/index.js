import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import line from "../../img/line.png";
import dummy from "../../img/dummy.png";


import './style.css'
import ComponentCtn from '../../component'


function About() {
    return (
        <div>

            <ComponentCtn />

            <div className="aboutus_1">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={6} sm={12}>
                            <h1>Make Better <br /> Credit Decisions</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="aboutus_2">
                <Container className="aboutus_2_content">
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12}>
                            <p className="text1">We are a mission <br /> driven company</p>
                            <img src={line} />
                        </Col>

                        <Col xl={6} lg={6} md={12} sm={12}>
                            <p className="text2">
                                We are a credit management company helping businesses make better credit decisions and borrowers to become debt-free. <br/> <br/>
                                Non-performing loans are a big issue for the credit industry, both for lenders and borrowers. Businesses need to be proactive in reducing bad loans, this would mean investing in bad debt prevention and this requires an increased focus on risk assessment prior to giving gout credit.
                                the Blacklist a robust and dynamic database of chronic defaulters is built to help lending companies gain wholesome insight into prospective borrowers’ willingness and capability to repay loans, through access to their past and active credit information. <br/> <br/>

                                While there may be valid reasons why some good-willing customers are unable to repay their debts on or before the due date, defaulting on loan repayments taints one’s credit record and could prevent or limit further access to credit. Our AI-powered platform service Restructr, helps borrowers to restructure their loans and get them out of debt quickly in order to raise their creditworthiness. Restructr also serves as a platform for lenders to follow up on debt recovery from their blacklisted records.
                            </p>

                        </Col>
                    </Row>
                </Container>

            </div>




            <div className="aboutus_3">
                <Container className="aboutus_3_content">
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12}>
                            <p className="aboutus_3_text">Our Values</p>
                            <img src={line} />
                        </Col>

                        {/* <Col xl={6} lg={6} md={12} sm={12}>
                            <h3>Data Security & Privacy</h3>
                            <p> We're committed to protecting our customers' data</p>
                            <h3>Integrity</h3>
                            <p>We strive to do the right thing always</p>
                            <h3>Customer-centric</h3>
                            <p>Understanding our customer's needs and designing <br/> solutions that deliver the best value.</p>
                            <h3>Community</h3>
                            <p>Curating value through data sharing</p>
                        </Col> */}
                    </Row>
                </Container>

            </div>




        </div>
    )
}

export default About
