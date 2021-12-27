import React from 'react'

export default function id(props) {
  return (
    <div>
      <h1>
        My User Name: {props.user.name}
      </h1>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const finalResponse = await response.json();
  return {
    paths: finalResponse.map((user) => ({
      params: {
        id: user.id.toString()
      },
    })),
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const finalResponse = await response.json();
  return {
    props: { user: finalResponse }
  }
}
