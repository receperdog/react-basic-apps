import { useState } from "react";

const App = () => {
  //useState is necessary for holding the counter and re rendering the page when the ///counter is changed.
  const [counter, setCounter] = useState(0);

  const increaseNumber = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>This will be counter app without styling.</p>
      <p>{counter}</p>
      <button onClick={increaseNumber}>Increase</button>
    </div>
  );
};

export default App;
