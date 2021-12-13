import React, { useContext } from 'react';
import { SettingContext } from '../context/Site';
import { FormGroup, InputGroup } from '@blueprintjs/core';
export default function SiteForm() {
  const site = useContext(SettingContext);
  return (
    <FormGroup
      helperText="Change the title of the website"
      label="Title"
      labelFor="text-input"
      labelInfo="(required)"
    >
      <InputGroup id="text-input" placeholder="The site title" onChange={(e) => { site.changeTitle(e.target.value) }} />
    </FormGroup>
  )
}
