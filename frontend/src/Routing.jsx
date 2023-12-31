import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Routing;
