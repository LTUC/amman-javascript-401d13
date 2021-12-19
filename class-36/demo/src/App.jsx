import React from 'react';
import './style.scss';
import Status from './components/Status';
import Votes from './components/Votes';

export default function App(props) {
  return (
    <div>
      <Votes />
      <Status />
    </div>
  )
}
