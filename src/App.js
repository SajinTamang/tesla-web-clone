import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import Model3 from "./components/Pages/Model3";
import ModelS from "./components/Pages/ModelS";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Model3" element={<Model3 />} />
            <Route exact path="/ModelS" element={<ModelS />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
