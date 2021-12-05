import React, { Component } from 'react';
import Content from './components/Content';
import './App.scss';
export class App extends Component {

  changeTitle = (title) => {
    document.title = title;
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>

        {/* We are creating component instances */}
        {/* new Component(title) */}
        <Content changeTitle={this.changeTitle} title="cool component" />
        <Content changeTitle={this.changeTitle} title="🍕 component" />
        <Content changeTitle={this.changeTitle} title="Happy component" />
      </div>
    )
  }
}

export default App
