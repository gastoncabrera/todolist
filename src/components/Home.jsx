import React from "react";
import App from "../App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NightModeProvider } from "../context/NightMode";
import { ModalProvider } from "../context/ModalContext";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div>
      <Router>
        <Switch>
          <NightModeProvider>
            <ModalProvider>
              <Route path="/" exact component={App} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </ModalProvider>
          </NightModeProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
