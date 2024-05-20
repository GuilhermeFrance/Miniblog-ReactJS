import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

// pages
import Home from "./routes/Home/Home";
import About from "./routes/About/About";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
