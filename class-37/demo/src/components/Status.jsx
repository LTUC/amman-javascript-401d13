import { Container, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';

const Status = props => {

  return (
    <Container centerContent bg='black' p={5}>
      <Text fontSize='xl'>
        Total Number of Votes!
      </Text>
      <Text fontSize='lg'>
        {props.totalVotes}
      </Text>
    </Container>
  );
}

// We only care about one little bit of state in this component, for display only
const mapStateToProps = state => ({
  totalVotes: state.counter.totalVotes,
});

// Not doing any actions, so we'll not have to "mapDispatchToProps" here
export default connect(mapStateToProps)(Status);