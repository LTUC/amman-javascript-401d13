import React from 'react';
import Content from './Content';
import './style.scss';
import useTitle from './hooks/title.hook';
export default function App() {

  const changeTitle = useTitle();

  return (
    <>
      <h1>
        Hello World form Function Based App 🍕!!!
      </h1>
      <Content changeTitle={changeTitle} title="cool component" />
      <Content changeTitle={changeTitle} title="🍕 component" />
      <Content changeTitle={changeTitle} title="Happy component" />
    </>
  );
}
