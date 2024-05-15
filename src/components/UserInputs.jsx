
export default function Input({onChange,userInput }) {
    
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial income1</label>
          <input type="number" required  value={userInput.initialInvest} onChange={(event)=>onChange('initialInvest',event.target.value)}/>
        </p>
        <p>
          <label>initi al income2</label>
          <input type="number" required value={userInput.annualInvest } onChange={(event)=>onChange('annualInvest',event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>initial income2</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event)=>onChange('expectedReturn',event.target.value)}/>
        </p>
        <p>
          <label>initial income2</label>
          <input type="number" required value={userInput.duration} onChange={(event)=>onChange('duration',event.target.value)} />
        </p>
      </div>
    </section>
  );
}
