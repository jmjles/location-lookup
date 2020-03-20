import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import {
  CssBaseline,
  createMuiTheme,
  StylesProvider,
  MuiThemeProvider
} from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252628"
    },
    secondary: {
      main: "#598288"
    },
    background: {
      paper: "#DCE7E0",
      default: "#B7CBCA"
    },
    text: {
      primary: "#181C20"
    }
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById("root")
);
