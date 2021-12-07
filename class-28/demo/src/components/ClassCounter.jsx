import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log('the component mounted!');
  }

  componentDidUpdate() {
    console.log(`You clicked ${this.state.counter} of times`);
  }

  componentWillUnmount() {
    console.log(`the component unmounted`);
  }



  increaseCount = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h1>
          Class based component Counter loaded
        </h1>

        <p>
          number of count {this.state.counter}
        </p>

        <button onClick={() => this.increaseCount()}>
          Click me to count
        </button>
      </div>
    )
  }
}

export default Counter
