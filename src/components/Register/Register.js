import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'
import logo from '../../images/top_logo.svg'
import  useFormValidation  from '../../hooks/useFormValidation';

function Register({ onRegister, apiResponseMessage }){

    const { values, errors, isValid, handleChange, resetForm } =
        useFormValidation({});

        function handleOnSubmit(evt) {
            evt.preventDefault();
            onRegister(values);
            resetForm();
        }

    return (
            <section className="register">
                <div className="register__top">
                    <div className="register__top-container">
                    <img src={logo} className="register__logo" alt="Лого приложения"/>
                <p className="register__header-title">Добро пожаловать!</p>
                </div>
                    </div>
                    <form className="register__form" onSubmit={handleOnSubmit}>
                    <div className="register__input-box">
                    <label className="register__label">Имя
                    <input className={`register__input ${
                            errors.name && "register__input_invalid"
                        }`}
                        name="name"
                        type="text"
                        placeholder="Имя"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.name || ""}></input>
                    <span className="register__input-error">{errors.name}</span>
                    </label>
                    </div>
                    <div className="register__input-box">
                    <label className="register__label">E-mail
                    <input className={`register__input ${
                            errors.email && "register__input_invalid"
                        }`}
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.email || ""}></input>
                    <span className="register__input-error">{errors.email}</span>
                    </label>
                    </div>
                    <div className="register__input-box">
                    <label className="register__label">Пароль
                    <input className={`register__input ${
                            errors.password && "register__input_invalid"
                        }`}
                        name="password"
                        type="password"
                        minLength="8"
                        placeholder="Пароль"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                        value={values.password || ""}></input>
                    <span className="register__input-error">{errors.password}</span>
                    </label>
                    </div>
                    <span className="register__input-error">{apiResponseMessage}</span>
                    <button type="submit"
                    className={`register__submit-button_disable ${
                        isValid && "register__submit-button"
                    }`}
                    disabled={!isValid}>Зарегистрироваться</button>
                    <p className="register__login">Уже зарегистрированы? <Link className="register__login-link" to="/signin"> Войти</Link></p>
                    </form>
                
            </section>
                
            
      );
}

export default Register;