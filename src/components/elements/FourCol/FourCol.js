import React from 'react';
 //import PropTypes from 'prop-types';
import './FourCol.css';

const FourCol = ({ header, loading, children }) => {

  const renderElements = () => {
    const gridElements = children.map( (element, i) => (
      <div key={i} className="rmdb-grid-element" className="card bg-primary">
        {element}
      </div>
    ))
    return gridElements;
  }

  return (
    <div className="rmdb-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="rmdb-grid-content">
         {renderElements()}
      </div>
    </div>
  )
}
export default FourCol;