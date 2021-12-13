import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function Theme(props) {

  const [mode, setMode] = useState('dark');

  const exportedValues = {
    mode
  };

  return (
    <ThemeContext.Provider value={exportedValues}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default Theme;