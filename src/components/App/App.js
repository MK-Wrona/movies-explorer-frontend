import React from 'react';

import { Route,  Switch } from 'react-router-dom';
import './App.css';
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'


function App() {
  const [isLoggedIn] = React.useState(true); // поменять на false/true для того чтобы свичнуть хедеры
  return (
    <div className="page">
      <div className="page_container">
      <Header isLoggedIn={isLoggedIn} />
        
        <Route exact path="/">
              <Main />
            </Route>
            <Route path='/profile'> <Profile/></Route>
      <Switch>
      <Route path='/movies'>
          <Movies/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
            
          /></Route>
      <Route path='/signup'> <Register/>
      </Route>
      <Route path='/signin'> <Login/>
      </Route>
      <Route path='/err'>
      <Page404/>
            </Route>
      </Switch>
      <Footer/>

      </div>
    </div>
  );
}

export default App;
