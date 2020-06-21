import React from 'react';
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = ({ header, loading, children }) => {

  const renderElements = () => {
    const gridElements = children.map( (element, i) => (
      <div key={i} className="rmdb-grid-element m">
        {element}
      </div>
    ))
    return gridElements;
  }

  return (
    <div className="rmdb-grid container">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="rmdb-grid-content mb-5 container">
         {renderElements()}
      </div>
    </div>
  )
}

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default FourColGrid;