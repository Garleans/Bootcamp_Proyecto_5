import { HashRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <AppRoutes />
      </Box>
    </Router>
  );
}

export default App;
