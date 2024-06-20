// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import RewardsPage from "./Components/Pages/RewardsPage";
import HomePage from "./Components/Pages/HomePage";
import Layout from "./Components/Common/Layout";
import Loader from "./Components/Pages/Loader";
import LightTheme from "./Components/Theme/LightTheme";
import DarkTheme from "./Components/Theme/DarkTheme";
import CardDetail from "./Components/Pages/CardDetalis";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const toggleTheme = () => {
    setUseDarkTheme(!useDarkTheme);
  };

  console.log("useDarkTheme:",useDarkTheme);
  // theme={useDarkTheme ? darkTheme : Theme}
  return (
    <MuiThemeProvider  theme={useDarkTheme ? DarkTheme : LightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout  toggleTheme={toggleTheme} useDarkTheme={useDarkTheme} >
          <Routes>
            <Route path="/" element={<HomePage useDarkTheme={useDarkTheme} />} />
            <Route path="/point-calculator" element={<RewardsPage useDarkTheme={useDarkTheme} />} />
            <Route path="/Refrence" element={<Loader />} />
            <Route path="/Card-details" element={<CardDetail useDarkTheme={useDarkTheme}  />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
