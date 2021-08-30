import React, { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { CrudProvider } from "./context/CrudContext";
import { ModalProvider } from "./context/ModalContext";
import NightMode from "./context/NightMode";
import "./sass/page/home.scss";

function App() {
  const { nightMode } = useContext(NightMode);
  return (
    <>
      <ModalProvider>
        <CrudProvider>
          <div className={nightMode ? "todolist" : "todolist moonContainer"}>
            <Header />
            <Main />
          </div>
        </CrudProvider>
      </ModalProvider>
    </>
  );
}

export default App;
