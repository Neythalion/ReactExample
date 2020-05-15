import React, { Component } from 'react';

import './FilterPanel.css';

class FilterPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleClick = () => {
        const { onFiltration } = this.props;
        const { inputValue } = this.state;

        onFiltration && onFiltration(inputValue);
    };

    render() {
        const { inputValue } = this.state;

        return (<div className='filter-panel'>
            <input value={inputValue} onChange={this.handleInputChange}/>
            <button onClick={this.handleClick}>Filter</button>
        </div>);
    }
}

export default FilterPanel;
