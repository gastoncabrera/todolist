import React, { useState, useContext } from "react";
import CrudContext from "../context/CrudContext";
import NightMode from "../context/NightMode";

const Homework = ({ item }) => {
  const { setDataToEdit, completeHomework, deleteHomework } =
    useContext(CrudContext);
  const [description, setDescription] = useState(false);
  const [complete, setComplete] = useState(false);
  const { nightMode } = useContext(NightMode);
  const edit = (item) => {
    if (!item.complete) setDataToEdit(item);
    else {
      alert("No se puede editar una tarea completada");
    }
  };
  const completefunction = () => {
    completeHomework(item);
    setComplete(true);
  };
  return (
    <div
      className={
        complete ? "homework__container complete" : "homework__container"
      }
    >
      <div className="homework__titleContainer">
        <h4
          className={
            complete ? "homework__titleComplete" : "homework__titleIncomplete"
          }
          onClick={() => setDescription(!description)}
        >
          {item.title}
        </h4>
        <div className="homework__itemsContainer">
          <div className="homework__edit item" onClick={() => edit(item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </div>
          <div
            className="homework__check item"
            onClick={() => completefunction(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div
            className="homework__delete item"
            onClick={() => deleteHomework(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={
          description === false
            ? "homework_descriptionContainerDesactive"
            : "homework_descriptionContainerActive"
        }
      >
        <div
          className={
            nightMode
              ? "homework__descriptionDay"
              : "homework__descriptionNight"
          }
        >
          {item.activity}
        </div>
      </div>
    </div>
  );
};

export default Homework;
