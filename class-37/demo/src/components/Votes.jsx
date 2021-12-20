import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/votes';
import { Button, Stack, Box, Text, Container } from '@chakra-ui/react'

function Votes(props) {
  return (
    <Container centerContent>
      <Stack>
        {props.counter.candidates.map(person => {
          return (
            <Box key={person.name}>
              <Text>
                {person.name} - {person.votes}
              </Text>
              <Button
                colorScheme='yellow'
                onClick={() => props.increment(person.name)}
              >
                Vote!
              </Button>
            </Box>
          )
        })

        }
      </Stack>
      <Box m={2}>
        <Button
          colorScheme='red'
          onClick={() => props.reset()}>
          Reset Store
        </Button>
      </Box>
    </Container>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
});


// short hand version
const mapDispatchToProps = { increment, decrement, reset };

// basically we are doing this with the shorthand
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Votes);