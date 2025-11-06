import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif'
  }
});

export default theme;
