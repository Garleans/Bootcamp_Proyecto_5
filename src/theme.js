// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",   // Fondo negro
      paper: "#121212",
    },
    primary: {
      main: "#00ff00",      // Verde
    },
    secondary: {
      main: "#00ced1",      // Celeste
    },
    text: {
      primary: "#00ff00",
      secondary: "#00ced1",
    },
  },
});

export default theme;
