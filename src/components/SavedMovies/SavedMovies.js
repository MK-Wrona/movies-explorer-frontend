import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';



function SavedMovies(props) {
    const deleteCard = "movies-card__delete";
    return (
        <section className="saved__movies">
            
            <SearchForm />

            <MoviesCardList
             deleteCard={deleteCard}
                
            />
            
        </section>
    )
}

export default SavedMovies;