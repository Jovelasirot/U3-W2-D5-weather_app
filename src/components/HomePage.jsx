import React, { useState, useEffect } from "react";
import { Container, Row, Col, Placeholder, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = ({ searchQuery, country }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, [searchQuery]);

  const fetchWeather = () => {
    const cityName = searchQuery ? searchQuery : "Milan";
    const countryCode = country ? country : "IT";
    console.log(cityName);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=226fa256aed11c7804750ef0b498daf1`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erro while fething weather information");
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setWeather(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch:", error);
        setLoading(false);
      });
  };
  const kelvinToC = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          {loading ? (
            <Col>
              <div className="text-start  mb-5">
                <Placeholder animation="glow">
                  <Placeholder xs={2} />
                </Placeholder>
              </div>
              <div className="text-start">
                <Placeholder animation="glow">
                  <Placeholder xs={2} />
                  <Placeholder xs={4} />
                  <Placeholder xs={8} />
                </Placeholder>
              </div>
            </Col>
          ) : (
            <Col className="glass p-3 text-light shadow ">
              <Row>
                <Col>
                  <h2>
                    {weather.name}, {weather.sys.country}
                  </h2>
                  <h1> {kelvinToC(weather.main.temp).toFixed(1)} °C</h1>
                  <p>
                    Feels like:
                    {kelvinToC(weather.main.feels_like).toFixed(1)} °C
                  </p>
                  <div>
                    <span className="me-4">
                      Max:
                      {kelvinToC(weather.main.temp_max).toFixed(1)} °C
                    </span>
                    <span>
                      Min:
                      {kelvinToC(weather.main.temp_min).toFixed(1)} °C
                    </span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-end justify-content-between ">
                  <Row className="flex-column gy-2 ">
                    <Col className="d-flex flex-column gy-2 align-items-center ">
                      <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description.toUpperCase()}
                        style={{ width: "100px" }}
                      />
                      <span>
                        {weather.weather[0].description.toUpperCase()}
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <Button variant="primary" className="text-white mt-2 ">
                      <Link
                        to={`/Details/${weather.name}`}
                        className="nav-link "
                      >
                        More info
                      </Link>
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Col>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
