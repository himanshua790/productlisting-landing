import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import theme from "./components/styles/theme.jsx";
import "./index.css";
import ProductPage from "./routes/product.jsx";
import PrivateRoutes from "./components/PrivateRoute.jsx";
import Login from "./routes/Login";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<App />} />
            <Route path="/product" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </StrictMode>
  </ThemeProvider>
);
