import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css'
import logo from '../../images/top_logo.svg'

function Login(){
    return (
            <section className="register">
                <div className="register__top">
                    <div className="register__top-container">
                    <img src={logo} className="register__logo" alt="Лого приложения"/>
                <p className="register__header-title">Рады видеть!</p>
                </div>
                    </div>
                    <form className="register__form">
                    <div className="register__input-box">
                    <label className="register__label">E-mail</label>
                    <input className="register__input" placeholder=""></input>
                    <span className="register__input-error"></span>
                    </div>
                    <div className="register__input-box">
                    <label className="register__label">Пароль</label>
                    <input className="register__input" placeholder=""></input>
                    <span className="register__input-error"></span>
                    </div>
                    <button className="register__submit-button">Войти</button>
                    <p className="register__login">Еще не зарегистрированы? <Link className="register__login-link" to="/signup"> Регистрация</Link></p>
                    </form>
                
            </section>
                
            
      );
}

export default Login;