import { useState } from "react";

const Header = () => {
  let [count, setCount] = useState(0);


  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    handleStatic()
  };

  let number = 1

  const handleStatic = () => {
    number = number + 1
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Header;
