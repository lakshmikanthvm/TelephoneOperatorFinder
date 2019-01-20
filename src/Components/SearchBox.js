import React from 'react';

const SearchBox = (props) => (
    <div className="search-box">
        <input 
            type="number" 
            name="mobileNumber" 
            id="mobileNumber"
            className="search-input" 
            value={props.mobileNumber} 
            onChange={props.onChangeHandler}
            placeholder="Enter Telephone Number" 
        />
        <button 
            type="button" 
            onClick={props.getMatchingOperators}
        >Search</button>
    </div>
);

export default SearchBox;