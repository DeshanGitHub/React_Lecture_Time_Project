import React from "react";
import HomePage from "../pages/Home/home";
import LoginPage from "../pages/session/Login/login";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/session/notFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
