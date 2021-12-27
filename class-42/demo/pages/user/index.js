import { VStack, Box, Text, Link } from '@chakra-ui/react';
import React from 'react'

export default function index(props) {
  console.log(props);
  return (
    <div>
      <VStack
        spacing={4}
        align='stretch'
      >
        {
          props.users.map(user => {
            return (
              <Box key={user.id}>
                <Text>
                  <Link href={`/user/${user.id}`}>{user.name}</Link>
                </Text>
              </Box>)
          })
        }
      </VStack>
    </div >
  )
}

// This function gets executed only on build 
// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const finalResponse = await response.json();
//   return {
//     props: { users: finalResponse }
//   }
// }

// the difference here is that you will always get the newest data
// this function is executed on every request for this page
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const finalResponse = await response.json();
  return {
    props: { users: finalResponse }
  }
}