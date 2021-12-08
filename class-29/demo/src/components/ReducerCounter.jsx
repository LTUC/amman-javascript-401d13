import React, { useReducer } from 'react';
import { Center, Button, VStack, Text } from '@chakra-ui/react'

const initialState = {
  pizzaSlices: 0,
  totalPizzaSlices: 0,
  racoonHappyState: 0,
  racoonSadState: 0
};

const racoonReducer = (state = initialState, action) => {
  console.log('function dispatched 🚀 ', action);

  switch (action) {
    case 'increment':
      return handleIncrement(state); // we are returning a copy of the state with the updated Values

    case 'decrement':
      return handleDecrement(state); // we are returning a copy of the state with the updated Values

    default:
      return state; // we always return the state
  }
};

const handleIncrement = (state) => {

  return {
    ...state,
    pizzaSlices: state.pizzaSlices + 1,
    totalPizzaSlices: state.totalPizzaSlices + 1,
    racoonHappyState: state.racoonHappyState + 1
  }
}

const handleDecrement = (state) => {

  return {
    ...state,
    pizzaSlices: state.pizzaSlices - 1,
    racoonSadState: state.racoonSadState - 1
  }
}


export default function ReducerCounter() {

  const [racoonState, dispatch] = useReducer(racoonReducer, initialState);

  return (
    <Center bg='#267fb5' h='100vh' color='white'>
      <VStack
        spacing={4}
      >
        <Text fontSize='6xl'> 🦝 🍕 Counter!</Text>
        <Button fontSize='2xl' onClick={() => dispatch('increment')} colorScheme='green'>😋</Button>
        <Text fontSize='2xl'>🍕 slices #️⃣ {racoonState.pizzaSlices}</Text>
        <Text fontSize='2xl'> Total 🍕 eaten {racoonState.totalPizzaSlices}</Text>
        <Button fontSize='2xl' onClick={() => dispatch('decrement')} colorScheme='red'>💩</Button>
        <Text fontSize='2xl'> 🦝 🙂 {racoonState.racoonHappyState}</Text>
        <Text fontSize='2xl'> 🦝 :( {racoonState.racoonSadState}</Text>
      </VStack>
    </Center>
  )
}
