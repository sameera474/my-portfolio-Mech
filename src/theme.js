import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Main blue color
    secondary: { main: "#f50057" }, // Pink color
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: "bold" },
    h2: { fontSize: "2rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
  },
});

export default theme;
