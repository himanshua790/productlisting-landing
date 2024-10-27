import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#110606",
    },
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#B3B3B3",
    },
  },
  typography: {
    fontFamily: ["Inter", "Arial"].join(","),
    allVariants: {
      color: "#ffffff",
    },
    h3: {
      fontSize: "32px",
      lineHeight: "38.4px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#110606",
        },
      },
    },
  },
});

export default theme;
