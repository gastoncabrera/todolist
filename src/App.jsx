import React, { useContext,useEffect,useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { CrudProvider } from "./context/CrudContext";
import NightMode from "./context/NightMode";
import "./sass/page/home.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { nightMode } = useContext(NightMode);

  return (
    <>
      <CrudProvider>
        <div className={nightMode ? "todolist" : "todolist moonContainer"}>
          <Header />
          <Main />
        </div>
      </CrudProvider>
      <ToastContainer />
    </>
  );
}

export default App;
