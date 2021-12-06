import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCount = () => {
    // the line below does not reflect the changes of the state value to the component 
    // this.state.counter += 1;
    // console.log(this.state.counter); // the state is change but its not being reflected

    // this setState update the value in the constructor and reflects the change to the render function
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Number of times Clicked {this.state.counter}!</p>
        <button onClick={this.incrementCount}>Click me ❗❗❗</button>
      </div>
    )
  }
}

export default App
