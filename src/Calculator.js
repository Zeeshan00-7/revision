import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case "addition":
        setResult(parseFloat(number1) + parseFloat(number2));
        break;
      case "subtraction":
        setResult(parseFloat(number1) - parseFloat(number2));
        break;
      case "multiplication":
        setResult(parseFloat(number1) * parseFloat(number2));
        break;
      case "division":
        setResult(parseFloat(number1) / parseFloat(number2));
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <h1>Basic Calculator</h1>
     <div className="inputs">
     <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
     </div>
      <div className="buttons">
      <button onClick={() => handleOperation("addition")}>Addition</button>
      <button onClick={() => handleOperation("subtraction")}>Subtraction</button>
      <button onClick={() => handleOperation("multiplication")}>Multiplication</button>
      <button onClick={() => handleOperation("division")}>Division</button>
      </div>
      <div className="lower">
      <h2>Result: {result}</h2>
      <button onClick={() => setResult("")}>CLEAR RESULT</button>
      </div>
    </div>
  );
}

export default Calculator;
