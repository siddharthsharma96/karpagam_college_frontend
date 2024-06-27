import { useEffect, useState } from "react";

const ExampleuseState = () => {
  const [counterValue, setCounterValue] = useState(0);
  // const [counterValues, setCounterValues] = useState(0);
  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };
  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };
  // useEffect(() => {
  //   console.log("with Dependencies");
  // }, [counterValues]);
  useEffect(() => {
    console.log("without array");
  });
  useEffect(() => {
    console.log("With empty dependency");
  }, []);
  return (
    <div className="layout-container__wrapper">
      <h1>UseState hook</h1>
      <p>{counterValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ExampleuseState;
