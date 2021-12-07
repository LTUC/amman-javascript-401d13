import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Pizza Man');

  // this use effect will run on every component didmount  and componentDidUpdate
  // it has no role and its running loose!
  useEffect(() => {
    console.log('I run on every rerender');
  });

  // acts like the component did mount
  // we setting the dependencies of the useEffect to an [],  should render only once
  useEffect(() => {
    console.log('I run only when the component is first rendered');
  }, []);


  // This useEffect will be fired whenever the state name is changed
  useEffect(() => {
    console.log('The name has been changed!');
  }, [name]);

  // this is effect is executed whenever the component is unmounted 
  // usually we use this to prevent memory leakage in our react application
  useEffect(() => {
    return (() => {
      console.log('COMPONENT UNMOUNTED');
      // setCounter(0);
    })
  });

  return (
    <div>
      <h1>
        Function based component Counter loaded
      </h1>

      <p>
        number of count {counter}
      </p>

      <p>
        My name is {name}
      </p>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Click me to count
      </button>
    </div>
  )
}
