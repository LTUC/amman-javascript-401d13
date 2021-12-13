import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export default function Theme(props) {

  const [mode, setMode] = useState('dark');
  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');
  const state = {
    mode: mode,
    toggleMode
  };

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}