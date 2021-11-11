import './FilterCheckbox.css'
import slider_white from '../../images/slider_round.png'
function FilterCheckbox () {
    return (
        <div className="short-movies">
            <button type="submit" className="short-movies__slider"><img className="short-movies__slider-white" src={slider_white}/></button>
            <p className="short-movies__text">Короткометражки</p>
            
        </div>
    )
}

export default FilterCheckbox;