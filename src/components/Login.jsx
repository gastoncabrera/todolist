import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import NightMode from "../context/NightMode";

const inicialLogin = {
  userLogin: "",
};

const Login = (props) => {
  const { nightMode } = useContext(NightMode);
  const [form, setForm] = useState(inicialLogin);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    props.history.push("/");
  };
  const handleChangeLogin = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleResetLogin = () => {};

  return (
    <>
      <div
        className={
          nightMode ? "todolist__login" : "todolist__login moonContainer"
        }
      >
        <Link to="/" className={nightMode ? "home__login day" : "home__login"}>
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
          Volver al inicio
        </Link>
        <div className="form__container">
          <form className="form__login" onSubmit={handleSubmitLogin}>
            <label htmlFor="user" className="form__loginUser">
              Usuario
              <input
                type="user"
                id="user"
                name="userLogin"
                form={form.userLogin}
                onChange={handleChangeLogin}
                className="form__loginUserInput"
              />
            </label>
            <label htmlFor="password" className="form__loginPassword">
              Contraseña
              <input
                type="password"
                id="password"
                className="form__loginPasswordInput"
              />
            </label>
            <input type="submit" value="Iniciar" className="form__loginInput" />
            <Link to="/register" className="login__createUser">
              Crear usuario
            </Link>
            <div className="socialLink__loginContainer">
              <button className="socialLink google">
                <img
                  src="https://i.ibb.co/QjDZFsF/google-Icon-removebg-preview-1.png"
                  className="socialLink__icon"
                />
                Iniciar con Google
              </button>
              <button className="socialLink facebook">
                <img
                  src="https://i.ibb.co/CzGmwKY/Facebook-Icon-removebg-preview.png"
                  className="socialLink__icon"
                />
                Iniciar con Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
