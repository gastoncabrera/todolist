import React from "react";

const ModalForm = ({ children, modal }) => {
  return (
    <div className={!modal ? "modal desactive" : " modal"}>
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default ModalForm;
