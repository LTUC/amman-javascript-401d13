import React, { useState } from 'react';
import Counter from './components/Counter';


export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <h1> Hello Pizza Lovers! :pizza:</h1>
      <button onClick={() => setHide(!hide)}>Hide the counter Component</button>
      {
        !hide &&
        <>
          <Counter />
        </>
      }
    </div>
  )
}
