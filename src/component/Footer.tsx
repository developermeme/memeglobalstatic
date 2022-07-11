import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import Footerlogo from "../assets/Footer.jpg";
import "./Style.css";
import Logo from "../assets/memegloballogo.svg"

export default function Footer() {
  return (
    <>
      <div id="Contact" className="Footer-Container">
        <Row>
          <Col>
          <img src={Logo} alt="Footer-Logo"/>
          </Col>
          <Col>
            <h5>SUBSCRIBE</h5>
            <FloatingLabel controlId="floatingInputGrid" label="Email address">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <h3>CONTACT US</h3>
            <h4>MEME WORLDWIDE INC.</h4>
            <p>435 Stratton street, Logan West Virginia 25601, USA</p>
          </Col>
          <Col>
            {" "}
            <img src={Logo} alt="Footer-Logo"/>
          </Col>
        </Row>
      
      </div>
    </>
  );
}
