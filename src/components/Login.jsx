import React, { useContext, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import NightMode from "../context/NightMode";

const inicialLogin = {
  email: '',
  password: ''
};

const Login = (props) => {
  let history = useHistory();
  const { nightMode } = useContext(NightMode);
  const [error, setError] = useState(null)
  const [form, setForm] = useState(inicialLogin);
  const [loading, setLoading] = useState(false)

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      fetch("https://evening-brook-24489.herokuapp.com/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 'ABC1234'
        },
        body: JSON.stringify(form)
      })
        .then((response) => response.json())
        .then((data) => {
          if(!data.user) {
            setError(data.message)
          }else {
            sessionStorage.setItem('JWT', data.access_token)
            localStorage.setItem('username',data?.user.userName)
            localStorage.setItem('id',data?.user._id)
            setLoading(false)
            history.push("/")
          }
        }
        )
        .catch(err => {console.log(err);setLoading(false)})
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  const handleChangeLogin = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleResetLogin = () => { };

  return (
    <>
      <div
        className={
          nightMode ? "todolist__login" : "todolist__login moonContainer"
        }
      >
        <div className="form__container">
          <form className="form__login" onSubmit={handleSubmitLogin}>
            <label htmlFor="user" className="form__loginUser">
              Usuario
              <input
                type="email"
                id="user"
                required
                value={form.email}
                name={'email'}
                onChange={handleChangeLogin}
                className="form__loginUserInput"
              />
            </label>
            <label htmlFor="password" className="form__loginPassword">
              Contraseña
              <input
                type="password"
                id="password"
                required
                value={form.password}
                name={'password'}
                onChange={handleChangeLogin}
                className="form__loginPasswordInput"
              />
            </label>
            <button type="submit" className="form__loginInput">{loading?'Cargando...': 'Iniciar Sesion'}</button>
            {
              !error ? <div></div> :
                <span style={{ color: 'red', fontSize: '22px', textAlign: 'center' }}>{error}</span>
            }
            <Link to="/register" className="login__createUser">
              Crear usuario
            </Link>
            {/* <div className="socialLink__loginContainer">
              <button className="socialLink google">
                <img
                  alt="google"
                  src="https://i.ibb.co/QjDZFsF/google-Icon-removebg-preview-1.png"
                  className="socialLink__icon"
                />
                Iniciar con Google
              </button>
              <button className="socialLink facebook">
                <img
                  alt="facebook"
                  src="https://i.ibb.co/CzGmwKY/Facebook-Icon-removebg-preview.png"
                  className="socialLink__icon"
                />
                Iniciar con Facebook
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
