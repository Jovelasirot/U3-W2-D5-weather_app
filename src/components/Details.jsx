import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Placeholder,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const { cityId } = useParams();

  useEffect(() => {
    fetchWeatherDetail();
  }, [cityId]);

  const fetchWeatherDetail = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=226fa256aed11c7804750ef0b498daf1`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error while fetching weather information");
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setWeather(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch of detail", error);
        setLoading(false);
      });
  };

  const kelvinToC = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <Container>
      <Row className="h-100 justify-content-center">
        <Col>
          {loading ? (
            <Col>
              <div className="text-start mb-5">
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
          ) : weather ? (
            <Col className="glass p-3 text-light shadow">
              <Button variant="primary" className="text-white">
                <Link to={"/"} className="nav-link ">
                  Go Back
                </Link>
              </Button>
              <div className="d-flex justify-content-between ">
                <div>
                  <h1>
                    {weather.city.name}, {weather.city.country}
                  </h1>
                  <p>
                    Lat: {weather.city.coord.lat} - lon:{" "}
                    {weather.city.coord.lon}
                  </p>
                </div>

                <h1>{weather.list[1].dt_txt.split(" ")[0]}</h1>
              </div>
              <h4 className="text-center">Hourly Weather</h4>
              <div className="hourlyList d-flex ">
                {weather.list.map((element, index) => (
                  <div key={index} className="glass hourlyCard">
                    <p
                      className="fs-4 flex-grow-1 text-center"
                      style={{ width: "200px" }}
                    >
                      {kelvinToC(element.main.temp).toFixed(1)} °C
                    </p>
                    <p className="fw-semibold">
                      {element.weather[0].description}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                      alt={element.weather[0].description}
                      style={{ width: "100px" }}
                    />
                    <p>{element.dt_txt.split(" ")[1].slice(0, 5)}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-center">Weather in the next days</h4>
                <ListGroup className="daysList">
                  {weather.list.map((element, index) => {
                    if (index % 7 === 0) {
                      return (
                        <ListGroup.Item
                          key={index}
                          className="bg-opacity-10 bg-light "
                        >
                          <Row className="justify-content-between text-light ">
                            <Col className="d-flex align-items-center">
                              <span className="fs-5">
                                {element.dt_txt.split(" ")[0]}
                              </span>
                            </Col>
                            <Col className="d-flex flex-column align-items-end">
                              <img
                                src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                                alt={element.weather[0].description}
                                style={{ width: "60px" }}
                              />
                              <span>{element.weather[0].description}</span>
                              <span className="fs-4 fw-medium ">
                                {kelvinToC(element.main.temp).toFixed(1)} °C
                              </span>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ListGroup>
              </div>
            </Col>
          ) : (
            <div>No weather data available for {cityId}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
