import React from 'react';

export const ThemeContext = React.createContext();

function Theme(props) {

  const state = {
    mode: 'dark'
  };

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Theme;