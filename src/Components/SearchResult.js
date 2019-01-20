import React from 'react';

const SearchResult = (props) => {
    return (
        <div className="search-result">
            {(props.error) ? 
                <div className="error">Entered Telephone Number cannot Dial using any operators</div> 
            :
                <React.Fragment>
                    <div className="title">Cheapest Operator Details</div>
                    <div className="name">Operator Name : {props.operator}</div>
                    <div className="cost">Cost: $ {props.cost}/min </div>
                </React.Fragment>
            }
        </div>)
}

export default SearchResult;