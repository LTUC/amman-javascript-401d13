import React, { useState } from 'react';
import Person from './Person';

export default function App() {

  const [counter, setCounter] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false)

  const updateCounter = () => {
    let newCount = counter + 1;
    setCounter(newCount);
    setFactorOfFive(newCount > 0 && newCount % 5 === 0);
  }

  return (
    <div>
      <h1>Hello World From a function based component</h1>
      <p data-testid="counter-value">Number of times Clicked! {counter}</p>
      <p data-testid="factor">Factor of Five? {factorOfFive ? "yes" : "no"}</p>
      <button data-testid="update-counter" onClick={() => updateCounter()}>Click me ❗❗❗</button>
      {/* <button onClick={() => setCounter(counter + 1)}>Click me ❗❗❗</button> */}
      <br></br>
      <br></br>
      <br></br>
      <Person age="28" />
    </div>
  )
}
