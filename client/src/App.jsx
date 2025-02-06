import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
