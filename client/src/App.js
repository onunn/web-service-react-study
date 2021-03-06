import axios from "axios";
import React from "react";
import SignUpPage from "./components/signup/signup";
import LandingPage from "./components/landingPage/landing";
import SignUpPage2 from "./components/signup/signup2";
import MainPage from "./components/mainPage/mainPage"
import LogInPage from "./components/login/login";
import ForgotPage from "./components/forgot/forgot"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LogInPage/>} />
          <Route path="/forgot" element={<ForgotPage/>} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;