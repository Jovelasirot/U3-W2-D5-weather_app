import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => (
  <Container
    className="d-flex h-100 align-items-center justify-content-center 
  "
  >
    <Row className="flex-column text-center">
      <Col xs={12} md={6}>
        <iframe
          src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn"
          width="480"
          height="480"
          allowFullScreen
        ></iframe>
      </Col>
      <Col>
        <h2 className="mt-2 text-light">404 - Not Found</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
