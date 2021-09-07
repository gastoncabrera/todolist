import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NightMode from "../context/NightMode";

const Register = () => {
  const { nightMode } = useContext(NightMode);
  return (
    <div
      className={
        nightMode ? "todolist__register" : "todolist__register moonContainer"
      }
    >
      <Link to="/" className="home__register">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        volver al Home
      </Link>
      <div className="form__container">
        <form className="form__register">
          <label htmlFor="user" className="form__registerUser">
            Usuario
            <input type="user" id="user" className="form__registerUserInput" />
          </label>
          <label htmlFor="email" className="form__registerEmail">
            Correo
            <input
              type="email"
              id="email"
              className="form__registerEmailInput"
            />
          </label>
          <label htmlFor="password" className="form__registerPassword">
            Contraseña
            <input
              type="password"
              id="password"
              className="form__registerPasswordInput"
            />
          </label>
          <input
            type="submit"
            value="Crear usuario"
            className="form__registerSubmit"
          />
          <Link to="/login" className="register__createUser">
            Ya tengo usuario
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
