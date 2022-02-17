import { useState } from "react";

const App = () => {
  //useState is necessary for holding the counter and re rendering the page when the ///counter is changed.
  const [counter, setCounter] = useState(0);

  const increaseNumber = () => {
    setCounter(counter + 1);
  };
  const decreaseNumber = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Basic Increase and Decrease the number.</p>
      <p>{counter}</p>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
    </div>
  );
};

export default App;
