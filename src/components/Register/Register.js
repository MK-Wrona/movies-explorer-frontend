import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'
import logo from '../../images/logo_top.png'

function Register(){
    return (
            <section className="register">
                <div className="register__top">
                    <div className="register__top-container">
                    <img src={logo} className="register__logo" alt="Лого приложения"/>
                <p className="register__header-title">Добро пожаловать!</p>
                </div>
                    </div>
                    <form className="register__form">
                    <div className="register__input-box">
                    <label className="register__label">Имя</label>
                    <input className="register__input" placeholder="" minLength="2" maxLength="40"></input>
                    <span className="register__input-error"></span>
                    </div>
                    <div className="register__input-box">
                    <label className="register__label">E-mail</label>
                    <input className="register__input" placeholder="" minLength="2" maxLength="40"></input>
                    <span className="register__input-error"></span>
                    </div>
                    <div className="register__input-box">
                    <label className="register__label">Пароль</label>
                    <input className="register__input" placeholder="" minLength="2" maxLength="40"></input>
                    <span className="register__input-error"></span>
                    </div>
                    <button className="register__submit-button">Зарегистрироваться</button>
                    <p className="register__login">Уже зарегистрированы? <Link className="register__login-link" to="/signin"> Войти</Link></p>
                    </form>
                
            </section>
                
            
      );
}

export default Register;