import { useState, createContext } from "react";
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
import Profile from "./pages/Profile";

const UserContext = createContext("");

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "");
  const [colorScheme, setColorScheme] = useState(localStorage.getItem("theme") || "light");

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <UserContext.Provider value={user}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <Router>
            <Header />
            <Switch>
              <Route path="/authentication">
                <Authentication setUser={setUser} />
              </Route>
              <Route path="/events">
                <Container>
                  <Events />
                </Container>
              </Route>
              <Route path="/profile">
                <Container>
                  <Profile />
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
    </UserContext.Provider>
  );
}

export { UserContext };
