import React, { useState } from 'react';
import { Center, Button, VStack, Text } from '@chakra-ui/react';

export default function StateCounter() {

  const [pizzaSlices, setPizzaSlices] = useState(0);
  const [totalPizzaSlices, setTotalPizzaSlices] = useState(0);
  const [racoonHappyState, setRacoonHappyState] = useState(0);
  const [racoonSadState, setRacoonSadState] = useState(0);

  const handleEatenPizzas = () => {
    setPizzaSlices(pizzaSlices + 1);
    setTotalPizzaSlices(totalPizzaSlices + 1);
    setRacoonHappyState(racoonHappyState + 1);
  };

  const handleGonePizzas = () => {
    setPizzaSlices(pizzaSlices - 1);
    setRacoonSadState(racoonSadState + 1);
  };


  return (
    <Center bg='#267fb5' h='100vh' color='white'>
      <VStack
        spacing={4}
      >
        <Text fontSize='6xl'> 🦝 🍕 Counter!</Text>
        <Button fontSize='2xl' onClick={() => handleEatenPizzas()} colorScheme='green'>😋</Button>
        <Text fontSize='2xl'>🍕 slices #️⃣ {pizzaSlices}</Text>
        <Text fontSize='2xl'> Total 🍕 eaten {totalPizzaSlices}</Text>
        <Button fontSize='2xl' onClick={() => handleGonePizzas()} colorScheme='red'>💩</Button>
        <Text fontSize='2xl'> 🦝 🙂 {racoonHappyState}</Text>
        <Text fontSize='2xl'> 🦝 :( {racoonSadState}</Text>
      </VStack>
    </Center>
  )
}
