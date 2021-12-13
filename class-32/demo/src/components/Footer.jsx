import React, { useContext } from 'react';
import { SettingContext } from '../context/Site';
import { Card, Elevation } from '@blueprintjs/core';


export default function Footer() {
  const site = useContext(SettingContext);

  return (
    <footer>

      <Card elevation={Elevation.TWO}>
        <p>&copy; 2021 {site.title}</p>
        Twitter <a href={`http://twitter.com/${site.link}`}>@{site.link}</a>
      </Card>
    </footer>
  )
}
