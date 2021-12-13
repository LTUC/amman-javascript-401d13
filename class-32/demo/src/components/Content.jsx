import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { SettingContext } from '../context/Site';

export default function Content() {
  const site = useContext(SettingContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>Here is some amazing content</h2>
      <>
        <h2>{site.title}</h2>
        <div>
          These are some words ...
        </div>
      </>
      <div>
        <h2>Current Mode {theme.mode}</h2>
      </div>
    </div>
  )
}

