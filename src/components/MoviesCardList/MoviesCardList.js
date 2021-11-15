import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import film_1 from '../../images/film_1.png';
import film_2 from '../../images/film_2.png';



function MoviesCardList(props) {
    return (
        <section className="movies__card-list">
            <MoviesCard
                
                
                photo={film_1}
                like={props.dislike}
                dislike={""}
                deleteCard={props.deleteCard}
            />

            <MoviesCard
                
                photo={film_2}
                like={props.like }
                deleteCard={props.deleteCard}
            />
            <MoviesCard
                
                photo={film_2}
                like={props.like}
                deleteCard={props.deleteCard}
            />

            
            <button tape="submit" className="search__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;