import React, { useEffect, useState, useContext } from "react";
import Homework from "./Homework";
import ModalForm from "./ModalForm";
import Add from "./Add";
import NightMode from "../context/NightMode";
import ModalContext from "../context/ModalContext";
import CrudContext from "../context/CrudContext";
const initialForm = {
  title: "",
  activity: "",
  id: null,
  completed: false,
};
const Main = () => {
  const [form, setForm] = useState(initialForm);
  const { setModal, modal } = useContext(ModalContext);
  const { db, createHomework, dataToEdit, updateHomework } =
    useContext(CrudContext);

  useEffect(() => {
    if (dataToEdit) {
      setModal(true);
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit, setModal]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.activity) {
      alert("Completar el formulario");
      return;
    }
    if (form.id === null) {
      createHomework(form);
    } else {
      updateHomework(form);
    }
    setModal(!modal);
  };
  const cancel = () => {
    setModal(false);
    setForm(initialForm);
  };
  const { nightMode } = useContext(NightMode);

  return (
    <div className="main">
      <div className="main__container container">
        <Add db={db} setForm={setForm} initialForm={initialForm} />
        {db.length !== 0 ? (
          db.map((item) => <Homework key={item.id} item={item} />)
        ) : (
          <h4
            className={
              nightMode ? "main__homeworkTextDay" : "main__homeworkTextNight"
            }
          >
            No hay tareas
          </h4>
        )}
      </div>
      <ModalForm>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label htmlFor="tarea" className="modal__title">
            <input
              type="text"
              id="tarea"
              name="title"
              value={form.title}
              className="modal__inputTitle"
              onChange={handleChange}
              placeholder="Titulo de la tarea..."
            />
          </label>
          <label htmlFor="activity" className="modal__activity">
            <textarea
              onChange={handleChange}
              className="modal__inputActivity"
              name="activity"
              value={form.activity}
              placeholder="Actividad a realizar..."
              id="activity"
              cols="20"
              rows="10"
            ></textarea>
          </label>
          <div className="modal__buttonContainer">
            <input type="submit" value="Aceptar" className="modal__btnSubmit" />
            <button className="modal__buttonCancel" onClick={cancel}>
              Cancelar
            </button>
          </div>
        </form>
      </ModalForm>
    </div>
  );
};

export default Main;
