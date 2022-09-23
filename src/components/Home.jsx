import React, { useEffect, useState } from "react";
import App from "../App";
import { HashRouter, Route, Switch } from "react-router-dom";
import { NightModeProvider } from "../context/NightMode";
import { ModalProvider } from "../context/ModalContext";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <NightModeProvider>
            <ModalProvider>
              <Route path="/" exact component={App} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </ModalProvider>
          </NightModeProvider>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Home;
