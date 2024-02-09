import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <main className="d-flex flex-column justify-content-center vh-100 mainBg">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/Details/:cityId" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
