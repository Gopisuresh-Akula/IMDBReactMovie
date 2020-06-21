import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  }
  // Must have this here so we can reset it
  timeout = null;

  doSearch = (event) => {
    // ES6 Destructuring prop
    const { callback } = this.props;

    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout( () => {
      callback(this.state.value);
    }, 500);
  }

  render () {
    // ES6 Destructuring state
    const { value } = this.state;

    return (
      
        <div className = "rmdb-searchbar-content mt-1">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x"/>
              
          <input id="search" name="search" type="text" className="text-primary"
            placeholder="Search"
            onChange={this.doSearch}
            value={value} />
        </div>
      
    )
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
}

export default SearchBar;