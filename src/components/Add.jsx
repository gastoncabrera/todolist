import React, { useContext } from "react";
import ModalContext from "../context/ModalContext";

const Add = ({ setForm, initialForm }) => {
  const { setModal } = useContext(ModalContext);
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
