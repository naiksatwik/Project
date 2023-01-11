import React, { useState } from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/Aboutus";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState({
    background: "light",
    text: "On",
    color: "dark",
  });

  const [Alerts, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const IfCLicks=()=>{
    if(mode.background === "light"){
      setMode({
        background:"dark",
        text:"On",
        color:"light"
      })
      document.body.style.backgroundColor="black";
      showAlert("dark mode is enabled", "success");
    }else{
      setMode({
        background: "light",
        text: "off",
        color: "dark",
      });
      showAlert("light mode is enabled", "success");
     document.body.style.backgroundColor="white";
  }
}
 
  return (
    <div className="container">

     <Router>
      <Navbar
      // black 
        mode={mode.background}
        TextMode={mode.text}
        textColor={mode.color}
        IfClick={IfCLicks}

      />
      <Routes>
      {/* <Alert alert={Alerts}></Alert> */}
      {/* we can also pass the mode*/}
     
        <Route path="/" element={
          <TextForm
          heading="Enter Text to analysis Below "
          textColor={mode.color}
          showAlert={showAlert}
        />
        }/>
        {/* <About></About> */}

        <Route path="/about" element={<About/>}/>

      </Routes>
      </Router>
      </div>
  );
}

export default App;
