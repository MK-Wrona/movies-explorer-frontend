import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import film_1 from '../../images/film_1.png'
import film_2 from '../../images/film_2.png'
import like from '../../images/like.svg'
import dislike from '../../images/dislike.svg'


function MoviesCardList(props) {
    return (
        <section className="movies__card-list">
            <MoviesCard
                
                
                photo={film_1}
                button={like}
            />

            <MoviesCard
                
                photo={film_2}
                button={dislike}
            />

            
            <button tape="submit" className="search__more">Ещё</button>
        </section>
    )
}

export default MoviesCardList;