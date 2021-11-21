import React from 'react';
import './Header.css';
import logo from '../../images/top_logo.svg'
import { Route,  Switch,  Link, useLocation   } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {

  
    return (
        <Switch>
          <Route exact path="/">
            <header className="header header_colored"> 
              <div className="header__wrap">
                <Link to="/">
                  <img src={logo} alt="Логотип сайта" />
                </Link>
                <Navigation loggedIn={loggedIn} isHeaderColored={true} />
              </div>
            </header>
          </Route>
          <Route path="/(movies|saved-movies|profile)">
            <header className="header">
              <div className="header__wrap">
                <Link to="/">
                  <img src={logo} alt="Логотип сайта" />
                </Link>
                <Navigation loggedIn={loggedIn} isHeaderColored={false} />
              </div>
            </header>
          </Route>
        </Switch>
      );
  }
  export default Header;