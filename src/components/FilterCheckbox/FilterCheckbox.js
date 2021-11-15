import React from 'react';
import './FilterCheckbox.css'
import slider_white from '../../images/slider_round.png'
function FilterCheckbox () {
    const [isSliderOn, setSliderOn] = React.useState(false);
const toggleClass = () =>{
    setSliderOn(!isSliderOn)
} 


    return (
        <div className="short-movies">
            <button type="submit"  className={isSliderOn ? "short-movies__slider_on" : "short-movies__slider_off"} onClick={toggleClass}><img src={slider_white}/></button>
            <p className="short-movies__text">Короткометражки</p>
            
        </div>
    )
}

export default FilterCheckbox;