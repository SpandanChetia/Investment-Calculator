import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import Error from "./components/Error.jsx";

function App() {
  const [userInput, setUserInput] =  
    useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 1200,
        duration : 10,
    });
  
  const handleChange= (inputIdentifier, newValue) =>{
    setUserInput(prevInp=>{
        return {
            ...prevInp,
            [inputIdentifier] : +newValue
        };
    });
  }

  const inputIsValid = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {inputIsValid && <Results input={userInput}/>}
      {!inputIsValid && <Error/>}
    </>
  );
}

export default App;
