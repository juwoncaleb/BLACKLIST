import React from 'react'
import './style.css'
import ComponentCtn from '../../component'

import { Col, Container, Row, Button, Form } from 'react-bootstrap';

function Support() {
  return (
    <div>
      <ComponentCtn />
      <div className="support_1">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={6} sm={12}>
              <h1>How can we help?</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="support ">
        <Container className="support_content  p-5">
          <Row>
            <Col className="support_text" xxl={6} xl={6} lg={6} md={6} sm={12}>
              <h3>Contact Sale</h3>
              <p className="mt-5">Tell us how we can help and our team is happy to answer your questions and give you more details about our product</p>

            </Col>

            <Col xxl={6} xl={6} lg={6} md={6} sm={12} className="form_div">
              <form>


                <div class="form-outline mb-4">
                  <input type="text" id="form6Example3" class="form-control" />
                  <label class="form-label" for="form6Example3">First name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form6Example4" class="form-control" />
                  <label class="form-label" for="form6Example4">Last Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form6Example5" class="form-control" />
                  <label class="form-label" for="form6Example5">Email</label>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Your enquiry is about ?</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

               

                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                  <label class="form-label" for="form6Example7">Additional information</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-4">

                  <Button className="btn btn-danger mr-5 my-3 send">Send Message</Button>
                </div>
              </form>
            </Col  >
          </Row>
        </Container>
      </div>




    </div >
  )
}

export default Support
