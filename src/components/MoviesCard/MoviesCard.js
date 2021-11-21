import './MoviesCard.css';

function MoviesCard({ movie, onLikeClick, checkLikeStatus}) {

const { nameEN, duration, image, trailer } = movie;

    const isLiked = checkLikeStatus(movie);
    const durationConverter = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? hours + "ч" : ""}${minutes}м`;
    };

    const cardLikeButtonClassName = `movies-card__like-button ${
        isLiked ? "movies-card__like-button_active" : " "
    }`;

    function handleBookmarkClick() {
        onLikeClick(movie, isLiked);
    }



    return (
        <article className="movies-card">
            <div className="movies-card__info-box">
                <div className="movie-card__info">
                    <h3 className="movies-card__title">{nameEN}</h3>
                    <p className="movies-card__time">
                        {durationConverter(duration)}
                    </p>
                </div>
                <button
                    className={cardLikeButtonClassName}
                    type="button"
                    aria-label="Bookmark Button"
                    onClick={handleBookmarkClick}
                ></button>
            </div>
            <a href={trailer} target="_blank" rel="noopener noreferrer">
                <img className="movies-card__image" src={image} alt={nameEN} />
            </a>
        </article>
    )
}

export default MoviesCard;