import React, { useState } from "react";
import Homework from "./Homework";
import ModalForm from "./ModalForm";
import react from "react";
import Add from "./Add";
const initialForm = {
  title: "",
  activity: "",
  id: null,
  complete: false,
};
const Main = ({ db, setDb, createHomework }) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialForm);
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
    }
    setModal(!modal);
    // handleReset();
  };
  // const handleReset = (e) => {
  //   setForm(initialForm);
  // };
  return (
    <div className="main">
      <Add
        db={db}
        setModal={setModal}
        setForm={setForm}
        initialForm={initialForm}
      />
      <ModalForm modal={modal}>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label htmlFor="tarea" className="modal__title">
            Titulo
            <input
              type="text"
              id="tarea"
              name="title"
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
              id="activity"
              cols="20"
              rows="10"
            ></textarea>
          </label>
          <div className="modal__buttonContainer">
            <input type="submit" value="aceptar" className="modal__btnSubmit" />
            <button
              className="modal__buttonCancel"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </ModalForm>
    </div>
  );
};

export default Main;
