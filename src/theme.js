import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff",
    },
    secondary: {
      main: "#00ff00", 
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
    MuiCharacterDetail: {
      styleOverrides: {
        root: {
          backgroundImage: "url('/space-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "100vh",
          paddingTop: "32px",
          paddingBottom: "32px",
          color: "#fff",
        },
        container: {
          maxWidth: 900,
        },
        detailBox: {
          backgroundColor: "#111",
          padding: "32px",
          borderRadius: 16,
          boxShadow: "0 0 20px #00ffcc",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
        },
        avatar: {
          width: 240,
          height: 240,
          border: "4px solid #00ffcc",
        },
        infoBox: {
          flexGrow: 1,
          minWidth: 280,
        },
        episodesSection: {
          marginTop: 32,
          padding: 24,
          backgroundColor: "#222",
          borderRadius: 8,
        },
        episodesTitle: {
          color: "#00ffcc",
          marginBottom: 16,
        },
        episodeText: {
          marginBottom: 8,
          color: "#ccc",
        },
        buttonMarginTop: {
          marginTop: 8,
        },
        btnContainer: {
          marginTop: 32,
          display: "flex",
          justifyContent: "center",
        },
        modalPaper: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "#111",
          border: "2px solid #00ffcc",
          borderRadius: 8,
          boxShadow: 24,
          padding: 24,
          color: "#fff",
        },
        modalHeader: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        },
        modalTitle: {
          color: "#00ffcc",
        },
      },
    },
  },
});

export default theme;
