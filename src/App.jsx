import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

const isGitHubPages = window.location.hostname.includes("github.io");

function App() {
  return (
    <Router basename={isGitHubPages ? "/Bootcamp_Proyecto_5" : "/"}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <AppRoutes />
      </Box>
    </Router>
  );
}

export default App;
