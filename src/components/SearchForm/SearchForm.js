import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <div className="movies__search">
            <fieldset className="search__form">
                <input type="text" id="inputName" minLength="2" maxLength="150" placeholder="Фильм" className="search__form-text" />
                <button type="submit" className="search__form_button" >Поиск</button>
            </fieldset>

            <FilterCheckbox />

        </div>
    )
}

export default SearchForm;