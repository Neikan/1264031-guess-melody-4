import React from "react";
import PropTypes from "prop-types";


const Errors = (props) => {
  const {count} = props;

  const errors = new Array(count).fill(``);

  return (
    <div className="game__mistakes">
      {errors.map((error, index) => <div key={`error-${index}`} className="wrong" />)}
    </div>
  );
};

Errors.propTypes = {
  count: PropTypes.number.isRequired,
};


export default Errors;
