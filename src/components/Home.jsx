import { useState } from "react";
import HomePage from "./HomePage";
import Search from "./Search";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage searchQuery={searchQuery} />
    </>
  );
};

export default Home;
