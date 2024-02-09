import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const Search = ({ searchQuery, setSearchQuery, country, setCountry }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSearchSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="mb-4">
      <Row xs={1} md={2} lg={3} className="align-items-center gy-2 ">
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
        <Col>
          <Form.Control
            as="select"
            value={country}
            onChange={handleCountryChange}
          >
            <option value="">Italy</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IT">Italy</option>
            <option value="KP">Korea</option>
            <option value="JP">Japan</option>
          </Form.Control>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
