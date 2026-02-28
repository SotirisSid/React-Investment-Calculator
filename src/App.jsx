import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results"

import { useState } from "react";
function App() {
      const [inputs, setInputs] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });
    const inputIsValid = Object.values(inputs).every((value) => value > 0);
    const durationCap = 50;
    const durationIsValid = inputs.duration <= durationCap;
    
  return (

    <main>
      <Header />
      <UserInputs formData={inputs} setFormData={setInputs} />
      {!durationIsValid && <p className="center">Duration cannot exceed {durationCap} years.</p>}
      {!inputIsValid && <p className="center">Please fill in all fields with values greater than 0.</p>}
      {inputIsValid && durationIsValid && <Results  inputs={inputs} />}
    </main>

  )
}

export default App
