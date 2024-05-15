import { useState } from "react";
import Results from "./components/results";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";

function App() {

  const [userInput, setUserinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput=userInput.duration>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserinput((prevValue) => ({
      ...prevValue,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInputs onChange={handleChange} userInput={userInput} />
  { validInput   &&<Results userInput={userInput} />}
  {!validInput && <p className="center">Please enter a duration greater than Zero</p>}
    </>
  );
}

export default App;
