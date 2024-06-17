import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

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
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Results input={userInput}/>
    </>
  );
}

export default App;
