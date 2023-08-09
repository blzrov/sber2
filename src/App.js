import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import Home from "./pages/Home";
import Event from "./pages/Event";

import ButtonScheme from "./components/ButtonScheme";

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/event/1">Event</Link>
                </li>
                <li>
                  <ButtonScheme />
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/event/:id">
                <Event />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
