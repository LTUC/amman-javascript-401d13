import React, { Component } from 'react';
import Main from './components/Main';
import Site from './context/Site';
import Theme from './context/Theme';
import './styles/app.scss';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Site>
        <Theme>
          <Main />
        </Theme>
      </Site>
    )
  }
}

export default App
