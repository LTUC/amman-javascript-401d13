import React, { Component } from 'react'
import { connect } from 'react-redux';
import {get} from '../store/actions';

class ClassQuote extends Component {
  render() {
    return (
      <div>
        <h2>Class component {this.props.count}</h2>
        <button onClick={this.props.getQuote}>Get quote</button>
        <div>
          {
            this.props.items.map((item, idx) =>
              <div key={idx}>
                <img src={item.image} alt='' />
                <h3>{item.character}</h3>
                <p>{item.quote}</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.quote.count,
  items: state.quote.results
});

const mapDispatchToProps = dispatch => ({
  getQuote: () => dispatch(get())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassQuote);