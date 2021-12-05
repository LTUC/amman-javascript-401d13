import React from 'react';

export default function Content(myProps) {
  return (
    <div>
      <div className="content">
        <h1>{myProps.title}</h1>
        <button onClick={() => myProps.changeTitle(myProps.title)}>Change Title</button>
      </div>
    </div>
  );
}
