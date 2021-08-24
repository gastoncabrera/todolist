import React from "react";
import { useEffect } from "react";
import Homework from "./Homework";

const Add = ({ db, setModal, setForm, initialForm }) => {
  const add = () => {
    setModal(true);
    setForm(initialForm);
  };
  return (
    <div className="main__container container">
      <button className="main__addBtn" onClick={add}>
        Crear
      </button>
      {db.map((item) => (
        <Homework key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Add;
