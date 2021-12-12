import React, { useContext } from 'react';
import { SettingContext } from '../context/Site';

export default function Footer() {
  const site = useContext(SettingContext);

  return (
    <footer>
      <p>
        Contact me through this

        <a href={site.link}>
          Link
        </a>
      </p>
    </footer>
  )
}
