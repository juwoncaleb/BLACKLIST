import React from 'react'
import './style.css'
import ComponentCtn from '../../component';
import line from "../../img/line.png";
import black from "../../img/black.png";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";



import { Col, Container, Row, Button } from 'react-bootstrap';


function Solution() {
    return (
        <div>
            <ComponentCtn />
            <div className="solution_1">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={6} sm={12}>
                            <h1>Make Better <br /> Credit Decisions</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container className="solution_2 ">
                    <Row className="mt-5">
                        <Col xxl={6} xl={6} lg={12} md={6} sm={12}>
                            <p className="solution_header"> Preamble</p>
                            <img src={line} className="line1" />
                        </Col>

                        <Col xxl={6} xl={6} lg={12} md={6} sm={12} >
                            <p className="solution_text"> Credit is critical to growing an economy, however, reports have it that over 40% of the Nigerian population is financially excluded and thus has limited access to credit. In response to this gap, we have seen an explosive rise in the number of fintechs  who are extending financial services including credit access to the unbanked and under-banked population</p>

                        </Col>


                    </Row>

                    <Row className="mt-5">

                        <Col xxl={6} xl={6} lg={12} md={6} sm={12}>
                            <p className="solution_header"> The Problem</p>
                            <img src={line} className="line1" />
                        </Col>

                        <Col xxl={6} xl={6} lg={12} md={6} sm={12}>
                            <p className="solution_text">While it’s gotten easier to access credit, non-performing loans are on the rise, sometimes to unmanageable levels, resulting in lenders sometimes suspending their operations, or totally folding up.
                                One of the major reasons for rising non-performing loans (NPL) is due to inadequate credit checks by lenders as well as people gaming the loan system as the unbanked and underbanked population are not covered by traditional credit databases . Hence, the need for alternative sources of credit data.
                                On the other hand, debtors are unable to pay back sometimes for understandable reasons. Or become elusive due to threatening collection processes by some lenders and collection agencies, et cetera. </p>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col xxl={6} xl={6} lg={12} md={6} sm={12}>
                            <p className="solution_header"> The Solution</p>
                            <img src={line} className="line1" />
                        </Col>

                        <Col xxl={6} xl={6} lg={12} md={6} sm={12}>
                            <p className="solution_text"> The Blacklist operates an alternative database of chronic credit defaulters and fraudulent people aggregated from our community of fintech lenders and other associated databases that clients can run checks against thereby improving the credit decision making at the underwriting level

                                The Blacklist provides versatile credit checks and automates the lending and credit decision process for Fintech lenders through API calls.

                                Through its ethical collections systems, Restructr, debtors are also provided with flexible repayment options through Artificial intelligence to help them eventually become debt- free.</p>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="solution_2">
                <Container>

                    <Row className="solution_texts">
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} >
                            <p className="solution_2_text1">Blacklist Methodology</p>
                            <br />
                            <img src={line} className="line2" className="image" />

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <img src={black} className="image_2" />

                        </Col>

                    </Row>
                </Container>

            </div>
            <div className="card-deck">
                <div className="card">
                    <img src={one} className="icon" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Search prospective borrower's unique ID (BVN, email, name, or phone number)
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={two} className="icon" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Search runs through the Blacklist and other databases selected by lender.
                        </p>

                    </div>
                </div>
                <div className="card">
                    <img src={three} className="icon" alt="..." />
                    <div className="card-body">
                        <p className="card-text">3.a) Search will return a positive report, if prospective borrower is a defaulter in the blacklist.  <br /> <br />

                            b) Search will return a negative report, if prospective borrower is not a defaulter in our system.</p>
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Solution
