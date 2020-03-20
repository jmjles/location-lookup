import React from "react";
import { Typography as Font } from "@material-ui/core";
export default function Weather({ weather: { weather, temp }, style }) {
  return (
    <div id="weather" style={{ display: style }}>
      {
        !weather || !temp ? (
          <Font variant='caption'>Weather Not Available</Font>
        ):(
          <Font variant="caption">{weather} | {temp}&#176;</Font>
        )
      }
    </div>
  );
}
