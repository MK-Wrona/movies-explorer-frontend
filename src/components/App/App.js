import React, { useEffect, useState } from "react";

import { Route,  Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
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
import { CurrentUserContext } from "../../context/currentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";






import { getMovies } from "../../utils/MoviesApi";
import {
    createProfile,
    login,
    getUser,
    updateProfile,
    createMovie,
    deleteMovie,
    getUserMovies,
} from "../../utils/MainApi";
import {
    EMAIL_ERROR,
    INVALID_DATA,
    AUTH_ERROR,
    SERVER_ERROR_MESSAGE,
    MOVIES_SERVER_ERROR_MESSAGE,
    MOVIES_404,
    SAVED_MOVIE_404,
    UPDATE_USER_MESSAGE_OK,
    IMAGE_NOT_FOUND,
} from "../../utils/resMessages";
import { SORTING_SHORT_FILM_TIMER } from "../../utils/constants";



function App() {
    const [currentUser, setCurrentUser] = useState({
        name: "",
        email: "",
    });
    const [loggedIn, setLoggedIn] = useState(false);
  
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponseMessage, setResponseMessage] = useState(" ");
    const [allMovies, setAllmovies] = useState([]);
    const [searchMoviesResult, setSearchMoviesResult] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [moviesSearchResponse, setMoviesSearchResponse] = useState("");
    const [savedMoviesSearchResponse, setSavedMoviesSearchResponse] =
        useState("");
    const history = useHistory();
    
    let location = useLocation().pathname;
    const [isSubmitted, setisSubmitted] = useState(false);

    const toggleSubmit = () => { 
        setisSubmitted(true);
      }
      const unToggleSubmit = () => { 
        setisSubmitted(false);
      } 
   


    function tokenCheck() {
        const token = localStorage.getItem("jwt");
        if (token) {
            getUser(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        
                        setCurrentUser(res);
                        history.push(location);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    localStorage.removeItem("token");
                    history.push("/");
                });
        }
    }

    function handleRegister({ name, email, password }) {
        createProfile(name, email, password)
            .then((res) => {
                if (res) {
                    handleLogin(email, password);
                    
                }
            })
            .catch((err) => {
                if (err === "Error 400") {
                    return showResMessage(INVALID_DATA);
                }
                if (err === "Error 409") {
                    return showResMessage(EMAIL_ERROR);
                }
                if (err === "Error 500") {
                    return showResMessage(SERVER_ERROR_MESSAGE);
                }
                console.log(err);
            });
    }

    function handleLogin(email, password) {
        login(email, password)
            .then((res) => {
                if (res.token) {
                    
                    localStorage.setItem("jwt", res.token);
                    setLoggedIn(true);
                    history.push("/movies");
                }
            })
            .catch((err) => {
                if (err === "Error 400") {
                    return showResMessage(INVALID_DATA);
                }
                if (err === "Error 401") {
                    return showResMessage(AUTH_ERROR);
                }
                if (err === "Error 500") {
                    console.log(SERVER_ERROR_MESSAGE);
                    return showResMessage(SERVER_ERROR_MESSAGE);
                }
                console.log(err);
            });
    }

    function handleUpdateUser(userData) {
        updateProfile(userData)
            .then((res) => {
                if (res) {
                    setCurrentUser({
                        ...currentUser,
                        name: res.newName,
                        email: res.newEmail,
                    });
                    showResMessage(UPDATE_USER_MESSAGE_OK);
                }
            })
            .catch((err) => {
                showResMessage(SERVER_ERROR_MESSAGE);
                console.log(err);
            });
    }

    function handleLogOut() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("movies");
        localStorage.removeItem("searchResult");
        setCurrentUser({ name: "", email: "" });
        setAllmovies([]);
        setSearchMoviesResult([]);
        setMoviesSearchResponse([]);
        setSavedMovies([]);
        setLoggedIn(false);
        history.push("/");
    }

    function showResMessage(error) {
        setResponseMessage(error);
        setTimeout(() => setResponseMessage(""), 8000);
    }

    function getBeatMovies() {
        setIsLoading(true);
        getMovies()
            .then((data) => {
                const moviesArray = data.map((item) => {
                    const imageURL = item.image
                        ? `https://api.nomoreparties.co${item.image.url}`
                        : IMAGE_NOT_FOUND;
                    const thumbnailURL = item.image
                        ? `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`
                        : IMAGE_NOT_FOUND;
                    const noAdaptedName = item.nameEN
                        ? item.nameEN
                        : item.nameRU;
                    const countryValue = item.country ? item.country : "none";
                    return {
                        country: countryValue,
                        director: item.director,
                        duration: item.duration,
                        year: item.year,
                        description: item.description,
                        image: imageURL,
                        trailer: item.trailerLink,
                        thumbnail: thumbnailURL,
                        movieId: item.id,
                        nameRU: item.nameRU,
                        nameEN: noAdaptedName,
                    };
                });
                localStorage.setItem("movies", JSON.stringify(moviesArray));
            })
            .catch((err) => {
                setMoviesSearchResponse(MOVIES_SERVER_ERROR_MESSAGE);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function getFavoriteMovies() {
        getUserMovies()
            .then((favouriteMovies) => {
                setSavedMovies(favouriteMovies);
            })
            .catch((error) => {
                setMoviesSearchResponse(MOVIES_SERVER_ERROR_MESSAGE);
                console.log(error);
            });
    }

    function search(data, keyword) {
        const result = data.filter((movie) => {
            return (
                movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
                movie.description.toLowerCase().includes(keyword.toLowerCase())
            );
        });
        if (result.length === 0 && location === "/movies") {
            setMoviesSearchResponse(MOVIES_404);
        }
        if (result.length === 0 && location === "/saved-movies") {
            setSavedMoviesSearchResponse(SAVED_MOVIE_404);
        }
        return result;
    }

    function sortShortMovies(movies) {
        const shortMoviesArray = movies.filter(
            (movie) => movie.duration <= SORTING_SHORT_FILM_TIMER
        );
        return shortMoviesArray;
    }

    function submitSearch(keyword) {
        getBeatMovies();
        setTimeout(() => setIsLoading(false), 1000);
        setSearchMoviesResult(search(allMovies, keyword));
        localStorage.setItem(
            "searchResult",
            JSON.stringify(search(allMovies, keyword))
        );
    }

    function submitFavoriteSearch(keyword) {
        setTimeout(() => setIsLoading(false), 2000);
        setSavedMovies(search(savedMovies, keyword));
    }

    function addMovie(movie) {
        createMovie(movie)
            .then((res) => {
                const newSavedMovie = res;
                setSavedMovies([...savedMovies, newSavedMovie]);
                console.log(res.message);
            })
            .catch((err) => console.log(err));
    }

    function removeMovies(movie) {
        const movieId = savedMovies.find(
            (item) => item.movieId === movie.movieId
        )._id;
        deleteMovie(movieId)
            .then((res) => {
                getFavoriteMovies();
                console.log(res.message);
            })
            .catch((err) => console.log(err));
            
    }

    function checkLikeStatus(movie) {
        
             return savedMovies.some(
                savedMovie => savedMovie.movieId === movie.movieId
                
            );    
                 
            
    }

    function toggleMovieLike(movie, isLiked) {
        isLiked ? removeMovies(movie) : addMovie(movie);
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            return;
        } else {
            Promise.all([getUser(token), getFavoriteMovies()])
                .then(([userData, favoriteMovieData]) => {
                    setCurrentUser({
                        ...currentUser,
                        name: userData.name,
                        email: userData.email,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [loggedIn]);

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (movies) {
            setAllmovies(movies);
            const searchResult = JSON.parse(
                localStorage.getItem("searchResult")
            );
            if (searchResult) {
                setSearchMoviesResult(searchResult);
            }
        } else {
            getBeatMovies();
        }
    }, [loggedIn]);

    useEffect(() => {
        tokenCheck();
    }, []);
  
  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page_container">
      <Header loggedIn={loggedIn}/>
        
      <Switch>
                    <Route exact path="/">
                        <Main loggedIn={loggedIn} />
                    </Route>

                    <Route path="/signup">
                    {loggedIn ? <Redirect to="/" /> :
                        <Register
                        onRegister={handleRegister}
                        apiResponseMessage={apiResponseMessage}
                        
                    />
                        }
                    </Route>

                    <Route path="/signin">
                        {loggedIn ? <Redirect to="/" /> :
                        <Login
                        onLogin={handleLogin}
                        apiResponseMessage={apiResponseMessage}
                    />
                        }
                        
                    </Route>
                    
                    <ProtectedRoute
                        path="/profile"
                        loggedIn={loggedIn}
                        component={Profile}
                        userData={currentUser}
                        apiResponseMessage={apiResponseMessage}
                        onEditProfile={handleUpdateUser}
                        onLogOut={handleLogOut}
                    />

                    <ProtectedRoute
                        path="/movies"
                        component={Movies}
                        loggedIn={loggedIn}
                        isLoading={isLoading}
                        onSubmitSearch={submitSearch}
                        sortShortMovies={sortShortMovies}
                        setPreloader={setIsLoading}
                        moviesSearchResponse={moviesSearchResponse}
                        movies={searchMoviesResult}
                        toggleMovieLike={toggleMovieLike}
                        checkLikeStatus={checkLikeStatus}
                        toggleSubmit={toggleSubmit}
                        isSubmitted={isSubmitted}
                        unToggleSubmit={unToggleSubmit}
                        
                    />

                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        isLoading={isLoading}
                        onSubmitSearch={submitFavoriteSearch}
                        sortShortMovies={sortShortMovies}
                        setPreloader={setIsLoading}
                        moviesSearchResponse={savedMoviesSearchResponse}
                        movies={savedMovies}
                        toggleMovieLike={toggleMovieLike}
                        checkLikeStatus={checkLikeStatus}
                        toggleSubmit={toggleSubmit}
                        isSubmitted={isSubmitted}
                        unToggleSubmit={unToggleSubmit}
                        
                    />

                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
      <Footer/>

      </div>
    </div>
    </CurrentUserContext.Provider>
    </>
  );
}

export default App;
