import { createContext, useState } from "react";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
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
      let homeworkDelete = db.filter((item) => item.id !== id);
      setDb(homeworkDelete);
    }
  };
  const completeHomework = (data) => {
    data.complete = true;
  };

  const data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    createHomework,
    updateHomework,
    deleteHomework,
    completeHomework,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
