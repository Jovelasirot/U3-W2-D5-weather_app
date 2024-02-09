import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { debounce } from "lodash";

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mb-4">
      <Row xs={1} md={2} className="align-items-center">
        <Col>
          <h5 className="text-light">Find out the weather of your city</h5>
        </Col>
        <Col>
          <Form onSubmit={handleSearchSumbit}>
            <Form.Control
              type="search"
              placeholder="Search a city"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
