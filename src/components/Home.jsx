import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NightModeProvider } from "../context/NightMode";
import { ModalProvider } from "../context/ModalContext";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

const Home = () => {

  return (
    <div>
      <Router>
        <Switch>
          <NightModeProvider>
            <ModalProvider>
              <Switch>
                <Route path="/" exact ><App /></Route>
                <Route path="/login" exact ><Login /></Route>
                <Route path="/register" exact><Register /></Route>
                <Route path="*"><NotFound /></Route>
              </Switch>
            </ModalProvider>
          </NightModeProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
