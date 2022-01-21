import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CarList from "./components/Pages/CarList";
import ErrorPage from "./components/Pages/ErrorPage";
import Model3 from "./components/Pages/Model3";
import ModelS from "./components/Pages/ModelS";
import ModelX from "./components/Pages/ModelX";
import ModelY from "./components/Pages/ModelY";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Model3" element={<Model3 />} />
            <Route exact path="/ModelY" element={<ModelY />} />
            <Route exact path="/ModelS" element={<ModelS />} />
            <Route exact path="/ModelX" element={<ModelX />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/car-list" element={<CarList />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
