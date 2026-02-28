

export default function UserInputs({formData, setFormData}) {


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevInputs) => ({
      ...prevInputs,
      [name]: +value
    }));
  }


    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input value={formData.initialInvestment} id="initialInvestment" name="initialInvestment"  required type="number" onChange={handleChange}/>
</p>
<p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input  id="annualInvestment" name="annualInvestment" required type="number" onChange={handleChange} />
                </p>
</div>
            <div className="input-group">
                    <p>
                <label htmlFor="expectedReturn">Expected Return (%)</label>
                <input value={formData.expectedReturn}  id="expectedReturn" name="expectedReturn" required type="number" onChange={handleChange}/>
</p>
<p>
                <label htmlFor="duration">Duration </label>
                <input value={formData.duration}  id="duration" name="duration" required type="number" onChange={handleChange} />
                </p>
                </div>
            
        </form>
    );
}