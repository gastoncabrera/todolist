import React, { useContext } from "react";
import ModalContext from "../context/ModalContext";

const ModalForm = ({ children }) => {
  const { modal } = useContext(ModalContext);
  return (
    <div className={!modal ? "modal desactive" : " modal"}>
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default ModalForm;
