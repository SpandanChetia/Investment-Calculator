import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] =  
    useState({
        initialInv : 10000,
        annualInv : 1200,
        expectedRet : 1200,
        duration : 10,
    });
  
  const handleChange= (inputIdentifier, newValue) =>{
    setUserInput(prevInp=>{
        return {
            ...prevInp,
            [inputIdentifier] : newValue
        };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
    </>
  );
}

export default App;
