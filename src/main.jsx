import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import theme from "./components/styles/theme.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./routes/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
);
