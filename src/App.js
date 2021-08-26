import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./sass/page/home.scss";

function App() {
  const [nightMode, setNightMode] = useState(true);
  const [modal, setModal] = useState(false);
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createHomework = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateHomework = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteHomework = (id) => {
    let confirmDelete = window.confirm("Desea Eliminar esta tarea");
    if (confirmDelete) {
      let homeworkDelete = db.filter((item) => item.id != id);
      setDb(homeworkDelete);
    }
  };
  const completeHomework = (data) => {
    data.complete = true;
  };

  return (
    <>
      <div className={nightMode ? "todolist" : "todolist moonContainer"}>
        <Header nightMode={nightMode} setNightMode={setNightMode} />
        <Main
          modal={modal}
          setModal={setModal}
          db={db}
          setDb={setDb}
          createHomework={createHomework}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateHomework={updateHomework}
          completeHomework={completeHomework}
          deleteHomework={deleteHomework}
          nightMode={nightMode}
        />
      </div>
    </>
  );
}

export default App;
