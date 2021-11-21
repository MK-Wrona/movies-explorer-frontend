import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SearchForm.css";
import useFormValidation from "../../hooks/useFormValidation";


function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading }) {
    const { values, errors, isValid, handleChange } =
        useFormValidation({});

    const [keyword, setKeyword] = useState("");
    const [isShortMovies, setIsShortMovies] = useState(false);

    function onCheckboxToggle(checked) {
        setIsShortMovies(checked);
        setIsChecked(!isShortMovies);
    }

    function handleKeyword(evt) {
        handleChange(evt);
        setKeyword(evt.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(keyword);
        setPreloader(true);
    }

    return (
        
            <div className="movies__search">
                <form className="search__form" onSubmit={handleSubmit} required>
                    

                    <input
                        className="search__form-text"
                        name="keyword"
                        type="text"
                        placeholder="Фильм"
                        minLength="1"
                        maxLength="200"
                        required
                        autoComplete="off"
                        value={values.keyword || ""}
                        onChange={handleKeyword}
                        disabled={isLoading}
                    />
                    
                    
                    <button
                        className={`search__button ${
                            !isValid && "search__button_disable"
                        }`}
                        disabled={!isValid}
                    >Найти</button>
                </form>
                

                <ToggleSwitch onCheckboxToggle={onCheckboxToggle} />
            </div>
        
    );
}

export default SearchForm;