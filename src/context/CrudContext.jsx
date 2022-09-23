import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createHomework = async (item) => {
    try{
      await fetch('https://thawing-island-38643.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( item ),
      })
      .then(data =>  data.json())
      toast("Tarea agregada", {
        position: "top-center",
        type: "success",
        autoClose: 1500,
      })
    }catch(err){
      console.error(err)
    }
  };

  const updateHomework = async (item) => {
    try {
      await fetch(`https://thawing-island-38643.herokuapp.com/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      })
      .then(data =>  data.json());
      toast("Tarea editada", {
        position: "top-center",
        type: "success",
        autoClose: 1500,
      });
    } catch (error) {
      console.error(error)
    }
  };
  const deleteHomework = async (id) => {
    let confirmDelete = window.confirm("Desea Eliminar esta tarea");
    if (confirmDelete) {
      try {
      await fetch(`https://thawing-island-38643.herokuapp.com/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(data =>  data.json());
      toast("Tarea eliminada", {
        position: "top-center",
        type: "error",
        autoClose: 1500,
      });
    } catch (error) {
      console.error(error)
    }
    }
  };
  const completedHomework = async(item) => {
    try {
      await fetch(`https://thawing-island-38643.herokuapp.com/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      })
      .then(data =>  data.json());
      if(item.completed === false){
        toast("Tarea incompleta", {
          position: "top-center",
          type: "error",
          autoClose: 1500,
        });
      }else
      toast("Tarea completa", {
        position: "top-center",
        type: "success",
        autoClose: 1500,
      });
    } catch (error) {
      console.error(error)
    }
  };
    // data.completed = true;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async()=>{
    const response = await fetch('https://thawing-island-38643.herokuapp.com/');
    const json = await response.json();
    setDb(json);
  }, [db])

  const data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    createHomework,
    updateHomework,
    deleteHomework,
    completedHomework,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
