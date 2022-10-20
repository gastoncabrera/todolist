import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NightMode from "../context/NightMode";

const register = {
  email: '',
  password: '',
  userName: ''
}

const Register = () => {
  let history = useHistory();
  const [form, setForm] = useState(register)
  const [error, setError] = useState(null)
  const { nightMode } = useContext(NightMode);
  const [loading, setLoading] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null)
    setLoading(true)
    try {
      fetch("https://evening-brook-24489.herokuapp.com/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 'ABC1234'
        },
        body: JSON.stringify(form)
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setError(data.message)
          } else {
            try {
              fetch("https://evening-brook-24489.herokuapp.com/auth/login", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Auth': 'ABC1234'
                },
                body: JSON.stringify({
                  email: form.email,
                  password: form.password
                })
              })
                .then((response) => response.json())
                .then((data) => {
                  if (!data.user) {
                    setError(data.message)
                  } else {
                    sessionStorage.setItem('JWT', data.access_token)
                    localStorage.setItem('username', data?.user.userName)
                    localStorage.setItem('id', data?.user._id)
                    history.push("/")
                    setLoading(false)
                  }
                }
                )
                .catch(err => { console.log(err); setLoading(false) })
            } catch (error) {
              setLoading(false)
              console.log(error)
            }
          }
        })
        .catch(err => console.log(err))
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div
      className={
        nightMode ? "todolist__register" : "todolist__register moonContainer"
      }
    >
      <div className="form__container">
        <form className="form__register" onSubmit={handleSubmit}>
          <label htmlFor="user" className="form__registerUser">
            Usuario
            <input type="user" required name="userName" onChange={handleChange} id="user" className="form__registerUserInput" />
          </label>
          <label htmlFor="email" className="form__registerEmail">
            Correo
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form__registerEmailInput"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="form__registerPassword">
            Contraseña
            <input
              type="password"
              name="password"
              required
              id="password"
              className="form__registerPasswordInput"
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            value="Crear usuario"
            className="form__registerSubmit"
          >{loading? 'Cargando...':'Crear Usuario'}</button>
          {
            !error ? <div></div> :
              <span style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}>
                {
                  error
                }
              </span>
          }
          <Link to="/login" className="register__createUser">
            Ya tengo usuario
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
