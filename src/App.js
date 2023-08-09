import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import Home from "./pages/Home";
import Event from "./pages/Event";

import Header from "./components/Header";

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/event/:id">
              <Event />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
