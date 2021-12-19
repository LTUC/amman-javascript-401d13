import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/votes';

function Votes(props) {
  return (
    <section className="counter">
      <ul>
        {props.counter.candidates.map(person => {
          return (<li onClick={() => props.increment(person.name)} key={person.name}>{person.name} - {person.votes}</li>)
        })

        }
      </ul>
      <button onClick={() => props.reset()}>Reset Store</button>
    </section >
  )
}

const mapStateToProps = state => ({
  counter: state.counter
});


// short hand version
const mapDispatchToProps = { increment, decrement, reset };

// basically we are doing this with the shorthand
// const mapDispatchToProps = ({
//   increment: () => dispatch(increment()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Votes);