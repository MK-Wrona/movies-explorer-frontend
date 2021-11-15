import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <div className="movies-card">
            <div className="movies-card__info-box">
                <div className="movies-card__info">
                <h2 className="movies-card__title">Фильм</h2>
                <p className="movies-card__time">1h 30m</p>
                </div>
                <button className={props.like || props.deleteCard || props.dislike}></button>
            </div>
            <img src={props.photo} className="movies-card__image" alt="Промо фильма"/>
        </div>
    )
}

export default MoviesCard;