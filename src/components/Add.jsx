import React from "react";

const Add = ({ setModal, setForm, initialForm }) => {
  const add = () => {
    setModal(true);
    setForm(initialForm);
  };
  return (
    <div>
      <button className="main__addBtn" onClick={add}>
        Crear
      </button>
    </div>
  );
};

export default Add;
