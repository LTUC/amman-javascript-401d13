import React, { Component } from 'react'

export class Content extends Component {
  super(props) {
    this.super(props);
  }
  render() {

    return (
      <div className="content">
        <h1>{this.props.title}</h1>
        <button onClick={() => this.props.changeTitle(this.props.title)}>Change Title</button>
      </div>
    )
  }
}

export default Content
