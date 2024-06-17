import {useState} from 'react';

export default function UserInput() {
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
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={userInput.initialInv} onChange={(event) => handleChange('initialInv', event.target.value)} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={userInput.annualInv} onChange={(event) => handleChange('annualInv', event.target.value)} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={userInput.expectedRet} onChange={(event) => handleChange('expectedRet', event.target.value)} required/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)} required/>
            </p>
        </div>
    </section>
    )
}