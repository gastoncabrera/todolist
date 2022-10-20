import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createHomework = async (item) => {
    const token = sessionStorage.getItem('JWT')
    const username = localStorage.getItem('username')
    try {
      setIsloading(true)
      await fetch('https://evening-brook-24489.herokuapp.com/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 'ABC1234',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...item,
          userName: username
        }),
      })
        .then(data => data.json())
      toast("Tarea agregada", {
        position: "top-center",
        type: "success",
        autoClose: 1500,
      })
      setIsloading(false)
    } catch (err) {
      console.error(err)
      setIsloading(false)
    }
  };

  const updateHomework = async (item) => {
    const token = sessionStorage.getItem('JWT')
    try {
      setIsloading(true)
      await fetch(`https://evening-brook-24489.herokuapp.com/task/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 'ABC1234',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(item),
      })
        .then(data => data.json());
      toast("Tarea editada", {
        position: "top-center",
        type: "success",
        autoClose: 1500,
      });
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
      console.error(error)
    }
  };
  const deleteHomework = async (id) => {
    let confirmDelete = window.confirm("Desea Eliminar esta tarea");
    if (confirmDelete) {
      const token = sessionStorage.getItem('JWT')
      try {
        setIsloading(true)
        await fetch(`https://evening-brook-24489.herokuapp.com/task/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Auth': 'ABC1234',
            'Authorization': `Bearer ${token}`
          },
        })
          .then((response) => response.json())
          .then(data => console.log(data));
        toast("Tarea eliminada", {
          position: "top-center",
          type: "error",
          autoClose: 1500,
        });
        setIsloading(false)
      } catch (error) {
        setIsloading(false)
        console.error(error)
      }
    }
  };
  const completedHomework = async (item) => {
    const username = localStorage.getItem('username')
    const token = sessionStorage.getItem('JWT')
    try {
      setIsloading(true)
      await fetch(`https://evening-brook-24489.herokuapp.com/task/${item._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 'ABC1234',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...item,
          userName: username
        }),
      })
        .then(data => data.json());
      if (item.completed === false) {
        toast("Tarea incompleta", {
          position: "top-center",
          type: "error",
          autoClose: 1500,
        });
        setIsloading(false)
      } else{
        toast("Tarea completa", {
          position: "top-center",
          type: "success",
          autoClose: 1500,
        }
        );
        setIsloading(false)
    }
    } catch (error) {
      setIsloading(false)
      console.error(error)
    }
  };

  // ---- Get User ---- 
  useEffect(() => {
    const token = sessionStorage.getItem('JWT')
    const username = localStorage.getItem('username')
    if (!token || !username) {
      window.location.replace(`/login`);
    } else {
      try {
        fetch(`https://evening-brook-24489.herokuapp.com/task/${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Auth': 'ABC1234',
            'Authorization': `Bearer ${token}`
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setDb(data)
          }
          );
      } catch (error) {
        console.error(error)
      }
    }
  }, [isLoading])


  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async()=>{
  //   const response = await fetch('https://thawing-island-38643.herokuapp.com/');
  //   const json = await response.json();
  //   setDb(json);
  // }, [db])

  const data = {
    db,
    setDb,
    dataToEdit,
    setDataToEdit,
    createHomework,
    updateHomework,
    deleteHomework,
    completedHomework,
    setIsloading
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
