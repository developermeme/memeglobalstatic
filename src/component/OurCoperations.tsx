import { Coperations } from "../variables/Variable";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Style.css"

export const OurCoperations = () => {
  return (
    <div id="Coperations" className="Corparation-Container">
    <Container  >
        <h1 >OUR CORPARATES</h1>
      <Row>
        {Coperations.map((e: any, index: any) => {
          return (
            <>
              <Col key={index} xs={12} md={6} lg={6}>
                <Card style={{ margin: "6%" }}>
                    <a href={e?.link}>
                  <Row>
                    <Col lg={6}>
                      <img src={e?.url} alt="listimg" className="BrandImg" />
                    </Col>
                    <Col lg={6}>
                      <Card.Body>
                        <Card.Title>{e?.title}</Card.Title>
                        <Card.Text>{e?.discribtion}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                  </a>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};
