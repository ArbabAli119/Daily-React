import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked", counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Code With Arbab</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
