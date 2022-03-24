import React, { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SearchForm.css";
import useFormValidation from "../../hooks/useFormValidation";


function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading, toggleSubmit, isSubmitted, unToggleSubmit }) {
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
        if (keyword === "") {
            console.log(keyword)
            
            toggleSubmit()
          } else {
            handleSearch(keyword);
            setPreloader(true);
            
            unToggleSubmit()
        } 
            
          }

        
    return (
        
            <div className="movies__search">
                <form className="search__form" onSubmit={handleSubmit} noValidate  >
                    
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
                

                <ToggleSwitch onCheckboxToggle={onCheckboxToggle} />
            </div>
        
    );
}

export default SearchForm;