import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./sass/page/home.scss";

const inicialDb = [
  {
    id: 1,
    title: "tarea 1",
    activity: "limpiar",
    complete: false,
  },
  {
    id: 2,
    title: "tarea 2",
    activity: "actualizar la base de datos de la aplicacion",
    complete: false,
  },
];
function App() {
  const [db, setDb] = useState(inicialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createHomework = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateHomework = (data, id) => {};
  const deleteHomework = () => {};
  const completeHomework = () => {};

  return (
    <>
      <Header />
      <Main
        db={db}
        setDb={setDb}
        createHomework={createHomework}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
    </>
  );
}

export default App;
