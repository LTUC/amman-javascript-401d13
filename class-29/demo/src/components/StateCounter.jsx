import React, { useState } from 'react';
import { Center, Button, VStack, Text } from '@chakra-ui/react'

export default function StateCounter() {

  const [counter, setCounter] = useState(0);

  return (
    <Center bg='white' h='100vh' color='white'>
      <VStack
        spacing={4}
      >
        <Text color="black" fontSize='6xl'>Pizza eaten Counter!</Text>
        <Button onClick={() => setCounter(counter + 1)} colorScheme='blue'>Increment</Button>
        <Text color="black">{counter} pizza's eaten</Text>
        <Button onClick={() => setCounter(counter - 1)} colorScheme='red'>Decrement</Button>
      </VStack>
    </Center>
  )
}
