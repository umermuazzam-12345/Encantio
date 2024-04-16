import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
