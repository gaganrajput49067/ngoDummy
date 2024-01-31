import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../Component/HomePage";
import Register from "../Pages/Register";
const Navigation = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
 
    </>
  );
};

export default Navigation;
