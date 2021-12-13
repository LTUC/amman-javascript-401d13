import React from 'react'

export const SettingContext = React.createContext();

export default function Site(props) {
  const state = {
    title: "My 🍕 Website",
    link: "pizzashots"
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider >
  )
}

