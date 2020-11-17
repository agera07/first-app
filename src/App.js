import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Saludar from "./components/Saludar";

function App() {
  const [stateCar, setStateCar] = useState(false);
  let [contar, setContar] = useState(0);

  const onOff = () => {
    // setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
    setContar(++contar);
  };

  useEffect(() => {
    console.log("Total " + contar);
  }, [contar]);

  // const saludarFn = (name, age) => {
  //   console.log(`Hola ${name} tiene ${age} anios.`);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"} </h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={onOff}>Enceder / Apagar</button>
      </header>
    </div>
  );
}

export default App;
