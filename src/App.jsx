import React, { useState } from "react";
import "./App.css";
import About from "./components/About.jsx";
import Alert from "./components/Alert.jsx";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/Textform.jsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Textform from "./components/Textform.jsx";

function App() {
  const [mode, setMode] = useState("light"); // whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "Textutils-Dark Mode";
      setInterval(() => {
        document.title = "Textutils is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "Textutils-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtilsBlog"
        home="homeeeee"
        About="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
      </div>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm />} />

          <Route path="/about" element={<About />} />
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter Text to Analyze" /> 
         <About /> */}
      </div>
    </>
  );
}

export default App;
