import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

import Home from "./pages/Home";
import Event from "./pages/Event";

import Header from "./components/Header";
import Container from "./components/Container";
import Authentication from "./pages/Authentication";
import Events from "./pages/Events";
import EditEvent from "./pages/EditEvent";
import Admin from "./pages/Admin";
import MyPlans from "./pages/MyPlans";

export default function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/authentication">
              <Authentication />
            </Route>
            <Route path="/events">
              <Container>
                <Events />
              </Container>
            </Route>
            <Route path="/plans">
              <Container>
                <MyPlans />
              </Container>
            </Route>
            <Route path="/admin">
              <Container>
                <Admin />
              </Container>
            </Route>
            <Route path="/event/new">
              <Container>
                <EditEvent />
              </Container>
            </Route>
            <Route path="/event/:id">
              <Container>
                <Event />
              </Container>
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
