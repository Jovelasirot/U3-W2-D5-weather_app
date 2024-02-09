import { useState } from "react";
import HomePage from "./HomePage";
import Search from "./Search";
import { Button, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Home = ({ toggleMode, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center ">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage searchQuery={searchQuery} />
      <Container className="mt-2  ">
        <Button
          onClick={toggleMode}
          variant={isDarkMode ? "secondary" : "dark"}
          className={
            isDarkMode ? "bi bi-lightbulb text-light" : "bi bi-lightbulb-off "
          }
        ></Button>
      </Container>
    </Container>
  );
};

export default Home;
