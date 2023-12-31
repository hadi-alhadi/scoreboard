import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    h6: {
      fontFamily: "Poppins !important",
      fontSize: 14,
    },
    h4: {
      fontFamily: "Poppins !important",
      fontSize: 20,
    },
  },
});

export default theme;
