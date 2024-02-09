import { useState } from "react";
import HomePage from "./HomePage";
import Search from "./Search";
import { Button, Container } from "react-bootstrap";

const Home = ({ toggleMode, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center ">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage searchQuery={searchQuery} />
      <Container className="mt-2">
        <Button
          onClick={toggleMode}
          variant={isDarkMode ? "secondary" : "dark"}
          className={isDarkMode ? "text-light" : "text-light"}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Container>
    </Container>
  );
};

export default Home;
