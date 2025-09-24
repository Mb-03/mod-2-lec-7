import { use, useState } from "react";

const App = () => {
  const [increment, setIncrement] = useState(0);
  const [step, setStep] = useState(1);
  console.log(increment);

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={(prevIncrement) => setIncrement(prevIncrement + 1)}>
        Count
      </button>
      <h1>Count is : {increment}</h1>
      <select
        name=""
        id=""
        onChange={(event) => setStep(Number(event.target.value))}
      >
        <option value="1"> 1</option>
        <option value="3">Step 3</option>
        <option value="10">Step 10</option>
      </select>
    </div>
  );
};

export default App;
