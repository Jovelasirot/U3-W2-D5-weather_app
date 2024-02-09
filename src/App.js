import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <BrowserRouter>
      <div className={`${isDarkMode ? "bg-dark" : "mainBg"} h-100`}>
        <main>
          <Routes>
            <Route
              element={<Home toggleMode={toggleMode} isDarkMode={isDarkMode} />}
              path="/"
            />
            <Route element={<Details />} path="/Details/:cityId" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
