import React, { useEffect, useState } from "react";
import Homework from "./Homework";
import ModalForm from "./ModalForm";
import Add from "./Add";
const initialForm = {
  title: "",
  activity: "",
  id: null,
  complete: false,
};
const Main = ({
  db,
  setDb,
  createHomework,
  dataToEdit,
  setDataToEdit,
  updateHomework,
  modal,
  setModal,
  completeHomework,
  deleteHomework,
  nightMode,
}) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      setModal(true);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

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

  return (
    <div className="main">
      <div className="main__container container">
        <Add
          db={db}
          setModal={setModal}
          setForm={setForm}
          initialForm={initialForm}
        />
        {db.length !== 0 ? (
          db.map((item) => (
            <Homework
              deleteHomework={deleteHomework}
              key={item.id}
              item={item}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
              updateHomework={updateHomework}
              completeHomework={completeHomework}
              nightMode={nightMode}
            />
          ))
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
      <ModalForm modal={modal}>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label htmlFor="tarea" className="modal__title">
            Titulo
            <input
              type="text"
              id="tarea"
              name="title"
              value={form.title}
              className="modal__inputTitle"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="activity" className="modal__activity">
            Que Hacer?
            <textarea
              onChange={handleChange}
              className="modal__inputActivity"
              name="activity"
              value={form.activity}
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
