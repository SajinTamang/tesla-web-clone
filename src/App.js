import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CarList from "./components/Pages/CarList";
import ErrorPage from "./components/Pages/ErrorPage";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Model3 from "./components/Pages/Model3";
import ModelS from "./components/Pages/ModelS";
import ModelX from "./components/Pages/ModelX";
import ModelY from "./components/Pages/ModelY";
import Shop from "./components/Pages/Shop";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/Model3" element={<Model3 />} />
            <Route  path="/ModelY" element={<ModelY />} />
            <Route  path="/ModelS" element={<ModelS />} />
            <Route  path="/ModelX" element={<ModelX />} />
            <Route  path="/sign-in" element={<SignIn />} />
            <Route  path="/sign-up" element={<SignUp />} />
            <Route  path="/car-list" element={<PrivateRoute />}>
              <Route path="/car-list" element={<CarList />} />
            </Route>
            <Route  path="/Shop" element={<Shop />} />
            <Route  path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
