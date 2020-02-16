import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core";
const theme = createMuiTheme({});
ReactDOM.render(
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById("root")
);
