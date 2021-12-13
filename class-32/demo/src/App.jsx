import React, { Component } from 'react';
import Main from './components/Main';
import Site from './context/Site';
import Theme from './context/Theme';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
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
