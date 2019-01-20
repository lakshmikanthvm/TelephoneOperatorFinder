import React, {Component} from 'react';
import {Operators} from './oprators';
import SearchBox from './Components/SearchBox';
import SearchResult from './Components/SearchResult';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operators: [],
            mobileNumber: '',
            selectedOperator: {},
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        const operators = [...Operators];
        /*Sorting the number prefix added in the operators file with its length in Descending order  */
        const sortedOperators = operators.map((operator) => {
            operator.rates.sort((a, b) => b.numberPrefix.length - a.numberPrefix.length)
            return operator;
        });
        this.setState({ operators: sortedOperators });
    }

    /*
    * function to save the dialed telephone number in state
    */
    onChangeHandler = (event) => {
        this.setState({ [event.target.id] : event.target.value, error: false, loading: false });
    }

    /*
    * function to find the cheapest operator for the dialed number
    */
    getMatchingOperators = () => {        
        this.setState({ error: false, loading: true });
        const mobileNumber = this.state.mobileNumber;
        const operators = [...this.state.operators];
        
        /*finding the longest matching prefix number with dialed telephone number */
        const matchingOperators = operators.map((operator) => {
            const finded = operator.rates.find((rate) => mobileNumber.startsWith(rate.numberPrefix));
            if(finded) {
                finded.operator = operator.name;
                return finded;
            } 
            return null;
        }).filter((operator) => operator); /* removes the null from the matching operators array */

        if(matchingOperators.length > 0) {
            const selectedOperator = this.getCheapOperator(matchingOperators);
            this.setState({ selectedOperator: selectedOperator, loading: false });
        } else {
            this.setState({ error: true, loading: false });
        }
    }

    /*
    * function to find the minimum value
    */
    getCheapOperator = (data) => {
        return data.reduce((min, currentOperator) => currentOperator.cost < min.cost ? currentOperator : min, data[0]);
    }
    
    render() {
        return (
            <div className="container">
                <SearchBox 
                    mobileNumber={this.state.mobileNumber}
                    onChangeHandler={this.onChangeHandler}
                    getMatchingOperators={this.getMatchingOperators}
                />
                {(this.state.loading) ? "Loading..." : 
                    ((this.state.selectedOperator && Object.keys(this.state.selectedOperator).length > 0) || this.state.error) ?
                        <SearchResult {...this.state.selectedOperator} error={this.state.error} />
                    : null 
                }
            </div>
        );
    }
}

export default App;