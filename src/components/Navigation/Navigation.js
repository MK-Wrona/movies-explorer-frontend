import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';



function Navigation({ loggedIn, isHeaderColored}) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }


  

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <div className="navigation__desktop-menu">
            <NavLink className="navigation__site-link"  to="/movies">Фильмы</NavLink>
            <NavLink className="navigation__site-link"  to="/saved-movies">Сохранённые фильмы</NavLink>
            <div className="navigation__user-profile_logo-box">
            <Link className="navigation__user-profile" to="/profile">Аккаунт</Link>
            <div className="navigation__user-profile_logo" /><div/>
            
            </div>
          </div>

          <button className={`navigation__menu-open ${isHeaderColored ? "navigation__menu-open_white" : ""}`} onClick={handleMenuOpen} type="button"></button>
        </>
      ) : (
        <>
          <Link className={`navigation__user-register ${isHeaderColored ? "navigation__user-register_white" : ""}`} to="/signup">Регистрация</Link>
          <Link className="navigation__user-login" to="/signin">Войти</Link>
        </>
      )}

      <div className={`navigation__mobile-menu mobile-menu ${isMenuOpen ? "mobile-menu_is-open" : ""}`}>
        <div className="mobile-menu__links">
          <button className="mobile-menu__close" onClick={handleMenuClose} type="button"></button>
          <div className="mobile-menu__links-flex">
          <NavLink className="mobile-menu__site-link"  exact to="/" onClick={handleMenuClose}>Главная</NavLink>
          <NavLink className="mobile-menu__site-link"  to="/movies" onClick={handleMenuClose}>Фильмы</NavLink>
          <NavLink className="mobile-menu__site-link"  to="/saved-movies" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          
          <div className="navigation__user-profile-flex">
          <NavLink className="navigation__user-profile" exact to="/profile" onClick={handleMenuClose}>Аккаунт</NavLink>
            <div className="navigation__user-profile_logo" ></div>
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;