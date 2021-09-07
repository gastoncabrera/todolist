import { createContext, useState } from "react";
import { toast } from "react-toastify";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createHomework = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    toast("Tarea agregada", {
      position: "top-center",
      type: "success",
      autoClose: 1500,
    });
  };
  const updateHomework = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    toast("Tarea editada", {
      position: "top-center",
      type: "success",
      autoClose: 1500,
    });
  };
  const deleteHomework = (id) => {
    let confirmDelete = window.confirm("Desea Eliminar esta tarea");
    if (confirmDelete) {
      let homeworkDelete = db.filter((item) => item.id !== id);
      setDb(homeworkDelete);
      toast("Tarea eliminada", {
        position: "top-center",
        type: "error",
        autoClose: 1500,
      });
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
