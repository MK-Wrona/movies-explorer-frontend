import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css'
import logo from '../../images/top_logo.svg'
import useFormValidation from "../../hooks/useFormValidation";

function Login({ onLogin, apiResponseMessage }){

    const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

function handleOnSubmit(evt) {
    evt.preventDefault();
    onLogin(values.email, values.password);
    
}
    return (
            <section className="login">
                <div className="login__top">
                    <div className="login__top-container">
                    <Link to="/">
                <img src={logo} className="login__logo" alt="Лого приложения"/>
                </Link>
                <p className="login__header-title">Рады видеть!</p>
                </div>
                    </div>
                    <form className="login__form" onSubmit={handleOnSubmit}>
                    <div className="login__input-box">
                    <label className="login__label">E-mail
                    <input className={`login__input ${
                            errors.email && "login__input_invalid"
                        }`}
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.email || ""}></input>
                    <span className="login__input-error">{errors.email}</span>
                    </label>
                    </div>
                    <div className="login__input-box">
                    <label className="login__label">Пароль
                    <input className={`login__input ${
                            errors.password && "login__input_invalid"
                        }`}
                        name="password"
                        type="password"
                        minLength="8"
                        placeholder="Пароль"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.password || ""}></input>
                    <span className="login__input-error">{errors.password}</span>
                    </label>
                    </div>
                    <button type="submit"
                    className={`login__submit-button_disable ${
                        isValid && "login__submit-button"
                    }`}
                    disabled={!isValid}>Войти</button>
                    <p className="login__register">Еще не зарегистрированы? <Link className="login__register-link" to="/signup"> Регистрация</Link></p>
                    </form>
                
            </section>
                
            
      );
}

export default Login;