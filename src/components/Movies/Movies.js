import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';



function Movies() {
    const like= "movies-card__like"
    const dislike= "movies-card__dislike"
    return (
        <section className="movies">
            
            <SearchForm />

            <MoviesCardList
                like={like}
                dislike={dislike}
                
            />
            
        </section>
    )
}

export default Movies;