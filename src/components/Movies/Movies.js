import React, { useEffect, useState } from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";



function Movies({
    loggedIn,
    isLoading,
    onSubmitSearch,
    movies,
    setPreloader,
    moviesSearchResponse,
    toggleMovieLike,
    checkLikeStatus,
    sortShortMovies,
    isClicked
}) {
    const [shortMovies, setShortMovies] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isChecked) {
            setShortMovies(sortShortMovies(movies));
        }
    }, [isChecked]);

    return (
        <>
            
            <main>
                <SearchForm
                    handleSearch={onSubmitSearch}
                    setPreloader={setPreloader}
                    setIsChecked={setIsChecked}
                    isLoading={isLoading}
                    isClicked={isClicked}
                />
                <div className="movies">
                    {isLoading && <Preloader />}

                    {moviesSearchResponse
                        ? movies.length === 0 && (
                            <p className="movie__response">
                                {moviesSearchResponse}
                            </p>
                        )
                        : ""}
                        {isClicked ? (<p className="movie__response">
                                Нужно ввести ключевое слово
                            </p>): (<p className="movie__response">
                                
                            </p>)}

                    {isChecked &&
                        movies.length !== 0 &&
                        shortMovies.length === 0 && (
                            <p className="movie__response">
                                Среди фильмов нет короткометражек
                            </p>
                        )}

                    {movies.length !== 0 && (
                        <MoviesCardList
                            movies={isChecked ? shortMovies : movies}
                            toggleMovieLike={toggleMovieLike}
                            checkLikeStatus={checkLikeStatus}
                        />
                    )}
                </div>
            </main>
            
        </>
    );
}

export default Movies;