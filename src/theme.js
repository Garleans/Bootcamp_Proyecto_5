import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff", // Celeste
    },
    secondary: {
      main: "#00ff00", // Verde Rick
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#00ff00",
    },
  },
  typography: {
    fontFamily: "'Orbitron', 'Roboto', sans-serif",
    h4: {
      color: "#00ffff",
      fontWeight: "bold",
    },
    h6: {
      color: "#ffffff",
    },
    body2: {
      color: "#ccc",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #00ff00",
          boxShadow: "0 0 10px #00ff00",
          backgroundColor: "#111",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          height: 300,
          width: "100%",
          cursor: "pointer",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 0 20px #00ffcc",
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 180,
          backgroundColor: "#111",
          objectFit: "contain",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 320,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#111",
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
        outlinedSecondary: {
          borderColor: "#00ff00",
          color: "#00ff00",
          "&:disabled": {
            borderColor: "rgba(0, 255, 0, 0.3)",
            color: "rgba(0, 255, 0, 0.3)",
          },
          "&:hover": {
            borderColor: "#00ffcc",
            color: "#00ffcc",
          },
        },
        containedPrimary: {
          backgroundColor: "#00ffff",
          color: "#000",
          "&:hover": {
            backgroundColor: "#00cccc",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#fff",
          },
          "& .MuiInputBase-input": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#00ffcc",
            },
            "&:hover fieldset": {
              borderColor: "#00ffcc",
            },
          },
        },
      },
    },
  },
});

export default theme;
