import React, { Component } from 'react';

export const ThemeContext = React.createContext();

export class Theme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark'
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme

