import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { SettingContext } from '../context/Site';
import { Switch } from '@blueprintjs/core';

export default function Content() {
  const site = useContext(SettingContext); // SettingsContext.Consumer
  const theme = useContext(ThemeContext); // ThemeContext.Consumer 
  return (
    <div>
      <h2>Here is some amazing content</h2>
      <>
        <h2>{site.title}</h2>
        <div>
          These are some words ...
        </div>
        <Switch checked={theme.mode === 'dark'} label="Change Theme" onChange={theme.toggleMode} />
      </>
      <div>
        <h2>Current Mode {theme.mode}</h2>
      </div>
    </div>
  )
}

