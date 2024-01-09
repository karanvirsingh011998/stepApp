import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(step);
  const message = ["Learn React", "Apply for jobs", "Invest your new income"];
  const previousHandler = () => {
    setStep((step)=>step - 1);
  };
  const nextHandler = () => {
    setStep((step)=>step + 1);
  };
  return (
    <>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>{!isOpen? 'Open':'Close'}</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} :{message[step - 1]}
          </p>
          <div className="buttons">
            <button
              disabled={step == 1}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => previousHandler()}
            >
              Previous
            </button>
            <button
              disabled={step == 3}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => nextHandler()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
