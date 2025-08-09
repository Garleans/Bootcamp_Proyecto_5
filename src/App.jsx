import { HashRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

const basename = import.meta.env.MODE === "production" ? "/Bootcamp_Proyecto_5" : "";

function App() {
  return (
    <Router basename={basename}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <AppRoutes />
      </Box>
    </Router>
  );
}

export default App;
