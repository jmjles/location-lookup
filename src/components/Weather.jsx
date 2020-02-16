import React from 'react'
import {Typography as Font} from '@material-ui/core'
export default function Weather({weather:{name,weather,temp},style}) {
    return (
      <div id="weather" style={{display:style}}>
        <Font variant="h2">{name}</Font>
        <Font variant="caption">{weather}</Font>
        <Font variant="body1">{temp}&#176;</Font>
      </div>
    );
}
