import React, { useState } from 'react';

export const SettingContext = React.createContext();

export default function Site(props) {
  const [title, setTitle] = useState('My 🍕 Website')
  const [link, setLink] = useState('pizzashots')
  const state = {
    title: title,
    link: link,
    changeTitle: setTitle,
    changeLink: setLink

  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider >
  )
}

