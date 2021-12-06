import React, { useState } from 'react';

export default function Person(prop) {
  const [age, setAge] = useState(prop.age || 23);
  const [name, setName] = useState('🍕 man!');

  const handleChange = e => {
    setName(e.target.value);
  }

  return (
    <div>
      <h2 data-testid="name">My name is {name}</h2>
      <h3 data-testid="age">My Age is {age}</h3>
      <input onChange={handleChange} />
      {/* <input onChange={(e) => setName(e.target.value)} /> */}
    </div>
  )
}
