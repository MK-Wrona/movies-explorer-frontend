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
    checkBookmarkStatus,
    sortShortMovies,
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
                />
                <div className="movies">
                    {isLoading && <Preloader />}

                    {moviesSearchResponse
                        ? movies.length === 0 && (
                            <p className="movie__response">
                                {moviesSearchResponse}
                            </p>
                        )
                        : movies.length === 0 && (
                            <p className="movie__response">
                                Нужно ввести ключевое слово
                            </p>
                        )}

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
                            checkBookmarkStatus={checkBookmarkStatus}
                        />
                    )}
                </div>
            </main>
            
        </>
    );
}

export default Movies;