

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import hero from '../../img/hero.png';
import play from '../../img/play_button.png'
import map from "../../img/Map.svg";
import line from "../../img/line.png";
import business from "../../img/businessIcon.svg";
import customer from "../../img/customerIcon.svg";
import lender from "../../img/lenderIcon.svg";
import defaulters from "../../img/defaulters.svg";
import tech from "../../img/techpoint.png";
import venture from "../../img/venture.png";
import teke from "../../img/Tekemedia.png";
import Footer from "../../component/footer/index";
import banner_image from '../../img/header.png'
import logo from "../../img/logo.svg";

import FB from "../../img/fb.png";
import twitter from "../../img/twitter.png";



import ComponentCtn from '../../component'

import Button from '@restart/ui/esm/Button'
import { Container, Col, Row } from 'react-bootstrap';
// import { } from 'react-bootstrap';

export default function Homepage() {
    return (
        <>
            <ComponentCtn />
            <div className="homepage_1">

                <Container>
                    <Row >

                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="mt-5 top_header">

                            {/* < div className="homepage_left_item1" >
                                <Button className="homepage_left_button1 p-2">New</Button>

                                <p className="homepage_left_text">Announcing Partnership with CRC Credit Burea</p>
                            </div> */}
                            <div className="row d-flex space-between flex-start homepage_left_item1">
                                <div className="col-md-3 col-sm-3">
                                    <Button className="homepage_left_button1 py-auto">New</Button>
                                </div>
                                <div className="col-md-9 col-sm-9">
                                    <p className="homepage_left_text">Announcing Partnership with CRC Credit Bureau</p>
                                </div>
                            </div>
                            <div className="homepage_left_item2 my-5 py-1" >
                                <p className="homepage_left_item1Text1 my-4 mb-0">Make Better <br /> Credit Decision</p>
                                {/* <p className="homepage_left_item1Text2"></p> */}
                                <p className="homepage_left_item1Text3 my-3">Alternate database of chronic defaulters & AI-powered <br />Debt Recovery </p>
                                <Button className="btn btn-danger mr-5 my-3 homepage_left_button">Request Demo</Button>
                                <a href="https://www.youtube.com/watch?v=aqz-KE-bpKQ&ab_channel=Blender">
                                    <img src={play} alt="" />
                                </a>
                            </div>
                        </Col>


                        <Col xxl={6} xl={6} md={6} sm={12} className="homepage_right">
                            {/* <img src={header} alt="" /> */}
                            {/* <img src={banner_image} className="img" alt=""/> */}
                            <img className="img image_banner" src={hero} alt="" />
                        </Col>
                    </Row>

                </Container>


            </div>
            <div className="homepage_2">
                <Container>
                    <Row className="homepage_2_content d-flex row space-between">
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="py-5">
                            <img className="map pt-5 " src={map} />
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="py-5 my-3">
                            <p className="second_level_header mt-3">Who we are</p>
                            <img className="line1 " src={line} />
                            <p className="second_level_header_text_one py-2 my-3">We are a Credit Management Company helping businesses make better credit decisions and borrowers to become debt-free. </p>
                            <p className="second_level_header_text_one py-1 my-3"> Non-performing loans are a big issue for the credit industry, both for lenders and borrowers. Businesses need to be proactive in reducing bad loans, this would mean investing in bad debt prevention and this requires an increased focus on risk assessment prior to giving gout credit.</p>
                            <Button className="homepage_left_button_learn my-3">Learn more</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="homepage_3">
                <Container>
                    <p className="homepage_3_header">Product Offering</p>
                    <img className="line" src={line} />

                    <Row >


                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <div className="cardElement">
                                <img className="business" src={business} />
                                <h2>Blacklist for Lender</h2>
                                <div className="cardElement_Text">
                                    <p> •  Get paid anytime your data gets hit</p>
                                    <p> •   Access real-time data of chronic defaulters</p>
                                    <p> •   Access multiple credit data sources through a single interface.</p>
                                    <p> •    Improve your risk assessment process</p>

                                </div>

                            </div>
                        </Col>

                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <div className="cardElement">
                                <img className="customer mx-auto" src={customer} />
                                <h2>Blacklist for Consumers</h2>
                                <div className="cardElement_Text">
                                    <p> •    Get a free annual check</p>
                                    <p> •    See your credit status on the go</p>
                                    <p>•    Start your journey to becoming debt-free</p>
                                    <p>•    Increase your credit-worthiness</p>
                                </div>

                            </div>
                        </Col>

                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <div className="cardElement">
                                <img className="lender" src={lender} />
                                <h2>Blacklist for Businesses</h2>
                                <div className="cardElement_Text">
                                    <p>Assess fiscal responsibility of prospective employees, customers, tenants, etc</p>


                                </div>
                            </div>
                        </Col>

                    </Row>
                    <Button>Learn more</Button>
                </Container>

            </div>

            <div className="homepage_4">
                <div className="homepage_4_text">
                    <p>Get rid of chronic</p>
                    <p>defaulters one search at a time</p>
                </div>
                <img className="defaulters" src={defaulters} />
            </div>

            <div className="homepage_5">
                <p className="homepage_5_text">Featured on</p>
                <img className="line3" src={line} />
                <Container>
                    <Row>
                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <img className="techpoint" src={tech} />
                        </Col>

                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <img className="venture" src={venture} />
                        </Col>

                        <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
                            <img className="teke" src={teke} />
                        </Col>
                    </Row>
                </Container>


            </div>
            <Footer />
        </>
    )
}

