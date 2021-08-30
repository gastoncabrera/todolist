import React from "react";
import App from "../App";
import { NightModeProvider } from "../context/NightMode";

const Home = () => {
  return (
    <div>
      <NightModeProvider>
        <App />
      </NightModeProvider>
    </div>
  );
};

export default Home;
