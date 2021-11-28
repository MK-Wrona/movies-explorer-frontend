import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SearchForm.css";
import useFormValidation from "../../hooks/useFormValidation";


function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading }) {
    const { values, errors, isValid, handleChange } =
        useFormValidation({});

    const [keyword, setKeyword] = useState("");
    const [isShortMovies, setIsShortMovies] = useState(false);
    const [isSubmitted, setisSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

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
        if (keyword === "") {
            console.log(keyword)
            setErrorMessage("Нужно ввести ключевое слово")
            setisSubmitted(true)
          } else {
            handleSearch(keyword);
            setPreloader(true);
            setErrorMessage("")
        } 
            
          }

        
    return (
        
            <div className="movies__search">
                <form className="search__form" onSubmit={handleSubmit} noValidate isSubmitted={isSubmitted} >
                    
                    <input
                        className="search__form-text"
                        name="keyword"
                        type="text"
                        placeholder="Фильм"
                        minLength="1"
                        maxLength="200"
                        autoComplete="off"
                        value={values.keyword || ""}
                        onChange={handleKeyword}
                        disabled={isLoading}
                    />
                    
                    
                    <button
                        className="search__button"
                        
                    >Найти</button>
                </form>
                <span className="search-form__caption">{errorMessage}</span>
                

                <ToggleSwitch onCheckboxToggle={onCheckboxToggle} />
            </div>
        
    );
}

export default SearchForm;