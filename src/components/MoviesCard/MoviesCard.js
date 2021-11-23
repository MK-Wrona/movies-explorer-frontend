import './MoviesCard.css';
import { Route, useHistory, Switch, Redirect, Link  } from 'react-router-dom';

function MoviesCard({ movie, onLikeClick, checkLikeStatus}) {

const { nameEN, duration, image, trailer } = movie;

    const isLiked = checkLikeStatus(movie);
    const durationConverter = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? hours + "ч" : ""}${minutes}м`;
    };

    function handleBookmarkClick() {
        onLikeClick(movie, isLiked);
    }



    return (
        <Switch>
        <article className="movies-card">
            <div className="movies-card__info-box">
                <div className="movie-card__info">
                    <h3 className="movies-card__title">{nameEN}</h3>
                    <p className="movies-card__time">
                        {durationConverter(duration)}
                    </p>
                </div>
                <Route exact path="/saved-movies">
                <button
                    className="movies-card__delete-button"
                    type="button"
                    aria-label="Bookmark Button"
                    onClick={handleBookmarkClick}
                ></button>
                </Route>
                <Route exact path="/movies">
                    { isLiked ? (<button
                    className="movies-card__like-button_active"
                    type="button"
                    aria-label="Bookmark Button"
                    onClick={handleBookmarkClick}
                ></button>) : (<button
                    className="movies-card__like-button"
                    type="button"
                    aria-label="Bookmark Button"
                    onClick={handleBookmarkClick}
                ></button>)

                    }
                
                </Route>
            </div>
            <a href={trailer} target="_blank" rel="noopener noreferrer">
                <img className="movies-card__image" src={image} alt={nameEN} />
            </a>
        </article>
        </Switch>
    )
}

export default MoviesCard;