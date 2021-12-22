import React from 'react';
import { Button, Grid, GridItem, Box, Text, Image } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { get, add, remove } from '../redux-toolkit-store/simpsons.store';
const Characters = () => {

  const { simpsons } = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <>
      <Box p={'5'}>
        <Button colorScheme={'yellow'} onClick={() => dispatch(get())}>
          Get Simpsons Character
        </Button>
      </Box>
      <Grid
        templateRows='repeat(5, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={'5'}
      >
        {
          simpsons.map((simpson, index) => {
            return (
              <GridItem key={index} colSpan={1}>
                <Text>
                  {simpson.character}
                </Text>
                <Image w={'50%'} src={simpson.image} />
                <Text>
                  {simpson.quote}
                </Text>
                <Button colorScheme={'red'} onClick={() => dispatch(remove(simpson))}>
                  Remove Character
                </Button>
              </GridItem>
            )
          })
        }
      </Grid>
    </ >
  )

};

export default Characters;